// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Show a specific port-out event.
   *
   * @example
   * ```ts
   * const event = await client.portouts.events.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/portouts/events/${id}`, options);
  }

  /**
   * Returns a list of all port-out events.
   *
   * @example
   * ```ts
   * const events = await client.portouts.events.list();
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/portouts/events', { query, ...options });
  }

  /**
   * Republish a specific port-out event.
   *
   * @example
   * ```ts
   * await client.portouts.events.republish(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  republish(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/portouts/events/${id}/republish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EventRetrieveResponse {
  data?: EventRetrieveResponse.Data;
}

export namespace EventRetrieveResponse {
  export interface Data {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?: 'portout.status_changed' | 'portout.foc_date_changed' | 'portout.new_comment';

    /**
     * The webhook payload for the portout.status_changed event
     */
    payload?:
      | Data.WebhookPortoutStatusChangedPayload
      | Data.WebhookPortoutNewCommentPayload
      | Data.WebhookPortoutFocDateChangedPayload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the port-out order associated with the event.
     */
    portout_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * The webhook payload for the portout.status_changed event
     */
    export interface WebhookPortoutStatusChangedPayload {
      /**
       * Identifies the port out that was moved.
       */
      id?: string;

      /**
       * The PIN that was attempted to be used to authorize the port out.
       */
      attempted_pin?: string;

      /**
       * Carrier the number will be ported out to
       */
      carrier_name?: string;

      /**
       * Phone numbers associated with this port-out order
       */
      phone_numbers?: Array<string>;

      /**
       * The reason why the order is being rejected by the user. If the order is
       * authorized, this field can be left null
       */
      rejection_reason?: string | null;

      /**
       * The new carrier SPID.
       */
      spid?: string;

      /**
       * The new status of the port out.
       */
      status?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled';

      /**
       * The name of the port-out's end user.
       */
      subscriber_name?: string;

      /**
       * Identifies the user that the port-out order belongs to.
       */
      user_id?: string;
    }

    /**
     * The webhook payload for the portout.new_comment event
     */
    export interface WebhookPortoutNewCommentPayload {
      /**
       * Identifies the comment that was added to the port-out order.
       */
      id?: string;

      /**
       * The body of the comment.
       */
      comment?: string;

      /**
       * Identifies the port-out order that the comment was added to.
       */
      portout_id?: string;

      /**
       * Identifies the user that added the comment.
       */
      user_id?: string;
    }

    /**
     * The webhook payload for the portout.foc_date_changed event
     */
    export interface WebhookPortoutFocDateChangedPayload {
      /**
       * Identifies the port-out order that have the FOC date changed.
       */
      id?: string;

      /**
       * ISO 8601 formatted date indicating the new FOC date.
       */
      foc_date?: string;

      /**
       * Identifies the organization that port-out order belongs to.
       */
      user_id?: string;
    }
  }
}

export interface EventListResponse {
  data?: Array<EventListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace EventListResponse {
  export interface Data {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?: 'portout.status_changed' | 'portout.foc_date_changed' | 'portout.new_comment';

    /**
     * The webhook payload for the portout.status_changed event
     */
    payload?:
      | Data.WebhookPortoutStatusChangedPayload
      | Data.WebhookPortoutNewCommentPayload
      | Data.WebhookPortoutFocDateChangedPayload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the port-out order associated with the event.
     */
    portout_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * The webhook payload for the portout.status_changed event
     */
    export interface WebhookPortoutStatusChangedPayload {
      /**
       * Identifies the port out that was moved.
       */
      id?: string;

      /**
       * The PIN that was attempted to be used to authorize the port out.
       */
      attempted_pin?: string;

      /**
       * Carrier the number will be ported out to
       */
      carrier_name?: string;

      /**
       * Phone numbers associated with this port-out order
       */
      phone_numbers?: Array<string>;

      /**
       * The reason why the order is being rejected by the user. If the order is
       * authorized, this field can be left null
       */
      rejection_reason?: string | null;

      /**
       * The new carrier SPID.
       */
      spid?: string;

      /**
       * The new status of the port out.
       */
      status?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled';

      /**
       * The name of the port-out's end user.
       */
      subscriber_name?: string;

      /**
       * Identifies the user that the port-out order belongs to.
       */
      user_id?: string;
    }

    /**
     * The webhook payload for the portout.new_comment event
     */
    export interface WebhookPortoutNewCommentPayload {
      /**
       * Identifies the comment that was added to the port-out order.
       */
      id?: string;

      /**
       * The body of the comment.
       */
      comment?: string;

      /**
       * Identifies the port-out order that the comment was added to.
       */
      portout_id?: string;

      /**
       * Identifies the user that added the comment.
       */
      user_id?: string;
    }

    /**
     * The webhook payload for the portout.foc_date_changed event
     */
    export interface WebhookPortoutFocDateChangedPayload {
      /**
       * Identifies the port-out order that have the FOC date changed.
       */
      id?: string;

      /**
       * ISO 8601 formatted date indicating the new FOC date.
       */
      foc_date?: string;

      /**
       * Identifies the organization that port-out order belongs to.
       */
      user_id?: string;
    }
  }
}

export interface EventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[event_type], filter[portout_id], filter[created_at]
   */
  filter?: EventListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: EventListParams.Page;
}

export namespace EventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[event_type], filter[portout_id], filter[created_at]
   */
  export interface Filter {
    /**
     * Filter by created_at date range using nested operations
     */
    created_at?: Filter.CreatedAt;

    /**
     * Filter by event type.
     */
    event_type?: 'portout.status_changed' | 'portout.new_comment' | 'portout.foc_date_changed';

    /**
     * Filter by port-out order ID.
     */
    portout_id?: string;
  }

  export namespace Filter {
    /**
     * Filter by created_at date range using nested operations
     */
    export interface CreatedAt {
      /**
       * Filter by created at greater than or equal to.
       */
      gte?: string;

      /**
       * Filter by created at less than or equal to.
       */
      lte?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
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

export declare namespace Events {
  export {
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
