// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class Filters extends APIResource {
  /**
   * Removes entries from either the allowlist or blocklist. The operation is
   * idempotent: removing an entry that is not present still returns the current
   * filter lists.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailInboxes.filters.deleteAll(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       entries: ['former-partner@example.com'],
   *       type: 'allowlist',
   *     },
   *   );
   * ```
   */
  deleteAll(
    inboxID: string,
    body: FilterDeleteAllParams,
    options?: RequestOptions,
  ): APIPromise<FilterDeleteAllResponse> {
    return this._client.delete(path`/email_inboxes/${inboxID}/filters`, { body, ...options });
  }

  /**
   * Returns the inbox's sender allowlist and blocklist. Entries are normalized to
   * lowercase. A blocklist match takes precedence over an allowlist match; when both
   * lists are empty, all senders are accepted.
   *
   * @example
   * ```ts
   * const filters = await client.emailInboxes.filters.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(inboxID: string, options?: RequestOptions): APIPromise<FilterListResponse> {
    return this._client.get(path`/email_inboxes/${inboxID}/filters`, options);
  }

  /**
   * Adds entries to either the allowlist or blocklist. The operation is an
   * idempotent set union: entries already present remain unchanged.
   *
   * @example
   * ```ts
   * const response = await client.emailInboxes.filters.add(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { entries: ['@spam.example'], type: 'blocklist' },
   * );
   * ```
   */
  add(inboxID: string, body: FilterAddParams, options?: RequestOptions): APIPromise<FilterAddResponse> {
    return this._client.post(path`/email_inboxes/${inboxID}/filters`, { body, ...options });
  }

  /**
   * Replaces both sender filter lists atomically. Omitting either list clears that
   * list. Use `POST` or `DELETE` for incremental changes.
   *
   * @example
   * ```ts
   * const response = await client.emailInboxes.filters.replace(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     allowlist: ['trusted@example.com', '@partner.example'],
   *     blocklist: ['@spam.example'],
   *   },
   * );
   * ```
   */
  replace(
    inboxID: string,
    body: FilterReplaceParams,
    options?: RequestOptions,
  ): APIPromise<FilterReplaceResponse> {
    return this._client.put(path`/email_inboxes/${inboxID}/filters`, { body, ...options });
  }
}

export interface InboxFilters {
  allowlist: Array<string>;

  blocklist: Array<string>;

  record_type: 'email_inbox_filters';
}

export interface MutateInboxFiltersRequest {
  entries: Array<string>;

  /**
   * The list to change.
   */
  type: 'allowlist' | 'blocklist';
}

export interface FilterListResponse {
  data: InboxFilters;
}

export interface FilterAddResponse {
  data: InboxFilters;
}

export interface FilterDeleteAllResponse {
  data: InboxFilters;
}

export interface FilterReplaceResponse {
  data: InboxFilters;
}

export interface FilterDeleteAllParams {
  entries: Array<string>;

  /**
   * The list to change.
   */
  type: 'allowlist' | 'blocklist';
}

export interface FilterAddParams {
  entries: Array<string>;

  /**
   * The list to change.
   */
  type: 'allowlist' | 'blocklist';
}

export interface FilterReplaceParams {
  allowlist?: Array<string>;

  blocklist?: Array<string>;
}

export declare namespace Filters {
  export {
    type InboxFilters as InboxFilters,
    type MutateInboxFiltersRequest as MutateInboxFiltersRequest,
    type FilterListResponse as FilterListResponse,
    type FilterAddResponse as FilterAddResponse,
    type FilterDeleteAllResponse as FilterDeleteAllResponse,
    type FilterReplaceResponse as FilterReplaceResponse,
    type FilterDeleteAllParams as FilterDeleteAllParams,
    type FilterAddParams as FilterAddParams,
    type FilterReplaceParams as FilterReplaceParams,
  };
}
