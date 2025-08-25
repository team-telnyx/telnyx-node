// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TelephonyCredentials extends APIResource {
  /**
   * Create a credential.
   *
   * @example
   * ```ts
   * const telephonyCredential =
   *   await client.telephonyCredentials.create({
   *     connection_id: '1234567890',
   *   });
   * ```
   */
  create(
    body: TelephonyCredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<TelephonyCredentialCreateResponse> {
    return this._client.post('/telephony_credentials', { body, ...options });
  }

  /**
   * Get the details of an existing On-demand Credential.
   *
   * @example
   * ```ts
   * const telephonyCredential =
   *   await client.telephonyCredentials.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TelephonyCredentialRetrieveResponse> {
    return this._client.get(path`/telephony_credentials/${id}`, options);
  }

  /**
   * Update an existing credential.
   *
   * @example
   * ```ts
   * const telephonyCredential =
   *   await client.telephonyCredentials.update('id');
   * ```
   */
  update(
    id: string,
    body: TelephonyCredentialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TelephonyCredentialUpdateResponse> {
    return this._client.patch(path`/telephony_credentials/${id}`, { body, ...options });
  }

  /**
   * List all On-demand Credentials.
   *
   * @example
   * ```ts
   * const telephonyCredentials =
   *   await client.telephonyCredentials.list();
   * ```
   */
  list(
    query: TelephonyCredentialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TelephonyCredentialListResponse> {
    return this._client.get('/telephony_credentials', { query, ...options });
  }

  /**
   * Delete an existing credential.
   *
   * @example
   * ```ts
   * const telephonyCredential =
   *   await client.telephonyCredentials.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TelephonyCredentialDeleteResponse> {
    return this._client.delete(path`/telephony_credentials/${id}`, options);
  }

  /**
   * Create an Access Token (JWT) for the credential.
   *
   * @example
   * ```ts
   * const response =
   *   await client.telephonyCredentials.createToken('id');
   * ```
   */
  createToken(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/telephony_credentials/${id}/token`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export interface TelephonyCredential {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO-8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Defaults to false
   */
  expired?: boolean;

  /**
   * ISO-8601 formatted date indicating when the resource will expire.
   */
  expires_at?: string;

  name?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Identifies the resource this credential is associated with.
   */
  resource_id?: string;

  /**
   * The randomly generated SIP password for the credential.
   */
  sip_password?: string;

  /**
   * The randomly generated SIP username for the credential.
   */
  sip_username?: string;

  /**
   * ISO-8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface TelephonyCredentialCreateResponse {
  data?: TelephonyCredential;
}

export interface TelephonyCredentialRetrieveResponse {
  data?: TelephonyCredential;
}

export interface TelephonyCredentialUpdateResponse {
  data?: TelephonyCredential;
}

export interface TelephonyCredentialListResponse {
  data?: Array<TelephonyCredential>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface TelephonyCredentialDeleteResponse {
  data?: TelephonyCredential;
}

export type TelephonyCredentialCreateTokenResponse = string;

export interface TelephonyCredentialCreateParams {
  /**
   * Identifies the Credential Connection this credential is associated with.
   */
  connection_id: string;

  /**
   * ISO-8601 formatted date indicating when the credential will expire.
   */
  expires_at?: string;

  name?: string;

  /**
   * Tags a credential. A single tag can hold at maximum 1000 credentials.
   */
  tag?: string;
}

export interface TelephonyCredentialUpdateParams {
  /**
   * Identifies the Credential Connection this credential is associated with.
   */
  connection_id?: string;

  /**
   * ISO-8601 formatted date indicating when the credential will expire.
   */
  expires_at?: string;

  name?: string;

  /**
   * Tags a credential. A single tag can hold at maximum 1000 credentials.
   */
  tag?: string;
}

export interface TelephonyCredentialListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[name], filter[status], filter[resource_id], filter[sip_username]
   */
  filter?: TelephonyCredentialListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: TelephonyCredentialListParams.Page;
}

export namespace TelephonyCredentialListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[name], filter[status], filter[resource_id], filter[sip_username]
   */
  export interface Filter {
    /**
     * Filter by name
     */
    name?: string;

    /**
     * Filter by resource_id
     */
    resource_id?: string;

    /**
     * Filter by sip_username
     */
    sip_username?: string;

    /**
     * Filter by status
     */
    status?: string;

    /**
     * Filter by tag
     */
    tag?: string;
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

export declare namespace TelephonyCredentials {
  export {
    type TelephonyCredential as TelephonyCredential,
    type TelephonyCredentialCreateResponse as TelephonyCredentialCreateResponse,
    type TelephonyCredentialRetrieveResponse as TelephonyCredentialRetrieveResponse,
    type TelephonyCredentialUpdateResponse as TelephonyCredentialUpdateResponse,
    type TelephonyCredentialListResponse as TelephonyCredentialListResponse,
    type TelephonyCredentialDeleteResponse as TelephonyCredentialDeleteResponse,
    type TelephonyCredentialCreateTokenResponse as TelephonyCredentialCreateTokenResponse,
    type TelephonyCredentialCreateParams as TelephonyCredentialCreateParams,
    type TelephonyCredentialUpdateParams as TelephonyCredentialUpdateParams,
    type TelephonyCredentialListParams as TelephonyCredentialListParams,
  };
}
