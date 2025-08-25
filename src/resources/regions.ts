// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * List all regions and the interfaces that region supports
   */
  list(options?: RequestOptions): APIPromise<RegionListResponse> {
    return this._client.get('/regions', options);
  }
}

export interface RegionListResponse {
  data?: Array<RegionListResponse.Data>;
}

export namespace RegionListResponse {
  export interface Data {
    /**
     * A code for the region.
     */
    code?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * A name for the region.
     */
    name?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * List of interface types supported in this region.
     */
    supported_interfaces?: Array<string>;

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export declare namespace Regions {
  export { type RegionListResponse as RegionListResponse };
}
