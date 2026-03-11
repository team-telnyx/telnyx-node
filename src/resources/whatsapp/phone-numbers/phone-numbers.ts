// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallingSettingsAPI from './calling-settings';
import {
  CallingSettingRetrieveResponse,
  CallingSettingUpdateParams,
  CallingSettingUpdateResponse,
  CallingSettings,
  WhatsappCallingSettingsData,
} from './calling-settings';
import * as ProfileAPI from './profile/profile';
import {
  Profile,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
  WhatsappProfileData,
} from './profile/profile';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class PhoneNumbers extends APIResource {
  callingSettings: CallingSettingsAPI.CallingSettings = new CallingSettingsAPI.CallingSettings(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);

  /**
   * List Whatsapp phone numbers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberListResponse of client.whatsapp.phoneNumbers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberListResponsesDefaultFlatPagination, PhoneNumberListResponse> {
    return this._client.getAPIList(
      '/v2/whatsapp/phone_numbers',
      DefaultFlatPagination<PhoneNumberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Whatsapp phone number
   *
   * @example
   * ```ts
   * await client.whatsapp.phoneNumbers.delete('phone_number');
   * ```
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp/phone_numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resend verification code
   *
   * @example
   * ```ts
   * await client.whatsapp.phoneNumbers.resendVerification(
   *   'phone_number',
   * );
   * ```
   */
  resendVerification(
    phoneNumber: string,
    body: PhoneNumberResendVerificationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v2/whatsapp/phone_numbers/${phoneNumber}/resend_verification`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Submit verification code for a phone number
   *
   * @example
   * ```ts
   * await client.whatsapp.phoneNumbers.verify('phone_number', {
   *   code: 'code',
   * });
   * ```
   */
  verify(phoneNumber: string, body: PhoneNumberVerifyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/whatsapp/phone_numbers/${phoneNumber}/verify`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PhoneNumberListResponsesDefaultFlatPagination = DefaultFlatPagination<PhoneNumberListResponse>;

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

export interface PhoneNumberListParams extends DefaultFlatPaginationParams {}

export interface PhoneNumberResendVerificationParams {
  verification_method?: 'sms' | 'voice';
}

export interface PhoneNumberVerifyParams {
  code: string;
}

PhoneNumbers.CallingSettings = CallingSettings;
PhoneNumbers.Profile = Profile;

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberResendVerificationParams as PhoneNumberResendVerificationParams,
    type PhoneNumberVerifyParams as PhoneNumberVerifyParams,
  };

  export {
    CallingSettings as CallingSettings,
    type WhatsappCallingSettingsData as WhatsappCallingSettingsData,
    type CallingSettingRetrieveResponse as CallingSettingRetrieveResponse,
    type CallingSettingUpdateResponse as CallingSettingUpdateResponse,
    type CallingSettingUpdateParams as CallingSettingUpdateParams,
  };

  export {
    Profile as Profile,
    type WhatsappProfileData as WhatsappProfileData,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
