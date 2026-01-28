// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  /**
   * Generate reports about port-out operations.
   *
   * @example
   * ```ts
   * const report = await client.portouts.reports.create({
   *   params: { filters: {} },
   *   report_type: 'export_portouts_csv',
   * });
   * ```
   */
  create(body: ReportCreateParams, options?: RequestOptions): APIPromise<ReportCreateResponse> {
    return this._client.post('/portouts/reports', { body, ...options });
  }

  /**
   * Retrieve a specific report generated.
   *
   * @example
   * ```ts
   * const report = await client.portouts.reports.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/portouts/reports/${id}`, options);
  }

  /**
   * List the reports generated about port-out operations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portoutReport of client.portouts.reports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortoutReportsDefaultFlatPagination, PortoutReport> {
    return this._client.getAPIList('/portouts/reports', DefaultFlatPagination<PortoutReport>, {
      query,
      ...options,
    });
  }
}

export type PortoutReportsDefaultFlatPagination = DefaultFlatPagination<PortoutReport>;

/**
 * The parameters for generating a port-outs CSV report.
 */
export interface ExportPortoutsCsvReport {
  /**
   * The filters to apply to the export port-out CSV report.
   */
  filters: ExportPortoutsCsvReport.Filters;
}

export namespace ExportPortoutsCsvReport {
  /**
   * The filters to apply to the export port-out CSV report.
   */
  export interface Filters {
    /**
     * The date and time the port-out was created after.
     */
    created_at__gt?: string;

    /**
     * The date and time the port-out was created before.
     */
    created_at__lt?: string;

    /**
     * The customer reference of the port-outs to include in the report.
     */
    customer_reference__in?: Array<string>;

    /**
     * The end user name of the port-outs to include in the report.
     */
    end_user_name?: string;

    /**
     * A list of phone numbers that the port-outs phone numbers must overlap with.
     */
    phone_numbers__overlaps?: Array<string>;

    /**
     * The status of the port-outs to include in the report.
     */
    status__in?: Array<'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled'>;
  }
}

export interface PortoutReport {
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
   * The parameters for generating a port-outs CSV report.
   */
  params?: ExportPortoutsCsvReport;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Identifies the type of report
   */
  report_type?: 'export_portouts_csv';

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
  data?: PortoutReport;
}

export interface ReportRetrieveResponse {
  data?: PortoutReport;
}

export interface ReportCreateParams {
  /**
   * The parameters for generating a port-outs CSV report.
   */
  params: ExportPortoutsCsvReport;

  /**
   * Identifies the type of report
   */
  report_type: 'export_portouts_csv';
}

export interface ReportListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[report_type], filter[status]
   */
  filter?: ReportListParams.Filter;
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
    report_type?: 'export_portouts_csv';

    /**
     * Filter reports of a specific status
     */
    status?: 'pending' | 'completed';
  }
}

export declare namespace Reports {
  export {
    type ExportPortoutsCsvReport as ExportPortoutsCsvReport,
    type PortoutReport as PortoutReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type PortoutReportsDefaultFlatPagination as PortoutReportsDefaultFlatPagination,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };
}
