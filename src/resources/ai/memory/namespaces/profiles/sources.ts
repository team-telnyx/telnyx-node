// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SourcesAPI from '../../../collections/sources';
import { SourcesDefaultFlatPagination } from '../../../collections/sources';
import { APIPromise } from '../../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * What a profile stored, and what its memories came from.
 */
export class Sources extends APIResource {
  /**
   * Everything a profile has stored and extracts memories from: each ingested
   * session, and each remembered fact, which has no session. Content is not listed;
   * read one source for it. A source whose ingest is still queued is not here yet.
   * Re-ingesting a session moves it to the front, so a listing paged while sessions
   * are written can repeat or miss one at a page boundary. A `session_id` narrows
   * the listing to the source that session was stored as: one source or none, and
   * none -- an empty page, not a 404 -- for a session never ingested, still queued,
   * or another profile's.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const source of client.ai.memory.namespaces.profiles.sources.list(
   *   'profile_id',
   *   { namespace: 'namespace' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    profileID: string,
    params: SourceListParams,
    options?: RequestOptions,
  ): PagePromise<SourcesDefaultFlatPagination, SourcesAPI.Source> {
    const { namespace, ...query } = params;
    return this._client.getAPIList(
      path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/sources`,
      DefaultFlatPagination<SourcesAPI.Source>,
      { query, ...options },
    );
  }

  /**
   * Deletes one source -- an ingested session or a remembered fact -- together with
   * the memories derived from it. A memory derived from this source and others is
   * deleted too, and derived again from what remains in the background. It answers
   * only once the source is gone. A source that is not there -- never stored,
   * another profile's, or already deleted -- answers 404, so on a `502` or a `504`
   * repeat the identical request and read a 404 as done. An ingest of the same
   * session that is still queued is not cancelled, and stores the session again when
   * it runs. Nothing here can be undone.
   *
   * @example
   * ```ts
   * const source =
   *   await client.ai.memory.namespaces.profiles.sources.delete(
   *     'source_id',
   *     { namespace: 'namespace', profile_id: 'profile_id' },
   *   );
   * ```
   */
  delete(
    sourceID: string,
    params: SourceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SourceDeleteResponse> {
    const { namespace, profile_id } = params;
    return this._client.delete(
      path`/ai/memory/namespaces/${namespace}/profiles/${profile_id}/sources/${sourceID}`,
      options,
    );
  }

  /**
   * One source and its content, as it was stored: an ingested session's payload or a
   * remembered fact. A source whose ingest is still queued answers 404 until it has
   * been stored.
   *
   * @example
   * ```ts
   * const source =
   *   await client.ai.memory.namespaces.profiles.sources.retrieve(
   *     'source_id',
   *     { namespace: 'namespace', profile_id: 'profile_id' },
   *   );
   * ```
   */
  retrieve(
    sourceID: string,
    params: SourceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SourceRetrieveResponse> {
    const { namespace, profile_id } = params;
    return this._client.get(
      path`/ai/memory/namespaces/${namespace}/profiles/${profile_id}/sources/${sourceID}`,
      options,
    );
  }
}

export interface SourceRetrieveResponse {
  data: SourceRetrieveResponse.Data;
}

export namespace SourceRetrieveResponse {
  export interface Data {
    /**
     * Identifies one source within its profile: an ingested session, or one remembered
     * fact. Returned by `ingest` and `remember` when the write is accepted.
     * Re-ingesting a session keeps its source id.
     */
    id: string;

    /**
     * What was stored, in the shape it was sent: an ingested JSON body as JSON, a
     * string body or a remembered fact as a string. A session ingested before formats
     * were recorded is returned as the text it was stored as.
     */
    content: { [key: string]: unknown } | Array<unknown> | string | number | boolean;

    /**
     * Memories extracted from this source. A memory derived from several sources is
     * not counted here.
     */
    memory_count: number;

    /**
     * The session this source was ingested as. Null for a remembered fact.
     */
    session_id: string | null;

    /**
     * When the source was first stored.
     */
    created_at?: string | null;

    /**
     * When the source was last written; re-ingesting moves it.
     */
    updated_at?: string | null;
  }
}

export interface SourceDeleteResponse {
  data: SourceDeleteResponse.Data;
}

export namespace SourceDeleteResponse {
  export interface Data {
    /**
     * Memories the profile held and no longer does, counted before and after across
     * the whole profile: it includes memories derived from this source together with
     * others, and anything else the profile lost in between. A report rather than an
     * audit. The status carries the outcome.
     */
    memories_deleted: number;

    profile_id: string;

    /**
     * Identifies one source within its profile: an ingested session, or one remembered
     * fact. Returned by `ingest` and `remember` when the write is accepted.
     * Re-ingesting a session keeps its source id.
     */
    source_id: string;
  }
}

export interface SourceListParams extends DefaultFlatPaginationParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Query param: An ingested session, by the `session_id` it was ingested with.
   * Narrows the request to the source that session was stored as.
   */
  session_id?: string | null;
}

export interface SourceDeleteParams {
  /**
   * The namespace. `default` exists for every organization.
   */
  namespace: string;

  /**
   * The profile: your identifier for the user, caller or agent this memory is about.
   */
  profile_id: string;
}

export interface SourceRetrieveParams {
  /**
   * The namespace. `default` exists for every organization.
   */
  namespace: string;

  /**
   * The profile: your identifier for the user, caller or agent this memory is about.
   */
  profile_id: string;
}

export declare namespace Sources {
  export {
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceRetrieveParams as SourceRetrieveParams,
  };
}

export { type SourcesDefaultFlatPagination };
