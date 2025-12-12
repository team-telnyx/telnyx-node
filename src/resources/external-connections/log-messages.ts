// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import {
  DefaultPaginationForLogMessages,
  type DefaultPaginationForLogMessagesParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LogMessages extends APIResource {
  /**
   * Retrieve a log message for an external connection associated with your account.
   *
   * @example
   * ```ts
   * const logMessage =
   *   await client.externalConnections.logMessages.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LogMessageRetrieveResponse> {
    return this._client.get(path`/external_connections/log_messages/${id}`, options);
  }

  /**
   * Retrieve a list of log messages for all external connections associated with
   * your account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const logMessageListResponse of client.externalConnections.logMessages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LogMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LogMessageListResponsesDefaultPaginationForLogMessages, LogMessageListResponse> {
    return this._client.getAPIList(
      '/external_connections/log_messages',
      DefaultPaginationForLogMessages<LogMessageListResponse>,
      { query, ...options },
    );
  }

  /**
   * Dismiss a log message for an external connection associated with your account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.externalConnections.logMessages.dismiss(
   *     'id',
   *   );
   * ```
   */
  dismiss(id: string, options?: RequestOptions): APIPromise<LogMessageDismissResponse> {
    return this._client.delete(path`/external_connections/log_messages/${id}`, options);
  }
}

export type LogMessageListResponsesDefaultPaginationForLogMessages =
  DefaultPaginationForLogMessages<LogMessageListResponse>;

export interface LogMessageRetrieveResponse {
  log_messages?: Array<LogMessageRetrieveResponse.LogMessage>;
}

export namespace LogMessageRetrieveResponse {
  export interface LogMessage {
    code: string;

    title: string;

    detail?: string;

    meta?: LogMessage.Meta;

    source?: LogMessage.Source;
  }

  export namespace LogMessage {
    export interface Meta {
      /**
       * The external connection the log message is associated with, if any.
       */
      external_connection_id?: string;

      /**
       * The telephone number the log message is associated with, if any.
       */
      telephone_number?: string;

      /**
       * The ticket ID for an operation that generated the log message, if any.
       */
      ticket_id?: string;
    }

    export interface Source {
      /**
       * JSON pointer (RFC6901) to the offending entity.
       */
      pointer?: string;
    }
  }
}

export interface LogMessageListResponse {
  code: string;

  title: string;

  detail?: string;

  meta?: LogMessageListResponse.Meta;

  source?: LogMessageListResponse.Source;
}

export namespace LogMessageListResponse {
  export interface Meta {
    /**
     * The external connection the log message is associated with, if any.
     */
    external_connection_id?: string;

    /**
     * The telephone number the log message is associated with, if any.
     */
    telephone_number?: string;

    /**
     * The ticket ID for an operation that generated the log message, if any.
     */
    ticket_id?: string;
  }

  export interface Source {
    /**
     * JSON pointer (RFC6901) to the offending entity.
     */
    pointer?: string;
  }
}

export interface LogMessageDismissResponse {
  /**
   * Describes wether or not the operation was successful
   */
  success?: boolean;
}

export interface LogMessageListParams extends DefaultPaginationForLogMessagesParams {
  /**
   * Filter parameter for log messages (deepObject style). Supports filtering by
   * external_connection_id and telephone_number with eq/contains operations.
   */
  filter?: LogMessageListParams.Filter;
}

export namespace LogMessageListParams {
  /**
   * Filter parameter for log messages (deepObject style). Supports filtering by
   * external_connection_id and telephone_number with eq/contains operations.
   */
  export interface Filter {
    /**
     * The external connection ID to filter by or "null" to filter for logs without an
     * external connection ID
     */
    external_connection_id?: string;

    /**
     * Telephone number filter operations for log messages. Use 'eq' for exact matches
     * or 'contains' for partial matches.
     */
    telephone_number?: Filter.TelephoneNumber;
  }

  export namespace Filter {
    /**
     * Telephone number filter operations for log messages. Use 'eq' for exact matches
     * or 'contains' for partial matches.
     */
    export interface TelephoneNumber {
      /**
       * The partial phone number to filter log messages for. Requires 3-15 digits.
       */
      contains?: string;

      /**
       * The phone number to filter log messages for or "null" to filter for logs without
       * a phone number
       */
      eq?: string;
    }
  }
}

export declare namespace LogMessages {
  export {
    type LogMessageRetrieveResponse as LogMessageRetrieveResponse,
    type LogMessageListResponse as LogMessageListResponse,
    type LogMessageDismissResponse as LogMessageDismissResponse,
    type LogMessageListResponsesDefaultPaginationForLogMessages as LogMessageListResponsesDefaultPaginationForLogMessages,
    type LogMessageListParams as LogMessageListParams,
  };
}
