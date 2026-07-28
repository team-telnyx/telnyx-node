// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DraftsAPI from './drafts';
import {
  DraftCreateParams,
  DraftDeleteParams,
  DraftListParams,
  DraftListResponse,
  DraftRetrieveParams,
  DraftSendParams,
  DraftUpdateParams,
  Drafts,
  EmailAddress,
  EmailDraft,
  EmailDraftRequest,
  EmailDraftResponse,
  EmailMessage,
  EmailMessageResponse,
} from './drafts';
import * as FiltersAPI from './filters';
import {
  FilterCreateParams,
  FilterCreateResponse,
  FilterDeleteAllParams,
  FilterDeleteAllResponse,
  FilterListResponse,
  Filters,
  MutateInboxFiltersRequest,
} from './filters';
import * as MessagesAPI from './messages/messages';
import {
  MessageDraftsParams,
  MessageListParams,
  MessageListResponse,
  MessageUpdateParams,
  MessageUpdateResponse,
  Messages,
} from './messages/messages';
import * as ThreadsAPI from './threads/threads';
import {
  EmailPaginationMeta,
  InboundEmailAddress,
  InboundThread,
  InboundThreadDetail,
  InboundThreadListResponse,
  ThreadListParams,
  ThreadMessage,
  ThreadRetrieveParams,
  ThreadRetrieveResponse,
  Threads,
} from './threads/threads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class EmailInboxes extends APIResource {
  drafts: DraftsAPI.Drafts = new DraftsAPI.Drafts(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);

  /**
   * Lists the account's non-deleted inboxes newest first using stable cursor
   * pagination.
   *
   * @example
   * ```ts
   * const emailInboxes = await client.emailInboxes.list();
   * ```
   */
  list(
    query: EmailInboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailInboxListResponse> {
    return this._client.get('/email_inboxes', { query, ...options });
  }

  /**
   * Creates an inbox on an inbound-enabled domain. When `domain_id` is omitted,
   * Telnyx allocates the account's shared inbound subdomain so the inbox is
   * immediately usable without customer DNS setup. When `username` is omitted, a
   * unique username is generated.
   *
   * @example
   * ```ts
   * const emailInboxResponse =
   *   await client.emailInboxes.create();
   * ```
   */
  create(
    body: EmailInboxCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailInboxResponse> {
    return this._client.post('/email_inboxes', { body, ...options });
  }

  /**
   * Soft-deletes an account-scoped inbox. Its address remains reserved and the inbox
   * is no longer returned by list or get operations.
   *
   * @example
   * ```ts
   * await client.emailInboxes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/email_inboxes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns an account-scoped, non-deleted inbox. Missing and foreign inboxes are
   * indistinguishable.
   *
   * @example
   * ```ts
   * const emailInboxResponse =
   *   await client.emailInboxes.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailInboxResponse> {
    return this._client.get(path`/email_inboxes/${id}`, options);
  }
}

export interface EmailInbox {
  id: string;

  address: string;

  created_at: string;

  /**
   * Domain name used by the inbox address.
   */
  domain: string;

  domain_id: string;

  record_type: 'email_inbox';

  settings: { [key: string]: unknown };

  status: 'active' | 'paused';

  updated_at: string;
}

export interface EmailInboxResponse {
  data: EmailInbox;
}

export interface EmailInboxListResponse {
  data: Array<EmailInbox>;

  meta: EmailInboxListResponse.Meta;
}

export namespace EmailInboxListResponse {
  export interface Meta {
    page_size: number;

    /**
     * Cursor for the next inbox page, when more results are available.
     */
    page_cursor?: string;
  }
}

export interface EmailInboxListParams {
  /**
   * Opaque cursor returned by the previous inbox page.
   */
  page_cursor?: string;

  /**
   * Number of results to return. Defaults to 20; maximum is 250.
   */
  page_size?: number;
}

export interface EmailInboxCreateParams {
  /**
   * Account-owned, inbound-enabled domain UUID. The account's shared inbound
   * subdomain is allocated when omitted.
   */
  domain_id?: string;

  /**
   * Inbox local part. Trimmed and lowercased before validation; the normalized value
   * must be 1-64 characters, start and end with a letter or digit, and contain only
   * letters, digits, dots, hyphens, and underscores. Generated when omitted.
   */
  username?: string;
}

EmailInboxes.Drafts = Drafts;
EmailInboxes.Filters = Filters;
EmailInboxes.Messages = Messages;
EmailInboxes.Threads = Threads;

export declare namespace EmailInboxes {
  export {
    type EmailInbox as EmailInbox,
    type EmailInboxResponse as EmailInboxResponse,
    type EmailInboxListResponse as EmailInboxListResponse,
    type EmailInboxListParams as EmailInboxListParams,
    type EmailInboxCreateParams as EmailInboxCreateParams,
  };

  export {
    Drafts as Drafts,
    type EmailAddress as EmailAddress,
    type EmailDraft as EmailDraft,
    type EmailDraftRequest as EmailDraftRequest,
    type EmailDraftResponse as EmailDraftResponse,
    type EmailMessage as EmailMessage,
    type EmailMessageResponse as EmailMessageResponse,
    type DraftListResponse as DraftListResponse,
    type DraftListParams as DraftListParams,
    type DraftCreateParams as DraftCreateParams,
    type DraftDeleteParams as DraftDeleteParams,
    type DraftRetrieveParams as DraftRetrieveParams,
    type DraftUpdateParams as DraftUpdateParams,
    type DraftSendParams as DraftSendParams,
  };

  export {
    Filters as Filters,
    type MutateInboxFiltersRequest as MutateInboxFiltersRequest,
    type FilterCreateResponse as FilterCreateResponse,
    type FilterListResponse as FilterListResponse,
    type FilterDeleteAllResponse as FilterDeleteAllResponse,
    type FilterDeleteAllParams as FilterDeleteAllParams,
    type FilterCreateParams as FilterCreateParams,
  };

  export {
    Messages as Messages,
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageListParams as MessageListParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDraftsParams as MessageDraftsParams,
  };

  export {
    Threads as Threads,
    type EmailPaginationMeta as EmailPaginationMeta,
    type InboundEmailAddress as InboundEmailAddress,
    type InboundThread as InboundThread,
    type InboundThreadDetail as InboundThreadDetail,
    type InboundThreadListResponse as InboundThreadListResponse,
    type ThreadMessage as ThreadMessage,
    type ThreadRetrieveResponse as ThreadRetrieveResponse,
    type ThreadListParams as ThreadListParams,
    type ThreadRetrieveParams as ThreadRetrieveParams,
  };
}
