// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage historical AI assistant conversations
 */
export class Insights extends APIResource {
  /**
   * Returns a paginated list of your insight templates. Insight templates define
   * analyses that run over AI conversations to extract structured findings.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const insightTemplate of client.ai.conversations.insights.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InsightListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InsightTemplatesDefaultFlatPagination, InsightTemplate> {
    return this._client.getAPIList('/ai/conversations/insights', DefaultFlatPagination<InsightTemplate>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new insight template defining an analysis to run over conversations,
   * and returns the created template.
   *
   * @example
   * ```ts
   * const insightTemplateDetail =
   *   await client.ai.conversations.insights.create({
   *     instructions: 'Instructions',
   *     name: 'Name',
   *     json_schema: 'string',
   *   });
   * ```
   */
  create(params: InsightCreateParams, options?: RequestOptions): APIPromise<InsightTemplateDetail> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ai/conversations/insights', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes the specified insight template by its ID.
   *
   * @example
   * ```ts
   * await client.ai.conversations.insights.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(insightID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/conversations/insights/${insightID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a single insight template by its ID, including its
   * configuration.
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
   * Updates the specified insight template and returns the updated template.
   *
   * @example
   * ```ts
   * const insightTemplateDetail =
   *   await client.ai.conversations.insights.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       instructions: 'Instructions',
   *       json_schema: 'string',
   *       name: 'Name',
   *       webhook: 'Webhook',
   *     },
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
}

export type InsightTemplatesDefaultFlatPagination = DefaultFlatPagination<InsightTemplate>;

export interface InsightTemplate {
  id: string;

  created_at: string;

  instructions: string;

  insight_type?: 'custom' | 'default';

  /**
   * If specified, the output will follow the JSON schema.
   */
  json_schema?: string | { [key: string]: unknown };

  name?: string;

  webhook?: string;
}

export interface InsightTemplateDetail {
  data: InsightTemplate;
}

export interface InsightListParams extends DefaultFlatPaginationParams {}

export interface InsightCreateParams {
  /**
   * Body param
   */
  instructions: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param: If specified, the output will follow the JSON schema.
   */
  json_schema?: string | { [key: string]: unknown };

  /**
   * Body param
   */
  webhook?: string;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
}

export interface InsightUpdateParams {
  instructions?: string;

  json_schema?: string | { [key: string]: unknown };

  name?: string;

  webhook?: string;
}

export declare namespace Insights {
  export {
    type InsightTemplate as InsightTemplate,
    type InsightTemplateDetail as InsightTemplateDetail,
    type InsightTemplatesDefaultFlatPagination as InsightTemplatesDefaultFlatPagination,
    type InsightListParams as InsightListParams,
    type InsightCreateParams as InsightCreateParams,
    type InsightUpdateParams as InsightUpdateParams,
  };
}
