// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
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
    id: string,
    body: NotificationProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationProfileUpdateResponse> {
    return this._client.patch(path`/notification_profiles/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your notifications profiles.
   */
  list(
    query: NotificationProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationProfileListResponse> {
    return this._client.get('/notification_profiles', { query, ...options });
  }

  /**
   * Delete a notification profile.
   */
  delete(id: string, options?: RequestOptions): APIPromise<NotificationProfileDeleteResponse> {
    return this._client.delete(path`/notification_profiles/${id}`, options);
  }
}

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

export interface NotificationProfileListResponse {
  data?: Array<NotificationProfile>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
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

export interface NotificationProfileListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: NotificationProfileListParams.Page;
}

export namespace NotificationProfileListParams {
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

export declare namespace NotificationProfiles {
  export {
    type NotificationProfile as NotificationProfile,
    type NotificationProfileCreateResponse as NotificationProfileCreateResponse,
    type NotificationProfileRetrieveResponse as NotificationProfileRetrieveResponse,
    type NotificationProfileUpdateResponse as NotificationProfileUpdateResponse,
    type NotificationProfileListResponse as NotificationProfileListResponse,
    type NotificationProfileDeleteResponse as NotificationProfileDeleteResponse,
    type NotificationProfileCreateParams as NotificationProfileCreateParams,
    type NotificationProfileUpdateParams as NotificationProfileUpdateParams,
    type NotificationProfileListParams as NotificationProfileListParams,
  };
}
