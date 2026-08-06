// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AdvancedOrders extends APIResource {
  /**
   * Returns the advanced number orders associated with the account. Each result
   * includes the order configuration and its current state.
   *
   * @example
   * ```ts
   * const advancedOrders = await client.advancedOrders.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AdvancedOrderListResponse> {
    return this._client.get('/advanced_orders', options);
  }

  /**
   * Creates an advanced number order from the requested order configuration. The
   * response contains the resulting advanced order and its initial state.
   *
   * @example
   * ```ts
   * const advancedOrder = await client.advancedOrders.create();
   * ```
   */
  create(body: AdvancedOrderCreateParams, options?: RequestOptions): APIPromise<AdvancedOrder> {
    return this._client.post('/advanced_orders', { body, ...options });
  }

  /**
   * Returns the advanced number order identified by `order_id`, including its
   * configuration and current state.
   *
   * @example
   * ```ts
   * const advancedOrder = await client.advancedOrders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(orderID: string, options?: RequestOptions): APIPromise<AdvancedOrder> {
    return this._client.get(path`/advanced_orders/${orderID}`, options);
  }

  /**
   * Updates the requirement-group configuration for the specified advanced number
   * order. The response contains the updated advanced order.
   *
   * @example
   * ```ts
   * const advancedOrder =
   *   await client.advancedOrders.updateRequirementGroup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  updateRequirementGroup(
    advancedOrderID: string,
    body: AdvancedOrderUpdateRequirementGroupParams,
    options?: RequestOptions,
  ): APIPromise<AdvancedOrder> {
    return this._client.patch(path`/advanced_orders/${advancedOrderID}/requirement_group`, {
      body,
      ...options,
    });
  }
}

export interface AdvancedOrder {
  id?: string;

  area_code?: string;

  comments?: string;

  country_code?: string;

  customer_reference?: string;

  features?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>;

  orders?: Array<string>;

  phone_number_type?: Array<'local' | 'mobile' | 'toll_free' | 'shared_cost' | 'national' | 'landline'>;

  quantity?: number;

  /**
   * The ID of the requirement group associated with this advanced order
   */
  requirement_group_id?: string;

  status?: Array<'pending' | 'processing' | 'ordered'>;
}

export interface AdvancedOrderRequest {
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

export interface AdvancedOrderListResponse {
  data?: Array<AdvancedOrder>;
}

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

export interface AdvancedOrderUpdateRequirementGroupParams {
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
    type AdvancedOrder as AdvancedOrder,
    type AdvancedOrderRequest as AdvancedOrderRequest,
    type AdvancedOrderListResponse as AdvancedOrderListResponse,
    type AdvancedOrderCreateParams as AdvancedOrderCreateParams,
    type AdvancedOrderUpdateRequirementGroupParams as AdvancedOrderUpdateRequirementGroupParams,
  };
}
