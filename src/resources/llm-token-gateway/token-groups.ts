// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage and report AI Gateway usage.
 */
export class TokenGroups extends APIResource {
  /**
   * List gateway token groups within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenGroup of client.llmTokenGateway.tokenGroups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TokenGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TokenGroupsDefaultFlatPagination, TokenGroup> {
    return this._client.getAPIList('/llm_token_gateway/token_groups', DefaultFlatPagination<TokenGroup>, {
      query,
      ...options,
    });
  }

  /**
   * Create gateway token group within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response.
   *
   * @example
   * ```ts
   * const tokenGroupResponse =
   *   await client.llmTokenGateway.tokenGroups.create({
   *     allowed_models: ['Kimi-K3', 'GLM-5.3-Flash'],
   *     name: 'support-backend',
   *     'Idempotency-Key': 'Idempotency-Key',
   *     fallbacks: { 'Kimi-K3': ['GLM-5.3-Flash'] },
   *     max_parallel_requests: 20,
   *     retries: {
   *       max_attempts: 2,
   *       retry_delay_ms: 250,
   *       backoff: 'exponential',
   *       request_timeout_ms: 10000,
   *     },
   *   });
   * ```
   */
  create(params: TokenGroupCreateParams, options?: RequestOptions): APIPromise<TokenGroupResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/llm_token_gateway/token_groups', {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Revoke resource and its keys atomically; retain historical attribution, never
   * detach into an ungoverned service key.
   *
   * @example
   * ```ts
   * await client.llmTokenGateway.tokenGroups.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     'Idempotency-Key': 'Idempotency-Key',
   *     'If-Match': 'If-Match',
   *   },
   * );
   * ```
   */
  delete(id: string, params: TokenGroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch } = params;
    return this._client.delete(path`/llm_token_gateway/token_groups/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch },
        options?.headers,
      ]),
    });
  }

  /**
   * Get gateway token group within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response.
   *
   * @example
   * ```ts
   * const tokenGroupResponse =
   *   await client.llmTokenGateway.tokenGroups.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TokenGroupResponse> {
    return this._client.get(path`/llm_token_gateway/token_groups/${id}`, options);
  }

  /**
   * Update gateway token group within the authenticated Telnyx account. Foreign and
   * unknown resource IDs return the same 404 response. Omitted fields are preserved.
   * Null clears the optional concurrency, fallback and retry settings. A stale
   * If-Match returns 412; read the resource again before updating.
   *
   * @example
   * ```ts
   * const tokenGroupResponse =
   *   await client.llmTokenGateway.tokenGroups.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       'Idempotency-Key': 'Idempotency-Key',
   *       'If-Match': 'If-Match',
   *       allowed_models: ['Kimi-K3', 'GLM-5.3-Flash'],
   *       fallbacks: { 'Kimi-K3': ['GLM-5.3-Flash'] },
   *       max_parallel_requests: 20,
   *       name: 'support-backend',
   *       retries: {
   *         max_attempts: 2,
   *         retry_delay_ms: 250,
   *         backoff: 'exponential',
   *         request_timeout_ms: 10000,
   *       },
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: TokenGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TokenGroupResponse> {
    const { 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch, ...body } = params;
    return this._client.patch(path`/llm_token_gateway/token_groups/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey, 'If-Match': ifMatch }, options?.headers]),
    });
  }
}

export type TokenGroupsDefaultFlatPagination = DefaultFlatPagination<TokenGroup>;

export interface AIGatewayResourcesPageMeta {
  has_more: boolean;

  page_number: number;

  page_size: number;

  snapshot: string;
}

export type BudgetDuration = '1d' | '7d' | '30d' | null;

export interface TokenGroup {
  id: string;

  allowed_models: Array<string>;

  blocked: boolean;

  budget_duration: BudgetDuration | null;

  budget_started_at: string | null;

  cache_ttl: number | null;

  created_at: string;

  /**
   * Per-group model fallbacks: primary alias -> ordered list of 1..3 other aliases.
   * Every key and listed alias must be in allowed_models (a PATCH removing a
   * referenced alias is 400); a chain never lists its own key; wildcards are
   * rejected. Chains are one level deep (a step's own chain is not expanded).
   * Fallback is attempted only for managed routes, only before the first provider
   * event is forwarded, and only to steps the key may use; each attempt is reserved
   * and recorded. {} and null both disable fallbacks.
   */
  fallbacks: { [key: string]: Array<string> } | null;

  /**
   * Per-group guardrail policy. Missing actions default to ignore. profiles may be
   * listed with both dlp actions ignore (staged, inactive) but a non-ignore dlp
   * action requires at least one profile. streaming defaults to buffered when any
   * response action is block and passthrough otherwise; passthrough with a response
   * block is 400. Findings are codes and counts only; content is never stored. The
   * stored form is echoed back canonicalised (all actions explicit, profiles
   * sorted); {} is stored as an all-ignore policy, null disables.
   */
  guardrails: TokenGroup.Guardrails | null;

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  max_budget: number | null;

  name: string;

  provider_key_ids: Array<string>;

  record_type: 'token_group';

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  reserved_spend: number;

  resets_at: string | null;

  /**
   * Per-group same-route retries. max_attempts counts the first try of each step
   * (the primary and each fallback) and is the ceiling for the x-ltg-max-attempts
   * request header. A step is retried only when its attempt definitely did no
   * provider work (connection failure before dispatch, or 429/529) before the first
   * provider event; an uncertain failure (timeout, 408/500/502/503/504) moves to the
   * next fallback step instead. max_attempts x (1 + the longest fallback chain) must
   * not exceed 8, else 400. The n-th retry waits retry_delay_ms (constant),
   * retry_delay_ms*n (linear) or retry_delay_ms*2^(n-1) (exponential), at most 5 s
   * and never past the request deadline, then jittered uniformly down to half that
   * value so concurrent retries spread out; a provider Retry-After of at most 5 s is
   * honoured and a longer one moves to the next step. request_timeout_ms applies to
   * streaming requests only: it bounds each attempt's time to its first provider
   * event and never applies after it. Non-stream requests keep the per-attempt hop
   * and idle bounds (their headers arrive only with the finished completion).
   * retry_delay_ms and backoff are floors for the request knobs. Each planned
   * attempt is reserved (at most 8 per request); unused reservation is released at
   * settlement. Managed routes only. The stored form is echoed back with defaults
   * filled in; null disables retries.
   */
  retries: TokenGroup.Retries | null;

  rpm_limit: number | null;

  /**
   * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
   * never binary float accounting.
   */
  spend: number;

  tpm_limit: number | null;

  updated_at: string;

  version: number;

  /**
   * Optional maximum concurrent reserved/dispatched cache misses across replicas.
   * Null means no concurrency cap. Cache hits do not consume slots; unknown usage
   * retains its budget hold without a slot.
   */
  max_parallel_requests?: number | null;
}

export namespace TokenGroup {
  /**
   * Per-group guardrail policy. Missing actions default to ignore. profiles may be
   * listed with both dlp actions ignore (staged, inactive) but a non-ignore dlp
   * action requires at least one profile. streaming defaults to buffered when any
   * response action is block and passthrough otherwise; passthrough with a response
   * block is 400. Findings are codes and counts only; content is never stored. The
   * stored form is echoed back canonicalised (all actions explicit, profiles
   * sorted); {} is stored as an all-ignore policy, null disables.
   */
  export interface Guardrails {
    dlp?: Guardrails.Dlp;

