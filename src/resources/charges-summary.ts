// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChargesSummaryAPI from './charges-summary';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChargesSummary extends APIResource {
  /**
   * Retrieve a summary of monthly charges for a specified date range. The date range
   * cannot exceed 31 days.
   */
  retrieve(
    query: ChargesSummaryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ChargesSummaryRetrieveResponse> {
    return this._client.get('/charges_summary', { query, ...options });
  }
}

export interface MonthDetail {
  /**
   * Monthly recurring charge amount as decimal string
   */
  mrc: string;

  /**
   * Number of items
   */
  quantity: number;

  /**
   * One-time charge amount as decimal string
   */
  otc?: string | null;
}

export interface ChargesSummaryRetrieveResponse {
  data: ChargesSummaryRetrieveResponse.Data;
}

export namespace ChargesSummaryRetrieveResponse {
  export interface Data {
    /**
     * Currency code
     */
    currency: string;

    /**
     * End date of the summary period
     */
    end_date: string;

    /**
     * Start date of the summary period
     */
    start_date: string;

    summary: Data.Summary;

    total: Data.Total;

    /**
     * User email address
     */
    user_email: string;

    /**
     * User identifier
     */
    user_id: string;
  }

  export namespace Data {
    export interface Summary {
      /**
       * List of billing adjustments
       */
      adjustments: Array<Summary.Adjustment>;

      /**
       * List of charge summary lines
       */
      lines: Array<Summary.Comparative | Summary.Simple>;
    }

    export namespace Summary {
      export interface Adjustment {
        /**
         * Adjustment amount as decimal string
         */
        amount: string;

        /**
         * Description of the adjustment
         */
        description: string;

        /**
         * Date when the adjustment occurred
         */
        event_date: string;
      }

      export interface Comparative {
        /**
         * Service alias
         */
        alias: string;

        existing_this_month: ChargesSummaryAPI.MonthDetail;

        /**
         * Service name
         */
        name: string;

        new_this_month: ChargesSummaryAPI.MonthDetail;

        type: 'comparative';
      }

      export interface Simple {
        /**
         * Service alias
         */
        alias: string;

        /**
         * Total amount as decimal string
         */
        amount: string;

        /**
         * Service name
         */
        name: string;

        /**
         * Number of items
         */
        quantity: number;

        type: 'simple';
      }
    }

    export interface Total {
      /**
       * Total credits as decimal string
       */
      credits: string;

      /**
       * Total existing monthly recurring charges as decimal string
       */
      existing_mrc: string;

      /**
       * Grand total of all charges as decimal string
       */
      grand_total: string;

      /**
       * Ledger adjustments as decimal string
       */
      ledger_adjustments: string;

      /**
       * Total new monthly recurring charges as decimal string
       */
      new_mrc: string;

      /**
       * Total new one-time charges as decimal string
       */
      new_otc: string;

      /**
       * Other charges as decimal string
       */
      other: string;
    }
  }
}

export interface ChargesSummaryRetrieveParams {
  /**
   * End date for the charges summary in ISO date format (YYYY-MM-DD). The date is
   * exclusive, data for the end_date itself is not included in the report. The
   * interval between start_date and end_date cannot exceed 31 days.
   */
  end_date: string;

  /**
   * Start date for the charges summary in ISO date format (YYYY-MM-DD)
   */
  start_date: string;
}

export declare namespace ChargesSummary {
  export {
    type MonthDetail as MonthDetail,
    type ChargesSummaryRetrieveResponse as ChargesSummaryRetrieveResponse,
    type ChargesSummaryRetrieveParams as ChargesSummaryRetrieveParams,
  };
}
