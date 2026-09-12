// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * for await (const phoneNumberListResponse of client.whatsapp.businessAccounts.phoneNumbers.list(
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
  ): PagePromise<PhoneNumberListResponsesDefaultFlatPagination, PhoneNumberListResponse> {
    return this._client.getAPIList(
      path`/v2/whatsapp/business_accounts/${id}/phone_numbers`,
      DefaultFlatPagination<PhoneNumberListResponse>,
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

export type PhoneNumberListResponsesDefaultFlatPagination = DefaultFlatPagination<PhoneNumberListResponse>;

export interface PhoneNumberListResponse {
  calling_enabled?: boolean;

  /**
   * Current lifecycle state for a coexistence number. This is null for a standard
   * Cloud API number.
   */
  coexistence_state?:
    | 'pending_onboarding'
    | 'sync_pending'
    | 'syncing'
    | 'sync_complete'
    | 'active'
    | 'history_declined'
    | 'sync_deadline_expired'
    | 'offboarded'
    | 'disconnected'
    | null;

  created_at?: string;

  display_name?: string;

  enabled?: boolean;

  /**
   * Indicates whether the number is connected to both the WhatsApp Business app and
   * Cloud API through WhatsApp Coexistence.
   */
  is_on_biz_app?: boolean;

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
   * Deadline for initiating the current coexistence synchronization cycle. This is
   * null when no deadline applies.
   */
  sync_deadline?: string | null;

  /**
   * Synchronization progress. This object is returned only while a coexistence
   * number is synchronizing.
   */
  sync_progress?: PhoneNumberListResponse.SyncProgress | null;

  /**
   * User ID
   */
  user_id?: string;

  /**
   * WABA ID of Whatsapp business account
   */
  waba_id?: string;
}

export namespace PhoneNumberListResponse {
  /**
   * Synchronization progress. This object is returned only while a coexistence
   * number is synchronizing.
   */
  export interface SyncProgress {
    contacts_status?: string;

    history_chunk_order?: number | null;

    history_phase?: number | null;

    history_progress?: number | null;

    history_status?: string;
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
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberInitializeVerificationParams as PhoneNumberInitializeVerificationParams,
  };
}
