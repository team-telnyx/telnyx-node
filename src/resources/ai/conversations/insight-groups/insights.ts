// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Assign an insight to a group
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.conversations.insightGroups.insights.assign(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  assign(insightID: string, params: InsightAssignParams, options?: RequestOptions): APIPromise<unknown> {
    const { group_id } = params;
    return this._client.post(
      path`/ai/conversations/insight-groups/${group_id}/insights/${insightID}/assign`,
      options,
    );
  }

  /**
   * Remove an insight from a group
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.conversations.insightGroups.insights.deleteUnassign(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  deleteUnassign(
    insightID: string,
    params: InsightDeleteUnassignParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { group_id } = params;
    return this._client.delete(
      path`/ai/conversations/insight-groups/${group_id}/insights/${insightID}/unassign`,
      options,
    );
  }
}

export type InsightAssignResponse = unknown;

export type InsightDeleteUnassignResponse = unknown;

export interface InsightAssignParams {
  /**
   * The ID of the insight group
   */
  group_id: string;
}

export interface InsightDeleteUnassignParams {
  /**
   * The ID of the insight group
   */
  group_id: string;
}

export declare namespace Insights {
  export {
    type InsightAssignResponse as InsightAssignResponse,
    type InsightDeleteUnassignResponse as InsightDeleteUnassignResponse,
    type InsightAssignParams as InsightAssignParams,
    type InsightDeleteUnassignParams as InsightDeleteUnassignParams,
  };
}
