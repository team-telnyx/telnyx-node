// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DetailRecordsReportsAPI from './detail-records-reports';
import {
  DetailRecordsReportCreateParams,
  DetailRecordsReportCreateResponse,
  DetailRecordsReportDeleteResponse,
  DetailRecordsReportListParams,
  DetailRecordsReportListResponse,
  DetailRecordsReportRetrieveResponse,
  DetailRecordsReports,
  WdrReport,
} from './detail-records-reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Wireless extends APIResource {
  detailRecordsReports: DetailRecordsReportsAPI.DetailRecordsReports =
    new DetailRecordsReportsAPI.DetailRecordsReports(this._client);

  /**
   * Retrieve all wireless regions for the given product.
   *
   * @example
   * ```ts
   * const response = await client.wireless.retrieveRegions({
   *   product: 'public_ips',
   * });
   * ```
   */
  retrieveRegions(
    query: WirelessRetrieveRegionsParams,
    options?: RequestOptions,
  ): APIPromise<WirelessRetrieveRegionsResponse> {
    return this._client.get('/wireless/regions', { query, ...options });
  }
}

export interface WirelessRetrieveRegionsResponse {
  data?: Array<WirelessRetrieveRegionsResponse.Data>;
}

export namespace WirelessRetrieveRegionsResponse {
  export interface Data {
    /**
     * The unique code of the region.
     */
    code: string;

    /**
     * The name of the region.
     */
    name: string;

    /**
     * Timestamp when the region was inserted.
     */
    inserted_at?: string;

    /**
     * Timestamp when the region was last updated.
     */
    updated_at?: string;
  }
}

export interface WirelessRetrieveRegionsParams {
  /**
   * The product for which to list regions (e.g., 'public_ips',
   * 'private_wireless_gateways').
   */
  product: string;
}

Wireless.DetailRecordsReports = DetailRecordsReports;

export declare namespace Wireless {
  export {
    type WirelessRetrieveRegionsResponse as WirelessRetrieveRegionsResponse,
    type WirelessRetrieveRegionsParams as WirelessRetrieveRegionsParams,
  };

  export {
    DetailRecordsReports as DetailRecordsReports,
    type WdrReport as WdrReport,
    type DetailRecordsReportCreateResponse as DetailRecordsReportCreateResponse,
    type DetailRecordsReportRetrieveResponse as DetailRecordsReportRetrieveResponse,
    type DetailRecordsReportListResponse as DetailRecordsReportListResponse,
    type DetailRecordsReportDeleteResponse as DetailRecordsReportDeleteResponse,
    type DetailRecordsReportCreateParams as DetailRecordsReportCreateParams,
    type DetailRecordsReportListParams as DetailRecordsReportListParams,
  };
}
