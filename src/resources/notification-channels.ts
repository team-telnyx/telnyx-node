// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NotificationChannels extends APIResource {
  /**
   * Create a notification channel.
   *
   * @example
   * ```ts
   * const notificationChannel =
   *   await client.notificationChannels.create();
   * ```
   */
  create(
    body: NotificationChannelCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationChannelCreateResponse> {
    return this._client.post('/notification_channels', { body, ...options });
  }

  /**
   * Get a notification channel.
   *
   * @example
   * ```ts
   * const notificationChannel =
   *   await client.notificationChannels.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NotificationChannelRetrieveResponse> {
    return this._client.get(path`/notification_channels/${id}`, options);
  }

  /**
   * Update a notification channel.
   *
   * @example
   * ```ts
   * const notificationChannel =
   *   await client.notificationChannels.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    notificationChannelID: string,
    body: NotificationChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationChannelUpdateResponse> {
    return this._client.patch(path`/notification_channels/${notificationChannelID}`, { body, ...options });
  }

  /**
   * List notification channels.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const notificationChannel of client.notificationChannels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NotificationChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NotificationChannelsDefaultFlatPagination, NotificationChannel> {
    return this._client.getAPIList('/notification_channels', DefaultFlatPagination<NotificationChannel>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a notification channel.
   *
   * @example
   * ```ts
   * const notificationChannel =
   *   await client.notificationChannels.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<NotificationChannelDeleteResponse> {
    return this._client.delete(path`/notification_channels/${id}`, options);
  }
}

export type NotificationChannelsDefaultFlatPagination = DefaultFlatPagination<NotificationChannel>;

/**
 * A Notification Channel
 */
export interface NotificationChannel {
  /**
   * A UUID.
   */
  id?: string;

  /**
   * The destination associated with the channel type.
   */
  channel_destination?: string;

  /**
   * A Channel Type ID
   */
  channel_type_id?: 'sms' | 'voice' | 'email' | 'webhook';

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface NotificationChannelCreateResponse {
  /**
   * A Notification Channel
   */
  data?: NotificationChannel;
}

export interface NotificationChannelRetrieveResponse {
  /**
   * A Notification Channel
   */
  data?: NotificationChannel;
}

export interface NotificationChannelUpdateResponse {
  /**
   * A Notification Channel
   */
  data?: NotificationChannel;
}

export interface NotificationChannelDeleteResponse {
  /**
   * A Notification Channel
   */
  data?: NotificationChannel;
}

export interface NotificationChannelCreateParams {
  /**
   * The destination associated with the channel type.
   */
  channel_destination?: string;

  /**
   * A Channel Type ID
   */
  channel_type_id?: 'sms' | 'voice' | 'email' | 'webhook';

  /**
   * A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;
}

export interface NotificationChannelUpdateParams {
  /**
   * The destination associated with the channel type.
   */
  channel_destination?: string;

  /**
   * A Channel Type ID
   */
  channel_type_id?: 'sms' | 'voice' | 'email' | 'webhook';

  /**
   * A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;
}

export interface NotificationChannelListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[associated_record_type][eq], filter[channel_type_id][eq],
   * filter[notification_profile_id][eq], filter[notification_channel][eq],
   * filter[notification_event_condition_id][eq], filter[status][eq]
   */
  filter?: NotificationChannelListParams.Filter;
}

export namespace NotificationChannelListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[associated_record_type][eq], filter[channel_type_id][eq],
   * filter[notification_profile_id][eq], filter[notification_channel][eq],
   * filter[notification_event_condition_id][eq], filter[status][eq]
   */
  export interface Filter {
    associated_record_type?: Filter.AssociatedRecordType;

    channel_type_id?: Filter.ChannelTypeID;

    notification_channel?: Filter.NotificationChannel;

    notification_event_condition_id?: Filter.NotificationEventConditionID;

    notification_profile_id?: Filter.NotificationProfileID;

    status?: Filter.Status;
  }

  export namespace Filter {
    export interface AssociatedRecordType {
      /**
       * Filter by the associated record type
       */
      eq?: 'account' | 'phone_number';
    }

    export interface ChannelTypeID {
      /**
       * Filter by the id of a channel type
       */
      eq?: 'webhook' | 'sms' | 'email' | 'voice';
    }

    export interface NotificationChannel {
      /**
       * Filter by the id of a notification channel
       */
      eq?: string;
    }

    export interface NotificationEventConditionID {
      /**
       * Filter by the id of a notification channel
       */
      eq?: string;
    }

    export interface NotificationProfileID {
      /**
       * Filter by the id of a notification profile
       */
      eq?: string;
    }

    export interface Status {
      /**
       * The status of a notification setting
       */
      eq?:
        | 'enabled'
        | 'enable-received'
        | 'enable-pending'
        | 'enable-submtited'
        | 'delete-received'
        | 'delete-pending'
        | 'delete-submitted'
        | 'deleted';
    }
  }
}

export declare namespace NotificationChannels {
  export {
    type NotificationChannel as NotificationChannel,
    type NotificationChannelCreateResponse as NotificationChannelCreateResponse,
    type NotificationChannelRetrieveResponse as NotificationChannelRetrieveResponse,
    type NotificationChannelUpdateResponse as NotificationChannelUpdateResponse,
    type NotificationChannelDeleteResponse as NotificationChannelDeleteResponse,
    type NotificationChannelsDefaultFlatPagination as NotificationChannelsDefaultFlatPagination,
    type NotificationChannelCreateParams as NotificationChannelCreateParams,
    type NotificationChannelUpdateParams as NotificationChannelUpdateParams,
    type NotificationChannelListParams as NotificationChannelListParams,
  };
}
