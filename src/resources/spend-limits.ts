// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SpendLimitsAPI from './spend-limits';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Daily and monthly spend limits per product. A limit applies to the organization of the authenticated user, or to the user's own account when they belong to no organization; every user of the organization sees and changes the same limits.
 *
 * - **Periods.** `daily` covers the current UTC day and `monthly` the current UTC calendar month. The two limits are independent: you can set either, both or neither.
 * - **Blocking.** When spend in a period goes above the limit (strictly greater), the product is blocked until the period ends: 00:00 UTC the next day for `daily`, 00:00 UTC on the 1st of the next month for `monthly`. A block appears within about 2 minutes (daily) or 10 minutes (monthly) of the spend being recorded.
 * - **Changes apply immediately.** Creating, updating or deleting a limit checks the period's spend in the same request: raising the limit above the spend, or removing it, lifts that period's block, and lowering it below the spend blocks the product at once. The `evaluation` object in the response says what happened.
 * - **Supported products.** Today only `inference` supports spend limits. A blocked account gets HTTP 403 with the error title `Inference spend limit reached` (code `10039`) on new billable chat completions, Responses, Anthropic Messages and classification requests; requests already running finish normally. Take the list of products from the list operation.
 * - **API key limits.** For `inference`, a limit can also apply to one API key, named by `credential_id`: the key's identifier as recorded on usage, never its secret. When the key's spend goes above its own limit, only that key is blocked, with the error title `API key spend limit reached` (code `10039`); the account's other keys keep working. The API key limits of a period cannot add up to more than the total limit when the total has an amount. Only language-model requests authenticated with an API key count toward its limit.
 * - **Limits set by Telnyx.** Telnyx support can also set a limit on your account. It is listed with `origin: operator` and you can update or delete it like your own.
 */
export class SpendLimits extends APIResource {
  /**
   * Returns one entry per product and period you can set a limit on, with the limit,
   * the spend so far in the period and whether the product is blocked. An entry
   * without a limit is still listed (`limit: null`). When the spend cannot be read,
   * the entry is returned with `spend_usd: null` and `spend_error` set. The list is
   * not paginated. Each entry also lists the API key limits of its product and
   * period in `credential_limits`, with each key's spend and block. Each API key
   * limit can be at most the total limit; together they may add up to more than it.
   *
   * @example
   * ```ts
   * const spendLimits = await client.spendLimits.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SpendLimitListResponse> {
    return this._client.get('/spend_limits', options);
  }

  /**
   * Sets a limit for a product and period that has none. Send exactly one of
   * `amount` and `unlimited: true`. The period's spend is checked at once: if it is
   * already above the new limit, the product is blocked immediately
   * (`evaluation.blocked_now`). Returns 409 when a limit already exists for the
   * product and period; update it instead. With `credential_id`, the limit applies
   * to that API key only: it needs an `amount`, and the period's API key limits
   * cannot add up to more than the total limit when the total has an amount.
   *
   * @example
   * ```ts
   * const spendLimitResponse = await client.spendLimits.create({
   *   amount: 100,
   *   product: 'inference',
   *   period: 'daily',
   *   reason: 'Team budget',
   * });
   * ```
   */
  create(body: SpendLimitCreateParams, options?: RequestOptions): APIPromise<SpendLimitResponse> {
    return this._client.post('/spend_limits', { body, ...options });
  }

