// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { PhoneNumberWithVoiceSettingsDefaultFlatPagination } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Voice extends APIResource {
  /**
   * Retrieve a phone number with voice settings
   *
   * @example
   * ```ts
   * const voice = await client.phoneNumbers.voice.retrieve(
   *   '1293384261075731499',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VoiceRetrieveResponse> {
    return this._client.get(path`/phone_numbers/${id}/voice`, options);
  }

  /**
   * Update a phone number with voice settings
   *
   * @example
   * ```ts
   * const voice = await client.phoneNumbers.voice.update(
   *   '1293384261075731499',
   * );
   * ```
   */
  update(id: string, body: VoiceUpdateParams, options?: RequestOptions): APIPromise<VoiceUpdateResponse> {
    return this._client.patch(path`/phone_numbers/${id}/voice`, { body, ...options });
  }

  /**
   * List phone numbers with voice settings
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberWithVoiceSettings of client.phoneNumbers.voice.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberWithVoiceSettingsDefaultFlatPagination, ActionsAPI.PhoneNumberWithVoiceSettings> {
    return this._client.getAPIList(
      '/phone_numbers/voice',
      DefaultFlatPagination<ActionsAPI.PhoneNumberWithVoiceSettings>,
      { query, ...options },
    );
  }
}

/**
 * The call forwarding settings for a phone number.
 */
export interface CallForwarding {
  /**
   * Indicates if call forwarding will be enabled for this number if forwards_to and
   * forwarding_type are filled in. Defaults to true for backwards compatibility with
   * APIV1 use of numbers endpoints.
   */
  call_forwarding_enabled?: boolean;

  /**
   * Call forwarding type. 'forwards_to' must be set for this to have an effect.
   */
  forwarding_type?: 'always' | 'on-failure';

  /**
   * The phone number to which inbound calls to this number are forwarded. Inbound
   * calls will not be forwarded if this field is left blank. If set, must be a
   * +E.164-formatted phone number.
   */
  forwards_to?: string;
}

/**
 * The call recording settings for a phone number.
 */
export interface CallRecording {
  /**
   * When using 'dual' channels, final audio file will be stereo recorded with the
   * first leg on channel A, and the rest on channel B.
   */
  inbound_call_recording_channels?: 'single' | 'dual';

  /**
   * When enabled, any inbound call to this number will be recorded.
   */
  inbound_call_recording_enabled?: boolean;

  /**
   * The audio file format for calls being recorded.
   */
  inbound_call_recording_format?: 'wav' | 'mp3';
}

/**
 * The CNAM listing settings for a phone number.
 */
export interface CnamListing {
  /**
   * The CNAM listing details for this number. Must be alphanumeric characters or
   * spaces with a maximum length of 15. Requires cnam_listing_enabled to also be set
   * to true.
   */
  cnam_listing_details?: string;

  /**
   * Enables CNAM listings for this number. Requires cnam_listing_details to also be
   * set.
   */
  cnam_listing_enabled?: boolean;
}

/**
 * The media features settings for a phone number.
 */
export interface MediaFeatures {
  /**
   * When enabled, Telnyx will accept RTP packets from any customer-side IP address
   * and port, not just those to which Telnyx is sending RTP.
   */
  accept_any_rtp_packets_enabled?: boolean;

  /**
   * When RTP Auto-Adjust is enabled, the destination RTP address port will be
   * automatically changed to match the source of the incoming RTP packets.
   */
  rtp_auto_adjust_enabled?: boolean;

  /**
   * Controls whether Telnyx will accept a T.38 re-INVITE for this phone number. Note
   * that Telnyx will not send a T.38 re-INVITE; this option only controls whether
   * one will be accepted.
   */
  t38_fax_gateway_enabled?: boolean;
}

export interface UpdateVoiceSettings {
  /**
   * The call forwarding settings for a phone number.
   */
  call_forwarding?: CallForwarding;

  /**
   * The call recording settings for a phone number.
   */
  call_recording?: CallRecording;

  /**
   * Controls whether the caller ID name is enabled for this phone number.
   */
  caller_id_name_enabled?: boolean;

