// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MobilePushCredentials extends APIResource {
  /**
   * Creates a new mobile push credential
   */
  create(
    params: MobilePushCredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<PushCredentialResponse> {
    const { createMobilePushCredentialRequest } = params;
    return this._client.post('/mobile_push_credentials', {
      body: createMobilePushCredentialRequest,
      ...options,
    });
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
  ): PagePromise<PushCredentialsDefaultFlatPagination, PushCredential> {
    return this._client.getAPIList('/mobile_push_credentials', DefaultFlatPagination<PushCredential>, {
      query,
      ...options,
    });
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

export type PushCredentialsDefaultFlatPagination = DefaultFlatPagination<PushCredential>;

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

export interface MobilePushCredentialCreateParams {
  createMobilePushCredentialRequest:
    | MobilePushCredentialCreateParams.Ios
    | MobilePushCredentialCreateParams.Android;
}

export namespace MobilePushCredentialCreateParams {
  export interface Ios {
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

  export interface Android {
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

export interface MobilePushCredentialListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[alias]
   */
  filter?: MobilePushCredentialListParams.Filter;
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
}

export declare namespace MobilePushCredentials {
  export {
    type PushCredential as PushCredential,
    type PushCredentialResponse as PushCredentialResponse,
    type PushCredentialsDefaultFlatPagination as PushCredentialsDefaultFlatPagination,
    type MobilePushCredentialCreateParams as MobilePushCredentialCreateParams,
    type MobilePushCredentialListParams as MobilePushCredentialListParams,
  };
}
