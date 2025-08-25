// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from '../assistants/tests/test-suites/runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Create a new insight
   *
   * @example
   * ```ts
   * const insightTemplateDetail =
   *   await client.ai.conversations.insights.create({
   *     instructions: 'instructions',
   *     name: 'name',
   *   });
   * ```
   */
  create(body: InsightCreateParams, options?: RequestOptions): APIPromise<InsightTemplateDetail> {
    return this._client.post('/ai/conversations/insights', { body, ...options });
  }

  /**
   * Get insight by ID
   *
   * @example
   * ```ts
   * const insightTemplateDetail =
   *   await client.ai.conversations.insights.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(insightID: string, options?: RequestOptions): APIPromise<InsightTemplateDetail> {
    return this._client.get(path`/ai/conversations/insights/${insightID}`, options);
  }

  /**
   * Update an insight template
   *
   * @example
   * ```ts
   * const insightTemplateDetail =
   *   await client.ai.conversations.insights.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    insightID: string,
    body: InsightUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InsightTemplateDetail> {
    return this._client.put(path`/ai/conversations/insights/${insightID}`, { body, ...options });
  }

  /**
   * Get all insights
   *
   * @example
   * ```ts
   * const insights =
   *   await client.ai.conversations.insights.list();
   * ```
   */
  list(
    query: InsightListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightListResponse> {
    return this._client.get('/ai/conversations/insights', { query, ...options });
  }

  /**
   * Delete insight by ID
   *
   * @example
   * ```ts
   * const insight =
   *   await client.ai.conversations.insights.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(insightID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/conversations/insights/${insightID}`, options);
  }
}

export interface InsightTemplate {
  id: string;

  created_at: string;

  instructions: string;

  insight_type?: 'custom' | 'default';

  /**
   * If specified, the output will follow the JSON schema.
   */
  json_schema?: string | unknown;

  name?: string;

  webhook?: string;
}

export interface InsightTemplateDetail {
  data: InsightTemplate;
}

export interface InsightListResponse {
  data: Array<InsightTemplate>;

  meta: RunsAPI.Meta;
}

export type InsightDeleteResponse = unknown;

export interface InsightCreateParams {
  instructions: string;

  name: string;

  /**
   * If specified, the output will follow the JSON schema.
   */
  json_schema?: string | unknown;

  webhook?: string;
}

export interface InsightUpdateParams {
  instructions?: string;

  json_schema?: string | unknown;

  name?: string;

  webhook?: string;
}

export interface InsightListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: InsightListParams.Page;
}

export namespace InsightListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * Page number (0-based)
     */
    number?: number;

    /**
     * Number of items per page
     */
    size?: number;
  }
}

export declare namespace Insights {
  export {
    type InsightTemplate as InsightTemplate,
    type InsightTemplateDetail as InsightTemplateDetail,
    type InsightListResponse as InsightListResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightCreateParams as InsightCreateParams,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightListParams as InsightListParams,
  };
}
