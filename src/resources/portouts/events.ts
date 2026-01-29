// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const eventListResponse of client.portouts.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesDefaultFlatPagination, EventListResponse> {
    return this._client.getAPIList('/portouts/events', DefaultFlatPagination<EventListResponse>, {
      query,
      ...options,
    });
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

export type EventListResponsesDefaultFlatPagination = DefaultFlatPagination<EventListResponse>;

export interface EventRetrieveResponse {
  data?:
    | EventRetrieveResponse.WebhookPortoutStatusChanged
    | EventRetrieveResponse.WebhookPortoutNewComment
    | EventRetrieveResponse.WebhookPortoutFocDateChanged;
}

export namespace EventRetrieveResponse {
  export interface WebhookPortoutStatusChanged {
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
    payload?: WebhookPortoutStatusChanged.Payload;

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

  export namespace WebhookPortoutStatusChanged {
    /**
     * The webhook payload for the portout.status_changed event
     */
    export interface Payload {
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
  }

  export interface WebhookPortoutNewComment {
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
     * The webhook payload for the portout.new_comment event
     */
    payload?: WebhookPortoutNewComment.Payload;

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

  export namespace WebhookPortoutNewComment {
    /**
     * The webhook payload for the portout.new_comment event
     */
    export interface Payload {
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
  }

  export interface WebhookPortoutFocDateChanged {
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
     * The webhook payload for the portout.foc_date_changed event
     */
    payload?: WebhookPortoutFocDateChanged.Payload;

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

  export namespace WebhookPortoutFocDateChanged {
    /**
     * The webhook payload for the portout.foc_date_changed event
     */
    export interface Payload {
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

export type EventListResponse =
  | EventListResponse.WebhookPortoutStatusChanged
  | EventListResponse.WebhookPortoutNewComment
  | EventListResponse.WebhookPortoutFocDateChanged;

export namespace EventListResponse {
  export interface WebhookPortoutStatusChanged {
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
    payload?: WebhookPortoutStatusChanged.Payload;

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

  export namespace WebhookPortoutStatusChanged {
    /**
     * The webhook payload for the portout.status_changed event
     */
    export interface Payload {
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
  }

  export interface WebhookPortoutNewComment {
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
     * The webhook payload for the portout.new_comment event
     */
    payload?: WebhookPortoutNewComment.Payload;

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

  export namespace WebhookPortoutNewComment {
    /**
     * The webhook payload for the portout.new_comment event
     */
    export interface Payload {
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
  }

  export interface WebhookPortoutFocDateChanged {
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
     * The webhook payload for the portout.foc_date_changed event
     */
    payload?: WebhookPortoutFocDateChanged.Payload;

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

  export namespace WebhookPortoutFocDateChanged {
    /**
     * The webhook payload for the portout.foc_date_changed event
     */
    export interface Payload {
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

export interface EventListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[event_type], filter[portout_id], filter[created_at]
   */
  filter?: EventListParams.Filter;
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
}

export declare namespace Events {
  export {
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListResponsesDefaultFlatPagination as EventListResponsesDefaultFlatPagination,
    type EventListParams as EventListParams,
  };
}
