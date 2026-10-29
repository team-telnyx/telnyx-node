// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WhatsappPhoneNumbersAPI from '../phone-numbers/phone-numbers';
import { WhatsappPhoneResponsesDefaultFlatPagination } from '../phone-numbers/phone-numbers';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * Returns phone numbers registered under the specified WhatsApp Business Account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const whatsappPhoneResponse of client.whatsapp.businessAccounts.phoneNumbers.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WhatsappPhoneResponsesDefaultFlatPagination, WhatsappPhoneNumbersAPI.WhatsappPhoneResponse> {
    return this._client.getAPIList(
      path`/v2/whatsapp/business_accounts/${id}/phone_numbers`,
      DefaultFlatPagination<WhatsappPhoneNumbersAPI.WhatsappPhoneResponse>,
      { query, ...options },
    );
  }

  /**
   * Starts verification of a phone number for the specified WhatsApp Business
   * Account using the requested verification method.
   *
   * @example
   * ```ts
   * await client.whatsapp.businessAccounts.phoneNumbers.initializeVerification(
   *   'id',
   *   {
   *     display_name: 'string',
   *     phone_number: 'string',
   *     language: 'en_US',
   *     verification_method: 'sms',
   *   },
   * );
   * ```
   */
  initializeVerification(
    id: string,
    body: PhoneNumberInitializeVerificationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v2/whatsapp/business_accounts/${id}/phone_numbers`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PhoneNumberListParams extends DefaultFlatPaginationParams {}

export interface PhoneNumberInitializeVerificationParams {
  display_name: string;

  phone_number: string;

  language?: string;

  verification_method?: 'sms' | 'voice';
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberInitializeVerificationParams as PhoneNumberInitializeVerificationParams,
  };
}

export { type WhatsappPhoneResponsesDefaultFlatPagination };
