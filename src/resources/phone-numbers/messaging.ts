// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { PhoneNumberWithMessagingSettingsDefaultFlatPagination } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberWithMessagingSettings of client.phoneNumbers.messaging.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    PhoneNumberWithMessagingSettingsDefaultFlatPagination,
    Shared.PhoneNumberWithMessagingSettings
  > {
    return this._client.getAPIList(
      '/phone_numbers/messaging',
      DefaultFlatPagination<Shared.PhoneNumberWithMessagingSettings>,
      { query, ...options },
    );
  }
}

export interface MessagingRetrieveResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
}

export interface MessagingUpdateResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
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

export interface MessagingListParams extends DefaultFlatPaginationParams {}

export declare namespace Messaging {
  export {
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingUpdateResponse as MessagingUpdateResponse,
    type MessagingUpdateParams as MessagingUpdateParams,
    type MessagingListParams as MessagingListParams,
  };
}

export { type PhoneNumberWithMessagingSettingsDefaultFlatPagination };
