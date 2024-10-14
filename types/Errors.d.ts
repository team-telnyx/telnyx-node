declare module 'telnyx' {
  namespace Telnyx {
    type TelnyxRawError = {
      message?: string;
      type?: string;
      headers?: {[header: string]: string | string[] | undefined};
      statusCode?: number;
      requestId?: string;
      responseBody?: unknown;
      code?: string;
      detail?: string | Error | unknown;
      errors?: Array<{
        code: string;
        detail: string;
        title: string;
        meta?: {
          url: string;
        };
        source?: {
          pointer: string;
        };
      }>;
    };
    namespace errors {
      /**
       * TelnyxError is the base error from which all other more specific Telnyx errors derive.
       * Specifically for errors returned from Telnyx's REST API.
       */
      class TelnyxError extends Error {
        readonly message: string;
        readonly type:
          | 'TelnyxInvalidRequestError'
          | 'TelnyxAPIError'
          | 'TelnyxAuthenticationError'
          | 'TelnyxPermissionError'
          | 'TelnyxResourceNotFoundError'
          | 'TelnyxMethodNotSupportedError'
          | 'TelnyxTimeoutError'
          | 'TelnyxUnsupportedMediaTypeError'
          | 'TelnyxInvalidParametersError'
          | 'TelnyxRateLimitError'
          | 'TelnyxServiceUnavailableError'
          | 'TelnyxConnectionError'
          | 'TelnyxSignatureVerificationError';
        readonly raw: TelnyxRawError;
        readonly headers?: TelnyxRawError['headers'];
        readonly requestId?: string;
        readonly detail?: string | Error;
        readonly code?: string;
        readonly statusCode?: number;
        readonly responseBody?: TelnyxRawError['responseBody'];
        constructor(raw?: TelnyxRawError, type?: string | null);
        /**
         * Helper factory which takes raw Telnyx errors and outputs wrapping instances
         */
        static generate: (rawTelnyxError: TelnyxRawError) => TelnyxError;
      }
      /**
       * InvalidRequestError is raised when a request is initiated with invalid
       * parameters.
       */
      class TelnyxInvalidRequestError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * APIError is a generic error that may be raised in cases where none of the
       * other named errors cover the problem. It could also be raised in the case
       * that a new error has been introduced in the API, but this version of the
       * Node.JS SDK doesn't know how to handle it.
       */
      class TelnyxAPIError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * AuthenticationError is raised when invalid credentials are used to connect
       * to Telnyx's servers.
       */
      class TelnyxAuthenticationError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * PermissionError is raised in cases where access was attempted on a resource
       * that wasn't allowed.
       */
      class TelnyxPermissionError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxResourceNotFoundError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxMethodNotSupportedError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxTimeoutError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxUnsupportedMediaTypeError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxInvalidParametersError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * RateLimitError is raised in cases where an account is putting too much load
       * on Telnyx's API servers (usually by performing too many requests). Please
       * back off on request rate.
       */
      class TelnyxRateLimitError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      class TelnyxServiceUnavailableError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * TelnyxConnectionError is raised in the event that the SDK can't connect to
       * Telnyx's servers. That can be for a variety of different reasons from a
       * downed network to a bad TLS certificate.
       */
      class TelnyxConnectionError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
      /**
       * SignatureVerificationError is raised when the signature verification for a
       * webhook fails
       */
      class TelnyxSignatureVerificationError extends TelnyxError {
        constructor(raw?: TelnyxRawError);
      }
    }
  }
}
