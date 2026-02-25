// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoRechargePrefsAPI from './auto-recharge-prefs';
import {
  AutoRechargePrefListResponse,
  AutoRechargePrefUpdateParams,
  AutoRechargePrefUpdateResponse,
  AutoRechargePrefs,
} from './auto-recharge-prefs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Payment extends APIResource {
  autoRechargePrefs: AutoRechargePrefsAPI.AutoRechargePrefs = new AutoRechargePrefsAPI.AutoRechargePrefs(
    this._client,
  );

  /**
   * Create a stored payment transaction
   *
   * @example
   * ```ts
   * const response =
   *   await client.payment.createStoredPaymentTransaction({
   *     amount: '120.00',
   *   });
   * ```
   */
  createStoredPaymentTransaction(
    body: PaymentCreateStoredPaymentTransactionParams,
    options?: RequestOptions,
  ): APIPromise<PaymentCreateStoredPaymentTransactionResponse> {
    return this._client.post('/v2/payment/stored_payment_transactions', { body, ...options });
  }
}

export interface PaymentCreateStoredPaymentTransactionResponse {
  data?: PaymentCreateStoredPaymentTransactionResponse.Data;
}

export namespace PaymentCreateStoredPaymentTransactionResponse {
  export interface Data {
    id?: string;

    amount_cents?: number;

    amount_currency?: string;

    auto_recharge?: boolean;

    created_at?: string;

    processor_status?: string;

    record_type?: 'transaction';

    transaction_processing_type?: 'stored_payment';
  }
}

export interface PaymentCreateStoredPaymentTransactionParams {
  /**
   * Amount in dollars and cents, e.g. "120.00"
   */
  amount: string;
}

Payment.AutoRechargePrefs = AutoRechargePrefs;

export declare namespace Payment {
  export {
    type PaymentCreateStoredPaymentTransactionResponse as PaymentCreateStoredPaymentTransactionResponse,
    type PaymentCreateStoredPaymentTransactionParams as PaymentCreateStoredPaymentTransactionParams,
  };

  export {
    AutoRechargePrefs as AutoRechargePrefs,
    type AutoRechargePrefUpdateResponse as AutoRechargePrefUpdateResponse,
    type AutoRechargePrefListResponse as AutoRechargePrefListResponse,
    type AutoRechargePrefUpdateParams as AutoRechargePrefUpdateParams,
  };
}
