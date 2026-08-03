// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ThreadsAPI from './email-inboxes/threads/threads';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Account-wide conversation threads across every inbox, for agents operating many inboxes at once.
 */
export class EmailThreads extends APIResource {
  /**
   * Lists thread summaries for the whole account, newest first, using stable cursor
   * pagination. An agent operating many inboxes gets every conversation in one call
   * instead of one call per inbox. Each thread carries its own `inbox_id` so a reply
   * can be routed back to the right inbox. Use `filter[inbox_id]` (repeatable) to
   * narrow the result to specific inboxes. Because a thread ID can be delivered to
   * multiple inboxes, each result is identified by its `(inbox_id, id)` pair.
   */
  list(
    query: EmailThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadsAPI.InboundThreadListResponse> {
    return this._client.get('/email_threads', { query, ...options });
  }

  /**
   * Returns a thread and a bounded page of its inbound and outbound messages,
   * interleaved in chronological order. The `inbox_id` returned by the list endpoint
   * is required because a thread ID can occur in multiple inboxes. Only messages
   * matching that `(inbox_id, thread_id)` pair are returned. Threads outside the
   * account return an opaque 404.
   */
  retrieve(
    threadID: string,
    query: EmailThreadRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EmailThreadRetrieveResponse> {
    return this._client.get(path`/email_threads/${threadID}`, { query, ...options });
  }
}

export interface EmailThreadRetrieveResponse {
  data: ThreadsAPI.InboundThreadDetail;

  meta: ThreadsAPI.EmailPaginationMeta;
}

export interface EmailThreadListParams {
  /**
   * Restrict results to one or more inboxes. Repeat the parameter
   * (`filter[inbox_id][]=...&filter[inbox_id][]=...`) or pass a comma-separated
   * list. Omit to list every inbox in the account. Inboxes outside the account are
   * silently excluded. If the filter is present, it must contain at least one
   * non-empty UUID.
   */
  'filter[inbox_id]'?: Array<string>;

  /**
   * Returns only threads carrying this label. Matching is exact and case-sensitive.
   * Thread labels are independent of the labels on the thread's messages.
   */
  'filter[label]'?: string;

  /**
   * Opaque cursor returned by the previous page.
   */
  'page[after]'?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100.
   */
  'page[size]'?: number;
}

export interface EmailThreadRetrieveParams {
  /**
   * Inbox UUID that, together with `thread_id`, identifies the thread.
   */
  inbox_id: string;

  /**
   * Opaque message cursor returned by the previous thread-detail page.
   */
  'page[after]'?: string;

  /**
   * Number of thread messages to return. Defaults to 25; maximum is 100.
   */
  'page[size]'?: number;
}

export declare namespace EmailThreads {
  export {
    type EmailThreadRetrieveResponse as EmailThreadRetrieveResponse,
    type EmailThreadListParams as EmailThreadListParams,
    type EmailThreadRetrieveParams as EmailThreadRetrieveParams,
  };
}
