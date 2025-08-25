// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Media extends APIResource {
  /**
   * Returns the information about a stored media file.
   *
   * @example
   * ```ts
   * const media = await client.media.retrieve('media_name');
   * ```
   */
  retrieve(mediaName: string, options?: RequestOptions): APIPromise<MediaRetrieveResponse> {
    return this._client.get(path`/media/${mediaName}`, options);
  }

  /**
   * Updates a stored media file.
   *
   * @example
   * ```ts
   * const media = await client.media.update('media_name');
   * ```
   */
  update(
    mediaName: string,
    body: MediaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MediaUpdateResponse> {
    return this._client.put(
      path`/media/${mediaName}`,
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns a list of stored media files.
   *
   * @example
   * ```ts
   * const media = await client.media.list();
   * ```
   */
  list(
    query: MediaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaListResponse> {
    return this._client.get('/media', { query, ...options });
  }

  /**
   * Deletes a stored media file.
   *
   * @example
   * ```ts
   * await client.media.delete('media_name');
   * ```
   */
  delete(mediaName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/media/${mediaName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Downloads a stored media file.
   *
   * @example
   * ```ts
   * const response = await client.media.download('media_name');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(mediaName: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/media/${mediaName}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload media file to Telnyx so it can be used with other Telnyx services
   *
   * @example
   * ```ts
   * const response = await client.media.upload({
   *   media_url: 'http://www.example.com/audio.mp3',
   * });
   * ```
   */
  upload(body: MediaUploadParams, options?: RequestOptions): APIPromise<MediaUploadResponse> {
    return this._client.post('/media', maybeMultipartFormRequestOptions({ body, ...options }, this._client));
  }
}

export interface MediaResource {
  /**
   * Content type of the file
   */
  content_type?: string;

  /**
   * ISO 8601 formatted date of when the media resource was created
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date of when the media resource will expire and be deleted.
   */
  expires_at?: string;

  /**
   * Uniquely identifies a media resource.
   */
  media_name?: string;

  /**
   * ISO 8601 formatted date of when the media resource was last updated
   */
  updated_at?: string;
}

export interface MediaRetrieveResponse {
  data?: MediaResource;
}

export interface MediaUpdateResponse {
  data?: MediaResource;
}

export interface MediaListResponse {
  data?: Array<MediaResource>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface MediaUploadResponse {
  data?: MediaResource;
}

export interface MediaUpdateParams {
  /**
   * The URL where the media to be stored in Telnyx network is currently hosted. The
   * maximum allowed size is 20 MB.
   */
  media_url?: string;

  /**
   * The number of seconds after which the media resource will be deleted, defaults
   * to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.
   */
  ttl_secs?: number;
}

export interface MediaListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[content_type][]
   */
  filter?: MediaListParams.Filter;
}

export namespace MediaListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[content_type][]
   */
  export interface Filter {
    /**
     * Filters files by given content types
     */
    content_type?: Array<string>;
  }
}

export interface MediaUploadParams {
  /**
   * The URL where the media to be stored in Telnyx network is currently hosted. The
   * maximum allowed size is 20 MB.
   */
  media_url: string;

  /**
   * The unique identifier of a file.
   */
  media_name?: string;

  /**
   * The number of seconds after which the media resource will be deleted, defaults
   * to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.
   */
  ttl_secs?: number;
}

export declare namespace Media {
  export {
    type MediaResource as MediaResource,
    type MediaRetrieveResponse as MediaRetrieveResponse,
    type MediaUpdateResponse as MediaUpdateResponse,
    type MediaListResponse as MediaListResponse,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaUpdateParams as MediaUpdateParams,
    type MediaListParams as MediaListParams,
    type MediaUploadParams as MediaUploadParams,
  };
}
