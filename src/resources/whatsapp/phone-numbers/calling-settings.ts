// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class CallingSettings extends APIResource {
  /**
   * Get calling settings for a phone number
   *
   * @example
   * ```ts
   * const callingSetting =
   *   await client.whatsapp.phoneNumbers.callingSettings.retrieve(
   *     'phone_number',
   *   );
   * ```
   */
  retrieve(phoneNumber: string, options?: RequestOptions): APIPromise<CallingSettingRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp/phone_numbers/${phoneNumber}/calling_settings`, options);
  }

  /**
   * Enable or disable Whatsapp calling for a phone number
   *
   * @example
   * ```ts
   * const callingSetting =
   *   await client.whatsapp.phoneNumbers.callingSettings.update(
   *     'phone_number',
   *     { enabled: true },
   *   );
   * ```
   */
  update(
    phoneNumber: string,
    body: CallingSettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallingSettingUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp/phone_numbers/${phoneNumber}/calling_settings`, {
      body,
      ...options,
    });
  }
}

export interface CallingSettingRetrieveResponse {
  data?: CallingSettingRetrieveResponse.Data;
}

export namespace CallingSettingRetrieveResponse {
  export interface Data {
    /**
     * True if calling is enabled on the phone
     */
    enabled?: boolean;

    /**
     * Phone number in E164 format
     */
    phone_number?: string;

    record_type?: string;

    updated_at?: string;
  }
}

export interface CallingSettingUpdateResponse {
  data?: CallingSettingUpdateResponse.Data;
}

export namespace CallingSettingUpdateResponse {
  export interface Data {
    /**
     * True if calling is enabled on the phone
     */
    enabled?: boolean;

    /**
     * Phone number in E164 format
     */
    phone_number?: string;

    record_type?: string;

    updated_at?: string;
  }
}

export interface CallingSettingUpdateParams {
  enabled: boolean;
}

export declare namespace CallingSettings {
  export {
    type CallingSettingRetrieveResponse as CallingSettingRetrieveResponse,
    type CallingSettingUpdateResponse as CallingSettingUpdateResponse,
    type CallingSettingUpdateParams as CallingSettingUpdateParams,
  };
}
