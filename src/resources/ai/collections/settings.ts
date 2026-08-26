// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage logical collections of your Telnyx data, tune retrieval settings, manage sources, and run collection-scoped semantic search.
 */
export class Settings extends APIResource {
  /**
   * Returns the retrieval settings for a collection.
   *
   * @example
   * ```ts
   * const settingsEnvelope =
   *   await client.ai.collections.settings.list(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   );
   * ```
   */
  list(uuid: string, options?: RequestOptions): APIPromise<SettingsEnvelope> {
    return this._client.get(path`/ai/collections/${uuid}/settings`, options);
  }

  /**
   * Partially updates the collection's retrieval settings.
   *
   * @example
   * ```ts
   * const settingsEnvelope =
   *   await client.ai.collections.settings.patchAll(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   );
   * ```
   */
  patchAll(
    uuid: string,
    body: SettingPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<SettingsEnvelope> {
    return this._client.patch(path`/ai/collections/${uuid}/settings`, { body, ...options });
  }

  /**
   * Replaces the collection's retrieval settings.
   *
   * @example
   * ```ts
   * const settingsEnvelope =
   *   await client.ai.collections.settings.create(
   *     '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
   *   );
   * ```
   */
  create(uuid: string, body: SettingCreateParams, options?: RequestOptions): APIPromise<SettingsEnvelope> {
    return this._client.put(path`/ai/collections/${uuid}/settings`, { body, ...options });
  }
}

/**
 * How documents are retrieved when searching the collection.
 */
export interface RetrievalSettings {
  /**
   * Retrieval strategy. `vector` runs semantic similarity search; `hybrid` combines
   * vector similarity with keyword matching; `keyword` runs lexical (BM25) matching.
   * `keyword` is not accepted yet: setting it returns 422
   * `unsupported_retrieval_type`. A collection set to `hybrid` is accepted here but
   * cannot be searched until hybrid execution ships.
   */
  retrieval_type?: 'vector' | 'hybrid';

  /**
   * Number of top results to retrieve (1–50).
   */
  top_k?: number;
}

export interface RetrievalSettingsWrapper {
  /**
   * Identifies the record type. Always `ai_collection_settings`.
   */
  record_type?: string;

  /**
   * How documents are retrieved when searching the collection.
   */
  retrieval?: RetrievalSettings;
}

export interface SettingsEnvelope {
  data?: RetrievalSettingsWrapper;
}

export interface SettingsRequest {
  /**
   * How documents are retrieved when searching the collection.
   */
  retrieval?: RetrievalSettings;
}

export interface SettingPatchAllParams {
  /**
   * How documents are retrieved when searching the collection.
   */
  retrieval?: RetrievalSettings;
}

export interface SettingCreateParams {
  /**
   * How documents are retrieved when searching the collection.
   */
  retrieval?: RetrievalSettings;
}

export declare namespace Settings {
  export {
    type RetrievalSettings as RetrievalSettings,
    type RetrievalSettingsWrapper as RetrievalSettingsWrapper,
    type SettingsEnvelope as SettingsEnvelope,
    type SettingsRequest as SettingsRequest,
    type SettingPatchAllParams as SettingPatchAllParams,
    type SettingCreateParams as SettingCreateParams,
  };
}
