// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailBlocksAPI from '../email-blocks/email-blocks';
import { EmailBlocksDefaultFlatPagination } from '../email-blocks/email-blocks';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Named groups and group-scoped suppressions.
 */
export class Suppressions extends APIResource {
  /**
   * Account + group scoped. Offset pagination only (`page[number]` default 1,
   * `page[size]` default 25, max 100). No `sort`/`filter`/ cursor — ordering fixed
   * `desc created_at, desc id`. Uses the shared `QueryParser.parse_offset/1` — a
   * malformed `page` returns `400` (code `10015`), consistent with
   * `GET /v2/email_blocks`. `meta` includes `total_pages`. Rows reuse the standard
   * suppression shape (`group_id` set to this group).
   */
  list(
    id: string,
    query: SuppressionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailBlocksDefaultFlatPagination, EmailBlocksAPI.EmailBlock> {
    return this._client.getAPIList(
      path`/email_unsubscribe_groups/${id}/suppressions`,
      DefaultFlatPagination<EmailBlocksAPI.EmailBlock>,
      { query, ...options },
    );
  }

  /**
   * Creates a suppression with `reason: unsubscribe`, `source: manual`,
   * `group_id: <this group>`. All other body fields are ignored; only `to` is read.
   * Idempotent (same dedupe key → `200`, no new event).
   */
  create(
    id: string,
    body: SuppressionCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmailBlocksAPI.EmailBlockResponse> {
    return this._client.post(path`/email_unsubscribe_groups/${id}/suppressions`, { body, ...options });
  }

  /**
   * Soft-deletes all active blocks for (account, group, normalized email) — one
   * `removed` audit event per block (`actor: manual`). The `email` path segment is
   * normalized (trim + lower-case) before matching. Idempotent on already-removed
   * rows (returns `404` since they're no longer `active`).
   *
   * Two distinct `404` cases: a missing/cross-account **group** returns
   * `10001 "The requested unsubscribe group was not found"`; a group that exists but
   * has **no active suppression** for that email returns
   * `10001 "The requested group suppression was not found"`.
   */
  delete(email: string, params: SuppressionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/email_unsubscribe_groups/${id}/suppressions/${email}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SuppressionListParams extends DefaultFlatPaginationParams {}

export interface SuppressionCreateParams {
  to: string;
}

export interface SuppressionDeleteParams {
  /**
   * Resource UUID. Malformed UUIDs are treated as not-found (not 400).
   */
  id: string;
}

export declare namespace Suppressions {
  export {
    type SuppressionListParams as SuppressionListParams,
    type SuppressionCreateParams as SuppressionCreateParams,
    type SuppressionDeleteParams as SuppressionDeleteParams,
  };
}

export { type EmailBlocksDefaultFlatPagination };
