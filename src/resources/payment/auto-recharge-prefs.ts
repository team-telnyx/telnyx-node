// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AutoRechargePrefs extends APIResource {
  /**
   * Update payment auto recharge preferences.
   *
   * @example
   * ```ts
   * const autoRechargePref =
   *   await client.payment.autoRechargePrefs.update();
   * ```
   */
  update(
    body: AutoRechargePrefUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AutoRechargePrefUpdateResponse> {
    return this._client.patch('/payment/auto_recharge_prefs', { body, ...options });
  }

  /**
   * Returns the payment auto recharge preferences.
   *
   * @example
   * ```ts
   * const autoRechargePrefs =
   *   await client.payment.autoRechargePrefs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AutoRechargePrefListResponse> {
    return this._client.get('/payment/auto_recharge_prefs', options);
  }
}

export interface AutoRechargePrefUpdateResponse {
  data?: AutoRechargePrefUpdateResponse.Data;
}

export namespace AutoRechargePrefUpdateResponse {
  export interface Data {
    /**
     * The unique identifier for the auto recharge preference.
     */
    id?: string;

    /**
     * Whether auto recharge is enabled.
     */
    enabled?: boolean;

    invoice_enabled?: boolean;

    /**
     * The payment preference for auto recharge.
     */
    preference?: 'credit_paypal' | 'ach';

    /**
     * The amount to recharge the account, the actual recharge amount will be the
     * amount necessary to reach the threshold amount plus the recharge amount.
     */
    recharge_amount?: string;

    /**
     * The record type.
     */
    record_type?: string;

    /**
     * The threshold amount at which the account will be recharged.
     */
    threshold_amount?: string;
  }
}

export interface AutoRechargePrefListResponse {
  data?: AutoRechargePrefListResponse.Data;
}

export namespace AutoRechargePrefListResponse {
  export interface Data {
    /**
     * The unique identifier for the auto recharge preference.
     */
    id?: string;

    /**
     * Whether auto recharge is enabled.
     */
    enabled?: boolean;

    invoice_enabled?: boolean;

    /**
     * The payment preference for auto recharge.
     */
    preference?: 'credit_paypal' | 'ach';

    /**
     * The amount to recharge the account, the actual recharge amount will be the
     * amount necessary to reach the threshold amount plus the recharge amount.
     */
    recharge_amount?: string;

    /**
     * The record type.
     */
    record_type?: string;

    /**
     * The threshold amount at which the account will be recharged.
     */
    threshold_amount?: string;
  }
}

export interface AutoRechargePrefUpdateParams {
  /**
   * Whether auto recharge is enabled.
   */
  enabled?: boolean;

  invoice_enabled?: boolean;

  /**
   * The payment preference for auto recharge.
   */
  preference?: 'credit_paypal' | 'ach';

  /**
   * The amount to recharge the account, the actual recharge amount will be the
   * amount necessary to reach the threshold amount plus the recharge amount.
   */
  recharge_amount?: string;

  /**
   * The threshold amount at which the account will be recharged.
   */
  threshold_amount?: string;
}

export declare namespace AutoRechargePrefs {
  export {
    type AutoRechargePrefUpdateResponse as AutoRechargePrefUpdateResponse,
    type AutoRechargePrefListResponse as AutoRechargePrefListResponse,
    type AutoRechargePrefUpdateParams as AutoRechargePrefUpdateParams,
  };
}
