// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { EmailCursorPagination, type EmailCursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Send and manage email messages. Legacy `/v2/emails` routes are aliases for these endpoints.
 */
export class Recipients extends APIResource {
  /**
   * Lists per-recipient delivery states for a single message with cursor pagination.
   * Each recipient has an independent status, billable flag, and lifecycle
   * timestamps. BCC recipient addresses are redacted (returned as null) to protect
   * BCC privacy. Default page size is 25, maximum is 100.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailRecipient of client.emailMessages.recipients.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    emailID: string,
    query: RecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailRecipientsEmailCursorPagination, EmailRecipient> {
    return this._client.getAPIList(
      path`/email_messages/${emailID}/recipients`,
      EmailCursorPagination<EmailRecipient>,
      { query, ...options },
    );
  }

  /**
   * Returns the current delivery state of a single recipient, including status,
   * billable flag, SMTP detail, and lifecycle timestamps. BCC recipient addresses
   * are redacted (returned as null).
   *
   * @example
   * ```ts
   * const recipient =
   *   await client.emailMessages.recipients.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { email_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    recipientID: string,
    params: RecipientRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RecipientRetrieveResponse> {
    const { email_id } = params;
    return this._client.get(path`/email_messages/${email_id}/recipients/${recipientID}`, options);
  }
}

export type EmailRecipientsEmailCursorPagination = EmailCursorPagination<EmailRecipient>;

export interface EmailRecipient {
  /**
   * Recipient UUID.
   */
  id: string;

  /**
   * Recipient email address. Null for BCC recipients (redacted for privacy).
   */
  address: string | null;

  /**
   * Whether this recipient's delivery is billable (set on queue acceptance).
   */
  billable: boolean;

  kind: 'to' | 'cc' | 'bcc';

  /**
   * Parent email message UUID.
   */
  message_id: string;

  record_type: 'email_recipient';

  /**
   * Current per-recipient delivery status.
   */
  status:
    | 'queued'
    | 'sending'
    | 'sent'
    | 'deferred'
    | 'delivered'
    | 'bounced'
    | 'failed'
    | 'gw_reject'
    | 'cancelled';

  delivered_at?: string | null;

  failed_at?: string | null;

  sent_at?: string | null;

  /**
   * SMTP response code when available (e.g. 550 for bounces).
   */
  smtp_code?: number | null;

  /**
   * SMTP response message when available.
   */
  smtp_response?: string | null;
}

export interface RecipientRetrieveResponse {
  data: EmailRecipient;
}

export interface RecipientListParams extends EmailCursorPaginationParams {
  /**
   * Filter recipients by address kind.
   */
  kind?: 'to' | 'cc' | 'bcc';

  /**
   * Filter recipients by status.
   */
  status?:
    | 'queued'
    | 'sending'
    | 'sent'
    | 'deferred'
    | 'delivered'
    | 'bounced'
    | 'failed'
    | 'gw_reject'
    | 'cancelled';
}

export interface RecipientRetrieveParams {
  /**
   * Email message UUID.
   */
  email_id: string;
}

export declare namespace Recipients {
  export {
    type EmailRecipient as EmailRecipient,
    type RecipientRetrieveResponse as RecipientRetrieveResponse,
    type EmailRecipientsEmailCursorPagination as EmailRecipientsEmailCursorPagination,
    type RecipientListParams as RecipientListParams,
    type RecipientRetrieveParams as RecipientRetrieveParams,
  };
}
