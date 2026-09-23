// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Machine payment (MPP) account-credit operations. Fund your Telnyx account programmatically from a machine or agent using the Machine Payment Protocol, an HTTP-402 flow settled via Stripe or Tempo.
 */
export class MachinePayments extends APIResource {
  /**
   * Creates an account credit using the Machine Payment Protocol (MPP), an HTTP-402
   * payment flow for machines and agents.
   *
   * The flow has two steps. First, send an authenticated request with the
   * `amount_usd` to credit; the response is `402 Payment Required` with one or more
   * payment challenges (for example separate Tempo and Stripe challenges) in the
   * `WWW-Authenticate` header. Second, retry the request with an
   * `Authorization: Payment ...` credential constructed from the challenge; on
   * success the response includes the credited transaction and a `Payment-Receipt`
   * header.
   *
   * The credited account is never chosen by the request body: the initial request
   * credits the account of the authenticated user, and a paid retry credits the
   * account bound to the verified payment credential. The amount must be within the
   * configured bounds (by default between 5.00 and 500.00 USD).
   *
   * Successful paid retries are idempotent — when Rails reaches its
   * duplicate-transaction lookup for an already-recorded payment, it returns the
   * existing transaction with `created: false` instead of crediting the account
   * again. This deduplication applies to successful fulfillment: re-sending the same
   * Stripe credential may instead be rejected by the upstream provider as an
   * idempotent replay and return `402 Payment Required` rather than the existing
   * transaction.
   *
   * > **Warning: the payment credential is bound to a specific Telnyx account ID.**
   * > A payment is captured before the bound account is validated. If the credential
   * > names an account that is missing, suspended, blocked, cancelled, dormant, or
   * > ineligible for the tier, the payment is captured but **no account is
   * > credited**. If the credential names a different but eligible account, that
   * > account is credited — the service does not compare it against the payer's
   * > account. There is **no automatic refund**: if the captured payment does not
   * > credit the intended account, contact Telnyx support for remediation.
   *
   * @example
   * ```ts
   * const response = await client.machinePayments.accountCredit(
   *   { amount_usd: '10.00' },
   * );
   * ```
   */
  accountCredit(
    body: MachinePaymentAccountCreditParams,
    options?: RequestOptions,
  ): APIPromise<MachinePaymentAccountCreditResponse> {
    return this._client.post('/machine-payments/account-credit', { body, ...options });
  }
}

export interface MachinePaymentAccountCreditResponse {
  /**
   * An account-credit transaction settled through the Machine Payment Protocol.
   */
  data?: MachinePaymentAccountCreditResponse.Data;
}

export namespace MachinePaymentAccountCreditResponse {
  /**
   * An account-credit transaction settled through the Machine Payment Protocol.
   */
  export interface Data {
    /**
     * Unique identifier of the account-credit transaction.
     */
    id: string;

    /**
     * Identifier of the credited Telnyx account. Derived from the authenticated user
     * on the initial request and from the verified payment credential on a paid retry
     * — never from the request body.
     */
    account_id: string;

    /**
     * Credited amount as a decimal string with two fractional digits.
     */
    amount: string;

    /**
     * ISO 4217 currency code of the credited amount (currently always USD).
     */
    currency: string;

    /**
     * Payment source identifier distinguishing machine payments from other
     * account-credit sources.
     */
    payment_source: 'machine_payment';

    /**
     * Record type identifier.
     */
    record_type: 'machine_payment_account_credit';

    /**
     * True when this response created a new account credit, false when an existing
     * transaction was returned for a duplicate paid retry.
     */
    created?: boolean;

    /**
     * ISO 8601 timestamp when the transaction was created.
     */
    created_at?: string;

    /**
     * Machine Payment Protocol resource identifier the payment credential was bound
     * to.
     */
    mpp_resource?: string | null;

    /**
     * Stripe PaymentIntent identifier for Stripe settlements. Absent for Tempo
     * settlements.
     */
    payment_intent_id?: string | null;

    /**
     * Payment method used by the provider: `stripe_spt` for Stripe Shared Payment
     * Token payments, `tempo_usdc` for Tempo USDC payments.
     */
    payment_method?: 'stripe_spt' | 'tempo_usdc' | null;

    /**
     * Upstream payment provider that settled the payment.
     */
    provider?: 'stripe' | 'tempo' | null;

    /**
     * Provider receipt reference: the Stripe PaymentIntent identifier for Stripe
     * settlements, or the on-chain transaction hash for Tempo settlements.
     */
    receipt_reference?: string | null;

    /**
     * Status of the transaction. Successful machine payment credits are recorded as
     * `settled`.
     */
    status?: 'new' | 'processing' | 'settled' | 'expired' | 'invalid' | null;
  }
}

export interface MachinePaymentAccountCreditParams {
  /**
   * Amount to credit in USD, as a decimal string with up to two fractional digits
   * (by default between 5.00 and 500.00). The request body is required on the
   * initial challenge request and remains required on a paid retry, where you
   * re-send the identical body plus the payment credential — the credential, not the
   * body, selects the payment, and the retried body is not re-validated.
   */
  amount_usd: string;
}

export declare namespace MachinePayments {
  export {
    type MachinePaymentAccountCreditResponse as MachinePaymentAccountCreditResponse,
    type MachinePaymentAccountCreditParams as MachinePaymentAccountCreditParams,
  };
}
