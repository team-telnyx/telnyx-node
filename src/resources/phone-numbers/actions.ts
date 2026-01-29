// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VoiceAPI from './voice';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Change the bundle status for a phone number (set to being in a bundle or remove
   * from a bundle)
   *
   * @example
   * ```ts
   * const response =
   *   await client.phoneNumbers.actions.changeBundleStatus(
   *     '1293384261075731499',
   *     { bundle_id: '5194d8fc-87e6-4188-baa9-1c434bbe861b' },
   *   );
   * ```
   */
  changeBundleStatus(
    id: string,
    body: ActionChangeBundleStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionChangeBundleStatusResponse> {
    return this._client.patch(path`/phone_numbers/${id}/actions/bundle_status_change`, { body, ...options });
  }

  /**
   * Enable emergency for a phone number
   *
   * @example
   * ```ts
   * const response =
   *   await client.phoneNumbers.actions.enableEmergency(
   *     '1293384261075731499',
   *     {
   *       emergency_address_id: '53829456729313',
   *       emergency_enabled: true,
   *     },
   *   );
   * ```
   */
  enableEmergency(
    id: string,
    body: ActionEnableEmergencyParams,
    options?: RequestOptions,
  ): APIPromise<ActionEnableEmergencyResponse> {
    return this._client.post(path`/phone_numbers/${id}/actions/enable_emergency`, { body, ...options });
  }

  /**
   * Verifies ownership of the provided phone numbers and returns a mapping of
   * numbers to their IDs, plus a list of numbers not found in the account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.phoneNumbers.actions.verifyOwnership({
   *     phone_numbers: ['+15551234567'],
   *   });
   * ```
   */
  verifyOwnership(
    body: ActionVerifyOwnershipParams,
    options?: RequestOptions,
  ): APIPromise<ActionVerifyOwnershipResponse> {
    return this._client.post('/phone_numbers/actions/verify_ownership', { body, ...options });
  }
}

export type PhoneNumberWithVoiceSettingsDefaultFlatPagination =
  DefaultFlatPagination<PhoneNumberWithVoiceSettings>;

export interface PhoneNumberWithVoiceSettings {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The call forwarding settings for a phone number.
   */
  call_forwarding?: VoiceAPI.CallForwarding;

  /**
   * The call recording settings for a phone number.
   */
  call_recording?: VoiceAPI.CallRecording;

  /**
   * The CNAM listing settings for a phone number.
   */
  cnam_listing?: VoiceAPI.CnamListing;

  /**
   * Identifies the connection associated with this phone number.
   */
  connection_id?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * The emergency services settings for a phone number.
   */
  emergency?: PhoneNumberWithVoiceSettings.Emergency;

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
  media_features?: VoiceAPI.MediaFeatures;

  /**
   * The phone number in +E164 format.
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

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

export namespace PhoneNumberWithVoiceSettings {
  /**
   * The emergency services settings for a phone number.
   */
  export interface Emergency {
    /**
     * Identifies the address to be used with emergency services.
     */
    emergency_address_id?: string;

    /**
     * Allows you to enable or disable emergency services on the phone number. In order
     * to enable emergency services, you must also set an emergency_address_id.
     */
    emergency_enabled?: boolean;

    /**
     * Represents the state of the number regarding emergency activation.
     */
    emergency_status?: 'disabled' | 'active' | 'provisioning' | 'deprovisioning' | 'provisioning-failed';
  }
}

export interface ActionChangeBundleStatusResponse {
  data?: PhoneNumberWithVoiceSettings;
}

export interface ActionEnableEmergencyResponse {
  data?: PhoneNumberWithVoiceSettings;
}

export interface ActionVerifyOwnershipResponse {
  data?: ActionVerifyOwnershipResponse.Data;
}

export namespace ActionVerifyOwnershipResponse {
  export interface Data {
    /**
     * The list of phone numbers which you own and are in an editable state
     */
    found?: Array<Data.Found>;

    /**
     * Phone numbers that are not found in the account
     */
    not_found?: Array<string>;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }

  export namespace Data {
    export interface Found {
      /**
       * Identifies the resource.
       */
      id?: string;

      /**
       * The phone number in E.164 format
       */
      number_val_e164?: string;
    }
  }
}

export interface ActionChangeBundleStatusParams {
  /**
   * The new bundle_id setting for the number. If you are assigning the number to a
   * bundle, this is the unique ID of the bundle you wish to use. If you are removing
   * the number from a bundle, this must be null. You cannot assign a number from one
   * bundle to another directly. You must first remove it from a bundle, and then
   * assign it to a new bundle.
   */
  bundle_id: string;
}

export interface ActionEnableEmergencyParams {
  /**
   * Identifies the address to be used with emergency services.
   */
  emergency_address_id: string;

  /**
   * Indicates whether to enable emergency services on this number.
   */
  emergency_enabled: boolean;
}

export interface ActionVerifyOwnershipParams {
  /**
   * Array of phone numbers to verify ownership for
   */
  phone_numbers: Array<string>;
}

export declare namespace Actions {
  export {
    type PhoneNumberWithVoiceSettings as PhoneNumberWithVoiceSettings,
    type ActionChangeBundleStatusResponse as ActionChangeBundleStatusResponse,
    type ActionEnableEmergencyResponse as ActionEnableEmergencyResponse,
    type ActionVerifyOwnershipResponse as ActionVerifyOwnershipResponse,
    type ActionChangeBundleStatusParams as ActionChangeBundleStatusParams,
    type ActionEnableEmergencyParams as ActionEnableEmergencyParams,
    type ActionVerifyOwnershipParams as ActionVerifyOwnershipParams,
  };
}
