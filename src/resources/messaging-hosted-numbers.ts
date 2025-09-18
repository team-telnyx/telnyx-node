// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessagingHostedNumbers extends APIResource {
  /**
   * Delete a messaging hosted number
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingHostedNumberDeleteResponse> {
    return this._client.delete(path`/messaging_hosted_numbers/${id}`, options);
  }
}

export interface MessagingHostedNumberDeleteResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export declare namespace MessagingHostedNumbers {
  export { type MessagingHostedNumberDeleteResponse as MessagingHostedNumberDeleteResponse };
}
