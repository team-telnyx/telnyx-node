// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SpendAPI from './spend';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage and report AI Gateway usage.
 */
export class Spend extends APIResource {
  /**
   * Return request-level usage history for the authenticated account. Supply both
   * UTC dates or neither; omitting both returns the previous full UTC day. Dates use
   * a half-open range [start_date, end_date) of at most 31 days. Cost reflects
   * budget reference rates, not invoice charges. Unknown spend is excluded and
   * reported separately. The report snapshot supports at most 10,000 matching
   * requests, independently of page size. Exceeding this bound returns HTTP 503
   * without partial results. Narrow the date range or resource filters before
   * retrying. A failed report must not be interpreted as zero usage. Request tags
   * can filter either report and metadata:<key> can group the summary.
   *
   * @example
   * ```ts
   * const response =
   *   await client.llmTokenGateway.spend.retrieveEvents();
   * ```
   */
  retrieveEvents(
    query: SpendRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpendRetrieveEventsResponse> {
    return this._client.get('/llm_token_gateway/spend/events', { query, ...options });
  }

  /**
   * Return request counts, token counts and reference spend grouped by one
   * attribution dimension. Both UTC dates and group_by are required. Dates use a
   * half-open range [start_date, end_date) of at most 31 days. Cost reflects budget
   * reference rates, not invoice charges. Unknown spend is excluded and reported
   * separately. The report snapshot supports at most 10,000 matching requests,
   * independently of page size. Exceeding this bound returns HTTP 503 without
   * partial results. Narrow the date range or resource filters before retrying. A
   * failed report must not be interpreted as zero usage. Request tags can filter
   * either report and metadata:<key> can group the summary.
   *
   * @example
   * ```ts
   * const response =
   *   await client.llmTokenGateway.spend.retrieveSummary({
   *     end_date: '2019-12-27',
   *     group_by: 'token_group',
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  retrieveSummary(
    query: SpendRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SpendRetrieveSummaryResponse> {
    return this._client.get('/llm_token_gateway/spend/summary', { query, ...options });
  }
}

/**
 * Group by one request tag key. Keys starting with ltg*, telnyx*, litellm* or cf*
 * (any case) are rejected.
 */
export type SpendGroupBy = 'token_group' | 'token_user' | 'token_key' | 'end_user' | (string & {});

export interface SpendRetrieveEventsResponse {
  data: Array<SpendRetrieveEventsResponse.Data>;

  meta: SpendRetrieveEventsResponse.Meta;
}

export namespace SpendRetrieveEventsResponse {
  export interface Data {
    id: string;

    /**
     * Provider attempts begun for the request (fallbacks included); 0 for a cache hit.
     * Token and cost totals sum every attempt.
     */
    attempts: number;

    biller: 'telnyx' | 'provider' | 'none';

    cache_hit: boolean;

    configuration_version: number;

    /**
     * USD, decimal precision at most 6 places; parse exactly to integer micro-USD,
     * never binary float accounting.
     */
    cost: number | null;

    created_at: string;

    end_user_id: string | null;

    input_tokens: number | null;

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

    /**
     * Public alias that served (the last attempt); rate_version, biller and
     * provider_key_id follow it.
     */
    model: string;

    output_tokens: number | null;

    provider_key_id: string | null;

    rate_version: string;

    request_id: string;

    /**
     * Public alias the caller requested; differs from model only when a group fallback
     * served.
     */
    requested_model: string;

    reservation_micro_usd: number;

    status: 'succeeded' | 'failed' | 'partial' | 'unknown';

    token_group_id: string;

    token_key_id: string;

    token_user_id: string | null;

    usage_status: 'known' | 'unknown' | 'reconciled';
  }

  export interface Meta {
    has_more: boolean;

    page_number: number;

    page_size: number;

    snapshot: string;
  }
}

export interface SpendRetrieveSummaryResponse {
  data: Array<SpendRetrieveSummaryResponse.Data>;

  meta: SpendRetrieveSummaryResponse.Meta;
}

export namespace SpendRetrieveSummaryResponse {
  export interface Data {
    dimension_id: string | null;

    input_tokens: number;

    name: string | null;

    output_tokens: number;

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

    unknown_requests: number;

    end_user_id?: string | null;

    /**
     * Present only for group_by=metadata:<key>: the tag key. dimension_id is then the
     * tag value in text form (booleans as true/false, integers in decimal), or null
     * for requests without the key; name is null.
     */
    metadata_key?: string;

    token_group_id?: string | null;

    token_key_id?: string | null;

    token_user_id?: string | null;
  }

  export interface Meta {
    end_date: string;

    /**
     * Group by one request tag key. Keys starting with ltg*, telnyx*, litellm* or cf*
     * (any case) are rejected.
     */
    group_by: SpendAPI.SpendGroupBy;

    has_more: boolean;

    page_number: number;

    page_size: number;

    snapshot: string;

    start_date: string;
  }
}

export interface SpendRetrieveEventsParams {
  end_date?: string;

  end_user_id?: string;

  /**
   * Request tag filters as metadata[<key>]=<value>, at most 5, combined with AND. A
   * value matches the tag's text form exactly (booleans as true/false, integers in
   * decimal), so metadata[flag]=true matches both boolean true and the string
   * "true". Keys are case-sensitive; reserved-prefix keys are rejected. Unindexed:
   * bounded by the account, the date range and the report timeout.
   */
  metadata?: { [key: string]: string };

  'page[number]'?: number;

  'page[size]'?: number;

  /**
   * Required after page 1; account/filter-bound 15-minute stable snapshot;
   * expired/mismatch 409.
   */
  'page[snapshot]'?: string;

  start_date?: string;

  token_group_id?: string;

  token_key_id?: string;

  token_user_id?: string;
}

export interface SpendRetrieveSummaryParams {
  end_date: string;

  /**
   * A scope, or metadata:<key> to group by one request tag's text-form value;
   * requests without the key form one group with a null dimension_id.
   */
  group_by: SpendGroupBy;

  start_date: string;

  end_user_id?: string;

  /**
   * Request tag filters as metadata[<key>]=<value>, at most 5, combined with AND. A
   * value matches the tag's text form exactly (booleans as true/false, integers in
   * decimal), so metadata[flag]=true matches both boolean true and the string
   * "true". Keys are case-sensitive; reserved-prefix keys are rejected. Unindexed:
   * bounded by the account, the date range and the report timeout.
   */
  metadata?: { [key: string]: string };

  'page[number]'?: number;

  'page[size]'?: number;

  /**
   * Required after page 1; account/filter-bound 15-minute stable snapshot;
   * expired/mismatch 409.
   */
  'page[snapshot]'?: string;

  token_group_id?: string;

  token_key_id?: string;

  token_user_id?: string;
}

export declare namespace Spend {
  export {
    type SpendGroupBy as SpendGroupBy,
    type SpendRetrieveEventsResponse as SpendRetrieveEventsResponse,
    type SpendRetrieveSummaryResponse as SpendRetrieveSummaryResponse,
    type SpendRetrieveEventsParams as SpendRetrieveEventsParams,
    type SpendRetrieveSummaryParams as SpendRetrieveSummaryParams,
  };
}
