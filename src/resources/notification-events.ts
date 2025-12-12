// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultPagination, type DefaultPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class NotificationEvents extends APIResource {
  /**
   * Returns a list of your notifications events.
   */
  list(
    query: NotificationEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NotificationEventListResponsesDefaultPagination, NotificationEventListResponse> {
    return this._client.getAPIList('/notification_events', DefaultPagination<NotificationEventListResponse>, {
      query,
      ...options,
    });
  }
}

export type NotificationEventListResponsesDefaultPagination =
  DefaultPagination<NotificationEventListResponse>;

/**
 * An object representing the available notifications.
 */
export interface NotificationEventListResponse {
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

export interface NotificationEventListParams extends DefaultPaginationParams {}

export declare namespace NotificationEvents {
  export {
    type NotificationEventListResponse as NotificationEventListResponse,
    type NotificationEventListResponsesDefaultPagination as NotificationEventListResponsesDefaultPagination,
    type NotificationEventListParams as NotificationEventListParams,
  };
}
