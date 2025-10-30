// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Retrieve an existing call from an existing queue
   *
   * @example
   * ```ts
   * const call = await client.queues.calls.retrieve(
   *   'call_control_id',
   *   { queue_name: 'queue_name' },
   * );
   * ```
   */
  retrieve(
    callControlID: string,
    params: CallRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CallRetrieveResponse> {
    const { queue_name } = params;
    return this._client.get(path`/queues/${queue_name}/calls/${callControlID}`, options);
  }

  /**
   * Update queued call's keep_after_hangup flag
   *
   * @example
   * ```ts
   * await client.queues.calls.update('call_control_id', {
   *   queue_name: 'queue_name',
   * });
   * ```
   */
  update(callControlID: string, params: CallUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { queue_name, ...body } = params;
    return this._client.patch(path`/queues/${queue_name}/calls/${callControlID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the list of calls in an existing queue
   *
   * @example
   * ```ts
   * const calls = await client.queues.calls.list('queue_name');
   * ```
   */
  list(
    queueName: string,
    query: CallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListResponse> {
    return this._client.get(path`/queues/${queueName}/calls`, { query, ...options });
  }

  /**
   * Removes an inactive call from a queue. If the call is no longer active, use this
   * command to remove it from the queue.
   *
   * @example
   * ```ts
   * await client.queues.calls.remove('call_control_id', {
   *   queue_name: 'queue_name',
   * });
   * ```
   */
  remove(callControlID: string, params: CallRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { queue_name } = params;
    return this._client.delete(path`/queues/${queue_name}/calls/${callControlID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CallRetrieveResponse {
  data?: CallRetrieveResponse.Data;
}

export namespace CallRetrieveResponse {
  export interface Data {
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events
     */
    call_leg_id: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call
     */
    call_session_id: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id: string;

    /**
     * ISO 8601 formatted date of when the call was put in the queue
     */
    enqueued_at: string;

    /**
     * Number or SIP URI placing the call.
     */
    from: string;

    /**
     * Unique identifier of the queue the call is in.
     */
    queue_id: string;

    /**
     * Current position of the call in the queue
     */
    queue_position: number;

    record_type: 'queue_call';

    /**
     * Destination number or SIP URI of the call.
     */
    to: string;

    /**
     * The time the call has been waiting in the queue, given in seconds
     */
    wait_time_secs: number;
  }
}

export interface CallListResponse {
  data?: Array<CallListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace CallListResponse {
  export interface Data {
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events
     */
    call_leg_id: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call
     */
    call_session_id: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id: string;

    /**
     * ISO 8601 formatted date of when the call was put in the queue
     */
    enqueued_at: string;

    /**
     * Number or SIP URI placing the call.
     */
    from: string;

    /**
     * Unique identifier of the queue the call is in.
     */
    queue_id: string;

    /**
     * Current position of the call in the queue
     */
    queue_position: number;

    record_type: 'queue_call';

    /**
     * Destination number or SIP URI of the call.
     */
    to: string;

    /**
     * The time the call has been waiting in the queue, given in seconds
     */
    wait_time_secs: number;
  }
}

export interface CallRetrieveParams {
  /**
   * Uniquely identifies the queue by name
   */
  queue_name: string;
}

export interface CallUpdateParams {
  /**
   * Path param: Uniquely identifies the queue by name
   */
  queue_name: string;

  /**
   * Body param: Whether the call should remain in queue after hangup.
   */
  keep_after_hangup?: boolean;
}

export interface CallListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[before], page[limit], page[size], page[number]
   */
  page?: CallListParams.Page;
}

export namespace CallListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[before], page[limit], page[size], page[number]
   */
  export interface Page {
    /**
     * Opaque identifier of next page
     */
    after?: string;

    /**
     * Opaque identifier of previous page
     */
    before?: string;

    /**
     * Limit of records per single page
     */
    limit?: number;

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

export interface CallRemoveParams {
  /**
   * Uniquely identifies the queue by name
   */
  queue_name: string;
}

export declare namespace Calls {
  export {
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallRetrieveParams as CallRetrieveParams,
    type CallUpdateParams as CallUpdateParams,
    type CallListParams as CallListParams,
    type CallRemoveParams as CallRemoveParams,
  };
}
