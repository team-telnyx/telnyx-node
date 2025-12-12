// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MdrUsageReports extends APIResource {
  /**
   * Submit request for new new messaging usage report. This endpoint will pull and
   * aggregate messaging data in specified time period.
   *
   * @example
   * ```ts
   * const mdrUsageReport =
   *   await client.reports.mdrUsageReports.create({
   *     aggregation_type: 'NO_AGGREGATION',
   *     end_date: '2020-07-01T00:00:00-06:00',
   *     start_date: '2020-07-01T00:00:00-06:00',
   *   });
   * ```
   */
  create(
    body: MdrUsageReportCreateParams,
    options?: RequestOptions,
  ): APIPromise<MdrUsageReportCreateResponse> {
    return this._client.post('/reports/mdr_usage_reports', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch a single messaging usage report by id
   *
   * @example
   * ```ts
   * const mdrUsageReport =
   *   await client.reports.mdrUsageReports.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MdrUsageReportRetrieveResponse> {
    return this._client.get(path`/reports/mdr_usage_reports/${id}`, options);
  }

  /**
   * Fetch all messaging usage reports. Usage reports are aggregated messaging data
   * for specified time period and breakdown
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mdrUsageReport of client.reports.mdrUsageReports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MdrUsageReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MdrUsageReportsDefaultFlatPagination, MdrUsageReport> {
    return this._client.getAPIList('/reports/mdr_usage_reports', DefaultFlatPagination<MdrUsageReport>, {
      query,
      ...options,
    });
  }

  /**
   * Delete messaging usage report by id
   *
   * @example
   * ```ts
   * const mdrUsageReport =
   *   await client.reports.mdrUsageReports.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MdrUsageReportDeleteResponse> {
    return this._client.delete(path`/reports/mdr_usage_reports/${id}`, options);
  }

  /**
   * Generate and fetch messaging usage report synchronously. This endpoint will both
   * generate and fetch the messaging report over a specified time period. No polling
   * is necessary but the response may take up to a couple of minutes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.mdrUsageReports.fetchSync({
   *     aggregation_type: 'PROFILE',
   *   });
   * ```
   */
  fetchSync(
    query: MdrUsageReportFetchSyncParams,
    options?: RequestOptions,
  ): APIPromise<MdrUsageReportFetchSyncResponse> {
    return this._client.get('/reports/mdr_usage_reports/sync', { query, ...options });
  }
}

export type MdrUsageReportsDefaultFlatPagination = DefaultFlatPagination<MdrUsageReport>;

export interface MdrUsageReport {
  /**
   * Identifies the resource
   */
  id?: string;

  aggregation_type?: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS';

  connections?: Array<number>;

  created_at?: string;

  end_date?: string;

  profiles?: string;

  record_type?: string;

  report_url?: string;

  result?: Array<MdrUsageReport.Result>;

  start_date?: string;

  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

  updated_at?: string;
}

export namespace MdrUsageReport {
  export interface Result {
    carrier_passthrough_fee?: string;

    connection?: string;

    cost?: string;

    currency?: string;

    delivered?: string;

    direction?: string;

    message_type?: string;

    parts?: string;

    product?: string;

    profile_id?: string;

    received?: string;

    sent?: string;

    tags?: string;

    tn_type?: string;
  }
}

export interface PaginationMetaReporting {
  page_number: number;

  total_pages: number;

  page_size?: number;

  total_results?: number;
}

export interface MdrUsageReportCreateResponse {
  data?: MdrUsageReport;
}

export interface MdrUsageReportRetrieveResponse {
  data?: MdrUsageReport;
}

export interface MdrUsageReportDeleteResponse {
  data?: MdrUsageReport;
}

export interface MdrUsageReportFetchSyncResponse {
  data?: MdrUsageReport;
}

export interface MdrUsageReportCreateParams {
  aggregation_type: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS';

  end_date: string;

  start_date: string;

  profiles?: string;
}

export interface MdrUsageReportListParams extends DefaultFlatPaginationParams {}

export interface MdrUsageReportFetchSyncParams {
  aggregation_type: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS';

  end_date?: string;

  profiles?: Array<string>;

  start_date?: string;
}

export declare namespace MdrUsageReports {
  export {
    type MdrUsageReport as MdrUsageReport,
    type PaginationMetaReporting as PaginationMetaReporting,
    type MdrUsageReportCreateResponse as MdrUsageReportCreateResponse,
    type MdrUsageReportRetrieveResponse as MdrUsageReportRetrieveResponse,
    type MdrUsageReportDeleteResponse as MdrUsageReportDeleteResponse,
    type MdrUsageReportFetchSyncResponse as MdrUsageReportFetchSyncResponse,
    type MdrUsageReportsDefaultFlatPagination as MdrUsageReportsDefaultFlatPagination,
    type MdrUsageReportCreateParams as MdrUsageReportCreateParams,
    type MdrUsageReportListParams as MdrUsageReportListParams,
    type MdrUsageReportFetchSyncParams as MdrUsageReportFetchSyncParams,
  };
}
