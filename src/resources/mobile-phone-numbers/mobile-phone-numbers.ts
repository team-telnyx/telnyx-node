// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagingAPI from './messaging';
import {
  Messaging,
  MessagingListParams,
  MessagingListResponse,
  MessagingRetrieveResponse,
} from './messaging';
import { APIPromise } from '../../core/api-promise';
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
  ): APIPromise<MobilePhoneNumberListResponse> {
    return this._client.get('/v2/mobile_phone_numbers', { query, ...options });
  }
}

export interface MobilePhoneNumberRetrieveResponse {
  data?: MobilePhoneNumberRetrieveResponse.Data;
}

export namespace MobilePhoneNumberRetrieveResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    call_forwarding?: Data.CallForwarding;

    call_recording?: Data.CallRecording;

    /**
     * Indicates if caller ID name is enabled.
     */
    caller_id_name_enabled?: boolean;

    cnam_listing?: Data.CnamListing;

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

    inbound?: Data.Inbound;

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

    outbound?: Data.Outbound;

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

  export namespace Data {
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
}

export interface MobilePhoneNumberUpdateResponse {
  data?: MobilePhoneNumberUpdateResponse.Data;
}

export namespace MobilePhoneNumberUpdateResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    call_forwarding?: Data.CallForwarding;

    call_recording?: Data.CallRecording;

    /**
     * Indicates if caller ID name is enabled.
     */
    caller_id_name_enabled?: boolean;

    cnam_listing?: Data.CnamListing;

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

    inbound?: Data.Inbound;

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

    outbound?: Data.Outbound;

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

  export namespace Data {
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
}

export interface MobilePhoneNumberListResponse {
  data?: Array<MobilePhoneNumberListResponse.Data>;

  meta?: MobilePhoneNumberListResponse.Meta;
}

export namespace MobilePhoneNumberListResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    call_forwarding?: Data.CallForwarding;

    call_recording?: Data.CallRecording;

    /**
     * Indicates if caller ID name is enabled.
     */
    caller_id_name_enabled?: boolean;

    cnam_listing?: Data.CnamListing;

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

    inbound?: Data.Inbound;

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

    outbound?: Data.Outbound;

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

  export namespace Data {
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

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
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

export interface MobilePhoneNumberListParams {
  /**
   * The page number to load
   */
  'page[number]'?: number;

  /**
   * The size of the page
   */
  'page[size]'?: number;
}

MobilePhoneNumbers.Messaging = Messaging;

export declare namespace MobilePhoneNumbers {
  export {
    type MobilePhoneNumberRetrieveResponse as MobilePhoneNumberRetrieveResponse,
    type MobilePhoneNumberUpdateResponse as MobilePhoneNumberUpdateResponse,
    type MobilePhoneNumberListResponse as MobilePhoneNumberListResponse,
    type MobilePhoneNumberUpdateParams as MobilePhoneNumberUpdateParams,
    type MobilePhoneNumberListParams as MobilePhoneNumberListParams,
  };

  export {
    Messaging as Messaging,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingListParams as MessagingListParams,
  };
}
