// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
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
    simCardDataUsageNotificationID: string,
    body: SimCardDataUsageNotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SimCardDataUsageNotificationUpdateResponse> {
    return this._client.patch(path`/sim_card_data_usage_notifications/${simCardDataUsageNotificationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists a paginated collection of SIM card data usage notifications. It enables
   * exploring the collection using specific filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardDataUsageNotification of client.simCardDataUsageNotifications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SimCardDataUsageNotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimCardDataUsageNotificationsDefaultFlatPagination, SimCardDataUsageNotification> {
    return this._client.getAPIList(
      '/sim_card_data_usage_notifications',
      DefaultFlatPagination<SimCardDataUsageNotification>,
      { query, ...options },
    );
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

export type SimCardDataUsageNotificationsDefaultFlatPagination =
  DefaultFlatPagination<SimCardDataUsageNotification>;

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

export interface SimCardDataUsageNotificationListParams extends DefaultFlatPaginationParams {
  /**
   * A valid SIM card ID.
   */
  'filter[sim_card_id]'?: string;
}

export declare namespace SimCardDataUsageNotifications {
  export {
    type SimCardDataUsageNotification as SimCardDataUsageNotification,
    type SimCardDataUsageNotificationCreateResponse as SimCardDataUsageNotificationCreateResponse,
    type SimCardDataUsageNotificationRetrieveResponse as SimCardDataUsageNotificationRetrieveResponse,
    type SimCardDataUsageNotificationUpdateResponse as SimCardDataUsageNotificationUpdateResponse,
    type SimCardDataUsageNotificationDeleteResponse as SimCardDataUsageNotificationDeleteResponse,
    type SimCardDataUsageNotificationsDefaultFlatPagination as SimCardDataUsageNotificationsDefaultFlatPagination,
    type SimCardDataUsageNotificationCreateParams as SimCardDataUsageNotificationCreateParams,
    type SimCardDataUsageNotificationUpdateParams as SimCardDataUsageNotificationUpdateParams,
    type SimCardDataUsageNotificationListParams as SimCardDataUsageNotificationListParams,
  };
}
