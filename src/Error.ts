export type TelnyxRawError = {
  message?: string;
  type?: string;
  headers?: {[header: string]: string | string[] | undefined};
  statusCode?: number;
  requestId?: string;
  responseBody?: unknown;
  code?: string;
  detail?: string | Error | any;
  errors?: Array<{
    code: string;
    detail: string;
    title: string;
  }>;
};

export const generate = (rawTelnyxError: TelnyxRawError): TelnyxError => {
  switch (rawTelnyxError.statusCode) {
    case 400:
      return new TelnyxInvalidRequestError(rawTelnyxError);
    case 401:
      return new TelnyxAuthenticationError(rawTelnyxError);
    case 403:
      return new TelnyxPermissionError(rawTelnyxError);
    case 404:
      return new TelnyxResourceNotFoundError(rawTelnyxError);
    case 405:
      return new TelnyxMethodNotSupportedError(rawTelnyxError);
    case 408:
      return new TelnyxTimeoutError(rawTelnyxError);
    case 415:
      return new TelnyxUnsupportedMediaTypeError(rawTelnyxError);
    case 422:
      return new TelnyxInvalidParametersError(rawTelnyxError);
    case 429:
      return new TelnyxRateLimitError(rawTelnyxError);
    case 500:
      return new TelnyxAPIError(rawTelnyxError);
    case 503:
      return new TelnyxServiceUnavailableError(rawTelnyxError);
  }
  return new TelnyxError({type: 'Generic', message: 'Unknown Error'});
};

/**
 * TelnyxError is the base error from which all other more specific Telnyx errors derive.
 * Specifically for errors returned from Telnyx's REST API.
 */
export class TelnyxError extends Error {
  readonly message: string;
  readonly type: string;
  readonly raw: unknown;
  readonly headers?: TelnyxRawError['headers'];
  readonly requestId?: string;
  readonly detail?: string | Error;

  readonly code?: string;
  readonly statusCode?: number;
  readonly responseBody?: TelnyxRawError['responseBody'];

  constructor(raw: TelnyxRawError = {}, type: string | null = null) {
    super(raw.message);
    this.type = type || this.constructor.name;

    this.raw = raw;
    this.code = raw.code;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.responseBody = raw.responseBody;
    // @ts-ignore
    this.message = raw.message;
  }

  /**
   * Helper factory which takes raw Telnyx errors and outputs wrapping instances
   */
  static generate = generate;
}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export class TelnyxInvalidRequestError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxInvalidRequestError');
  }
}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export class TelnyxAPIError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxAPIError');
  }
}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Telnyx's servers.
 */
export class TelnyxAuthenticationError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxAuthenticationError');
  }
}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export class TelnyxPermissionError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxPermissionError');
  }
}

export class TelnyxResourceNotFoundError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxResourceNotFoundError');
  }
}

export class TelnyxMethodNotSupportedError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxMethodNotSupportedError');
  }
}

export class TelnyxTimeoutError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxTimeoutError');
  }
}

export class TelnyxUnsupportedMediaTypeError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxUnsupportedMediaTypeError');
  }
}

export class TelnyxInvalidParametersError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxInvalidParametersError');
  }
}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Telnyx's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export class TelnyxRateLimitError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxRateLimitError');
  }
}

export class TelnyxServiceUnavailableError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxServiceUnavailableError');
  }
}

/**
 * TelnyxConnectionError is raised in the event that the SDK can't connect to
 * Telnyx's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export class TelnyxConnectionError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxConnectionError');
  }
}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class TelnyxSignatureVerificationError extends TelnyxError {
  constructor(raw: TelnyxRawError = {}) {
    super(raw, 'TelnyxSignatureVerificationError');
  }
}
