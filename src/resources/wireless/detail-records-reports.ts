// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DetailRecordsReports extends APIResource {
  /**
   * Asynchronously create a report containing Wireless Detail Records (WDRs) for the
   * SIM cards that consumed wireless data in the given time period.
   *
   * @example
   * ```ts
   * const detailRecordsReport =
   *   await client.wireless.detailRecordsReports.create();
   * ```
   */
  create(
    body: DetailRecordsReportCreateParams,
    options?: RequestOptions,
  ): APIPromise<DetailRecordsReportCreateResponse> {
    return this._client.post('/wireless/detail_records_reports', { body, ...options });
  }

  /**
   * Returns one specific WDR report
   *
   * @example
   * ```ts
   * const detailRecordsReport =
   *   await client.wireless.detailRecordsReports.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DetailRecordsReportRetrieveResponse> {
    return this._client.get(path`/wireless/detail_records_reports/${id}`, options);
  }

  /**
   * Returns the WDR Reports that match the given parameters.
   *
   * @example
   * ```ts
   * const detailRecordsReports =
   *   await client.wireless.detailRecordsReports.list();
   * ```
   */
  list(
    query: DetailRecordsReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DetailRecordsReportListResponse> {
    return this._client.get('/wireless/detail_records_reports', { query, ...options });
  }

  /**
   * Deletes one specific WDR report.
   *
   * @example
   * ```ts
   * const detailRecordsReport =
   *   await client.wireless.detailRecordsReports.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DetailRecordsReportDeleteResponse> {
    return this._client.delete(path`/wireless/detail_records_reports/${id}`, options);
  }
}

export interface WdrReport {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date-time indicating the end time.
   */
  end_time?: string;

  record_type?: string;

  /**
   * The URL where the report content, when generated, will be published to.
   */
  report_url?: string;

  /**
   * ISO 8601 formatted date-time indicating the start time.
   */
  start_time?: string;

  /**
   * Indicates the status of the report, which is updated asynchronously.
   */
  status?: 'pending' | 'complete' | 'failed' | 'deleted';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface DetailRecordsReportCreateResponse {
  data?: WdrReport;
}

export interface DetailRecordsReportRetrieveResponse {
  data?: WdrReport;
}

export interface DetailRecordsReportListResponse {
  data?: Array<WdrReport>;
}

export interface DetailRecordsReportDeleteResponse {
  data?: WdrReport;
}

export interface DetailRecordsReportCreateParams {
  /**
   * ISO 8601 formatted date-time indicating the end time.
   */
  end_time?: string;

  /**
   * ISO 8601 formatted date-time indicating the start time.
   */
  start_time?: string;
}

export interface DetailRecordsReportListParams {
  /**
   * The page number to load.
   */
  'page[number]'?: number;

  /**
   * The size of the page.
   */
  'page[size]'?: number;
}

export declare namespace DetailRecordsReports {
  export {
    type WdrReport as WdrReport,
    type DetailRecordsReportCreateResponse as DetailRecordsReportCreateResponse,
    type DetailRecordsReportRetrieveResponse as DetailRecordsReportRetrieveResponse,
    type DetailRecordsReportListResponse as DetailRecordsReportListResponse,
    type DetailRecordsReportDeleteResponse as DetailRecordsReportDeleteResponse,
    type DetailRecordsReportCreateParams as DetailRecordsReportCreateParams,
    type DetailRecordsReportListParams as DetailRecordsReportListParams,
  };
}
