// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SuppressionsAPI from './suppressions';
import {
  SuppressionCreateParams,
  SuppressionDeleteParams,
  SuppressionListParams,
  Suppressions,
} from './suppressions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Named groups and group-scoped suppressions.
 */
export class EmailUnsubscribeGroups extends APIResource {
  suppressions: SuppressionsAPI.Suppressions = new SuppressionsAPI.Suppressions(this._client);

  /**
   * Offset pagination only (`page[number]` default 1, `page[size]` default 25, max
   * 100). No `sort`/`filter`/cursor — ordering fixed `desc created_at, desc id`.
   * Uses the shared `QueryParser.parse_offset/1` — a malformed `page` (e.g. flat
   * `?page=1` instead of `?page[number]=1`) returns `400` (code `10015`), consistent
   * with `GET /v2/email_blocks`. `meta` includes `total_pages`.
   */
  list(
    query: EmailUnsubscribeGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UnsubscribeGroupsDefaultFlatPagination, UnsubscribeGroup> {
    return this._client.getAPIList('/email_unsubscribe_groups', DefaultFlatPagination<UnsubscribeGroup>, {
      query,
      ...options,
    });
  }

  /**
   * Create an unsubscribe group
   */
  create(
    body: EmailUnsubscribeGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeGroupResponse> {
    return this._client.post('/email_unsubscribe_groups', { body, ...options });
  }

  /**
   * If the group has 0 active suppressions, hard-deletes the row. With `force=true`,
   * soft-deletes all active suppressions first (status → `removed`, `group_id`
   * cleared, `removed` audit event per block) in a single transaction, then
   * hard-deletes the group. Without `force` and active suppressions present → `409`.
   * Audit trail is preserved. `force` only accepts the string `"true"` or boolean
   * `true`; all other values are false.
   */
  delete(
    id: string,
    params: EmailUnsubscribeGroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { force } = params ?? {};
    return this._client.delete(path`/email_unsubscribe_groups/${id}`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve an unsubscribe group
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UnsubscribeGroupResponse> {
    return this._client.get(path`/email_unsubscribe_groups/${id}`, options);
  }

  /**
   * Partial update (only `name` / `description`). `PUT` is not routed.
   */
  update(
    id: string,
    body: EmailUnsubscribeGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UnsubscribeGroupResponse> {
    return this._client.patch(path`/email_unsubscribe_groups/${id}`, { body, ...options });
  }
}

export type UnsubscribeGroupsDefaultFlatPagination = DefaultFlatPagination<UnsubscribeGroup>;

/**
 * Group list `meta` (consistent with `GET /v2/email_blocks`).
 */
export interface GroupListMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface UnsubscribeGroup {
  id: string;

  created_at: string;

  /**
   * Always present (not omit-nullable); `null` when unset.
   */
  description: string | null;

  name: string;

  /**
   * View-only.
   */
  record_type: 'email_unsubscribe_group';

  updated_at: string;
}

export interface UnsubscribeGroupResponse {
  data: UnsubscribeGroup;
}

export interface EmailUnsubscribeGroupListParams extends DefaultFlatPaginationParams {}

export interface EmailUnsubscribeGroupCreateParams {
  name: string;

  description?: string | null;
}

export interface EmailUnsubscribeGroupDeleteParams {
  /**
   * Force-delete a group with active suppressions. Only `"true"` (string) or `true`
   * (bool) are truthy; all other values are false.
   */
  force?: 'true' | 'false' | boolean;
}

export interface EmailUnsubscribeGroupUpdateParams {
  description?: string | null;

  name?: string;
}

EmailUnsubscribeGroups.Suppressions = Suppressions;

export declare namespace EmailUnsubscribeGroups {
  export {
    type GroupListMeta as GroupListMeta,
    type UnsubscribeGroup as UnsubscribeGroup,
    type UnsubscribeGroupResponse as UnsubscribeGroupResponse,
    type UnsubscribeGroupsDefaultFlatPagination as UnsubscribeGroupsDefaultFlatPagination,
    type EmailUnsubscribeGroupListParams as EmailUnsubscribeGroupListParams,
    type EmailUnsubscribeGroupCreateParams as EmailUnsubscribeGroupCreateParams,
    type EmailUnsubscribeGroupDeleteParams as EmailUnsubscribeGroupDeleteParams,
    type EmailUnsubscribeGroupUpdateParams as EmailUnsubscribeGroupUpdateParams,
  };

  export {
    Suppressions as Suppressions,
    type SuppressionListParams as SuppressionListParams,
    type SuppressionCreateParams as SuppressionCreateParams,
    type SuppressionDeleteParams as SuppressionDeleteParams,
  };
}
