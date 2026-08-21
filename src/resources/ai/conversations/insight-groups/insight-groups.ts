// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InsightsAPI from '../insights';
import * as InsightGroupsInsightsAPI from './insights';
import { InsightAssignParams, InsightDeleteUnassignParams, Insights } from './insights';
import { APIPromise } from '../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage historical AI assistant conversations
 */
export class InsightGroups extends APIResource {
  insights: InsightGroupsInsightsAPI.Insights = new InsightGroupsInsightsAPI.Insights(this._client);

  /**
   * Returns a paginated list of your insight template groups. Groups organize
   * related insight templates that are applied together when analyzing
   * conversations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const insightTemplateGroup of client.ai.conversations.insightGroups.retrieveInsightGroups()) {
   *   // ...
   * }
   * ```
   */
  retrieveInsightGroups(
    query: InsightGroupRetrieveInsightGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InsightTemplateGroupsDefaultFlatPagination, InsightTemplateGroup> {
    return this._client.getAPIList(
      '/ai/conversations/insight-groups',
      DefaultFlatPagination<InsightTemplateGroup>,
      { query, ...options },
    );
  }

  /**
   * Creates a new insight template group for organizing related insight templates,
   * and returns the created group.
   *
   * @example
   * ```ts
   * const insightTemplateGroupDetail =
   *   await client.ai.conversations.insightGroups.insightGroups(
   *     { name: 'Name', description: 'Description' },
   *   );
   * ```
   */
  insightGroups(
    params: InsightGroupInsightGroupsParams,
    options?: RequestOptions,
  ): APIPromise<InsightTemplateGroupDetail> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ai/conversations/insight-groups', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes the specified insight template group by its ID.
   *
   * @example
   * ```ts
   * await client.ai.conversations.insightGroups.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/conversations/insight-groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a single insight template group, including the insight
   * templates assigned to it.
   *
   * @example
   * ```ts
   * const insightTemplateGroupDetail =
   *   await client.ai.conversations.insightGroups.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<InsightTemplateGroupDetail> {
    return this._client.get(path`/ai/conversations/insight-groups/${groupID}`, options);
  }

  /**
   * Updates the specified insight template group and returns the updated group.
   *
   * @example
   * ```ts
   * const insightTemplateGroupDetail =
   *   await client.ai.conversations.insightGroups.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       description: 'Description',
   *       name: 'Name',
   *       webhook: 'Webhook',
   *     },
   *   );
   * ```
   */
  update(
    groupID: string,
    body: InsightGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InsightTemplateGroupDetail> {
    return this._client.put(path`/ai/conversations/insight-groups/${groupID}`, { body, ...options });
  }
}

export type InsightTemplateGroupsDefaultFlatPagination = DefaultFlatPagination<InsightTemplateGroup>;

export interface InsightTemplateGroup {
  id: string;

  created_at: string;

  name: string;

  description?: string;

  insights?: Array<InsightsAPI.InsightTemplate>;

  webhook?: string;
}

export interface InsightTemplateGroupDetail {
  data: InsightTemplateGroup;
}

export interface InsightGroupRetrieveInsightGroupsParams extends DefaultFlatPaginationParams {}

export interface InsightGroupInsightGroupsParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string;

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

export interface InsightGroupUpdateParams {
  description?: string;

  name?: string;

  webhook?: string;
}

InsightGroups.Insights = Insights;

export declare namespace InsightGroups {
  export {
    type InsightTemplateGroup as InsightTemplateGroup,
    type InsightTemplateGroupDetail as InsightTemplateGroupDetail,
    type InsightTemplateGroupsDefaultFlatPagination as InsightTemplateGroupsDefaultFlatPagination,
    type InsightGroupRetrieveInsightGroupsParams as InsightGroupRetrieveInsightGroupsParams,
    type InsightGroupInsightGroupsParams as InsightGroupInsightGroupsParams,
    type InsightGroupUpdateParams as InsightGroupUpdateParams,
  };

  export {
    Insights as Insights,
    type InsightAssignParams as InsightAssignParams,
    type InsightDeleteUnassignParams as InsightDeleteUnassignParams,
  };
}
