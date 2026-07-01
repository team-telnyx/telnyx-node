// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallsAPI from './calls';
import {
  CallListParams,
  CallRemoveParams,
  CallRetrieveParams,
  CallRetrieveResponse,
  CallUpdateParams,
  Calls,
  QueueCall,
  QueueCallsDefaultFlatPagination,
} from './calls';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Queue commands operations
 */
export class Queues extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);

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
   * List all queues for the authenticated user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const queue of client.queues.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: QueueListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QueuesDefaultFlatPagination, Queue> {
    return this._client.getAPIList('/queues', DefaultFlatPagination<Queue>, { query, ...options });
  }

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
}

export type QueuesDefaultFlatPagination = DefaultFlatPagination<Queue>;

export interface Queue {
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

export interface QueueCreateResponse {
  data?: Queue;
}

export interface QueueRetrieveResponse {
  data?: Queue;
}

export interface QueueUpdateResponse {
  data?: Queue;
}

export interface QueueListParams extends DefaultFlatPaginationParams {}

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

Queues.Calls = Calls;

export declare namespace Queues {
  export {
    type Queue as Queue,
    type QueueCreateResponse as QueueCreateResponse,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueuesDefaultFlatPagination as QueuesDefaultFlatPagination,
    type QueueListParams as QueueListParams,
    type QueueCreateParams as QueueCreateParams,
    type QueueUpdateParams as QueueUpdateParams,
  };

  export {
    Calls as Calls,
    type QueueCall as QueueCall,
    type CallRetrieveResponse as CallRetrieveResponse,
    type QueueCallsDefaultFlatPagination as QueueCallsDefaultFlatPagination,
    type CallListParams as CallListParams,
    type CallRetrieveParams as CallRetrieveParams,
    type CallRemoveParams as CallRemoveParams,
    type CallUpdateParams as CallUpdateParams,
  };
}
