// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * Create and manage real-time AI avatars
 */
export class Avatars extends APIResource {
  /**
   * Returns a paginated list of the Telnyx stock avatars and custom avatars
   * available to the authenticated organization. Custom avatars owned by other
   * organizations are never returned. The `image_url` value is suitable for
   * displaying a thumbnail and may be refreshed by listing or retrieving the avatar
   * again.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const avatar of client.ai.avatars.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AvatarListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AvatarsDefaultFlatPagination, Avatar> {
    return this._client.getAPIList('/ai/avatars', DefaultFlatPagination<Avatar>, { query, ...options });
  }

  /**
   * Uploads an image, validates its file type, size, safe decoding, and resolution,
   * stores it in Telnyx-managed private storage, and creates an avatar owned by the
   * authenticated organization. Creating an avatar does not update an AI Assistant;
   * use the returned ID separately wherever the avatar is consumed. The avatar image
   * is stored independently from the rendering model and background, which are
   * selected where the avatar is consumed. Supported image types are JPEG, PNG, and
   * WebP. Images may be up to 10 MiB, must be between 256 and 8192 pixels on each
   * side, and may contain at most 40 megapixels. Each organization may have up to 20
   * custom avatars. For best results, use a 16:9 landscape image, preferably 1920 by
   * 1080 pixels and at least 1280 by 720 pixels. Show one centered, front-facing
   * person from the shoulders up, keep the full head and hair visible with space
   * around it, and use a sharp, evenly lit image with unobstructed eyes and mouth.
   * Use a transparent PNG or WebP when the avatar will be combined with a selectable
   * background. These composition recommendations are not enforced in the first
   * release; the first release does not validate the number of faces, pose, or image
   * content.
   *
   * @example
   * ```ts
   * const avatarResponse = await client.ai.avatars.create({
   *   image_file: fs.createReadStream('path/to/file'),
   *   name: 'Customer portrait',
   * });
   * ```
   */
  create(body: AvatarCreateParams, options?: RequestOptions): APIPromise<AvatarResponse> {
    return this._client.post('/ai/avatars', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Returns a Telnyx stock avatar or a custom avatar owned by the authenticated
   * organization. A custom avatar belonging to another organization is returned as
   * not found.
   *
   * @example
   * ```ts
   * const avatarResponse = await client.ai.avatars.retrieve(
   *   'avatar_0123456789abcdef0123456789abcdef',
   * );
   * ```
   */
  retrieve(avatarID: AvatarID, options?: RequestOptions): APIPromise<AvatarResponse> {
    return this._client.get(path`/ai/avatars/${avatarID}`, options);
  }

  /**
   * Updates the customer-facing name of a custom avatar owned by the authenticated
   * organization. Stock avatars cannot be modified. To replace the image, create a
   * new custom avatar so existing references keep their original content.
   *
   * @example
   * ```ts
   * const avatarResponse = await client.ai.avatars.update(
   *   'avatar_0123456789abcdef0123456789abcdef',
   *   { name: 'Updated portrait' },
   * );
   * ```
   */
  update(avatarID: AvatarID, body: AvatarUpdateParams, options?: RequestOptions): APIPromise<AvatarResponse> {
    return this._client.patch(path`/ai/avatars/${avatarID}`, { body, ...options });
  }
}

export type AvatarsDefaultFlatPagination = DefaultFlatPagination<Avatar>;

export interface Avatar {
  /**
   * Stable identifier of a Telnyx stock avatar or an organization-owned custom
   * avatar. Custom avatar IDs are returned by the Avatars API and use the `avatar_`
   * prefix.
   */
  id: AvatarID;

  /**
   * Whether the avatar is provided by Telnyx or was uploaded by the authenticated
   * organization.
   */
  avatar_type: AvatarType;

  /**
   * Indicates that avatar rendering runs on Telnyx-operated infrastructure.
   */
  hosted: true;

  /**
   * HTTPS image URL suitable for an avatar selection thumbnail. If the URL expires,
   * list or retrieve the avatar again to refresh it.
   */
  image_url: string;

  /**
   * Customer-facing avatar name.
   */
  name: string;

  /**
   * Avatar provider. The first release supports Telnyx avatars.
   */
  provider: 'telnyx';

  /**
   * MIME type of a custom avatar image.
   */
  content_type?: 'image/jpeg' | 'image/png' | 'image/webp';

  /**
   * Time when the custom avatar was created.
   */
  created_at?: string;

  /**
   * Decoded height of a custom avatar image.
   */
  height_px?: number;

  /**
   * Expiration time of `image_url`. Omitted when the URL does not expire.
   */
  image_url_expires_at?: string;

  /**
   * Size of a custom avatar image in bytes.
   */
  size_bytes?: number;

  /**
   * Time when the custom avatar was last updated.
   */
  updated_at?: string;

  /**
   * Decoded width of a custom avatar image.
   */
  width_px?: number;
}

/**
 * Stable identifier of a Telnyx stock avatar or an organization-owned custom
 * avatar. Custom avatar IDs are returned by the Avatars API and use the `avatar_`
 * prefix.
 */
export type AvatarID = 'elena' | 'ben' | 'jordan' | 'lin' | 'avery' | 'raphael' | (string & {});

export interface AvatarResponse {
  data: Avatar;
}

/**
 * Whether the avatar is provided by Telnyx or was uploaded by the authenticated
 * organization.
 */
export type AvatarType = 'stock' | 'custom';

export interface AvatarListParams extends DefaultFlatPaginationParams {
  /**
   * Return only stock or custom avatars.
   */
  'filter[avatar_type]'?: AvatarType;

  /**
   * Return the avatar with this exact ID.
   */
  'filter[id]'?: AvatarID;

  /**
   * Return avatars whose names contain this value, using case-insensitive matching.
   */
  'filter[name]'?: string;
}

export interface AvatarCreateParams {
  /**
   * JPEG, PNG, or WebP image file. The maximum file size is 10 MiB.
   */
  image_file: Uploadable;

  /**
   * Customer-facing name of the custom avatar.
   */
  name: string;
}

export interface AvatarUpdateParams {
  /**
   * New customer-facing name of the custom avatar.
   */
  name: string;
}

export declare namespace Avatars {
  export {
    type Avatar as Avatar,
    type AvatarID as AvatarID,
    type AvatarResponse as AvatarResponse,
    type AvatarType as AvatarType,
    type AvatarsDefaultFlatPagination as AvatarsDefaultFlatPagination,
    type AvatarListParams as AvatarListParams,
    type AvatarCreateParams as AvatarCreateParams,
    type AvatarUpdateParams as AvatarUpdateParams,
  };
}
