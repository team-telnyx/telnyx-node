// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage historical AI assistant conversations
 */
export class ConversationInsights extends APIResource {
  /**
   * Aggregate conversation insights by specified fields
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.conversations.conversationInsights.retrieveAggregates();
   * ```
   */
  retrieveAggregates(
    query: ConversationInsightRetrieveAggregatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationInsightRetrieveAggregatesResponse> {
    return this._client.get('/ai/conversations/conversation-insights/aggregates', { query, ...options });
  }
}

/**
 * Aggregated conversation insight counts grouped by the specified fields. Each
 * item in `data` contains the grouped field values and a `record_count` indicating
 * how many conversation insights match that combination.
 */
export interface ConversationInsightRetrieveAggregatesResponse {
  /**
   * Aggregation result rows. Each row contains the grouped field values and a
   * `record_count`.
   */
  data: Array<ConversationInsightRetrieveAggregatesResponse.Data>;
}

export namespace ConversationInsightRetrieveAggregatesResponse {
  /**
   * An aggregation row. Contains the grouped field values (keyed by the group_by
   * field names) and a `record_count` integer. For example, when grouping by
   * `score`, each row has a `score` value and a `record_count` of conversations with
   * that score. When also splitting by `metadata.assistant_version_id`, each row
   * includes both `score` and `metadata.assistant_version_id` plus their combined
   * `record_count`.
   */
  export interface Data {
    /**
     * Number of conversation insights that match this combination of grouped field
     * values.
     */
    record_count: number;

    [k: string]: unknown;
  }
}

export interface ConversationInsightRetrieveAggregatesParams {
  /**
   * Filter by creation datetime to scope the aggregation window. Supports range
   * operators (e.g., `created_at=gte.2025-01-01T00:00:00Z` for the start of the
   * range, `created_at=lt.2025-01-02T00:00:00Z` for the end). To build per-day time
   * series (as the portal does for the 'Insights Over Time' chart), issue one
   * request per day bounded by `created_at=gte.<day_start>` and
   * `created_at=lt.<next_day_start>`.
   */
  created_at?: string;

  /**
   * Fields to group by (can be comma-separated or multiple parameters). Prefix a
   * field with 'metadata.' (e.g. 'metadata.assistant_id') to group by the
   * conversation's metadata instead of the insight result.
   *
   * Common fields used for over-time charts:
   *
   * - `score` — Group by the insight's score value (e.g. for Agent Instruction
   *   Following, User Satisfaction).
   * - `metadata.assistant_id` — Group by the assistant that handled the
   *   conversation.
   * - `metadata.assistant_version_id` — Group by the assistant version, useful for
   *   comparing performance across versions in the portal's 'Insights Over Time'
   *   chart.
   * - `metadata.telnyx_conversation_channel` — Group by conversation channel
   *   (phone_call, web_chat, etc.).
   */
  group_by?: Array<string>;

  /**
   * Optional insight ID to filter conversation insights. Only insights matching this
   * ID will be included in the aggregation.
   */
  insight_id?: string;

  metadata?: ConversationInsightRetrieveAggregatesParams.Metadata;

  /**
   * Fields to include in the result (can be comma-separated or multiple parameters).
   * Supports the same 'metadata.<key>' prefix as group_by. Each returned row will
   * contain the grouped field values plus a `record_count` indicating how many
   * conversation insights match that combination.
   */
  show?: Array<string>;
}

export namespace ConversationInsightRetrieveAggregatesParams {
  export interface Metadata {
    /**
     * Filter by assistant ID (e.g., `metadata.assistant_id=eq.<assistant_id>`). When
     * provided, only conversation insights for the specified assistant are aggregated.
     * Used by the portal to scope the 'Insights Over Time' chart to a single
     * assistant.
     */
    assistant_id?: string;
  }
}

export declare namespace ConversationInsights {
  export {
    type ConversationInsightRetrieveAggregatesResponse as ConversationInsightRetrieveAggregatesResponse,
    type ConversationInsightRetrieveAggregatesParams as ConversationInsightRetrieveAggregatesParams,
  };
}
