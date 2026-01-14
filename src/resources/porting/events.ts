// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Show a specific porting event.
   *
   * @example
   * ```ts
   * const event = await client.porting.events.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/porting/events/${id}`, options);
  }

  /**
   * Returns a list of all porting events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eventListResponse of client.porting.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesDefaultFlatPagination, EventListResponse> {
    return this._client.getAPIList('/porting/events', DefaultFlatPagination<EventListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Republish a specific porting event.
   *
   * @example
   * ```ts
   * await client.porting.events.republish(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  republish(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/porting/events/${id}/republish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EventListResponsesDefaultFlatPagination = DefaultFlatPagination<EventListResponse>;

export interface EventRetrieveResponse {
  data?:
    | EventRetrieveResponse.PortingEventDeletedPayload
    | EventRetrieveResponse.PortingEventMessagingChangedPayload
    | EventRetrieveResponse.PortingEventStatusChangedEvent
    | EventRetrieveResponse.PortingEventNewCommentEvent
    | EventRetrieveResponse.PortingEventSplitEvent
    | EventRetrieveResponse.PortingEventWithoutWebhook;
}

export namespace EventRetrieveResponse {
  export interface PortingEventDeletedPayload {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    payload?: PortingEventDeletedPayload.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;
  }

  export namespace PortingEventDeletedPayload {
    export interface Payload {
      /**
       * Identifies the porting order that was deleted.
       */
      id?: string;

      /**
       * ISO 8601 formatted date indicating when the resource was created.
       */
      created_at?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * ISO 8601 formatted date indicating when the porting order was deleted.
       */
      deleted_at?: string;

      /**
       * Identifies the type of the resource.
       */
      record_type?: string;

      /**
       * ISO 8601 formatted date indicating when the resource was updated.
       */
      updated_at?: string;
    }
  }

  export interface PortingEventMessagingChangedPayload {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.messaging_changed event
     */
    payload?: PortingEventMessagingChangedPayload.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventMessagingChangedPayload {
    /**
     * The webhook payload for the porting_order.messaging_changed event
     */
    export interface Payload {
      /**
       * Identifies the porting order that was moved.
       */
      id?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * The messaging portability status of the porting order.
       */
      messaging?: Payload.Messaging;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;
    }

    export namespace Payload {
      /**
       * The messaging portability status of the porting order.
       */
      export interface Messaging {
        /**
         * Indicates whether Telnyx will port messaging capabilities from the losing
         * carrier. If false, any messaging capabilities will stay with their current
         * provider.
         */
        enable_messaging?: boolean;

        /**
         * Indicates whether the porting order is messaging capable.
         */
        messaging_capable?: boolean;

        /**
         * Indicates whether the messaging port is completed.
         */
        messaging_port_completed?: boolean;

        /**
         * Indicates the messaging port status of the porting order.
         */
        messaging_port_status?:
          | 'not_applicable'
          | 'pending'
          | 'activating'
          | 'exception'
          | 'canceled'
          | 'partial_port_complete'
          | 'ported';
      }
    }
  }

  export interface PortingEventStatusChangedEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.status_changed event
     */
    payload?: PortingEventStatusChangedEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventStatusChangedEvent {
    /**
     * The webhook payload for the porting_order.status_changed event
     */
    export interface Payload {
      /**
       * Identifies the porting order that was moved.
       */
      id?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * Porting order status
       */
      status?: Shared.PortingOrderStatus;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;

      /**
       * ISO 8601 formatted date indicating when the porting order was moved.
       */
      updated_at?: string;

      /**
       * The URL to send the webhook to.
       */
      webhook_url?: string;
    }
  }

  export interface PortingEventNewCommentEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.new_comment event
     */
    payload?: PortingEventNewCommentEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventNewCommentEvent {
    /**
     * The webhook payload for the porting_order.new_comment event
     */
    export interface Payload {
      /**
       * The comment that was added to the porting order.
       */
      comment?: Payload.Comment;

      /**
       * Identifies the porting order that the comment was added to.
       */
      porting_order_id?: string;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;
    }

    export namespace Payload {
      /**
       * The comment that was added to the porting order.
       */
      export interface Comment {
        /**
         * Identifies the comment.
         */
        id?: string;

        /**
         * The body of the comment.
         */
        body?: string;

        /**
         * ISO 8601 formatted date indicating when the comment was created.
         */
        inserted_at?: string;

        /**
         * Identifies the user that create the comment.
         */
        user_id?: string;

        /**
         * Identifies the type of the user that created the comment.
         */
        user_type?: 'user' | 'admin' | 'system';
      }
    }
  }

  export interface PortingEventSplitEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.split event
     */
    payload?: PortingEventSplitEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventSplitEvent {
    /**
     * The webhook payload for the porting_order.split event
     */
    export interface Payload {
      /**
       * The porting order that was split.
       */
      from?: Payload.From;

      /**
       * The list of porting phone numbers that were moved to the new porting order.
       */
      porting_phone_numbers?: Array<Payload.PortingPhoneNumber>;

      /**
       * The new porting order that the phone numbers was moved to.
       */
      to?: Payload.To;
    }

    export namespace Payload {
      /**
       * The porting order that was split.
       */
      export interface From {
        /**
         * Identifies the porting order that was split.
         */
        id?: string;
      }

      export interface PortingPhoneNumber {
        /**
         * Identifies the porting phone number that was moved.
         */
        id?: string;
      }

      /**
       * The new porting order that the phone numbers was moved to.
       */
      export interface To {
        /**
         * Identifies the porting order that was split.
         */
        id?: string;
      }
    }
  }

  export interface PortingEventWithoutWebhook {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    payload?: null;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export type EventListResponse =
  | EventListResponse.PortingEventDeletedPayload
  | EventListResponse.PortingEventMessagingChangedPayload
  | EventListResponse.PortingEventStatusChangedEvent
  | EventListResponse.PortingEventNewCommentEvent
  | EventListResponse.PortingEventSplitEvent
  | EventListResponse.PortingEventWithoutWebhook;

export namespace EventListResponse {
  export interface PortingEventDeletedPayload {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    payload?: PortingEventDeletedPayload.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;
  }

  export namespace PortingEventDeletedPayload {
    export interface Payload {
      /**
       * Identifies the porting order that was deleted.
       */
      id?: string;

      /**
       * ISO 8601 formatted date indicating when the resource was created.
       */
      created_at?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * ISO 8601 formatted date indicating when the porting order was deleted.
       */
      deleted_at?: string;

      /**
       * Identifies the type of the resource.
       */
      record_type?: string;

      /**
       * ISO 8601 formatted date indicating when the resource was updated.
       */
      updated_at?: string;
    }
  }

  export interface PortingEventMessagingChangedPayload {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.messaging_changed event
     */
    payload?: PortingEventMessagingChangedPayload.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventMessagingChangedPayload {
    /**
     * The webhook payload for the porting_order.messaging_changed event
     */
    export interface Payload {
      /**
       * Identifies the porting order that was moved.
       */
      id?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * The messaging portability status of the porting order.
       */
      messaging?: Payload.Messaging;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;
    }

    export namespace Payload {
      /**
       * The messaging portability status of the porting order.
       */
      export interface Messaging {
        /**
         * Indicates whether Telnyx will port messaging capabilities from the losing
         * carrier. If false, any messaging capabilities will stay with their current
         * provider.
         */
        enable_messaging?: boolean;

        /**
         * Indicates whether the porting order is messaging capable.
         */
        messaging_capable?: boolean;

        /**
         * Indicates whether the messaging port is completed.
         */
        messaging_port_completed?: boolean;

        /**
         * Indicates the messaging port status of the porting order.
         */
        messaging_port_status?:
          | 'not_applicable'
          | 'pending'
          | 'activating'
          | 'exception'
          | 'canceled'
          | 'partial_port_complete'
          | 'ported';
      }
    }
  }

  export interface PortingEventStatusChangedEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.status_changed event
     */
    payload?: PortingEventStatusChangedEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventStatusChangedEvent {
    /**
     * The webhook payload for the porting_order.status_changed event
     */
    export interface Payload {
      /**
       * Identifies the porting order that was moved.
       */
      id?: string;

      /**
       * Identifies the customer reference associated with the porting order.
       */
      customer_reference?: string;

      /**
       * Porting order status
       */
      status?: Shared.PortingOrderStatus;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;

      /**
       * ISO 8601 formatted date indicating when the porting order was moved.
       */
      updated_at?: string;

      /**
       * The URL to send the webhook to.
       */
      webhook_url?: string;
    }
  }

  export interface PortingEventNewCommentEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.new_comment event
     */
    payload?: PortingEventNewCommentEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventNewCommentEvent {
    /**
     * The webhook payload for the porting_order.new_comment event
     */
    export interface Payload {
      /**
       * The comment that was added to the porting order.
       */
      comment?: Payload.Comment;

      /**
       * Identifies the porting order that the comment was added to.
       */
      porting_order_id?: string;

      /**
       * Identifies the support key associated with the porting order.
       */
      support_key?: string;
    }

    export namespace Payload {
      /**
       * The comment that was added to the porting order.
       */
      export interface Comment {
        /**
         * Identifies the comment.
         */
        id?: string;

        /**
         * The body of the comment.
         */
        body?: string;

        /**
         * ISO 8601 formatted date indicating when the comment was created.
         */
        inserted_at?: string;

        /**
         * Identifies the user that create the comment.
         */
        user_id?: string;

        /**
         * Identifies the type of the user that created the comment.
         */
        user_type?: 'user' | 'admin' | 'system';
      }
    }
  }

  export interface PortingEventSplitEvent {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    /**
     * The webhook payload for the porting_order.split event
     */
    payload?: PortingEventSplitEvent.Payload;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace PortingEventSplitEvent {
    /**
     * The webhook payload for the porting_order.split event
     */
    export interface Payload {
      /**
       * The porting order that was split.
       */
      from?: Payload.From;

      /**
       * The list of porting phone numbers that were moved to the new porting order.
       */
      porting_phone_numbers?: Array<Payload.PortingPhoneNumber>;

      /**
       * The new porting order that the phone numbers was moved to.
       */
      to?: Payload.To;
    }

    export namespace Payload {
      /**
       * The porting order that was split.
       */
      export interface From {
        /**
         * Identifies the porting order that was split.
         */
        id?: string;
      }

      export interface PortingPhoneNumber {
        /**
         * Identifies the porting phone number that was moved.
         */
        id?: string;
      }

      /**
       * The new porting order that the phone numbers was moved to.
       */
      export interface To {
        /**
         * Identifies the porting order that was split.
         */
        id?: string;
      }
    }
  }

  export interface PortingEventWithoutWebhook {
    /**
     * Uniquely identifies the event.
     */
    id?: string;

    /**
     * Indicates the notification methods used.
     */
    available_notification_methods?: Array<'email' | 'webhook' | 'webhook_v1'>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the event type
     */
    event_type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';

    payload?: null;

    /**
     * The status of the payload generation.
     */
    payload_status?: 'created' | 'completed';

    /**
     * Identifies the porting order associated with the event.
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface EventListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[porting_order_id], filter[created_at][gte], filter[created_at][lte]
   */
  filter?: EventListParams.Filter;
}

export namespace EventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[porting_order_id], filter[created_at][gte], filter[created_at][lte]
   */
  export interface Filter {
    /**
     * Created at date range filtering operations
     */
    created_at?: Filter.CreatedAt;

    /**
     * Filter by porting order ID.
     */
    porting_order_id?: string;

    /**
     * Filter by event type.
     */
    type?:
      | 'porting_order.deleted'
      | 'porting_order.loa_updated'
      | 'porting_order.messaging_changed'
      | 'porting_order.status_changed'
      | 'porting_order.sharing_token_expired'
      | 'porting_order.new_comment'
      | 'porting_order.split';
  }

  export namespace Filter {
    /**
     * Created at date range filtering operations
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
