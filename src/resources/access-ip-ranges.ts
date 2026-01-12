// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessIPAddressAPI from './access-ip-address';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessIPRanges extends APIResource {
  /**
   * Create new Access IP Range
   */
  create(body: AccessIPRangeCreateParams, options?: RequestOptions): APIPromise<AccessIPRange> {
    return this._client.post('/access_ip_ranges', { body, ...options });
  }

  /**
   * List all Access IP Ranges
   */
  list(
    query: AccessIPRangeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccessIPRangesDefaultFlatPagination, AccessIPRange> {
    return this._client.getAPIList('/access_ip_ranges', DefaultFlatPagination<AccessIPRange>, {
      query,
      ...options,
    });
  }

  /**
   * Delete access IP ranges
   */
  delete(accessIPRangeID: string, options?: RequestOptions): APIPromise<AccessIPRange> {
    return this._client.delete(path`/access_ip_ranges/${accessIPRangeID}`, options);
  }
}

export type AccessIPRangesDefaultFlatPagination = DefaultFlatPagination<AccessIPRange>;

export interface AccessIPRange {
  id: string;

  cidr_block: string;

  /**
   * An enumeration.
   */
  status: AccessIPAddressAPI.CloudflareSyncStatus;

  user_id: string;

  created_at?: string;

  description?: string;

  updated_at?: string;
}

export interface AccessIPRangeCreateParams {
  cidr_block: string;

  description?: string;
}

export interface AccessIPRangeListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[cidr_block], filter[cidr_block][startswith],
   * filter[cidr_block][endswith], filter[cidr_block][contains], filter[created_at].
   * Supports complex bracket operations for dynamic filtering.
   */
  filter?: AccessIPRangeListParams.Filter;
}

export namespace AccessIPRangeListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[cidr_block], filter[cidr_block][startswith],
   * filter[cidr_block][endswith], filter[cidr_block][contains], filter[created_at].
   * Supports complex bracket operations for dynamic filtering.
   */
  export interface Filter {
    /**
     * Filter by exact CIDR block match
     */
    cidr_block?: string | Filter.CidrBlockPatternFilter;

    /**
     * Filter by exact creation date-time
     */
    created_at?: string | Filter.DateRangeFilter;

    [k: string]: unknown;
  }

  export namespace Filter {
    /**
     * CIDR block pattern matching operations
     */
    export interface CidrBlockPatternFilter {
      /**
       * Filter CIDR blocks containing the specified string
       */
      contains?: string;

      /**
       * Filter CIDR blocks ending with the specified string
       */
      endswith?: string;

      /**
       * Filter CIDR blocks starting with the specified string
       */
      startswith?: string;
    }

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

export declare namespace AccessIPRanges {
  export {
    type AccessIPRange as AccessIPRange,
    type AccessIPRangesDefaultFlatPagination as AccessIPRangesDefaultFlatPagination,
    type AccessIPRangeCreateParams as AccessIPRangeCreateParams,
    type AccessIPRangeListParams as AccessIPRangeListParams,
  };
}
