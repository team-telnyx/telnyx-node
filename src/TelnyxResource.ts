import * as http from 'http';
import * as https from 'https';
import * as path from 'path';
import {Buffer} from 'safe-buffer';

import * as utils from './utils.js';
import * as TelnyxError from './Error.js';
import TelnyxMethod from './TelnyxMethod.js';
import * as basicMethods from './TelnyxMethod.basic.js';
import {
  MethodSpec,
  ReqHandler,
  ReqTimeoutHandler,
  RequestCallback,
  RequestData,
  RequestDataProcessor,
  RequestHeaders,
  RequestOptions,
  ResponsePayload,
  TelnyxIncomingHttpHeaders,
  TelnyxObject,
  TelnyxResourceObject,
} from './Types.js';

const hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Telnyx Resource Sub-Classes
TelnyxResource.extend = utils.protoExtend;
// Expose method-creator & prepared (basic) methods
TelnyxResource.method = TelnyxMethod;
TelnyxResource.BASIC_METHODS = basicMethods;

TelnyxResource.MAX_BUFFERED_REQUEST_METRICS = 100;

/**
 * Encapsulates request logic for a Telnyx Resource
 */
function TelnyxResource(
  this: TelnyxResourceObject,
  telnyx: TelnyxObject,
  urlData?: RequestData,
): void {
  this._telnyx = telnyx;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(
    // @ts-expect-error changing type of basePath
    this.basePath || telnyx.getApiField('basePath'),
  );
  // @ts-expect-error changing type of path
  this.resourcePath = this.path;
  // @ts-expect-error changing type of path
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach((methodName) => {
      // @ts-expect-error TODO: cast `methodName` to `BASIC_METHODS` values
      this[methodName] = TelnyxResource.BASIC_METHODS[methodName];
    }, this);
  }

  if (this.nestedResources) {
    for (const resource in this.nestedResources) {
      // @ts-expect-error TODO: cast `resource` to  `nestedResources` values
      this[utils.pascalToCamelCase(resource)] = new this.nestedResources[
        resource
      ](telnyx);
    }
  }

  if (this.instanceMethods) {
    Object.assign(this, this.instanceMethods);
  }

  this.initialize.apply(this, [telnyx, urlData]);
}

