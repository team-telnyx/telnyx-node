// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NotificationProfiles extends APIResource {
  /**
   * Create a notification profile.
   */
  create(
    body: NotificationProfileCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationProfileCreateResponse> {
    return this._client.post('/notification_profiles', { body, ...options });
  }

  /**
   * Get a notification profile.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NotificationProfileRetrieveResponse> {
    return this._client.get(path`/notification_profiles/${id}`, options);
  }

  /**
   * Update a notification profile.
   */
  update(
    notificationProfileID: string,
    body: NotificationProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationProfileUpdateResponse> {
    return this._client.patch(path`/notification_profiles/${notificationProfileID}`, { body, ...options });
  }

  /**
   * Returns a list of your notifications profiles.
   */
  list(
    query: NotificationProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NotificationProfilesDefaultFlatPagination, NotificationProfile> {
    return this._client.getAPIList('/notification_profiles', DefaultFlatPagination<NotificationProfile>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a notification profile.
   */
  delete(id: string, options?: RequestOptions): APIPromise<NotificationProfileDeleteResponse> {
    return this._client.delete(path`/notification_profiles/${id}`, options);
  }
}

export type NotificationProfilesDefaultFlatPagination = DefaultFlatPagination<NotificationProfile>;

/**
 * A Collection of Notification Channels
 */
export interface NotificationProfile {
  /**
   * A UUID.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A human readable name.
   */
  name?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface NotificationProfileCreateResponse {
  /**
   * A Collection of Notification Channels
   */
  data?: NotificationProfile;
}

export interface NotificationProfileRetrieveResponse {
  /**
   * A Collection of Notification Channels
   */
  data?: NotificationProfile;
}

export interface NotificationProfileUpdateResponse {
  /**
   * A Collection of Notification Channels
   */
  data?: NotificationProfile;
}

export interface NotificationProfileDeleteResponse {
  /**
   * A Collection of Notification Channels
   */
  data?: NotificationProfile;
}

export interface NotificationProfileCreateParams {
  /**
   * A human readable name.
   */
  name?: string;
}

export interface NotificationProfileUpdateParams {
  /**
   * A human readable name.
   */
  name?: string;
}

export interface NotificationProfileListParams extends DefaultFlatPaginationParams {}

export declare namespace NotificationProfiles {
  export {
    type NotificationProfile as NotificationProfile,
    type NotificationProfileCreateResponse as NotificationProfileCreateResponse,
    type NotificationProfileRetrieveResponse as NotificationProfileRetrieveResponse,
    type NotificationProfileUpdateResponse as NotificationProfileUpdateResponse,
    type NotificationProfileDeleteResponse as NotificationProfileDeleteResponse,
    type NotificationProfilesDefaultFlatPagination as NotificationProfilesDefaultFlatPagination,
    type NotificationProfileCreateParams as NotificationProfileCreateParams,
    type NotificationProfileUpdateParams as NotificationProfileUpdateParams,
    type NotificationProfileListParams as NotificationProfileListParams,
  };
}
