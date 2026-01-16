// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EmbeddingsAPI from './embeddings';
import * as BucketsAPI from './buckets';
import { BucketListResponse, BucketRetrieveResponse, Buckets } from './buckets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Embeddings extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);

  /**
   * Perform embedding on a Telnyx Storage Bucket using the a embedding model. The
   * current supported file types are:
   *
   * - PDF
   * - HTML
   * - txt/unstructured text files
   * - json
   * - csv
   * - audio / video (mp3, mp4, mpeg, mpga, m4a, wav, or webm ) - Max of 100mb file
   *   size.
   *
   * Any files not matching the above types will be attempted to be embedded as
   * unstructured text.
   *
   * This process can be slow, so it runs in the background and the user can check
   * the status of the task using the endpoint `/ai/embeddings/{task_id}`.
   *
   * **Important Note**: When you update documents in a Telnyx Storage bucket, their
   * associated embeddings are automatically kept up to date. If you add or update a
   * file, it is automatically embedded. If you delete a file, the embeddings are
   * deleted for that particular file.
   *
   * You can also specify a custom `loader` param. Currently the only supported
   * loader value is `intercom` which loads Intercom article jsons as specified by
   * [the Intercom article API](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/Articles/article/)
   * This loader will split each article into paragraphs and save additional
   * parameters relevant to Intercom docs, such as `article_url` and `heading`. These
   * values will be returned by the `/v2/ai/embeddings/similarity-search` endpoint in
   * the `loader_metadata` field.
   *
   * @example
   * ```ts
   * const embeddingResponse = await client.ai.embeddings.create(
   *   { bucket_name: 'bucket_name' },
   * );
   * ```
   */
  create(body: EmbeddingCreateParams, options?: RequestOptions): APIPromise<EmbeddingResponse> {
    return this._client.post('/ai/embeddings', { body, ...options });
  }

  /**
   * Check the status of a current embedding task. Will be one of the following:
   *
   * - `queued` - Task is waiting to be picked up by a worker
   * - `processing` - The embedding task is running
   * - `success` - Task completed successfully and the bucket is embedded
   * - `failure` - Task failed and no files were embedded successfully
   * - `partial_success` - Some files were embedded successfully, but at least one
   *   failed
   *
   * @example
   * ```ts
   * const embedding = await client.ai.embeddings.retrieve(
   *   'task_id',
   * );
   * ```
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<EmbeddingRetrieveResponse> {
    return this._client.get(path`/ai/embeddings/${taskID}`, options);
  }

  /**
   * Retrieve tasks for the user that are either `queued`, `processing`, `failed`,
   * `success` or `partial_success` based on the query string. Defaults to `queued`
   * and `processing`.
   *
   * @example
   * ```ts
   * const embeddings = await client.ai.embeddings.list();
   * ```
   */
  list(
    query: EmbeddingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmbeddingListResponse> {
    return this._client.get('/ai/embeddings', { query, ...options });
  }

  /**
   * Perform a similarity search on a Telnyx Storage Bucket, returning the most
   * similar `num_docs` document chunks to the query.
   *
   * Currently the only available distance metric is cosine similarity which will
   * return a `distance` between 0 and 1. The lower the distance, the more similar
   * the returned document chunks are to the query. A `certainty` will also be
   * returned, which is a value between 0 and 1 where the higher the certainty, the
   * more similar the document. You can read more about Weaviate distance metrics
   * here:
   * [Weaviate Docs](https://weaviate.io/developers/weaviate/config-refs/distances)
   *
   * If a bucket was embedded using a custom loader, such as `intercom`, the
   * additional metadata will be returned in the `loader_metadata` field.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.embeddings.similaritySearch({
   *     bucket_name: 'bucket_name',
   *     query: 'query',
   *   });
   * ```
   */
  similaritySearch(
    body: EmbeddingSimilaritySearchParams,
    options?: RequestOptions,
  ): APIPromise<EmbeddingSimilaritySearchResponse> {
    return this._client.post('/ai/embeddings/similarity-search', { body, ...options });
  }

  /**
   * Embed website content from a specified URL, including child pages up to 5 levels
   * deep within the same domain. The process crawls and loads content from the main
   * URL and its linked pages into a Telnyx Cloud Storage bucket. As soon as each
   * webpage is added to the bucket, its content is immediately processed for
   * embeddings, that can be used for
   * [similarity search](https://developers.telnyx.com/api-reference/embeddings/search-for-documents)
   * and [clustering](https://developers.telnyx.com/docs/inference/clusters).
   *
   * @example
   * ```ts
   * const embeddingResponse = await client.ai.embeddings.url({
   *   bucket_name: 'bucket_name',
   *   url: 'url',
   * });
   * ```
   */
  url(body: EmbeddingURLParams, options?: RequestOptions): APIPromise<EmbeddingResponse> {
    return this._client.post('/ai/embeddings/url', { body, ...options });
  }
}

