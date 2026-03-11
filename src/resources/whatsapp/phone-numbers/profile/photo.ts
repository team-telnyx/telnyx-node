// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProfileAPI from './profile';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class Photo extends APIResource {
  /**
   * Delete Whatsapp profile photo
   *
   * @example
   * ```ts
   * await client.whatsapp.phoneNumbers.profile.photo.delete(
   *   'phone_number',
   * );
   * ```
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp/phone_numbers/${phoneNumber}/profile/photo`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload Whatsapp profile photo
   *
   * @example
   * ```ts
   * const response =
   *   await client.whatsapp.phoneNumbers.profile.photo.upload(
   *     'phone_number',
   *     { file: fs.createReadStream('path/to/file') },
   *   );
   * ```
   */
  upload(
    phoneNumber: string,
    body: PhotoUploadParams,
    options?: RequestOptions,
  ): APIPromise<PhotoUploadResponse> {
    return this._client.post(
      path`/v2/whatsapp/phone_numbers/${phoneNumber}/profile/photo`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface PhotoUploadResponse {
  data?: ProfileAPI.WhatsappProfileData;
}

export interface PhotoUploadParams {
  /**
   * Image file (JPEG recommended, max 10 MB)
   */
  file: Uploadable;
}

export declare namespace Photo {
  export { type PhotoUploadResponse as PhotoUploadResponse, type PhotoUploadParams as PhotoUploadParams };
}
