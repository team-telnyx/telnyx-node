// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksAPI from '../../webhooks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class Labels extends APIResource {
  /**
   * Removes one or more labels from a message. Idempotent — removing a label the
   * message does not carry is a no-op and still returns 200. Removal is
   * case-sensitive.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailInboxes.messages.labels.deleteAll(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       labels: ['spam'],
   *     },
   *   );
   * ```
   */
  deleteAll(
    messageID: string,
    params: LabelDeleteAllParams,
    options?: RequestOptions,
  ): APIPromise<LabelDeleteAllResponse> {
    const { inbox_id, ...body } = params;
    return this._client.delete(path`/email_inboxes/${inbox_id}/messages/${messageID}/labels`, {
      body,
      ...options,
    });
  }

  /**
   * Adds one or more mutable labels to a message. Labels carry agent workflow state
   * such as `spam`, `needs_review`, or `processed`.
   *
   * Labels are **not** the same as the send-time `tags` on outbound messages: `tags`
   * are immutable and propagate to Email Detail Records and Mission Control for
   * billing attribution, while labels are mailbox state that never reaches the
   * reporting contract.
   *
   * The operation is an idempotent set union — adding a label the message already
   * carries is a no-op and still returns 200. Labels are case-sensitive, and message
   * labels are independent of thread labels.
   *
   * @example
   * ```ts
   * const label =
   *   await client.emailInboxes.messages.labels.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       labels: ['spam', 'urgent'],
   *     },
   *   );
   * ```
   */
  create(
    messageID: string,
    params: LabelCreateParams,
    options?: RequestOptions,
  ): APIPromise<LabelCreateResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/messages/${messageID}/labels`, {
      body,
      ...options,
    });
  }
}

/**
 * Labels to add or remove. Both operations are idempotent set operations, so a
 * retried request converges instead of failing.
 */
export interface LabelMutationRequest {
  /**
   * One or more labels. Each label is a freeform, case-sensitive string of at most
   * 255 characters; a message or thread may carry at most 50 labels. The `telnyx:`
   * prefix is a reserved system namespace and is rejected on customer writes.
   */
  labels: Array<string>;
}

export interface LabelCreateResponse {
  data: WebhooksAPI.InboundMessage;
}

export interface LabelDeleteAllResponse {
  data: WebhooksAPI.InboundMessage;
}

export interface LabelDeleteAllParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param: One or more labels. Each label is a freeform, case-sensitive string
   * of at most 255 characters; a message or thread may carry at most 50 labels. The
   * `telnyx:` prefix is a reserved system namespace and is rejected on customer
   * writes.
   */
  labels: Array<string>;
}

export interface LabelCreateParams {
  /**
   * Path param: Email inbox UUID.
   */
  inbox_id: string;

  /**
   * Body param: One or more labels. Each label is a freeform, case-sensitive string
   * of at most 255 characters; a message or thread may carry at most 50 labels. The
   * `telnyx:` prefix is a reserved system namespace and is rejected on customer
   * writes.
   */
  labels: Array<string>;
}

export declare namespace Labels {
  export {
    type LabelMutationRequest as LabelMutationRequest,
    type LabelCreateResponse as LabelCreateResponse,
    type LabelDeleteAllResponse as LabelDeleteAllResponse,
    type LabelDeleteAllParams as LabelDeleteAllParams,
    type LabelCreateParams as LabelCreateParams,
  };
}
