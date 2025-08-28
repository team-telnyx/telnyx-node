// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Retrieve an existing call from an existing queue
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
   * Retrieve the list of calls in an existing queue
   */
  list(
    queueName: string,
    query: CallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListResponse> {
    return this._client.get(path`/queues/${queueName}/calls`, { query, ...options });
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

export declare namespace Calls {
  export {
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallRetrieveParams as CallRetrieveParams,
    type CallListParams as CallListParams,
  };
}
