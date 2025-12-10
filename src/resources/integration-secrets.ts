// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IntegrationSecrets extends APIResource {
  /**
   * Create a new secret with an associated identifier that can be used to securely
   * integrate with other services.
   *
   * @example
   * ```ts
   * const integrationSecret =
   *   await client.integrationSecrets.create({
   *     identifier: 'my_secret',
   *     type: 'bearer',
   *     token: 'my_secret_value',
   *   });
   * ```
   */
  create(
    body: IntegrationSecretCreateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationSecretCreateResponse> {
    return this._client.post('/integration_secrets', { body, ...options });
  }

  /**
   * Retrieve a list of all integration secrets configured by the user.
   *
   * @example
   * ```ts
   * const integrationSecrets =
   *   await client.integrationSecrets.list();
   * ```
   */
  list(
    query: IntegrationSecretListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationSecretListResponse> {
    return this._client.get('/integration_secrets', { query, ...options });
  }

  /**
   * Delete an integration secret given its ID.
   *
   * @example
   * ```ts
   * await client.integrationSecrets.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/integration_secrets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IntegrationSecret {
  id: string;

  created_at: string;

  identifier: string;

  record_type: string;

  updated_at?: string;
}

export interface IntegrationSecretCreateResponse {
  data: IntegrationSecret;
}

export interface IntegrationSecretListResponse {
  data: Array<IntegrationSecret>;

  meta: IntegrationSecretListResponse.Meta;
}

export namespace IntegrationSecretListResponse {
  export interface Meta {
    page_number: number;

    page_size: number;

    total_pages: number;

    total_results: number;
  }
}

export interface IntegrationSecretCreateParams {
  /**
   * The unique identifier of the secret.
   */
  identifier: string;

  /**
   * The type of secret.
   */
  type: 'bearer' | 'basic';

  /**
   * The token for the secret. Required for bearer type secrets, ignored otherwise.
   */
  token?: string;

  /**
   * The password for the secret. Required for basic type secrets, ignored otherwise.
   */
  password?: string;

  /**
   * The username for the secret. Required for basic type secrets, ignored otherwise.
   */
  username?: string;
}

export interface IntegrationSecretListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type]
   */
  filter?: IntegrationSecretListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: IntegrationSecretListParams.Page;
}

export namespace IntegrationSecretListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type]
   */
  export interface Filter {
    type?: 'bearer' | 'basic';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    number?: number;

    size?: number;
  }
}

export declare namespace IntegrationSecrets {
  export {
    type IntegrationSecret as IntegrationSecret,
    type IntegrationSecretCreateResponse as IntegrationSecretCreateResponse,
    type IntegrationSecretListResponse as IntegrationSecretListResponse,
    type IntegrationSecretCreateParams as IntegrationSecretCreateParams,
    type IntegrationSecretListParams as IntegrationSecretListParams,
  };
}
