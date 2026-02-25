// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallsAPI from './calls';
import {
  CallListParams,
  CallListResponse,
  CallListResponsesDefaultFlatPagination,
  CallRemoveParams,
  CallRetrieveParams,
  CallRetrieveResponse,
  CallUpdateParams,
  Calls,
} from './calls';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Queues extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);

  /**
   * Create a new call queue.
   *
   * @example
   * ```ts
   * const queue = await client.queues.create({
   *   queue_name: 'tier_1_support',
   * });
   * ```
   */
  create(body: QueueCreateParams, options?: RequestOptions): APIPromise<QueueCreateResponse> {
    return this._client.post('/queues', { body, ...options });
  }

  /**
   * Retrieve an existing call queue
   *
   * @example
   * ```ts
   * const queue = await client.queues.retrieve('queue_name');
   * ```
   */
  retrieve(queueName: string, options?: RequestOptions): APIPromise<QueueRetrieveResponse> {
    return this._client.get(path`/queues/${queueName}`, options);
  }

  /**
   * Update properties of an existing call queue.
   *
   * @example
   * ```ts
   * const queue = await client.queues.update('queue_name', {
   *   max_size: 200,
   * });
   * ```
   */
  update(
    queueName: string,
    body: QueueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QueueUpdateResponse> {
    return this._client.post(path`/queues/${queueName}`, { body, ...options });
  }

  /**
   * List all queues for the authenticated user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const queueListResponse of client.queues.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: QueueListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QueueListResponsesDefaultFlatPagination, QueueListResponse> {
    return this._client.getAPIList('/queues', DefaultFlatPagination<QueueListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an existing call queue.
   *
   * @example
   * ```ts
   * await client.queues.delete('queue_name');
   * ```
   */
  delete(queueName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/queues/${queueName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type QueueListResponsesDefaultFlatPagination = DefaultFlatPagination<QueueListResponse>;

export interface QueueCreateResponse {
  data?: QueueCreateResponse.Data;
}

export namespace QueueCreateResponse {
  export interface Data {
    /**
     * Uniquely identifies the queue
     */
    id: string;

    /**
     * The average time that the calls currently in the queue have spent waiting, given
     * in seconds.
     */
    average_wait_time_secs: number;

    /**
     * ISO 8601 formatted date of when the queue was created
     */
    created_at: string;

    /**
     * The number of calls currently in the queue
     */
    current_size: number;

    /**
     * The maximum number of calls allowed in the queue
     */
    max_size: number;

    /**
     * Name of the queue
     */
    name: string;

    record_type: 'queue';

    /**
     * ISO 8601 formatted date of when the queue was last updated
     */
    updated_at: string;
  }
}

export interface QueueRetrieveResponse {
  data?: QueueRetrieveResponse.Data;
}

export namespace QueueRetrieveResponse {
  export interface Data {
    /**
     * Uniquely identifies the queue
     */
    id: string;

    /**
     * The average time that the calls currently in the queue have spent waiting, given
     * in seconds.
     */
    average_wait_time_secs: number;

    /**
     * ISO 8601 formatted date of when the queue was created
     */
    created_at: string;

    /**
     * The number of calls currently in the queue
     */
    current_size: number;

    /**
     * The maximum number of calls allowed in the queue
     */
    max_size: number;

    /**
     * Name of the queue
     */
    name: string;

    record_type: 'queue';

    /**
     * ISO 8601 formatted date of when the queue was last updated
     */
    updated_at: string;
  }
}

export interface QueueUpdateResponse {
  data?: QueueUpdateResponse.Data;
}

export namespace QueueUpdateResponse {
  export interface Data {
    /**
     * Uniquely identifies the queue
     */
    id: string;

    /**
     * The average time that the calls currently in the queue have spent waiting, given
     * in seconds.
     */
    average_wait_time_secs: number;

    /**
     * ISO 8601 formatted date of when the queue was created
     */
    created_at: string;

    /**
     * The number of calls currently in the queue
     */
    current_size: number;

    /**
     * The maximum number of calls allowed in the queue
     */
    max_size: number;

    /**
     * Name of the queue
     */
    name: string;

    record_type: 'queue';

    /**
     * ISO 8601 formatted date of when the queue was last updated
     */
    updated_at: string;
  }
}

export interface QueueListResponse {
  /**
   * Uniquely identifies the queue
   */
  id: string;

  /**
   * The average time that the calls currently in the queue have spent waiting, given
   * in seconds.
   */
  average_wait_time_secs: number;

  /**
   * ISO 8601 formatted date of when the queue was created
   */
  created_at: string;

  /**
   * The number of calls currently in the queue
   */
  current_size: number;

  /**
   * The maximum number of calls allowed in the queue
   */
  max_size: number;

  /**
   * Name of the queue
   */
  name: string;

  record_type: 'queue';

  /**
   * ISO 8601 formatted date of when the queue was last updated
   */
  updated_at: string;
}

export interface QueueCreateParams {
  /**
   * The name of the queue. Must be between 1 and 255 characters.
   */
  queue_name: string;

  /**
   * The maximum number of calls allowed in the queue.
   */
  max_size?: number;
}

export interface QueueUpdateParams {
  /**
   * The maximum number of calls allowed in the queue.
   */
  max_size: number;
}

export interface QueueListParams extends DefaultFlatPaginationParams {}

Queues.Calls = Calls;

export declare namespace Queues {
  export {
    type QueueCreateResponse as QueueCreateResponse,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueueListResponse as QueueListResponse,
    type QueueListResponsesDefaultFlatPagination as QueueListResponsesDefaultFlatPagination,
    type QueueCreateParams as QueueCreateParams,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueListParams as QueueListParams,
  };

  export {
    Calls as Calls,
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallListResponsesDefaultFlatPagination as CallListResponsesDefaultFlatPagination,
    type CallRetrieveParams as CallRetrieveParams,
    type CallUpdateParams as CallUpdateParams,
    type CallListParams as CallListParams,
    type CallRemoveParams as CallRemoveParams,
  };
}
