'use strict';

var http = require('http');
var https = require('https');
var path = require('path');

var utils = require('./utils');
var Error = require('./Error');
var Buffer = require('safe-buffer').Buffer;

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Telnyx Resource Sub-Classes
TelnyxResource.extend = utils.protoExtend;
// Expose method-creator & prepared (basic) methods
TelnyxResource.method = require('./TelnyxMethod');
TelnyxResource.BASIC_METHODS = require('./TelnyxMethod.basic');

TelnyxResource.MAX_BUFFERED_REQUEST_METRICS = 100;

/**
 * Encapsulates request logic for a Telnyx Resource
 */
function TelnyxResource(telnyx, urlData) {
  this._telnyx = telnyx;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(
    this.basePath || telnyx.getApiField('basePath')
  );
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function (methodName) {
      this[methodName] = TelnyxResource.BASIC_METHODS[methodName];
    }, this);
  }

  if (this.nestedResources) {
    for (var resource in this.nestedResources) {
      this[utils.pascalToCamelCase(resource)] = new this.nestedResources[
        resource
      ](telnyx);
    }
  }

  if (this.instanceMethods) {
    Object.assign(this, this.instanceMethods);
  }

  this.initialize.apply(this, arguments);
}

TelnyxResource.prototype = {
  path: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,

  initialize: function () {},

  // Function to override the default data processor. This allows full control
  // over how a TelnyxResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath: function (commandPath, urlData) {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath == 'function' ? commandPath(urlData) : commandPath
      )
      .replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols: function (pathWithSymbols) {
    return (
      '/' +
      path.join(this.resourcePath, pathWithSymbols || '').replace(/\\/g, '/')
    ); // ugly workaround for Windows
  },

  createUrlData: function () {
    var urlData = {};
    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  _timeoutHandler: function (timeout, req, callback) {
    var self = this;
    return function () {
      var timeoutErr = new Error('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        self,
        new Error.TelnyxConnectionError({
          message:
            'Request aborted due to timeout being reached (' + timeout + 'ms)',
          detail: timeoutErr,
        }),
        null
      );
    };
  },

  _responseHandler: function (req, callback) {
    var self = this;
    return function (res) {
      var response = '';

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        response += chunk;
      });
      res.on('end', function () {
        var headers = res.headers || {};
        // NOTE: Telnyx responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'] || headers['x-request-id'] || '';

        var requestDurationMs = Date.now() - req._requestStart;

        var responseEvent = utils.removeEmpty({
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
        });

        self._telnyx._emitter.emit('response', responseEvent);

        try {
          response = utils.tryParseJSON(response);

          if (response.errors) {
            var error = {};

            error.errors = response.errors;

            error.headers = headers;
            error.statusCode = res.statusCode;
            error.requestId = res.requestId;

            var err = self._buildError(error, res.statusCode);

            return callback.call(self, err, null);
          }
        } catch (e) {
          return callback.call(
            self,
            new Error.TelnyxAPIError({
              message: 'Invalid JSON received from the Telnyx API',
              response: response,
              exception: e,
              requestId: res.requestId,
            }),
            null
          );
        }

        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        callback.call(self, null, response);
      });
    };
  },

  _buildError: function (error, statusCode) {
    var err;
    switch (statusCode) {
    case 400:
      err = new Error.TelnyxInvalidRequestError(error);
      break;
    case 401:
      err = new Error.TelnyxAuthenticationError(error);
      break;
    case 403:
      err = new Error.TelnyxPermissionError(error);
      break;
    case 404:
      err = new Error.TelnyxResourceNotFoundError(error);
      break;
    case 405:
      err = new Error.TelnyxMethodNotSupportedError(error);
      break;
    case 408:
      err = new Error.TelnyxTimeoutError(error);
      break;
    case 415:
      err = new Error.TelnyxUnsupportedMediaTypeError(error);
      break;
    case 422:
      err = new Error.TelnyxInvalidParametersError(error);
      break;
    case 429:
      err = new Error.TelnyxRateLimitError(error);
      break;
    case 500:
      err = new Error.TelnyxAPIError(error);
      break;
    case 503:
      err = new Error.TelnyxServiceUnavailableError(error);
      break;
    default:
      err = new Error.TelnyxAPIError(error);
    }

    return err;
  },

  _generateConnectionErrorMessage: function (requestRetries) {
    return (
      'An error occurred with our connection to Telnyx.' +
      (requestRetries > 0
        ? ' Request was retried ' + requestRetries + ' times.'
        : '')
    );
  },

  _errorHandler: function (req, requestRetries, callback) {
    var self = this;
    return function (error) {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        self,
        new Error.TelnyxConnectionError({
          message: self._generateConnectionErrorMessage(requestRetries),
          responseBody: error,
        }),
        null
      );
    };
  },

  _shouldRetry: function (res, numRetries) {
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
    if (res.statusCode >= 500 && res.req._requestEvent.method !== 'POST') {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS: function (numRetries) {
    var initialNetworkRetryDelay = this._telnyx.getInitialNetworkRetryDelay();
    var maxNetworkRetryDelay = this._telnyx.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    var sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    return sleepSeconds * 1000;
  },

  _defaultHeaders: function (auth, requestData) {
    var userAgentString =
      'Telnyx/v1 NodeBindings/' + this._telnyx.getConstant('PACKAGE_VERSION');

    if (this._telnyx._appInfo) {
      userAgentString += ' ' + this._telnyx.getAppInfoAsString();
    }

    var headers = {
      // Use specified auth token or use default from this telnyx instance:
      Authorization: auth ? 'Bearer ' + auth : this._telnyx.getApiField('auth'),
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestData),
      'User-Agent': userAgentString,
    };

    return headers;
  },

  _request: function (method, host, path, data, auth, options, callback) {
    var self = this;
    var requestData;

    function makeRequestWithData(error, data) {
      var headers;

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
      } else if (utils.isJsonString(data)) {
        requestData = data;
      } else if (data != '' && data != null) {
        path = path + '?' + encodeURI(data);
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
        makeRequestWithData
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

    function retryRequest(requestFn, headers, requestRetries) {
      requestRetries += 1;

      return setTimeout(
        requestFn,
        self._getSleepTimeInMS(requestRetries),
        headers,
        requestRetries
      );
    }

    function makeRequest(headers, numRetries) {
      var timeout = self._telnyx.getApiField('timeout');
      var isInsecureConnection = self._telnyx.getApiField('protocol') == 'http';
      var agent = isInsecureConnection
        ? self._telnyx.getApiField('http_agent')
        : self._telnyx.getApiField('https_agent');

      if (headers['Content-Length'] === 0) {
        delete headers['Content-Length'];
        delete headers['Content-Type'];
      }

      var req = (isInsecureConnection ? http : https).request({
        host: self._telnyx.getApiField('host') || '127.0.0.1',
        port: self._telnyx.getApiField('port'),
        path: path,
        method: method,
        agent: agent,
        headers: headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      var requestEvent = utils.removeEmpty({
        method: method,
        path: path,
      });

      var requestRetries = numRetries || 0;

      req._requestEvent = requestEvent;

      req._requestStart = Date.now();

      self._telnyx._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));

      req.on('response', function (res) {
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
            }
          );
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    }
  },
};

module.exports = TelnyxResource;