TelnyxResource.prototype = {
  _telnyx: null as TelnyxObject | null,
  _urlData: null as RequestData | null,
  // @ts-expect-error the type of path changes in ctor
  path: '' as UrlInterpolator,
  resourcePath: '',

  // Properties are set in the constructor above
  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null!,
  includeBasic: null!,
  nestedResources: null!,
  instanceMethods: null!,

  initialize: function () {},

  // Function to override the default data processor. This allows full control
  // over how a TelnyxResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null as RequestDataProcessor | null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(
    commandPath: string | ((urlData: Record<string, unknown>) => string),
    urlData: Record<string, unknown>,
  ): string {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath == 'function' ? commandPath(urlData) : commandPath,
      )
      .replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols: string | null): string {
    return (
      '/' +
      path.join(this.resourcePath, pathWithSymbols || '').replace(/\\/g, '/')
    ); // ugly workaround for Windows
  },

  createUrlData: function () {
    const urlData: RequestData = {};
    // Merge in baseData
    for (const i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  _timeoutHandler: function (
    timeout: number,
    req: ReqTimeoutHandler,
    callback: RequestCallback,
  ) {
    return () => {
      const timeoutErr = new Error('ETIMEDOUT');

      req._isAborted = true;
      req.abort();

      callback.call(
        this,
        new TelnyxError.TelnyxConnectionError({
          message:
            'Request aborted due to timeout being reached (' + timeout + 'ms)',
          detail: timeoutErr,
        }),
        null,
      );
    };
  },

  _responseHandler(req: ReqHandler, callback: RequestCallback) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return function (res: ResponsePayload) {
      let response = '';

      res.setEncoding('utf8');
      res.on('data', function (chunk: string) {
        response += chunk;
      });
      res.on('end', function () {
        const headers: TelnyxIncomingHttpHeaders = res.headers || {};
        // NOTE: Telnyx responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'] || headers['x-request-id'] || '';

        const requestDurationMs = Date.now() - req._requestStart;

        const responseEvent = utils.removeEmpty({
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
        });

        self._telnyx._emitter.emit('response', responseEvent);

        try {
          const responseBody = utils.tryParseJSON(response);

          if (responseBody.errors) {
            const error = {} as TelnyxError.TelnyxRawError;

            error.errors =
              responseBody.errors as TelnyxError.TelnyxRawError['errors'];

            error.headers = headers;
            error.statusCode = res.statusCode;
            error.requestId = res.requestId as string;

            const err = self._buildError(error, res.statusCode);

            return callback.call(self, err, null);
          }
        } catch (e) {
          return callback.call(
            self,
            new TelnyxError.TelnyxAPIError({
              message: 'Invalid JSON received from the Telnyx API',
              responseBody: response,
              detail: e,
              requestId: res.requestId as string,
            }),
            null,
          );
        }

        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        // parsed json and found no errors so this is a valid response payload
        callback.call(self, null, response as unknown as ResponsePayload);
      });
    };
  },

  _buildError: function (
    error: TelnyxError.TelnyxRawError,
    statusCode: number | undefined,
  ) {
    let err;
    switch (statusCode) {
      case 400:
        err = new TelnyxError.TelnyxInvalidRequestError(error);
        break;
      case 401:
        err = new TelnyxError.TelnyxAuthenticationError(error);
        break;
      case 403:
        err = new TelnyxError.TelnyxPermissionError(error);
        break;
      case 404:
        err = new TelnyxError.TelnyxResourceNotFoundError(error);
        break;
      case 405:
        err = new TelnyxError.TelnyxMethodNotSupportedError(error);
        break;
      case 408:
        err = new TelnyxError.TelnyxTimeoutError(error);
        break;
      case 415:
        err = new TelnyxError.TelnyxUnsupportedMediaTypeError(error);
        break;
      case 422:
        err = new TelnyxError.TelnyxInvalidParametersError(error);
        break;
      case 429:
        err = new TelnyxError.TelnyxRateLimitError(error);
        break;
      case 500:
        err = new TelnyxError.TelnyxAPIError(error);
        break;
      case 503:
        err = new TelnyxError.TelnyxServiceUnavailableError(error);
        break;
      default:
        err = new TelnyxError.TelnyxAPIError(error);
    }

    return err;
  },

  _generateConnectionErrorMessage(requestRetries: number): string {
    return (
      'An error occurred with our connection to Telnyx.' +
      (requestRetries > 0
        ? ' Request was retried ' + requestRetries + ' times.'
        : '')
    );
  },

  _errorHandler: function (
    req: ReqTimeoutHandler,
    requestRetries: number,
    callback: RequestCallback,
  ) {
    return (error: Error) => {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        this,
        new TelnyxError.TelnyxConnectionError({
          message: this._generateConnectionErrorMessage(requestRetries),
          responseBody: error,
        }),
        null,
      );
    };
  },

  _shouldRetry: function (res: ResponsePayload, numRetries: number) {
    // Do not retry if we are out of retries.
    if (numRetries >= this._telnyx.getMaxNetworkRetries()) {
      return false;
    }

    // Retry on connection error.
    if (!res) {
      return true;
    }

    // Retry on conflict and availability errors.
    if (res.statusCode === 409 || res.statusCode === 503) {
      return true;
    }

    // Retry on 5xx's, except POST's as that may not be safe.
    if (
      res.statusCode &&
      res.statusCode >= 500 &&
      res.req._requestEvent?.method !== 'POST'
    ) {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS: function (numRetries) {
    const initialNetworkRetryDelay = this._telnyx.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._telnyx.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    let sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay,
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    return sleepSeconds * 1000;
  },

  _defaultHeaders: function (
    auth: RequestOptions['auth'],
    requestData: string,
  ): RequestHeaders {
    let userAgentString =
      'Telnyx/v2 NodeBindings/' + this._telnyx.getConstant('PACKAGE_VERSION');

    if (this._telnyx._appInfo) {
      userAgentString += ' ' + this._telnyx.getAppInfoAsString();
    }

    const headers = {
      // Use specified auth token or use default from this telnyx instance:
      Authorization: auth
        ? 'Bearer ' + auth
        : this._telnyx.getApiField('auth')!,
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestData),
      'User-Agent': userAgentString,
    };

    return headers;
  },

  _request: function (
    method: MethodSpec['method'],
    _host: MethodSpec['host'] | null,
    path: MethodSpec['path'],
    data: RequestData,
    auth: RequestOptions['auth'],
    options: {headers?: RequestOptions['headers']},
    callback: (err: unknown, response?: ResponsePayload | null) => void,
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    let requestData: string;

    function makeRequestWithData(
      error: Error | null,
      data: Uint8Array | string | null,
    ) {
      let headers: RequestHeaders = {};

      if (error) {
        return callback(error);
      }

      if (method == 'GET') {
        if (data != '' && data != null) {
          path = path + '?' + data;
          requestData = '';
        } else {
          requestData = '';
        }
      } else if (utils.isJsonString(data?.toString() || '')) {
        requestData = data as string;
      } else if (data != '' && data != null) {
        path = path + '?' + encodeURI(data.toString());
        requestData = '';
      } else {
        requestData = '';
      }

      headers = self._defaultHeaders(auth, requestData);
      self._telnyx.getClientUserAgent(function (cua) {
        headers['X-Telnyx-Client-User-Agent'] = cua;

        if (options.headers) {
          Object.assign(headers, options.headers);
        }

        makeRequest(headers);
      });
    }

    if (self.requestDataProcessor) {
      self.requestDataProcessor(
        method,
        data,
        options.headers,
        makeRequestWithData,
      );
    } else if (method == 'GET') {
      makeRequestWithData(null, data ? utils.stringifyRequestData(data) : '');
    } else {
      let parameters;
      if (data) {
        if (data.filter && Object.keys(data.filter).length) {
          parameters = utils.stringifyRequestData(data);
        } else {
          parameters = JSON.stringify(data);
          if (parameters === '{}') {
            parameters = '';
          }
        }
      } else {
        parameters = '';
      }
      makeRequestWithData(null, parameters);
    }

    function retryRequest(
      requestFn: (headers: RequestHeaders, numRetries?: number) => void,
      headers: RequestHeaders,
      requestRetries: number,
    ) {
      requestRetries += 1;

      return setTimeout(
        requestFn,
        self._getSleepTimeInMS(requestRetries),
        headers,
        requestRetries,
      );
    }

    function makeRequest(headers: RequestHeaders, numRetries?: number): void {
      const timeout = self._telnyx.getApiField('timeout');
      const isInsecureConnection =
        self._telnyx.getApiField('protocol') == 'http';
      const agent = isInsecureConnection
        ? self._telnyx.getApiField('http_agent')
        : self._telnyx.getApiField('https_agent');

      if (headers['Content-Length'] === 0) {
        delete headers['Content-Length'];
        delete headers['Content-Type'];
      }

      const req: ReqTimeoutHandler = (
        isInsecureConnection ? http : https
      ).request({
        host: self._telnyx.getApiField('host') || '127.0.0.1',
        port: self._telnyx.getApiField('port'),
        path: path,
        method: method,
        agent: agent,
        headers: headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const requestEvent = utils.removeEmpty({
        method: method,
        path: path,
      });

      const requestRetries = numRetries || 0;

      req._requestEvent = requestEvent;

      req._requestStart = Date.now();

      self._telnyx._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));

      req.on('response', function (res: ResponsePayload) {
        if (self._shouldRetry(res, requestRetries)) {
          return retryRequest(makeRequest, headers, requestRetries);
        } else {
          return self._responseHandler(req, callback)(res);
        }
      });

      req.on('error', function (error) {
        if (self._shouldRetry(null, requestRetries)) {
          return retryRequest(makeRequest, headers, requestRetries);
        } else {
          return self._errorHandler(req, requestRetries, callback)(error);
        }
      });

      req.on('socket', function (socket) {
        if (socket.connecting) {
          socket.on(
            isInsecureConnection ? 'connect' : 'secureConnect',
            function () {
              // Send payload; we're safe:
              req.write(requestData);
              req.end();
            },
          );
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    }
  },
} as TelnyxResourceObject;

export default TelnyxResource;
