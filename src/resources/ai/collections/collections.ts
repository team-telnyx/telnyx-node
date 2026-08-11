// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import {
  RetrievalSettings,
  RetrievalSettingsWrapper,
  SettingCreateParams,
  SettingPatchAllParams,
  Settings,
  SettingsEnvelope,
  SettingsRequest,
} from './settings';
import * as SourcesAPI from './sources';
import {
  Source,
  SourceCreateParams,
  SourceCreateResponse,
  SourceDeleteParams,
  SourceListResponse,
  SourceReplaceParams,
  SourceReplaceResponse,
  SourceRequest,
  SourceType,
  Sources,
} from './sources';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage logical collections of your Telnyx data, tune retrieval settings, manage sources, and run collection-scoped semantic search.
 */
export class Collections extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);

  /**
   * Fetches a single collection by its `uuid`.
   *
   * @example
   * ```ts
   * const collectionEnvelope =
   *   await client.ai.collections.retrieveByID(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   );
   * ```
   */
  retrieveByID(uuid: string, options?: RequestOptions): APIPromise<CollectionEnvelope> {
    return this._client.get(path`/ai/collections/${uuid}`, options);
  }

  /**
   * Returns a paginated list of collections in your organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const collection of client.ai.collections.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CollectionsDefaultFlatPagination, Collection> {
    return this._client.getAPIList('/ai/collections', DefaultFlatPagination<Collection>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new collection scoped to your organization. Optionally attach sources
   * and retrieval settings at creation time. If `slug` is omitted, one is derived
   * from `name` and must be unique within your organization.
   *
   * @example
   * ```ts
   * const collectionEnvelope =
   *   await client.ai.collections.create({
   *     name: 'Support Transcripts',
   *   });
   * ```
   */
  create(body: CollectionCreateParams, options?: RequestOptions): APIPromise<CollectionEnvelope> {
    return this._client.post('/ai/collections', { body, ...options });
  }

  /**
   * Fetches a single collection by its `slug`.
   *
   * @example
   * ```ts
   * const collectionEnvelope =
   *   await client.ai.collections.retrieve(
   *     'support-transcripts',
   *   );
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<CollectionEnvelope> {
    return this._client.get(path`/ai/collections/slug/${slug}`, options);
  }

  /**
   * Runs search over the documents in a collection, ranked by relevance to `query`.
   * The collection's `retrieval_type` setting selects the strategy: `vector`
   * (semantic similarity), `hybrid` (vector similarity fused with keyword matching),
   * or `keyword` (lexical BM25 matching). When `query` is omitted, returns a plain
   * catalog listing of the collection's documents.
   *
   * **How it works:**
   *
   * 1. For `vector` and `hybrid`, the `query` text is embedded into a
   *    1024-dimensional vector using the multilingual-e5-large model.
   * 2. For `vector`, the embedding is compared against the collection's indexed
   *    document chunks using semantic similarity; for `hybrid`, those similarity
   *    scores are fused with keyword-match scores; for `keyword`, only lexical BM25
   *    matching is applied.
   * 3. Results are ranked by `score` (descending) and paginated via `page[number]` /
   *    `page[size]`.
   *
   * **Authentication:** Requires a Telnyx API key via `Authorization: Bearer <key>`.
   * Results are automatically scoped to your organization and cannot be overridden.
   *
   * **Filtering:** Use `filter[field][operator]=value` query parameters to narrow
   * results before search. Supported operators: `eq` (default), `in`, `gte`, `gt`,
   * `lte`, `lt`, `contains`. Metadata fields resolve to `metadata.<field>`.
   *
   * **Examples:**
   *
   * - `GET /v2/ai/collections/my-collection/documents?query=billing+issue&top_k=10`
   * - `GET /v2/ai/collections/my-collection/documents?query=refund&sources=voice,message`
   * - `GET /v2/ai/collections/my-collection/documents?query=outage&filter[record_created_at][gte]=2026-01-01T00:00:00Z`
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.collections.retrieveDocuments(
   *     'support-transcripts',
   *   );
   * ```
   */
  retrieveDocuments(
    slug: string,
    query: CollectionRetrieveDocumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionRetrieveDocumentsResponse> {
    return this._client.get(path`/ai/collections/${slug}/documents`, { query, ...options });
  }

  /**
   * Soft-deletes a collection. Its `slug` is freed and may be reused by a new
   * collection.
   *
   * @example
   * ```ts
   * await client.ai.collections.delete(
   *   '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   * );
   * ```
   */
  delete(uuid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/collections/${uuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a collection's metadata (`name` and/or `description`). Sources and
   * settings are managed through their own sub-resources.
   *
   * @example
   * ```ts
   * const collectionEnvelope =
   *   await client.ai.collections.update(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   );
   * ```
   */
  update(
    uuid: string,
    body: CollectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CollectionEnvelope> {
    return this._client.patch(path`/ai/collections/${uuid}`, { body, ...options });
  }
}

export type CollectionsDefaultFlatPagination = DefaultFlatPagination<Collection>;

export interface Collection {
  created_at?: string;

  description?: string;

  name?: string;

  /**
   * Identifies the record type. Always `ai_collection`.
   */
  record_type?: string;

  settings?: SettingsAPI.RetrievalSettingsWrapper;

  slug?: string;

  sources?: Array<SourcesAPI.Source>;

  status?: string;

  updated_at?: string;

  uuid?: string;
}

export interface CollectionEnvelope {
  data?: Collection;
}

export interface CollectionRetrieveDocumentsResponse {
  data?: Array<CollectionRetrieveDocumentsResponse.Data>;

  meta?: CollectionRetrieveDocumentsResponse.Meta;
}

export namespace CollectionRetrieveDocumentsResponse {
  export interface Data {
    id?: string;

    chunk_index?: number;

    chunk_total?: number;

    ingested_at?: string;

    metadata?: { [key: string]: unknown };

    organization_id?: string;

    record_created_at?: string;

    record_id?: string;

    /**
     * The source record kind this chunk came from (e.g. `voice`, `meeting_bot`,
     * `message`).
     */
    record_type?: string;

    region?: string;

    /**
     * Relevance score (higher = more relevant) for ranked search. `0.0` for plain
     * catalog listings (when `query` is omitted).
     */
    score?: number;

    text?: string;

    user_id?: string;
  }

  export interface Meta {
    collection_slug?: string;

    page_number?: number;

    page_size?: number;

    retrieval_type?: string;

    searched_sources?: Array<string>;

    top_k?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface CollectionListParams extends DefaultFlatPaginationParams {}

export interface CollectionCreateParams {
  /**
   * Human-readable collection name.
   */
  name: string;

  /**
   * Optional description.
   */
  description?: string;

  /**
   * Optional retrieval settings.
   */
  settings?: SettingsAPI.RetrievalSettingsWrapper;

  /**
   * Optional slug (unique per organization). Derived from `name` when omitted.
   */
  slug?: string;

  /**
   * Optional sources to attach at creation time.
   */
  sources?: Array<SourcesAPI.SourceRequest>;
}

export interface CollectionRetrieveDocumentsParams {
  /**
   * Field filters applied before ranking, using `filter[field][operator]=value`.
   * Supported operators: `eq` (default), `in`, `gte`, `gt`, `lte`, `lt`, `contains`.
   * Known fields: `record_type`, `record_id`, `user_id`, `record_created_at`,
   * `ingested_at`; any other name resolves to a `metadata.<field>` filter. Example:
   * `filter[record_id][eq]=rec_123`.
   */
  filter?: { [key: string]: unknown };

  /**
   * Page number to return (1-based). Defaults to 1.
   */
  'page[number]'?: number;

  /**
   * Number of results per page. Defaults to 20.
   */
  'page[size]'?: number;

  /**
   * Natural-language search query. When provided, the text is matched against the
   * collection's document chunks using the collection's `retrieval_type` (vector or
   * hybrid). When omitted, documents are returned as a plain catalog listing.
   */
  query?: string;

  /**
   * Override the collection's configured retrieval strategy for this request. Echoed
   * back in `meta.retrieval_type`.
   */
  retrieval_type?: 'vector' | 'hybrid' | 'keyword';

  /**
   * Comma-separated list of source types to restrict the search to. When omitted,
   * all of the collection's sources are searched.
   */
  sources?: string;

  /**
   * Maximum number of ranked results to consider. When omitted, the collection's
   * configured `top_k` setting is used.
   */
  top_k?: number;
}

export interface CollectionUpdateParams {
  description?: string;

  name?: string;
}

Collections.Settings = Settings;
Collections.Sources = Sources;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type CollectionEnvelope as CollectionEnvelope,
    type CollectionRetrieveDocumentsResponse as CollectionRetrieveDocumentsResponse,
    type CollectionsDefaultFlatPagination as CollectionsDefaultFlatPagination,
    type CollectionListParams as CollectionListParams,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionRetrieveDocumentsParams as CollectionRetrieveDocumentsParams,
    type CollectionUpdateParams as CollectionUpdateParams,
  };

  export {
    Settings as Settings,
    type RetrievalSettings as RetrievalSettings,
    type RetrievalSettingsWrapper as RetrievalSettingsWrapper,
    type SettingsEnvelope as SettingsEnvelope,
    type SettingsRequest as SettingsRequest,
    type SettingPatchAllParams as SettingPatchAllParams,
    type SettingCreateParams as SettingCreateParams,
  };

  export {
    Sources as Sources,
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
