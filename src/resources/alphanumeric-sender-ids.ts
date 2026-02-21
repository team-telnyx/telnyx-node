// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlphanumericSenderIDs extends APIResource {
  /**
   * Create a new alphanumeric sender ID associated with a messaging profile.
   *
   * @example
   * ```ts
   * const alphanumericSenderID =
   *   await client.alphanumericSenderIDs.create({
   *     alphanumeric_sender_id: 'MyCompany',
   *     messaging_profile_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(
    body: AlphanumericSenderIDCreateParams,
    options?: RequestOptions,
  ): APIPromise<AlphanumericSenderIDCreateResponse> {
    return this._client.post('/alphanumeric_sender_ids', { body, ...options });
  }

  /**
   * Retrieve a specific alphanumeric sender ID.
   *
   * @example
   * ```ts
   * const alphanumericSenderID =
   *   await client.alphanumericSenderIDs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AlphanumericSenderIDRetrieveResponse> {
    return this._client.get(path`/alphanumeric_sender_ids/${id}`, options);
  }

  /**
   * List all alphanumeric sender IDs for the authenticated user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const alphanumericSenderIDListResponse of client.alphanumericSenderIDs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AlphanumericSenderIDListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AlphanumericSenderIDListResponsesDefaultFlatPagination, AlphanumericSenderIDListResponse> {
    return this._client.getAPIList(
      '/alphanumeric_sender_ids',
      DefaultFlatPagination<AlphanumericSenderIDListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an alphanumeric sender ID and disassociate it from its messaging profile.
   *
   * @example
   * ```ts
   * const alphanumericSenderID =
   *   await client.alphanumericSenderIDs.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AlphanumericSenderIDDeleteResponse> {
    return this._client.delete(path`/alphanumeric_sender_ids/${id}`, options);
  }
}

export type AlphanumericSenderIDListResponsesDefaultFlatPagination =
  DefaultFlatPagination<AlphanumericSenderIDListResponse>;

export interface AlphanumericSenderIDCreateResponse {
  data?: AlphanumericSenderIDCreateResponse.Data;
}

export namespace AlphanumericSenderIDCreateResponse {
  export interface Data {
    /**
     * Uniquely identifies the alphanumeric sender ID resource.
     */
    id?: string;

    /**
     * The alphanumeric sender ID string.
     */
    alphanumeric_sender_id?: string;

    /**
     * The messaging profile this sender ID belongs to.
     */
    messaging_profile_id?: string;

    /**
     * The organization that owns this sender ID.
     */
    organization_id?: string;

    record_type?: 'alphanumeric_sender_id';

    /**
     * A US long code number to use as fallback when sending to US destinations.
     */
    us_long_code_fallback?: string;
  }
}

export interface AlphanumericSenderIDRetrieveResponse {
  data?: AlphanumericSenderIDRetrieveResponse.Data;
}

export namespace AlphanumericSenderIDRetrieveResponse {
  export interface Data {
    /**
     * Uniquely identifies the alphanumeric sender ID resource.
     */
    id?: string;

    /**
     * The alphanumeric sender ID string.
     */
    alphanumeric_sender_id?: string;

    /**
     * The messaging profile this sender ID belongs to.
     */
    messaging_profile_id?: string;

    /**
     * The organization that owns this sender ID.
     */
    organization_id?: string;

    record_type?: 'alphanumeric_sender_id';

    /**
     * A US long code number to use as fallback when sending to US destinations.
     */
    us_long_code_fallback?: string;
  }
}

export interface AlphanumericSenderIDListResponse {
  /**
   * Uniquely identifies the alphanumeric sender ID resource.
   */
  id?: string;

  /**
   * The alphanumeric sender ID string.
   */
  alphanumeric_sender_id?: string;

  /**
   * The messaging profile this sender ID belongs to.
   */
  messaging_profile_id?: string;

  /**
   * The organization that owns this sender ID.
   */
  organization_id?: string;

  record_type?: 'alphanumeric_sender_id';

  /**
   * A US long code number to use as fallback when sending to US destinations.
   */
  us_long_code_fallback?: string;
}

export interface AlphanumericSenderIDDeleteResponse {
  data?: AlphanumericSenderIDDeleteResponse.Data;
}

export namespace AlphanumericSenderIDDeleteResponse {
  export interface Data {
    /**
     * Uniquely identifies the alphanumeric sender ID resource.
     */
    id?: string;

    /**
     * The alphanumeric sender ID string.
     */
    alphanumeric_sender_id?: string;

    /**
     * The messaging profile this sender ID belongs to.
     */
    messaging_profile_id?: string;

    /**
     * The organization that owns this sender ID.
     */
    organization_id?: string;

    record_type?: 'alphanumeric_sender_id';

    /**
     * A US long code number to use as fallback when sending to US destinations.
     */
    us_long_code_fallback?: string;
  }
}

export interface AlphanumericSenderIDCreateParams {
  /**
   * The alphanumeric sender ID string.
   */
  alphanumeric_sender_id: string;

  /**
   * The messaging profile to associate the sender ID with.
   */
  messaging_profile_id: string;

  /**
   * A US long code number to use as fallback when sending to US destinations.
   */
  us_long_code_fallback?: string;
}

export interface AlphanumericSenderIDListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by messaging profile ID.
   */
  'filter[messaging_profile_id]'?: string;
}

export declare namespace AlphanumericSenderIDs {
  export {
    type AlphanumericSenderIDCreateResponse as AlphanumericSenderIDCreateResponse,
    type AlphanumericSenderIDRetrieveResponse as AlphanumericSenderIDRetrieveResponse,
    type AlphanumericSenderIDListResponse as AlphanumericSenderIDListResponse,
    type AlphanumericSenderIDDeleteResponse as AlphanumericSenderIDDeleteResponse,
    type AlphanumericSenderIDListResponsesDefaultFlatPagination as AlphanumericSenderIDListResponsesDefaultFlatPagination,
    type AlphanumericSenderIDCreateParams as AlphanumericSenderIDCreateParams,
    type AlphanumericSenderIDListParams as AlphanumericSenderIDListParams,
  };
}
