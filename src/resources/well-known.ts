// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WellKnown extends APIResource {
  /**
   * OAuth 2.0 Authorization Server Metadata (RFC 8414)
   */
  retrieveAuthorizationServerMetadata(
    options?: RequestOptions,
  ): APIPromise<WellKnownRetrieveAuthorizationServerMetadataResponse> {
    return this._client.get('/.well-known/oauth-authorization-server', {
      defaultBaseURL: 'https://api.telnyx.com',
      ...options,
    });
  }

  /**
   * OAuth 2.0 Protected Resource Metadata for resource discovery
   */
  retrieveProtectedResourceMetadata(
    options?: RequestOptions,
  ): APIPromise<WellKnownRetrieveProtectedResourceMetadataResponse> {
    return this._client.get('/.well-known/oauth-protected-resource', {
      defaultBaseURL: 'https://api.telnyx.com',
      ...options,
    });
  }
}

export interface WellKnownRetrieveAuthorizationServerMetadataResponse {
  /**
   * Authorization endpoint URL
   */
  authorization_endpoint?: string;

  /**
   * Supported PKCE code challenge methods
   */
  code_challenge_methods_supported?: Array<string>;

  /**
   * Supported grant types
   */
  grant_types_supported?: Array<string>;

  /**
   * Token introspection endpoint URL
   */
  introspection_endpoint?: string;

  /**
   * Authorization server issuer URL
   */
  issuer?: string;

  /**
   * JWK Set endpoint URL
   */
  jwks_uri?: string;

  /**
   * Dynamic client registration endpoint URL
   */
  registration_endpoint?: string;

  /**
   * Supported response types
   */
  response_types_supported?: Array<string>;

  /**
   * Supported OAuth scopes
   */
  scopes_supported?: Array<string>;

  /**
   * Token endpoint URL
   */
  token_endpoint?: string;

  /**
   * Supported token endpoint authentication methods
   */
  token_endpoint_auth_methods_supported?: Array<string>;
}

export interface WellKnownRetrieveProtectedResourceMetadataResponse {
  /**
   * List of authorization server URLs
   */
  authorization_servers?: Array<string>;

  /**
   * Protected resource URL
   */
  resource?: string;
}

export declare namespace WellKnown {
  export {
    type WellKnownRetrieveAuthorizationServerMetadataResponse as WellKnownRetrieveAuthorizationServerMetadataResponse,
    type WellKnownRetrieveProtectedResourceMetadataResponse as WellKnownRetrieveProtectedResourceMetadataResponse,
  };
}
