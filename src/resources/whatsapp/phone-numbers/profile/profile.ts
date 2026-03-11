// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PhotoAPI from './photo';
import { Photo, PhotoUploadParams, PhotoUploadResponse } from './photo';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class Profile extends APIResource {
  photo: PhotoAPI.Photo = new PhotoAPI.Photo(this._client);

  /**
   * Get phone number business profile
   *
   * @example
   * ```ts
   * const profile =
   *   await client.whatsapp.phoneNumbers.profile.retrieve(
   *     'phone_number',
   *   );
   * ```
   */
  retrieve(phoneNumber: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp/phone_numbers/${phoneNumber}/profile`, options);
  }

  /**
   * Update phone number business profile
   *
   * @example
   * ```ts
   * const profile =
   *   await client.whatsapp.phoneNumbers.profile.update(
   *     'phone_number',
   *   );
   * ```
   */
  update(
    phoneNumber: string,
    body: ProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp/phone_numbers/${phoneNumber}/profile`, { body, ...options });
  }
}

export interface ProfileRetrieveResponse {
  data?: ProfileRetrieveResponse.Data;
}

export namespace ProfileRetrieveResponse {
  export interface Data {
    id?: string;

    about?: string;

    address?: string;

    category?: string;

    created_at?: string;

    description?: string;

    display_name?: string;

    email?: string;

    /**
     * Whatsapp phone number ID
     */
    phone_number_id?: string;

    profile_photo_url?: string;

    record_type?: string;

    updated_at?: string;

    website?: string;
  }
}

export interface ProfileUpdateResponse {
  data?: ProfileUpdateResponse.Data;
}

export namespace ProfileUpdateResponse {
  export interface Data {
    id?: string;

    about?: string;

    address?: string;

    category?: string;

    created_at?: string;

    description?: string;

    display_name?: string;

    email?: string;

    /**
     * Whatsapp phone number ID
     */
    phone_number_id?: string;

    profile_photo_url?: string;

    record_type?: string;

    updated_at?: string;

    website?: string;
  }
}

export interface ProfileUpdateParams {
  about?: string;

  address?: string;

  category?: string;

  description?: string;

  display_name?: string;

  email?: string;

  website?: string;
}

Profile.Photo = Photo;

export declare namespace Profile {
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Photo as Photo,
    type PhotoUploadResponse as PhotoUploadResponse,
    type PhotoUploadParams as PhotoUploadParams,
  };
}
