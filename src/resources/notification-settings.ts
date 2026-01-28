// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NotificationSettings extends APIResource {
  /**
   * Add a notification setting.
   *
   * @example
   * ```ts
   * const notificationSetting =
   *   await client.notificationSettings.create();
   * ```
   */
  create(
    body: NotificationSettingCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationSettingCreateResponse> {
    return this._client.post('/notification_settings', { body, ...options });
  }

  /**
   * Get a notification setting.
   *
   * @example
   * ```ts
   * const notificationSetting =
   *   await client.notificationSettings.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NotificationSettingRetrieveResponse> {
    return this._client.get(path`/notification_settings/${id}`, options);
  }

  /**
   * List notification settings.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const notificationSetting of client.notificationSettings.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NotificationSettingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NotificationSettingsDefaultFlatPagination, NotificationSetting> {
    return this._client.getAPIList('/notification_settings', DefaultFlatPagination<NotificationSetting>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a notification setting.
   *
   * @example
   * ```ts
   * const notificationSetting =
   *   await client.notificationSettings.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<NotificationSettingDeleteResponse> {
    return this._client.delete(path`/notification_settings/${id}`, options);
  }
}

export type NotificationSettingsDefaultFlatPagination = DefaultFlatPagination<NotificationSetting>;

export interface NotificationSetting {
  /**
   * A UUID.
   */
  id?: string;

  associated_record_type?: string;

  associated_record_type_value?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A UUID reference to the associated Notification Channel.
   */
  notification_channel_id?: string;

  /**
   * A UUID reference to the associated Notification Event Condition.
   */
  notification_event_condition_id?: string;

  /**
   * A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;

  parameters?: Array<NotificationSetting.Parameter>;

  /**
   * Most preferences apply immediately; however, other may needs to propagate.
   */
  status?:
    | 'enabled'
    | 'enable-received'
    | 'enable-pending'
    | 'enable-submtited'
    | 'delete-received'
    | 'delete-pending'
    | 'delete-submitted'
    | 'deleted';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace NotificationSetting {
  export interface Parameter {
    name?: string;

    value?: string;
  }
}

export interface NotificationSettingCreateResponse {
  data?: NotificationSetting;
}

export interface NotificationSettingRetrieveResponse {
  data?: NotificationSetting;
}

export interface NotificationSettingDeleteResponse {
  data?: NotificationSetting;
}

export interface NotificationSettingCreateParams {
  /**
   * A UUID reference to the associated Notification Channel.
   */
  notification_channel_id?: string;

  /**
   * A UUID reference to the associated Notification Event Condition.
   */
  notification_event_condition_id?: string;

  /**
   * A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;

  parameters?: Array<NotificationSettingCreateParams.Parameter>;
}

export namespace NotificationSettingCreateParams {
  export interface Parameter {
    name?: string;

    value?: string;
  }
}

export interface NotificationSettingListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[associated_record_type][eq], filter[channel_type_id][eq],
   * filter[notification_profile_id][eq], filter[notification_channel][eq],
   * filter[notification_event_condition_id][eq], filter[status][eq]
   */
  filter?: NotificationSettingListParams.Filter;
}

export namespace NotificationSettingListParams {
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

export declare namespace NotificationSettings {
  export {
    type NotificationSetting as NotificationSetting,
    type NotificationSettingCreateResponse as NotificationSettingCreateResponse,
    type NotificationSettingRetrieveResponse as NotificationSettingRetrieveResponse,
    type NotificationSettingDeleteResponse as NotificationSettingDeleteResponse,
    type NotificationSettingsDefaultFlatPagination as NotificationSettingsDefaultFlatPagination,
    type NotificationSettingCreateParams as NotificationSettingCreateParams,
    type NotificationSettingListParams as NotificationSettingListParams,
  };
}
