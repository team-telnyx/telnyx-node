// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MobilePushCredentials extends APIResource {
  /**
   * Creates a new mobile push credential
   *
   * @example
   * ```ts
   * const pushCredentialResponse =
   *   await client.mobilePushCredentials.create({
   *     alias: 'LucyIosCredential',
   *     certificate:
   *       '-----BEGIN CERTIFICATE----- MIIGVDCCBTKCAQEAsNlRJVZn9ZvXcECQm65czs... -----END CERTIFICATE-----',
   *     private_key:
   *       '-----BEGIN RSA PRIVATE KEY----- MIIEpQIBAAKCAQEAsNlRJVZn9ZvXcECQm65czs... -----END RSA PRIVATE KEY-----',
   *     type: 'ios',
   *   });
   * ```
   */
  create(
    body: MobilePushCredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<PushCredentialResponse> {
    return this._client.post('/mobile_push_credentials', { body, ...options });
  }

  /**
   * Retrieves mobile push credential based on the given `push_credential_id`
   */
  retrieve(pushCredentialID: string, options?: RequestOptions): APIPromise<PushCredentialResponse> {
    return this._client.get(path`/mobile_push_credentials/${pushCredentialID}`, options);
  }

  /**
   * List mobile push credentials
   */
  list(
    query: MobilePushCredentialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MobilePushCredentialListResponse> {
    return this._client.get('/mobile_push_credentials', { query, ...options });
  }

  /**
   * Deletes a mobile push credential based on the given `push_credential_id`
   */
  delete(pushCredentialID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/mobile_push_credentials/${pushCredentialID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PushCredential {
  /**
   * Unique identifier of a push credential
   */
  id: string;

  /**
   * Alias to uniquely identify a credential
   */
  alias: string;

  /**
   * Apple certificate for sending push notifications. For iOS only
   */
  certificate: string;

  /**
   * ISO 8601 timestamp when the room was created
   */
  created_at: string;

  /**
   * Apple private key for a given certificate for sending push notifications. For
   * iOS only
   */
  private_key: string;

  /**
   * Google server key for sending push notifications. For Android only
   */
  project_account_json_file: { [key: string]: unknown };

  record_type: string;

  /**
   * Type of mobile push credential. Either <code>ios</code> or <code>android</code>
   */
  type: string;

  /**
   * ISO 8601 timestamp when the room was updated.
   */
  updated_at: string;
}

/**
 * Success response with details about a push credential
 */
export interface PushCredentialResponse {
  data?: PushCredential;
}

/**
 * Mobile mobile push credentials
 */
export interface MobilePushCredentialListResponse {
  data?: Array<PushCredential>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export type MobilePushCredentialCreateParams =
  | MobilePushCredentialCreateParams.CreateIosPushCredentialRequest
  | MobilePushCredentialCreateParams.CreateAndroidPushCredentialRequest;

export declare namespace MobilePushCredentialCreateParams {
  export interface CreateIosPushCredentialRequest {
    /**
     * Alias to uniquely identify the credential
     */
    alias: string;

    /**
     * Certificate as received from APNs
     */
    certificate: string;

    /**
     * Corresponding private key to the certificate as received from APNs
     */
    private_key: string;

    /**
     * Type of mobile push credential. Should be <code>ios</code> here
     */
    type: 'ios';
  }

  export interface CreateAndroidPushCredentialRequest {
    /**
     * Alias to uniquely identify the credential
     */
    alias: string;

    /**
     * Private key file in JSON format
     */
    project_account_json_file: { [key: string]: unknown };

    /**
     * Type of mobile push credential. Should be <code>android</code> here
     */
    type: 'android';
  }
}

export interface MobilePushCredentialListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[alias]
   */
  filter?: MobilePushCredentialListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: MobilePushCredentialListParams.Page;
}

export namespace MobilePushCredentialListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[alias]
   */
  export interface Filter {
    /**
     * Unique mobile push credential alias
     */
    alias?: string;

    /**
     * type of mobile push credentials
     */
    type?: 'ios' | 'android';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load.
     */
    number?: number;

    /**
     * The size of the page.
     */
    size?: number;
  }
}

export declare namespace MobilePushCredentials {
  export {
    type PushCredential as PushCredential,
    type PushCredentialResponse as PushCredentialResponse,
    type MobilePushCredentialListResponse as MobilePushCredentialListResponse,
    type MobilePushCredentialCreateParams as MobilePushCredentialCreateParams,
    type MobilePushCredentialListParams as MobilePushCredentialListParams,
  };
}
