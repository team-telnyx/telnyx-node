// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NetworkCoverageAPI from './network-coverage';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class NetworkCoverage extends APIResource {
  /**
   * List all locations and the interfaces that region supports
   */
  list(
    query: NetworkCoverageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkCoverageListResponse> {
    return this._client.get('/network_coverage', { query, ...options });
  }
}

export type AvailableService = 'cloud_vpn' | 'private_wireless_gateway' | 'virtual_cross_connect';

export interface NetworkCoverageListResponse {
  data?: Array<NetworkCoverageListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace NetworkCoverageListResponse {
  export interface Data {
    /**
     * List of interface types supported in this region.
     */
    available_services?: Array<NetworkCoverageAPI.AvailableService>;

    location?: Data.Location;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }

  export namespace Data {
    export interface Location {
      /**
       * Location code.
       */
      code?: string;

      /**
       * Human readable name of location.
       */
      name?: string;

      /**
       * Point of presence of location.
       */
      pop?: string;

      /**
       * Identifies the geographical region of location.
       */
      region?: string;

      /**
       * Site of location.
       */
      site?: string;
    }
  }
}

export interface NetworkCoverageListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[location.region], filter[location.site], filter[location.pop],
   * filter[location.code]
   */
  filter?: NetworkCoverageListParams.Filter;

  /**
   * Consolidated filters parameter (deepObject style). Originally:
   * filters[available_services][contains]
   */
  filters?: NetworkCoverageListParams.Filters;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: NetworkCoverageListParams.Page;
}

export namespace NetworkCoverageListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[location.region], filter[location.site], filter[location.pop],
   * filter[location.code]
   */
  export interface Filter {
    /**
     * The code of associated location to filter on.
     */
    'location.code'?: string;

    /**
     * The POP of associated location to filter on.
     */
    'location.pop'?: string;

    /**
     * The region of associated location to filter on.
     */
    'location.region'?: string;

    /**
     * The site of associated location to filter on.
     */
    'location.site'?: string;
  }

  /**
   * Consolidated filters parameter (deepObject style). Originally:
   * filters[available_services][contains]
   */
  export interface Filters {
    /**
     * Filter by exact available service match
     */
    available_services?: NetworkCoverageAPI.AvailableService | Filters.Contains;
  }

  export namespace Filters {
    /**
     * Available service filtering operations
     */
    export interface Contains {
      /**
       * Filter by available services containing the specified service
       */
      contains?: NetworkCoverageAPI.AvailableService;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
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

export declare namespace NetworkCoverage {
  export {
    type AvailableService as AvailableService,
    type NetworkCoverageListResponse as NetworkCoverageListResponse,
    type NetworkCoverageListParams as NetworkCoverageListParams,
  };
}
