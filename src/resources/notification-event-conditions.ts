// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class NotificationEventConditions extends APIResource {
  /**
   * Returns a list of your notifications events conditions.
   */
  list(
    query: NotificationEventConditionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    NotificationEventConditionListResponsesDefaultFlatPagination,
    NotificationEventConditionListResponse
  > {
    return this._client.getAPIList(
      '/notification_event_conditions',
      DefaultFlatPagination<NotificationEventConditionListResponse>,
      { query, ...options },
    );
  }
}

export type NotificationEventConditionListResponsesDefaultFlatPagination =
  DefaultFlatPagination<NotificationEventConditionListResponse>;

export interface NotificationEventConditionListResponse {
  /**
   * A UUID.
   */
  id?: string;

  /**
   * Dictates whether a notification channel id needs to be provided when creating a
   * notficiation setting.
   */
  allow_multiple_channels?: boolean;

  associated_record_type?: 'account' | 'phone_number';

  /**
   * Dictates whether a notification setting will take effect immediately.
   */
  asynchronous?: boolean;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  description?: string;

  enabled?: boolean;

  name?: string;

  notification_event_id?: string;

  parameters?: Array<NotificationEventConditionListResponse.Parameter>;

  /**
   * Dictates the supported notification channel types that can be emitted.
   */
  supported_channels?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace NotificationEventConditionListResponse {
  export interface Parameter {
    data_type?: string;

    name?: string;

    optional?: boolean;
  }
}

export interface NotificationEventConditionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[associated_record_type][eq], filter[channel_type_id][eq],
   * filter[notification_profile_id][eq], filter[notification_channel][eq],
   * filter[notification_event_condition_id][eq], filter[status][eq]
   */
  filter?: NotificationEventConditionListParams.Filter;
}

export namespace NotificationEventConditionListParams {
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

export declare namespace NotificationEventConditions {
  export {
    type NotificationEventConditionListResponse as NotificationEventConditionListResponse,
    type NotificationEventConditionListResponsesDefaultFlatPagination as NotificationEventConditionListResponsesDefaultFlatPagination,
    type NotificationEventConditionListParams as NotificationEventConditionListParams,
  };
}
