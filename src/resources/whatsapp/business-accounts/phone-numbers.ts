// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * List phone numbers for a WABA
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberListResponse of client.whatsapp.businessAccounts.phoneNumbers.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(id: string, query: PhoneNumberListParams | null | undefined = {}, options?: RequestOptions): PagePromise<PhoneNumberListResponsesDefaultFlatPagination, PhoneNumberListResponse> {
    return this._client.getAPIList(path`/v2/whatsapp/business_accounts/${id}/phone_numbers`, DefaultFlatPagination<PhoneNumberListResponse>, { query, ...options });
  }

  /**
   * Initialize Whatsapp phone number verification
   *
   * @example
   * ```ts
   * await client.whatsapp.businessAccounts.phoneNumbers.initializeVerification(
   *   'id',
   *   {
   *     display_name: 'display_name',
   *     phone_number: 'phone_number',
   *   },
   * );
   * ```
   */
  initializeVerification(id: string, body: PhoneNumberInitializeVerificationParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/whatsapp/business_accounts/${id}/phone_numbers`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export type PhoneNumberListResponsesDefaultFlatPagination = DefaultFlatPagination<PhoneNumberListResponse>

export interface PhoneNumberListResponse {
  calling_enabled?: boolean;

  created_at?: string;

  display_name?: string;

  enabled?: boolean;

  /**
   * Phone number in E164 format
   */
  phone_number?: string;

  /**
   * Whatsapp phone number ID
   */
  phone_number_id?: string;

  /**
   * Whatsapp quality rating
   */
  quality_rating?: string;

  record_type?: string;

  status?: string;

  /**
   * User ID
   */
  user_id?: string;

  /**
   * WABA ID of Whatsapp business account
   */
  waba_id?: string;
}

export interface PhoneNumberListParams extends DefaultFlatPaginationParams {
}

export interface PhoneNumberInitializeVerificationParams {
  display_name: string;

  phone_number: string;

  language?: string;

  verification_method?: 'sms' | 'voice';
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberInitializeVerificationParams as PhoneNumberInitializeVerificationParams
  };
}
