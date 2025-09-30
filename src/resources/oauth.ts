// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OAuth extends APIResource {
  /**
   * OAuth 2.0 authorization endpoint for the authorization code flow
   *
   * @example
   * ```ts
   * await client.oauth.authorize({
   *   client_id: 'client_id',
   *   redirect_uri: 'https://example.com',
   *   response_type: 'code',
   * });
   * ```
   */
  authorize(query: OAuthAuthorizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/oauth/authorize', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create an OAuth authorization grant
   *
   * @example
   * ```ts
   * const response = await client.oauth.createGrant({
   *   allowed: true,
   *   consent_token: 'consent_token',
   * });
   * ```
   */
  createGrant(body: OAuthCreateGrantParams, options?: RequestOptions): APIPromise<OAuthCreateGrantResponse> {
    return this._client.post('/oauth/grants', { body, ...options });
  }

  /**
   * Exchange authorization code, client credentials, or refresh token for access
   * token
   *
   * @example
   * ```ts
   * const response = await client.oauth.exchangeToken({
   *   grant_type: 'client_credentials',
   * });
   * ```
   */
  exchangeToken(
    body: OAuthExchangeTokenParams,
    options?: RequestOptions,
  ): APIPromise<OAuthExchangeTokenResponse> {
    return this._client.post('/oauth/token', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Introspect an OAuth access token to check its validity and metadata
   *
   * @example
   * ```ts
   * const response = await client.oauth.introspectToken({
   *   token: 'token',
   * });
   * ```
   */
  introspectToken(
    body: OAuthIntrospectTokenParams,
    options?: RequestOptions,
  ): APIPromise<OAuthIntrospectTokenResponse> {
    return this._client.post('/oauth/introspect', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Register a new OAuth client dynamically (RFC 7591)
   *
   * @example
   * ```ts
   * const response = await client.oauth.registerClient();
   * ```
   */
  registerClient(
    body: OAuthRegisterClientParams,
    options?: RequestOptions,
  ): APIPromise<OAuthRegisterClientResponse> {
    return this._client.post('/oauth/register', { body, ...options });
  }

  /**
   * Retrieve details about an OAuth consent token
   *
   * @example
   * ```ts
   * const response = await client.oauth.retrieveConsent(
   *   'consent_token',
   * );
   * ```
   */
  retrieveConsent(consentToken: string, options?: RequestOptions): APIPromise<OAuthRetrieveConsentResponse> {
    return this._client.get(path`/oauth/consent/${consentToken}`, options);
  }

  /**
   * Retrieve the JSON Web Key Set for token verification
   *
   * @example
   * ```ts
   * const response = await client.oauth.retrieveJwks();
   * ```
   */
  retrieveJwks(options?: RequestOptions): APIPromise<OAuthRetrieveJwksResponse> {
    return this._client.get('/oauth/jwks', options);
  }
}

export interface OAuthCreateGrantResponse {
  /**
   * Redirect URI with authorization code or error
   */
  redirect_uri: string;
}

export interface OAuthExchangeTokenResponse {
  /**
   * The access token
   */
  access_token: string;

  /**
   * Token lifetime in seconds
   */
  expires_in: number;

  /**
   * Token type
   */
  token_type: 'Bearer';

  /**
   * Refresh token (if applicable)
   */
  refresh_token?: string;

  /**
   * Space-separated list of granted scopes
   */
  scope?: string;
}

export interface OAuthIntrospectTokenResponse {
  /**
   * Whether the token is active
   */
  active: boolean;

  /**
   * Audience
   */
  aud?: string;

  /**
   * Client identifier
   */
  client_id?: string;

  /**
   * Expiration timestamp
   */
  exp?: number;

  /**
   * Issued at timestamp
   */
  iat?: number;

  /**
   * Issuer
   */
  iss?: string;

  /**
   * Space-separated list of scopes
   */
  scope?: string;
}

export interface OAuthRegisterClientResponse {
  /**
   * Unique client identifier
   */
  client_id: string;

  /**
   * Unix timestamp of when the client ID was issued
   */
  client_id_issued_at: number;

  /**
   * Human-readable client name
   */
  client_name?: string;

  /**
   * Client secret (only for confidential clients)
   */
  client_secret?: string;

  /**
   * Array of allowed grant types
   */
  grant_types?: Array<string>;

  /**
   * URL of the client logo
   */
  logo_uri?: string;

  /**
   * URL of the client's privacy policy
   */
  policy_uri?: string;

  /**
   * Array of redirection URIs
   */
  redirect_uris?: Array<string>;

  /**
   * Array of allowed response types
   */
  response_types?: Array<string>;

  /**
   * Space-separated scope values
   */
  scope?: string;

  /**
   * Token endpoint authentication method
   */
  token_endpoint_auth_method?: string;

  /**
   * URL of the client's terms of service
   */
  tos_uri?: string;
}

export interface OAuthRetrieveConsentResponse {
  data?: OAuthRetrieveConsentResponse.Data;
}

export namespace OAuthRetrieveConsentResponse {
  export interface Data {
    /**
     * Client ID
     */
    client_id?: string;

    /**
     * URL of the client logo
     */
    logo_uri?: string | null;

    /**
     * Client name
     */
    name?: string;

    /**
     * URL of the client's privacy policy
     */
    policy_uri?: string | null;

    /**
     * The redirect URI for this authorization
     */
    redirect_uri?: string;

    requested_scopes?: Array<Data.RequestedScope>;

    /**
     * URL of the client's terms of service
     */
    tos_uri?: string | null;

    /**
     * Whether the client is verified
     */
    verified?: boolean;
  }

  export namespace Data {
    export interface RequestedScope {
      /**
       * Scope ID
       */
      id?: string;

      /**
       * Scope description
       */
      description?: string;

      /**
       * Scope name
       */
      name?: string;
    }
  }
}

export interface OAuthRetrieveJwksResponse {
  keys?: Array<OAuthRetrieveJwksResponse.Key>;
}

export namespace OAuthRetrieveJwksResponse {
  export interface Key {
    /**
     * Algorithm
     */
    alg?: string;

    /**
     * Key ID
     */
    kid?: string;

    /**
     * Key type
     */
    kty?: string;

    /**
     * Key use
     */
    use?: string;
  }
}

export interface OAuthAuthorizeParams {
  /**
   * OAuth client identifier
   */
  client_id: string;

  /**
   * Redirect URI
   */
  redirect_uri: string;

  /**
   * OAuth response type
   */
  response_type: 'code';

  /**
   * PKCE code challenge
   */
  code_challenge?: string;

  /**
   * PKCE code challenge method
   */
  code_challenge_method?: 'plain' | 'S256';

  /**
   * Space-separated list of requested scopes
   */
  scope?: string;

  /**
   * State parameter for CSRF protection
   */
  state?: string;
}

export interface OAuthCreateGrantParams {
  /**
   * Whether the grant is allowed
   */
  allowed: boolean;

  /**
   * Consent token
   */
  consent_token: string;
}

export interface OAuthExchangeTokenParams {
  /**
   * OAuth 2.0 grant type
   */
  grant_type: 'client_credentials' | 'authorization_code' | 'refresh_token';

  /**
   * OAuth client ID (if not using HTTP Basic auth)
   */
  client_id?: string;

  /**
   * OAuth client secret (if not using HTTP Basic auth)
   */
  client_secret?: string;

  /**
   * Authorization code (for authorization_code flow)
   */
  code?: string;

  /**
   * PKCE code verifier (for authorization_code flow)
   */
  code_verifier?: string;

  /**
   * Redirect URI (for authorization_code flow)
   */
  redirect_uri?: string;

  /**
   * Refresh token (for refresh_token flow)
   */
  refresh_token?: string;

  /**
   * Space-separated list of requested scopes (for client_credentials)
   */
  scope?: string;
}

export interface OAuthIntrospectTokenParams {
  /**
   * The token to introspect
   */
  token: string;
}

export interface OAuthRegisterClientParams {
  /**
   * Human-readable string name of the client to be presented to the end-user
   */
  client_name?: string;

  /**
   * Array of OAuth 2.0 grant type strings that the client may use
   */
  grant_types?: Array<'authorization_code' | 'client_credentials' | 'refresh_token'>;

  /**
   * URL of the client logo
   */
  logo_uri?: string;

  /**
   * URL of the client's privacy policy
   */
  policy_uri?: string;

  /**
   * Array of redirection URI strings for use in redirect-based flows
   */
  redirect_uris?: Array<string>;

  /**
   * Array of the OAuth 2.0 response type strings that the client may use
   */
  response_types?: Array<string>;

  /**
   * Space-separated string of scope values that the client may use
   */
  scope?: string;

  /**
   * Authentication method for the token endpoint
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * URL of the client's terms of service
   */
  tos_uri?: string;
}

export declare namespace OAuth {
  export {
    type OAuthCreateGrantResponse as OAuthCreateGrantResponse,
    type OAuthExchangeTokenResponse as OAuthExchangeTokenResponse,
    type OAuthIntrospectTokenResponse as OAuthIntrospectTokenResponse,
    type OAuthRegisterClientResponse as OAuthRegisterClientResponse,
    type OAuthRetrieveConsentResponse as OAuthRetrieveConsentResponse,
    type OAuthRetrieveJwksResponse as OAuthRetrieveJwksResponse,
    type OAuthAuthorizeParams as OAuthAuthorizeParams,
    type OAuthCreateGrantParams as OAuthCreateGrantParams,
    type OAuthExchangeTokenParams as OAuthExchangeTokenParams,
    type OAuthIntrospectTokenParams as OAuthIntrospectTokenParams,
    type OAuthRegisterClientParams as OAuthRegisterClientParams,
  };
}
