// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExternalConnectionsAPI from './external-connections';
import { APIPromise } from '../../core/api-promise';
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
   * const logMessages =
   *   await client.externalConnections.logMessages.list();
   * ```
   */
  list(
    query: LogMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogMessageListResponse> {
    return this._client.get('/external_connections/log_messages', { query, ...options });
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
  log_messages?: Array<LogMessageListResponse.LogMessage>;

  meta?: ExternalConnectionsAPI.ExternalVoiceIntegrationsPaginationMeta;
}

export namespace LogMessageListResponse {
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

export interface LogMessageDismissResponse {
  /**
   * Describes wether or not the operation was successful
   */
  success?: boolean;
}

export interface LogMessageListParams {
  /**
   * Filter parameter for log messages (deepObject style). Supports filtering by
   * external_connection_id and telephone_number with eq/contains operations.
   */
  filter?: LogMessageListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: LogMessageListParams.Page;
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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace LogMessages {
  export {
    type LogMessageRetrieveResponse as LogMessageRetrieveResponse,
    type LogMessageListResponse as LogMessageListResponse,
    type LogMessageDismissResponse as LogMessageDismissResponse,
    type LogMessageListParams as LogMessageListParams,
  };
}