    secrets?: Guardrails.Secrets;

    streaming?: 'buffered' | 'passthrough';
  }

  export namespace Guardrails {
    export interface Dlp {
      profiles?: Array<'financial' | 'government_id' | 'contact'>;

      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }

    export interface Secrets {
      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }
  }

  /**
   * Per-group same-route retries. max_attempts counts the first try of each step
   * (the primary and each fallback) and is the ceiling for the x-ltg-max-attempts
   * request header. A step is retried only when its attempt definitely did no
   * provider work (connection failure before dispatch, or 429/529) before the first
   * provider event; an uncertain failure (timeout, 408/500/502/503/504) moves to the
   * next fallback step instead. max_attempts x (1 + the longest fallback chain) must
   * not exceed 8, else 400. The n-th retry waits retry_delay_ms (constant),
   * retry_delay_ms*n (linear) or retry_delay_ms*2^(n-1) (exponential), at most 5 s
   * and never past the request deadline, then jittered uniformly down to half that
   * value so concurrent retries spread out; a provider Retry-After of at most 5 s is
   * honoured and a longer one moves to the next step. request_timeout_ms applies to
   * streaming requests only: it bounds each attempt's time to its first provider
   * event and never applies after it. Non-stream requests keep the per-attempt hop
   * and idle bounds (their headers arrive only with the finished completion).
   * retry_delay_ms and backoff are floors for the request knobs. Each planned
   * attempt is reserved (at most 8 per request); unused reservation is released at
   * settlement. Managed routes only. The stored form is echoed back with defaults
   * filled in; null disables retries.
   */
  export interface Retries {
    max_attempts: number;

