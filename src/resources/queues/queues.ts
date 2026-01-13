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
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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

Queues.Calls = Calls;

export declare namespace Queues {
  export { type QueueRetrieveResponse as QueueRetrieveResponse };

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
