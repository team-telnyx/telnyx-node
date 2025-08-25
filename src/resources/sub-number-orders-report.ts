// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SubNumberOrdersReport extends APIResource {
  /**
   * Create a CSV report for sub number orders. The report will be generated
   * asynchronously and can be downloaded once complete.
   *
   * @example
   * ```ts
   * const subNumberOrdersReport =
   *   await client.subNumberOrdersReport.create();
   * ```
   */
  create(
    body: SubNumberOrdersReportCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubNumberOrdersReportCreateResponse> {
    return this._client.post('/sub_number_orders_report', { body, ...options });
  }

  /**
   * Get the status and details of a sub number orders report.
   *
   * @example
   * ```ts
   * const subNumberOrdersReport =
   *   await client.subNumberOrdersReport.retrieve(
   *     '12ade33a-21c0-473b-b055-b3c836e1c293',
   *   );
   * ```
   */
  retrieve(reportID: string, options?: RequestOptions): APIPromise<SubNumberOrdersReportRetrieveResponse> {
    return this._client.get(path`/sub_number_orders_report/${reportID}`, options);
  }

  /**
   * Download the CSV file for a completed sub number orders report. The report
   * status must be 'success' before the file can be downloaded.
   *
   * @example
   * ```ts
   * const response =
   *   await client.subNumberOrdersReport.download(
   *     '12ade33a-21c0-473b-b055-b3c836e1c293',
   *   );
   * ```
   */
  download(reportID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/sub_number_orders_report/${reportID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }
}

export interface SubNumberOrdersReportCreateResponse {
  data?: SubNumberOrdersReportCreateResponse.Data;
}

export namespace SubNumberOrdersReportCreateResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The filters that were applied to generate this report
     */
    filters?: Data.Filters;

    /**
     * The type of order report.
     */
    order_type?: string;

    /**
     * Indicates the completion level of the sub number orders report. The report must
     * have a status of 'success' before it can be downloaded.
     */
    status?: 'pending' | 'success' | 'failed' | 'expired';

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * The ID of the user who created the report.
     */
    user_id?: string;
  }

  export namespace Data {
    /**
     * The filters that were applied to generate this report
     */
    export interface Filters {
      country_code?: string;

      created_at_gt?: string;

      created_at_lt?: string;

      customer_reference?: string;

      order_request_id?: string;

      status?: string;
    }
  }
}

export interface SubNumberOrdersReportRetrieveResponse {
  data?: SubNumberOrdersReportRetrieveResponse.Data;
}

export namespace SubNumberOrdersReportRetrieveResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The filters that were applied to generate this report
     */
    filters?: Data.Filters;

    /**
     * The type of order report.
     */
    order_type?: string;

    /**
     * Indicates the completion level of the sub number orders report. The report must
     * have a status of 'success' before it can be downloaded.
     */
    status?: 'pending' | 'success' | 'failed' | 'expired';

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * The ID of the user who created the report.
     */
    user_id?: string;
  }

  export namespace Data {
    /**
     * The filters that were applied to generate this report
     */
    export interface Filters {
      country_code?: string;

      created_at_gt?: string;

      created_at_lt?: string;

      customer_reference?: string;

      order_request_id?: string;

      status?: string;
    }
  }
}

export type SubNumberOrdersReportDownloadResponse = Uploadable;

export interface SubNumberOrdersReportCreateParams {
  /**
   * Filter by country code
   */
  country_code?: string;

  /**
   * Filter for orders created after this date
   */
  created_at_gt?: string;

  /**
   * Filter for orders created before this date
   */
  created_at_lt?: string;

  /**
   * Filter by customer reference
   */
  customer_reference?: string;

  /**
   * Filter by specific order request ID
   */
  order_request_id?: string;

  /**
   * Filter by order status
   */
  status?: 'pending' | 'success' | 'failure';
}

export declare namespace SubNumberOrdersReport {
  export {
    type SubNumberOrdersReportCreateResponse as SubNumberOrdersReportCreateResponse,
    type SubNumberOrdersReportRetrieveResponse as SubNumberOrdersReportRetrieveResponse,
    type SubNumberOrdersReportDownloadResponse as SubNumberOrdersReportDownloadResponse,
    type SubNumberOrdersReportCreateParams as SubNumberOrdersReportCreateParams,
  };
}
