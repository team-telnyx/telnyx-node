// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokenGroupsAPI from './token-groups';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage and report AI Gateway usage.
 */
export class TokenKeys extends APIResource {
  /**
   * List gateway token keys within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenKey of client.llmTokenGateway.tokenKeys.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TokenKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TokenKeysDefaultFlatPagination, TokenKey> {
    return this._client.getAPIList('/llm_token_gateway/token_keys', DefaultFlatPagination<TokenKey>, {
      query,
      ...options,
    });
  }

  /**
   * Create gateway token key within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response. The token secret is returned
   * only on the original create response. A replay returns metadata without the
   * secret. Provisioning is advisory; ready is not a guarantee of inference
   * availability.
   *
   * @example
   * ```ts
   * const tokenKeyResponse =
   *   await client.llmTokenGateway.tokenKeys.create({
   *     name: 'support-service',
   *     token_group_id: '11111111-1111-4111-8111-111111111111',
   *     'Idempotency-Key': 'Idempotency-Key',
   *     max_parallel_requests: 5,
   *   });
   * ```
   */
  create(params: TokenKeyCreateParams, options?: RequestOptions): APIPromise<TokenKeyResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/llm_token_gateway/token_keys', {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Revoke this token key. Acknowledged revocation blocks new admissions with the
   * key; requests already admitted may complete. Historical usage attribution is
   * retained. Other keys in the group are unchanged.
   *
   * @example
   * ```ts
   * await client.llmTokenGateway.tokenKeys.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     'Idempotency-Key': 'Idempotency-Key',
   *     'If-Match': 'If-Match',
   *   },
   * );
   * ```
   */
  delete(id: string, params: TokenKeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch } = params;
    return this._client.delete(path`/llm_token_gateway/token_keys/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch },
        options?.headers,
      ]),
    });
  }

  /**
   * Get gateway token key within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response.
   *
   * @example
   * ```ts
   * const tokenKeyResponse =
   *   await client.llmTokenGateway.tokenKeys.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TokenKeyResponse> {
    return this._client.get(path`/llm_token_gateway/token_keys/${id}`, options);
  }

  /**
   * Update gateway token key within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response. Omitted fields are preserved.
   * Null clears max_parallel_requests; null resets budget and rate limits to their
   * maximum. A stale If-Match returns 412.
   *
   * @example
   * ```ts
   * const tokenKeyResponse =
   *   await client.llmTokenGateway.tokenKeys.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       'Idempotency-Key': 'Idempotency-Key',
   *       'If-Match': 'If-Match',
   *       max_parallel_requests: 5,
   *     },
   *   );
   * ```
   */
  update(id: string, params: TokenKeyUpdateParams, options?: RequestOptions): APIPromise<TokenKeyResponse> {
    const { 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch, ...body } = params;
    return this._client.patch(path`/llm_token_gateway/token_keys/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch }, options?.headers]),
    });
  }
}

export type TokenKeysDefaultFlatPagination = DefaultFlatPagination<TokenKey>;

export interface TokenKey {
  id: string;

  allowed_models: Array<string> | null;

  blocked: boolean;

  budget_duration: TokenGroupsAPI.BudgetDuration | null;

  budget_started_at: string | null;

  created_at: string;

  expires_at: string | null;

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  max_budget: number | null;

  name: string;

  record_type: 'token_key';

  /**
   * Require a nonempty caller-asserted end-user ID; not proof of identity.
   */
  required_end_user_id: boolean;

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  reserved_spend: number;

  resets_at: string | null;

  /**
   * Stored key limit; set to the maximum when the key was written without one (on a
   * blocked key, null is kept until the key is unblocked).
   */
  rpm_limit: number | null;

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  spend: number;

  token_group_id: string;

  token_user_id: string | null;

  /**
   * Stored key limit; set to the maximum when the key was written without one (on a
   * blocked key, null is kept until the key is unblocked).
   */
  tpm_limit: number | null;

  updated_at: string;

  version: number;

  /**
   * Optional maximum concurrent reserved/dispatched cache misses across replicas.
   * Null means no concurrency cap. Cache hits do not consume slots; unknown usage
   * retains its budget hold without a slot.
   */
  max_parallel_requests?: number | null;

  /**
   * Provisioning state of the key's current policy. `pending`: retry readiness with
   * bounded backoff (treat `unknown` the same). `inactive` and `unsupported` are
   * terminal until the key, group, user or catalog changes. `unavailable` means
   * provisioning is stuck and is retried slowly; surface it. Absent while the
   * gateway runs in compatibility mode.
   */
  provisioning?: 'ready' | 'pending' | 'unavailable' | 'inactive' | 'unsupported' | 'unknown';
}

export interface TokenKeyResponse {
  data: TokenKey;
}

export interface TokenKeyListParams extends DefaultFlatPaginationParams {
  /**
   * Required after page 1; account/filter-bound 15-minute stable snapshot;
   * expired/mismatch 409.
   */
  'page[snapshot]'?: string;

  token_group_id?: string;

  token_user_id?: string;
}

export interface TokenKeyCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  token_group_id: string;

  /**
   * Header param: 24h, scoped by account+method+path. Same key/body returns same
   * outcome; changed body 409; in-progress 409 with Retry-After. Token-create replay
   * returns 200 metadata WITHOUT secret.
   */
  'Idempotency-Key': string;

  /**
   * Body param
   */
  allowed_models?: Array<string> | null;

  /**
   * Body param
   */
  blocked?: boolean;

  /**
   * Body param
   */
  budget_duration?: TokenGroupsAPI.BudgetDuration | null;

  /**
   * Body param
   */
  expires_at?: string | null;

  /**
   * Body param: USD, decimal precision at most 6 places; parse exactly to integer
   * micro-USD, never binary float accounting.
   */
  max_budget?: number | null;

  /**
   * Body param: Optional maximum concurrent reserved/dispatched cache misses across
   * replicas. Null means no concurrency cap. Cache hits do not consume slots;
   * unknown usage retains its budget hold without a slot.
   */
  max_parallel_requests?: number | null;

  /**
   * Body param: Require a nonempty caller-asserted end-user ID; not proof of
   * identity.
   */
  required_end_user_id?: boolean;

  /**
   * Body param: Omitted or null defaults to the maximum (6000) (on a blocked key,
   * null is kept until the key is unblocked); a value below the minimum (1) or above
   * the maximum is rejected with 400 limit_out_of_range; a malformed value
   * (negative, wrong type or precision) is 400 invalid_request. Block the key
   * (blocked: true) to deny it; blocking is always accepted.
   */
  rpm_limit?: number | null;

  /**
   * Body param
   */
  token_user_id?: string | null;

  /**
   * Body param: Omitted or null defaults to the maximum (10000000) (on a blocked
   * key, null is kept until the key is unblocked); a value below the minimum (1) or
   * above the maximum is rejected with 400 limit_out_of_range; a malformed value
   * (negative, wrong type or precision) is 400 invalid_request. Block the key
   * (blocked: true) to deny it; blocking is always accepted.
   */
  tpm_limit?: number | null;
}

export interface TokenKeyDeleteParams {
  /**
   * 24h, scoped by account+method+path. Same key/body returns same outcome; changed
   * body 409; in-progress 409 with Retry-After. Token-create replay returns 200
   * metadata WITHOUT secret.
   */
  'Idempotency-Key': string;

  /**
   * Exact quoted resource-version ETag; an exact intermediary-weakened echo W/"n" is
   * accepted. Wildcard, combined and malformed validators are rejected; stale 412;
   * missing 428. HTTP field names are case-insensitive. Replayed idempotent result
   * is checked first.
   */
  'If-Match': string;
}

export interface TokenKeyUpdateParams {
  /**
   * Header param: 24h, scoped by account+method+path. Same key/body returns same
   * outcome; changed body 409; in-progress 409 with Retry-After. Token-create replay
   * returns 200 metadata WITHOUT secret.
   */
  'Idempotency-Key': string;

  /**
   * Header param: Exact quoted resource-version ETag; an exact intermediary-weakened
   * echo W/"n" is accepted. Wildcard, combined and malformed validators are
   * rejected; stale 412; missing 428. HTTP field names are case-insensitive.
   * Replayed idempotent result is checked first.
   */
  'If-Match': string;

  /**
   * Body param
   */
  allowed_models?: Array<string> | null;

  /**
   * Body param
   */
  blocked?: boolean;

  /**
   * Body param
   */
  budget_duration?: TokenGroupsAPI.BudgetDuration | null;

  /**
   * Body param
   */
  expires_at?: string | null;

  /**
   * Body param: USD, decimal precision at most 6 places; parse exactly to integer
   * micro-USD, never binary float accounting.
   */
  max_budget?: number | null;

  /**
   * Body param: Optional maximum concurrent reserved/dispatched cache misses across
   * replicas. Null means no concurrency cap. Cache hits do not consume slots;
   * unknown usage retains its budget hold without a slot.
   */
  max_parallel_requests?: number | null;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param: Require a nonempty caller-asserted end-user ID; not proof of
   * identity. Omission preserves the current requirement.
   */
  required_end_user_id?: boolean;

  /**
   * Body param: Omitted or null defaults to the maximum (6000) (on a blocked key,
   * null is kept until the key is unblocked); a value below the minimum (1) or above
   * the maximum is rejected with 400 limit_out_of_range; a malformed value
   * (negative, wrong type or precision) is 400 invalid_request. Block the key
   * (blocked: true) to deny it; blocking is always accepted.
   */
  rpm_limit?: number | null;

  /**
   * Body param: Omitted or null defaults to the maximum (10000000) (on a blocked
   * key, null is kept until the key is unblocked); a value below the minimum (1) or
   * above the maximum is rejected with 400 limit_out_of_range; a malformed value
   * (negative, wrong type or precision) is 400 invalid_request. Block the key
   * (blocked: true) to deny it; blocking is always accepted.
   */
  tpm_limit?: number | null;
}

export declare namespace TokenKeys {
  export {
    type TokenKey as TokenKey,
    type TokenKeyResponse as TokenKeyResponse,
    type TokenKeysDefaultFlatPagination as TokenKeysDefaultFlatPagination,
    type TokenKeyListParams as TokenKeyListParams,
    type TokenKeyCreateParams as TokenKeyCreateParams,
    type TokenKeyDeleteParams as TokenKeyDeleteParams,
    type TokenKeyUpdateParams as TokenKeyUpdateParams,
  };
}
