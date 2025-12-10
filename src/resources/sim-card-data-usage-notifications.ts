// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SimCardDataUsageNotifications extends APIResource {
  /**
   * Creates a new SIM card data usage notification.
   *
   * @example
   * ```ts
   * const simCardDataUsageNotification =
   *   await client.simCardDataUsageNotifications.create({
   *     sim_card_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     threshold: {},
   *   });
   * ```
   */
  create(
    body: SimCardDataUsageNotificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SimCardDataUsageNotificationCreateResponse> {
    return this._client.post('/sim_card_data_usage_notifications', { body, ...options });
  }

  /**
   * Get a single SIM Card Data Usage Notification.
   *
   * @example
   * ```ts
   * const simCardDataUsageNotification =
   *   await client.simCardDataUsageNotifications.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SimCardDataUsageNotificationRetrieveResponse> {
    return this._client.get(path`/sim_card_data_usage_notifications/${id}`, options);
  }

  /**
   * Updates information for a SIM Card Data Usage Notification.
   *
   * @example
   * ```ts
   * const simCardDataUsageNotification =
   *   await client.simCardDataUsageNotifications.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  update(
    id: string,
    body: SimCardDataUsageNotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SimCardDataUsageNotificationUpdateResponse> {
    return this._client.patch(path`/sim_card_data_usage_notifications/${id}`, { body, ...options });
  }

  /**
   * Lists a paginated collection of SIM card data usage notifications. It enables
   * exploring the collection using specific filters.
   *
   * @example
   * ```ts
   * const simCardDataUsageNotifications =
   *   await client.simCardDataUsageNotifications.list();
   * ```
   */
  list(
    query: SimCardDataUsageNotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimCardDataUsageNotificationListResponse> {
    return this._client.get('/sim_card_data_usage_notifications', { query, ...options });
  }

  /**
   * Delete the SIM Card Data Usage Notification.
   *
   * @example
   * ```ts
   * const simCardDataUsageNotification =
   *   await client.simCardDataUsageNotifications.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SimCardDataUsageNotificationDeleteResponse> {
    return this._client.delete(path`/sim_card_data_usage_notifications/${id}`, options);
  }
}

/**
 * The SIM card individual data usage notification information.
 */
export interface SimCardDataUsageNotification {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * The identification UUID of the related SIM card resource.
   */
  sim_card_id?: string;

  /**
   * Data usage threshold that will trigger the notification.
   */
  threshold?: SimCardDataUsageNotification.Threshold;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace SimCardDataUsageNotification {
  /**
   * Data usage threshold that will trigger the notification.
   */
  export interface Threshold {
    amount?: string;

    unit?: 'MB' | 'GB';
  }
}

export interface SimCardDataUsageNotificationCreateResponse {
  /**
   * The SIM card individual data usage notification information.
   */
  data?: SimCardDataUsageNotification;
}

export interface SimCardDataUsageNotificationRetrieveResponse {
  /**
   * The SIM card individual data usage notification information.
   */
  data?: SimCardDataUsageNotification;
}

export interface SimCardDataUsageNotificationUpdateResponse {
  /**
   * The SIM card individual data usage notification information.
   */
  data?: SimCardDataUsageNotification;
}

export interface SimCardDataUsageNotificationListResponse {
  data?: Array<SimCardDataUsageNotification>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface SimCardDataUsageNotificationDeleteResponse {
  /**
   * The SIM card individual data usage notification information.
   */
  data?: SimCardDataUsageNotification;
}

export interface SimCardDataUsageNotificationCreateParams {
  /**
   * The identification UUID of the related SIM card resource.
   */
  sim_card_id: string;

  /**
   * Data usage threshold that will trigger the notification.
   */
  threshold: SimCardDataUsageNotificationCreateParams.Threshold;
}

export namespace SimCardDataUsageNotificationCreateParams {
  /**
   * Data usage threshold that will trigger the notification.
   */
  export interface Threshold {
    amount?: string;

    unit?: 'MB' | 'GB';
  }
}

export interface SimCardDataUsageNotificationUpdateParams {
  /**
   * The identification UUID of the related SIM card resource.
   */
  sim_card_id?: string;

  /**
   * Data usage threshold that will trigger the notification.
   */
  threshold?: SimCardDataUsageNotificationUpdateParams.Threshold;
}

export namespace SimCardDataUsageNotificationUpdateParams {
  /**
   * Data usage threshold that will trigger the notification.
   */
  export interface Threshold {
    amount?: string;

    unit?: 'MB' | 'GB';
  }
}

export interface SimCardDataUsageNotificationListParams {
  /**
   * A valid SIM card ID.
   */
  'filter[sim_card_id]'?: string;

  /**
   * The page number to load.
   */
  'page[number]'?: number;

  /**
   * The size of the page.
   */
  'page[size]'?: number;
}

export declare namespace SimCardDataUsageNotifications {
  export {
    type SimCardDataUsageNotification as SimCardDataUsageNotification,
    type SimCardDataUsageNotificationCreateResponse as SimCardDataUsageNotificationCreateResponse,
    type SimCardDataUsageNotificationRetrieveResponse as SimCardDataUsageNotificationRetrieveResponse,
    type SimCardDataUsageNotificationUpdateResponse as SimCardDataUsageNotificationUpdateResponse,
    type SimCardDataUsageNotificationListResponse as SimCardDataUsageNotificationListResponse,
    type SimCardDataUsageNotificationDeleteResponse as SimCardDataUsageNotificationDeleteResponse,
    type SimCardDataUsageNotificationCreateParams as SimCardDataUsageNotificationCreateParams,
    type SimCardDataUsageNotificationUpdateParams as SimCardDataUsageNotificationUpdateParams,
    type SimCardDataUsageNotificationListParams as SimCardDataUsageNotificationListParams,
  };
}
