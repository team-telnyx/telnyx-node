// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DraftsAPI from '../drafts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class Actions extends APIResource {
  /**
   * Sends from the inbox address through the standard email send pipeline to
   * caller-supplied To, Cc, and Bcc recipients. `to` must contain at least one
   * recipient. Optional `text` and `html` are prepended to a forwarded-message block
   * containing the original metadata and available body content. The subject is
   * prefixed with `Fwd:` unless it already has that prefix.
   *
   * Threading headers are derived from the original message: `In-Reply-To` is set to
   * its RFC Message-ID, and `References` contains the original References values
   * plus that Message-ID, de-duplicated and limited to the most recent 20 values.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailInboxes.messages.actions.forward(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       to: 'new@example.com',
   *       bcc: ['blind@example.com'],
   *       cc: [{ email: 'copy@example.com' }],
   *       text: 'FYI',
   *     },
   *   );
   * ```
   */
  forward(
    messageID: string,
    params: ActionForwardParams,
    options?: RequestOptions,
  ): APIPromise<DraftsAPI.EmailMessageResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/messages/${messageID}/actions/forward`, {
      body,
      ...options,
    });
  }

  /**
   * Sends from the inbox address through the standard email send pipeline. The
   * recipient is the original `Reply-To`, falling back to `From`; original Cc
   * recipients are not included. The subject is prefixed with `Re:` unless it
   * already has that prefix.
   *
   * Threading headers are derived from the original message: `In-Reply-To` is set to
   * its RFC Message-ID, and `References` contains the original References values
   * plus that Message-ID, de-duplicated and limited to the most recent 20 values.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailInboxes.messages.actions.reply(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       text: 'Thanks for the update.',
   *     },
   *   );
   * ```
   */
  reply(
    messageID: string,
    params: ActionReplyParams,
    options?: RequestOptions,
  ): APIPromise<DraftsAPI.EmailMessageResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/messages/${messageID}/actions/reply`, {
      body,
      ...options,
    });
  }

  /**
   * Sends from the inbox address through the standard email send pipeline. The To
   * list starts with the original `Reply-To` (or `From`) and includes original To
   * recipients; the Cc list includes original Cc recipients. The inbox address is
   * excluded, and recipients are de-duplicated case-insensitively across To and Cc.
   * Bcc is always empty. The subject is prefixed with `Re:` unless it already has
   * that prefix.
   *
   * Threading headers are derived from the original message: `In-Reply-To` is set to
   * its RFC Message-ID, and `References` contains the original References values
   * plus that Message-ID, de-duplicated and limited to the most recent 20 values.
   *
   * @example
   * ```ts
   * const emailMessageResponse =
   *   await client.emailInboxes.messages.actions.replyAll(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       text: 'Everyone, please review.',
   *     },
   *   );
   * ```
   */
  replyAll(
    messageID: string,
    params: ActionReplyAllParams,
    options?: RequestOptions,
  ): APIPromise<DraftsAPI.EmailMessageResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/messages/${messageID}/actions/reply_all`, {
      body,
      ...options,
    });
  }
}

/**
 * Email address accepted by inbox message actions, as a string or an object with
 * `email` and optional `name`.
 */
export type InboxActionEmailAddressInput = string | InboxActionEmailAddressInput.InboxRecipientAddress;

export namespace InboxActionEmailAddressInput {
  export interface InboxRecipientAddress {
    email: string;

    name?: string;
  }
}

/**
 * One recipient or a recipient array. Each recipient may be an email string or an
 * object with `email` and optional `name`.
 */
export type InboxActionRecipientInput =
  | string
  | InboxActionRecipientInput.InboxRecipientAddress
  | Array<InboxActionEmailAddressInput>;

export namespace InboxActionRecipientInput {
  export interface InboxRecipientAddress {
    email: string;

    name?: string;
  }
}

/**
 * At least one of `text` or `html` must contain a non-whitespace body. Recipients
 * are derived from the source message; caller-supplied `to`, `cc`, or `bcc` values
 * are ignored.
 */
export interface ReplyEmailInboxMessageRequest {
  /**
   * HTML reply body.
   */
  html?: string;

  /**
   * Plain-text reply body.
   */
  text?: string;
}

export interface ActionForwardParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param: One recipient or a non-empty recipient array. Each recipient may be
   * an email string or an object with `email` and optional `name`.
   */
  to: string | ActionForwardParams.InboxRecipientAddress | Array<InboxActionEmailAddressInput>;

  /**
   * Body param: One recipient or a recipient array. Each recipient may be an email
   * string or an object with `email` and optional `name`.
   */
  bcc?: InboxActionRecipientInput;

  /**
   * Body param: One recipient or a recipient array. Each recipient may be an email
   * string or an object with `email` and optional `name`.
   */
  cc?: InboxActionRecipientInput;

  /**
   * Body param: Optional HTML note prepended to the generated forwarded-message
   * block. Blank values are treated as omitted.
   */
  html?: string;

  /**
   * Body param: Optional plain-text note prepended to the generated
   * forwarded-message block. Blank values are treated as omitted.
   */
  text?: string;
}

export namespace ActionForwardParams {
  export interface InboxRecipientAddress {
    email: string;

    name?: string;
  }
}

export interface ActionReplyParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param: HTML reply body.
   */
  html?: string;

  /**
   * Body param: Plain-text reply body.
   */
  text?: string;
}

export interface ActionReplyAllParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param: HTML reply body.
   */
  html?: string;

  /**
   * Body param: Plain-text reply body.
   */
  text?: string;
}

export declare namespace Actions {
  export {
    type InboxActionEmailAddressInput as InboxActionEmailAddressInput,
    type InboxActionRecipientInput as InboxActionRecipientInput,
    type ReplyEmailInboxMessageRequest as ReplyEmailInboxMessageRequest,
    type ActionForwardParams as ActionForwardParams,
    type ActionReplyParams as ActionReplyParams,
    type ActionReplyAllParams as ActionReplyAllParams,
  };
}