/**
 * Status of an embeddings task.
 */
export type BackgroundTaskStatus = 'queued' | 'processing' | 'success' | 'failure' | 'partial_success';

export interface EmbeddingResponse {
  data: EmbeddingResponse.Data;
}

export namespace EmbeddingResponse {
  export interface Data {
    created_at?: string;

    finished_at?: string | null;

    status?: string;

    task_id?: string;

    task_name?: string;

    user_id?: string;
  }
}

export interface EmbeddingRetrieveResponse {
  data: EmbeddingRetrieveResponse.Data;
}

export namespace EmbeddingRetrieveResponse {
  export interface Data {
    created_at?: string;

    finished_at?: string;

    /**
     * Status of an embeddings task.
     */
    status?: EmbeddingsAPI.BackgroundTaskStatus;

    task_id?: string;

    task_name?: string;
  }
}

export interface EmbeddingListResponse {
  data: Array<EmbeddingListResponse.Data>;
}

export namespace EmbeddingListResponse {
  export interface Data {
    created_at: string;

    /**
     * Status of an embeddings task.
     */
    status: EmbeddingsAPI.BackgroundTaskStatus;

    task_id: string;

    task_name: string;

    user_id: string;

    bucket?: string;

    finished_at?: string;
  }
}

export interface EmbeddingSimilaritySearchResponse {
  data: Array<EmbeddingSimilaritySearchResponse.Data>;
}

export namespace EmbeddingSimilaritySearchResponse {
  /**
   * Example document response from embedding service { "document_chunk": "your
   * status? This is Vanessa Bloome...", "distance": 0.18607724, "metadata": {
   * "source": "https://us-central-1.telnyxstorage.com/scripts/bee_movie_script.txt",
   * "checksum": "343054dd19bab39bbf6761a3d20f1daa", "embedding":
   * "openai/text-embedding-ada-002", "filename": "bee_movie_script.txt",
   * "certainty": 0.9069613814353943, "loader_metadata": {} } }
   */
  export interface Data {
    distance: number;

    document_chunk: string;

    metadata: Data.Metadata;
  }

  export namespace Data {
    export interface Metadata {
      checksum: string;

      embedding: string;

      filename: string;

      source: string;

      certainty?: number;

      loader_metadata?: { [key: string]: unknown };
    }
  }
}

export interface EmbeddingCreateParams {
  bucket_name: string;

  document_chunk_overlap_size?: number;

  document_chunk_size?: number;

  /**
   * Supported models to vectorize and embed documents.
   */
  embedding_model?: 'thenlper/gte-large' | 'intfloat/multilingual-e5-large';

  /**
   * Supported types of custom document loaders for embeddings.
   */
  loader?: 'default' | 'intercom';
}

export interface EmbeddingListParams {
  /**
   * List of task statuses i.e. `status=queued&status=processing`
   */
  status?: Array<string>;
}

export interface EmbeddingSimilaritySearchParams {
  bucket_name: string;

  query: string;

  num_of_docs?: number;
}

export interface EmbeddingURLParams {
  /**
   * Name of the bucket to store the embeddings. This bucket must already exist.
   */
  bucket_name: string;

  /**
   * The URL of the webpage to embed
   */
  url: string;
}

Embeddings.Buckets = Buckets;

export declare namespace Embeddings {
  export {
    type BackgroundTaskStatus as BackgroundTaskStatus,
    type EmbeddingResponse as EmbeddingResponse,
    type EmbeddingRetrieveResponse as EmbeddingRetrieveResponse,
    type EmbeddingListResponse as EmbeddingListResponse,
    type EmbeddingSimilaritySearchResponse as EmbeddingSimilaritySearchResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
    type EmbeddingListParams as EmbeddingListParams,
    type EmbeddingSimilaritySearchParams as EmbeddingSimilaritySearchParams,
    type EmbeddingURLParams as EmbeddingURLParams,
  };

  export {
    Buckets as Buckets,
    type BucketRetrieveResponse as BucketRetrieveResponse,
    type BucketListResponse as BucketListResponse,
  };
}
