// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Balance extends APIResource {
  /**
   * Get user balance details
   */
  retrieve(options?: RequestOptions): APIPromise<BalanceRetrieveResponse> {
    return this._client.get('/balance', options);
  }
}

export interface BalanceRetrieveResponse {
  data?: BalanceRetrieveResponse.Data;
}

export namespace BalanceRetrieveResponse {
  export interface Data {
    /**
     * Available amount to spend (balance + credit limit)
     */
    available_credit?: string;

    /**
     * The account's current balance.
     */
    balance?: string;

    /**
     * The account's credit limit.
     */
    credit_limit?: string;

    /**
     * The ISO 4217 currency identifier.
     */
    currency?: string;

    /**
     * The account’s pending amount.
     */
    pending?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'balance';
  }
}

export declare namespace Balance {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