  /**
   * The CNAM listing settings for a phone number.
   */
  cnam_listing?: CnamListing;

  /**
   * The inbound_call_screening setting is a phone number configuration option
   * variable that allows users to configure their settings to block or flag
   * fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This
   * feature has an additional per-number monthly cost associated with it.
   */
  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls';

  /**
   * The media features settings for a phone number.
   */
  media_features?: MediaFeatures;

  /**
   * Controls whether a tech prefix is enabled for this phone number.
   */
  tech_prefix_enabled?: boolean;

  /**
   * This field allows you to rewrite the destination number of an inbound call
   * before the call is routed to you. The value of this field may be any
   * alphanumeric value, and the value will replace the number originally dialed.
   */
  translated_number?: string;

  /**
   * Controls whether a number is billed per minute or uses your concurrent channels.
   */
  usage_payment_method?: 'pay-per-minute' | 'channel';
}

export interface VoiceRetrieveResponse {
  data?: ActionsAPI.PhoneNumberWithVoiceSettings;
}

export interface VoiceUpdateResponse {
  data?: ActionsAPI.PhoneNumberWithVoiceSettings;
}

export interface VoiceUpdateParams {
  /**
   * The call forwarding settings for a phone number.
   */
  call_forwarding?: CallForwarding;

  /**
   * The call recording settings for a phone number.
   */
  call_recording?: CallRecording;

  /**
   * Controls whether the caller ID name is enabled for this phone number.
   */
  caller_id_name_enabled?: boolean;

  /**
   * The CNAM listing settings for a phone number.
   */
  cnam_listing?: CnamListing;

  /**
   * The inbound_call_screening setting is a phone number configuration option
   * variable that allows users to configure their settings to block or flag
   * fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This
   * feature has an additional per-number monthly cost associated with it.
   */
  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls';

  /**
   * The media features settings for a phone number.
   */
  media_features?: MediaFeatures;

  /**
   * Controls whether a tech prefix is enabled for this phone number.
   */
  tech_prefix_enabled?: boolean;

  /**
   * This field allows you to rewrite the destination number of an inbound call
   * before the call is routed to you. The value of this field may be any
   * alphanumeric value, and the value will replace the number originally dialed.
   */
  translated_number?: string;

  /**
   * Controls whether a number is billed per minute or uses your concurrent channels.
   */
  usage_payment_method?: 'pay-per-minute' | 'channel';
}

export interface VoiceListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[connection_name], filter[customer_reference],
   * filter[voice.usage_payment_method]
   */
  filter?: VoiceListParams.Filter;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * created_at in descending order.
   */
  sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method';
}

export namespace VoiceListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[connection_name], filter[customer_reference],
   * filter[voice.usage_payment_method]
   */
  export interface Filter {
    /**
     * Filter by connection name pattern matching.
     */
    connection_name?: Filter.ConnectionName;

    /**
     * Filter numbers via the customer_reference set.
     */
    customer_reference?: string;

    /**
     * Filter by phone number. Requires at least three digits. Non-numerical characters
     * will result in no values being returned.
     */
    phone_number?: string;

    /**
     * Filter by usage_payment_method.
     */
    'voice.usage_payment_method'?: 'pay-per-minute' | 'channel';
  }

  export namespace Filter {
    /**
     * Filter by connection name pattern matching.
     */
    export interface ConnectionName {
      /**
       * Filter contains connection name. Requires at least three characters.
       */
      contains?: string;
    }
  }
}

export declare namespace Voice {
  export {
    type CallForwarding as CallForwarding,
    type CallRecording as CallRecording,
    type CnamListing as CnamListing,
    type MediaFeatures as MediaFeatures,
    type UpdateVoiceSettings as UpdateVoiceSettings,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceUpdateResponse as VoiceUpdateResponse,
    type VoiceUpdateParams as VoiceUpdateParams,
    type VoiceListParams as VoiceListParams,
  };
}

export { type PhoneNumberWithVoiceSettingsDefaultFlatPagination };
