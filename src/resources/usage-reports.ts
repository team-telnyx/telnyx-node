// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class UsageReports extends APIResource {
  /**
   * Get Telnyx usage data by product, broken out by the specified dimensions
   */
  list(params: UsageReportListParams, options?: RequestOptions): APIPromise<UsageReportListResponse> {
    const { authorization_bearer, ...query } = params;
    return this._client.get('/usage_reports', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get the Usage Reports options for querying usage, including the products
   * available and their respective metrics and dimensions
   */
  getOptions(
    params: UsageReportGetOptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageReportGetOptionsResponse> {
    const { authorization_bearer, ...query } = params ?? {};
    return this._client.get('/usage_reports/options', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface UsageReportListResponse {
  data?: Array<{ [key: string]: unknown }>;

  meta?: UsageReportListResponse.Meta;
}

export namespace UsageReportListResponse {
  export interface Meta {
    /**
     * Selected page number.
     */
    page_number?: number;

    /**
     * Records per single page
     */
    page_size?: number;

    /**
     * Total number of pages.
     */
    total_pages?: number;

    /**
     * Total number of results.
     */
    total_results?: number;
  }
}

/**
 * An object following one of the schemas published in
 * https://developers.telnyx.com/docs/api/v2/detail-records
 */
export interface UsageReportGetOptionsResponse {
  /**
   * Collection of product description
   */
  data?: Array<UsageReportGetOptionsResponse.Data>;
}

export namespace UsageReportGetOptionsResponse {
  /**
   * An object following one of the schemas published in
   * https://developers.telnyx.com/docs/api/v2/detail-records
   */
  export interface Data {
    /**
     * Telnyx Product
     */
    product?: string;

    /**
     * Telnyx Product Dimensions
     */
    product_dimensions?: Array<string>;

    /**
     * Telnyx Product Metrics
     */
    product_metrics?: Array<string>;

    /**
     * Subproducts if applicable
     */
    record_types?: Array<Data.RecordType>;
  }

  export namespace Data {
    /**
     * An object following one of the schemas published in
     * https://developers.telnyx.com/docs/api/v2/detail-records
     */
    export interface RecordType {
      /**
       * Telnyx Product Dimensions
       */
      product_dimensions?: Array<string>;

      /**
       * Telnyx Product Metrics
       */
      product_metrics?: Array<string>;

      /**
       * Telnyx Product type
       */
      record_type?: string;
    }
  }
}

export interface UsageReportListParams {
  /**
   * Query param: Breakout by specified product dimensions
   */
  dimensions: Array<string>;

  /**
   * Query param: Specified product usage values
   */
  metrics: Array<string>;

  /**
   * Query param: Telnyx product
   */
  product: string;

  /**
   * Query param: A more user-friendly way to specify the timespan you want to filter
   * by. More options can be found in the Telnyx API Reference docs.
   */
  date_range?: string;

  /**
   * Query param: The end date for the time range you are interested in. The maximum
   * time range is 31 days. Format: YYYY-MM-DDTHH:mm:ssZ
   */
  end_date?: string;

  /**
   * Query param: Filter records on dimensions
   */
  filter?: string;

  /**
   * Query param: Specify the response format (csv or json). JSON is returned by
   * default, even if not specified.
   */
  format?: 'csv' | 'json';

  /**
   * Query param: Return the aggregations for all Managed Accounts under the user
   * making the request.
   */
  managed_accounts?: boolean;

  /**
   * Query param: Consolidated page parameter (deepObject style). Originally:
   * page[number], page[size]
   */
  page?: UsageReportListParams.Page;

  /**
   * Query param: Specifies the sort order for results
   */
  sort?: Array<string>;

  /**
   * Query param: The start date for the time range you are interested in. The
   * maximum time range is 31 days. Format: YYYY-MM-DDTHH:mm:ssZ
   */
  start_date?: string;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export namespace UsageReportListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    number?: number;

    size?: number;
  }
}

export interface UsageReportGetOptionsParams {
  /**
   * Query param: Options (dimensions and metrics) for a given product. If none
   * specified, all products will be returned.
   */
  product?: string;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export declare namespace UsageReports {
  export {
    type UsageReportListResponse as UsageReportListResponse,
    type UsageReportGetOptionsResponse as UsageReportGetOptionsResponse,
    type UsageReportListParams as UsageReportListParams,
    type UsageReportGetOptionsParams as UsageReportGetOptionsParams,
  };
}
