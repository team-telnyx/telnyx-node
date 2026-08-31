// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage logical collections of your Telnyx data, tune retrieval settings, manage sources, and run collection-scoped semantic search.
 */
export class Collections extends APIResource {
  /**
   * Runs search over the documents in a collection, ranked by relevance to `query`.
   * Searches currently run `vector` retrieval (semantic similarity). The
   * collection's `retrieval_type` setting is the forward-compatible selector:
   * `hybrid` (vector similarity fused with keyword matching) can be set but cannot
   * be searched yet, and `keyword` (lexical BM25 matching) is not accepted yet --
   * setting it returns 422 `unsupported_retrieval_type`. A per-request
   * `retrieval_type` is accepted but ignored; `meta.retrieval_type` echoes the mode
   * that actually ran. When `query` is omitted, returns a plain catalog listing of
   * the collection's documents.
   *
   * **How it works:**
   *
   * 1. The `query` text is embedded into a 1024-dimensional vector using the
   *    multilingual-e5-large model.
   * 2. The embedding is compared against the collection's indexed document chunks
   *    using semantic similarity. When `hybrid` and `keyword` execution ship, those
   *    scores will be fused with, or replaced by, lexical BM25 matching.
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
   * - `GET /v2/ai/knowledge/collections/my-collection/documents?query=billing+issue&top_k=10`
   * - `GET /v2/ai/knowledge/collections/my-collection/documents?query=refund&sources=voice,message`
   * - `GET /v2/ai/knowledge/collections/my-collection/documents?query=outage&filter[record_created_at][gte]=2026-01-01T00:00:00Z`
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.knowledge.collections.retrieveDocuments(
   *     'support-transcripts',
   *   );
   * ```
   */
  retrieveDocuments(
    slug: string,
    query: CollectionRetrieveDocumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionRetrieveDocumentsResponse> {
    return this._client.get(path`/ai/knowledge/collections/${slug}/documents`, { query, ...options });
  }
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
   * Reserved; not yet functional. A value supplied here is accepted but ignored — it
   * does not override the collection's configured strategy, and it is not echoed
   * back. Searches run `vector` retrieval, and `meta.retrieval_type` reports the
   * mode that actually ran. To change retrieval strategy, set it on the collection's
   * settings subresource.
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

export declare namespace Collections {
  export {
    type CollectionRetrieveDocumentsResponse as CollectionRetrieveDocumentsResponse,
    type CollectionRetrieveDocumentsParams as CollectionRetrieveDocumentsParams,
  };
}
