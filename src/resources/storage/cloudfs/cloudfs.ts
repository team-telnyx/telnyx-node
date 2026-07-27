// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudfsAPI from './cloudfs';
import * as ActionsAPI from './actions';
import { ActionRotateMetaTokenParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage CloudFS filesystems — JuiceFS-compatible filesystems backed by Telnyx Cloud Storage
 */
export class Cloudfs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Lists the CloudFS filesystems for the authenticated user's organization. Results
   * use cursor-based pagination: fetch the next page by passing `meta.cursors.after`
   * as `page[after]`, or follow the `meta.next` URL.
   *
   * @example
   * ```ts
   * const cloudfs = await client.storage.cloudfs.list();
   * ```
   */
  list(
    query: CloudfListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudfListResponse> {
    return this._client.get('/storage/cloudfs', { query, ...options });
  }

  /**
   * Creates a CloudFS filesystem. Provisioning is synchronous — typically a few
   * seconds, up to a few minutes — and the filesystem is returned with status
   * `ready`, together with its S3 bucket and metadata connection details. This
   * response is the only time the filesystem's `meta_token` — and the
   * credential-bearing `meta_url` — are returned; store them securely. If the token
   * is lost, issue a new one with the rotate-meta-token action. Names are unique
   * within your organization: creating with an existing name returns a `422`.
   * Requests are idempotent: retrying with the same `Idempotency-Key` within 24
   * hours replays the original response instead of creating another filesystem.
   *
   * @example
   * ```ts
   * const cloudfsFilesystemResponseWrapper =
   *   await client.storage.cloudfs.create({
   *     name: 'agent-fs',
   *     region: 'us-east-1',
   *     'Idempotency-Key': 'Idempotency-Key',
   *   });
   * ```
   */
  create(params: CloudfCreateParams, options?: RequestOptions): APIPromise<CloudfsFilesystemResponseWrapper> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/storage/cloudfs', {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Permanently deletes a CloudFS filesystem, removing its S3 bucket and its
   * metadata database. Deletion is synchronous: the response returns the
   * filesystem's final state with status `deleted`. There is no restore. A
   * filesystem that is still `provisioning` returns a `409`. If the filesystem still
   * contains data, the request may be rejected with a `409` — drain the bucket and
   * retry.
   *
   * @example
   * ```ts
   * const cloudfsFilesystemDetailResponseWrapper =
   *   await client.storage.cloudfs.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CloudfsFilesystemDetailResponseWrapper> {
    return this._client.delete(path`/storage/cloudfs/${id}`, options);
  }

  /**
   * Retrieves a CloudFS filesystem by its ID. The returned `meta_url` omits the
   * credential — the metadata token is only ever returned by create and
   * rotate-meta-token. A filesystem whose last lifecycle action failed includes a
   * customer-safe `error` message.
   *
   * @example
   * ```ts
   * const cloudfsFilesystemDetailResponseWrapper =
   *   await client.storage.cloudfs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CloudfsFilesystemDetailResponseWrapper> {
    return this._client.get(path`/storage/cloudfs/${id}`, options);
  }

  /**
   * Updates a CloudFS filesystem. Only `name` can be changed; other fields are
   * immutable and unknown fields are rejected with a `400`. Renaming to a name that
   * already exists in your organization returns a `422`.
   *
   * @example
   * ```ts
   * const cloudfsFilesystemDetailResponseWrapper =
   *   await client.storage.cloudfs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    id: string,
    body: CloudfUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CloudfsFilesystemDetailResponseWrapper> {
    return this._client.patch(path`/storage/cloudfs/${id}`, { body, ...options });
  }
}

export interface CloudfsFilesystemDetailResponseWrapper {
  /**
   * A CloudFS filesystem as returned by get, update, and delete. `meta_url` omits
   * the credential and there is no `meta_token` field — the token is only returned
   * by create and rotate-meta-token.
   */
  data?: CloudfsFilesystemDetailResponseWrapper.Data;
}

export namespace CloudfsFilesystemDetailResponseWrapper {
  /**
   * A CloudFS filesystem as returned by get, update, and delete. `meta_url` omits
   * the credential and there is no `meta_token` field — the token is only returned
   * by create and rotate-meta-token.
   */
  export interface Data {
    id?: string;

    created_at?: string;

    /**
     * Explanation of the most recent failed lifecycle action. Present only when the
     * filesystem is in a `failed` state.
     */
    error?: string;

    /**
     * PostgreSQL connection URL for the filesystem's metadata database, without the
     * credential. Combine it with your stored metadata token, or issue a new token
     * with rotate-meta-token.
     */
    meta_url?: string;

    name?: string;

    record_type?: string;

    region?: string;

    /**
     * Name of the bucket that stores this filesystem's data. Created during
     * provisioning.
     */
    s3_bucket?: string;

    /**
     * URL of the Telnyx Cloud Storage endpoint backing this filesystem.
     */
    s3_endpoint?: string;

    /**
     * Lifecycle status of the filesystem. `ready` means it is fully provisioned and
     * usable. `needs_format` means the storage bucket and metadata database were
     * provisioned but the filesystem has not yet been formatted — run `juicefs format`
     * with the filesystem's `meta_url` before mounting. `failed` means the last
     * lifecycle action failed — see the filesystem's `error` message. `deleted`
     * appears only in the delete response: deleted filesystems are excluded from list
     * results and return a `404` on retrieval.
     */
    status?: CloudfsAPI.CloudfsFilesystemStatus;

    updated_at?: string;
  }
}

export interface CloudfsFilesystemResponseWrapper {
  /**
   * A CloudFS filesystem, including its metadata credential. This shape is returned
   * only by create and rotate-meta-token.
   */
  data?: CloudfsFilesystemResponseWrapper.Data;
}

export namespace CloudfsFilesystemResponseWrapper {
  /**
   * A CloudFS filesystem, including its metadata credential. This shape is returned
   * only by create and rotate-meta-token.
   */
  export interface Data {
    id?: string;

    created_at?: string;

    /**
     * Metadata access token, in cleartext. Returned only by create and
     * rotate-meta-token and not retrievable afterwards — store it securely.
     */
    meta_token?: string;

    /**
     * PostgreSQL connection URL for the filesystem's metadata database. In create and
     * rotate-meta-token responses it embeds the metadata token as the password:
     * `postgres://<database>:<meta_token>@us-east-1.telnyxcloudfs.com:5432/<database>?sslmode=require`
     * (the example below is shown without the credential; the actual response includes
     * it). Pass it to `juicefs mount`: the storage configuration is baked in at
     * provisioning, so the metadata URL is all a client needs to mount the filesystem.
     */
    meta_url?: string;

    name?: string;

    record_type?: string;

    region?: string;

    /**
     * Name of the bucket that stores this filesystem's data. Created during
     * provisioning.
     */
    s3_bucket?: string;

    /**
     * URL of the Telnyx Cloud Storage endpoint backing this filesystem.
     */
    s3_endpoint?: string;

    /**
     * Lifecycle status of the filesystem. `ready` means it is fully provisioned and
     * usable. `needs_format` means the storage bucket and metadata database were
     * provisioned but the filesystem has not yet been formatted — run `juicefs format`
     * with the filesystem's `meta_url` before mounting. `failed` means the last
     * lifecycle action failed — see the filesystem's `error` message. `deleted`
     * appears only in the delete response: deleted filesystems are excluded from list
     * results and return a `404` on retrieval.
     */
    status?: CloudfsAPI.CloudfsFilesystemStatus;

    updated_at?: string;
  }
}

/**
 * Lifecycle status of the filesystem. `ready` means it is fully provisioned and
 * usable. `needs_format` means the storage bucket and metadata database were
 * provisioned but the filesystem has not yet been formatted — run `juicefs format`
 * with the filesystem's `meta_url` before mounting. `failed` means the last
 * lifecycle action failed — see the filesystem's `error` message. `deleted`
 * appears only in the delete response: deleted filesystems are excluded from list
 * results and return a `404` on retrieval.
 */
export type CloudfsFilesystemStatus =
  | 'provisioning'
  | 'ready'
  | 'needs_format'
  | 'deleting'
  | 'failed'
  | 'deleted';

export interface CloudfListResponse {
  data?: Array<CloudfListResponse.Data>;

  meta?: CloudfListResponse.Meta;
}

export namespace CloudfListResponse {
  /**
   * A CloudFS filesystem as returned in list results. Connection details
   * (`meta_url`, `meta_token`) are omitted — retrieve the filesystem by ID for its
   * redacted `meta_url`.
   */
  export interface Data {
    id?: string;

    created_at?: string;

    name?: string;

    record_type?: string;

    region?: string;

    /**
     * Name of the bucket that stores this filesystem's data. Created during
     * provisioning.
     */
    s3_bucket?: string;

    /**
     * URL of the Telnyx Cloud Storage endpoint backing this filesystem.
     */
    s3_endpoint?: string;

    /**
     * Lifecycle status of the filesystem. `ready` means it is fully provisioned and
     * usable. `needs_format` means the storage bucket and metadata database were
     * provisioned but the filesystem has not yet been formatted — run `juicefs format`
     * with the filesystem's `meta_url` before mounting. `failed` means the last
     * lifecycle action failed — see the filesystem's `error` message. `deleted`
     * appears only in the delete response: deleted filesystems are excluded from list
     * results and return a `404` on retrieval.
     */
    status?: CloudfsAPI.CloudfsFilesystemStatus;

    updated_at?: string;
  }

  export interface Meta {
    /**
     * Opaque cursors for the adjacent pages. Empty when there are no adjacent pages.
     */
    cursors?: Meta.Cursors;

    /**
     * Relative URL (path and query) of the next page. Omitted when there are no
     * further results.
     */
    next?: string;

    /**
     * Relative URL (path and query) of the previous page. Omitted on the first page.
     */
    previous?: string;
  }

  export namespace Meta {
    /**
     * Opaque cursors for the adjacent pages. Empty when there are no adjacent pages.
     */
    export interface Cursors {
      /**
       * Cursor for the next page; pass it as `page[after]`. Omitted on the last page.
       */
      after?: string;

      /**
       * Cursor for the previous page; pass it as `page[before]`. Omitted on the first
       * page.
       */
      before?: string;
    }
  }
}

export interface CloudfListParams {
  /**
   * Return only the filesystem whose name matches exactly.
   */
  'filter[name]'?: string;

  /**
   * Return only filesystems in this region.
   */
  'filter[region]'?: string;

  /**
   * Return only filesystems with this status. Unrecognized values are ignored.
   */
  'filter[status]'?: 'provisioning' | 'ready' | 'needs_format' | 'deleting' | 'failed';

  /**
   * Opaque cursor from a previous response's `meta.cursors.after`; returns the page
   * after it. Mutually exclusive with `page[before]`.
   */
  'page[after]'?: string;

  /**
   * Opaque cursor from a previous response's `meta.cursors.before`; returns the page
   * before it. Mutually exclusive with `page[after]`.
   */
  'page[before]'?: string;

  /**
   * The number of filesystems to return per page. Values above 250 are treated
   * as 250.
   */
  'page[limit]'?: number;

  /**
   * Sort order for the results: a field name for ascending, or the field name
   * prefixed with `-` for descending.
   */
  sort?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'name' | '-name';
}

export interface CloudfCreateParams {
  /**
   * Body param: Filesystem name, unique within your organization. Names are trimmed
   * and lowercased; after normalization they may contain lowercase letters, numbers,
   * `.`, `_`, and `-` only.
   */
  name: string;

  /**
   * Body param: Region where the filesystem's storage and metadata are provisioned.
   */
  region: 'us-central-1' | 'us-east-1' | 'us-west-1';

  /**
   * Header param: Unique key that makes the request idempotent (1-255 characters:
   * letters, numbers, `_`, and `-`). Retrying with the same key within 24 hours
   * replays the original response (marked with an `Idempotent-Replayed: true`
   * header) instead of repeating the action. Reusing a key with a different request
   * returns a `422`; sending a key while the original request is still being
   * processed returns a `409`.
   */
  'Idempotency-Key': string;
}

export interface CloudfUpdateParams {
  /**
   * New filesystem name, unique within your organization. Names are trimmed and
   * lowercased; after normalization they may contain lowercase letters, numbers,
   * `.`, `_`, and `-` only.
   */
  name?: string;
}

Cloudfs.Actions = Actions;

export declare namespace Cloudfs {
  export {
    type CloudfsFilesystemDetailResponseWrapper as CloudfsFilesystemDetailResponseWrapper,
    type CloudfsFilesystemResponseWrapper as CloudfsFilesystemResponseWrapper,
    type CloudfsFilesystemStatus as CloudfsFilesystemStatus,
    type CloudfListResponse as CloudfListResponse,
    type CloudfListParams as CloudfListParams,
    type CloudfCreateParams as CloudfCreateParams,
    type CloudfUpdateParams as CloudfUpdateParams,
  };

  export { Actions as Actions, type ActionRotateMetaTokenParams as ActionRotateMetaTokenParams };
}
