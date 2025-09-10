// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChargesBreakdown extends APIResource {
  /**
   * Retrieve a detailed breakdown of monthly charges for phone numbers in a
   * specified date range. The date range cannot exceed 31 days.
   */
  retrieve(
    query: ChargesBreakdownRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ChargesBreakdownRetrieveResponse> {
    return this._client.get('/charges_breakdown', { query, ...options });
  }
}

export interface ChargesBreakdownRetrieveResponse {
  data: ChargesBreakdownRetrieveResponse.Data;
}

export namespace ChargesBreakdownRetrieveResponse {
  export interface Data {
    /**
     * Currency code
     */
    currency: string;

    /**
     * End date of the breakdown period
     */
    end_date: string;

    /**
     * List of phone number charge breakdowns
     */
    results: Array<Data.Result>;

    /**
     * Start date of the breakdown period
     */
    start_date: string;

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
    export interface Result {
      /**
       * Type of charge for the number
       */
      charge_type: string;

      /**
       * Email address of the service owner
       */
      service_owner_email: string;

      /**
       * User ID of the service owner
       */
      service_owner_user_id: string;

      /**
       * List of services associated with this number
       */
      services: Array<Result.Service>;

      /**
       * Phone number
       */
      tn: string;
    }

    export namespace Result {
      export interface Service {
        /**
         * Cost per unit as decimal string
         */
        cost: string;

        /**
         * Type of cost (MRC or OTC)
         */
        cost_type: string;

        /**
         * Service name
         */
        name: string;
      }
    }
  }
}

export interface ChargesBreakdownRetrieveParams {
  /**
   * Start date for the charges breakdown in ISO date format (YYYY-MM-DD)
   */
  start_date: string;

  /**
   * End date for the charges breakdown in ISO date format (YYYY-MM-DD). If not
   * provided, defaults to start_date + 1 month. The date is exclusive, data for the
   * end_date itself is not included in the report. The interval between start_date
   * and end_date cannot exceed 31 days.
   */
  end_date?: string;

  /**
   * Response format
   */
  format?: 'json' | 'csv';
}

export declare namespace ChargesBreakdown {
  export {
    type ChargesBreakdownRetrieveResponse as ChargesBreakdownRetrieveResponse,
    type ChargesBreakdownRetrieveParams as ChargesBreakdownRetrieveParams,
  };
}
