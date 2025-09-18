// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AdvancedOrders extends APIResource {
  /**
   * Create Advanced Order
   *
   * @example
   * ```ts
   * const advancedOrder = await client.advancedOrders.create();
   * ```
   */
  create(body: AdvancedOrderCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/advanced_orders', { body, ...options });
  }

  /**
   * Get Advanced Order
   *
   * @example
   * ```ts
   * const advancedOrder = await client.advancedOrders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(orderID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/advanced_orders/${orderID}`, options);
  }

  /**
   * Update Advanced Order
   *
   * @example
   * ```ts
   * const advancedOrder = await client.advancedOrders.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(orderID: string, body: AdvancedOrderUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/advanced_orders/${orderID}`, { body, ...options });
  }

  /**
   * List Advanced Orders
   *
   * @example
   * ```ts
   * const advancedOrders = await client.advancedOrders.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/advanced_orders', options);
  }
}

/**
 * An Advanced Order Response
 */
export type AdvancedOrderCreateResponse = unknown;

/**
 * An Advanced Order Response
 */
export type AdvancedOrderRetrieveResponse = unknown;

/**
 * An Advanced Order Response
 */
export type AdvancedOrderUpdateResponse = unknown;

/**
 * An array of Advanced Order Responses
 */
export type AdvancedOrderListResponse = unknown;

export interface AdvancedOrderCreateParams {
  area_code?: string;

  comments?: string;

  country_code?: string;

  customer_reference?: string;

  features?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>;

  phone_number_type?: 'local' | 'mobile' | 'toll_free' | 'shared_cost' | 'national' | 'landline';

  quantity?: number;

  /**
   * The ID of the requirement group to associate with this advanced order
   */
  requirement_group_id?: string;
}

export interface AdvancedOrderUpdateParams {
  area_code?: string;

  comments?: string;

  country_code?: string;

  customer_reference?: string;

  features?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>;

  phone_number_type?: 'local' | 'mobile' | 'toll_free' | 'shared_cost' | 'national' | 'landline';

  quantity?: number;

  /**
   * The ID of the requirement group to associate with this advanced order
   */
  requirement_group_id?: string;
}

export declare namespace AdvancedOrders {
  export {
    type AdvancedOrderCreateResponse as AdvancedOrderCreateResponse,
    type AdvancedOrderRetrieveResponse as AdvancedOrderRetrieveResponse,
    type AdvancedOrderUpdateResponse as AdvancedOrderUpdateResponse,
    type AdvancedOrderListResponse as AdvancedOrderListResponse,
    type AdvancedOrderCreateParams as AdvancedOrderCreateParams,
    type AdvancedOrderUpdateParams as AdvancedOrderUpdateParams,
  };
}
