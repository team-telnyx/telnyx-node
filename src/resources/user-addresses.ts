// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UserAddresses extends APIResource {
  /**
   * Creates a user address.
   *
   * @example
   * ```ts
   * const userAddress = await client.userAddresses.create({
   *   business_name: "Toy-O'Kon",
   *   country_code: 'US',
   *   first_name: 'Alfred',
   *   last_name: 'Foster',
   *   locality: 'Austin',
   *   street_address: '600 Congress Avenue',
   * });
   * ```
   */
  create(body: UserAddressCreateParams, options?: RequestOptions): APIPromise<UserAddressCreateResponse> {
    return this._client.post('/user_addresses', { body, ...options });
  }

  /**
   * Retrieves the details of an existing user address.
   *
   * @example
   * ```ts
   * const userAddress = await client.userAddresses.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserAddressRetrieveResponse> {
    return this._client.get(path`/user_addresses/${id}`, options);
  }

  /**
   * Returns a list of your user addresses.
   *
   * @example
   * ```ts
   * const userAddresses = await client.userAddresses.list();
   * ```
   */
  list(
    query: UserAddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserAddressListResponse> {
    return this._client.get('/user_addresses', { query, ...options });
  }
}

export interface UserAddress {
  /**
   * Uniquely identifies the user address.
   */
  id?: string;

  /**
   * The locality of the user address. For US addresses, this corresponds to the
   * state of the address.
   */
  administrative_area?: string;

  /**
   * The borough of the user address. This field is not used for addresses in the US
   * but is used for some international addresses.
   */
  borough?: string;

  /**
   * The business name associated with the user address.
   */
  business_name?: string;

  /**
   * The two-character (ISO 3166-1 alpha-2) country code of the user address.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Additional street address information about the user address such as, but not
   * limited to, unit number or apartment number.
   */
  extended_address?: string;

  /**
   * The first name associated with the user address.
   */
  first_name?: string;

  /**
   * The last name associated with the user address.
   */
  last_name?: string;

  /**
   * The locality of the user address. For US addresses, this corresponds to the city
   * of the address.
   */
  locality?: string;

  /**
   * The neighborhood of the user address. This field is not used for addresses in
   * the US but is used for some international addresses.
   */
  neighborhood?: string;

  /**
   * The phone number associated with the user address.
   */
  phone_number?: string;

  /**
   * The postal code of the user address.
   */
  postal_code?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The primary street address information about the user address.
   */
  street_address?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface UserAddressCreateResponse {
  data?: UserAddress;
}

export interface UserAddressRetrieveResponse {
  data?: UserAddress;
}

export interface UserAddressListResponse {
  data?: Array<UserAddress>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface UserAddressCreateParams {
  /**
   * The business name associated with the user address.
   */
  business_name: string;

  /**
   * The two-character (ISO 3166-1 alpha-2) country code of the user address.
   */
  country_code: string;

  /**
   * The first name associated with the user address.
   */
  first_name: string;

  /**
   * The last name associated with the user address.
   */
  last_name: string;

  /**
   * The locality of the user address. For US addresses, this corresponds to the city
   * of the address.
   */
  locality: string;

  /**
   * The primary street address information about the user address.
   */
  street_address: string;

  /**
   * The locality of the user address. For US addresses, this corresponds to the
   * state of the address.
   */
  administrative_area?: string;

  /**
   * The borough of the user address. This field is not used for addresses in the US
   * but is used for some international addresses.
   */
  borough?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Additional street address information about the user address such as, but not
   * limited to, unit number or apartment number.
   */
  extended_address?: string;

  /**
   * The neighborhood of the user address. This field is not used for addresses in
   * the US but is used for some international addresses.
   */
  neighborhood?: string;

  /**
   * The phone number associated with the user address.
   */
  phone_number?: string;

  /**
   * The postal code of the user address.
   */
  postal_code?: string;

  /**
   * An optional boolean value specifying if verification of the address should be
   * skipped or not. UserAddresses are generally used for shipping addresses, and
   * failure to validate your shipping address will likely result in a failure to
   * deliver SIM cards or other items ordered from Telnyx. Do not use this parameter
   * unless you are sure that the address is correct even though it cannot be
   * validated. If this is set to any value other than true, verification of the
   * address will be attempted, and the user address will not be allowed if
   * verification fails. If verification fails but suggested values are available
   * that might make the address correct, they will be present in the response as
   * well. If this value is set to true, then the verification will not be attempted.
   * Defaults to false (verification will be performed).
   */
  skip_address_verification?: boolean;
}

export interface UserAddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference][eq], filter[customer_reference][contains],
   * filter[street_address][contains]
   */
  filter?: UserAddressListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: UserAddressListParams.Page;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>street_address</code>: sorts the result by the
   *     <code>street_address</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-street_address</code>: sorts the result by the
   *     <code>street_address</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'first_name' | 'last_name' | 'business_name' | 'street_address';
}

export namespace UserAddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference][eq], filter[customer_reference][contains],
   * filter[street_address][contains]
   */
  export interface Filter {
    /**
     * Filter user addresses via the customer reference. Supports both exact matching
     * (eq) and partial matching (contains). Matching is not case-sensitive.
     */
    customer_reference?: Filter.CustomerReference;

    /**
     * Filter user addresses via street address. Supports partial matching (contains).
     * Matching is not case-sensitive.
     */
    street_address?: Filter.StreetAddress;
  }

  export namespace Filter {
    /**
     * Filter user addresses via the customer reference. Supports both exact matching
     * (eq) and partial matching (contains). Matching is not case-sensitive.
     */
    export interface CustomerReference {
      /**
       * If present, user addresses with <code>customer_reference</code> containing the
       * given value will be returned. Matching is not case-sensitive.
       */
      contains?: string;

      /**
       * Filter user addresses via exact customer reference match. Matching is not
       * case-sensitive.
       */
      eq?: string;
    }

    /**
     * Filter user addresses via street address. Supports partial matching (contains).
     * Matching is not case-sensitive.
     */
    export interface StreetAddress {
      /**
       * If present, user addresses with <code>street_address</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
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

export declare namespace UserAddresses {
  export {
    type UserAddress as UserAddress,
    type UserAddressCreateResponse as UserAddressCreateResponse,
    type UserAddressRetrieveResponse as UserAddressRetrieveResponse,
    type UserAddressListResponse as UserAddressListResponse,
    type UserAddressCreateParams as UserAddressCreateParams,
    type UserAddressListParams as UserAddressListParams,
  };
}
