// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as NumberOrderPhoneNumbersAPI from './number-order-phone-numbers';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NumberOrders extends APIResource {
  /**
   * Creates a phone number order.
   *
   * @example
   * ```ts
   * const numberOrder = await client.numberOrders.create();
   * ```
   */
  create(body: NumberOrderCreateParams, options?: RequestOptions): APIPromise<NumberOrderCreateResponse> {
    return this._client.post('/number_orders', { body, ...options });
  }

  /**
   * Get an existing phone number order.
   *
   * @example
   * ```ts
   * const numberOrder = await client.numberOrders.retrieve(
   *   'number_order_id',
   * );
   * ```
   */
  retrieve(numberOrderID: string, options?: RequestOptions): APIPromise<NumberOrderRetrieveResponse> {
    return this._client.get(path`/number_orders/${numberOrderID}`, options);
  }

  /**
   * Updates a phone number order.
   *
   * @example
   * ```ts
   * const numberOrder = await client.numberOrders.update(
   *   'number_order_id',
   * );
   * ```
   */
  update(
    numberOrderID: string,
    body: NumberOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NumberOrderUpdateResponse> {
    return this._client.patch(path`/number_orders/${numberOrderID}`, { body, ...options });
  }

  /**
   * Get a paginated list of number orders.
   *
   * @example
   * ```ts
   * const numberOrders = await client.numberOrders.list();
   * ```
   */
  list(
    query: NumberOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberOrderListResponse> {
    return this._client.get('/number_orders', { query, ...options });
  }
}

export interface NumberOrderWithPhoneNumbers {
  id?: string;

  /**
   * Identifies the messaging profile associated with the phone number.
   */
  billing_group_id?: string;

  /**
   * Identifies the connection associated with this phone number.
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
   * Identifies the messaging profile associated with the phone number.
   */
  messaging_profile_id?: string;

  phone_numbers?: Array<PhoneNumber>;

  /**
   * The count of phone numbers in the number order.
   */
  phone_numbers_count?: number;

  record_type?: string;

  /**
   * True if all requirements are met for every phone number, false otherwise.
   */
  requirements_met?: boolean;

  /**
   * The status of the order.
   */
  status?: 'pending' | 'success' | 'failure';

  sub_number_orders_ids?: Array<string>;

  /**
   * An ISO 8901 datetime string for when the number order was updated.
   */
  updated_at?: string;
}

export interface PhoneNumber {
  id?: string;

  bundle_id?: string;

  /**
   * Country code of the phone number
   */
  country_code?: string;

  /**
   * The ISO 3166-1 alpha-2 country code of the phone number.
   */
  country_iso_alpha2?: string;

  phone_number?: string;

  /**
   * Phone number type
   */
  phone_number_type?: 'local' | 'mobile' | 'national' | 'shared_cost' | 'toll_free';

  record_type?: string;

  regulatory_requirements?: Array<Shared.SubNumberOrderRegulatoryRequirementWithValue>;

  /**
   * True if all requirements are met for a phone number, false otherwise.
   */
  requirements_met?: boolean;

  /**
   * Status of document requirements (if applicable)
   */
  requirements_status?:
    | 'pending'
    | 'approved'
    | 'cancelled'
    | 'deleted'
    | 'requirement-info-exception'
    | 'requirement-info-pending'
    | 'requirement-info-under-review';

  /**
   * The status of the phone number in the order.
   */
  status?: 'pending' | 'success' | 'failure';
}

export interface NumberOrderCreateResponse {
  data?: NumberOrderWithPhoneNumbers;
}

export interface NumberOrderRetrieveResponse {
  data?: NumberOrderWithPhoneNumbers;
}

export interface NumberOrderUpdateResponse {
  data?: NumberOrderWithPhoneNumbers;
}

export interface NumberOrderListResponse {
  data?: Array<NumberOrderListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace NumberOrderListResponse {
  export interface Data {
    id?: string;

    /**
     * Identifies the messaging profile associated with the phone number.
     */
    billing_group_id?: string;

    /**
     * Identifies the connection associated with this phone number.
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
     * Identifies the messaging profile associated with the phone number.
     */
    messaging_profile_id?: string;

    phone_numbers?: Array<Data.PhoneNumber>;

    /**
     * The count of phone numbers in the number order.
     */
    phone_numbers_count?: number;

    record_type?: string;

    /**
     * True if all requirements are met for every phone number, false otherwise.
     */
    requirements_met?: boolean;

    /**
     * The status of the order.
     */
    status?: 'pending' | 'success' | 'failure';

    sub_number_orders_ids?: Array<string>;

    /**
     * An ISO 8901 datetime string for when the number order was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * The unique phone numbers given as arguments in the job creation.
     */
    export interface PhoneNumber {
      /**
       * The phone number's ID
       */
      id?: string;

      /**
       * The phone number in e164 format.
       */
      phone_number?: string;
    }
  }
}

export interface NumberOrderCreateParams {
  /**
   * Identifies the billing group associated with the phone number.
   */
  billing_group_id?: string;

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

  phone_numbers?: Array<NumberOrderCreateParams.PhoneNumber>;
}

export namespace NumberOrderCreateParams {
  export interface PhoneNumber {
    /**
     * e164_phone_number
     */
    phone_number: string;

    /**
     * ID of bundle to associate the number to
     */
    bundle_id?: string;

    /**
     * ID of requirement group to use to satisfy number requirements
     */
    requirement_group_id?: string;
  }
}

export interface NumberOrderUpdateParams {
  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  regulatory_requirements?: Array<NumberOrderPhoneNumbersAPI.UpdateRegulatoryRequirement>;
}

export interface NumberOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers_count], filter[customer_reference],
   * filter[requirements_met]
   */
  filter?: NumberOrderListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: NumberOrderListParams.Page;
}

export namespace NumberOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers_count], filter[customer_reference],
   * filter[requirements_met]
   */
  export interface Filter {
    /**
     * Filter number orders by date range.
     */
    created_at?: Filter.CreatedAt;

    /**
     * Filter number orders via the customer reference set.
     */
    customer_reference?: string;

    /**
     * Filter number order with this amount of numbers
     */
    phone_numbers_count?: string;

    /**
     * Filter number orders by requirements met.
     */
    requirements_met?: boolean;

    /**
     * Filter number orders by status.
     */
    status?: string;
  }

  export namespace Filter {
    /**
     * Filter number orders by date range.
     */
    export interface CreatedAt {
      /**
       * Filter number orders later than this value.
       */
      gt?: string;

      /**
       * Filter number orders earlier than this value.
       */
      lt?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace NumberOrders {
  export {
    type NumberOrderWithPhoneNumbers as NumberOrderWithPhoneNumbers,
    type PhoneNumber as PhoneNumber,
    type NumberOrderCreateResponse as NumberOrderCreateResponse,
    type NumberOrderRetrieveResponse as NumberOrderRetrieveResponse,
    type NumberOrderUpdateResponse as NumberOrderUpdateResponse,
    type NumberOrderListResponse as NumberOrderListResponse,
    type NumberOrderCreateParams as NumberOrderCreateParams,
    type NumberOrderUpdateParams as NumberOrderUpdateParams,
    type NumberOrderListParams as NumberOrderListParams,
  };
}
