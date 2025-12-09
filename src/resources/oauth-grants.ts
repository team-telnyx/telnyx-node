// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OAuthGrants extends APIResource {
  /**
   * Retrieve a single OAuth grant by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OAuthGrantRetrieveResponse> {
    return this._client.get(path`/oauth_grants/${id}`, options);
  }

  /**
   * Retrieve a paginated list of OAuth grants for the authenticated user
   */
  list(
    query: OAuthGrantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OAuthGrantsDefaultFlatPagination, OAuthGrant> {
    return this._client.getAPIList('/oauth_grants', DefaultFlatPagination<OAuthGrant>, { query, ...options });
  }

  /**
   * Revoke an OAuth grant
   */
  delete(id: string, options?: RequestOptions): APIPromise<OAuthGrantDeleteResponse> {
    return this._client.delete(path`/oauth_grants/${id}`, options);
  }
}

export type OAuthGrantsDefaultFlatPagination = DefaultFlatPagination<OAuthGrant>;

export interface OAuthGrant {
  /**
   * Unique identifier for the OAuth grant
   */
  id: string;

  /**
   * OAuth client identifier
   */
  client_id: string;

  /**
   * Timestamp when the grant was created
   */
  created_at: string;

  /**
   * Record type identifier
   */
  record_type: 'oauth_grant';

  /**
   * List of granted OAuth scopes
   */
  scopes: Array<string>;

  /**
   * Timestamp when the grant was last used
   */
  last_used_at?: string | null;
}

export interface OAuthGrantRetrieveResponse {
  data?: OAuthGrant;
}

export interface OAuthGrantDeleteResponse {
  data?: OAuthGrant;
}

export interface OAuthGrantListParams extends DefaultFlatPaginationParams {}

export declare namespace OAuthGrants {
  export {
    type OAuthGrant as OAuthGrant,
    type OAuthGrantRetrieveResponse as OAuthGrantRetrieveResponse,
    type OAuthGrantDeleteResponse as OAuthGrantDeleteResponse,
    type OAuthGrantsDefaultFlatPagination as OAuthGrantsDefaultFlatPagination,
    type OAuthGrantListParams as OAuthGrantListParams,
  };
}
