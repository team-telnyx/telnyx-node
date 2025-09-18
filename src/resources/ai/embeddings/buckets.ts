// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Buckets extends APIResource {
  /**
   * Get all embedded files for a given user bucket, including their processing
   * status.
   *
   * @example
   * ```ts
   * const bucket = await client.ai.embeddings.buckets.retrieve(
   *   'bucket_name',
   * );
   * ```
   */
  retrieve(bucketName: string, options?: RequestOptions): APIPromise<BucketRetrieveResponse> {
    return this._client.get(path`/ai/embeddings/buckets/${bucketName}`, options);
  }

  /**
   * Get all embedding buckets for a user.
   *
   * @example
   * ```ts
   * const buckets = await client.ai.embeddings.buckets.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BucketListResponse> {
    return this._client.get('/ai/embeddings/buckets', options);
  }

  /**
   * Deletes an entire bucket's embeddings and disables the bucket for AI-use,
   * returning it to normal storage pricing.
   *
   * @example
   * ```ts
   * await client.ai.embeddings.buckets.delete('bucket_name');
   * ```
   */
  delete(bucketName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/embeddings/buckets/${bucketName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BucketRetrieveResponse {
  data: Array<BucketRetrieveResponse.Data>;
}

export namespace BucketRetrieveResponse {
  export interface Data {
    created_at: string;

    filename: string;

    status: string;

    error_reason?: string;

    last_embedded_at?: string;

    updated_at?: string;
  }
}

export interface BucketListResponse {
  data: BucketListResponse.Data;
}

export namespace BucketListResponse {
  export interface Data {
    buckets: Array<string>;
  }
}

export declare namespace Buckets {
  export {
    type BucketRetrieveResponse as BucketRetrieveResponse,
    type BucketListResponse as BucketListResponse,
  };
}
