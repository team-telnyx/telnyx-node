// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NumberBlockOrders extends APIResource {
  /**
   * Creates a phone number block order.
   *
   * @example
   * ```ts
   * const numberBlockOrder =
   *   await client.numberBlockOrders.create({
   *     range: 10,
   *     starting_number: '+19705555000',
   *   });
   * ```
   */
  create(
    body: NumberBlockOrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<NumberBlockOrderCreateResponse> {
    return this._client.post('/number_block_orders', { body, ...options });
  }

  /**
   * Get an existing phone number block order.
   *
   * @example
   * ```ts
   * const numberBlockOrder =
   *   await client.numberBlockOrders.retrieve(
   *     'number_block_order_id',
   *   );
   * ```
   */
  retrieve(
    numberBlockOrderID: string,
    options?: RequestOptions,
  ): APIPromise<NumberBlockOrderRetrieveResponse> {
    return this._client.get(path`/number_block_orders/${numberBlockOrderID}`, options);
  }

  /**
   * Get a paginated list of number block orders.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const numberBlockOrder of client.numberBlockOrders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NumberBlockOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NumberBlockOrdersDefaultFlatPagination, NumberBlockOrder> {
    return this._client.getAPIList('/number_block_orders', DefaultFlatPagination<NumberBlockOrder>, {
      query,
      ...options,
    });
  }
}

export type NumberBlockOrdersDefaultFlatPagination = DefaultFlatPagination<NumberBlockOrder>;

export interface NumberBlockOrder {
  id?: string;

  /**
   * Identifies the connection associated to all numbers in the phone number block.
   */
  connection_id?: string;

  /**
   * An ISO 8901 datetime string denoting when the number order was created.
   */
  created_at?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Identifies the messaging profile associated to all numbers in the phone number
   * block.
   */
  messaging_profile_id?: string;

  /**
   * The count of phone numbers in the number order.
   */
  phone_numbers_count?: number;

  /**
   * The phone number range included in the block.
   */
  range?: number;

  record_type?: string;

  /**
   * True if all requirements are met for every phone number, false otherwise.
   */
  requirements_met?: boolean;

  /**
   * Starting phone number block
   */
  starting_number?: string;

  /**
   * The status of the order.
   */
  status?: 'pending' | 'success' | 'failure';

  /**
   * An ISO 8901 datetime string for when the number order was updated.
   */
  updated_at?: string;
}

export interface NumberBlockOrderCreateResponse {
  data?: NumberBlockOrder;
}

export interface NumberBlockOrderRetrieveResponse {
  data?: NumberBlockOrder;
}

export interface NumberBlockOrderCreateParams {
  /**
   * The phone number range included in the block.
   */
  range: number;

  /**
   * Starting phone number block
   */
  starting_number: string;

  /**
   * Identifies the connection associated with this phone number.
   */
  connection_id?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Identifies the messaging profile associated with the phone number.
   */
  messaging_profile_id?: string;
}

export interface NumberBlockOrderListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers.starting_number]
   */
  filter?: NumberBlockOrderListParams.Filter;
}

export namespace NumberBlockOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers.starting_number]
   */
  export interface Filter {
    /**
     * Filter number block orders by date range.
     */
    created_at?: Filter.CreatedAt;

    /**
     * Filter number block orders having these phone numbers.
     */
    'phone_numbers.starting_number'?: string;

    /**
     * Filter number block orders by status.
     */
    status?: string;
  }

  export namespace Filter {
    /**
     * Filter number block orders by date range.
     */
    export interface CreatedAt {
      /**
       * Filter number block orders later than this value.
       */
      gt?: string;

      /**
       * Filter number block orders earlier than this value.
       */
      lt?: string;
    }
  }
}

export declare namespace NumberBlockOrders {
  export {
    type NumberBlockOrder as NumberBlockOrder,
    type NumberBlockOrderCreateResponse as NumberBlockOrderCreateResponse,
    type NumberBlockOrderRetrieveResponse as NumberBlockOrderRetrieveResponse,
    type NumberBlockOrdersDefaultFlatPagination as NumberBlockOrdersDefaultFlatPagination,
    type NumberBlockOrderCreateParams as NumberBlockOrderCreateParams,
    type NumberBlockOrderListParams as NumberBlockOrderListParams,
  };
}
