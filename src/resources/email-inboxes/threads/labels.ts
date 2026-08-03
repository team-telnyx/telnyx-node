// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage agent inboxes, retrieve inbound messages and threads, and reply to or forward messages.
 */
export class Labels extends APIResource {
  /**
   * Removes one or more labels from a thread. Idempotent — removing a label the
   * thread does not carry is a no-op and still returns 200.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailInboxes.threads.labels.deleteAll(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       labels: ['needs_review'],
   *     },
   *   );
   * ```
   */
  deleteAll(
    threadID: string,
    params: LabelDeleteAllParams,
    options?: RequestOptions,
  ): APIPromise<LabelDeleteAllResponse> {
    const { inbox_id, ...body } = params;
    return this._client.delete(path`/email_inboxes/${inbox_id}/threads/${threadID}/labels`, {
      body,
      ...options,
    });
  }

  /**
   * Adds one or more mutable labels to a thread, letting an agent mark a whole
   * conversation (for example `needs_review`) without labelling each message
   * individually.
   *
   * Thread labels are independent of message labels: labelling a thread does not
   * label its messages, and labelling a message does not label its thread.
   * Idempotent and case-sensitive.
   *
   * @example
   * ```ts
   * const label =
   *   await client.emailInboxes.threads.labels.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       labels: ['needs_review'],
   *     },
   *   );
   * ```
   */
  create(
    threadID: string,
    params: LabelCreateParams,
    options?: RequestOptions,
  ): APIPromise<LabelCreateResponse> {
    const { inbox_id, ...body } = params;
    return this._client.post(path`/email_inboxes/${inbox_id}/threads/${threadID}/labels`, {
      body,
      ...options,
    });
  }
}

export interface LabelCreateResponse {
  data: LabelCreateResponse.Data;
}

export namespace LabelCreateResponse {
  export interface Data {
    id: string;

    labels: Array<string>;

    record_type: 'email_thread';

    inbox_id?: string;
  }
}

export interface LabelDeleteAllResponse {
  data: LabelDeleteAllResponse.Data;
}

export namespace LabelDeleteAllResponse {
  export interface Data {
    id: string;

    labels: Array<string>;

    record_type: 'email_thread';

    inbox_id?: string;
  }
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
    type LabelCreateResponse as LabelCreateResponse,
    type LabelDeleteAllResponse as LabelDeleteAllResponse,
    type LabelDeleteAllParams as LabelDeleteAllParams,
    type LabelCreateParams as LabelCreateParams,
  };
}
