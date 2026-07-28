// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImportAPI from './import';
import { EmailBlockImportResponse, Import, ImportCreateParams } from './import';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Recipient suppression records (`/v2/email_blocks`).
 */
export class EmailBlocks extends APIResource {
  import: ImportAPI.Import = new ImportAPI.Import(this._client);

  /**
   * Account-scoped list. Two mutually exclusive pagination modes:
   *
   * - **Offset**: `page[number]` (default 1) + `page[size]` (default 25, max 100).
   *   `meta` contains `total_pages`.
   * - **Cursor**: `page[after]` and/or `page[before]` (opaque `Base.url_encode64` of
   *   `{"created_at","id"}`). Cannot combine with `page[number]`; `after`+`before`
   *   together is an error. `meta` contains `next_cursor` / `previous_cursor`
   *   (omitted when their flag is false).
   *
   * Sort defaults to `-created_at` (desc); only `created_at` is sortable. A `--`
   * prefix is an error. `nil`/empty filter values are silently dropped.
   */
  list(
    query: EmailBlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailBlocksDefaultFlatPagination, EmailBlock> {
    return this._client.getAPIList('/email_blocks', DefaultFlatPagination<EmailBlock>, { query, ...options });
  }

  /**
   * Creates a suppression with `reason: manual_block` and `source: manual`.
   * Caller-supplied `reason` / `source` are **ignored**; `scope` is **derived**
   * server-side from `domain_id` / `from` and is never trusted. Idempotent: if a
   * matching row already exists (NULL-safe dedupe key: account_id, scope, to,
   * reason, domain_id, from), returns the existing record with `200` (no new audit
   * event).
   *
   * `bounce_category`, `dsn_code`, `meta`, and `group_id` are **not accepted** on
   * the public surface. Use the unsubscribe-group suppression endpoint or the
   * internal create surface for those.
   */
  create(body: EmailBlockCreateParams, options?: RequestOptions): APIPromise<EmailBlockResponse> {
    return this._client.post('/email_blocks', { body, ...options });
  }

  /**
   * Streams the account's suppressions as a chunked CSV (server-side cursor; never
   * materialized). Content-type `text/csv`, header
   * `Content-Disposition: attachment; filename="email_blocks_export.csv"`.
   *
   * Filters (`filter[reason]`, `filter[domain_id]`, `filter[created_after]`,
   * `filter[created_before]`) are the only params that affect output. `sort` and
   * `page[*]` are **parsed** (bad values still produce `400`) but **ignored** — rows
   * stream `ORDER BY created_at ASC, id ASC` with no pagination.
   *
   * CSV columns:
   * `id,to,from,reason,source,scope,status,domain_id, created_at,updated_at,expires_at,group_id`.
   * The CSV carries the `group_id` column so group-scoped suppressions' group link
   * survives the export (empty for account-scope rows).
   */
  retrieveExport(
    query: EmailBlockRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/email_blocks/export', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * Soft-deletes (status → `removed`; tombstone retained). A `removed` audit event
   * is appended unless the block was already `removed` (idempotent — returns the
   * existing row with `200` and no new event). Mutates `updated_at`.
   */
  delete(id: string, options?: RequestOptions): APIPromise<EmailBlockResponse> {
    return this._client.delete(path`/email_blocks/${id}`, options);
  }

  /**
   * Retrieve a suppression
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailBlockResponse> {
    return this._client.get(path`/email_blocks/${id}`, options);
  }

  /**
   * Offset pagination only (`page[number]` default 1, `page[size]` default **50**,
   * max 100). No `sort`, no `filter`, no cursor — ordering is fixed
   * `desc occurred_at, desc id`. Verifies the block belongs to the account first
   * (cross-account → 404).
   */
  retrieveEvents(
    id: string,
    query: EmailBlockRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailBlockRetrieveEventsResponse> {
    return this._client.get(path`/email_blocks/${id}/events`, { query, ...options });
  }
}

export type EmailBlocksDefaultFlatPagination = DefaultFlatPagination<EmailBlock>;

/**
 * Suppression record. Schema fields hidden by the view: `account_id`,
 * `bounce_category`, `dsn_code`, `meta`.
 */
export interface EmailBlock {
  id: string;

  created_at: string;

  reason: 'hard_bounce' | 'spam_complaint' | 'unsubscribe' | 'invalid' | 'manual_block';

  /**
   * View-only discriminator.
   */
  record_type: 'email_block';

  /**
   * Derived server-side from `domain_id`/`from`; never trusted from the caller.
   */
  scope: 'account' | 'domain' | 'address';

  source: 'feedback' | 'manual' | 'import' | 'system';

  status: 'active' | 'expired' | 'removed';

  /**
   * Normalized recipient. (schema: to_address)
   */
  to: string;

  updated_at: string;

  /**
   * `null` ⇒ account scope. Stored on the row; exposed here.
   */
  domain_id?: string | null;

  expires_at?: string | null;

  /**
   * `null` ⇒ not address-scope. (schema: from_address)
   */
  from?: string | null;

  /**
   * `null` ⇒ global; set ⇒ group-scoped opt-out.
   */
  group_id?: string | null;
}

export interface EmailBlockResponse {
  /**
   * Suppression record. Schema fields hidden by the view: `account_id`,
   * `bounce_category`, `dsn_code`, `meta`.
   */
  data: EmailBlock;
}

export interface OffsetMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface EmailBlockRetrieveEventsResponse {
  data: Array<EmailBlockRetrieveEventsResponse.Data>;

  meta: OffsetMeta;
}

export namespace EmailBlockRetrieveEventsResponse {
  export interface Data {
    id: string;

    /**
     * Free-text (`user_id`/`org_id`/`api_key`/`dev_bypass`/`system`/`manual`).
     */
    actor: string;

    event_type: 'created' | 'removed' | 'expired' | 'override_used';

    occurred_at: string;

    /**
     * Free-text snapshot of the block's reason at event time.
     */
    reason: string;

    /**
     * View-only.
     */
    record_type: 'email_block_event';

    /**
     * Free-text snapshot of the block's source at event time.
     */
    source: string;

    /**
     * `null` when the schema field is nil (the context usually sets it to `{}`).
     */
    meta?: { [key: string]: unknown } | null;
  }
}

/**
 * CSV with header row
 * `id,to,from,reason,source,scope,status,domain_id,created_at,updated_at,expires_at,group_id`.
 */
export type EmailBlockRetrieveExportResponse = string;

export interface EmailBlockListParams extends DefaultFlatPaginationParams {
  /**
   * `created_at > value` (ISO 8601).
   */
  'filter[created_after]'?: string;

  /**
   * `created_at < value` (ISO 8601).
   */
  'filter[created_before]'?: string;

  /**
   * Exact-match filter on domain_id (UUID).
   */
  'filter[domain_id]'?: string;

  /**
   * Exact-match filter on reason.
   */
  'filter[reason]'?: 'hard_bounce' | 'spam_complaint' | 'unsubscribe' | 'invalid' | 'manual_block';

  /**
   * Opaque cursor (`Base.url_encode64` of `{"created_at","id"}`). Cursor mode;
   * mutually exclusive with `page[number]` and `page[before]`.
   */
  'page[after]'?: string;

  /**
   * Opaque cursor (see `page[after]`). Mutually exclusive with `page[after]` and
   * `page[number]`.
   */
  'page[before]'?: string;

  /**
   * Sort field. Leading `-` = desc; only `created_at` is sortable. Default
   * `-created_at`. `--` is an error.
   */
  sort?: 'created_at' | '-created_at';
}

export interface EmailBlockCreateParams {
  /**
   * Recipient address (normalized: trim + lower-case).
   */
  to: string;

  /**
   * `null` ⇒ account scope.
   */
  domain_id?: string | null;

  expires_at?: string | null;

  /**
   * Sender address (normalized). `null` ⇒ account/domain scope.
   */
  from?: string | null;
}

export interface EmailBlockRetrieveExportParams {
  /**
   * `created_at > value` (ISO 8601).
   */
  'filter[created_after]'?: string;

  /**
   * `created_at < value` (ISO 8601).
   */
  'filter[created_before]'?: string;

  /**
   * Exact-match filter on domain_id (UUID).
   */
  'filter[domain_id]'?: string;

  /**
   * Exact-match filter on reason.
   */
  'filter[reason]'?: 'hard_bounce' | 'spam_complaint' | 'unsubscribe' | 'invalid' | 'manual_block';

  /**
   * Offset page number (≥1, default 1).
   */
  'page[number]'?: number;

  /**
   * Page size (1–100, default 25).
   */
  'page[size]'?: number;

  /**
   * Sort field. Leading `-` = desc; only `created_at` is sortable. Default
   * `-created_at`. `--` is an error.
   */
  sort?: 'created_at' | '-created_at';
}

export interface EmailBlockRetrieveEventsParams {
  /**
   * Offset page number (≥1, default 1).
   */
  'page[number]'?: number;

  /**
   * Page size (default 50, max 100).
   */
  'page[size]'?: number;
}

EmailBlocks.Import = Import;

export declare namespace EmailBlocks {
  export {
    type EmailBlock as EmailBlock,
    type EmailBlockResponse as EmailBlockResponse,
    type OffsetMeta as OffsetMeta,
    type EmailBlockRetrieveEventsResponse as EmailBlockRetrieveEventsResponse,
    type EmailBlockRetrieveExportResponse as EmailBlockRetrieveExportResponse,
    type EmailBlocksDefaultFlatPagination as EmailBlocksDefaultFlatPagination,
    type EmailBlockListParams as EmailBlockListParams,
    type EmailBlockCreateParams as EmailBlockCreateParams,
    type EmailBlockRetrieveExportParams as EmailBlockRetrieveExportParams,
    type EmailBlockRetrieveEventsParams as EmailBlockRetrieveEventsParams,
  };

  export {
    Import as Import,
    type EmailBlockImportResponse as EmailBlockImportResponse,
    type ImportCreateParams as ImportCreateParams,
  };
}
