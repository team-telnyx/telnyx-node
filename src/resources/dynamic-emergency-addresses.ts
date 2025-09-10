// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DynamicEmergencyAddresses extends APIResource {
  /**
   * Creates a dynamic emergency address.
   *
   * @example
   * ```ts
   * const dynamicEmergencyAddress =
   *   await client.dynamicEmergencyAddresses.create({
   *     administrative_area: 'TX',
   *     country_code: 'US',
   *     house_number: 'house_number',
   *     locality: 'Austin',
   *     postal_code: '78701',
   *     street_name: 'Congress',
   *   });
   * ```
   */
  create(
    body: DynamicEmergencyAddressCreateParams,
    options?: RequestOptions,
  ): APIPromise<DynamicEmergencyAddressCreateResponse> {
    return this._client.post('/dynamic_emergency_addresses', { body, ...options });
  }

  /**
   * Returns the dynamic emergency address based on the ID provided
   *
   * @example
   * ```ts
   * const dynamicEmergencyAddress =
   *   await client.dynamicEmergencyAddresses.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DynamicEmergencyAddressRetrieveResponse> {
    return this._client.get(path`/dynamic_emergency_addresses/${id}`, options);
  }

  /**
   * Returns the dynamic emergency addresses according to filters
   *
   * @example
   * ```ts
   * const dynamicEmergencyAddresses =
   *   await client.dynamicEmergencyAddresses.list();
   * ```
   */
  list(
    query: DynamicEmergencyAddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DynamicEmergencyAddressListResponse> {
    return this._client.get('/dynamic_emergency_addresses', { query, ...options });
  }

  /**
   * Deletes the dynamic emergency address based on the ID provided
   *
   * @example
   * ```ts
   * const dynamicEmergencyAddress =
   *   await client.dynamicEmergencyAddresses.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DynamicEmergencyAddressDeleteResponse> {
    return this._client.delete(path`/dynamic_emergency_addresses/${id}`, options);
  }
}

export interface DynamicEmergencyAddress {
  administrative_area: string;

  country_code: 'US' | 'CA' | 'PR';

  house_number: string;

  locality: string;

  postal_code: string;

  street_name: string;

  id?: string;

  /**
   * ISO 8601 formatted date of when the resource was created
   */
  created_at?: string;

  extended_address?: string;

  house_suffix?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Unique location reference string to be used in SIP INVITE from / p-asserted
   * headers.
   */
  sip_geolocation_id?: string;

  /**
   * Status of dynamic emergency address
   */
  status?: 'pending' | 'activated' | 'rejected';

  street_post_directional?: string;

  street_pre_directional?: string;

  street_suffix?: string;

  /**
   * ISO 8601 formatted date of when the resource was last updated
   */
  updated_at?: string;
}

export interface DynamicEmergencyAddressCreateResponse {
  data?: DynamicEmergencyAddress;
}

export interface DynamicEmergencyAddressRetrieveResponse {
  data?: DynamicEmergencyAddress;
}

export interface DynamicEmergencyAddressListResponse {
  data?: Array<DynamicEmergencyAddress>;

  meta?: Shared.Metadata;
}

export interface DynamicEmergencyAddressDeleteResponse {
  data?: DynamicEmergencyAddress;
}

export interface DynamicEmergencyAddressCreateParams {
  administrative_area: string;

  country_code: 'US' | 'CA' | 'PR';

  house_number: string;

  locality: string;

  postal_code: string;

  street_name: string;

  extended_address?: string;

  house_suffix?: string;

  street_post_directional?: string;

  street_pre_directional?: string;

  street_suffix?: string;
}

export interface DynamicEmergencyAddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[country_code]
   */
  filter?: DynamicEmergencyAddressListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: DynamicEmergencyAddressListParams.Page;
}

export namespace DynamicEmergencyAddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[country_code]
   */
  export interface Filter {
    /**
     * Filter by country code.
     */
    country_code?: string;

    /**
     * Filter by status.
     */
    status?: 'pending' | 'activated' | 'rejected';
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

export declare namespace DynamicEmergencyAddresses {
  export {
    type DynamicEmergencyAddress as DynamicEmergencyAddress,
    type DynamicEmergencyAddressCreateResponse as DynamicEmergencyAddressCreateResponse,
    type DynamicEmergencyAddressRetrieveResponse as DynamicEmergencyAddressRetrieveResponse,
    type DynamicEmergencyAddressListResponse as DynamicEmergencyAddressListResponse,
    type DynamicEmergencyAddressDeleteResponse as DynamicEmergencyAddressDeleteResponse,
    type DynamicEmergencyAddressCreateParams as DynamicEmergencyAddressCreateParams,
    type DynamicEmergencyAddressListParams as DynamicEmergencyAddressListParams,
  };
}
