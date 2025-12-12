// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, PerPagePagination, type PerPagePaginationParams } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Messaging extends APIResource {
  /**
   * Creates a new legacy usage V2 MDR report request with the specified filters
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.legacy.reporting.usageReports.messaging.create(
   *     { aggregation_type: 0 },
   *   );
   * ```
   */
  create(body: MessagingCreateParams, options?: RequestOptions): APIPromise<MessagingCreateResponse> {
    return this._client.post('/legacy/reporting/usage_reports/messaging', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch single MDR usage report by id.
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.legacy.reporting.usageReports.messaging.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/usage_reports/messaging/${id}`, options);
  }

  /**
   * Fetch all previous requests for MDR usage reports.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mdrUsageReportResponseLegacy of client.legacy.reporting.usageReports.messaging.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MdrUsageReportResponseLegaciesPerPagePagination, MdrUsageReportResponseLegacy> {
    return this._client.getAPIList(
      '/legacy/reporting/usage_reports/messaging',
      PerPagePagination<MdrUsageReportResponseLegacy>,
      { query, ...options },
    );
  }

  /**
   * Deletes a specific V2 legacy usage MDR report request by ID
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.legacy.reporting.usageReports.messaging.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/usage_reports/messaging/${id}`, options);
  }
}

export type MdrUsageReportResponseLegaciesPerPagePagination = PerPagePagination<MdrUsageReportResponseLegacy>;

/**
 * Legacy V2 MDR usage report response
 */
export interface MdrUsageReportResponseLegacy {
  /**
   * Identifies the resource
   */
  id?: string;

  /**
   * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
   */
  aggregation_type?: number;

  connections?: Array<string>;

  created_at?: string;

  end_time?: string;

  /**
   * List of messaging profile IDs
   */
  profiles?: Array<string>;

  record_type?: string;

  report_url?: string;

  result?: { [key: string]: unknown };

  start_time?: string;

  /**
   * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
   */
  status?: number;

  updated_at?: string;
}

export interface StandardPaginationMeta {
  page_number: number;

  total_pages: number;

  page_size?: number;

  total_results?: number;
}

export interface MessagingCreateResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrUsageReportResponseLegacy;
}

export interface MessagingRetrieveResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrUsageReportResponseLegacy;
}

export interface MessagingDeleteResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrUsageReportResponseLegacy;
}

export interface MessagingCreateParams {
  /**
   * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
   */
  aggregation_type: number;

  end_time?: string;

  /**
   * List of managed accounts to include
   */
  managed_accounts?: Array<string>;

  /**
   * List of messaging profile IDs to filter by
   */
  profiles?: Array<string>;

  select_all_managed_accounts?: boolean;

  start_time?: string;
}

export interface MessagingListParams extends PerPagePaginationParams {}

export declare namespace Messaging {
  export {
    type MdrUsageReportResponseLegacy as MdrUsageReportResponseLegacy,
    type StandardPaginationMeta as StandardPaginationMeta,
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MdrUsageReportResponseLegaciesPerPagePagination as MdrUsageReportResponseLegaciesPerPagePagination,
    type MessagingCreateParams as MessagingCreateParams,
    type MessagingListParams as MessagingListParams,
  };
}
