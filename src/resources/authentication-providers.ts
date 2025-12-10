// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AuthenticationProviders extends APIResource {
  /**
   * Creates an authentication provider.
   *
   * @example
   * ```ts
   * const authenticationProvider =
   *   await client.authenticationProviders.create({
   *     name: 'Okta',
   *     settings: {
   *       idp_cert_fingerprint:
   *         '13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7',
   *       idp_entity_id:
   *         'https://myorg.myidp.com/saml/metadata',
   *       idp_sso_target_url:
   *         'https://myorg.myidp.com/trust/saml2/http-post/sso',
   *     },
   *     short_name: 'myorg',
   *   });
   * ```
   */
  create(
    body: AuthenticationProviderCreateParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationProviderCreateResponse> {
    return this._client.post('/authentication_providers', { body, ...options });
  }

  /**
   * Retrieves the details of an existing authentication provider.
   *
   * @example
   * ```ts
   * const authenticationProvider =
   *   await client.authenticationProviders.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuthenticationProviderRetrieveResponse> {
    return this._client.get(path`/authentication_providers/${id}`, options);
  }

  /**
   * Updates settings of an existing authentication provider.
   *
   * @example
   * ```ts
   * const authenticationProvider =
   *   await client.authenticationProviders.update('id', {
   *     active: true,
   *     name: 'Okta',
   *     settings: {
   *       idp_entity_id:
   *         'https://myorg.myidp.com/saml/metadata',
   *       idp_sso_target_url:
   *         'https://myorg.myidp.com/trust/saml2/http-post/sso',
   *       idp_cert_fingerprint:
   *         '13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7',
   *       idp_cert_fingerprint_algorithm: 'sha1',
   *     },
   *     short_name: 'myorg',
   *   });
   * ```
   */
  update(
    id: string,
    body: AuthenticationProviderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationProviderUpdateResponse> {
    return this._client.patch(path`/authentication_providers/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your SSO authentication providers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const authenticationProvider of client.authenticationProviders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AuthenticationProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuthenticationProvidersDefaultFlatPagination, AuthenticationProvider> {
    return this._client.getAPIList(
      '/authentication_providers',
      DefaultFlatPagination<AuthenticationProvider>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing authentication provider.
   *
   * @example
   * ```ts
   * const authenticationProvider =
   *   await client.authenticationProviders.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AuthenticationProviderDeleteResponse> {
    return this._client.delete(path`/authentication_providers/${id}`, options);
  }
}

export type AuthenticationProvidersDefaultFlatPagination = DefaultFlatPagination<AuthenticationProvider>;

export interface AuthenticationProvider {
  /**
   * Uniquely identifies the authentication provider.
   */
  id?: string;

  /**
   * The active status of the authentication provider
   */
  active?: boolean;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The name associated with the authentication provider.
   */
  name?: string;

  /**
   * The id from the Organization the authentication provider belongs to.
   */
  organization_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The settings associated with the authentication provider.
   */
  settings?: AuthenticationProvider.Settings;

  /**
   * The short name associated with the authentication provider. This must be unique
   * and URL-friendly, as it's going to be part of the login URL.
   */
  short_name?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace AuthenticationProvider {
  /**
   * The settings associated with the authentication provider.
   */
  export interface Settings {
    /**
     * The Assertion Consumer Service URL for the service provider (Telnyx).
     */
    assertion_consumer_service_url?: string;

    /**
     * The certificate fingerprint for the identity provider (IdP)
     */
    idp_cert_fingerprint?: string;

    /**
     * The algorithm used to generate the identity provider's (IdP) certificate
     * fingerprint
     */
    idp_cert_fingerprint_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512';

    /**
     * The Entity ID for the identity provider (IdP).
     */
    idp_entity_id?: string;

    /**
     * The SSO target url for the identity provider (IdP).
     */
    idp_sso_target_url?: string;

    /**
     * The name identifier format associated with the authentication provider. This
     * must be the same for both the Identity Provider (IdP) and the service provider
     * (Telnyx).
     */
    name_identifier_format?: string;

    /**
     * The Entity ID for the service provider (Telnyx).
     */
    service_provider_entity_id?: string;
  }
}

export interface PaginationMeta {
  page_number: number;

  total_pages: number;

  page_size?: number;

  total_results?: number;
}

/**
 * The settings associated with the authentication provider.
 */
export interface Settings {
  /**
   * The certificate fingerprint for the identity provider (IdP)
   */
  idp_cert_fingerprint: string;

  /**
   * The Entity ID for the identity provider (IdP).
   */
  idp_entity_id: string;

  /**
   * The SSO target url for the identity provider (IdP).
   */
  idp_sso_target_url: string;

  /**
   * The algorithm used to generate the identity provider's (IdP) certificate
   * fingerprint
   */
  idp_cert_fingerprint_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512';
}

export interface AuthenticationProviderCreateResponse {
  data?: AuthenticationProvider;
}

export interface AuthenticationProviderRetrieveResponse {
  data?: AuthenticationProvider;
}

export interface AuthenticationProviderUpdateResponse {
  data?: AuthenticationProvider;
}

export interface AuthenticationProviderDeleteResponse {
  data?: AuthenticationProvider;
}

export interface AuthenticationProviderCreateParams {
  /**
   * The name associated with the authentication provider.
   */
  name: string;

  /**
   * The settings associated with the authentication provider.
   */
  settings: Settings;

  /**
   * The short name associated with the authentication provider. This must be unique
   * and URL-friendly, as it's going to be part of the login URL.
   */
  short_name: string;

  /**
   * The active status of the authentication provider
   */
  active?: boolean;

  /**
   * The URL for the identity provider metadata file to populate the settings
   * automatically. If the settings attribute is provided, that will be used instead.
   */
  settings_url?: string;
}

export interface AuthenticationProviderUpdateParams {
  /**
   * The active status of the authentication provider
   */
  active?: boolean;

  /**
   * The name associated with the authentication provider.
   */
  name?: string;

  /**
   * The settings associated with the authentication provider.
   */
  settings?: Settings;

  /**
   * The URL for the identity provider metadata file to populate the settings
   * automatically. If the settings attribute is provided, that will be used instead.
   */
  settings_url?: string;

  /**
   * The short name associated with the authentication provider. This must be unique
   * and URL-friendly, as it's going to be part of the login URL.
   */
  short_name?: string;
}

export interface AuthenticationProviderListParams extends DefaultFlatPaginationParams {
  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code>-</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>name</code>: sorts the result by the
   *     <code>name</code> field in ascending order.
   *   </li>
   *   <li>
   *     <code>-name</code>: sorts the result by the
   *     <code>name</code> field in descending order.
   *   </li>
   * </ul><br/>If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?:
    | 'name'
    | '-name'
    | 'short_name'
    | '-short_name'
    | 'active'
    | '-active'
    | 'created_at'
    | '-created_at'
    | 'updated_at'
    | '-updated_at';
}

export declare namespace AuthenticationProviders {
  export {
    type AuthenticationProvider as AuthenticationProvider,
    type PaginationMeta as PaginationMeta,
    type Settings as Settings,
    type AuthenticationProviderCreateResponse as AuthenticationProviderCreateResponse,
    type AuthenticationProviderRetrieveResponse as AuthenticationProviderRetrieveResponse,
    type AuthenticationProviderUpdateResponse as AuthenticationProviderUpdateResponse,
    type AuthenticationProviderDeleteResponse as AuthenticationProviderDeleteResponse,
    type AuthenticationProvidersDefaultFlatPagination as AuthenticationProvidersDefaultFlatPagination,
    type AuthenticationProviderCreateParams as AuthenticationProviderCreateParams,
    type AuthenticationProviderUpdateParams as AuthenticationProviderUpdateParams,
    type AuthenticationProviderListParams as AuthenticationProviderListParams,
  };
}
