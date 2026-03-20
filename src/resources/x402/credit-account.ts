// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Operations for x402 cryptocurrency payment transactions. Fund your Telnyx account using USDC stablecoin payments via the x402 protocol.
 */
export class CreditAccount extends APIResource {
  /**
   * Creates a payment quote for the specified USD amount. Returns payment details
   * including the x402 payment requirements, network, and expiration time. The quote
   * must be settled before it expires.
   *
   * @example
   * ```ts
   * const response =
   *   await client.x402.creditAccount.createQuote({
   *     amount_usd: '50.00',
   *   });
   * ```
   */
  createQuote(
    body: CreditAccountCreateQuoteParams,
    options?: RequestOptions,
  ): APIPromise<CreditAccountCreateQuoteResponse> {
    return this._client.post('/v2/x402/credit_account/quote', { body, ...options });
  }

  /**
   * Settles an x402 payment using the quote ID and a signed payment authorization.
   * The payment signature can be provided via the `PAYMENT-SIGNATURE` header or the
   * `payment_signature` body parameter. Settlement is idempotent — submitting the
   * same quote ID multiple times returns the existing transaction.
   *
   * @example
   * ```ts
   * const response = await client.x402.creditAccount.settle({
   *   id: 'quote_abc123',
   *   payment_signature: '0xabc123...',
   * });
   * ```
   */
  settle(
    params: CreditAccountSettleParams,
    options?: RequestOptions,
  ): APIPromise<CreditAccountSettleResponse> {
    const { 'PAYMENT-SIGNATURE': paymentSignature, ...body } = params;
    return this._client.post('/v2/x402/credit_account', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(paymentSignature != null ? { 'PAYMENT-SIGNATURE': paymentSignature } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CreditAccountCreateQuoteResponse {
  data?: CreditAccountCreateQuoteResponse.Data;
}

export namespace CreditAccountCreateQuoteResponse {
  export interface Data {
    /**
     * Unique quote identifier. Use this to settle the payment.
     */
    id?: string;

    /**
     * The equivalent amount in the payment cryptocurrency's smallest unit (e.g. USDC
     * has 6 decimals, so $50.00 = "50000000").
     */
    amount_crypto?: string;

    /**
     * The quoted amount in USD.
     */
    amount_usd?: string;

    /**
     * ISO 8601 timestamp when the quote expires.
     */
    expires_at?: string;

    /**
     * The blockchain network for the payment in CAIP-2 format (e.g. eip155:8453 for
     * Base).
     */
    network?: string;

    /**
     * x402 protocol v2 payment requirements. Contains all information needed to
     * construct and sign a payment authorization.
     */
    payment_requirements?: Data.PaymentRequirements;

    record_type?: 'quote';
  }

  export namespace Data {
    /**
     * x402 protocol v2 payment requirements. Contains all information needed to
     * construct and sign a payment authorization.
     */
    export interface PaymentRequirements {
      /**
       * Accepted payment schemes. Currently only the `exact` EVM scheme is supported.
       */
      accepts?: Array<PaymentRequirements.Accept>;

      /**
       * The resource being paid for. Included in the payment signature.
       */
      resource?: PaymentRequirements.Resource;

      /**
       * x402 protocol version. Currently always 2.
       */
      x402Version?: 2;
    }

    export namespace PaymentRequirements {
      export interface Accept {
        /**
         * Amount in the token's smallest unit.
         */
        amount?: string;

        /**
         * Token contract address (e.g. USDC on Base).
         */
        asset?: string;

        /**
         * Additional scheme-specific parameters including EIP-712 domain info and the
         * facilitator URL.
         */
        extra?: Accept.Extra;

        /**
         * Maximum time in seconds before the payment authorization expires.
         */
        maxTimeoutSeconds?: number;

        /**
         * Blockchain network identifier in CAIP-2 format (e.g. "eip155:8453" for Base).
         */
        network?: string;

        /**
         * Recipient wallet address.
         */
        payTo?: string;

        /**
         * Payment scheme (e.g. "exact").
         */
        scheme?: string;
      }

      export namespace Accept {
        /**
         * Additional scheme-specific parameters including EIP-712 domain info and the
         * facilitator URL.
         */
        export interface Extra {
          facilitatorUrl?: string;

          /**
           * EIP-712 domain name (e.g. "USD Coin").
           */
          name?: string;

          quoteId?: string;

          /**
           * EIP-712 domain version.
           */
          version?: string;
        }
      }

      /**
       * The resource being paid for. Included in the payment signature.
       */
      export interface Resource {
        /**
         * Human-readable description of the payment.
         */
        description?: string;

        /**
         * MIME type of the resource.
         */
        mimeType?: string;

        /**
         * Canonical URL of the payment resource.
         */
        url?: string;
      }
    }
  }
}

export interface CreditAccountSettleResponse {
  data?: CreditAccountSettleResponse.Data;
}

export namespace CreditAccountSettleResponse {
  export interface Data {
    /**
     * Unique transaction identifier.
     */
    id?: string;

    /**
     * The transaction amount in the specified currency.
     */
    amount?: string;

    /**
     * ISO 8601 timestamp when the transaction was created.
     */
    created_at?: string;

    /**
     * The currency of the transaction amount (e.g. USD).
     */
    currency?: string;

    /**
     * The original quote ID associated with this transaction.
     */
    quote_id?: string;

    record_type?: 'x402_transaction';

    /**
     * The settlement status of the transaction.
     */
    status?: 'settled';

    /**
     * The on-chain transaction hash, if available.
     */
    tx_hash?: string | null;
  }
}

export interface CreditAccountCreateQuoteParams {
  /**
   * Amount in USD to fund (minimum 5.00, maximum 10000.00).
   */
  amount_usd: string;
}

export interface CreditAccountSettleParams {
  /**
   * Body param: The quote ID to settle.
   */
  id: string;

  /**
   * Body param: Base64-encoded signed payment authorization (x402 PaymentPayload).
   * Can alternatively be provided via the PAYMENT-SIGNATURE header.
   */
  payment_signature?: string;

  /**
   * Header param: Signed payment authorization for the quote. Alternative to
   * providing `payment_signature` in the request body.
   */
  'PAYMENT-SIGNATURE'?: string;
}

export declare namespace CreditAccount {
  export {
    type CreditAccountCreateQuoteResponse as CreditAccountCreateQuoteResponse,
    type CreditAccountSettleResponse as CreditAccountSettleResponse,
    type CreditAccountCreateQuoteParams as CreditAccountCreateQuoteParams,
    type CreditAccountSettleParams as CreditAccountSettleParams,
  };
}
