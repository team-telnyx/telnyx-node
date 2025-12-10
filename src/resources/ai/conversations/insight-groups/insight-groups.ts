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

export class InsightGroups extends APIResource {
  insights: InsightGroupsInsightsAPI.Insights = new InsightGroupsInsightsAPI.Insights(this._client);

  /**
   * Get insight group by ID
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
   * Update an insight template group
   *
   * @example
   * ```ts
   * const insightTemplateGroupDetail =
   *   await client.ai.conversations.insightGroups.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  /**
   * Delete insight group by ID
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
   * Create a new insight group
   *
   * @example
   * ```ts
   * const insightTemplateGroupDetail =
   *   await client.ai.conversations.insightGroups.insightGroups(
   *     { name: 'name' },
   *   );
   * ```
   */
  insightGroups(
    body: InsightGroupInsightGroupsParams,
    options?: RequestOptions,
  ): APIPromise<InsightTemplateGroupDetail> {
    return this._client.post('/ai/conversations/insight-groups', { body, ...options });
  }

  /**
   * Get all insight groups
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

export interface InsightGroupUpdateParams {
  description?: string;

  name?: string;

  webhook?: string;
}

export interface InsightGroupInsightGroupsParams {
  name: string;

  description?: string;

  webhook?: string;
}

export interface InsightGroupRetrieveInsightGroupsParams extends DefaultFlatPaginationParams {}

InsightGroups.Insights = Insights;

export declare namespace InsightGroups {
  export {
    type InsightTemplateGroup as InsightTemplateGroup,
    type InsightTemplateGroupDetail as InsightTemplateGroupDetail,
    type InsightTemplateGroupsDefaultFlatPagination as InsightTemplateGroupsDefaultFlatPagination,
    type InsightGroupUpdateParams as InsightGroupUpdateParams,
    type InsightGroupInsightGroupsParams as InsightGroupInsightGroupsParams,
    type InsightGroupRetrieveInsightGroupsParams as InsightGroupRetrieveInsightGroupsParams,
  };

  export {
    Insights as Insights,
    type InsightAssignParams as InsightAssignParams,
    type InsightDeleteUnassignParams as InsightDeleteUnassignParams,
  };
}
