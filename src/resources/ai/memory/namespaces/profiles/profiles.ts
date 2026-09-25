// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MemoriesAPI from './memories';
import {
  Memories,
  MemoryListParams,
  MemoryListResponse,
  MemoryListResponsesDefaultFlatPagination,
  MemoryRetrieveParams,
  MemoryRetrieveResponse,
} from './memories';
import * as SourcesAPI from './sources';
import {
  SourceDeleteParams,
  SourceDeleteResponse,
  SourceListParams,
  SourceRetrieveParams,
  SourceRetrieveResponse,
  Sources,
} from './sources';
import { APIPromise } from '../../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Profiles extends APIResource {
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);

  /**
   * Profiles are never created, only written to, so this lists the ones that hold a
   * memory. A profile whose first ingest is still running is not here yet. Ordered
   * by memory count, largest first, so a profile written to while the listing is
   * paged can move between pages and be repeated or missed.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const profileListResponse of client.ai.memory.namespaces.profiles.list(
   *   'namespace',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    namespace: string,
    query: ProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProfileListResponsesDefaultFlatPagination, ProfileListResponse> {
    return this._client.getAPIList(
      path`/ai/memory/namespaces/${namespace}/profiles`,
      DefaultFlatPagination<ProfileListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete everything held about one profile. A 2xx means none of its memories are
   * left, and its summary goes with them. There is no undo.
   *
   * @example
   * ```ts
   * const profile =
   *   await client.ai.memory.namespaces.profiles.delete(
   *     'profile_id',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  delete(
    profileID: string,
    params: ProfileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProfileDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/ai/memory/namespaces/${namespace}/profiles/${profileID}`, options);
  }

  /**
   * Store a session. Facts are extracted from whatever you send — the body is taken
   * as any JSON value and stored whole, so a framework's own transcript shape works
   * unchanged. `messages` of `role`/`content` is the conventional shape, not a
   * requirement. An empty object or a null body is refused. Carry a `session_id` to
   * name the session: re-ingesting the same one replaces what it held. Omit it and a
   * session is opened and returned. Extraction runs asynchronously — poll the
   * returned operation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.memory.namespaces.profiles.ingest(
   *     'profile_id',
   *     {
   *       namespace: 'namespace',
   *       body: { foo: 'bar' },
   *     },
   *   );
   * ```
   */
  ingest(
    profileID: string,
    params: ProfileIngestParams,
    options?: RequestOptions,
  ): APIPromise<ProfileIngestResponse> {
    const { namespace, body, session_id } = params;
    return this._client.post(path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/ingest`, {
      query: { session_id },
      body: body,
      ...options,
    });
  }

  /**
   * Ranked memories for a question. Matching runs over the profile's memories and
   * returns them in rank order with a relevance `score`; the score is null where the
   * deployment's reranker is a passthrough, in which case order is the only signal.
   * No model runs in this path — recall returns facts, it does not compose an
   * answer.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.memory.namespaces.profiles.recall(
   *     'profile_id',
   *     {
   *       namespace: 'namespace',
   *       query: 'where do invoices go?',
   *       top_k: 5,
   *     },
   *   );
   * ```
   */
  recall(
    profileID: string,
    params: ProfileRecallParams,
    options?: RequestOptions,
  ): APIPromise<ProfileRecallResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/recall`, {
      body,
      ...options,
    });
  }

  /**
   * For a fact the agent has already distilled: `text` is stored as given, with
   * nothing extracted from it. Send a transcript to `ingest` instead. Remembering
   * the same text again writes the same memory rather than a second copy of it, so a
   * retry is safe. The write runs asynchronously -- poll the returned operation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.memory.namespaces.profiles.remember(
   *     'profile_id',
   *     {
   *       namespace: 'namespace',
   *       text: 'Prefers window seats and flies out of ORD',
   *     },
   *   );
   * ```
   */
  remember(
    profileID: string,
    params: ProfileRememberParams,
    options?: RequestOptions,
  ): APIPromise<ProfileRememberResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/remember`, {
      body,
      ...options,
    });
  }

  /**
   * The whole profile as one card, precomputed, with no query. Built for the start
   * of a session, where there is no question to ask yet.
   *
   * A summary is generated in the background. `is_stale` tells you newer memories
   * have arrived since it was written; that is ordinary and the card is still
   * usable.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.memory.namespaces.profiles.retrieveSummary(
   *     'profile_id',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  retrieveSummary(
    profileID: string,
    params: ProfileRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<ProfileRetrieveSummaryResponse> {
    const { namespace } = params;
    return this._client.get(path`/ai/memory/namespaces/${namespace}/profiles/${profileID}/summary`, options);
  }
}

export type ProfileListResponsesDefaultFlatPagination = DefaultFlatPagination<ProfileListResponse>;

/**
 * Where a listing's page sits in the whole.
 *
 * A page is a snapshot: the counts it reports and the order it is drawn in both
 * move as writes land, so paging through a busy namespace can repeat or miss an
 * entry at a page boundary.
 */
export interface PageMeta {
  /**
   * The page returned, counting from 1.
   */
  page_number: number;

  /**
   * How many results a page holds.
   */
  page_size: number;

  /**
   * Pages that can be requested; 0 when nothing matched. Page until `page_number`
   * reaches it rather than until a page comes back short: a page can hold fewer than
   * `page_size` results without being the last. Capped at the deepest page served,
   * so on a very large listing it covers fewer results than `total_results`.
   */
  total_pages: number;

  /**
   * Results the request matched, including any past the deepest page.
   */
  total_results: number;
}

export interface ProfileListResponse {
  /**
   * Memories stored under this profile, including the consolidated ones that
   * paraphrase others. Listings are ordered by it.
   */
  memory_count: number;

  profile_id: string;
}

export interface ProfileDeleteResponse {
  data: ProfileDeleteResponse.Data;
}

export namespace ProfileDeleteResponse {
  export interface Data {
    /**
     * Memories the profile held and no longer does, counted before and after. A report
     * rather than an audit: memory moves in the background between the two counts. The
     * status carries the outcome.
     */
    memories_deleted: number;

    profile_id: string;
  }
}

export interface ProfileIngestResponse {
  data: ProfileIngestResponse.Data;
}

export namespace ProfileIngestResponse {
  export interface Data {
    operation_id: string;

    profile_id: string;

    session_id: string;

    /**
     * Identifies one source within its profile: an ingested session, or one remembered
     * fact. Returned by `ingest` and `remember` when the write is accepted.
     * Re-ingesting a session keeps its source id.
     */
    source_id: string;
  }
}

export interface ProfileRecallResponse {
  data: Array<ProfileRecallResponse.Data>;
}

export namespace ProfileRecallResponse {
  export interface Data {
    id: string;

    text: string;

    recorded_at?: string | null;

    /**
     * Relevance, 0-1. Null where the deployment's reranker is a passthrough; results
     * are in rank order either way.
     */
    score?: number | null;
  }
}

export interface ProfileRememberResponse {
  data: ProfileRememberResponse.Data;
}

export namespace ProfileRememberResponse {
  export interface Data {
    operation_id: string;

    profile_id: string;

    /**
     * Identifies one source within its profile: an ingested session, or one remembered
     * fact. Returned by `ingest` and `remember` when the write is accepted.
     * Re-ingesting a session keeps its source id.
     */
    source_id: string;
  }
}

export interface ProfileRetrieveSummaryResponse {
  data: ProfileRetrieveSummaryResponse.Data;
}

export namespace ProfileRetrieveSummaryResponse {
  export interface Data {
    /**
     * Whether newer memories have arrived since the summary was generated. The summary
     * is regenerated in the background, so a true here is ordinary and the summary is
     * still usable.
     */
    is_stale: boolean;

    profile_id: string;

    /**
     * When the summary was last generated. Null while none is ready.
     */
    generated_at?: string | null;

    /**
     * The precomputed summary, ready to place in an assistant's context at the start
     * of a session.
     */
    text?: string | null;
  }
}

export interface ProfileListParams extends DefaultFlatPaginationParams {}

export interface ProfileDeleteParams {
  /**
   * The namespace. `default` exists for every organization.
   */
  namespace: string;
}

export type ProfileIngestParams = ProfileIngestParams.Variant0 | ProfileIngestParams.Variant1;

export declare namespace ProfileIngestParams {
  export interface Variant0 {
    /**
     * Path param
     */
    namespace: string;

    /**
     * Body param
     */
    body: { [key: string]: unknown };

    /**
     * Query param: Names the session. Re-ingesting the same session replaces what it
     * held and keeps its `source_id`. Omit it to have one derived from the content and
     * returned. No whitespace, control characters, or any of / \ # ? %.
     */
    session_id?: string | null;
  }

  export interface Variant1 {
    /**
     * Path param
     */
    namespace: string;

    /**
     * Body param
     */
    body: Array<unknown> | string | number | boolean;

    /**
     * Query param: Names the session. Re-ingesting the same session replaces what it
     * held and keeps its `source_id`. Omit it to have one derived from the content and
     * returned. No whitespace, control characters, or any of / \ # ? %.
     */
    session_id?: string | null;
  }
}

export interface ProfileRecallParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  query: string;

  /**
   * Body param
   */
  top_k?: number | null;
}

export interface ProfileRememberParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  text: string;
}

export interface ProfileRetrieveSummaryParams {
  /**
   * The namespace. `default` exists for every organization.
   */
  namespace: string;
}

Profiles.Memories = Memories;
Profiles.Sources = Sources;

export declare namespace Profiles {
  export {
    type PageMeta as PageMeta,
    type ProfileListResponse as ProfileListResponse,
    type ProfileDeleteResponse as ProfileDeleteResponse,
    type ProfileIngestResponse as ProfileIngestResponse,
    type ProfileRecallResponse as ProfileRecallResponse,
    type ProfileRememberResponse as ProfileRememberResponse,
    type ProfileRetrieveSummaryResponse as ProfileRetrieveSummaryResponse,
    type ProfileListResponsesDefaultFlatPagination as ProfileListResponsesDefaultFlatPagination,
    type ProfileListParams as ProfileListParams,
    type ProfileDeleteParams as ProfileDeleteParams,
    type ProfileIngestParams as ProfileIngestParams,
    type ProfileRecallParams as ProfileRecallParams,
    type ProfileRememberParams as ProfileRememberParams,
    type ProfileRetrieveSummaryParams as ProfileRetrieveSummaryParams,
  };

  export {
    Memories as Memories,
    type MemoryRetrieveResponse as MemoryRetrieveResponse,
    type MemoryListResponse as MemoryListResponse,
    type MemoryListResponsesDefaultFlatPagination as MemoryListResponsesDefaultFlatPagination,
    type MemoryListParams as MemoryListParams,
    type MemoryRetrieveParams as MemoryRetrieveParams,
  };

  export {
    Sources as Sources,
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceRetrieveParams as SourceRetrieveParams,
  };
}
