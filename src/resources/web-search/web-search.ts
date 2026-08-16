// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebSearchAPI from './web-search';
import * as ResearchAPI from './research';
import {
  Research,
  ResearchCitation,
  ResearchCreateParams,
  ResearchCreateResponse,
  ResearchRetrieveResponse,
} from './research';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class WebSearch extends APIResource {
  research: ResearchAPI.Research = new ResearchAPI.Research(this._client);

  /**
   * Performs a real-time web search and returns structured, LLM-ready JSON results
   * with titles, URLs, descriptions, and snippets. Supports filtering by domain,
   * country, safe search, freshness, and live crawl.
   *
   * **Note:** `include_domains` and `exclude_domains` cannot be used in the same
   * request. Use one or the other.
   *
   * @example
   * ```ts
   * const webSearch = await client.webSearch.create({
   *   query: 'latest AI agent frameworks',
   *   count: 10,
   *   country: 'US',
   *   freshness: 'week',
   *   include_domains: ['arxiv.org', 'github.com'],
   *   safesearch: 'moderate',
   * });
   * ```
   */
  create(body: WebSearchCreateParams, options?: RequestOptions): APIPromise<WebSearchCreateResponse> {
    return this._client.post('/web_search', { body, ...options });
  }

  /**
   * Retrieves clean HTML or Markdown content from a list of URLs. Supports up to 20
   * URLs per request (public API limit). Specify which formats to return: `html`,
   * `markdown`, `metadata`.
   *
   * @example
   * ```ts
   * const response = await client.webSearch.contents({
   *   urls: [
   *     'https://en.wikipedia.org/wiki/Artificial_intelligence',
   *   ],
   *   crawl_timeout: 10,
   *   formats: ['markdown', 'metadata'],
   * });
   * ```
   */
  contents(body: WebSearchContentsParams, options?: RequestOptions): APIPromise<WebSearchContentsResponse> {
    return this._client.post('/web_search/contents', { body, ...options });
  }
}

export interface WebSearchResult {
  /**
   * Short description or excerpt.
   */
  description: string;

  /**
   * Relevant text snippets from the page.
   */
  snippets: Array<string>;

  /**
   * Result title.
   */
  title: string;

  /**
   * Result URL.
   */
  url: string;

  /**
   * Favicon URL (if available).
   */
  favicon_url?: string;

  /**
   * Thumbnail image URL (if available).
   */
  thumbnail_url?: string;
}

export interface WebSearchCreateResponse {
  data?: WebSearchCreateResponse.Data;
}

export namespace WebSearchCreateResponse {
  export interface Data {
    results?: Data.Results;
  }

  export namespace Data {
    export interface Results {
      /**
       * Web search results.
       */
      web: Array<WebSearchAPI.WebSearchResult>;

      /**
       * News search results. Present only when the query surfaces news results.
       */
      news?: Array<WebSearchAPI.WebSearchResult>;
    }
  }
}

export interface WebSearchContentsResponse {
  data?: WebSearchContentsResponse.Data;
}

export namespace WebSearchContentsResponse {
  export interface Data {
    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * The source URL.
       */
      url: string;

      /**
       * Cleaned HTML content (if `html` format requested; may also be present on freshly
       * crawled pages).
       */
      html?: string;

      /**
       * Markdown content (if `markdown` format requested).
       */
      markdown?: string;

      /**
       * Page metadata (if `metadata` format requested).
       */
      metadata?: Result.Metadata;

      /**
       * Page title (if available).
       */
      title?: string;
    }

    export namespace Result {
      /**
       * Page metadata (if `metadata` format requested).
       */
      export interface Metadata {
        /**
         * Favicon URL (if available).
         */
        favicon_url?: string;

        /**
         * Site name. Often empty.
         */
        site_name?: string;

        [k: string]: unknown;
      }
    }
  }
}

export interface WebSearchCreateParams {
  /**
   * The search query text.
   */
  query: string;

  /**
   * Number of results to return (1-100).
   */
  count?: number;

  /**
   * Two-letter country code (ISO 3166-1 alpha-2) to bias results.
   */
  country?: string;

  /**
   * Exclude results from these domains (bare hostnames, e.g. `pinterest.com`).
   */
  exclude_domains?: Array<string>;

  /**
   * Time-based filter for results. Common values: `day`, `week`, `month`, `year`.
   */
  freshness?: string;

  /**
   * Restrict results to these domains (bare hostnames, e.g. `arxiv.org`).
   */
  include_domains?: Array<string>;

  /**
   * When true, the provider crawls pages in real-time for fresh content. The boolean
   * is translated to the provider's internal enum internally; callers always pass
   * `true` or `false`.
   */
  livecrawl?: boolean;

  /**
   * Safe search filter level.
   */
  safesearch?: 'off' | 'moderate' | 'strict';
}

export interface WebSearchContentsParams {
  /**
   * List of URLs to retrieve content from (max 20 for public API).
   */
  urls: Array<string>;

  /**
   * Timeout for crawling each URL, in seconds (1-60).
   */
  crawl_timeout?: number;

  /**
   * Content formats to return. If omitted, `html` and `metadata` are returned by
   * default. Retrieval is best-effort per URL: a format field appears only when that
   * content could be produced, and a freshly crawled page may also include `html`
   * even when not requested.
   */
  formats?: Array<'html' | 'markdown' | 'metadata'>;

  /**
   * Maximum age of cached content in seconds. `null` means no limit.
   */
  max_age?: number | null;
}

WebSearch.Research = Research;

export declare namespace WebSearch {
  export {
    type WebSearchResult as WebSearchResult,
    type WebSearchCreateResponse as WebSearchCreateResponse,
    type WebSearchContentsResponse as WebSearchContentsResponse,
    type WebSearchCreateParams as WebSearchCreateParams,
    type WebSearchContentsParams as WebSearchContentsParams,
  };

  export {
    Research as Research,
    type ResearchCitation as ResearchCitation,
    type ResearchCreateResponse as ResearchCreateResponse,
    type ResearchRetrieveResponse as ResearchRetrieveResponse,
    type ResearchCreateParams as ResearchCreateParams,
  };
}
