// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageAPI from './usage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage and report AI Gateway usage.
 */
export class Usage extends APIResource {
  /**
   * Gateway reference/enforcement usage, not invoice truth or BYOK provider charges.
   * Requires the dedicated llm_token_gateway.usage.read V2 action for combined spend
   * and guardrail reporting; existing spend.read and guardrail_events.read grants do
   * not grant this endpoint. All totals, UTC daily buckets, models and latest 20
   * guardrail events share one database snapshot. UTC half-open dates, at most 31
   * days. Zero-filled days; at most 1000 models (503 rather than truncation on
   * overflow/timeout). Known tokens sum independently known categories across latest
   * attempt evidence, including corrections; unknown spend is excluded and
   * unknown_requests/reserved_spend remain explicit. Guardrail counts count events,
   * not distinct requests. No raw spend events, prompts or secrets. This read-only
   * report creates no pagination snapshot and accepts no pagination parameters.
   *
   * @example
   * ```ts
   * const response =
   *   await client.llmTokenGateway.usage.retrieveSummary({
   *     end_date: '2019-12-27',
   *     start_date: '2019-12-27',
   *     token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  retrieveSummary(
    query: UsageRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveSummaryResponse> {
    return this._client.get('/llm_token_gateway/usage/summary', { query, ...options });
  }

  /**
   * Durable, replayable, content-free usage export for customer pipelines. Requires
   * the dedicated llm_token_gateway.usage_export.read V2 action; spend.read and
   * usage.read do not grant it. Records are inference.request (one per immutable
   * ledger revision; a correction adds a new id with supersedes, keep the highest
   * revision per request_id) and guardrail.evaluation (one per guardrail event,
   * including blocked prompts with no inference record; correlate on request_id).
   * Delivery is at least once in commit order: deduplicate on id. Records appear
   * after settlement and after every older database transaction has finished
   * (meta.horizon_lag_seconds); keep polling with next_cursor, which is always
   * returned and is reusable after has_more is false. After a logical database
   * restore, restart from start_time and deduplicate on id; a cursor from before it
   * may return 409 cursor_expired (no Retry-After). Retention promise 30 days. No
   * prompts, responses, provider credentials, supplier or customer rates. Gateway
   * reference/enforcement usage, not invoice truth or BYOK provider charges.
   *
   * @example
   * ```ts
   * const response =
   *   await client.llmTokenGateway.usage.retrieveExport();
   * ```
   */
  retrieveExport(
    query: UsageRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveExportResponse> {
    return this._client.get('/llm_token_gateway/usage/export', { query, ...options });
  }
}

export interface GuardrailFinding {
  action: 'flag' | 'block';

  code: string;

  count: number;

  detector: 'secrets' | 'dlp' | 'safety';
}

export interface UsageRetrieveExportResponse {
  data: Array<
    | UsageRetrieveExportResponse.UsageExportInferenceRequest
    | UsageRetrieveExportResponse.UsageExportGuardrailEvaluation
  >;

  meta: UsageRetrieveExportResponse.Meta;
}

export namespace UsageRetrieveExportResponse {
  export interface UsageExportInferenceRequest {
    /**
     * Deterministic: req\_{request_id}\_r{revision}. Deduplicate on id.
     */
    id: string;

    attempts: number;

    biller: 'telnyx' | 'provider' | 'none';

    cache_hit: boolean;

    configuration_version: number;

    /**
     * USD decimal string with exactly 6 places, 0 to 1000000000.000000 (the Money
     * bound); enforcement basis, not invoice truth.
     */
    cost: string | null;

    end_user_id: string | null;

    input_tokens: number | null;

    /**
     * Customer request tags captured at admission; {} when untagged.
     */
    metadata: { [key: string]: string | number | boolean };

    model: string;

    output_tokens: number | null;

    protocol: 'openai' | 'anthropic';

    provider: string;

    provider_key_id: string | null;

    provider_model: string;

    rate_version: string;

    request_id: string;

    revision: number;

    route_mode: 'managed' | 'byok' | 'cache';

    schema_version: 1;

    status: 'succeeded' | 'failed' | 'partial' | 'unknown';

    stream: boolean;

    /**
     * Previous revision id; keep the highest revision per request_id.
     */
    supersedes: string | null;

    timings: UsageExportInferenceRequest.Timings;

    token_group_id: string;

    token_key_id: string;

    token_user_id: string | null;

    type: 'inference.request';

    usage_source: 'provider' | 'gateway_tokenizer' | 'operator' | null;

    usage_status: 'known' | 'unknown' | 'reconciled';
  }

  export namespace UsageExportInferenceRequest {
    export interface Timings {
      admitted_at: string;

      completed_at: string | null;

      first_attempt_at: string | null;

      /**
       * completed_at - admitted_at as recorded by the ledger; not time to first token.
       */
      gateway_duration_ms: number | null;

      settled_at: string;
    }
  }

  export interface UsageExportGuardrailEvaluation {
    id: string;

    created_at: string;

    end_user_id: string | null;

    evaluation_input_tokens: number | null;

    evaluation_output_tokens: number | null;

    findings: Array<UsageAPI.GuardrailFinding>;

