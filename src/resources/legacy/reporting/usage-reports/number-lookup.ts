// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from './messaging';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class NumberLookup extends APIResource {
  /**
   * Submit a new telco data usage report
   *
   * @example
   * ```ts
   * const numberLookup =
   *   await client.legacy.reporting.usageReports.numberLookup.create();
   * ```
   */
  create(body: NumberLookupCreateParams, options?: RequestOptions): APIPromise<NumberLookupCreateResponse> {
    return this._client.post('/legacy/reporting/usage_reports/number_lookup', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific telco data usage report by its ID
   *
   * @example
   * ```ts
   * const numberLookup =
   *   await client.legacy.reporting.usageReports.numberLookup.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NumberLookupRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/usage_reports/number_lookup/${id}`, options);
  }

  /**
   * Retrieve a paginated list of telco data usage reports
   *
   * @example
   * ```ts
   * const numberLookups =
   *   await client.legacy.reporting.usageReports.numberLookup.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NumberLookupListResponse> {
    return this._client.get('/legacy/reporting/usage_reports/number_lookup', options);
  }

  /**
   * Delete a specific telco data usage report by its ID
   *
   * @example
   * ```ts
   * await client.legacy.reporting.usageReports.numberLookup.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/legacy/reporting/usage_reports/number_lookup/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TelcoDataAggregation {
  /**
   * Currency code
   */
  currency?: string;

  /**
   * Total cost for this aggregation
   */
  total_cost?: number;

  /**
   * Total number of lookups performed
   */
  total_dips?: number;

  /**
   * Type of telco data lookup
   */
  type?: string;
}

export interface TelcoDataUsageRecord {
  /**
   * List of aggregations by lookup type
   */
  aggregations?: Array<TelcoDataAggregation>;

  /**
   * Record type identifier
   */
  record_type?: string;

  /**
   * User ID
   */
  user_id?: string;
}

/**
 * Telco data usage report response
 */
export interface TelcoDataUsageReportResponse {
  /**
   * Unique identifier for the report
   */
  id?: string;

  /**
   * Type of aggregation used in the report
   */
  aggregation_type?: string;

  /**
   * Timestamp when the report was created
   */
  created_at?: string;

  /**
   * End date of the report period
   */
  end_date?: string;

  /**
   * List of managed account IDs included in the report
   */
  managed_accounts?: Array<string>;

  /**
   * Record type identifier
   */
  record_type?: string;

  /**
   * URL to download the complete report
   */
  report_url?: string;

  /**
   * Array of usage records
   */
  result?: Array<TelcoDataUsageRecord>;

  /**
   * Start date of the report period
   */
  start_date?: string;

  /**
   * Current status of the report
   */
  status?: string;

  /**
   * Timestamp when the report was last updated
   */
  updated_at?: string;
}

export interface NumberLookupCreateResponse {
  /**
   * Telco data usage report response
   */
  data?: TelcoDataUsageReportResponse;
}

export interface NumberLookupRetrieveResponse {
  /**
   * Telco data usage report response
   */
  data?: TelcoDataUsageReportResponse;
}

export interface NumberLookupListResponse {
  data?: Array<TelcoDataUsageReportResponse>;

  meta?: MessagingAPI.StandardPaginationMeta;
}

export interface NumberLookupCreateParams {
  /**
   * Type of aggregation for the report
   */
  aggregationType?: 'ALL' | 'BY_ORGANIZATION_MEMBER';

  /**
   * End date for the usage report
   */
  endDate?: string;

  /**
   * List of managed accounts to include in the report
   */
  managedAccounts?: Array<string>;

  /**
   * Start date for the usage report
   */
  startDate?: string;
}

export declare namespace NumberLookup {
  export {
    type TelcoDataAggregation as TelcoDataAggregation,
    type TelcoDataUsageRecord as TelcoDataUsageRecord,
    type TelcoDataUsageReportResponse as TelcoDataUsageReportResponse,
    type NumberLookupCreateResponse as NumberLookupCreateResponse,
    type NumberLookupRetrieveResponse as NumberLookupRetrieveResponse,
    type NumberLookupListResponse as NumberLookupListResponse,
    type NumberLookupCreateParams as NumberLookupCreateParams,
  };
}
