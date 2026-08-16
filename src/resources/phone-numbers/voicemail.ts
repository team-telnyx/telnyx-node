// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Voicemail API
 */
export class Voicemail extends APIResource {
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
   * Update voicemail settings for a phone number. You can also configure a custom
   * greeting by setting the `greeting` object: use `mode` `custom_greeting` together
   * with a `media_name` that points to an audio file uploaded through the Media
   * Storage API, or `mode` `default` to use the standard system greeting.
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

  /**
   * Create voicemail settings for a phone number. You can also configure a custom
   * greeting by setting the `greeting` object: use `mode` `custom_greeting` together
   * with a `media_name` that points to an audio file uploaded through the Media
   * Storage API, or `mode` `default` to use the standard system greeting.
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
}

export interface VoicemailPrefResponse {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  greeting?: VoicemailPrefResponse.Greeting;

  /**
   * The pin used for the voicemail.
   */
  pin?: string;
}

export namespace VoicemailPrefResponse {
  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  export interface Greeting {
    /**
     * The name of the media file to play as the greeting. Required when `mode` is
     * `custom_greeting`; ignored when `mode` is `default`. The value must match the
     * `media_name` of a file you previously uploaded with the Media Storage API
     * (`POST /v2/media`).
     */
    media_name?: string | null;

    /**
     * The greeting mode. `default` plays the standard system greeting.
     * `custom_greeting` plays the audio referenced by `media_name`.
     */
    mode?: 'default' | 'custom_greeting';
  }
}

export interface VoicemailRequest {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  greeting?: VoicemailRequest.Greeting;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export namespace VoicemailRequest {
  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  export interface Greeting {
    /**
     * The name of the media file to play as the greeting. Required when `mode` is
     * `custom_greeting`; ignored when `mode` is `default`. The value must match the
     * `media_name` of a file you previously uploaded with the Media Storage API
     * (`POST /v2/media`).
     */
    media_name?: string | null;

    /**
     * The greeting mode. `default` plays the standard system greeting.
     * `custom_greeting` plays the audio referenced by `media_name`.
     */
    mode?: 'default' | 'custom_greeting';
  }
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

export interface VoicemailUpdateParams {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  greeting?: VoicemailUpdateParams.Greeting;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export namespace VoicemailUpdateParams {
  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  export interface Greeting {
    /**
     * The name of the media file to play as the greeting. Required when `mode` is
     * `custom_greeting`; ignored when `mode` is `default`. The value must match the
     * `media_name` of a file you previously uploaded with the Media Storage API
     * (`POST /v2/media`).
     */
    media_name?: string | null;

    /**
     * The greeting mode. `default` plays the standard system greeting.
     * `custom_greeting` plays the audio referenced by `media_name`.
     */
    mode?: 'default' | 'custom_greeting';
  }
}

export interface VoicemailCreateParams {
  /**
   * Whether voicemail is enabled.
   */
  enabled?: boolean;

  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  greeting?: VoicemailCreateParams.Greeting;

  /**
   * The pin used for voicemail
   */
  pin?: string;
}

export namespace VoicemailCreateParams {
  /**
   * Controls the greeting a caller hears before leaving a voicemail. Set `mode` to
   * `default` to play the standard system greeting, or to `custom_greeting` to play
   * your own audio. When `mode` is `custom_greeting`, `media_name` is required and
   * must reference an audio file already uploaded to your account through the Media
   * Storage API.
   */
  export interface Greeting {
    /**
     * The name of the media file to play as the greeting. Required when `mode` is
     * `custom_greeting`; ignored when `mode` is `default`. The value must match the
     * `media_name` of a file you previously uploaded with the Media Storage API
     * (`POST /v2/media`).
     */
    media_name?: string | null;

    /**
     * The greeting mode. `default` plays the standard system greeting.
     * `custom_greeting` plays the audio referenced by `media_name`.
     */
    mode?: 'default' | 'custom_greeting';
  }
}

export declare namespace Voicemail {
  export {
    type VoicemailPrefResponse as VoicemailPrefResponse,
    type VoicemailRequest as VoicemailRequest,
    type VoicemailCreateResponse as VoicemailCreateResponse,
    type VoicemailRetrieveResponse as VoicemailRetrieveResponse,
    type VoicemailUpdateResponse as VoicemailUpdateResponse,
    type VoicemailUpdateParams as VoicemailUpdateParams,
    type VoicemailCreateParams as VoicemailCreateParams,
  };
}
