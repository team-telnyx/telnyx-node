// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Voicemail extends APIResource {
  /**
   * Create voicemail settings for a phone number
   *
   * @example
   * ```ts
   * const voicemail =
   *   await client.phoneNumbers.voicemail.create(
   *     '123455678900',
   *   );
   * ```
   */
  create(
    phoneNumberID: string,
    body: VoicemailCreateParams,
    options?: RequestOptions,
  ): APIPromise<VoicemailCreateResponse> {
    return this._client.post(path`/phone_numbers/${phoneNumberID}/voicemail`, { body, ...options });
  }

  /**
   * Returns the voicemail settings for a phone number
   *
   * @example
   * ```ts
   * const voicemail =
   *   await client.phoneNumbers.voicemail.retrieve(
   *     '123455678900',
   *   );
   * ```
   */
  retrieve(phoneNumberID: string, options?: RequestOptions): APIPromise<VoicemailRetrieveResponse> {
    return this._client.get(path`/phone_numbers/${phoneNumberID}/voicemail`, options);
  }

  /**
   * Update voicemail settings for a phone number
   *
   * @example
   * ```ts
   * const voicemail =
   *   await client.phoneNumbers.voicemail.update(
   *     '123455678900',
   *   );
   * ```
   */
  update(
    phoneNumberID: string,
    body: VoicemailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VoicemailUpdateResponse> {
    return this._client.patch(path`/phone_numbers/${phoneNumberID}/voicemail`, { body, ...options });
  }
}

export interface VoicemailPrefResponse {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * The pin used for the voicemail.
   */
  pin?: string;
}

export interface VoicemailRequest {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export interface VoicemailCreateResponse {
  data?: VoicemailPrefResponse;
}

export interface VoicemailRetrieveResponse {
  data?: VoicemailPrefResponse;
}

export interface VoicemailUpdateResponse {
  data?: VoicemailPrefResponse;
}

export interface VoicemailCreateParams {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export interface VoicemailUpdateParams {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export declare namespace Voicemail {
  export {
    type VoicemailPrefResponse as VoicemailPrefResponse,
    type VoicemailRequest as VoicemailRequest,
    type VoicemailCreateResponse as VoicemailCreateResponse,
    type VoicemailRetrieveResponse as VoicemailRetrieveResponse,
    type VoicemailUpdateResponse as VoicemailUpdateResponse,
    type VoicemailCreateParams as VoicemailCreateParams,
    type VoicemailUpdateParams as VoicemailUpdateParams,
  };
}
