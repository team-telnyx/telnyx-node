// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailMessagesAPI from '../email-messages/email-messages';
import * as ThreadsAPI from './threads/threads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, list, retrieve, update, delete, and send unsent draft messages belonging to an agent inbox.
 */
export class Drafts extends APIResource {
  /**
   * Lists drafts newest first using stable cursor pagination. All access is scoped
   * to the authenticated account and the given inbox.
   *
   * @example
   * ```ts
   * const drafts = await client.emailInboxes.drafts.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(
    inboxID: string,
    query: DraftListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DraftListResponse> {
    return this._client.get(path`/email_inboxes/${inboxID}/drafts`, { query, ...options });
  }

  /**
   * Creates an unsent draft in the inbox. Every field is optional — a draft is a
   * work-in-progress and may be saved incomplete. Send-time requirements (sender,
   * subject, at least one recipient) are enforced when the draft is sent, not when
   * it is created.
   *
   * Drafts are unbillable and emit no Email Detail Records until they are sent.
   *
   * @example
   * ```ts
   * const emailDraftResponse =
   *   await client.emailInboxes.drafts.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       labels: ['important'],
   *       subject: 'Quarterly update',
   *       text_body: 'Here is the update.',
   *       to: [
   *         {
   *           email: 'recipient@example.com',
   *           name: 'Recipient',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    inboxID: string,
    body: DraftCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailDraftResponse> {
    return this._client.post(path`/email_inboxes/${inboxID}/drafts`, { body, ...options });
  }

  /**
   * Permanently deletes an unsent draft. Drafts that are being sent or have been
   * sent cannot be deleted; sent drafts are retained for audit.
   *
   * @example
   * ```ts
   * await client.emailInboxes.drafts.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(draftID: string, params: DraftDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { inbox_id } = params;
    return this._client.delete(path`/email_inboxes/${inbox_id}/drafts/${draftID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a single draft. Drafts that have been sent remain retrievable, so the
   * exact content that was sent stays auditable.
   *
   * @example
   * ```ts
   * const emailDraftResponse =
   *   await client.emailInboxes.drafts.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    draftID: string,
    params: DraftRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EmailDraftResponse> {
    const { inbox_id } = params;
    return this._client.get(path`/email_inboxes/${inbox_id}/drafts/${draftID}`, options);
  }

  /**
   * Updates the supplied fields on a draft. `account_id` and `inbox_id` are
   * server-owned and ignored if present in the body, so a draft can never be moved
   * between accounts or inboxes.
   *
   * A draft that is being sent or has already been sent is immutable and returns 422
   * — modifying it would race with delivery or rewrite the record of what was
   * actually sent.
   *
   * @example
   * ```ts
   * const emailDraftResponse =
   *   await client.emailInboxes.drafts.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       subject: 'Quarterly update (revised)',
   *       text_body: 'Updated body.',
   *     },
   *   );
   * ```
   */
  update(
    draftID: string,
    params: DraftUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailDraftResponse> {
    const { inbox_id, ...body } = params;
    return this._client.put(path`/email_inboxes/${inbox_id}/drafts/${draftID}`, { body, ...options });
  }

  /**
   * Identical to `PUT`; both apply a partial update to the supplied fields.
   *
   * @example
   * ```ts
   * const emailDraftResponse =
   *   await client.emailInboxes.drafts.patch(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       subject: 'Quarterly update (revised)',
   *       text_body: 'Updated body.',
   *     },
   *   );
   * ```
   */
  patch(draftID: string, params: DraftPatchParams, options?: RequestOptions): APIPromise<EmailDraftResponse> {
    const { inbox_id, ...body } = params;
    return this._client.patch(path`/email_inboxes/${inbox_id}/drafts/${draftID}`, { body, ...options });
  }

  /**
   * Sends the draft through the standard send pipeline — the same domain resolution,
   * suppression, reputation, daily-quota, persistence and Detail Record behaviour as
   * `POST /v2/email_messages`. The response body is the created email message.
   *
   * If the draft has no explicit `from_email`, the inbox address is used.
   *
   * The draft is marked `sent` only after the send is accepted; a send rejected for
   * suppression, quota or reputation leaves the draft editable so it can be fixed
   * and retried. A draft that is already `sent` returns 422 rather than sending
   * twice.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailInboxes.drafts.send(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  send(draftID: string, params: DraftSendParams, options?: RequestOptions): APIPromise<EmailMessageResponse> {
    const { inbox_id } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/drafts/${draftID}/send`, options);
  }
}

export interface EmailAddress {
  email: string;

  name?: string;
}

/**
 * An unsent, mutable draft message belonging to an inbox.
 */
export interface EmailDraft {
  id: string;

  inbox_id: string;

  record_type: 'email_draft';

  /**
   * `draft` until the draft is sent. A sent draft is retained for audit and becomes
   * immutable.
   */
  status: 'draft' | 'sending' | 'sent';

  attachments?: Array<{ [key: string]: unknown }>;

  bcc?: Array<EmailAddress>;

  cc?: Array<EmailAddress>;

  created_at?: string;

  /**
   * Sender address. Defaults to the inbox address at send time when null.
   */
  from?: string | null;

  from_name?: string | null;

  /**
   * Custom headers. Reply drafts carry `In-Reply-To` and `References`.
   */
  headers?: { [key: string]: string };

  html_body?: string | null;

  /**
   * Mutable mailbox-state labels. Not propagated to Email Detail Records.
   */
  labels?: Array<string>;

  /**
   * Arbitrary customer-defined metadata.
   */
  metadata?: { [key: string]: unknown };

  reply_to?: string | null;

  /**
   * Inbound message this draft replies to. Server-owned; set only on reply drafts.
   */
  reply_to_message_id?: string | null;

  sent_at?: string | null;

  /**
   * The email message created when this draft was sent.
   */
  sent_message_id?: string | null;

  subject?: string | null;

  /**
   * Transport/reporting attribution tags, propagated to Email Detail Records at send
   * time.
   */
  tags?: Array<string>;

  text_body?: string | null;

  /**
   * Conversation thread inherited from the parent message.
   */
  thread_id?: string | null;

  to?: Array<EmailAddress>;

  updated_at?: string;
}

/**
 * All fields are optional — a draft may be saved incomplete. `account_id`,
 * `inbox_id`, `status`, `sent_at`, `sent_message_id`, `reply_to_message_id` and
 * `thread_id` are server-owned and ignored if supplied.
 */
export interface EmailDraftRequest {
  attachments?: Array<{ [key: string]: unknown }>;

  bcc?: Array<EmailMessagesAPI.EmailAddressInput>;

  cc?: Array<EmailMessagesAPI.EmailAddressInput>;

  from_email?: string;

  from_name?: string;

  headers?: { [key: string]: string };

  /**
   * Alias for `html_body`, matching the send endpoint.
   */
  html?: string;

  html_body?: string;

  labels?: Array<string>;

  metadata?: { [key: string]: unknown };

  reply_to?: string;

  subject?: string;

  tags?: Array<string>;

  /**
   * Alias for `text_body`, matching the send endpoint.
   */
  text?: string;

  text_body?: string;

  to?: Array<EmailMessagesAPI.EmailAddressInput>;
}

export interface EmailDraftResponse {
  /**
   * An unsent, mutable draft message belonging to an inbox.
   */
  data: EmailDraft;
}

export interface EmailMessage {
  id: string;

  attachments: Array<EmailMessage.Attachment>;

  bcc: Array<EmailAddress>;

  cc: Array<EmailAddress>;

  created_at: string;

  events: Array<EmailMessagesAPI.MessageEvent>;

  from: EmailAddress;

  record_type: 'email_message';

  reply_to: string | null;

  /**
   * Current status of an email message. Lifecycle statuses (queued, scheduled, etc.)
   * are set on creation. Delivery statuses (delivered, bounced, etc.) are updated by
   * delivery event consumers.
   */
  status:
    | 'queued'
    | 'scheduled'
    | 'cancelled'
    | 'sandbox'
    | 'sending'
    | 'sent'
    | 'failed'
    | 'deferred'
    | 'delivered'
    | 'bounced'
    | 'complained'
    | 'rejected'
    | 'opened'
    | 'clicked'
    | 'unsubscribed';

  subject: string;

  template_id: string | null;

  template_variables: { [key: string]: unknown };

  to: Array<EmailAddress>;

  /**
   * Present when true in the immediate create response. Not persisted; absent on
   * subsequent GET requests.
   */
  inline_css?: boolean;

  /**
   * Per-status recipient counts for the message. Present only for outbound messages
   * with recipient rows. Keys are recipient statuses, values are counts. Example:
   * `{"delivered": 998, "bounced": 2}`.
   */
  recipient_statuses?: { [key: string]: number };

  /**
   * Present when sandbox mode was used.
   */
  sandbox?: boolean;

  /**
   * Present when a scheduled_at value was stored. Persists even after the scheduled
   * send has been processed or cancelled.
   */
  scheduled_at?: string;
}

export namespace EmailMessage {
  /**
   * EDR-aligned attachment metadata. The base64 `content` is never returned.
   */
  export interface Attachment {
    /**
     * MIME Content-ID for inline references.
     */
    content_id: string | null;

    content_type: string;

    /**
     * MIME disposition (e.g. `attachment` or `inline`). Runtime passes through the
     * stored value without enforcing an enum.
     */
    disposition: string;

    filename: string;

    /**
     * SHA-256 hex digest of the attachment content.
     */
    sha256: string | null;

    /**
     * Attachment size in bytes.
     */
    size_bytes: number | null;

    /**
     * Telnyx-hosted public URL for the attachment content.
     */
    url: string | null;
  }
}

export interface EmailMessageResponse {
  data: EmailMessage;

  /**
   * Recipients removed by suppression checks when at least one recipient remains and
   * the message is accepted.
   */
  suppressed?: Array<EmailMessagesAPI.SuppressedRecipient>;
}

export interface DraftListResponse {
  data: Array<EmailDraft>;

  meta: ThreadsAPI.EmailPaginationMeta;
}

export interface DraftListParams {
  /**
   * Restrict results to drafts in this state.
   */
  'filter[status]'?: 'draft' | 'sending' | 'sent';

  /**
   * Opaque cursor returned by the previous page.
   */
  'page[after]'?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100.
   */
  'page[size]'?: number;
}

export interface DraftCreateParams {
  attachments?: Array<{ [key: string]: unknown }>;

  bcc?: Array<EmailMessagesAPI.EmailAddressInput>;

  cc?: Array<EmailMessagesAPI.EmailAddressInput>;

  from_email?: string;

  from_name?: string;

  headers?: { [key: string]: string };

  /**
   * Alias for `html_body`, matching the send endpoint.
   */
  html?: string;

  html_body?: string;

  labels?: Array<string>;

  metadata?: { [key: string]: unknown };

  reply_to?: string;

  subject?: string;

  tags?: Array<string>;

  /**
   * Alias for `text_body`, matching the send endpoint.
   */
  text?: string;

  text_body?: string;

  to?: Array<EmailMessagesAPI.EmailAddressInput>;
}

export interface DraftDeleteParams {
  /**
   * Email inbox UUID.
   */
  inbox_id: string;
}

export interface DraftRetrieveParams {
  /**
   * Email inbox UUID.
   */
  inbox_id: string;
}

export interface DraftUpdateParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param
   */
  attachments?: Array<{ [key: string]: unknown }>;

  /**
   * Body param
   */
  bcc?: Array<EmailMessagesAPI.EmailAddressInput>;

  /**
   * Body param
   */
  cc?: Array<EmailMessagesAPI.EmailAddressInput>;

  /**
   * Body param
   */
  from_email?: string;

  /**
   * Body param
   */
  from_name?: string;

  /**
   * Body param
   */
  headers?: { [key: string]: string };

  /**
   * Body param: Alias for `html_body`, matching the send endpoint.
   */
  html?: string;

  /**
   * Body param
   */
  html_body?: string;

  /**
   * Body param
   */
  labels?: Array<string>;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  reply_to?: string;

  /**
   * Body param
   */
  subject?: string;

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param: Alias for `text_body`, matching the send endpoint.
   */
  text?: string;

  /**
   * Body param
   */
  text_body?: string;

  /**
   * Body param
   */
  to?: Array<EmailMessagesAPI.EmailAddressInput>;
}

export interface DraftPatchParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param
   */
  attachments?: Array<{ [key: string]: unknown }>;

  /**
   * Body param
   */
  bcc?: Array<EmailMessagesAPI.EmailAddressInput>;

  /**
   * Body param
   */
  cc?: Array<EmailMessagesAPI.EmailAddressInput>;

  /**
   * Body param
   */
  from_email?: string;

  /**
   * Body param
   */
  from_name?: string;

  /**
   * Body param
   */
  headers?: { [key: string]: string };

  /**
   * Body param: Alias for `html_body`, matching the send endpoint.
   */
  html?: string;

  /**
   * Body param
   */
  html_body?: string;

  /**
   * Body param
   */
  labels?: Array<string>;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  reply_to?: string;

  /**
   * Body param
   */
  subject?: string;

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param: Alias for `text_body`, matching the send endpoint.
   */
  text?: string;

  /**
   * Body param
   */
  text_body?: string;

  /**
   * Body param
   */
  to?: Array<EmailMessagesAPI.EmailAddressInput>;
}

export interface DraftSendParams {
  /**
   * Email inbox UUID.
   */
  inbox_id: string;
}

export declare namespace Drafts {
  export {
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
    type DraftPatchParams as DraftPatchParams,
    type DraftSendParams as DraftSendParams,
  };
}
