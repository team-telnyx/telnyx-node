// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LedgerBillingGroupReports extends APIResource {
  /**
   * Create a ledger billing group report
   *
   * @example
   * ```ts
   * const ledgerBillingGroupReport =
   *   await client.ledgerBillingGroupReports.create({
   *     month: 10,
   *     year: 2019,
   *   });
   * ```
   */
  create(
    body: LedgerBillingGroupReportCreateParams,
    options?: RequestOptions,
  ): APIPromise<LedgerBillingGroupReportCreateResponse> {
    return this._client.post('/ledger_billing_group_reports', { body, ...options });
  }

  /**
   * Get a ledger billing group report
   *
   * @example
   * ```ts
   * const ledgerBillingGroupReport =
   *   await client.ledgerBillingGroupReports.retrieve(
   *     'f5586561-8ff0-4291-a0ac-84fe544797bd',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LedgerBillingGroupReportRetrieveResponse> {
    return this._client.get(path`/ledger_billing_group_reports/${id}`, options);
  }
}

export interface LedgerBillingGroupReport {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Uniquely identifies the organization that owns the resource.
   */
  organization_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'ledger_billing_group_report';

  /**
   * External url of the ledger billing group report, if the status is complete
   */
  report_url?: string | null;

  /**
   * Status of the ledger billing group report
   */
  status?: 'pending' | 'complete' | 'failed' | 'deleted';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface LedgerBillingGroupReportCreateResponse {
  data?: LedgerBillingGroupReport;
}

export interface LedgerBillingGroupReportRetrieveResponse {
  data?: LedgerBillingGroupReport;
}

export interface LedgerBillingGroupReportCreateParams {
  /**
   * Month of the ledger billing group report
   */
  month?: number;

  /**
   * Year of the ledger billing group report
   */
  year?: number;
}

export declare namespace LedgerBillingGroupReports {
  export {
    type LedgerBillingGroupReport as LedgerBillingGroupReport,
    type LedgerBillingGroupReportCreateResponse as LedgerBillingGroupReportCreateResponse,
    type LedgerBillingGroupReportRetrieveResponse as LedgerBillingGroupReportRetrieveResponse,
    type LedgerBillingGroupReportCreateParams as LedgerBillingGroupReportCreateParams,
  };
}
