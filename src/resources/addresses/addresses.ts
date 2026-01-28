// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionAcceptSuggestionsParams,
  ActionAcceptSuggestionsResponse,
  ActionValidateParams,
  ActionValidateResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Addresses extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates an address.
   *
   * @example
   * ```ts
   * const address = await client.addresses.create({
   *   business_name: "Toy-O'Kon",
   *   country_code: 'US',
   *   first_name: 'Alfred',
   *   last_name: 'Foster',
   *   locality: 'Austin',
   *   street_address: '600 Congress Avenue',
   * });
   * ```
   */
  create(body: AddressCreateParams, options?: RequestOptions): APIPromise<AddressCreateResponse> {
    return this._client.post('/addresses', { body, ...options });
  }

  /**
   * Retrieves the details of an existing address.
   *
   * @example
   * ```ts
   * const address = await client.addresses.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AddressRetrieveResponse> {
    return this._client.get(path`/addresses/${id}`, options);
  }

  /**
   * Returns a list of your addresses.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const address of client.addresses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AddressesDefaultFlatPagination, Address> {
    return this._client.getAPIList('/addresses', DefaultFlatPagination<Address>, { query, ...options });
  }

  /**
   * Deletes an existing address.
   *
   * @example
   * ```ts
   * const address = await client.addresses.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressDeleteResponse> {
    return this._client.delete(path`/addresses/${id}`, options);
  }
}

export type AddressesDefaultFlatPagination = DefaultFlatPagination<Address>;

export interface Address {
  /**
   * Uniquely identifies the address.
   */
  id?: string;

  /**
   * Indicates whether or not the address should be considered part of your list of
   * addresses that appear for regular use.
   */
  address_book?: boolean;

  /**
   * The locality of the address. For US addresses, this corresponds to the state of
   * the address.
   */
  administrative_area?: string;

  /**
   * The borough of the address. This field is not used for addresses in the US but
   * is used for some international addresses.
   */
  borough?: string;

  /**
   * The business name associated with the address. An address must have either a
   * first last name or a business name.
   */
  business_name?: string;

  /**
   * The two-character (ISO 3166-1 alpha-2) country code of the address.
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
   * Additional street address information about the address such as, but not limited
   * to, unit number or apartment number.
   */
  extended_address?: string;

  /**
   * The first name associated with the address. An address must have either a first
   * last name or a business name.
   */
  first_name?: string;

  /**
   * The last name associated with the address. An address must have either a first
   * last name or a business name.
   */
  last_name?: string;

  /**
   * The locality of the address. For US addresses, this corresponds to the city of
   * the address.
   */
  locality?: string;

  /**
   * The neighborhood of the address. This field is not used for addresses in the US
   * but is used for some international addresses.
   */
  neighborhood?: string;

  /**
   * The phone number associated with the address.
   */
  phone_number?: string;

  /**
   * The postal code of the address.
   */
  postal_code?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The primary street address information about the address.
   */
  street_address?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Indicates whether or not the address should be validated for emergency use upon
   * creation or not. This should be left with the default value of `true` unless you
   * have used the `/addresses/actions/validate` endpoint to validate the address
   * separately prior to creation. If an address is not validated for emergency use
   * upon creation and it is not valid, it will not be able to be used for emergency
   * services.
   */
  validate_address?: boolean;
}

export interface AddressCreateResponse {
  data?: Address;
}

export interface AddressRetrieveResponse {
  data?: Address;
}

export interface AddressDeleteResponse {
  data?: Address;
}

export interface AddressCreateParams {
  /**
   * The business name associated with the address. An address must have either a
   * first last name or a business name.
   */
  business_name: string;

  /**
   * The two-character (ISO 3166-1 alpha-2) country code of the address.
   */
  country_code: string;

  /**
   * The first name associated with the address. An address must have either a first
   * last name or a business name.
   */
  first_name: string;

  /**
   * The last name associated with the address. An address must have either a first
   * last name or a business name.
   */
  last_name: string;

  /**
   * The locality of the address. For US addresses, this corresponds to the city of
   * the address.
   */
  locality: string;

  /**
   * The primary street address information about the address.
   */
  street_address: string;

  /**
   * Indicates whether or not the address should be considered part of your list of
   * addresses that appear for regular use.
   */
  address_book?: boolean;

  /**
   * The locality of the address. For US addresses, this corresponds to the state of
   * the address.
   */
  administrative_area?: string;

  /**
   * The borough of the address. This field is not used for addresses in the US but
   * is used for some international addresses.
   */
  borough?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Additional street address information about the address such as, but not limited
   * to, unit number or apartment number.
   */
  extended_address?: string;

  /**
   * The neighborhood of the address. This field is not used for addresses in the US
   * but is used for some international addresses.
   */
  neighborhood?: string;

  /**
   * The phone number associated with the address.
   */
  phone_number?: string;

  /**
   * The postal code of the address.
   */
  postal_code?: string;

  /**
   * Indicates whether or not the address should be validated for emergency use upon
   * creation or not. This should be left with the default value of `true` unless you
   * have used the `/addresses/actions/validate` endpoint to validate the address
   * separately prior to creation. If an address is not validated for emergency use
   * upon creation and it is not valid, it will not be able to be used for emergency
   * services.
   */
  validate_address?: boolean;
}

export interface AddressListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference][eq], filter[customer_reference][contains],
   * filter[used_as_emergency], filter[street_address][contains],
   * filter[address_book][eq]
   */
  filter?: AddressListParams.Filter;

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

export namespace AddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference][eq], filter[customer_reference][contains],
   * filter[used_as_emergency], filter[street_address][contains],
   * filter[address_book][eq]
   */
  export interface Filter {
    address_book?: Filter.AddressBook;

    /**
     * If present, addresses with <code>customer_reference</code> containing the given
     * value will be returned. Matching is not case-sensitive.
     */
    customer_reference?: string | Filter.CustomerReferenceMatcher;

    street_address?: Filter.StreetAddress;

    /**
     * If set as 'true', only addresses used as the emergency address for at least one
     * active phone-number will be returned. When set to 'false', the opposite happens:
     * only addresses not used as the emergency address from phone-numbers will be
     * returned.
     */
    used_as_emergency?: string;
  }

  export namespace Filter {
    export interface AddressBook {
      /**
       * If present, only returns results with the <code>address_book</code> flag equal
       * to the given value.
       */
      eq?: string;
    }

    export interface CustomerReferenceMatcher {
      /**
       * Partial match for customer_reference. Matching is not case-sensitive.
       */
      contains?: string;

      /**
       * Exact match for customer_reference.
       */
      eq?: string;
    }

    export interface StreetAddress {
      /**
       * If present, addresses with <code>street_address</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }
  }
}

Addresses.Actions = Actions;

export declare namespace Addresses {
  export {
    type Address as Address,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressesDefaultFlatPagination as AddressesDefaultFlatPagination,
    type AddressCreateParams as AddressCreateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    Actions as Actions,
    type ActionAcceptSuggestionsResponse as ActionAcceptSuggestionsResponse,
    type ActionValidateResponse as ActionValidateResponse,
    type ActionAcceptSuggestionsParams as ActionAcceptSuggestionsParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