    /**
     * Customer request tags from the x-ltg-metadata header: up to 5 entries. Keys are
     * case-sensitive; keys starting with ltg*, telnyx*, litellm* or cf* (any case) are
     * reserved. Values are strings (1-256 characters, no control or format
     * characters), integers within +/-9007199254740991, or booleans; floats, null,
     * objects and arrays are rejected. Values that look like credentials are rejected.
     * Tags are attribution only: never forwarded upstream, never part of the response
     * cache key, never used for budgets or routing. An untagged request reports {}.
     */
    metadata: { [key: string]: string | number | boolean };

    model: string;

    outcome: 'evaluated' | 'flagged' | 'blocked' | 'unevaluated';

    request_id: string;

    schema_version: 1;

    stage: 'prompt' | 'response';

    token_group_id: string;

    token_key_id: string;

    token_user_id: string | null;

    type: 'guardrail.evaluation';
  }

  export interface Meta {
    has_more: boolean;

    horizon_lag_seconds: number;

    next_cursor: string;
  }
}

export interface UsageRetrieveSummaryResponse {
  data: UsageRetrieveSummaryResponse.Data;

  meta: UsageRetrieveSummaryResponse.Meta;
}

export namespace UsageRetrieveSummaryResponse {
  export interface Data {
    by_day: Array<Data.ByDay>;

    by_model: Array<Data.ByModel>;

    guardrails: Data.Guardrails;

    totals: Data.Totals;
  }

  export namespace Data {
    export interface ByDay {
      cache_hits: number;

      date: string;

      failed_requests: number;

      input_tokens: number;

      output_tokens: number;

      partial_requests: number;

      requests: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      reserved_spend: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      spend: number;

      succeeded_requests: number;

      unknown_requests: number;
    }

    export interface ByModel {
      cache_hits: number;

      failed_requests: number;

      input_tokens: number;

      model: string;

      output_tokens: number;

      partial_requests: number;

      requests: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      reserved_spend: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      spend: number;

      succeeded_requests: number;

      unknown_requests: number;
    }

    export interface Guardrails {
      blocked_events: number;

      flagged_events: number;

      recent_events: Array<Guardrails.RecentEvent>;
    }

    export namespace Guardrails {
      export interface RecentEvent {
        id: string;

        created_at: string;

        end_user_id: string | null;

        evaluation_input_tokens: number | null;

        evaluation_output_tokens: number | null;

        findings: Array<UsageAPI.GuardrailFinding>;

        /**
         * Customer request tags from the x-ltg-metadata header: up to 5 entries. Keys are
         * case-sensitive; keys starting with ltg*, telnyx*, litellm* or cf* (any case) are
         * reserved. Values are strings (1-256 characters, no control or format
         * characters), integers within +/-9007199254740991, or booleans; floats, null,
         * objects and arrays are rejected. Values that look like credentials are rejected.
         * Tags are attribution only: never forwarded upstream, never part of the response
         * cache key, never used for budgets or routing. An untagged request reports {}.
         */
        metadata: { [key: string]: string | number | boolean };

        model: string;

        outcome: 'evaluated' | 'flagged' | 'blocked' | 'unevaluated';

        record_type: 'guardrail_event';

        request_id: string;

        stage: 'prompt' | 'response';

        token_group_id: string;

        token_key_id: string;

        token_user_id: string | null;
      }
    }

    export interface Totals {
      cache_hits: number;

      failed_requests: number;

      input_tokens: number;

      output_tokens: number;

      partial_requests: number;

      requests: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      reserved_spend: number;

      /**
       * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
       * never binary float accounting.
       */
      spend: number;

      succeeded_requests: number;

      unknown_requests: number;
    }
  }

  export interface Meta {
    end_date: string;

    /**
     * The metadata[<key>] filters applied to every section; {} when unfiltered.
     */
    metadata: { [key: string]: string };

    start_date: string;

    token_group_id: string;
  }
}

export interface UsageRetrieveSummaryParams {
  end_date: string;

  start_date: string;

  token_group_id: string;

  /**
   * Request tag filters as metadata[<key>]=<value>, at most 5, combined with AND. A
   * value matches the tag's text form exactly (booleans as true/false, integers in
   * decimal), so metadata[flag]=true matches both boolean true and the string
   * "true". Keys are case-sensitive; reserved-prefix keys are rejected. Unindexed:
   * bounded by the account, the date range and the report timeout.
   */
  metadata?: { [key: string]: string };
}

export interface UsageRetrieveExportParams {
  /**
   * Opaque next_cursor from a previous page; not combinable with start_time. Bound
   * to the requested types; the account always comes from the credential.
   */
  cursor?: string;

  limit?: number;

  /**
   * First page only: RFC 3339 with offset, at most 30 days ago and not in the
   * future; default now - 24h.
   */
  start_time?: string;

  /**
   * Comma-separated subset of inference.request,guardrail.evaluation; default both.
   */
  types?: string;
}

export declare namespace Usage {
  export {
    type GuardrailFinding as GuardrailFinding,
    type UsageRetrieveExportResponse as UsageRetrieveExportResponse,
    type UsageRetrieveSummaryResponse as UsageRetrieveSummaryResponse,
    type UsageRetrieveSummaryParams as UsageRetrieveSummaryParams,
    type UsageRetrieveExportParams as UsageRetrieveExportParams,
  };
}
