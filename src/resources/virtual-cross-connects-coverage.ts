// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class VirtualCrossConnectsCoverage extends APIResource {
  /**
   * List Virtual Cross Connects Cloud Coverage.<br /><br />This endpoint shows which
   * cloud regions are available for the `location_code` your Virtual Cross Connect
   * will be provisioned in.
   */
  list(
    query: VirtualCrossConnectsCoverageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination,
    VirtualCrossConnectsCoverageListResponse
  > {
    return this._client.getAPIList(
      '/virtual_cross_connects_coverage',
      DefaultFlatPagination<VirtualCrossConnectsCoverageListResponse>,
      { query, ...options },
    );
  }
}

export type VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination =
  DefaultFlatPagination<VirtualCrossConnectsCoverageListResponse>;

export interface VirtualCrossConnectsCoverageListResponse {
  /**
   * The available throughput in Megabits per Second (Mbps) for your Virtual Cross
   * Connect.
   */
  available_bandwidth?: Array<number>;

  /**
   * The Virtual Private Cloud with which you would like to establish a cross
   * connect.
   */
  cloud_provider?: 'aws' | 'azure' | 'gce';

  /**
   * The region where your Virtual Private Cloud hosts are located. Should be
   * identical to how the cloud provider names region, i.e. us-east-1 for AWS but
   * Frankfurt for Azure
   */
  cloud_provider_region?: string;

  location?: VirtualCrossConnectsCoverageListResponse.Location;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;
}

export namespace VirtualCrossConnectsCoverageListResponse {
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

export interface VirtualCrossConnectsCoverageListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[cloud_provider], filter[cloud_provider_region], filter[location.region],
   * filter[location.site], filter[location.pop], filter[location.code]
   */
  filter?: VirtualCrossConnectsCoverageListParams.Filter;

  /**
   * Consolidated filters parameter (deepObject style). Originally:
   * filters[available_bandwidth][contains]
   */
  filters?: VirtualCrossConnectsCoverageListParams.Filters;
}

export namespace VirtualCrossConnectsCoverageListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[cloud_provider], filter[cloud_provider_region], filter[location.region],
   * filter[location.site], filter[location.pop], filter[location.code]
   */
  export interface Filter {
    /**
     * The Virtual Private Cloud provider.
     */
    cloud_provider?: 'aws' | 'azure' | 'gce';

    /**
     * The region of specific cloud provider.
     */
    cloud_provider_region?: string;

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
   * filters[available_bandwidth][contains]
   */
  export interface Filters {
    /**
     * Filter by exact available bandwidth match
     */
    available_bandwidth?: number | Filters.Contains;
  }

  export namespace Filters {
    /**
     * Available bandwidth filtering operations
     */
    export interface Contains {
      /**
       * Filter by available bandwidth containing the specified value
       */
      contains?: number;
    }
  }
}

export declare namespace VirtualCrossConnectsCoverage {
  export {
    type VirtualCrossConnectsCoverageListResponse as VirtualCrossConnectsCoverageListResponse,
    type VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination as VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination,
    type VirtualCrossConnectsCoverageListParams as VirtualCrossConnectsCoverageListParams,
  };
}
