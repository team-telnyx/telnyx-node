// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagingAPI from './messaging';
import {
  Messaging,
  MessagingListParams,
  MessagingListResponse,
  MessagingListResponsesDefaultFlatPagination,
  MessagingRetrieveResponse,
} from './messaging';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MobilePhoneNumbers extends APIResource {
  messaging: MessagingAPI.Messaging = new MessagingAPI.Messaging(this._client);

  /**
   * Retrieve a Mobile Phone Number
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MobilePhoneNumberRetrieveResponse> {
    return this._client.get(path`/v2/mobile_phone_numbers/${id}`, options);
  }

  /**
   * Update a Mobile Phone Number
   */
  update(
    id: string,
    body: MobilePhoneNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MobilePhoneNumberUpdateResponse> {
    return this._client.patch(path`/v2/mobile_phone_numbers/${id}`, { body, ...options });
  }

  /**
   * List Mobile Phone Numbers
   */
  list(
    query: MobilePhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MobilePhoneNumbersDefaultFlatPagination, MobilePhoneNumber> {
    return this._client.getAPIList('/v2/mobile_phone_numbers', DefaultFlatPagination<MobilePhoneNumber>, {
      query,
      ...options,
    });
  }
}

export type MobilePhoneNumbersDefaultFlatPagination = DefaultFlatPagination<MobilePhoneNumber>;

export interface MobilePhoneNumber {
  /**
   * Identifies the resource.
   */
  id?: string;

  call_forwarding?: MobilePhoneNumber.CallForwarding;

  call_recording?: MobilePhoneNumber.CallRecording;

  /**
   * Indicates if caller ID name is enabled.
   */
  caller_id_name_enabled?: boolean;

  cnam_listing?: MobilePhoneNumber.CnamListing;

  /**
   * The ID of the connection associated with this number.
   */
  connection_id?: string | null;

  /**
   * The name of the connection.
   */
  connection_name?: string | null;

  /**
   * The type of the connection.
   */
  connection_type?: string | null;

  /**
   * The ISO 3166-1 alpha-2 country code of the number.
   */
  country_iso_alpha2?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A customer reference string.
   */
  customer_reference?: string | null;

  inbound?: MobilePhoneNumber.Inbound;

  /**
   * The inbound call screening setting.
   */
  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls' | null;

  /**
   * Indicates if mobile voice is enabled.
   */
  mobile_voice_enabled?: boolean;

  /**
   * The noise suppression setting.
   */
  noise_suppression?: 'inbound' | 'outbound' | 'both' | 'disabled';

  outbound?: MobilePhoneNumber.Outbound;

  /**
   * The +E.164-formatted phone number.
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The ID of the SIM card associated with this number.
   */
  sim_card_id?: string;

  /**
   * The status of the phone number.
   */
  status?: string;

  /**
   * A list of tags associated with the number.
   */
  tags?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace MobilePhoneNumber {
  export interface CallForwarding {
    call_forwarding_enabled?: boolean;

    forwarding_type?: 'always' | 'on-failure' | null;

    forwards_to?: string | null;
  }

  export interface CallRecording {
    inbound_call_recording_channels?: 'single' | 'dual';

    inbound_call_recording_enabled?: boolean;

    inbound_call_recording_format?: 'wav' | 'mp3';
  }

  export interface CnamListing {
    cnam_listing_details?: string | null;

    cnam_listing_enabled?: boolean;
  }

  export interface Inbound {
    /**
     * The ID of the app that will intercept inbound calls.
     */
    interception_app_id?: string | null;

    /**
     * The name of the app that will intercept inbound calls.
     */
    interception_app_name?: string | null;
  }

  export interface Outbound {
    /**
     * The ID of the app that will intercept outbound calls.
     */
    interception_app_id?: string | null;

    /**
     * The name of the app that will intercept outbound calls.
     */
    interception_app_name?: string | null;
  }
}

export interface MobilePhoneNumberRetrieveResponse {
  data?: MobilePhoneNumber;
}

export interface MobilePhoneNumberUpdateResponse {
  data?: MobilePhoneNumber;
}

export interface MobilePhoneNumberUpdateParams {
  call_forwarding?: MobilePhoneNumberUpdateParams.CallForwarding;

  call_recording?: MobilePhoneNumberUpdateParams.CallRecording;

  caller_id_name_enabled?: boolean;

  cnam_listing?: MobilePhoneNumberUpdateParams.CnamListing;

  connection_id?: string | null;

  customer_reference?: string | null;

  inbound?: MobilePhoneNumberUpdateParams.Inbound;

  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls';

  noise_suppression?: boolean;

  outbound?: MobilePhoneNumberUpdateParams.Outbound;

  tags?: Array<string>;
}

export namespace MobilePhoneNumberUpdateParams {
  export interface CallForwarding {
    call_forwarding_enabled?: boolean;

    forwarding_type?: 'always' | 'on-failure' | null;

    forwards_to?: string | null;
  }

  export interface CallRecording {
    inbound_call_recording_channels?: 'single' | 'dual';

    inbound_call_recording_enabled?: boolean;

    inbound_call_recording_format?: 'wav' | 'mp3';
  }

  export interface CnamListing {
    cnam_listing_details?: string | null;

    cnam_listing_enabled?: boolean;
  }

  export interface Inbound {
    /**
     * The ID of the CallControl or TeXML Application that will intercept inbound
     * calls.
     */
    interception_app_id?: string | null;
  }

  export interface Outbound {
    /**
     * The ID of the CallControl or TeXML Application that will intercept outbound
     * calls.
     */
    interception_app_id?: string | null;
  }
}

export interface MobilePhoneNumberListParams extends DefaultFlatPaginationParams {}

MobilePhoneNumbers.Messaging = Messaging;

export declare namespace MobilePhoneNumbers {
  export {
    type MobilePhoneNumber as MobilePhoneNumber,
    type MobilePhoneNumberRetrieveResponse as MobilePhoneNumberRetrieveResponse,
    type MobilePhoneNumberUpdateResponse as MobilePhoneNumberUpdateResponse,
    type MobilePhoneNumbersDefaultFlatPagination as MobilePhoneNumbersDefaultFlatPagination,
    type MobilePhoneNumberUpdateParams as MobilePhoneNumberUpdateParams,
    type MobilePhoneNumberListParams as MobilePhoneNumberListParams,
  };

  export {
    Messaging as Messaging,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingListResponsesDefaultFlatPagination as MessagingListResponsesDefaultFlatPagination,
    type MessagingListParams as MessagingListParams,
  };
}
