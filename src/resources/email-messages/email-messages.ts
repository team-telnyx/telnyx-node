// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailMessagesAPI from './email-messages';
import * as EmailEventsAPI from '../email-events';
import * as DraftsAPI from '../email-inboxes/drafts';
import * as RecipientsAPI from './recipients';
import {
  EmailRecipient,
  RecipientListParams,
  RecipientListResponse,
  RecipientRetrieveParams,
  RecipientRetrieveResponse,
  Recipients,
} from './recipients';
import * as ThreadsAPI from '../email-inboxes/threads/threads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Send and manage email messages. Legacy `/v2/emails` routes are aliases for these endpoints.
 */
export class EmailMessages extends APIResource {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);

  /**
   * Permanently deletes every email in the authenticated account sent from or to the
   * supplied address, including retained events whose parent message has expired.
   * Events and durable recipients are deleted immediately with each message. The
   * operation never searches or reports matches in another account. The legacy
   * `/v2/emails` DELETE route is a backward-compatible alias.
   *
   * @example
   * ```ts
   * await client.emailMessages.deleteAll({
   *   address: 'dev@stainless.com',
   * });
   * ```
   */
  deleteAll(params: EmailMessageDeleteAllParams, options?: RequestOptions): APIPromise<void> {
    const { address } = params;
    return this._client.delete('/email_messages', {
      query: { address },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists messages sorted newest first by `created_at desc, id desc`. No filters
   * other than cursor pagination are implemented. The legacy `/v2/emails` GET route
   * is a backward-compatible alias for this operation.
   *
   * @example
   * ```ts
   * const emailMessages = await client.emailMessages.list();
   * ```
   */
  list(
    query: EmailMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailMessageListResponse> {
    return this._client.get('/email_messages', { query, ...options });
  }

  /**
   * Queues, schedules, or sandbox-sends an email message. The legacy `/v2/emails`
   * POST route is a backward-compatible alias for this operation.
   *
   * `subject` is required unless `template_id` is supplied. When using
   * `template_id`, do not also provide `subject`, `html_body`, or `text_body`; the
   * template is rendered with `template_variables`.
   *
   * Note: template lookup failures (not found, wrong account) return 400, not 404.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailMessages.create({
   *     from: 'sender@example.com',
   *     to: ['recipient@example.com'],
   *     subject: 'Hello from Telnyx',
   *     text_body: 'This is a test email.',
   *   });
   * ```
   */
  create(
    params: EmailMessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<DraftsAPI.EmailMessageResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email_messages', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates up to 50 email messages in a single request.
   *
   * @example
   * ```ts
   * const response = await client.emailMessages.batch({
   *   messages: [
   *     {
   *       from: 'sender@example.com',
   *       to: ['recipient1@example.com'],
   *       subject: 'Hello 1',
   *       text_body: 'Message 1',
   *     },
   *     {
   *       from: 'sender@example.com',
   *       to: ['recipient2@example.com'],
   *       subject: 'Hello 2',
   *       text_body: 'Message 2',
   *     },
   *   ],
   * });
   * ```
   */
  batch(params: EmailMessageBatchParams, options?: RequestOptions): APIPromise<EmailMessageBatchResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email_messages/batch', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists events for a single message sorted oldest first by
   * `occurred_at asc, id asc`. The legacy `/v2/emails/{id}/events` GET route is a
   * backward-compatible alias.
   *
   * @example
   * ```ts
   * const response = await client.emailMessages.retrieveEvents(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieveEvents(
    emailID: string,
    query: EmailMessageRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailMessageRetrieveEventsResponse> {
    return this._client.get(path`/email_messages/${emailID}/events`, { query, ...options });
  }

  /**
   * Cancels a scheduled email and returns it with status `cancelled`. The legacy
   * `/v2/emails/{id}/schedule` DELETE route is an alias.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailMessages.deleteSchedule(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  deleteSchedule(emailID: string, options?: RequestOptions): APIPromise<DraftsAPI.EmailMessageResponse> {
    return this._client.delete(path`/email_messages/${emailID}/schedule`, options);
  }

  /**
   * Permanently deletes an account-scoped email message, its events, its durable
   * recipients, and unshared attachment objects. Returns 404 when the message does
   * not exist in the authenticated account. The legacy `/v2/emails/{id}` DELETE
   * route is a backward-compatible alias.
   *
   * @example
   * ```ts
   * await client.emailMessages.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/email_messages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * The legacy `/v2/emails/{id}` GET route is a backward-compatible alias for this
   * operation.
   *
   * @example
   * ```ts
   * const emailMessage = await client.emailMessages.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailMessageRetrieveResponse> {
    return this._client.get(path`/email_messages/${id}`, options);
  }
}

export interface AttachmentRequest {
  /**
   * Attachment content, typically Base64-encoded. Defaults to empty string when
   * omitted.
   */
  content?: string;

  /**
   * MIME Content-ID used to reference an inline attachment.
   */
  content_id?: string | null;

  /**
   * MIME content type. Defaults to "application/octet-stream" when omitted.
   */
  content_type?: string;

  /**
   * MIME disposition (`attachment` or `inline`).
   */
  disposition?: string;

  /**
   * Attachment filename. Defaults to "attachment" when omitted.
   */
  filename?: string;
}

export type EmailAddressInput = string | DraftsAPI.EmailAddress;

export interface MessageEvent {
  occurred_at: string;

  type: EmailEventsAPI.EmailEventType;

  payload?: { [key: string]: unknown };
}

export interface SuppressedRecipient {
  /**
   * Whether an authorized send may override this suppression.
   */
  override_allowed: boolean;

  /**
   * Suppression reason returned by the recipient suppression service.
   */
  reason: string;

  /**
   * Scope at which the suppression applies.
   */
  scope: string;

  /**
   * Suppressed recipient email address.
   */
  to: string;
}

/**
 * Per-send open and click tracking overrides. Omitted properties inherit the
 * sender domain's tracking settings.
 */
export interface TrackingSettings {
  /**
   * Whether to rewrite links for click tracking in this message.
   */
  click_tracking?: boolean;

  /**
   * Whether to inject an open-tracking pixel for this message.
   */
  open_tracking?: boolean;
}

export interface EmailMessageRetrieveResponse {
  data: EmailMessageRetrieveResponse.Data;
}

export namespace EmailMessageRetrieveResponse {
  export interface Data extends DraftsAPI.EmailMessage {
    /**
     * HTML body submitted for the message.
     */
    html_body: string | null;

    /**
     * Plain-text body submitted for the message.
     */
    text_body: string | null;
  }
}

export interface EmailMessageListResponse {
  data: Array<DraftsAPI.EmailMessage>;

  meta: ThreadsAPI.EmailPaginationMeta;
}

export interface EmailMessageBatchResponse {
  data: Array<DraftsAPI.EmailMessage>;

  errors: Array<EmailMessageBatchResponse.Error>;

  meta: EmailMessageBatchResponse.Meta;
}

export namespace EmailMessageBatchResponse {
  export interface Error {
    /**
     * Batch item errors use `message` (not `detail`) for the human-readable text.
     */
    code:
      | 'bad_request'
      | 'not_found'
      | 'forbidden'
      | 'service_unavailable'
      | 'validation_error'
      | 'recipient_suppressed'
      | 'reputation_suspended';

    /**
     * Zero-based index of the failed message in the request array.
     */
    index: number;

    message: string;
  }

  export interface Meta {
    failed: number;

    succeeded: number;

    total: number;
  }
}

export interface EmailMessageRetrieveEventsResponse {
  data: Array<MessageEvent>;

  meta: ThreadsAPI.EmailPaginationMeta;
}

export interface EmailMessageDeleteAllParams {
  /**
   * Sender or recipient address to delete. Matching is trimmed and case-insensitive.
   */
  address: string;
}

export interface EmailMessageListParams {
  /**
   * Opaque URL-safe Base64 cursor returned by a previous list response.
   */
  page_cursor?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100. Invalid values are
   * clamped to the valid range.
   */
  page_size?: number;
}

export interface EmailMessageCreateParams {
  /**
   * Body param
   */
  from: EmailAddressInput;

  /**
   * Body param
   */
  to: Array<EmailAddressInput>;

  /**
   * Body param
   */
  attachments?: Array<AttachmentRequest>;

  /**
   * Body param
   */
  bcc?: Array<EmailAddressInput>;

  /**
   * Body param
   */
  cc?: Array<EmailAddressInput>;

  /**
   * Body param: Telnyx message UUID of the message this send forwards. Forwarded
   * messages start a NEW thread per RFC 5322 — NO `In-Reply-To` or `References`
   * headers are set on the outbound MIME. The id is recorded in the message's
   * metadata for EDR provenance only.
   *
   * The id is validated as a UUID but is NOT looked up against the message store —
   * existence is the caller's responsibility (the forward is pure metadata; it does
   * not affect delivery). Cannot be combined with `in_reply_to_message_id` (422).
   */
  forward_of_message_id?: string | null;

  /**
   * Body param: Optional display name for string `from`; overrides `from.name` when
   * provided.
   */
  from_name?: string;

  /**
   * Body param: Optional unsubscribe-group UUID used for group-scoped suppression
   * checks and unsubscribe handling.
   */
  group_id?: string | null;

  /**
   * Body param: Custom email headers. Write-only; not returned in responses.
   */
  headers?: { [key: string]: string };

  /**
   * Body param: HTML email body. Returned only by `GET /email_messages/{id}`;
   * omitted from create and list responses.
   */
  html_body?: string;

  /**
   * Body param: When true, allows delivery to recipients whose suppressions
   * explicitly permit an override. Hard bounces, spam complaints, and
   * invalid-address suppressions cannot be overridden. Requires the `email:override`
   * API scope.
   */
  ignore_suppression?: boolean;

  /**
   * Body param: Telnyx message UUID of the message this send replies to. When
   * provided, the API sets RFC 5322 `In-Reply-To` and `References` headers on the
   * outbound MIME so the recipient's mailbox (Gmail/Outlook) threads it correctly.
   * The parent is looked up under the caller's account scope; a UUID belonging to
   * another account yields a non-enumerating 404.
   *
   * Wire-only (Phase 1): the API sets the headers and does NOT resolve or mutate
   * `thread_id` on the server side. Messages sent without this parameter are
   * standalone (no threading headers injected).
   *
   * Cannot be combined with `forward_of_message_id` (422).
   */
  in_reply_to_message_id?: string | null;

  /**
   * Body param
   */
  inline_css?: boolean;

  /**
   * Body param: Custom metadata. Write-only; not returned in responses.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Reply-to address. If provided as an object with a name, only the
   * email is stored; the name is ignored.
   */
  reply_to?: EmailAddressInput;

  /**
   * Body param: Indicates a reply-all intent. In Phase 1 (wire-only) this does not
   * change the threading headers — recipient selection is customer- controlled
   * (`to`/`cc`), and a thread is not defined by its audience. When the referenced
   * message has no thread context, reply-all degrades to a plain reply (parent ID
   * only in `References`). The resolution engine (separate work) will expand the
   * ancestor chain at a later phase with no API change.
   *
   * Only meaningful alongside `in_reply_to_message_id`.
   */
  reply_to_all?: boolean | null;

  /**
   * Body param
   */
  sandbox_mode?: boolean;

  /**
   * Body param: Future ISO 8601 time to schedule sending. Invalid or past timestamps
   * are silently ignored and the email is sent immediately. The legacy alias
   * `send_at` is still accepted for backward compatibility; when both are provided,
   * `scheduled_at` wins.
   */
  scheduled_at?: string | null;

  /**
   * @deprecated Use scheduled_at instead.
   */
  send_at?: string;

  /**
   * Body param: Required unless `template_id` is supplied. When using a template,
   * the template's subject is rendered; if the template has no subject or renders
   * empty, the request returns 400.
   */
  subject?: string;

  /**
   * Body param: Tags for categorization and reporting. Stored on the message and
   * propagated to Email Detail Records. Not returned in API responses.
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  template_id?: string;

  /**
   * Body param: Variables for Liquid template rendering. Non-object values may cause
   * a 422 validation error on message creation, but are silently treated as an empty
   * object for template rendering.
   */
  template_variables?: { [key: string]: unknown };

  /**
   * Body param: Plain text email body. Returned only by `GET /email_messages/{id}`;
   * omitted from create and list responses.
   */
  text_body?: string;

  /**
   * Body param: Per-send open and click tracking overrides. Omitted properties
   * inherit the sender domain's tracking settings.
   */
  tracking_settings?: TrackingSettings;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
}

export interface EmailMessageBatchParams {
  /**
   * Body param
   */
  messages: Array<EmailMessageBatchParams.Message>;

  /**
   * Body param: Applies sandbox mode to all messages in the batch. Overrides any
   * per-message sandbox_mode in the messages array.
   */
  sandbox_mode?: boolean;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
}

export namespace EmailMessageBatchParams {
  /**
   * A single message in a batch create request. This schema mirrors
   * `CreateEmailRequest` EXCEPT it does not accept the reply/forward threading
   * parameters (`in_reply_to_message_id`, `reply_to_all`, `forward_of_message_id`) —
   * those are single-send-only in Phase 1 (MSG-1491) and are not yet implemented on
   * the batch endpoint. Recipient email addresses must be unique across `to`, `cc`,
   * and `bcc` after case-insensitive normalization. Duplicate recipients return
   * `400`.
   */
  export interface Message {
    from: EmailMessagesAPI.EmailAddressInput;

    to: Array<EmailMessagesAPI.EmailAddressInput>;

    attachments?: Array<EmailMessagesAPI.AttachmentRequest>;

    bcc?: Array<EmailMessagesAPI.EmailAddressInput>;

    cc?: Array<EmailMessagesAPI.EmailAddressInput>;

    /**
     * Optional display name for string `from`; overrides `from.name` when provided.
     */
    from_name?: string;

    /**
     * Optional unsubscribe-group UUID used for group-scoped suppression checks and
     * unsubscribe handling.
     */
    group_id?: string | null;

    /**
     * Custom email headers. Write-only; not returned in responses.
     */
    headers?: { [key: string]: string };

    /**
     * HTML email body. Returned only by `GET /email_messages/{id}`; omitted from
     * create and list responses.
     */
    html_body?: string;

    /**
     * When true, allows delivery to recipients whose suppressions explicitly permit an
     * override. Hard bounces, spam complaints, and invalid-address suppressions cannot
     * be overridden. Requires the `email:override` API scope.
     */
    ignore_suppression?: boolean;

    inline_css?: boolean;

    /**
     * Custom metadata. Write-only; not returned in responses.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Reply-to address. If provided as an object with a name, only the email is
     * stored; the name is ignored.
     */
    reply_to?: EmailMessagesAPI.EmailAddressInput;

    sandbox_mode?: boolean;

    /**
     * Future ISO 8601 time to schedule sending. Invalid or past timestamps are
     * silently ignored and the email is sent immediately. The legacy alias `send_at`
     * is still accepted for backward compatibility; when both are provided,
     * `scheduled_at` wins.
     */
    scheduled_at?: string | null;

    /**
     * @deprecated Use scheduled_at instead.
     */
    send_at?: string;

    /**
     * Required unless `template_id` is supplied. When using a template, the template's
     * subject is rendered; if the template has no subject or renders empty, the
     * request returns 400.
     */
    subject?: string;

    /**
     * Tags for categorization and reporting. Stored on the message and propagated to
     * Email Detail Records. Not returned in API responses.
     */
    tags?: Array<string>;

    template_id?: string;

    /**
     * Variables for Liquid template rendering. Non-object values may cause a 422
     * validation error on message creation, but are silently treated as an empty
     * object for template rendering.
     */
    template_variables?: { [key: string]: unknown };

    /**
     * Plain text email body. Returned only by `GET /email_messages/{id}`; omitted from
     * create and list responses.
     */
    text_body?: string;

    /**
     * Per-send open and click tracking overrides. Omitted properties inherit the
     * sender domain's tracking settings.
     */
    tracking_settings?: EmailMessagesAPI.TrackingSettings;
  }
}

export interface EmailMessageRetrieveEventsParams {
  /**
   * Opaque URL-safe Base64 cursor returned by a previous list response.
   */
  page_cursor?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100. Invalid values are
   * clamped to the valid range.
   */
  page_size?: number;
}

EmailMessages.Recipients = Recipients;

export declare namespace EmailMessages {
  export {
    type AttachmentRequest as AttachmentRequest,
    type EmailAddressInput as EmailAddressInput,
    type MessageEvent as MessageEvent,
    type SuppressedRecipient as SuppressedRecipient,
    type TrackingSettings as TrackingSettings,
    type EmailMessageRetrieveResponse as EmailMessageRetrieveResponse,
    type EmailMessageListResponse as EmailMessageListResponse,
    type EmailMessageBatchResponse as EmailMessageBatchResponse,
    type EmailMessageRetrieveEventsResponse as EmailMessageRetrieveEventsResponse,
    type EmailMessageDeleteAllParams as EmailMessageDeleteAllParams,
    type EmailMessageListParams as EmailMessageListParams,
    type EmailMessageCreateParams as EmailMessageCreateParams,
    type EmailMessageBatchParams as EmailMessageBatchParams,
    type EmailMessageRetrieveEventsParams as EmailMessageRetrieveEventsParams,
  };

  export {
    Recipients as Recipients,
    type EmailRecipient as EmailRecipient,
    type RecipientRetrieveResponse as RecipientRetrieveResponse,
    type RecipientListResponse as RecipientListResponse,
    type RecipientListParams as RecipientListParams,
    type RecipientRetrieveParams as RecipientRetrieveParams,
  };
}
