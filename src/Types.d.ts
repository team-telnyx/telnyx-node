import {EventEmitter} from 'events';

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
  _platformFunctions: PlatformFunctions;
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
