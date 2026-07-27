// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudfsAPI from './cloudfs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage CloudFS filesystems — JuiceFS-compatible filesystems backed by Telnyx Cloud Storage
 */
export class Actions extends APIResource {
  /**
   * Issues a new metadata access token for the filesystem and returns the full
   * filesystem, including the new `meta_token` and credential-bearing `meta_url`.
   * The previous token stops authenticating immediately; the metadata database and
   * S3 bucket are unchanged. The request takes no body. Allowed while the filesystem
   * is `ready` or `needs_format`; otherwise returns a `409`. Retrying with the same
   * `Idempotency-Key` within 24 hours replays the original response — including the
   * same token — instead of rotating again.
   *
   * @example
   * ```ts
   * const cloudfsFilesystemResponseWrapper =
   *   await client.storage.cloudfs.actions.rotateMetaToken(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { 'Idempotency-Key': 'Idempotency-Key' },
   *   );
   * ```
   */
  rotateMetaToken(
    id: string,
    params: ActionRotateMetaTokenParams,
    options?: RequestOptions,
  ): APIPromise<CloudfsAPI.CloudfsFilesystemResponseWrapper> {
    const { 'Idempotency-Key': idempotencyKey } = params;
    return this._client.post(path`/storage/cloudfs/${id}/actions/rotate-meta-token`, {
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }
}

export interface ActionRotateMetaTokenParams {
  /**
   * Unique key that makes the request idempotent (1-255 characters: letters,
   * numbers, `_`, and `-`). Retrying with the same key within 24 hours replays the
   * original response (marked with an `Idempotent-Replayed: true` header) instead of
   * repeating the action. Reusing a key with a different request returns a `422`;
   * sending a key while the original request is still being processed returns a
   * `409`.
   */
  'Idempotency-Key': string;
}

export declare namespace Actions {
  export { type ActionRotateMetaTokenParams as ActionRotateMetaTokenParams };
}
