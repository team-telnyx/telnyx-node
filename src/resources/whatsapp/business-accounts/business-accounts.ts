// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  PhoneNumberCreateVerificationParams,
  PhoneNumberListParams,
  PhoneNumberListResponse,
  PhoneNumberListResponsesDefaultFlatPagination,
  PhoneNumbers,
} from './phone-numbers';
import * as SettingsAPI from './settings';
import {
  SettingRetrieveResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
  WabaSettings,
} from './settings';
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
 * Manage Whatsapp business accounts
 */
export class BusinessAccounts extends APIResource {
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Get a single Whatsapp Business Account
   *
   * @example
   * ```ts
   * const businessAccount =
   *   await client.whatsapp.businessAccounts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BusinessAccountRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp/business_accounts/${id}`, options);
  }

  /**
   * List Whatsapp Business Accounts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const businessAccountListResponse of client.whatsapp.businessAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BusinessAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BusinessAccountListResponsesDefaultFlatPagination, BusinessAccountListResponse> {
    return this._client.getAPIList(
      '/v2/whatsapp/business_accounts',
      DefaultFlatPagination<BusinessAccountListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Whatsapp Business Account
   *
   * @example
   * ```ts
   * await client.whatsapp.businessAccounts.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp/business_accounts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BusinessAccountListResponsesDefaultFlatPagination =
  DefaultFlatPagination<BusinessAccountListResponse>;

export interface BusinessAccountRetrieveResponse {
  data?: BusinessAccountRetrieveResponse.Data;
}

export namespace BusinessAccountRetrieveResponse {
  export interface Data {
    /**
     * Internal ID of Whatsapp business account
     */
    id?: string;

    /**
     * Account review status of Whatsapp business account
     */
    account_review_status?: string;

    /**
     * Business verification status of Whatsapp business account
     */
    business_verification_status?: string;

    /**
     * Country associated with Whatsapp business account
     */
    country?: string;

    created_at?: string;

    /**
     * Name of Whatsapp business account
     */
    name?: string;

    /**
     * Count of phone numbers associated with Whatsapp business account
     */
    phone_numbers_count?: number;

    record_type?: string;

    /**
     * Status of Whatsapp business account
     */
    status?: string;

    /**
     * WABA ID of Whatsapp business account
     */
    waba_id?: string;
  }
}

export interface BusinessAccountListResponse {
  /**
   * Internal ID of Whatsapp business account
   */
  id?: string;

  /**
   * Account review status of Whatsapp business account
   */
  account_review_status?: string;

  /**
   * Business verification status of Whatsapp business account
   */
  business_verification_status?: string;

  /**
   * Country associated with Whatsapp business account
   */
  country?: string;

  created_at?: string;

  /**
   * Name of Whatsapp business account
   */
  name?: string;

  /**
   * Count of phone numbers associated with Whatsapp business account
   */
  phone_numbers_count?: number;

  record_type?: string;

  /**
   * Status of Whatsapp business account
   */
  status?: string;

  /**
   * WABA ID of Whatsapp business account
   */
  waba_id?: string;
}

export interface BusinessAccountListParams extends DefaultFlatPaginationParams {}

BusinessAccounts.PhoneNumbers = PhoneNumbers;
BusinessAccounts.Settings = Settings;

export declare namespace BusinessAccounts {
  export {
    type BusinessAccountRetrieveResponse as BusinessAccountRetrieveResponse,
    type BusinessAccountListResponse as BusinessAccountListResponse,
    type BusinessAccountListResponsesDefaultFlatPagination as BusinessAccountListResponsesDefaultFlatPagination,
    type BusinessAccountListParams as BusinessAccountListParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberCreateVerificationParams as PhoneNumberCreateVerificationParams,
  };

  export {
    Settings as Settings,
    type WabaSettings as WabaSettings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
