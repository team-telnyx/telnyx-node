// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ShortCodesDefaultFlatPagination } from './shared';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const shortCode of client.shortCodes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ShortCodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShortCodesDefaultFlatPagination, Shared.ShortCode> {
    return this._client.getAPIList('/short_codes', DefaultFlatPagination<Shared.ShortCode>, {
      query,
      ...options,
    });
  }
}

export interface ShortCodeRetrieveResponse {
  data?: Shared.ShortCode;
}

export interface ShortCodeUpdateResponse {
  data?: Shared.ShortCode;
}

export interface ShortCodeUpdateParams {
  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id: string;

  tags?: Array<string>;
}

export interface ShortCodeListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[messaging_profile_id]
   */
  filter?: ShortCodeListParams.Filter;
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
}

export declare namespace ShortCodes {
  export {
    type ShortCodeRetrieveResponse as ShortCodeRetrieveResponse,
    type ShortCodeUpdateResponse as ShortCodeUpdateResponse,
    type ShortCodeUpdateParams as ShortCodeUpdateParams,
    type ShortCodeListParams as ShortCodeListParams,
  };
}

export { type ShortCodesDefaultFlatPagination };
