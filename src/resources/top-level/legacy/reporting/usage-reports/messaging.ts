// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messaging extends APIResource {
  /**
   * Creates a new legacy usage V2 MDR report request with the specified filters
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.client.legacy.reporting.usageReports.messaging.create(
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
   *   await client.client.legacy.reporting.usageReports.messaging.retrieve(
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
   * const messagings =
   *   await client.client.legacy.reporting.usageReports.messaging.list();
   * ```
   */
  list(
    query: MessagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingListResponse> {
    return this._client.get('/legacy/reporting/usage_reports/messaging', { query, ...options });
  }

  /**
   * Deletes a specific V2 legacy usage MDR report request by ID
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.client.legacy.reporting.usageReports.messaging.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/usage_reports/messaging/${id}`, options);
  }
}

export interface MdrPostUsageReportResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrPostUsageReportResponse.Data;
}

export namespace MdrPostUsageReportResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    /**
     * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
     */
    aggregation_type?: number;

    connections?: Array<number>;

    created_at?: string;

    end_time?: string;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    report_url?: string;

    result?: unknown;

    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    updated_at?: string;
  }
}

export interface MdrGetUsageReportByIdResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrGetUsageReportByIdResponse.Data;
}

export namespace MdrGetUsageReportByIdResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    /**
     * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
     */
    aggregation_type?: number;

    connections?: Array<number>;

    created_at?: string;

    end_time?: string;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    report_url?: string;

    result?: unknown;

    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    updated_at?: string;
  }
}

export interface standard_MdrGetUsageReportsResponse {
  data?: Array<standard_MdrGetUsageReportsResponse.Data>;

  meta?: standard_MdrGetUsageReportsResponse.Meta;
}

export namespace standard_MdrGetUsageReportsResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    /**
     * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
     */
    aggregation_type?: number;

    connections?: Array<number>;

    created_at?: string;

    end_time?: string;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    report_url?: string;

    result?: unknown;

    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    updated_at?: string;
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface MdrDeleteUsageReportResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  data?: MdrDeleteUsageReportResponse.Data;
}

export namespace MdrDeleteUsageReportResponse {
  /**
   * Legacy V2 MDR usage report response
   */
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    /**
     * Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2
     */
    aggregation_type?: number;

    connections?: Array<number>;

    created_at?: string;

    end_time?: string;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    report_url?: string;

    result?: unknown;

    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    updated_at?: string;
  }
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

export interface MessagingListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Size of the page
   */
  per_page?: number;
}

export declare namespace Messaging {
  export {
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MessagingCreateParams as MessagingCreateParams,
    type MessagingListParams as MessagingListParams,
  };
}
