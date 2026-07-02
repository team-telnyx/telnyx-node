// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import {
  KeyDeleteParams,
  KeyListParams,
  KeyListResponse,
  KeyRetrieveParams,
  KeyUpdateParams,
  Keys,
} from './keys';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage KV storage namespaces
 */
export class Kvs extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Lists the KV namespaces for the authenticated user's organization. Results use
   * page-based pagination (`page[number]`/`page[size]`).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const kvNamespace of client.storage.kvs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: KvListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<KvNamespacesDefaultFlatPagination, KvNamespace> {
    return this._client.getAPIList('/storage/kvs', DefaultFlatPagination<KvNamespace>, { query, ...options });
  }

  /**
   * Creates a new KV namespace. Provisioning is asynchronous: the namespace is
   * returned with status `pending` and becomes usable once it reaches
   * `provision_ok`.
   *
   * @example
   * ```ts
   * const kvNamespaceResponseWrapper =
   *   await client.storage.kvs.create({ name: 'my-cache' });
   * ```
   */
  create(body: KvCreateParams, options?: RequestOptions): APIPromise<KvNamespaceResponseWrapper> {
    return this._client.post('/storage/kvs', { body, ...options });
  }

  /**
   * Deletes a KV namespace and all of the keys it contains. Deletion is
   * asynchronous: the namespace is returned with status `deleting`. Deleting a
   * namespace whose deletion is already in progress returns a `409`.
   *
   * @example
   * ```ts
   * const kvNamespaceResponseWrapper =
   *   await client.storage.kvs.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<KvNamespaceResponseWrapper> {
    return this._client.delete(path`/storage/kvs/${id}`, options);
  }

  /**
   * Retrieves a KV namespace by its ID, including its provisioning status.
   *
   * @example
   * ```ts
   * const kvNamespaceResponseWrapper =
   *   await client.storage.kvs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<KvNamespaceResponseWrapper> {
    return this._client.get(path`/storage/kvs/${id}`, options);
  }
}

export type KvNamespacesDefaultFlatPagination = DefaultFlatPagination<KvNamespace>;

export interface KvNamespace {
  id?: string;

  created_at?: string;

  name?: string;

  record_type?: string;

  /**
   * Provisioning status. A namespace is usable once `status` is `provision_ok`. Once
   * deletion completes, the namespace no longer appears in the API.
   */
  status?: 'pending' | 'provision_ok' | 'provision_failed' | 'deleting' | 'delete_failed';

  updated_at?: string;
}

export interface KvNamespaceResponseWrapper {
  data?: KvNamespace;
}

export interface KvListParams extends DefaultFlatPaginationParams {}

export interface KvCreateParams {
  /**
   * Namespace name. May contain lowercase letters, numbers, and hyphens only.
   */
  name: string;
}

Kvs.Keys = Keys;

export declare namespace Kvs {
  export {
    type KvNamespace as KvNamespace,
    type KvNamespaceResponseWrapper as KvNamespaceResponseWrapper,
    type KvNamespacesDefaultFlatPagination as KvNamespacesDefaultFlatPagination,
    type KvListParams as KvListParams,
    type KvCreateParams as KvCreateParams,
  };

  export {
    Keys as Keys,
    type KeyListResponse as KeyListResponse,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyRetrieveParams as KeyRetrieveParams,
    type KeyUpdateParams as KeyUpdateParams,
  };
}
