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
   * Replaces both sender filter lists atomically. Omitting either list clears that
   * list. Use `POST` or `DELETE` for incremental changes.
   *
   * @example
   * ```ts
   * const filter = await client.emailInboxes.filters.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     allowlist: ['trusted@example.com', '@partner.example'],
   *     blocklist: ['@spam.example'],
   *   },
   * );
   * ```
   */
  create(
    inboxID: string,
    body: FilterCreateParams,
    options?: RequestOptions,
  ): APIPromise<FilterCreateResponse> {
    return this._client.put(path`/email_inboxes/${inboxID}/filters`, { body, ...options });
  }
}

export interface MutateInboxFiltersRequest {
  entries: Array<string>;

  /**
   * The list to change.
   */
  type: 'allowlist' | 'blocklist';
}

export interface FilterCreateResponse {
  data: FilterCreateResponse.Data;
}

export namespace FilterCreateResponse {
  export interface Data {
    allowlist: Array<string>;

    blocklist: Array<string>;

    record_type: 'email_inbox_filters';
  }
}

export interface FilterListResponse {
  data: FilterListResponse.Data;
}

export namespace FilterListResponse {
  export interface Data {
    allowlist: Array<string>;

    blocklist: Array<string>;

    record_type: 'email_inbox_filters';
  }
}

export interface FilterDeleteAllResponse {
  data: FilterDeleteAllResponse.Data;
}

export namespace FilterDeleteAllResponse {
  export interface Data {
    allowlist: Array<string>;

    blocklist: Array<string>;

    record_type: 'email_inbox_filters';
  }
}

export interface FilterDeleteAllParams {
  entries: Array<string>;

  /**
   * The list to change.
   */
  type: 'allowlist' | 'blocklist';
}

export interface FilterCreateParams {
  allowlist?: Array<string>;

  blocklist?: Array<string>;
}

export declare namespace Filters {
  export {
    type MutateInboxFiltersRequest as MutateInboxFiltersRequest,
    type FilterCreateResponse as FilterCreateResponse,
    type FilterListResponse as FilterListResponse,
    type FilterDeleteAllResponse as FilterDeleteAllResponse,
    type FilterDeleteAllParams as FilterDeleteAllParams,
    type FilterCreateParams as FilterCreateParams,
  };
}
