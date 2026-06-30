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
  create(body: AdvancedOrderCreateParams, options?: RequestOptions): APIPromise<AdvancedOrderCreateResponse> {
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
  retrieve(orderID: string, options?: RequestOptions): APIPromise<AdvancedOrderRetrieveResponse> {
    return this._client.get(path`/advanced_orders/${orderID}`, options);
  }

  /**
   * List Advanced Orders
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
   * Update Advanced Order
   *
   * @example
   * ```ts
   * const response =
   *   await client.advancedOrders.updateRequirementGroup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  updateRequirementGroup(
    advancedOrderID: string,
    body: AdvancedOrderUpdateRequirementGroupParams,
    options?: RequestOptions,
  ): APIPromise<AdvancedOrderUpdateRequirementGroupResponse> {
    return this._client.patch(path`/advanced_orders/${advancedOrderID}/requirement_group`, {
      body,
      ...options,
    });
  }
}

export interface AdvancedOrder {
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

export interface AdvancedOrderCreateResponse {
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

export interface AdvancedOrderRetrieveResponse {
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

export interface AdvancedOrderListResponse {
  data?: Array<AdvancedOrderListResponse.Data>;
}

export namespace AdvancedOrderListResponse {
  export interface Data {
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
}

export interface AdvancedOrderUpdateRequirementGroupResponse {
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
    type AdvancedOrderCreateResponse as AdvancedOrderCreateResponse,
    type AdvancedOrderRetrieveResponse as AdvancedOrderRetrieveResponse,
    type AdvancedOrderListResponse as AdvancedOrderListResponse,
    type AdvancedOrderUpdateRequirementGroupResponse as AdvancedOrderUpdateRequirementGroupResponse,
    type AdvancedOrderCreateParams as AdvancedOrderCreateParams,
    type AdvancedOrderUpdateRequirementGroupParams as AdvancedOrderUpdateRequirementGroupParams,
  };
}
