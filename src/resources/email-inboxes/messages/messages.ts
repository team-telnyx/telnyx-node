// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksAPI from '../../webhooks';
import { InboundMessagesEmailBracketCursorPagination } from '../../webhooks';
import * as DraftsAPI from '../drafts';
import * as EmailMessagesAPI from '../../email-messages/email-messages';
import * as ActionsAPI from './actions';
import {
  ActionForwardParams,
  ActionReplyAllParams,
  ActionReplyParams,
  Actions,
  InboxActionEmailAddressInput,
  InboxActionRecipientInput,
  ReplyEmailInboxMessageRequest,
} from './actions';
import * as LabelsAPI from './labels';
import {
  LabelCreateParams,
  LabelCreateResponse,
  LabelDeleteAllParams,
  LabelDeleteAllResponse,
  LabelMutationRequest,
  Labels,
} from './labels';
import { APIPromise } from '../../../core/api-promise';
import {
  EmailBracketCursorPagination,
  type EmailBracketCursorPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);

  /**
   * Lists inbound messages newest first. All access is scoped to the authenticated
   * account. `filter[search]` performs PostgreSQL full-text search over the subject,
   * plain-text body, and HTML body. Filters compose with stable cursor pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundMessage of client.emailInboxes.messages.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    inboxID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundMessagesEmailBracketCursorPagination, WebhooksAPI.InboundMessage> {
    return this._client.getAPIList(
      path`/email_inboxes/${inboxID}/messages`,
      EmailBracketCursorPagination<WebhooksAPI.InboundMessage>,
      { query, ...options },
    );
  }

  /**
   * Updates the explicit read state of an account-scoped inbound message. Set
   * `read_at` to `true` to mark the message read at the server's current time, to an
   * ISO 8601 timestamp to use that timestamp, or to `null` to mark the message
   * unread. Repeating the same update is idempotent.
   *
   * @example
   * ```ts
   * const message = await client.emailInboxes.messages.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     read_at: true,
   *   },
   * );
   * ```
   */
  update(
    messageID: string,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessageUpdateResponse> {
    const { inbox_id, ...body } = params;
    return this._client.patch(path`/email_inboxes/${inbox_id}/messages/${messageID}`, { body, ...options });
  }

  /**
   * Creates an unsent reply draft for an inbound message. Unlike the
   * `/actions/reply` endpoint, which sends immediately, this stores a draft that can
   * be reviewed and edited before sending.
   *
   * `reply_to_message_id` and `thread_id` are inherited from the parent message and
   * cannot be set by the caller. The recipient, `Re:` subject and
   * `In-Reply-To`/`References` headers are pre-filled from the parent using the same
   * rules as a live reply, so sending the draft threads identically. Supplying `to`
   * or `subject` explicitly overrides the pre-filled value.
   *
   * @example
   * ```ts
   * const emailDraftResponse =
   *   await client.emailInboxes.messages.drafts(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       text_body:
   *         'Thanks for the update — I will review today.',
   *     },
   *   );
   * ```
   */
  drafts(
    messageID: string,
    params: MessageDraftsParams,
    options?: RequestOptions,
  ): APIPromise<DraftsAPI.EmailDraftResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/messages/${messageID}/drafts`, {
      body,
      ...options,
    });
  }
}

export interface MessageUpdateResponse {
  data: WebhooksAPI.InboundMessage;
}

export interface MessageListParams extends EmailBracketCursorPaginationParams {
  /**
   * Case-insensitive literal substring of the sender address.
   */
  'filter[from]'?: string;

  /**
   * Returns only messages carrying this label. Matching is exact and case-sensitive.
   * Reserved `telnyx:` labels can be filtered on even though they cannot be written
   * by customers.
   */
  'filter[label]'?: string;

  /**
   * Whether the message has a read timestamp.
   */
  'filter[read]'?: boolean;

  /**
   * Inclusive ISO 8601 lower bound for the received timestamp.
   */
  'filter[received_after]'?: string;

  /**
   * Inclusive ISO 8601 upper bound for the received timestamp.
   */
  'filter[received_before]'?: string;

  /**
   * Full-text query over subject and body, up to 500 characters.
   */
  'filter[search]'?: string;

  /**
   * Case-insensitive literal substring of the subject.
   */
  'filter[subject]'?: string;

  /**
   * Whether the message has no read timestamp. Set to `true` to return only unread
   * messages.
   */
  'filter[unread]'?: boolean;
}

export interface MessageUpdateParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param
   */
  read_at: true | string;
}

export interface MessageDraftsParams {
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

Messages.Actions = Actions;
Messages.Labels = Labels;

export declare namespace Messages {
  export {
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageListParams as MessageListParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDraftsParams as MessageDraftsParams,
  };

  export {
    Actions as Actions,
    type InboxActionEmailAddressInput as InboxActionEmailAddressInput,
    type InboxActionRecipientInput as InboxActionRecipientInput,
    type ReplyEmailInboxMessageRequest as ReplyEmailInboxMessageRequest,
    type ActionForwardParams as ActionForwardParams,
    type ActionReplyParams as ActionReplyParams,
    type ActionReplyAllParams as ActionReplyAllParams,
  };

  export {
    Labels as Labels,
    type LabelMutationRequest as LabelMutationRequest,
    type LabelCreateResponse as LabelCreateResponse,
    type LabelDeleteAllResponse as LabelDeleteAllResponse,
    type LabelDeleteAllParams as LabelDeleteAllParams,
    type LabelCreateParams as LabelCreateParams,
  };
}

export { type InboundMessagesEmailBracketCursorPagination };
