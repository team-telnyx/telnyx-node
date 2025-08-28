// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CdrUsageReports extends APIResource {
  /**
   * Generate and fetch voice usage report synchronously. This endpoint will both
   * generate and fetch the voice report over a specified time period. No polling is
   * necessary but the response may take up to a couple of minutes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.cdrUsageReports.fetchSync({
   *     aggregation_type: 'NO_AGGREGATION',
   *     product_breakdown: 'NO_BREAKDOWN',
   *   });
   * ```
   */
  fetchSync(
    query: CdrUsageReportFetchSyncParams,
    options?: RequestOptions,
  ): APIPromise<CdrUsageReportFetchSyncResponse> {
    return this._client.get('/reports/cdr_usage_reports/sync', { query, ...options });
  }
}

export interface CdrUsageReportFetchSyncResponse {
  data?: CdrUsageReportFetchSyncResponse.Data;
}

export namespace CdrUsageReportFetchSyncResponse {
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    aggregation_type?: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP';

    connections?: Array<number>;

    created_at?: string;

    end_time?: string;

    product_breakdown?: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY';

    record_type?: string;

    report_url?: string;

    result?: { [key: string]: unknown };

    start_time?: string;

    status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

    updated_at?: string;
  }
}

export interface CdrUsageReportFetchSyncParams {
  aggregation_type: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP';

  product_breakdown: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY';

  connections?: Array<number>;

  end_date?: string;

  start_date?: string;
}

export declare namespace CdrUsageReports {
  export {
    type CdrUsageReportFetchSyncResponse as CdrUsageReportFetchSyncResponse,
    type CdrUsageReportFetchSyncParams as CdrUsageReportFetchSyncParams,
  };
}
