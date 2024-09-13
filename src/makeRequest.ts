import {
  MethodSpec,
  RequestArgs,
  RequestData,
  ResponsePayload,
  TelnyxResourceObject,
} from './Types.js';
import * as utils from './utils.js';
const OPTIONAL_REGEX = /^optional!/;

function _getRequestOpts(
  self: TelnyxResourceObject,
  requestArgs: RequestArgs,
  spec: MethodSpec,
  overrideData: RequestData,
) {
  // Extract spec values with defaults.
  const commandPath =
    typeof spec.path == 'function'
      ? spec.path
      : utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode =
    spec.encode ||
    function (data) {
      return data;
    };
  const host = spec.host;

  // Don't mutate args externally.
  const args = [].slice.call(requestArgs);

  // Generate and validate url params.
  const urlData = self.createUrlData();
  for (let i = 0, l = urlParams.length; i < l; ++i) {
    let path;

    // Note that we shift the args array after every iteration so this just
    // grabs the "next" argument for use as a URL parameter.
    const arg = args[0];

    let param = urlParams[i];

    const isOptional = OPTIONAL_REGEX.test(param);
    param = param.replace(OPTIONAL_REGEX, '');

    if (param == 'id' && typeof arg !== 'string') {
      path = self.createResourcePathWithSymbols(spec.path);
      throw new Error(
        'Telnyx: "id" must be a string, but got: ' +
          typeof arg +
          ' (on API request to `' +
          requestMethod +
          ' ' +
          path +
          '`)',
      );
    }

    if (!arg) {
      if (isOptional) {
        urlData[param] = '';
        continue;
      }

      path = self.createResourcePathWithSymbols(spec.path);
      throw new Error(
        'Telnyx: Argument "' +
          urlParams[i] +
          '" required, but got: ' +
          arg +
          ' (on API request to `' +
          requestMethod +
          ' ' +
          path +
          '`)',
      );
    }

    urlData[param] = args.shift();
  }

  // Pull request data and options (headers, auth) from args.
  const dataFromArgs = utils.getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = utils.getOptionsFromArgs(args);

  // Validate that there are no more args.
  if (args.length) {
    const path = self.createResourcePathWithSymbols(spec.path);
    throw new Error(
      'Telnyx: Unknown arguments (' +
        args +
        '). Did you mean to pass an options ' +
        'object? (on API request to ' +
        requestMethod +
        ' `' +
        path +
        '`)',
    );
  }

  const requestPath = self.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);

  if (spec.validator) {
    spec.validator(data, {headers: headers});
  }

  return {
    requestMethod: requestMethod,
    requestPath: requestPath,
    data: data,
    auth: options.auth,
    headers: headers,
    host: host,
  };
}

function makeRequest(
  self: TelnyxResourceObject,
  requestArgs: RequestArgs,
  spec: MethodSpec,
  overrideData: RequestData,
) {
  return new Promise(function (resolve, reject) {
    let opts;
    try {
      opts = _getRequestOpts(self, requestArgs, spec, overrideData);
    } catch (err) {
      reject(err);
      return;
    }

    function requestCallback(
      err: unknown,
      response: ResponsePayload | null,
    ): void {
      if (err) {
        reject(err);
      } else {
        resolve(
          spec.transformResponseData && response?.data
            ? spec.transformResponseData(response, self._telnyx)
            : response,
        );
      }
    }

    self._request(
      opts.requestMethod,
      opts.host,
      opts.requestPath,
      opts.data,
      opts.auth,
      {headers: opts.headers},
      requestCallback,
    );
  });
}

export default makeRequest;
