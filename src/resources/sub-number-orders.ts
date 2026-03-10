// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as NumberOrderPhoneNumbersAPI from './number-order-phone-numbers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubNumberOrders extends APIResource {
  /**
   * Get an existing sub number order.
   *
   * @example
   * ```ts
   * const subNumberOrder =
   *   await client.subNumberOrders.retrieve(
   *     'sub_number_order_id',
   *   );
   * ```
   */
  retrieve(
    subNumberOrderID: string,
    query: SubNumberOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderRetrieveResponse> {
    return this._client.get(path`/sub_number_orders/${subNumberOrderID}`, { query, ...options });
  }

  /**
   * Updates a sub number order.
   *
   * @example
   * ```ts
   * const subNumberOrder = await client.subNumberOrders.update(
   *   'sub_number_order_id',
   * );
   * ```
   */
  update(
    subNumberOrderID: string,
    body: SubNumberOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderUpdateResponse> {
    return this._client.patch(path`/sub_number_orders/${subNumberOrderID}`, { body, ...options });
  }

  /**
   * Get a paginated list of sub number orders.
   *
   * @example
   * ```ts
   * const subNumberOrders = await client.subNumberOrders.list();
   * ```
   */
  list(
    query: SubNumberOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderListResponse> {
    return this._client.get('/sub_number_orders', { query, ...options });
  }

  /**
   * Allows you to cancel a sub number order in 'pending' status.
   *
   * @example
   * ```ts
   * const response = await client.subNumberOrders.cancel(
   *   'sub_number_order_id',
   * );
   * ```
   */
  cancel(subNumberOrderID: string, options?: RequestOptions): APIPromise<SubNumberOrderCancelResponse> {
    return this._client.patch(path`/sub_number_orders/${subNumberOrderID}/cancel`, options);
  }

  /**
   * Update requirement group for a sub number order
   *
   * @example
   * ```ts
   * const response =
   *   await client.subNumberOrders.updateRequirementGroup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       requirement_group_id:
   *         'a4b201f9-8646-4e54-a7d2-b2e403eeaf8c',
   *     },
   *   );
   * ```
   */
  updateRequirementGroup(
    id: string,
    body: SubNumberOrderUpdateRequirementGroupParams,
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderUpdateRequirementGroupResponse> {
    return this._client.post(path`/sub_number_orders/${id}/requirement_group`, { body, ...options });
  }
}

export interface SubNumberOrder {
  id?: string;

  country_code?: string;

  /**
   * An ISO 8901 datetime string denoting when the number order was created.
   */
  created_at?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * True if the sub number order is a block sub number order
   */
  is_block_sub_number_order?: boolean;

  order_request_id?: string;

  phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline';

  /**
   * The count of phone numbers in the number order.
   */
  phone_numbers_count?: number;

  record_type?: string;

  regulatory_requirements?: Array<SubNumberOrderRegulatoryRequirement>;

  /**
   * True if all requirements are met for every phone number, false otherwise.
   */
  requirements_met?: boolean;

  /**
   * The status of the order.
   */
  status?: 'pending' | 'success' | 'failure';

  /**
   * An ISO 8901 datetime string for when the number order was updated.
   */
  updated_at?: string;

  user_id?: string;
}

export interface SubNumberOrderRegulatoryRequirement {
  field_type?: 'textual' | 'datetime' | 'address' | 'document';

  record_type?: string;

  /**
   * Unique id for a requirement.
   */
  requirement_id?: string;
}

export interface SubNumberOrderRetrieveResponse {
  data?: SubNumberOrder;
}

export interface SubNumberOrderUpdateResponse {
  data?: SubNumberOrder;
}

export interface SubNumberOrderListResponse {
  data?: Array<SubNumberOrder>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface SubNumberOrderCancelResponse {
  data?: SubNumberOrder;
}

export interface SubNumberOrderUpdateRequirementGroupResponse {
  data?: SubNumberOrderUpdateRequirementGroupResponse.Data;
}

export namespace SubNumberOrderUpdateRequirementGroupResponse {
  export interface Data {
    id?: string;

    country_code?: string;

    created_at?: string;

    customer_reference?: string;

    is_block_sub_number_order?: boolean;

    order_request_id?: string;

    phone_number_type?: string;

    phone_numbers?: Array<Data.PhoneNumber>;

    phone_numbers_count?: number;

    record_type?: string;

    regulatory_requirements?: Array<Data.RegulatoryRequirement>;

    requirements_met?: boolean;

    status?: string;

    updated_at?: string;
  }

  export namespace Data {
    export interface PhoneNumber {
      id?: string;

      bundle_id?: string | null;

      country_code?: string;

      phone_number?: string;

      phone_number_type?: string;

      record_type?: string;

      regulatory_requirements?: Array<PhoneNumber.RegulatoryRequirement>;

      requirements_met?: boolean;

      requirements_status?: string;

      status?: string;
    }

    export namespace PhoneNumber {
      export interface RegulatoryRequirement {
        field_type?: string;

        field_value?: string;

        requirement_id?: string;

        status?: string;
      }
    }

    export interface RegulatoryRequirement {
      field_type?: string;

      record_type?: string;

      requirement_id?: string;
    }
  }
}

export interface SubNumberOrderRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[include_phone_numbers]
   */
  filter?: SubNumberOrderRetrieveParams.Filter;
}

export namespace SubNumberOrderRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[include_phone_numbers]
   */
  export interface Filter {
    /**
     * Include the first 50 phone number objects in the results
     */
    include_phone_numbers?: boolean;
  }
}

export interface SubNumberOrderUpdateParams {
  regulatory_requirements?: Array<NumberOrderPhoneNumbersAPI.UpdateRegulatoryRequirement>;
}

export interface SubNumberOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[order_request_id], filter[country_code], filter[phone_number_type],
   * filter[phone_numbers_count]
   */
  filter?: SubNumberOrderListParams.Filter;
}

export namespace SubNumberOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[order_request_id], filter[country_code], filter[phone_number_type],
   * filter[phone_numbers_count]
   */
  export interface Filter {
    /**
     * ISO alpha-2 country code.
     */
    country_code?: string;

    /**
     * ID of the number order the sub number order belongs to
     */
    order_request_id?: string;

    /**
     * Phone Number Type
     */
    phone_number_type?: string;

    /**
     * Amount of numbers in the sub number order
     */
    phone_numbers_count?: number;

    /**
     * Filter sub number orders by status.
     */
    status?: string;
  }
}

export interface SubNumberOrderUpdateRequirementGroupParams {
  /**
   * The ID of the requirement group to associate
   */
  requirement_group_id: string;
}

export declare namespace SubNumberOrders {
  export {
    type SubNumberOrder as SubNumberOrder,
    type SubNumberOrderRegulatoryRequirement as SubNumberOrderRegulatoryRequirement,
    type SubNumberOrderRetrieveResponse as SubNumberOrderRetrieveResponse,
    type SubNumberOrderUpdateResponse as SubNumberOrderUpdateResponse,
    type SubNumberOrderListResponse as SubNumberOrderListResponse,
    type SubNumberOrderCancelResponse as SubNumberOrderCancelResponse,
    type SubNumberOrderUpdateRequirementGroupResponse as SubNumberOrderUpdateRequirementGroupResponse,
    type SubNumberOrderRetrieveParams as SubNumberOrderRetrieveParams,
    type SubNumberOrderUpdateParams as SubNumberOrderUpdateParams,
    type SubNumberOrderListParams as SubNumberOrderListParams,
    type SubNumberOrderUpdateRequirementGroupParams as SubNumberOrderUpdateRequirementGroupParams,
  };
}
