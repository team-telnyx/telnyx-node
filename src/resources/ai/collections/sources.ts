// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage logical collections of your Telnyx data, tune retrieval settings, manage sources, and run collection-scoped semantic search.
 */
export class Sources extends APIResource {
  /**
   * Returns the sources attached to a collection.
   *
   * @example
   * ```ts
   * const sources = await client.ai.collections.sources.list(
   *   '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   * );
   * ```
   */
  list(uuid: string, options?: RequestOptions): APIPromise<SourceListResponse> {
    return this._client.get(path`/ai/collections/${uuid}/sources`, options);
  }

  /**
   * Attaches a new content source to the specified collection and returns the
   * created source. The source's content is ingested and embedded so it becomes
   * searchable within the collection.
   *
   * @example
   * ```ts
   * const source = await client.ai.collections.sources.create(
   *   '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   { source_type: 'voice' },
   * );
   * ```
   */
  create(uuid: string, body: SourceCreateParams, options?: RequestOptions): APIPromise<SourceCreateResponse> {
    return this._client.post(path`/ai/collections/${uuid}/sources`, { body, ...options });
  }

  /**
   * Replaces the collection's entire source set. The response `meta` reports which
   * sources were added, retained, and removed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.collections.sources.replace(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *     { sources: [{ source_type: 'voice' }] },
   *   );
   * ```
   */
  replace(
    uuid: string,
    body: SourceReplaceParams,
    options?: RequestOptions,
  ): APIPromise<SourceReplaceResponse> {
    return this._client.put(path`/ai/collections/${uuid}/sources`, { body, ...options });
  }

  /**
   * Removes a single source from a collection.
   *
   * @example
   * ```ts
   * await client.ai.collections.sources.delete('42', {
   *   uuid: '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   * });
   * ```
   */
  delete(sourceID: string, params: SourceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { uuid } = params;
    return this._client.delete(path`/ai/collections/${uuid}/sources/${sourceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Source {
  id?: string;

  /**
   * The Telnyx Storage bucket name. Present only for `bucket` sources.
   */
  bucket_id?: string;

  collection_id?: string;

  /**
   * Identifies the record type. Always `ai_collection_source`.
   */
  record_type?: string;

  /**
   * The type of Telnyx data attached as a source. `bucket` requires an additional
   * `bucket_id`. Only `voice` is searchable today; `meeting_bot`, `message`, and
   * `bucket` attach but are not yet searchable (Coming soon).
   */
  source_type?: SourceType;

  status?: string;
}

export interface SourceRequest {
  /**
   * The type of Telnyx data attached as a source. `bucket` requires an additional
   * `bucket_id`. Only `voice` is searchable today; `meeting_bot`, `message`, and
   * `bucket` attach but are not yet searchable (Coming soon).
   */
  source_type: SourceType;

  /**
   * The Telnyx Storage bucket name. Required when `source_type` is `bucket`; ignored
   * otherwise.
   */
  bucket_id?: string;
}

/**
 * The type of Telnyx data attached as a source. `bucket` requires an additional
 * `bucket_id`. Only `voice` is searchable today; `meeting_bot`, `message`, and
 * `bucket` attach but are not yet searchable (Coming soon).
 */
export type SourceType = 'voice' | 'meeting_bot' | 'message' | 'bucket';

/**
 * Envelope containing a single collection source.
 */
export interface SourceCreateResponse {
  data?: Source;
}

export interface SourceListResponse {
  data?: Array<Source>;
}

export interface SourceReplaceResponse {
  data?: Array<Source>;

  /**
   * Reports which source IDs were added, retained, and removed by a replace
   * operation.
   */
  meta?: SourceReplaceResponse.Meta;
}

export namespace SourceReplaceResponse {
  /**
   * Reports which source IDs were added, retained, and removed by a replace
   * operation.
   */
  export interface Meta {
    added?: Array<string>;

    removed?: Array<string>;

    retained?: Array<string>;
  }
}

export interface SourceCreateParams {
  /**
   * The type of Telnyx data attached as a source. `bucket` requires an additional
   * `bucket_id`. Only `voice` is searchable today; `meeting_bot`, `message`, and
   * `bucket` attach but are not yet searchable (Coming soon).
   */
  source_type: SourceType;

  /**
   * The Telnyx Storage bucket name. Required when `source_type` is `bucket`; ignored
   * otherwise.
   */
  bucket_id?: string;
}

export interface SourceReplaceParams {
  sources: Array<SourceRequest>;
}

export interface SourceDeleteParams {
  /**
   * The collection's unique identifier.
   */
  uuid: string;
}

export declare namespace Sources {
  export {
    type Source as Source,
    type SourceRequest as SourceRequest,
    type SourceType as SourceType,
    type SourceCreateResponse as SourceCreateResponse,
    type SourceListResponse as SourceListResponse,
    type SourceReplaceResponse as SourceReplaceResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceReplaceParams as SourceReplaceParams,
    type SourceDeleteParams as SourceDeleteParams,
  };
}
