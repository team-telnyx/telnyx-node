// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class NumberLookup extends APIResource {
  /**
   * Submit a new telco data usage report
   *
   * @example
   * ```ts
   * await client.client.legacy.reporting.usageReports.numberLookup.create();
   * ```
   */
  create(body: NumberLookupCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/legacy/reporting/usage_reports/number_lookup', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific telco data usage report by its ID
   *
   * @example
   * ```ts
   * await client.client.legacy.reporting.usageReports.numberLookup.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/legacy/reporting/usage_reports/number_lookup/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a paginated list of telco data usage reports
   *
   * @example
   * ```ts
   * await client.client.legacy.reporting.usageReports.numberLookup.list();
   * ```
   */
  list(query: NumberLookupListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/legacy/reporting/usage_reports/number_lookup', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a specific telco data usage report by its ID
   *
   * @example
   * ```ts
   * await client.client.legacy.reporting.usageReports.numberLookup.delete(
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

export interface NumberLookupListParams {
  page?: number;

  per_page?: number;
}

export declare namespace NumberLookup {
  export {
    type NumberLookupCreateParams as NumberLookupCreateParams,
    type NumberLookupListParams as NumberLookupListParams,
  };
}
