// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorFlatPagination, type CursorFlatPaginationParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Read and write keys within a KV namespace
 */
export class Keys extends APIResource {
  /**
   * Lists the keys in a namespace. Returns key names and metadata only, never
   * values. Results are paginated with `limit` and an opaque `cursor`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const keyListResponse of client.storage.kvs.keys.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: KeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<KeyListResponsesCursorFlatPagination, KeyListResponse> {
    return this._client.getAPIList(path`/storage/kvs/${id}/keys`, CursorFlatPagination<KeyListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a key. Idempotent: deleting a key that does not exist still succeeds.
   * The namespace itself must exist and be provisioned.
   *
   * @example
   * ```ts
   * await client.storage.kvs.keys.delete('key', {
   *   id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  delete(key: string, params: KeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/storage/kvs/${id}/keys/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the raw stored value for a key. The response body is the value exactly
   * as it was written; the `Content-Type` header echoes the value's stored content
   * type (defaults to `application/octet-stream`).
   *
   * @example
   * ```ts
   * const key = await client.storage.kvs.keys.retrieve('key', {
   *   id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   *
   * const content = await key.blob();
   * console.log(content);
   * ```
   */
  retrieve(key: string, params: KeyRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const { id } = params;
    return this._client.get(path`/storage/kvs/${id}/keys/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Creates or replaces the value for a key. The request body is stored verbatim as
   * the value — no base64, no JSON envelope — up to 1 MiB. The request's
   * `Content-Type` header is stored with the value and echoed back on retrieval.
   * Returns `201` when the key is created and `200` when an existing key is updated.
   *
   * @example
   * ```ts
   * await client.storage.kvs.keys.update(
   *   'key',
   *   fs.createReadStream('path/to/file'),
   *   { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  update(
    key: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: KeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, ttl_secs } = params;
    return this._client.put(path`/storage/kvs/${id}/keys/${key}`, {
      body: body,
      query: { ttl_secs },
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export type KeyListResponsesCursorFlatPagination = CursorFlatPagination<KeyListResponse>;

export interface KeyListResponse {
  key?: string;

  /**
   * Size of the stored value in bytes.
   */
  size_bytes?: number;

  updated_at?: string;
}

export interface KeyListParams extends CursorFlatPaginationParams {
  /**
   * Return only keys that start with this prefix.
   */
  prefix?: string;
}

export interface KeyDeleteParams {
  /**
   * KV namespace ID
   */
  id: string;
}

export interface KeyRetrieveParams {
  /**
   * KV namespace ID
   */
  id: string;
}

export interface KeyUpdateParams {
  /**
   * Path param: KV namespace ID
   */
  id: string;

  /**
   * Query param: Time-to-live in seconds. When set, the key expires and is deleted
   * after this duration. Requires a namespace provisioned with TTL support;
   * namespaces without it return a `409`.
   */
  ttl_secs?: number;
}

export declare namespace Keys {
  export {
    type KeyListResponse as KeyListResponse,
    type KeyListResponsesCursorFlatPagination as KeyListResponsesCursorFlatPagination,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyRetrieveParams as KeyRetrieveParams,
    type KeyUpdateParams as KeyUpdateParams,
  };
}
