// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messaging extends APIResource {
  /**
   * Retrieve a phone number with messaging settings
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.phoneNumbers.messaging.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingRetrieveResponse> {
    return this._client.get(path`/phone_numbers/${id}/messaging`, options);
  }

  /**
   * Update the messaging profile and/or messaging product of a phone number
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.phoneNumbers.messaging.update('id');
   * ```
   */
  update(
    id: string,
    body: MessagingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingUpdateResponse> {
    return this._client.patch(path`/phone_numbers/${id}/messaging`, { body, ...options });
  }

  /**
   * List phone numbers with messaging settings
   *
   * @example
   * ```ts
   * const messagings =
   *   await client.phoneNumbers.messaging.list();
   * ```
   */
  list(
    query: MessagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingListResponse> {
    return this._client.get('/phone_numbers/messaging', { query, ...options });
  }
}

export interface MessagingRetrieveResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
}

export interface MessagingUpdateResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
}

export interface MessagingListResponse {
  data?: Array<Shared.PhoneNumberWithMessagingSettings>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface MessagingUpdateParams {
  /**
   * Configure the messaging product for this number:
   *
   * - Omit this field or set its value to `null` to keep the current value.
   * - Set this field to a quoted product ID to set this phone number to that product
   */
  messaging_product?: string;

  /**
   * Configure the messaging profile this phone number is assigned to:
   *
   * - Omit this field or set its value to `null` to keep the current value.
   * - Set this field to `""` to unassign the number from its messaging profile
   * - Set this field to a quoted UUID of a messaging profile to assign this number
   *   to that messaging profile
   */
  messaging_profile_id?: string;
}

export interface MessagingListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingListParams.Page;
}

export namespace MessagingListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace Messaging {
  export {
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingUpdateResponse as MessagingUpdateResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingUpdateParams as MessagingUpdateParams,
    type MessagingListParams as MessagingListParams,
  };
}
