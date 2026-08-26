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
    type CollectionsDefaultFlatPagination as CollectionsDefaultFlatPagination,
    type CollectionListParams as CollectionListParams,
    type CollectionCreateParams as CollectionCreateParams,
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
