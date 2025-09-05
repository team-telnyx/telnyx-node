// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CivicAddresses extends APIResource {
  /**
   * Return the details of an existing Civic Address with its Locations inside the
   * 'data' attribute of the response.
   *
   * @example
   * ```ts
   * const civicAddress =
   *   await client.externalConnections.civicAddresses.retrieve(
   *     '318fb664-d341-44d2-8405-e6bfb9ced6d9',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    addressID: string,
    params: CivicAddressRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CivicAddressRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/external_connections/${id}/civic_addresses/${addressID}`, options);
  }

  /**
   * Returns the civic addresses and locations from Microsoft Teams.
   *
   * @example
   * ```ts
   * const civicAddresses =
   *   await client.externalConnections.civicAddresses.list(
   *     'id',
   *   );
   * ```
   */
  list(
    id: string,
    query: CivicAddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CivicAddressListResponse> {
    return this._client.get(path`/external_connections/${id}/civic_addresses`, { query, ...options });
  }
}

export interface CivicAddressRetrieveResponse {
  data?: CivicAddressRetrieveResponse.Data;
}

export namespace CivicAddressRetrieveResponse {
  export interface Data {
    /**
     * Uniquely identifies the resource.
     */
    id?: string;

    city_or_town?: string;

    city_or_town_alias?: string;

    company_name?: string;

    country?: string;

    country_or_district?: string;

    /**
     * Identifies what is the default location in the list of locations.
     */
    default_location_id?: string;

    description?: string;

    house_number?: string;

    house_number_suffix?: string;

    locations?: Array<Data.Location>;

    postal_or_zip_code?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    state_or_province?: string;

    street_name?: string;

    street_suffix?: string;
  }

  export namespace Data {
    export interface Location {
      /**
       * Uniquely identifies the resource.
       */
      id?: string;

      additional_info?: string;

      description?: string;

      /**
       * Represents whether the location is the default or not.
       */
      is_default?: boolean;
    }
  }
}

export interface CivicAddressListResponse {
  data?: Array<CivicAddressListResponse.Data>;
}

export namespace CivicAddressListResponse {
  export interface Data {
    /**
     * Uniquely identifies the resource.
     */
    id?: string;

    city_or_town?: string;

    city_or_town_alias?: string;

    company_name?: string;

    country?: string;

    country_or_district?: string;

    /**
     * Identifies what is the default location in the list of locations.
     */
    default_location_id?: string;

    description?: string;

    house_number?: string;

    house_number_suffix?: string;

    locations?: Array<Data.Location>;

    postal_or_zip_code?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    state_or_province?: string;

    street_name?: string;

    street_suffix?: string;
  }

  export namespace Data {
    export interface Location {
      /**
       * Uniquely identifies the resource.
       */
      id?: string;

      additional_info?: string;

      description?: string;

      /**
       * Represents whether the location is the default or not.
       */
      is_default?: boolean;
    }
  }
}

export interface CivicAddressRetrieveParams {
  /**
   * Identifies the resource.
   */
  id: string;
}

export interface CivicAddressListParams {
  /**
   * Filter parameter for civic addresses (deepObject style). Supports filtering by
   * country.
   */
  filter?: CivicAddressListParams.Filter;
}

export namespace CivicAddressListParams {
  /**
   * Filter parameter for civic addresses (deepObject style). Supports filtering by
   * country.
   */
  export interface Filter {
    /**
     * The country (or countries) to filter addresses by.
     */
    country?: Array<string>;
  }
}

export declare namespace CivicAddresses {
  export {
    type CivicAddressRetrieveResponse as CivicAddressRetrieveResponse,
    type CivicAddressListResponse as CivicAddressListResponse,
    type CivicAddressRetrieveParams as CivicAddressRetrieveParams,
    type CivicAddressListParams as CivicAddressListParams,
  };
}
