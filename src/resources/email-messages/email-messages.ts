// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailMessagesAPI from './email-messages';
import * as EmailEventsAPI from '../email-events';
import * as DraftsAPI from '../email-inboxes/drafts';
import { EmailMessagesEmailCursorPagination } from '../email-inboxes/drafts';
import * as RecipientsAPI from './recipients';
import {
  EmailRecipient,
  EmailRecipientsEmailCursorPagination,
  RecipientListParams,
  RecipientRetrieveParams,
  RecipientRetrieveResponse,
  Recipients,
} from './recipients';
import { APIPromise } from '../../core/api-promise';
import { EmailCursorPagination, type EmailCursorPaginationParams, PagePromise } from '../../core/pagination';
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
   * Lists messages sorted newest first by `created_at desc, id desc`. Tags and
   * metadata filters compose with cursor pagination. The legacy `/v2/emails` GET
   * route is a backward-compatible alias for this operation.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailMessage of client.emailMessages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmailMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailMessagesEmailCursorPagination, DraftsAPI.EmailMessage> {
    return this._client.getAPIList('/email_messages', EmailCursorPagination<DraftsAPI.EmailMessage>, {
      query,
      ...options,
    });
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
   * Creates up to 1,000 email messages in a single request. Request-wide admission
   * checks run first and can reject the whole batch before message creation. After
   * those checks pass, each message is validated and sent independently; item-level
   * failures do not affect other messages, and the processed batch returns 207
   * Multi-Status. Per-message failures include validation errors; when a template
   * has `strict_variables` enabled, a missing required variable produces a per-item
   * `unprocessable_entity` error naming that variable while the other messages
   * continue.
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
   * For compatibility, each event carries the legacy customer-visible `event_type`
   * (`email.`-prefixed), the additive `canonical_event_type` (`email.`-prefixed),
   * and the deprecated `type` duplicate — whose value keeps the exact legacy format:
   * the bare stored event name, never `email.`-prefixed. Gateway rejections render
   * `email.failed` + canonical `email.gw_reject`; MTA expirations render
   * `email.bounced` + canonical `email.expired`; every unchanged outcome carries
   * identical `event_type` and `canonical_event_type` values (and `type` keeps the
   * stored name).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageEvent of client.emailMessages.retrieveEvents(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  retrieveEvents(
    emailID: string,
    query: EmailMessageRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessageEventsEmailCursorPagination, MessageEvent> {
    return this._client.getAPIList(
      path`/email_messages/${emailID}/events`,
      EmailCursorPagination<MessageEvent>,
      { query, ...options },
    );
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
   * const emailMessageDetailResponse =
   *   await client.emailMessages.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailMessageDetailResponse> {
    return this._client.get(path`/email_messages/${id}`, options);
  }

  /**
   * Moves an existing scheduled email to a new future send time. Only the delivery
   * time (`scheduled_at`) changes; the message ID, content, recipients, tags, and
   * metadata remain unchanged. Returns `409 Conflict` if the message is no longer
   * scheduled or its scheduled-send worker has already started processing it. This
   * route emits no dedicated `rescheduled` event.
   *
   * @example
   * ```ts
   * const emailMessageDetailResponse =
   *   await client.emailMessages.updateSchedule(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { scheduled_at: '2099-08-07T14:30:00Z' },
   *   );
   * ```
   */
  updateSchedule(
    emailID: string,
    body: EmailMessageUpdateScheduleParams,
    options?: RequestOptions,
  ): APIPromise<EmailMessageDetailResponse> {
    return this._client.patch(path`/email_messages/${emailID}/schedule`, { body, ...options });
  }
}

export type MessageEventsEmailCursorPagination = EmailCursorPagination<MessageEvent>;

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

export interface EmailMessageDetailResponse {
  data: EmailMessageDetailResponse.Data;
}

export namespace EmailMessageDetailResponse {
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

/**
 * An event on the per-message events endpoint. The legacy event_type and additive
 * canonical_event_type are email.-prefixed. The deprecated type preserves the bare
 * stored event name for compatibility.
 */
export interface MessageEvent {
  /**
   * Additive canonical outcome name, prefixed with `email.`. Gateway rejection is
   * `email.gw_reject`, ambiguous injection timeout is `email.injection_timeout`, and
   * MTA expiration is `email.expired`. Unchanged outcomes retain their names.
   * Existing stored rows are translated only when recorded payload evidence proves
   * the outcome; a legacy failed row is not guessed or sharpened.
   */
  canonical_event_type: string;

  /**
   * Legacy customer-visible event name, prefixed with `email.`. Gateway rejections
   * render `email.failed`; MTA expirations render `email.bounced`. Webhook
   * subscription allowlists match the legacy name.
   */
  event_type: string;

  occurred_at: string;

  /**
   * @deprecated Bare stored event names returned by message history. In addition to
   * the normal send and delivery lifecycle, polling can expose suppression, scan,
   * and quarantine lifecycle rows. Sharp canonical names gw_reject,
   * injection_timeout, and expired distinguish gateway rejection, ambiguous
   * injection timeout, and MTA expiration. The failed and bounced names remain valid
   * for system/admin failures and hard bounces respectively. Existing stored rows
   * retain their original names.
   */
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
      | 'unprocessable_entity'
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

export interface EmailMessageDeleteAllParams {
  /**
   * Sender or recipient address to delete. Matching is trimmed and case-insensitive.
   */
  address: string;
}

export interface EmailMessageListParams extends EmailCursorPaginationParams {
  /**
   * Metadata containment filter, supplied as a JSON object or comma-separated
   * `key=value` pairs. All supplied key/value pairs must be contained in the message
   * metadata. An empty value or empty JSON object omits the filter. Malformed
   * values, valid non-object JSON, pairs without `=`, empty keys, and
   * non-string/nested query shapes return HTTP 400.
   */
  'filter[metadata]'?: string;

  /**
   * Comma-separated tags. Each segment is trimmed, and messages having at least one
   * supplied tag are returned; matching is exact and case-sensitive after trimming.
   * Because commas delimit values and surrounding whitespace is removed, this filter
   * cannot represent stored tags containing literal commas or leading/trailing
   * whitespace. An empty value omits the filter. Empty segments and
   * non-string/nested query shapes return HTTP 400.
   */
  'filter[tags]'?: string;
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
   * Body param: Custom metadata key/value pairs. Stored on the message, returned on
   * message responses, and propagated to Email Detail Records. Usable in
   * `filter[metadata]` when listing messages.
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
   * Body param: Validates and accepts the message without injecting it into the MTA
   * or outbound Kafka path. Nothing is delivered: sandbox records are non-billable,
   * consume no daily-send-limit quota, and feed no delivery-reputation signals.
   *
   * The reserved sandbox test-recipient domain is `test.telnyx.com`. In sandbox
   * mode, these addresses produce deterministic recipient-scoped lifecycle events:
   *
   * - `delivered@test.telnyx.com`: queued -> sending -> sent -> delivered
   * - `hard-bounce@test.telnyx.com`: queued -> sending -> sent -> bounced
   *   (permanent)
   * - `soft-bounce@test.telnyx.com`: queued -> sending -> sent -> bounced
   *   (transient)
   * - `complaint@test.telnyx.com`: queued -> sending -> sent -> complained
   * - `suppressed@test.telnyx.com`: queued -> suppressed
   * - `invalid@test.telnyx.com`: queued -> sending -> failed (invalid recipient)
   * - `dkim-fail@test.telnyx.com`: queued -> sending -> failed (DKIM unavailable)
   * - `rate-limit@test.telnyx.com`: queued -> sending -> failed (rate limit
   *   exceeded)
   *
   * Matching is case-insensitive for both the local part and the domain and requires
   * the exact domain `test.telnyx.com` — subdomains and other domains do not match.
   * Mixed sandbox sends simulate only reserved test recipients; other recipients
   * retain ordinary sandbox behavior (accepted, no delivery attempted). Hard-bounce
   * and complaint outcomes also use the normal automatic-suppression pipeline.
   * Non-sandbox sends to these addresses use the normal delivery path.
   */
  sandbox_mode?: boolean;

  /**
   * Body param: Future ISO 8601 delivery time. Invalid or non-future timestamps are
   * rejected. Single sends return HTTP 422; in batch sends the invalid item is
   * reported in the 207 per-item errors while other items continue. `send_at`
   * remains a deprecated request alias. A non-null `scheduled_at` takes precedence
   * over `send_at`; when `scheduled_at` is omitted or null, `send_at` is used.
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
   * Body param: Tags for categorization and filtering. Stored on the message,
   * returned on message responses, and propagated to Email Detail Records. Usable in
   * `filter[tags]` when listing messages.
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  template_id?: string;

  /**
   * Body param: Variables for Liquid template rendering. Non-object values may cause
   * a 422 validation error on message creation, but are silently treated as an empty
   * object for template rendering. When the template enables `strict_variables`, a
   * missing required variable fails the request with 422 (single send) or a per-item
   * `unprocessable_entity` error (batch) naming the variable; no message is
   * persisted for the failed item.
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
   * Body param: Array of email messages to send. Up to 1,000 messages per batch
   * request. Each message is validated and sent independently; per-message failures
   * do not affect other messages in the batch.
   */
  messages: Array<EmailMessageBatchParams.Message>;

  /**
   * Body param: Applies sandbox mode to all messages in the batch and overrides any
   * per-message `sandbox_mode` value — each message's effective `sandbox_mode` is
   * exactly this envelope value. Reserved recipients at `test.telnyx.com` produce
   * the deterministic event chains documented on CreateEmailRequest.sandbox_mode; no
   * batch item is injected into the MTA or outbound Kafka path. Sandbox batch items
   * are non-billable, consume no daily-send-limit quota, and feed no
   * delivery-reputation signals.
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
     * Custom metadata key/value pairs. Stored on the message, returned on message
     * responses, and propagated to Email Detail Records. Usable in `filter[metadata]`
     * when listing messages.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Reply-to address. If provided as an object with a name, only the email is
     * stored; the name is ignored.
     */
    reply_to?: EmailMessagesAPI.EmailAddressInput;

    /**
     * Per-message sandbox flag. The batch-level `sandbox_mode` envelope value is
     * authoritative: it overwrites every message's `sandbox_mode` before processing,
     * including the `false` default when the envelope omits the field. A per-item
     * `sandbox_mode: true` inside a non-sandbox batch is therefore a real send. Set
     * the envelope field to run any batch item in sandbox mode.
     */
    sandbox_mode?: boolean;

    /**
     * Future ISO 8601 delivery time. Invalid or non-future timestamps are rejected.
     * Single sends return HTTP 422; in batch sends the invalid item is reported in the
     * 207 per-item errors while other items continue. `send_at` remains a deprecated
     * request alias. A non-null `scheduled_at` takes precedence over `send_at`; when
     * `scheduled_at` is omitted or null, `send_at` is used.
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
     * Tags for categorization and filtering. Stored on the message, returned on
     * message responses, and propagated to Email Detail Records. Usable in
     * `filter[tags]` when listing messages.
     */
    tags?: Array<string>;

    template_id?: string;

    /**
     * Variables for Liquid template rendering. Non-object values may cause a 422
     * validation error on message creation, but are silently treated as an empty
     * object for template rendering. When the template enables `strict_variables`, a
     * missing required variable fails the request with 422 (single send) or a per-item
     * `unprocessable_entity` error (batch) naming the variable; no message is
     * persisted for the failed item.
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

export interface EmailMessageRetrieveEventsParams extends EmailCursorPaginationParams {}

export interface EmailMessageUpdateScheduleParams {
  /**
   * New ISO 8601 delivery time. Must be strictly in the future.
   */
  scheduled_at: string;
}

EmailMessages.Recipients = Recipients;

export declare namespace EmailMessages {
  export {
    type AttachmentRequest as AttachmentRequest,
    type EmailAddressInput as EmailAddressInput,
    type EmailMessageDetailResponse as EmailMessageDetailResponse,
    type MessageEvent as MessageEvent,
    type SuppressedRecipient as SuppressedRecipient,
    type TrackingSettings as TrackingSettings,
    type EmailMessageBatchResponse as EmailMessageBatchResponse,
    type MessageEventsEmailCursorPagination as MessageEventsEmailCursorPagination,
    type EmailMessageDeleteAllParams as EmailMessageDeleteAllParams,
    type EmailMessageListParams as EmailMessageListParams,
    type EmailMessageCreateParams as EmailMessageCreateParams,
    type EmailMessageBatchParams as EmailMessageBatchParams,
    type EmailMessageRetrieveEventsParams as EmailMessageRetrieveEventsParams,
    type EmailMessageUpdateScheduleParams as EmailMessageUpdateScheduleParams,
  };

  export {
    Recipients as Recipients,
    type EmailRecipient as EmailRecipient,
    type RecipientRetrieveResponse as RecipientRetrieveResponse,
    type EmailRecipientsEmailCursorPagination as EmailRecipientsEmailCursorPagination,
    type RecipientListParams as RecipientListParams,
    type RecipientRetrieveParams as RecipientRetrieveParams,
  };
}

export { type EmailMessagesEmailCursorPagination };
