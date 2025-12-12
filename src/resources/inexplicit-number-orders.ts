// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import {
  DefaultFlatPaginationForInexplicitNumberOrders,
  type DefaultFlatPaginationForInexplicitNumberOrdersParams,
  PagePromise,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InexplicitNumberOrders extends APIResource {
  /**
   * Create an inexplicit number order to programmatically purchase phone numbers
   * without specifying exact numbers.
   */
  create(
    body: InexplicitNumberOrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<InexplicitNumberOrderCreateResponse> {
    return this._client.post('/inexplicit_number_orders', { body, ...options });
  }

  /**
   * Get an existing inexplicit number order by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InexplicitNumberOrderRetrieveResponse> {
    return this._client.get(path`/inexplicit_number_orders/${id}`, options);
  }

  /**
   * Get a paginated list of inexplicit number orders.
   */
  list(
    query: InexplicitNumberOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders,
    InexplicitNumberOrderResponse
  > {
    return this._client.getAPIList(
      '/inexplicit_number_orders',
      DefaultFlatPaginationForInexplicitNumberOrders<InexplicitNumberOrderResponse>,
      { query, ...options },
    );
  }
}

export type InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders =
  DefaultFlatPaginationForInexplicitNumberOrders<InexplicitNumberOrderResponse>;

export interface InexplicitNumberOrderResponse {
  /**
   * Unique identifier for the inexplicit number order
   */
  id?: string;

  /**
   * Billing group id to apply to phone numbers that are purchased
   */
  billing_group_id?: string;

  /**
   * Connection id to apply to phone numbers that are purchased
   */
  connection_id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created
   */
  created_at?: string;

  /**
   * Reference label for the customer
   */
  customer_reference?: string;

  /**
   * Messaging profile id to apply to phone numbers that are purchased
   */
  messaging_profile_id?: string;

  ordering_groups?: Array<InexplicitNumberOrderResponse.OrderingGroup>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated
   */
  updated_at?: string;
}

export namespace InexplicitNumberOrderResponse {
  export interface OrderingGroup {
    /**
     * Filter for phone numbers in a given state / province
     */
    administrative_area?: string;

    /**
     * Quantity of phone numbers allocated
     */
    count_allocated?: number;

    /**
     * Quantity of phone numbers requested
     */
    count_requested?: number;

    /**
     * Country where you would like to purchase phone numbers
     */
    country_iso?: string;

    /**
     * ISO 8601 formatted date indicating when the ordering group was created
     */
    created_at?: string;

    /**
     * Error reason if applicable
     */
    error_reason?: string;

    /**
     * Filter to exclude phone numbers that are currently on hold/reserved for your
     * account.
     */
    exclude_held_numbers?: boolean;

    /**
     * Filter by area code
     */
    national_destination_code?: string;

    /**
     * Array of orders created to fulfill the inexplicit order
     */
    orders?: Array<OrderingGroup.Order>;

    /**
     * Number type
     */
    phone_number_type?: string;

    /**
     * Filter for phone numbers that contain the digits specified
     */
    'phone_number[contains]'?: string;

    /**
     * Filter by the ending digits of the phone number
     */
    'phone_number[ends_with]'?: string;

    /**
     * Filter by the starting digits of the phone number
     */
    'phone_number[starts_with]'?: string;

    /**
     * Filter to exclude phone numbers that need additional time after to purchase to
     * activate. Only applicable for +1 toll_free numbers.
     */
    quickship?: boolean;

    /**
     * Status of the ordering group
     */
    status?: 'pending' | 'processing' | 'failed' | 'success' | 'partial_success';

    /**
     * Ordering strategy used
     */
    strategy?: 'always' | 'never';

    /**
     * ISO 8601 formatted date indicating when the ordering group was updated
     */
    updated_at?: string;
  }

  export namespace OrderingGroup {
    export interface Order {
      /**
       * ID of the main number order
       */
      number_order_id: string;

      /**
       * Array of sub number order IDs
       */
      sub_number_order_ids: Array<string>;
    }
  }
}

export interface InexplicitNumberOrderCreateResponse {
  data?: InexplicitNumberOrderResponse;
}

export interface InexplicitNumberOrderRetrieveResponse {
  data?: InexplicitNumberOrderResponse;
}

export interface InexplicitNumberOrderCreateParams {
  /**
   * Group(s) of numbers to order. You can have multiple ordering_groups objects
   * added to a single request.
   */
  ordering_groups: Array<InexplicitNumberOrderCreateParams.OrderingGroup>;

  /**
   * Billing group id to apply to phone numbers that are purchased
   */
  billing_group_id?: string;

  /**
   * Connection id to apply to phone numbers that are purchased
   */
  connection_id?: string;

  /**
   * Reference label for the customer
   */
  customer_reference?: string;

  /**
   * Messaging profile id to apply to phone numbers that are purchased
   */
  messaging_profile_id?: string;
}

export namespace InexplicitNumberOrderCreateParams {
  export interface OrderingGroup {
    /**
     * Quantity of phone numbers to order
     */
    count_requested: string;

    /**
     * Country where you would like to purchase phone numbers. Allowable values: US, CA
     */
    country_iso: 'US' | 'CA';

    /**
     * Number type (local, toll-free, etc.)
     */
    phone_number_type: string;

    /**
     * Filter for phone numbers in a given state / province
     */
    administrative_area?: string;

    /**
     * Filter to exclude phone numbers that are currently on hold/reserved for your
     * account.
     */
    exclude_held_numbers?: boolean;

    /**
     * Filter for phone numbers that have the features to satisfy your use case (e.g.,
     * ["voice"])
     */
    features?: Array<string>;

    /**
     * Filter for phone numbers in a given city / region / rate center
     */
    locality?: string;

    /**
     * Filter by area code
     */
    national_destination_code?: string;

    /**
     * Phone number search criteria
     */
    phone_number?: OrderingGroup.PhoneNumber;

    /**
     * Filter to exclude phone numbers that need additional time after to purchase to
     * activate. Only applicable for +1 toll_free numbers.
     */
    quickship?: boolean;

    /**
     * Ordering strategy. Define what action should be taken if we don't have enough
     * phone numbers to fulfill your request. Allowable values are: always = proceed
     * with ordering phone numbers, regardless of current inventory levels; never = do
     * not place any orders unless there are enough phone numbers to satisfy the
     * request. If not specified, the always strategy will be enforced.
     */
    strategy?: 'always' | 'never';
  }

  export namespace OrderingGroup {
    /**
     * Phone number search criteria
     */
    export interface PhoneNumber {
      /**
       * Filter for phone numbers that contain the digits specified
       */
      contains?: string;

      /**
       * Filter by the ending digits of the phone number
       */
      ends_with?: string;

      /**
       * Filter by the starting digits of the phone number
       */
      starts_with?: string;
    }
  }
}

export interface InexplicitNumberOrderListParams
  extends DefaultFlatPaginationForInexplicitNumberOrdersParams {}

export declare namespace InexplicitNumberOrders {
  export {
    type InexplicitNumberOrderResponse as InexplicitNumberOrderResponse,
    type InexplicitNumberOrderCreateResponse as InexplicitNumberOrderCreateResponse,
    type InexplicitNumberOrderRetrieveResponse as InexplicitNumberOrderRetrieveResponse,
    type InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders as InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders,
    type InexplicitNumberOrderCreateParams as InexplicitNumberOrderCreateParams,
    type InexplicitNumberOrderListParams as InexplicitNumberOrderListParams,
  };
}
