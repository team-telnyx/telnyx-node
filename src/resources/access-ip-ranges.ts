// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessIPAddressAPI from './access-ip-address';
import { APIPromise } from '../core/api-promise';
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
  ): APIPromise<AccessIPRangeListResponse> {
    return this._client.get('/access_ip_ranges', { query, ...options });
  }

  /**
   * Delete access IP ranges
   */
  delete(accessIPRangeID: string, options?: RequestOptions): APIPromise<AccessIPRange> {
    return this._client.delete(path`/access_ip_ranges/${accessIPRangeID}`, options);
  }
}

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

export interface AccessIPRangeListResponse {
  data: Array<AccessIPRange>;

  meta: AccessIPAddressAPI.PaginationMetaCloudflareIPListSync;
}

export interface AccessIPRangeCreateParams {
  cidr_block: string;

  description?: string;
}

export interface AccessIPRangeListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[cidr_block], filter[cidr_block][startswith],
   * filter[cidr_block][endswith], filter[cidr_block][contains], filter[created_at].
   * Supports complex bracket operations for dynamic filtering.
   */
  filter?: AccessIPRangeListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: AccessIPRangeListParams.Page;
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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    number?: number;

    size?: number;
  }
}

export declare namespace AccessIPRanges {
  export {
    type AccessIPRange as AccessIPRange,
    type AccessIPRangeListResponse as AccessIPRangeListResponse,
    type AccessIPRangeCreateParams as AccessIPRangeCreateParams,
    type AccessIPRangeListParams as AccessIPRangeListParams,
  };
}
