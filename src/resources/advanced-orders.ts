// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AdvancedOrders extends APIResource {
  /**
   * Create Advanced Order
   */
  create(body: AdvancedOrderCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/advanced_orders', { body, ...options });
  }

  /**
   * Get Advanced Order
   */
  retrieve(orderID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/advanced_orders/${orderID}`, options);
  }

  /**
   * List Advanced Orders
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
}

export declare namespace AdvancedOrders {
  export {
    type AdvancedOrderCreateResponse as AdvancedOrderCreateResponse,
    type AdvancedOrderRetrieveResponse as AdvancedOrderRetrieveResponse,
    type AdvancedOrderListResponse as AdvancedOrderListResponse,
    type AdvancedOrderCreateParams as AdvancedOrderCreateParams,
  };
}
