// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Upload hosted number document
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingHostedNumberOrders.actions.uploadFile(
   *     'id',
   *   );
   * ```
   */
  uploadFile(
    id: string,
    body: ActionUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionUploadFileResponse> {
    return this._client.post(
      path`/messaging_hosted_number_orders/${id}/actions/file_upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ActionUploadFileResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export interface ActionUploadFileParams {
  /**
   * Must be the last month's bill with proof of ownership of all of the numbers in
   * the order in PDF format.
   */
  bill?: Uploadable;

  /**
   * Must be a signed LOA for the numbers in the order in PDF format.
   */
  loa?: Uploadable;
}

export declare namespace Actions {
  export {
    type ActionUploadFileResponse as ActionUploadFileResponse,
    type ActionUploadFileParams as ActionUploadFileParams,
  };
}
