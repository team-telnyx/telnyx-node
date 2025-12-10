// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, PerPagePagination, type PerPagePaginationParams } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Voice extends APIResource {
  /**
   * Creates a new legacy usage V2 CDR report request with the specified filters
   *
   * @example
   * ```ts
   * const voice =
   *   await client.legacy.reporting.usageReports.voice.create({
   *     end_time: '2024-02-01T00:00:00Z',
   *     start_time: '2024-02-01T00:00:00Z',
   *   });
   * ```
   */
  create(body: VoiceCreateParams, options?: RequestOptions): APIPromise<VoiceCreateResponse> {
    return this._client.post('/legacy/reporting/usage_reports/voice', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch single cdr usage report by id.
   *
   * @example
   * ```ts
   * const voice =
   *   await client.legacy.reporting.usageReports.voice.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VoiceRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/usage_reports/voice/${id}`, options);
  }

  /**
   * Fetch all previous requests for cdr usage reports.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cdrUsageReportResponseLegacy of client.legacy.reporting.usageReports.voice.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CdrUsageReportResponseLegaciesPerPagePagination, CdrUsageReportResponseLegacy> {
    return this._client.getAPIList(
      '/legacy/reporting/usage_reports/voice',
      PerPagePagination<CdrUsageReportResponseLegacy>,
      { query, ...options },
    );
  }

  /**
   * Deletes a specific V2 legacy usage CDR report request by ID
   *
   * @example
   * ```ts
   * const voice =
   *   await client.legacy.reporting.usageReports.voice.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VoiceDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/usage_reports/voice/${id}`, options);
  }
}

export type CdrUsageReportResponseLegaciesPerPagePagination = PerPagePagination<CdrUsageReportResponseLegacy>;

/**
 * Legacy V2 CDR usage report response
 */
export interface CdrUsageReportResponseLegacy {
  /**
   * Identifies the resource
   */
  id?: string;

  /**
   * Aggregation type: All = 0, By Connections = 1, By Tags = 2, By Billing Group = 3
   */
  aggregation_type?: number;

  connections?: Array<string>;

  created_at?: string;

  end_time?: string;

  /**
   * Product breakdown type: No breakdown = 0, DID vs Toll-free = 1, Country = 2, DID
   * vs Toll-free per Country = 3
   */
  product_breakdown?: number;

  record_type?: string;

  report_url?: string;

  result?: { [key: string]: unknown };

  start_time?: string;

  /**
   * Status of the report: Pending = 1, Complete = 2, Failed = 3, Expired = 4
   */
  status?: number;

  updated_at?: string;
}

export interface VoiceCreateResponse {
  /**
   * Legacy V2 CDR usage report response
   */
  data?: CdrUsageReportResponseLegacy;
}

export interface VoiceRetrieveResponse {
  /**
   * Legacy V2 CDR usage report response
   */
  data?: CdrUsageReportResponseLegacy;
}

export interface VoiceDeleteResponse {
  /**
   * Legacy V2 CDR usage report response
   */
  data?: CdrUsageReportResponseLegacy;
}

export interface VoiceCreateParams {
  /**
   * End time in ISO format
   */
  end_time: string;

  /**
   * Start time in ISO format
   */
  start_time: string;

  /**
   * Aggregation type: All = 0, By Connections = 1, By Tags = 2, By Billing Group = 3
   */
  aggregation_type?: number;

  /**
   * List of connections to filter by
   */
  connections?: Array<number>;

  /**
   * List of managed accounts to include
   */
  managed_accounts?: Array<string>;

  /**
   * Product breakdown type: No breakdown = 0, DID vs Toll-free = 1, Country = 2, DID
   * vs Toll-free per Country = 3
   */
  product_breakdown?: number;

  /**
   * Whether to select all managed accounts
   */
  select_all_managed_accounts?: boolean;
}

export interface VoiceListParams extends PerPagePaginationParams {}

export declare namespace Voice {
  export {
    type CdrUsageReportResponseLegacy as CdrUsageReportResponseLegacy,
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceDeleteResponse as VoiceDeleteResponse,
    type CdrUsageReportResponseLegaciesPerPagePagination as CdrUsageReportResponseLegaciesPerPagePagination,
    type VoiceCreateParams as VoiceCreateParams,
    type VoiceListParams as VoiceListParams,
  };
}
