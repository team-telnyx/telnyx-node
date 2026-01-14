// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SimCardOrders extends APIResource {
  /**
   * Creates a new order for SIM cards.
   *
   * @example
   * ```ts
   * const simCardOrder = await client.simCardOrders.create({
   *   address_id: '1293384261075731499',
   *   quantity: 23,
   * });
   * ```
   */
  create(body: SimCardOrderCreateParams, options?: RequestOptions): APIPromise<SimCardOrderCreateResponse> {
    return this._client.post('/sim_card_orders', { body, ...options });
  }

  /**
   * Get a single SIM card order by its ID.
   *
   * @example
   * ```ts
   * const simCardOrder = await client.simCardOrders.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SimCardOrderRetrieveResponse> {
    return this._client.get(path`/sim_card_orders/${id}`, options);
  }

  /**
   * Get all SIM card orders according to filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardOrder of client.simCardOrders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SimCardOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimCardOrdersDefaultFlatPagination, SimCardOrder> {
    return this._client.getAPIList('/sim_card_orders', DefaultFlatPagination<SimCardOrder>, {
      query,
      ...options,
    });
  }
}

export type SimCardOrdersDefaultFlatPagination = DefaultFlatPagination<SimCardOrder>;

export interface SimCardOrder {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * An object representing the total cost of the order.
   */
  cost?: SimCardOrder.Cost;

  /**
   * ISO 8601 formatted date-time indicating when the resource was last created.
   */
  created_at?: string;

  /**
   * An object representing the address information from when the order was
   * submitted.
   */
  order_address?: SimCardOrder.OrderAddress;

  /**
   * The amount of SIM cards requested in the SIM card order.
   */
  quantity?: number;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The current status of the SIM Card order.<ul> <li><code>pending</code> - the
   * order is waiting to be processed.</li> <li><code>processing</code> - the order
   * is currently being processed.</li> <li><code>ready_to_ship</code> - the order is
   * ready to be shipped to the specified <b>address</b>.</li>
   * <li><code>shipped</code> - the order was shipped and is on its way to be
   * delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the
   * order was delivered to the specified <b>address</b>.</li>
   * <li><code>canceled</code> - the order was canceled.</li> </ul>
   */
  status?: 'pending' | 'processing' | 'ready_to_ship' | 'shipped' | 'delivered' | 'canceled';

  /**
   * The URL used to get tracking information about the order.
   */
  tracking_url?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace SimCardOrder {
  /**
   * An object representing the total cost of the order.
   */
  export interface Cost {
    /**
     * A string representing the cost amount.
     */
    amount?: string;

    /**
     * Filter by ISO 4217 currency string.
     */
    currency?: string;
  }

  /**
   * An object representing the address information from when the order was
   * submitted.
   */
  export interface OrderAddress {
    /**
     * Uniquely identifies the address for the order.
     */
    id?: string;

    /**
     * State or province where the address is located.
     */
    administrative_area?: string;

    /**
     * The name of the business where the address is located.
     */
    business_name?: string;

    /**
     * The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     */
    country_code?: string;

    /**
     * Supplemental field for address information.
     */
    extended_address?: string;

    /**
     * The first name of the shipping recipient.
     */
    first_name?: string;

    /**
     * The last name of the shipping recipient.
     */
    last_name?: string;

    /**
     * The name of the city where the address is located.
     */
    locality?: string;

    /**
     * Postal code for the address.
     */
    postal_code?: string;

    /**
     * The name of the street where the address is located.
     */
    street_address?: string;
  }
}

export interface SimCardOrderCreateResponse {
  data?: SimCardOrder;
}

export interface SimCardOrderRetrieveResponse {
  data?: SimCardOrder;
}

export interface SimCardOrderCreateParams {
  /**
   * Uniquely identifies the address for the order.
   */
  address_id: string;

  /**
   * The amount of SIM cards to order.
   */
  quantity: number;
}

export interface SimCardOrderListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for SIM card orders (deepObject style).
   * Originally: filter[created_at], filter[updated_at], filter[quantity],
   * filter[cost.amount], filter[cost.currency], filter[address.id],
   * filter[address.street_address], filter[address.extended_address],
   * filter[address.locality], filter[address.administrative_area],
   * filter[address.country_code], filter[address.postal_code]
   */
  filter?: SimCardOrderListParams.Filter;
}

export namespace SimCardOrderListParams {
  /**
   * Consolidated filter parameter for SIM card orders (deepObject style).
   * Originally: filter[created_at], filter[updated_at], filter[quantity],
   * filter[cost.amount], filter[cost.currency], filter[address.id],
   * filter[address.street_address], filter[address.extended_address],
   * filter[address.locality], filter[address.administrative_area],
   * filter[address.country_code], filter[address.postal_code]
   */
  export interface Filter {
    /**
     * Filter by state or province where the address is located.
     */
    'address.administrative_area'?: string;

    /**
     * Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country
     * code.
     */
    'address.country_code'?: string;

    /**
     * Returns entries with matching name of the supplemental field for address
     * information.
     */
    'address.extended_address'?: string;

    /**
     * Uniquely identifies the address for the order.
     */
    'address.id'?: string;

    /**
     * Filter by the name of the city where the address is located.
     */
    'address.locality'?: string;

    /**
     * Filter by postal code for the address.
     */
    'address.postal_code'?: string;

    /**
     * Returns entries with matching name of the street where the address is located.
     */
    'address.street_address'?: string;

    /**
     * The total monetary amount of the order.
     */
    'cost.amount'?: string;

    /**
     * Filter by ISO 4217 currency string.
     */
    'cost.currency'?: string;

    /**
     * Filter by ISO 8601 formatted date-time string matching resource creation
     * date-time.
     */
    created_at?: string;

    /**
     * Filter orders by how many SIM cards were ordered.
     */
    quantity?: number;

    /**
     * Filter by ISO 8601 formatted date-time string matching resource last update
     * date-time.
     */
    updated_at?: string;
  }
}

export declare namespace SimCardOrders {
  export {
    type SimCardOrder as SimCardOrder,
    type SimCardOrderCreateResponse as SimCardOrderCreateResponse,
    type SimCardOrderRetrieveResponse as SimCardOrderRetrieveResponse,
    type SimCardOrdersDefaultFlatPagination as SimCardOrdersDefaultFlatPagination,
    type SimCardOrderCreateParams as SimCardOrderCreateParams,
    type SimCardOrderListParams as SimCardOrderListParams,
  };
}
