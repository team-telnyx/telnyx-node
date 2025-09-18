// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  /**
   * Generate reports about porting operations.
   *
   * @example
   * ```ts
   * const report = await client.porting.reports.create({
   *   params: { filters: {} },
   *   report_type: 'export_porting_orders_csv',
   * });
   * ```
   */
  create(body: ReportCreateParams, options?: RequestOptions): APIPromise<ReportCreateResponse> {
    return this._client.post('/porting/reports', { body, ...options });
  }

  /**
   * Retrieve a specific report generated.
   *
   * @example
   * ```ts
   * const report = await client.porting.reports.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/porting/reports/${id}`, options);
  }

  /**
   * List the reports generated about porting operations.
   *
   * @example
   * ```ts
   * const reports = await client.porting.reports.list();
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListResponse> {
    return this._client.get('/porting/reports', { query, ...options });
  }
}

/**
 * The parameters for generating a porting orders CSV report.
 */
export interface ExportPortingOrdersCsvReport {
  /**
   * The filters to apply to the export porting order CSV report.
   */
  filters: ExportPortingOrdersCsvReport.Filters;
}

export namespace ExportPortingOrdersCsvReport {
  /**
   * The filters to apply to the export porting order CSV report.
   */
  export interface Filters {
    /**
     * The date and time the porting order was created after.
     */
    created_at__gt?: string;

    /**
     * The date and time the porting order was created before.
     */
    created_at__lt?: string;

    /**
     * The customer reference of the porting orders to include in the report.
     */
    customer_reference__in?: Array<string>;

    /**
     * The status of the porting orders to include in the report.
     */
    status__in?: Array<
      | 'draft'
      | 'in-process'
      | 'submitted'
      | 'exception'
      | 'foc-date-confirmed'
      | 'cancel-pending'
      | 'ported'
      | 'cancelled'
    >;
  }
}

export interface PortingReport {
  /**
   * Uniquely identifies the report.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the document that was uploaded when report was generated. This field
   * is only populated when the report is under completed status.
   */
  document_id?: string;

  /**
   * The parameters for generating a porting orders CSV report.
   */
  params?: ExportPortingOrdersCsvReport;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Identifies the type of report
   */
  report_type?: 'export_porting_orders_csv';

  /**
   * The current status of the report generation.
   */
  status?: 'pending' | 'completed';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface ReportCreateResponse {
  data?: PortingReport;
}

export interface ReportRetrieveResponse {
  data?: PortingReport;
}

export interface ReportListResponse {
  data?: Array<PortingReport>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface ReportCreateParams {
  /**
   * The parameters for generating a porting orders CSV report.
   */
  params: ExportPortingOrdersCsvReport;

  /**
   * Identifies the type of report
   */
  report_type: 'export_porting_orders_csv';
}

export interface ReportListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[report_type], filter[status]
   */
  filter?: ReportListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: ReportListParams.Page;
}

export namespace ReportListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[report_type], filter[status]
   */
  export interface Filter {
    /**
     * Filter reports of a specific type
     */
    report_type?: 'export_porting_orders_csv';

    /**
     * Filter reports of a specific status
     */
    status?: 'pending' | 'completed';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
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

export declare namespace Reports {
  export {
    type ExportPortingOrdersCsvReport as ExportPortingOrdersCsvReport,
    type PortingReport as PortingReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };
}