    backoff?: 'constant' | 'linear' | 'exponential';

    request_timeout_ms?: number | null;

    retry_delay_ms?: number;
  }
}

export interface TokenGroupResponse {
  data: TokenGroup;
}

export interface TokenGroupListParams extends DefaultFlatPaginationParams {
  /**
   * Required after page 1; account/filter-bound 15-minute stable snapshot;
   * expired/mismatch 409.
   */
  'page[snapshot]'?: string;
}

export interface TokenGroupCreateParams {
  /**
   * Body param
   */
  allowed_models: Array<string>;

  /**
   * Body param
   */
  name: string;

  /**
   * Header param: 24h, scoped by account+method+path. Same key/body returns same
   * outcome; changed body 409; in-progress 409 with Retry-After. Token-create replay
   * returns 200 metadata WITHOUT secret.
   */
  'Idempotency-Key': string;

  /**
   * Body param
   */
  blocked?: boolean;

  /**
   * Body param
   */
  budget_duration?: BudgetDuration | null;

  /**
   * Body param
   */
  cache_ttl?: number | null;

  /**
   * Body param: Per-group model fallbacks: primary alias -> ordered list of 1..3
   * other aliases. Every key and listed alias must be in allowed_models (a PATCH
   * removing a referenced alias is 400); a chain never lists its own key; wildcards
   * are rejected. Chains are one level deep (a step's own chain is not expanded).
   * Fallback is attempted only for managed routes, only before the first provider
   * event is forwarded, and only to steps the key may use; each attempt is reserved
   * and recorded. {} and null both disable fallbacks.
   */
  fallbacks?: { [key: string]: Array<string> } | null;

  /**
   * Body param: Per-group guardrail policy. Missing actions default to ignore.
   * profiles may be listed with both dlp actions ignore (staged, inactive) but a
   * non-ignore dlp action requires at least one profile. streaming defaults to
   * buffered when any response action is block and passthrough otherwise;
   * passthrough with a response block is 400. Findings are codes and counts only;
   * content is never stored. The stored form is echoed back canonicalised (all
   * actions explicit, profiles sorted); {} is stored as an all-ignore policy, null
   * disables.
   */
  guardrails?: TokenGroupCreateParams.Guardrails | null;

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
  provider_key_ids?: Array<string>;

  /**
   * Body param: Per-group same-route retries. max_attempts counts the first try of
   * each step (the primary and each fallback) and is the ceiling for the
   * x-ltg-max-attempts request header. A step is retried only when its attempt
   * definitely did no provider work (connection failure before dispatch, or 429/529)
   * before the first provider event; an uncertain failure (timeout,
   * 408/500/502/503/504) moves to the next fallback step instead. max_attempts x
   * (1 + the longest fallback chain) must not exceed 8, else 400. The n-th retry
   * waits retry_delay_ms (constant), retry_delay_ms*n (linear) or
   * retry_delay_ms*2^(n-1) (exponential), at most 5 s and never past the request
   * deadline, then jittered uniformly down to half that value so concurrent retries
   * spread out; a provider Retry-After of at most 5 s is honoured and a longer one
   * moves to the next step. request_timeout_ms applies to streaming requests only:
   * it bounds each attempt's time to its first provider event and never applies
   * after it. Non-stream requests keep the per-attempt hop and idle bounds (their
   * headers arrive only with the finished completion). retry_delay_ms and backoff
   * are floors for the request knobs. Each planned attempt is reserved (at most 8
   * per request); unused reservation is released at settlement. Managed routes only.
   * The stored form is echoed back with defaults filled in; null disables retries.
   */
  retries?: TokenGroupCreateParams.Retries | null;

  /**
   * Body param
   */
  rpm_limit?: number | null;

