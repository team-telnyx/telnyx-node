// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
  ): APIPromise<OAuthGrantListResponse> {
    return this._client.get('/oauth_grants', { query, ...options });
  }

  /**
   * Revoke an OAuth grant
   */
  delete(id: string, options?: RequestOptions): APIPromise<OAuthGrantDeleteResponse> {
    return this._client.delete(path`/oauth_grants/${id}`, options);
  }
}

export interface OAuthGrantRetrieveResponse {
  data?: OAuthGrantRetrieveResponse.Data;
}

export namespace OAuthGrantRetrieveResponse {
  export interface Data {
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
}

export interface OAuthGrantListResponse {
  data?: Array<OAuthGrantListResponse.Data>;

  meta?: OAuthGrantListResponse.Meta;
}

export namespace OAuthGrantListResponse {
  export interface Data {
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

  export interface Meta {
    /**
     * Current page number
     */
    page_number?: number;

    /**
     * Number of items per page
     */
    page_size?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * Total number of results
     */
    total_results?: number;
  }
}

export interface OAuthGrantDeleteResponse {
  data?: OAuthGrantDeleteResponse.Data;
}

export namespace OAuthGrantDeleteResponse {
  export interface Data {
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
}

export interface OAuthGrantListParams {
  /**
   * Page number
   */
  'page[number]'?: number;

  /**
   * Number of results per page
   */
  'page[size]'?: number;
}

export declare namespace OAuthGrants {
  export {
    type OAuthGrantRetrieveResponse as OAuthGrantRetrieveResponse,
    type OAuthGrantListResponse as OAuthGrantListResponse,
    type OAuthGrantDeleteResponse as OAuthGrantDeleteResponse,
    type OAuthGrantListParams as OAuthGrantListParams,
  };
}
