import {EventEmitter} from 'events';
import {
  ClientRequest,
  Agent as HttpAgent,
  IncomingHttpHeaders,
  IncomingMessage,
} from 'http';
import {Agent as HttpsAgent} from 'https';
import {TelnyxRawError} from './Error.ts';

export type AppInfo = {name: string; version: string; url: string} & Record<
  string,
  unknown
>;
export type BufferedFile = {
  name: string;
  type: string;
  file: {data: Uint8Array};
};

export type TelnyxIncomingHttpHeaders = IncomingHttpHeaders & {
  'request-id'?: string | undefined;
  'x-request-id'?: string | undefined;
};
/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */
export interface PlatformFunctions {
  /**
   * Checks if the request data is a stream. If so, read the entire stream
   * to a buffer and return the buffer.
   */
  tryBufferData(
    data: MultipartRequestData,
  ): Promise<RequestData | BufferedFile>;
}

export type StreamingFile = {
  name: string;
  type: string;
  file: {data: EventEmitter};
};

export type TelnyxObject = {
  _api: {
    auth: string | null;
    host: string;
    port: string | number;
    protocol: string;
    basePath: string;
    timeout: number;
    maxNetworkRetries: number;
    http_agent: HttpAgent;
    https_agent: HttpsAgent;
    dev: boolean;
  };
  _emitter: EventEmitter;
  _platformFunctions: PlatformFunctions;
  _prevRequestMetrics: Array<{
    request_id: string;
  }>;
  _prepResources: () => void;
  _instantiateResource: (
    resource: string,
    self: TelnyxObject,
  ) => Record<string, unknown>;
  _createConstructor: (
    resource: string,
    self: TelnyxObject,
  ) => (args: Record<string, unknown>) => Record<string, unknown>;
  _setApiKey: (apiKey: string) => void;
  _setAppInfo: (appInfo: AppInfo) => void;
  getClientUserAgentSeeded: (
    seed: Record<string, string | boolean | null>,
    callback: (userAgent: string) => void,
  ) => void;
  getClientUserAgent: (callback: (clientUserAgent: string) => void) => void;
  getAppInfoAsString: () => string;
  getInitialNetworkRetryDelay: () => number;
  getMaxNetworkRetryDelay: () => number;
  getMaxNetworkRetries: () => number;
  getConstant: <T = string>(name: string) => T;
  _setApiField: <K extends keyof TelnyxObject['_api']>(
    name: K,
    value: TelnyxObject['_api'][K],
  ) => void;
  getApiField: <K extends keyof TelnyxObject['_api']>(
    key: K,
  ) => TelnyxObject['_api'][K];
  setPort: (port: string) => void;
  setProtocol: (protocol: string) => void;
  _appInfo: AppInfo;
  _clientId?: string;
  on: unknown;
  off: unknown;
  once: unknown;
  VERSION: string;
  errors: unknown;
  webhooks: unknown;
};

export type RequestHeaders = Record<string, string | number | string[]>;

export type TypedData = {
  name: string;
  data: string | Uint8Array;
  type: string;
};

export type RequestArgs = Array<unknown>;
type RequestCallback = (
  this: TelnyxResourceObject | void,
  error: Error | null,
  response?: ResponsePayload | null,
) => RequestCallbackReturn;
type RequestCallbackReturn = unknown;
export type RequestData = Record<string, unknown>;
export type RequestOptions = {
  auth: string | null;
  headers: RequestHeaders;
};
export type ResponsePayload = IncomingMessage & {
  [key: string]: unknown;
  requestId: string;
} & {req: ReqTimeoutHandler};
export type ResponseHeaderValue = string | string[];
export type ResponseHeaders = Record<string, ResponseHeaderValue>;
type PromiseCache<T> = {
  currentPromise: Promise<T> | undefined | null;
};

export type MethodSpec = {
  method: string;
  methodType?: string;
  urlParams?: Array<string>;
  path?: string;
  fullPath?: string;
  encode?: (data: RequestData) => RequestData;
  validator?: (data: RequestData, options: {headers: RequestHeaders}) => void;
  headers?: Record<string, string>;
  streaming?: boolean;
  host?: string;
  transformResponseData?: (
    response: ResponsePayload,
    telnyxObject: TelnyxObject,
  ) => unknown;
  usage?: Array<string>;
  paramsNames?: Array<string>;
  paramsValues?: Array<string>;
};

export type MultipartRequestData = RequestData | StreamingFile | BufferedFile;
export type TelnyxResourceObject = {
  _telnyx: TelnyxObject;
  _urlData: RequestData;
  _request: (
    requestMethod: MethodSpec['method'],
    host: MethodSpec['host'] | null,
    requestPath: MethodSpec['path'],
    requestData: RequestData,
    auth: RequestOptions['auth'],
    options: {headers?: RequestOptions['headers']},
    callback: (err: unknown, response: ResponsePayload | null) => void,
  ) => void;
  _buildError: (error: TelnyxRawError, statusCode: number | undefined) => Error;
  _generateConnectionErrorMessage: (
    requestRetries: number,
  ) => string | undefined;
  _shouldRetry: (res: ResponsePayload | null, numRetries: number) => boolean;
  _getSleepTimeInMS: (numRetries: number) => number;
  _defaultHeaders: (
    auth: RequestOptions['auth'],
    requestData: string,
  ) => RequestHeaders;
  _timeoutHandler: (
    timeout: number,
    req: ReqTimeoutHandler,
    callback: RequestCallback,
  ) => () => void;
  _responseHandler: (
    req: ReqTimeoutHandler,
    callback: RequestCallback,
  ) => (res: ResponsePayload) => void;
  _errorHandler: (
    req: ReqTimeoutHandler,
    requestRetries: number,
    callback: RequestCallback,
  ) => (error: Error) => void;
  includeBasic: Array<string>;
  nestedResources: {
    [key: string]: new (...args: unknown[]) => TelnyxResourceObject;
  };
  instanceMethods: {
    [key: string]: (...args: unknown[]) => Promise<unknown>;
  };
  basePath: UrlInterpolator;
  path: UrlInterpolator;
  resourcePath: string;
  createResourcePathWithSymbols: (path: string | null | undefined) => string;
  createFullPath: (
    interpolator: string | UrlInterpolator,
    urlData: RequestData,
  ) => string;
  createUrlData: () => RequestData;
  initialize: (...args: Array<unknown>) => void;
  requestDataProcessor: RequestDataProcessor | null;
};

export type ReqHandler = ClientRequest & {
  _requestStart: number;
  _requestEvent: Record<string, unknown>;
};

export type ReqTimeoutHandler = ClientRequest & {
  _isAborted?: boolean;
  _requestStart?: number;
  _requestEvent?: Record<string, unknown>;
};

export type RequestDataProcessor = (
  method: string,
  data: RequestData,
  headers: RequestHeaders | undefined,
  prepareAndMakeRequest: (
    error: Error | null,
    data: Uint8Array | string | null,
  ) => void,
) => void;

export type UrlInterpolator = (params: Record<string, unknown>) => string;