  /**
   * Body param
   */
  tpm_limit?: number | null;
}

export namespace TokenGroupCreateParams {
  /**
   * Per-group guardrail policy. Missing actions default to ignore. profiles may be
   * listed with both dlp actions ignore (staged, inactive) but a non-ignore dlp
   * action requires at least one profile. streaming defaults to buffered when any
   * response action is block and passthrough otherwise; passthrough with a response
   * block is 400. Findings are codes and counts only; content is never stored. The
   * stored form is echoed back canonicalised (all actions explicit, profiles
   * sorted); {} is stored as an all-ignore policy, null disables.
   */
  export interface Guardrails {
    dlp?: Guardrails.Dlp;

    secrets?: Guardrails.Secrets;

    streaming?: 'buffered' | 'passthrough';
  }

  export namespace Guardrails {
    export interface Dlp {
      profiles?: Array<'financial' | 'government_id' | 'contact'>;

      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }

    export interface Secrets {
      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }
  }

  /**
   * Per-group same-route retries. max_attempts counts the first try of each step
   * (the primary and each fallback) and is the ceiling for the x-ltg-max-attempts
   * request header. A step is retried only when its attempt definitely did no
   * provider work (connection failure before dispatch, or 429/529) before the first
   * provider event; an uncertain failure (timeout, 408/500/502/503/504) moves to the
   * next fallback step instead. max_attempts x (1 + the longest fallback chain) must
   * not exceed 8, else 400. The n-th retry waits retry_delay_ms (constant),
   * retry_delay_ms*n (linear) or retry_delay_ms*2^(n-1) (exponential), at most 5 s
   * and never past the request deadline, then jittered uniformly down to half that
   * value so concurrent retries spread out; a provider Retry-After of at most 5 s is
   * honoured and a longer one moves to the next step. request_timeout_ms applies to
   * streaming requests only: it bounds each attempt's time to its first provider
   * event and never applies after it. Non-stream requests keep the per-attempt hop
   * and idle bounds (their headers arrive only with the finished completion).
   * retry_delay_ms and backoff are floors for the request knobs. Each planned
   * attempt is reserved (at most 8 per request); unused reservation is released at
   * settlement. Managed routes only. The stored form is echoed back with defaults
   * filled in; null disables retries.
   */
  export interface Retries {
    max_attempts: number;

    backoff?: 'constant' | 'linear' | 'exponential';

    request_timeout_ms?: number | null;

    retry_delay_ms?: number;
  }
}

export interface TokenGroupDeleteParams {
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

export interface TokenGroupUpdateParams {
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
  allowed_models?: Array<string>;

  /**
   * Body param
   */
  blocked?: boolean;

  /**
   * Body param
   */
  budget_duration?: BudgetDuration | null;

  /**
   * Body param
   */
  cache_ttl?: number | null;

  /**
   * Body param: Per-group model fallbacks: primary alias -> ordered list of 1..3
   * other aliases. Every key and listed alias must be in allowed_models (a PATCH
   * removing a referenced alias is 400); a chain never lists its own key; wildcards
   * are rejected. Chains are one level deep (a step's own chain is not expanded).
   * Fallback is attempted only for managed routes, only before the first provider
   * event is forwarded, and only to steps the key may use; each attempt is reserved
   * and recorded. {} and null both disable fallbacks.
   */
  fallbacks?: { [key: string]: Array<string> } | null;

  /**
   * Body param: Per-group guardrail policy. Missing actions default to ignore.
   * profiles may be listed with both dlp actions ignore (staged, inactive) but a
   * non-ignore dlp action requires at least one profile. streaming defaults to
   * buffered when any response action is block and passthrough otherwise;
   * passthrough with a response block is 400. Findings are codes and counts only;
   * content is never stored. The stored form is echoed back canonicalised (all
   * actions explicit, profiles sorted); {} is stored as an all-ignore policy, null
   * disables.
   */
  guardrails?: TokenGroupUpdateParams.Guardrails | null;

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
   * Body param
   */
  provider_key_ids?: Array<string>;

