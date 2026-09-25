// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * What a namespace and a profile hold.
 */
export class Memories extends APIResource {
  /**
   * Everything stored under one profile, unranked -- ask `recall` for the memories
   * that answer a question. A profile that holds nothing is an empty page rather
   * than a 404: profiles exist by being written to. Each memory names the
   * `source_id` it was extracted from, or null for a memory derived from other
   * memories -- which can read almost the same as the fact it restates. A
   * `source_id` narrows the listing to the memories extracted from that source, and
   * a `session_id` to those extracted from the session, which is the same thing
   * named another way; pass one or the other. Neither is everything the source led
   * to: a memory derived from several sources belongs to no single one and appears
   * only in the unfiltered listing. A memory written while the listing is paged
   * shifts the pages after it, so an entry can be repeated or missed at a page
   * boundary.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memoryListResponse of client.ai.memory.namespaces.profiles.memories.list(
   *   'profile_id',
   *   { namespace: 'namespace' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    profileID: string,
    params: MemoryListParams,
    options?: RequestOptions,
  ): PagePromise<MemoryListResponsesDefaultFlatPagination, MemoryListResponse> {
    const { namespace, ...query } = params;
    return this._client.getAPIList(
      path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/memories`,
      DefaultFlatPagination<MemoryListResponse>,
      { query, ...options },
    );
  }

  /**
   * One memory by its id, as `recall` and the listing return it, together with what
   * it came from. A fact names its `source_id`: read it with
   * `GET .../sources/{source_id}` to see what was stored. A memory derived from
   * other memories names them in `derived_from` instead; read each of those to reach
   * its source.
   *
   * @example
   * ```ts
   * const memory =
   *   await client.ai.memory.namespaces.profiles.memories.retrieve(
   *     'memory_id',
   *     { namespace: 'namespace', profile_id: 'profile_id' },
   *   );
   * ```
   */
  retrieve(
    memoryID: string,
    params: MemoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MemoryRetrieveResponse> {
    const { namespace, profile_id } = params;
    return this._client.get(
      path`/ai/memory/namespaces/${namespace}/profiles/${profile_id}/memories/${memoryID}`,
      options,
    );
  }
}

export type MemoryListResponsesDefaultFlatPagination = DefaultFlatPagination<MemoryListResponse>;

export interface MemoryRetrieveResponse {
  data: MemoryRetrieveResponse.Data;
}

export namespace MemoryRetrieveResponse {
  export interface Data {
    id: string;

    /**
     * The ids of the memories this one was derived from. Read each with
     * `GET .../memories/{memory_id}` to reach its `source_id`. Set for a derived
     * memory; null for a fact.
     */
    derived_from: Array<string> | null;

    /**
     * The source this memory was extracted from. Set for a fact, which comes from
     * exactly one source; null for a memory derived from other memories. Read it with
     * `GET .../sources/{source_id}`. A source deleted a moment ago can still be named
     * here, and then answers 404.
     */
    source_id: string | null;

    text: string;

    recorded_at?: string | null;
  }
}

export interface MemoryListResponse {
  id: string;

  /**
   * The source this memory was extracted from. Set for a fact, which comes from
   * exactly one source; null for a memory derived from other memories. Read it with
   * `GET .../sources/{source_id}`. A source deleted a moment ago can still be named
   * here, and then answers 404.
   */
  source_id: string | null;

  text: string;

  recorded_at?: string | null;
}

export interface MemoryListParams extends DefaultFlatPaginationParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Query param: An ingested session, by the `session_id` it was ingested with.
   * Narrows the request to the source that session was stored as.
   */
  session_id?: string | null;

  /**
   * Query param: Narrows the listing to the memories extracted from one source, a
   * remembered fact as well as a session. Pass this or `session_id`, not both.
   */
  source_id?: string | null;
}

export interface MemoryRetrieveParams {
  /**
   * The namespace. `default` exists for every organization.
   */
  namespace: string;

  /**
   * The profile: your identifier for the user, caller or agent this memory is about.
   */
  profile_id: string;
}

export declare namespace Memories {
  export {
    type MemoryRetrieveResponse as MemoryRetrieveResponse,
    type MemoryListResponse as MemoryListResponse,
    type MemoryListResponsesDefaultFlatPagination as MemoryListResponsesDefaultFlatPagination,
    type MemoryListParams as MemoryListParams,
    type MemoryRetrieveParams as MemoryRetrieveParams,
  };
}
