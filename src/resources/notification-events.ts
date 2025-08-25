// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class NotificationEvents extends APIResource {
  /**
   * Returns a list of your notifications events.
   */
  list(
    query: NotificationEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationEventListResponse> {
    return this._client.get('/notification_events', { query, ...options });
  }
}

export interface NotificationEventListResponse {
  data?: Array<NotificationEventListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace NotificationEventListResponse {
  /**
   * An object representing the available notifications.
   */
  export interface Data {
    /**
     * A UUID.
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    enabled?: boolean;

    /**
     * A human readable name.
     */
    name?: string;

    notification_category?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface NotificationEventListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: NotificationEventListParams.Page;
}

export namespace NotificationEventListParams {
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

export declare namespace NotificationEvents {
  export {
    type NotificationEventListResponse as NotificationEventListResponse,
    type NotificationEventListParams as NotificationEventListParams,
  };
}
