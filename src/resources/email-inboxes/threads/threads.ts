// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LabelsAPI from './labels';
import {
  LabelCreateParams,
  LabelCreateResponse,
  LabelDeleteAllParams,
  LabelDeleteAllResponse,
  Labels,
} from './labels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class Threads extends APIResource {
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);

  /**
   * Lists thread summaries newest first using stable cursor pagination.
   *
   * @example
   * ```ts
   * const inboundThreadListResponse =
   *   await client.emailInboxes.threads.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    inboxID: string,
    query: ThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InboundThreadListResponse> {
    return this._client.get(path`/email_inboxes/${inboxID}/threads`, { query, ...options });
  }

  /**
   * Returns a bounded page of inbound and outbound thread messages interleaved in
   * chronological order using stable cursor pagination.
   *
   * @example
   * ```ts
   * const thread = await client.emailInboxes.threads.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(
    threadID: string,
    params: ThreadRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ThreadRetrieveResponse> {
    const { inbox_id, ...query } = params;
    return this._client.get(path`/email_inboxes/${inbox_id}/threads/${threadID}`, { query, ...options });
  }
}

export interface EmailPaginationMeta {
  page_size: number;

  /**
   * Cursor for the next page, when more results are available.
   */
  page_cursor?: string;
}

export interface InboundEmailAddress {
  email: string;

  name?: string;
}

export interface InboundThread {
  id: string;

  created_at: string;

  inbox_id: string;

  /**
   * Mutable thread labels used for agent workflow state. Independent of the labels
   * on the thread's messages, and distinct from the send-time `tags` on outbound
   * messages.
   */
  labels: Array<string>;

  last_message_at: string;

  last_message_id: string;

  /**
   * Total inbound and outbound messages in the thread.
   */
  message_count: number;

  preview: string | null;

  record_type: 'email_thread';

  subject: string | null;

  /**
   * Unread inbound messages; outbound messages never increment this count.
   */
  unread_count: number;

  updated_at: string;
}

export interface InboundThreadDetail extends InboundThread {
  messages: Array<ThreadMessage>;
}

export interface InboundThreadListResponse {
  data: Array<InboundThread>;

  meta: EmailPaginationMeta;
}

export interface ThreadMessage {
  id: string;

  attachments: Array<{ [key: string]: unknown }>;

  bcc: Array<InboundEmailAddress>;

  cc: Array<InboundEmailAddress>;

  created_at: string;

  direction: 'inbound' | 'outbound';

  from: InboundEmailAddress;

  /**
   * Whether conservative plain-text extraction detected a quoted tail. False does
   * not prove that the source contains no quoted content.
   */
  has_quoted_text: boolean;

  headers: { [key: string]: unknown };

  /**
   * URL for an offloaded HTML body. Null means the body is not offloaded to a URL;
   * an inline HTML body may still exist but is not returned on list reads. Reply
   * extraction uses only the plain-text body during ingest.
   */
  html_body_url: string | null;

  in_reply_to: string | null;

  inbox_id: string;

  inline_files: Array<{ [key: string]: unknown }>;

  /**
   * Mutable message labels used for agent workflow state (for example `spam`,
   * `needs_review`, `processed`). Distinct from the immutable send-time `tags` on
   * outbound messages: labels are never propagated to Email Detail Records or
   * Mission Control reporting. Always empty for outbound messages. Labels on a
   * message are independent of the labels on its thread.
   */
  labels: Array<string>;

  /**
   * RFC Message-ID header. Null is possible for legacy outbound messages.
   */
  message_id: string | null;

  /**
   * Time the inbound message was marked read. Null means unread.
   */
  read_at: string | null;

  /**
   * Receipt time for inbound messages; null for outbound messages.
   */
  received_at: string | null;

  record_type: 'email_message';

  /**
   * Ordered RFC Message-ID values from the References header.
   */
  references: Array<string>;

  /**
   * Conservatively extracted new-reply content persisted from the plain-text body
   * during ingest. Null means no plain-text extraction input was available or
   * extraction was skipped or failed; HTML bodies are not parsed.
   */
  reply_text: string | null;

  reply_to: Array<InboundEmailAddress>;

  /**
   * Creation/send-acceptance time for outbound messages; null for inbound messages.
   */
  sent_at: string | null;

  /**
   * Received for inbound messages; the current send status for outbound messages.
   */
  status: string;

  subject: string | null;

  /**
   * URL for an offloaded plain-text body. Null means the body is not offloaded to a
   * URL; an inline plain-text body may still exist but is not returned on list
   * reads. `reply_text` and `has_quoted_text` are persisted during ingest before any
   * body offload.
   */
  text_body_url: string | null;

  thread_id: string;

  to: Array<InboundEmailAddress>;

  updated_at: string;
}

export interface ThreadRetrieveResponse {
  data: InboundThreadDetail;

  meta: EmailPaginationMeta;
}

export interface ThreadListParams {
  /**
   * Returns only threads carrying this label. Thread labels are independent of the
   * labels on the thread's messages.
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

export interface ThreadRetrieveParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Query param: Opaque message cursor returned by the previous thread-detail page.
   */
  'page[after]'?: string;

  /**
   * Query param: Number of thread messages to return. Defaults to 25; maximum
   * is 100.
   */
  'page[size]'?: number;
}

Threads.Labels = Labels;

export declare namespace Threads {
  export {
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

  export {
    Labels as Labels,
    type LabelCreateResponse as LabelCreateResponse,
    type LabelDeleteAllResponse as LabelDeleteAllResponse,
    type LabelDeleteAllParams as LabelDeleteAllParams,
    type LabelCreateParams as LabelCreateParams,
  };
}
