// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CallEvents extends APIResource {
  /**
   * Filters call events by given filter parameters. Events are ordered by
   * `occurred_at`. If filter for `leg_id` or `application_session_id` is not
   * present, it only filters events from the last 24 hours.
   *
   * **Note**: Only one `filter[occurred_at]` can be passed.
   */
  list(
    query: CallEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallEventListResponse> {
    return this._client.get('/call_events', { query, ...options });
  }
}

export interface CallEventListResponse {
  data?: Array<CallEventListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace CallEventListResponse {
  export interface Data {
    /**
     * Uniquely identifies an individual call leg.
     */
    call_leg_id: string;

    /**
     * Uniquely identifies the call control session. A session may include multiple
     * call leg events.
     */
    call_session_id: string;

    /**
     * Event timestamp
     */
    event_timestamp: string;

    /**
     * Event metadata, which includes raw event, and extra information based on event
     * type
     */
    metadata: unknown;

    /**
     * Event name
     */
    name: string;

    record_type: 'call_event';

    /**
     * Event type
     */
    type: 'command' | 'webhook';
  }
}

export interface CallEventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  filter?: CallEventListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[before], page[limit], page[size], page[number]
   */
  page?: CallEventListParams.Page;
}

export namespace CallEventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  export interface Filter {
    /**
     * Application name filters
     */
    application_name?: Filter.ApplicationName;

    /**
     * The unique identifier of the call session. A session may include multiple call
     * leg events.
     */
    application_session_id?: string;

    /**
     * The unique identifier of the conection.
     */
    connection_id?: string;

    /**
     * Delivery failed or not.
     */
    failed?: boolean;

    /**
     * Filter by From number.
     */
    from?: string;

    /**
     * The unique identifier of an individual call leg.
     */
    leg_id?: string;

    /**
     * If present, conferences will be filtered to those with a matching `name`
     * attribute. Matching is case-sensitive
     */
    name?: string;

    /**
     * Event occurred_at filters
     */
    occurred_at?: Filter.OccurredAt;

    /**
     * Identifies the associated outbound voice profile.
     */
    'outbound.outbound_voice_profile_id'?: string;

    /**
     * Filter by product.
     */
    product?: 'call_control' | 'fax' | 'texml';

    /**
     * If present, conferences will be filtered by status.
     */
    status?: 'init' | 'in_progress' | 'completed';

    /**
     * Filter by To number.
     */
    to?: string;

    /**
     * Event type
     */
    type?: 'command' | 'webhook';
  }

  export namespace Filter {
    /**
     * Application name filters
     */
    export interface ApplicationName {
      /**
       * If present, applications with <code>application_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }

    /**
     * Event occurred_at filters
     */
    export interface OccurredAt {
      /**
       * Event occurred_at: equal
       */
      eq?: string;

      /**
       * Event occurred_at: greater than
       */
      gt?: string;

      /**
       * Event occurred_at: greater than or equal
       */
      gte?: string;

      /**
       * Event occurred_at: lower than
       */
      lt?: string;

      /**
       * Event occurred_at: lower than or equal
       */
      lte?: string;
    }
  }

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

export declare namespace CallEvents {
  export {
    type CallEventListResponse as CallEventListResponse,
    type CallEventListParams as CallEventListParams,
  };
}
