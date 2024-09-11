import {EventEmitter} from 'events';
import {Agent as HttpAgent} from 'http';
import {Agent as HttpsAgent} from 'https';

export type AppInfo = {name?: string} & Record<string, unknown>;
export type BufferedFile = {
  name: string;
  type: string;
  file: {data: Uint8Array};
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
  _appInfo: any;
  _clientId?: string;
  on: any;
  off: any;
  once: any;
  VERSION: string;
  errors: any;
  webhooks: any;
};

export type RequestHeaders = Record<string, string | number | string[]>;

export type TypedData = {
  name: string;
  data: string | Uint8Array;
  type: string;
};

export type RequestData = Record<string, any>;

export type MultipartRequestData = RequestData | StreamingFile | BufferedFile;
export type TelnyxResourceObject = {
  _telnyx: TelnyxObject;
};
