// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OAuthClients extends APIResource {
  /**
   * Create a new OAuth client
   *
   * @example
   * ```ts
   * const oauthClient = await client.oauthClients.create({
   *   allowed_grant_types: ['client_credentials'],
   *   allowed_scopes: ['admin'],
   *   client_type: 'public',
   *   name: 'My OAuth client',
   * });
   * ```
   */
  create(body: OAuthClientCreateParams, options?: RequestOptions): APIPromise<OAuthClientCreateResponse> {
    return this._client.post('/oauth_clients', { body, ...options });
  }

  /**
   * Retrieve a single OAuth client by ID
   *
   * @example
   * ```ts
   * const oauthClient = await client.oauthClients.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OAuthClientRetrieveResponse> {
    return this._client.get(path`/oauth_clients/${id}`, options);
  }

  /**
   * Update an existing OAuth client
   *
   * @example
   * ```ts
   * const oauthClient = await client.oauthClients.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    id: string,
    body: OAuthClientUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OAuthClientUpdateResponse> {
    return this._client.put(path`/oauth_clients/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of OAuth clients for the authenticated user
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const oauthClient of client.oauthClients.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OAuthClientListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OAuthClientsDefaultFlatPagination, OAuthClient> {
    return this._client.getAPIList('/oauth_clients', DefaultFlatPagination<OAuthClient>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an OAuth client
   *
   * @example
   * ```ts
   * await client.oauthClients.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/oauth_clients/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type OAuthClientsDefaultFlatPagination = DefaultFlatPagination<OAuthClient>;

export interface OAuthClient {
  /**
   * OAuth client identifier
   */
  client_id: string;

  /**
   * OAuth client type
   */
  client_type: 'public' | 'confidential';

  /**
   * Timestamp when the client was created
   */
  created_at: string;

  /**
   * Human-readable name for the OAuth client
   */
  name: string;

  /**
   * Organization ID that owns this OAuth client
   */
  org_id: string;

  /**
   * Record type identifier
   */
  record_type: 'oauth_client';

  /**
   * Whether PKCE (Proof Key for Code Exchange) is required for this client
   */
  require_pkce: boolean;

  /**
   * Timestamp when the client was last updated
   */
  updated_at: string;

  /**
   * User ID that created this OAuth client
   */
  user_id: string;

  /**
   * List of allowed OAuth grant types
   */
  allowed_grant_types?: Array<'client_credentials' | 'authorization_code' | 'refresh_token'>;

  /**
   * List of allowed OAuth scopes
   */
  allowed_scopes?: Array<string>;

  /**
   * Client secret (only included when available, for confidential clients)
   */
  client_secret?: string | null;

  /**
   * URL of the client logo
   */
  logo_uri?: string | null;

  /**
   * URL of the client's privacy policy
   */
  policy_uri?: string | null;

  /**
   * List of allowed redirect URIs
   */
  redirect_uris?: Array<string>;

  /**
   * URL of the client's terms of service
   */
  tos_uri?: string | null;
}

export interface PaginationMetaOAuth {
  /**
   * Current page number
   */
  page_number: number;

  /**
   * Total number of pages
   */
  total_pages: number;

  /**
   * Number of items per page
   */
  page_size?: number;

  /**
   * Total number of results
   */
  total_results?: number;
}

export interface OAuthClientCreateResponse {
  data?: OAuthClient;
}

export interface OAuthClientRetrieveResponse {
  data?: OAuthClient;
}

export interface OAuthClientUpdateResponse {
  data?: OAuthClient;
}

export interface OAuthClientCreateParams {
  /**
   * List of allowed OAuth grant types
   */
  allowed_grant_types: Array<'client_credentials' | 'authorization_code' | 'refresh_token'>;

  /**
   * List of allowed OAuth scopes
   */
  allowed_scopes: Array<string>;

  /**
   * OAuth client type
   */
  client_type: 'public' | 'confidential';

  /**
   * The name of the OAuth client
   */
  name: string;

  /**
   * URL of the client logo
   */
  logo_uri?: string;

  /**
   * URL of the client's privacy policy
   */
  policy_uri?: string;

  /**
   * List of redirect URIs (required for authorization_code flow)
   */
  redirect_uris?: Array<string>;

  /**
   * Whether PKCE (Proof Key for Code Exchange) is required for this client
   */
  require_pkce?: boolean;

  /**
   * URL of the client's terms of service
   */
  tos_uri?: string;
}

export interface OAuthClientUpdateParams {
  /**
   * List of allowed OAuth grant types
   */
  allowed_grant_types?: Array<'client_credentials' | 'authorization_code' | 'refresh_token'>;

  /**
   * List of allowed OAuth scopes
   */
  allowed_scopes?: Array<string>;

  /**
   * URL of the client logo
   */
  logo_uri?: string;

  /**
   * The name of the OAuth client
   */
  name?: string;

  /**
   * URL of the client's privacy policy
   */
  policy_uri?: string;

  /**
   * List of redirect URIs
   */
  redirect_uris?: Array<string>;

  /**
   * Whether PKCE (Proof Key for Code Exchange) is required for this client
   */
  require_pkce?: boolean;

  /**
   * URL of the client's terms of service
   */
  tos_uri?: string;
}

export interface OAuthClientListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by allowed grant type
   */
  'filter[allowed_grant_types][contains]'?: 'client_credentials' | 'authorization_code' | 'refresh_token';

  /**
   * Filter by client ID
   */
  'filter[client_id]'?: string;

  /**
   * Filter by client type
   */
  'filter[client_type]'?: 'confidential' | 'public';

  /**
   * Filter by exact client name
   */
  'filter[name]'?: string;

  /**
   * Filter by client name containing text
   */
  'filter[name][contains]'?: string;

  /**
   * Filter by verification status
   */
  'filter[verified]'?: boolean;
}

export declare namespace OAuthClients {
  export {
    type OAuthClient as OAuthClient,
    type PaginationMetaOAuth as PaginationMetaOAuth,
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientRetrieveResponse as OAuthClientRetrieveResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientsDefaultFlatPagination as OAuthClientsDefaultFlatPagination,
    type OAuthClientCreateParams as OAuthClientCreateParams,
    type OAuthClientUpdateParams as OAuthClientUpdateParams,
    type OAuthClientListParams as OAuthClientListParams,
  };
}
