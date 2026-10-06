// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage and report AI Gateway traffic.
 */
export class Usage extends APIResource {
  /**
   * Return complete usage totals, UTC daily and model breakdowns, and guardrail
   * event counts for one token group owned by the authenticated account. Requires
   * the llm_token_gateway.usage.read permission; spend and guardrail read
   * permissions do not grant this combined report. All sections share one database
   * snapshot and include the latest usage corrections. Dates use an inclusive start
   * and exclusive end spanning 1 to 31 days. Only token_group_id, start_date and
   * end_date are accepted; pagination, group_by and other filters are rejected.
   * Spend is reference/enforcement USD, not invoice truth or BYOK provider charges.
   * Unknown cost is excluded from spend and reported through unknown_requests and
   * reserved_spend. Daily rows include zero-activity days. Model rows are ordered by
   * request count descending, then model name, and are limited to 1,000. Guardrail
   * counts count events, not distinct requests; recent_events contains at most 20
   * newest events. A report that exceeds model or query limits returns 503 rather
   * than a truncated success.
   */
  retrieveSummary(
    query: UsageRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveSummaryResponse> {
    return this._client.get('/llm_token_gateway/usage/summary', { query, ...options });
  }
}

export interface UsageRetrieveSummaryResponse {
  data: UsageRetrieveSummaryResponse.Data;

  meta: UsageRetrieveSummaryResponse.Meta;
}

export namespace UsageRetrieveSummaryResponse {
  export interface Data {
    /**
     * One row per UTC day, including zero-activity days.
     */
    by_day: Array<Data.ByDay>;

    /**
     * One row per model, ordered by request count descending then model name.
     */
    by_model: Array<Data.ByModel>;

    /**
     * Complete guardrail event counts and bounded recent findings for the same group
     * and range.
     */
    guardrails: Data.Guardrails;

    /**
     * Metrics for all matching requests.
     */
    totals: Data.Totals;
  }

  export namespace Data {
    export interface ByDay {
      /**
       * Requests served from the gateway cache.
       */
      cache_hits: number;

      /**
       * UTC day.
       */
      date: string;

      /**
       * Requests classified as failed.
       */
      failed_requests: number;

      /**
       * Independently known input tokens across attempts, including corrected usage.
       */
      input_tokens: number;

      /**
       * Independently known output tokens across attempts, including corrected usage.
       */
      output_tokens: number;

      /**
       * Requests classified as partial after streaming began.
       */
      partial_requests: number;

      /**
       * Number of matching requests.
       */
      requests: number;

      /**
       * Unresolved budget reservations in USD.
       */
      reserved_spend: number;

      /**
       * Sum of known reference/enforcement cost in USD.
       */
      spend: number;

      /**
       * Requests classified as succeeded.
       */
      succeeded_requests: number;

      /**
       * Requests whose cost remains unresolved; unknown cost is excluded from spend.
       */
      unknown_requests: number;
    }

    export interface ByModel {
      /**
       * Requests served from the gateway cache.
       */
      cache_hits: number;

      /**
       * Requests classified as failed.
       */
      failed_requests: number;

      /**
       * Independently known input tokens across attempts, including corrected usage.
       */
      input_tokens: number;

      /**
       * Model identifier.
       */
      model: string;

      /**
       * Independently known output tokens across attempts, including corrected usage.
       */
      output_tokens: number;

      /**
       * Requests classified as partial after streaming began.
       */
      partial_requests: number;

      /**
       * Number of matching requests.
       */
      requests: number;

      /**
       * Unresolved budget reservations in USD.
       */
      reserved_spend: number;

      /**
       * Sum of known reference/enforcement cost in USD.
       */
      spend: number;

      /**
       * Requests classified as succeeded.
       */
      succeeded_requests: number;

      /**
       * Requests whose cost remains unresolved; unknown cost is excluded from spend.
       */
      unknown_requests: number;
    }

    /**
     * Complete guardrail event counts and bounded recent findings for the same group
     * and range.
     */
    export interface Guardrails {
      /**
       * Total blocked guardrail events, not distinct requests.
       */
      blocked_events: number;

      /**
       * Total flagged guardrail events, not distinct requests.
       */
      flagged_events: number;

      /**
       * Up to 20 newest privacy-safe guardrail events, ordered by creation time
       * descending and event ID.
       */
      recent_events: Array<Guardrails.RecentEvent>;
    }

    export namespace Guardrails {
      export interface RecentEvent {
        id: string;

        created_at: string;

        end_user_id: string | null;

        evaluation_input_tokens: number | null;

        evaluation_output_tokens: number | null;

        findings: Array<RecentEvent.Finding>;

        /**
         * Model identifier.
         */
        model: string;

        outcome: 'evaluated' | 'flagged' | 'blocked' | 'unevaluated';

        record_type: 'guardrail_event';

        request_id: string;

        stage: 'prompt' | 'response';

        token_group_id: string;

        token_key_id: string;

        token_user_id: string | null;
      }

      export namespace RecentEvent {
        export interface Finding {
          action: 'flag' | 'block';

          code: string;

          count: number;

          detector: 'secrets' | 'dlp' | 'safety';
        }
      }
    }

    /**
     * Metrics for all matching requests.
     */
    export interface Totals {
      /**
       * Requests served from the gateway cache.
       */
      cache_hits: number;

      /**
       * Requests classified as failed.
       */
      failed_requests: number;

      /**
       * Independently known input tokens across attempts, including corrected usage.
       */
      input_tokens: number;

      /**
       * Independently known output tokens across attempts, including corrected usage.
       */
      output_tokens: number;

      /**
       * Requests classified as partial after streaming began.
       */
      partial_requests: number;

      /**
       * Number of matching requests.
       */
      requests: number;

      /**
       * Unresolved budget reservations in USD.
       */
      reserved_spend: number;

      /**
       * Sum of known reference/enforcement cost in USD.
       */
      spend: number;

      /**
       * Requests classified as succeeded.
       */
      succeeded_requests: number;

      /**
       * Requests whose cost remains unresolved; unknown cost is excluded from spend.
       */
      unknown_requests: number;
    }
  }

  export interface Meta {
    end_date: string;

    start_date: string;

    token_group_id: string;
  }
}

export interface UsageRetrieveSummaryParams {
  /**
   * Exclusive UTC date in YYYY-MM-DD format. Must follow start_date by 1 to 31 days.
   */
  end_date: string;

  /**
   * Inclusive UTC date in YYYY-MM-DD format. Must precede end_date by 1 to 31 days.
   */
  start_date: string;

  /**
   * ID of a token group owned by the authenticated account.
   */
  token_group_id: string;
}

export declare namespace Usage {
  export {
    type UsageRetrieveSummaryResponse as UsageRetrieveSummaryResponse,
    type UsageRetrieveSummaryParams as UsageRetrieveSummaryParams,
  };
}
