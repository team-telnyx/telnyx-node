// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { PhoneNumberWithMessagingSettingsDefaultFlatPagination } from './shared';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessagingHostedNumbers extends APIResource {
  /**
   * Retrieve a specific messaging hosted number by its ID or phone number.
   *
   * @example
   * ```ts
   * const messagingHostedNumber =
   *   await client.messagingHostedNumbers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingHostedNumberRetrieveResponse> {
    return this._client.get(path`/messaging_hosted_numbers/${id}`, options);
  }

  /**
   * Update the messaging settings for a hosted number.
   *
   * @example
   * ```ts
   * const messagingHostedNumber =
   *   await client.messagingHostedNumbers.update('id');
   * ```
   */
  update(
    id: string,
    body: MessagingHostedNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingHostedNumberUpdateResponse> {
    return this._client.patch(path`/messaging_hosted_numbers/${id}`, { body, ...options });
  }

  /**
   * List all hosted numbers associated with the authenticated user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberWithMessagingSettings of client.messagingHostedNumbers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessagingHostedNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    PhoneNumberWithMessagingSettingsDefaultFlatPagination,
    Shared.PhoneNumberWithMessagingSettings
  > {
    return this._client.getAPIList(
      '/messaging_hosted_numbers',
      DefaultFlatPagination<Shared.PhoneNumberWithMessagingSettings>,
      { query, ...options },
    );
  }

  /**
   * Delete a messaging hosted number
   *
   * @example
   * ```ts
   * const messagingHostedNumber =
   *   await client.messagingHostedNumbers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingHostedNumberDeleteResponse> {
    return this._client.delete(path`/messaging_hosted_numbers/${id}`, options);
  }
}

export interface MessagingHostedNumberRetrieveResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
}

export interface MessagingHostedNumberUpdateResponse {
  data?: Shared.PhoneNumberWithMessagingSettings;
}

export interface MessagingHostedNumberDeleteResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export interface MessagingHostedNumberUpdateParams {
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

  /**
   * Tags to set on this phone number.
   */
  tags?: Array<string>;
}

export interface MessagingHostedNumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by messaging profile ID.
   */
  'filter[messaging_profile_id]'?: string;

  /**
   * Filter by exact phone number.
   */
  'filter[phone_number]'?: string;

  /**
   * Filter by phone number substring.
   */
  'filter[phone_number][contains]'?: string;

  /**
   * Sort by phone number.
   */
  'sort[phone_number]'?: 'asc' | 'desc';
}

export declare namespace MessagingHostedNumbers {
  export {
    type MessagingHostedNumberRetrieveResponse as MessagingHostedNumberRetrieveResponse,
    type MessagingHostedNumberUpdateResponse as MessagingHostedNumberUpdateResponse,
    type MessagingHostedNumberDeleteResponse as MessagingHostedNumberDeleteResponse,
    type MessagingHostedNumberUpdateParams as MessagingHostedNumberUpdateParams,
    type MessagingHostedNumberListParams as MessagingHostedNumberListParams,
  };
}

export { type PhoneNumberWithMessagingSettingsDefaultFlatPagination };
