// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AssociatedPhoneNumbers extends APIResource {
  /**
   * Creates a new associated phone number for a porting order. This is used for
   * partial porting in GB to specify which phone numbers should be kept or
   * disconnected.
   *
   * @example
   * ```ts
   * const associatedPhoneNumber =
   *   await client.portingOrders.associatedPhoneNumbers.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       action: 'keep',
   *       phone_number_range: {},
   *     },
   *   );
   * ```
   */
  create(
    portingOrderID: string,
    body: AssociatedPhoneNumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociatedPhoneNumberCreateResponse> {
    return this._client.post(path`/porting_orders/${portingOrderID}/associated_phone_numbers`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of all associated phone numbers for a porting order. Associated
   * phone numbers are used for partial porting in GB to specify which phone numbers
   * should be kept or disconnected.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portingAssociatedPhoneNumber of client.portingOrders.associatedPhoneNumbers.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    portingOrderID: string,
    query: AssociatedPhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortingAssociatedPhoneNumbersDefaultFlatPagination, PortingAssociatedPhoneNumber> {
    return this._client.getAPIList(
      path`/porting_orders/${portingOrderID}/associated_phone_numbers`,
      DefaultFlatPagination<PortingAssociatedPhoneNumber>,
      { query, ...options },
    );
  }

  /**
   * Deletes an associated phone number from a porting order.
   *
   * @example
   * ```ts
   * const associatedPhoneNumber =
   *   await client.portingOrders.associatedPhoneNumbers.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       porting_order_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(
    id: string,
    params: AssociatedPhoneNumberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AssociatedPhoneNumberDeleteResponse> {
    const { porting_order_id } = params;
    return this._client.delete(
      path`/porting_orders/${porting_order_id}/associated_phone_numbers/${id}`,
      options,
    );
  }
}

export type PortingAssociatedPhoneNumbersDefaultFlatPagination =
  DefaultFlatPagination<PortingAssociatedPhoneNumber>;

export interface PortingAssociatedPhoneNumber {
  /**
   * Uniquely identifies this associated phone number.
   */
  id?: string;

  /**
   * Specifies the action to take with this phone number during partial porting.
   */
  action?: 'keep' | 'disconnect';

  /**
   * Specifies the country code for this associated phone number. It is a two-letter
   * ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Specifies the phone number range for this associated phone number.
   */
  phone_number_range?: PortingAssociatedPhoneNumber.PhoneNumberRange;

  /**
   * Specifies the phone number type for this associated phone number.
   */
  phone_number_type?: 'landline' | 'local' | 'mobile' | 'national' | 'shared_cost' | 'toll_free';

  /**
   * Identifies the porting order associated with this phone number.
   */
  porting_order_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace PortingAssociatedPhoneNumber {
  /**
   * Specifies the phone number range for this associated phone number.
   */
  export interface PhoneNumberRange {
    /**
     * Specifies the end of the phone number range for this associated phone number.
     */
    end_at?: string;

    /**
     * Specifies the start of the phone number range for this associated phone number.
     */
    start_at?: string;
  }
}

export interface AssociatedPhoneNumberCreateResponse {
  data?: PortingAssociatedPhoneNumber;
}

export interface AssociatedPhoneNumberDeleteResponse {
  data?: PortingAssociatedPhoneNumber;
}

export interface AssociatedPhoneNumberCreateParams {
  /**
   * Specifies the action to take with this phone number during partial porting.
   */
  action: 'keep' | 'disconnect';

  phone_number_range: AssociatedPhoneNumberCreateParams.PhoneNumberRange;
}

export namespace AssociatedPhoneNumberCreateParams {
  export interface PhoneNumberRange {
    /**
     * Specifies the end of the phone number range for this associated phone number.
     */
    end_at?: string;

    /**
     * Specifies the start of the phone number range for this associated phone number.
     */
    start_at?: string;
  }
}

export interface AssociatedPhoneNumberListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[action]
   */
  filter?: AssociatedPhoneNumberListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: AssociatedPhoneNumberListParams.Sort;
}

export namespace AssociatedPhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[action]
   */
  export interface Filter {
    /**
     * Filter results by action type
     */
    action?: 'keep' | 'disconnect';

    /**
     * Filter results by a phone number. It should be in E.164 format.
     */
    phone_number?: string;
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order
     */
    value?: '-created_at' | 'created_at';
  }
}

export interface AssociatedPhoneNumberDeleteParams {
  /**
   * Identifies the Porting Order associated with the phone number
   */
  porting_order_id: string;
}

export declare namespace AssociatedPhoneNumbers {
  export {
    type PortingAssociatedPhoneNumber as PortingAssociatedPhoneNumber,
    type AssociatedPhoneNumberCreateResponse as AssociatedPhoneNumberCreateResponse,
    type AssociatedPhoneNumberDeleteResponse as AssociatedPhoneNumberDeleteResponse,
    type PortingAssociatedPhoneNumbersDefaultFlatPagination as PortingAssociatedPhoneNumbersDefaultFlatPagination,
    type AssociatedPhoneNumberCreateParams as AssociatedPhoneNumberCreateParams,
    type AssociatedPhoneNumberListParams as AssociatedPhoneNumberListParams,
    type AssociatedPhoneNumberDeleteParams as AssociatedPhoneNumberDeleteParams,
  };
}
