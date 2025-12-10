// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessIPAddress extends APIResource {
  /**
   * Create new Access IP Address
   */
  create(body: AccessIPAddressCreateParams, options?: RequestOptions): APIPromise<AccessIPAddressResponse> {
    return this._client.post('/access_ip_address', { body, ...options });
  }

  /**
   * Retrieve an access IP address
   */
  retrieve(accessIPAddressID: string, options?: RequestOptions): APIPromise<AccessIPAddressResponse> {
    return this._client.get(path`/access_ip_address/${accessIPAddressID}`, options);
  }

  /**
   * List all Access IP Addresses
   */
  list(
    query: AccessIPAddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccessIPAddressResponsesDefaultFlatPagination, AccessIPAddressResponse> {
    return this._client.getAPIList('/access_ip_address', DefaultFlatPagination<AccessIPAddressResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete access IP address
   */
  delete(accessIPAddressID: string, options?: RequestOptions): APIPromise<AccessIPAddressResponse> {
    return this._client.delete(path`/access_ip_address/${accessIPAddressID}`, options);
  }
}

export type AccessIPAddressResponsesDefaultFlatPagination = DefaultFlatPagination<AccessIPAddressResponse>;

export interface AccessIPAddressResponse {
  id: string;

  ip_address: string;

  source: string;

  /**
   * An enumeration.
   */
  status: CloudflareSyncStatus;

  user_id: string;

  created_at?: string;

  description?: string;

  updated_at?: string;
}

/**
 * An enumeration.
 */
export type CloudflareSyncStatus = 'pending' | 'added';

export interface PaginationMetaCloudflareIPListSync {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface AccessIPAddressCreateParams {
  ip_address: string;

  description?: string;
}

export interface AccessIPAddressListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[ip_source],
   * filter[ip_address], filter[created_at]. Supports complex bracket operations for
   * dynamic filtering.
   */
  filter?: AccessIPAddressListParams.Filter;
}

export namespace AccessIPAddressListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[ip_source],
   * filter[ip_address], filter[created_at]. Supports complex bracket operations for
   * dynamic filtering.
   */
  export interface Filter {
    /**
     * Filter by exact creation date-time
     */
    created_at?: string | Filter.DateRangeFilter;

    /**
     * Filter by IP address
     */
    ip_address?: string;

    /**
     * Filter by IP source
     */
    ip_source?: string;

    [k: string]: unknown;
  }

  export namespace Filter {
    /**
     * Date range filtering operations
     */
    export interface DateRangeFilter {
      /**
       * Filter for creation date-time greater than
       */
      gt?: string;

      /**
       * Filter for creation date-time greater than or equal to
       */
      gte?: string;

      /**
       * Filter for creation date-time less than
       */
      lt?: string;

      /**
       * Filter for creation date-time less than or equal to
       */
      lte?: string;
    }
  }
}

export declare namespace AccessIPAddress {
  export {
    type AccessIPAddressResponse as AccessIPAddressResponse,
    type CloudflareSyncStatus as CloudflareSyncStatus,
    type PaginationMetaCloudflareIPListSync as PaginationMetaCloudflareIPListSync,
    type AccessIPAddressResponsesDefaultFlatPagination as AccessIPAddressResponsesDefaultFlatPagination,
    type AccessIPAddressCreateParams as AccessIPAddressCreateParams,
    type AccessIPAddressListParams as AccessIPAddressListParams,
  };
}
