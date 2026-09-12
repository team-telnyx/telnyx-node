// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations for x402 cryptocurrency payment transactions. Fund your Telnyx account using USDC stablecoin payments via the x402 protocol.
 */
export class Payments extends APIResource {
  /**
   * Returns a paginated list of the authenticated user's x402 payment transactions,
   * newest first. Organization sub-users must have read permission on transactions;
   * without it the list is empty.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const x402TransactionRecord of client.x402.creditAccount.payments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<X402TransactionRecordsDefaultFlatPagination, X402TransactionRecord> {
    return this._client.getAPIList(
      '/v2/x402/credit_account/payments',
      DefaultFlatPagination<X402TransactionRecord>,
      { query, ...options },
    );
  }

  /**
   * Returns a single x402 payment transaction by ID. The transaction must belong to
   * the authenticated user; organization sub-users must have read permission on
   * transactions. Returns 404 if the transaction does not exist or belongs to
   * another user.
   *
   * @example
   * ```ts
   * const payment =
   *   await client.x402.creditAccount.payments.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentRetrieveResponse> {
    return this._client.get(path`/v2/x402/credit_account/payments/${id}`, options);
  }
}

export type X402TransactionRecordsDefaultFlatPagination = DefaultFlatPagination<X402TransactionRecord>;

/**
 * An x402 payment transaction.
 */
export interface X402TransactionRecord {
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
   * The settlement status of the transaction. x402 transactions are created after
   * successful on-chain settlement, so the status is `settled`.
   */
  status?: 'settled';

  /**
   * The on-chain transaction hash, if available.
   */
  tx_hash?: string | null;

  /**
   * ISO 8601 timestamp when the transaction was last updated.
   */
  updated_at?: string;
}

export interface PaymentRetrieveResponse {
  /**
   * An x402 payment transaction.
   */
  data?: X402TransactionRecord;
}

export interface PaymentListParams extends DefaultFlatPaginationParams {}

export declare namespace Payments {
  export {
    type X402TransactionRecord as X402TransactionRecord,
    type PaymentRetrieveResponse as PaymentRetrieveResponse,
    type X402TransactionRecordsDefaultFlatPagination as X402TransactionRecordsDefaultFlatPagination,
    type PaymentListParams as PaymentListParams,
  };
}
