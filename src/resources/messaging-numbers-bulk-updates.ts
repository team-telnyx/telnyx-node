// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessagingNumbersBulkUpdates extends APIResource {
  /**
   * Bulk update phone number profiles
   *
   * @example
   * ```ts
   * const messagingNumbersBulkUpdate =
   *   await client.messagingNumbersBulkUpdates.create({
   *     messaging_profile_id:
   *       '00000000-0000-0000-0000-000000000000',
   *     numbers: [
   *       '+18880000000',
   *       '+18880000001',
   *       '+18880000002',
   *     ],
   *   });
   * ```
   */
  create(
    body: MessagingNumbersBulkUpdateCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingNumbersBulkUpdateCreateResponse> {
    return this._client.post('/messaging_numbers_bulk_updates', { body, ...options });
  }

  /**
   * Retrieve bulk update status
   *
   * @example
   * ```ts
   * const messagingNumbersBulkUpdate =
   *   await client.messagingNumbersBulkUpdates.retrieve(
   *     'order_id',
   *   );
   * ```
   */
  retrieve(
    orderID: string,
    options?: RequestOptions,
  ): APIPromise<MessagingNumbersBulkUpdateRetrieveResponse> {
    return this._client.get(path`/messaging_numbers_bulk_updates/${orderID}`, options);
  }
}

export interface MessagingNumbersBulkUpdateCreateResponse {
  data?: MessagingNumbersBulkUpdateCreateResponse.Data;
}

export namespace MessagingNumbersBulkUpdateCreateResponse {
  export interface Data {
    /**
     * Phone numbers that failed to update.
     */
    failed?: Array<string>;

    /**
     * Order ID to verify bulk update status.
     */
    order_id?: string;

    /**
     * Phone numbers pending to be updated.
     */
    pending?: Array<string>;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'messaging_numbers_bulk_update';

    /**
     * Phoned numbers updated successfully.
     */
    success?: Array<string>;
  }
}

export interface MessagingNumbersBulkUpdateRetrieveResponse {
  data?: MessagingNumbersBulkUpdateRetrieveResponse.Data;
}

export namespace MessagingNumbersBulkUpdateRetrieveResponse {
  export interface Data {
    /**
     * Phone numbers that failed to update.
     */
    failed?: Array<string>;

    /**
     * Order ID to verify bulk update status.
     */
    order_id?: string;

    /**
     * Phone numbers pending to be updated.
     */
    pending?: Array<string>;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'messaging_numbers_bulk_update';

    /**
     * Phoned numbers updated successfully.
     */
    success?: Array<string>;
  }
}

export interface MessagingNumbersBulkUpdateCreateParams {
  /**
   * Configure the messaging profile these phone numbers are assigned to:
   *
   * - Set this field to `""` to unassign each number from their respective messaging
   *   profile
   * - Set this field to a quoted UUID of a messaging profile to assign these numbers
   *   to that messaging profile
   */
  messaging_profile_id: string;

  /**
   * The list of phone numbers to update.
   */
  numbers: Array<string>;
}

export declare namespace MessagingNumbersBulkUpdates {
  export {
    type MessagingNumbersBulkUpdateCreateResponse as MessagingNumbersBulkUpdateCreateResponse,
    type MessagingNumbersBulkUpdateRetrieveResponse as MessagingNumbersBulkUpdateRetrieveResponse,
    type MessagingNumbersBulkUpdateCreateParams as MessagingNumbersBulkUpdateCreateParams,
  };
}
