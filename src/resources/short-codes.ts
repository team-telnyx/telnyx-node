// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShortCodes extends APIResource {
  /**
   * Retrieve a short code
   *
   * @example
   * ```ts
   * const shortCode = await client.shortCodes.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ShortCodeRetrieveResponse> {
    return this._client.get(path`/short_codes/${id}`, options);
  }

  /**
   * Update the settings for a specific short code. To unbind a short code from a
   * profile, set the `messaging_profile_id` to `null` or an empty string. To add or
   * update tags, include the tags field as an array of strings.
   *
   * @example
   * ```ts
   * const shortCode = await client.shortCodes.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     messaging_profile_id:
   *       'abc85f64-5717-4562-b3fc-2c9600000000',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: ShortCodeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShortCodeUpdateResponse> {
    return this._client.patch(path`/short_codes/${id}`, { body, ...options });
  }

  /**
   * List short codes
   *
   * @example
   * ```ts
   * const shortCodes = await client.shortCodes.list();
   * ```
   */
  list(
    query: ShortCodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShortCodeListResponse> {
    return this._client.get('/short_codes', { query, ...options });
  }
}

export interface ShortCodeRetrieveResponse {
  data?: Shared.ShortCode;
}

export interface ShortCodeUpdateResponse {
  data?: Shared.ShortCode;
}

export interface ShortCodeListResponse {
  data?: Array<Shared.ShortCode>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface ShortCodeUpdateParams {
  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id: string;
}

export interface ShortCodeListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[messaging_profile_id]
   */
  filter?: ShortCodeListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: ShortCodeListParams.Page;
}

export namespace ShortCodeListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[messaging_profile_id]
   */
  export interface Filter {
    /**
     * Filter by Messaging Profile ID. Use the string `null` for phone numbers without
     * assigned profiles. A synonym for the `/messaging_profiles/{id}/short_codes`
     * endpoint when querying about an extant profile.
     */
    messaging_profile_id?: string;
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace ShortCodes {
  export {
    type ShortCodeRetrieveResponse as ShortCodeRetrieveResponse,
    type ShortCodeUpdateResponse as ShortCodeUpdateResponse,
    type ShortCodeListResponse as ShortCodeListResponse,
    type ShortCodeUpdateParams as ShortCodeUpdateParams,
    type ShortCodeListParams as ShortCodeListParams,
  };
}