  /**
   * Removes the limit for the product and period. For `inference`, which has no
   * default limit, the product becomes unlimited for the period and the period's
   * block is lifted (`evaluation.released`). The response carries `limit: null` and
   * the `effective_limit_usd` that applies after the removal. Returns 404 when no
   * limit is set. With the `credential_id` query parameter, the request removes that
   * API key's limit for the period and lifts the key's block in that period at once.
   * A block under the key's limit in the other period stays
   * (`evaluation.still_blocked_other_period`). Removing the total limit leaves the
   * API key limits in place.
   *
   * @example
   * ```ts
   * const spendLimitResponse = await client.spendLimits.delete(
   *   'inference',
   * );
   * ```
   */
  delete(
    product: string,
    params: SpendLimitDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpendLimitResponse> {
    const { credential_id, period, reason } = params ?? {};
    return this._client.delete(path`/spend_limits/${product}`, {
      query: { credential_id, period, reason },
      ...options,
    });
  }

  /**
   * Replaces the value of the existing limit for the product and period. Send
   * exactly one of `amount` and `unlimited: true`. The period's spend is checked at
   * once: raising the limit above the spend lifts the period's block
   * (`evaluation.released`), and lowering it below the spend blocks the product
   * (`evaluation.blocked_now`). Returns 404 when no limit is set; create it instead.
   * With the `credential_id` query parameter, the request changes that API key's
   * limit; it needs an `amount`, and it can be at most the period's total limit.
   * Lowering the total limit below the period's highest API key limit is refused.
   *
   * @example
   * ```ts
   * const spendLimitResponse = await client.spendLimits.update(
   *   'inference',
   *   { amount: 250 },
   * );
   * ```
   */
  update(
    product: string,
    params: SpendLimitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SpendLimitResponse> {
    const { credential_id, period, ...body } = params;
    return this._client.patch(path`/spend_limits/${product}`, {
      query: { credential_id, period },
      body,
      ...options,
    });
  }
}

/**
 * The spend limit, spend and block state of one product and period. The top-level
 * fields describe the total limit of the account; API key limits are nested in
 * `credential_limits`.
 */
export interface SpendLimit {
  /**
   * The active block of the period. `null` when the period is not blocked.
   */
  block: SpendLimitBlock | null;

  /**
   * The product is blocked for the whole account in this period (total limit). An
   * API key's own block appears only in `credential_limits`. Always `false` in write
   * responses; list the limits to read the block state.
   */
  blocked: boolean;

  /**
   * The limit in USD that is enforced, as a decimal string. `null` means unlimited.
   */
  effective_limit_usd: string | null;

  /**
   * The limit set on the account for the product and period, whoever set it. `null`
   * when none is set.
   */
  limit: SpendLimit.Limit | null;

  /**
   * `daily` is the current UTC day; `monthly` is the current UTC calendar month.
   */
  period: SpendLimitPeriod;

  /**
   * Exclusive end of the current period, a UTC date.
   */
  period_end: string;

  /**
   * First UTC day of the current period.
   */
  period_start: string;

  /**
   * Product the entry applies to.
   */
  product: string;

  /**
   * Display name of the product.
   */
  product_name: string;

  /**
   * Identifies the type of the resource.
   */
  record_type: string;

  /**
   * Set when `spend_usd` is `null`.
   */
  spend_error: string | null;

  /**
   * Spend in USD so far in the period, as a decimal string. It can lag actual usage
   * by about a minute. `null` when it could not be read.
   */
  spend_usd: string | null;

  /**
   * In write responses, the API key the write was about; `null` for the total limit.
   * Always `null` in list entries, which describe the total limit.
   */
  credential_id?: string | null;

  /**
   * List responses only. One item per API key limit of the product and period,
   * sorted by `credential_id`, plus every API key that is still blocked. `[]` when
   * there are none.
   */
  credential_limits?: Array<SpendLimit.CredentialLimit>;

  /**
   * What a create, update or delete did to the period at once. Only present in write
   * responses.
   */
  evaluation?: SpendLimit.Evaluation;
}

export namespace SpendLimit {
  /**
   * The limit set on the account for the product and period, whoever set it. `null`
   * when none is set.
   */
  export interface Limit {
    /**
     * Limit in USD, as a decimal string. `null` when `unlimited` is true.
     */
    amount: string | null;

    /**
     * `self_service` when a user of the account set it, `operator` when Telnyx support
     * did.
     */
    origin: 'self_service' | 'operator';

    /**
     * True when the limit was set to explicitly no cap.
     */
    unlimited: boolean;

    /**
     * When the limit was last set or changed.
     */
    updated_at: string;
  }

  /**
   * The limit, spend and block state of one API key in the product and period.
   */
  export interface CredentialLimit {
    /**
     * The active block of the period. `null` when the period is not blocked.
     */
    block: SpendLimitsAPI.SpendLimitBlock | null;

    /**
     * This API key is blocked for the period.
     */
    blocked: boolean;

    /**
     * Identifier of the API key as recorded on usage. Never the key's secret.
     */
    credential_id: string;

    /**
     * The limit of one API key. It always has an amount. `null` for an API key that is
     * still blocked after its limit was removed.
     */
    limit: CredentialLimit.Limit | null;

    /**
     * Set when `spend_usd` is `null`.
     */
    spend_error: string | null;

    /**
     * Spend in USD in the period made with exactly this API key, as a decimal string.
     * Usage without an API key identifier, or with another one, counts only toward the
     * total. `null` when it could not be read.
     */
    spend_usd: string | null;

    /**
     * The API key's limit is above the period's total limit. Only a change by Telnyx
     * support can cause it; the total limit still applies to the whole account. Lower
     * the API key limit or raise the total.
     */
    exceeds_total?: boolean;
  }

  export namespace CredentialLimit {
    /**
     * The limit of one API key. It always has an amount. `null` for an API key that is
     * still blocked after its limit was removed.
     */
    export interface Limit {
      /**
       * Limit in USD, as a decimal string.
       */
      amount: string;

      /**
       * `self_service` when a user of the account set it, `operator` when Telnyx support
       * did.
       */
      origin: 'self_service' | 'operator';

      /**
       * When the limit was last set or changed.
       */
      updated_at: string;
    }
  }

  /**
   * What a create, update or delete did to the period at once. Only present in write
   * responses.
   */
  export interface Evaluation {
    /**
     * The change blocked the product: the spend was already above the new limit.
     */
    blocked_now: boolean;

    /**
     * The spend could not be checked now. The change is saved and applied within a few
     * minutes.
     */
    evaluation_deferred: boolean;

    /**
     * The change lifted a block of this period.
     */
    released: boolean;

    /**
     * Spend in USD used for the check, as a decimal string. `null` when the spend was
     * not checked.
     */
    spend_usd: string | null;

    /**
     * The other period has an active block, so the product stays blocked whatever this
     * period's result. For an API key write, the API key's limit in the other period.
     */
    still_blocked_other_period: boolean;

    /**
     * A block of this period remains because the spend is still above the new limit.
     */
    still_over_limit: boolean;

    /**
     * API key writes only: the account itself remains blocked for the product under a
     * total limit. Absent for total limit writes.
     */
    account_blocked?: boolean;

    /**
     * Additional information about the result, when there is any.
     */
    note?: string;
  }
}

/**
 * The active block of the period. `null` when the period is not blocked.
 */
export interface SpendLimitBlock {
  /**
   * Exclusive end of the block: it is lifted at 00:00 UTC on this date at the
   * latest.
   */
  blocked_until: string;

  /**
   * When the block started.
   */
  detected_at: string;

  /**
   * The limit in USD that the spend went above, as a decimal string.
   */
  limit_usd: string;

  /**
   * Spend in USD when the block started, as a decimal string.
   */
  spend_usd: string;
}

/**
 * `daily` is the current UTC day; `monthly` is the current UTC calendar month.
 */
export type SpendLimitPeriod = 'daily' | 'monthly';

export interface SpendLimitResponse {
  /**
   * The spend limit, spend and block state of one product and period. The top-level
   * fields describe the total limit of the account; API key limits are nested in
   * `credential_limits`.
   */
  data: SpendLimit;
}

export interface SpendLimitListResponse {
  data: Array<SpendLimit>;

  meta?: SpendLimitListResponse.Meta;
}

export namespace SpendLimitListResponse {
  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export type SpendLimitCreateParams =
  | SpendLimitCreateParams.CreateSpendLimitWithAmount
  | SpendLimitCreateParams.CreateSpendLimitUnlimited;

export declare namespace SpendLimitCreateParams {
  export interface CreateSpendLimitWithAmount {
    /**
     * Limit in USD. `0` blocks at the first cent of spend.
     */
    amount: number;

    /**
     * Product to limit, as returned in `product` by the list operation.
     */
    product: string;

    /**
     * Optional. Identifier of one API key as recorded on usage, never the key's
     * secret: the limit then applies to that key only. Absent or `null` sets the total
     * limit. A blank value, or one with control characters, is refused; it never means
     * the total limit. An API key limit always has an `amount`.
     */
    credential_id?: string | null;

    /**
     * `daily` is the current UTC day; `monthly` is the current UTC calendar month.
     */
    period?: SpendLimitPeriod;

    /**
     * Why the limit is set or changed, kept for audit.
     */
    reason?: string;

    /**
     * Optional; only `false` is allowed together with `amount`.
     */
    unlimited?: false;
  }

  export interface CreateSpendLimitUnlimited {
    /**
     * Product to limit, as returned in `product` by the list operation.
     */
    product: string;

    /**
     * `true`: explicitly no cap.
     */
    unlimited: true;

    /**
     * `daily` is the current UTC day; `monthly` is the current UTC calendar month.
     */
    period?: SpendLimitPeriod;

    /**
     * Why the limit is set or changed, kept for audit.
     */
    reason?: string;
  }
}

export interface SpendLimitDeleteParams {
  /**
   * Identifier of one API key as recorded on usage, never the key's secret,
   * percent-encoded: the request is then about that key's limit. Absent means the
   * total limit; present but blank is refused.
   */
  credential_id?: string;

  /**
   * Limit period. Defaults to `daily`; send it explicitly.
   */
  period?: SpendLimitPeriod;

  /**
   * Why the limit is removed, kept for audit. At most 500 characters.
   */
  reason?: string;
}

export type SpendLimitUpdateParams =
  | SpendLimitUpdateParams.UpdateSpendLimitWithAmount
  | SpendLimitUpdateParams.UpdateSpendLimitUnlimited;

export declare namespace SpendLimitUpdateParams {
  export interface UpdateSpendLimitWithAmount {
    /**
     * Body param: Limit in USD. `0` blocks at the first cent of spend.
     */
    amount: number;

    /**
     * Query param: Identifier of one API key as recorded on usage, never the key's
     * secret, percent-encoded: the request is then about that key's limit. Absent
     * means the total limit; present but blank is refused.
     */
    credential_id?: string;

    /**
     * Query param: Limit period. Defaults to `daily`; send it explicitly.
     */
    period?: SpendLimitPeriod;

    /**
     * Body param: Why the limit is set or changed, kept for audit.
     */
    reason?: string;

    /**
     * Body param: Optional; only `false` is allowed together with `amount`.
     */
    unlimited?: false;
  }

  export interface UpdateSpendLimitUnlimited {
    /**
     * Body param: `true`: explicitly no cap.
     */
    unlimited: true;

    /**
     * Query param: Identifier of one API key as recorded on usage, never the key's
     * secret, percent-encoded: the request is then about that key's limit. Absent
     * means the total limit; present but blank is refused.
     */
    credential_id?: string;

    /**
     * Query param: Limit period. Defaults to `daily`; send it explicitly.
     */
    period?: SpendLimitPeriod;

    /**
     * Body param: Why the limit is set or changed, kept for audit.
     */
    reason?: string;
  }
}

export declare namespace SpendLimits {
  export {
    type SpendLimit as SpendLimit,
    type SpendLimitBlock as SpendLimitBlock,
    type SpendLimitPeriod as SpendLimitPeriod,
    type SpendLimitResponse as SpendLimitResponse,
    type SpendLimitListResponse as SpendLimitListResponse,
    type SpendLimitCreateParams as SpendLimitCreateParams,
    type SpendLimitDeleteParams as SpendLimitDeleteParams,
    type SpendLimitUpdateParams as SpendLimitUpdateParams,
  };
}