  /**
   * Body param: Per-group same-route retries. max_attempts counts the first try of
   * each step (the primary and each fallback) and is the ceiling for the
   * x-ltg-max-attempts request header. A step is retried only when its attempt
   * definitely did no provider work (connection failure before dispatch, or 429/529)
   * before the first provider event; an uncertain failure (timeout,
   * 408/500/502/503/504) moves to the next fallback step instead. max_attempts x
   * (1 + the longest fallback chain) must not exceed 8, else 400. The n-th retry
   * waits retry_delay_ms (constant), retry_delay_ms*n (linear) or
   * retry_delay_ms*2^(n-1) (exponential), at most 5 s and never past the request
   * deadline, then jittered uniformly down to half that value so concurrent retries
   * spread out; a provider Retry-After of at most 5 s is honoured and a longer one
   * moves to the next step. request_timeout_ms applies to streaming requests only:
   * it bounds each attempt's time to its first provider event and never applies
   * after it. Non-stream requests keep the per-attempt hop and idle bounds (their
   * headers arrive only with the finished completion). retry_delay_ms and backoff
   * are floors for the request knobs. Each planned attempt is reserved (at most 8
   * per request); unused reservation is released at settlement. Managed routes only.
   * The stored form is echoed back with defaults filled in; null disables retries.
   */
  retries?: TokenGroupUpdateParams.Retries | null;

  /**
   * Body param
   */
  rpm_limit?: number | null;

  /**
   * Body param
   */
  tpm_limit?: number | null;
}

export namespace TokenGroupUpdateParams {
  /**
   * Per-group guardrail policy. Missing actions default to ignore. profiles may be
   * listed with both dlp actions ignore (staged, inactive) but a non-ignore dlp
   * action requires at least one profile. streaming defaults to buffered when any
   * response action is block and passthrough otherwise; passthrough with a response
   * block is 400. Findings are codes and counts only; content is never stored. The
   * stored form is echoed back canonicalised (all actions explicit, profiles
   * sorted); {} is stored as an all-ignore policy, null disables.
   */
  export interface Guardrails {
    dlp?: Guardrails.Dlp;

    secrets?: Guardrails.Secrets;

    streaming?: 'buffered' | 'passthrough';
  }

  export namespace Guardrails {
    export interface Dlp {
      profiles?: Array<'financial' | 'government_id' | 'contact'>;

      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }

    export interface Secrets {
      prompt?: 'ignore' | 'flag' | 'block';

      response?: 'ignore' | 'flag' | 'block';
    }
  }

  /**
   * Per-group same-route retries. max_attempts counts the first try of each step
   * (the primary and each fallback) and is the ceiling for the x-ltg-max-attempts
   * request header. A step is retried only when its attempt definitely did no
   * provider work (connection failure before dispatch, or 429/529) before the first
   * provider event; an uncertain failure (timeout, 408/500/502/503/504) moves to the
   * next fallback step instead. max_attempts x (1 + the longest fallback chain) must
   * not exceed 8, else 400. The n-th retry waits retry_delay_ms (constant),
   * retry_delay_ms*n (linear) or retry_delay_ms*2^(n-1) (exponential), at most 5 s
   * and never past the request deadline, then jittered uniformly down to half that
   * value so concurrent retries spread out; a provider Retry-After of at most 5 s is
   * honoured and a longer one moves to the next step. request_timeout_ms applies to
   * streaming requests only: it bounds each attempt's time to its first provider
   * event and never applies after it. Non-stream requests keep the per-attempt hop
   * and idle bounds (their headers arrive only with the finished completion).
   * retry_delay_ms and backoff are floors for the request knobs. Each planned
   * attempt is reserved (at most 8 per request); unused reservation is released at
   * settlement. Managed routes only. The stored form is echoed back with defaults
   * filled in; null disables retries.
   */
  export interface Retries {
    max_attempts: number;

    backoff?: 'constant' | 'linear' | 'exponential';

    request_timeout_ms?: number | null;

    retry_delay_ms?: number;
  }
}

export declare namespace TokenGroups {
  export {
    type AIGatewayResourcesPageMeta as AIGatewayResourcesPageMeta,
    type BudgetDuration as BudgetDuration,
    type TokenGroup as TokenGroup,
    type TokenGroupResponse as TokenGroupResponse,
    type TokenGroupsDefaultFlatPagination as TokenGroupsDefaultFlatPagination,
    type TokenGroupListParams as TokenGroupListParams,
    type TokenGroupCreateParams as TokenGroupCreateParams,
    type TokenGroupDeleteParams as TokenGroupDeleteParams,
    type TokenGroupUpdateParams as TokenGroupUpdateParams,
  };
}
