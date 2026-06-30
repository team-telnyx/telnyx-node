// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

/**
 * Manage pronunciation dictionaries for text-to-speech synthesis. Dictionaries contain alias items (text replacement) and phoneme items (IPA pronunciation notation) that control how specific words are spoken.
 */
export class PronunciationDicts extends APIResource {
  /**
   * Create a new pronunciation dictionary for the authenticated organization. Each
   * dictionary contains a list of items that control how specific words are spoken.
   * Items can be alias type (text replacement) or phoneme type (IPA pronunciation
   * notation).
   *
   * As an alternative to providing items directly as JSON, you can upload a
   * dictionary file (PLS/XML or plain text format, max 1MB) using
   * multipart/form-data. PLS files use the standard W3C Pronunciation Lexicon
   * Specification XML format. Text files use a line-based format: `word=alias` for
   * aliases, `word:/phoneme/` for IPA phonemes.
   *
   * Limits:
   *
   * - Maximum 50 dictionaries per organization
   * - Maximum 100 items per dictionary
   * - Text: max 200 characters
   * - Alias/phoneme value: max 500 characters
   * - File upload: max 1MB (1,048,576 bytes)
   *
   * @example
   * ```ts
   * const pronunciationDict =
   *   await client.pronunciationDicts.create({
   *     items: [
   *       {
   *         alias: 'tel-nicks',
   *         text: 'Telnyx',
   *         type: 'alias',
   *       },
   *     ],
   *     name: 'Brand Names',
   *   });
   * ```
   */
  create(
    body: PronunciationDictCreateParams,
    options?: RequestOptions,
  ): APIPromise<PronunciationDictCreateResponse> {
    return this._client.post(
      '/pronunciation_dicts',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieve a single pronunciation dictionary by ID.
   *
   * @example
   * ```ts
   * const pronunciationDict =
   *   await client.pronunciationDicts.retrieve(
   *     'c215a3e1-be41-4701-97e8-1d3c22f9a5b7',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PronunciationDictRetrieveResponse> {
    return this._client.get(path`/pronunciation_dicts/${id}`, options);
  }

  /**
   * Update the name and/or items of an existing pronunciation dictionary. Uses
   * optimistic locking — if the dictionary was modified concurrently, the request
   * returns 409 Conflict.
   *
   * @example
   * ```ts
   * const pronunciationDict =
   *   await client.pronunciationDicts.update(
   *     'c215a3e1-be41-4701-97e8-1d3c22f9a5b7',
   *   );
   * ```
   */
  update(
    id: string,
    body: PronunciationDictUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PronunciationDictUpdateResponse> {
    return this._client.patch(path`/pronunciation_dicts/${id}`, { body, ...options });
  }

  /**
   * List all pronunciation dictionaries for the authenticated organization. Results
   * are paginated using offset-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pronunciationDictData of client.pronunciationDicts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PronunciationDictListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PronunciationDictDataDefaultFlatPagination, PronunciationDictData> {
    return this._client.getAPIList('/pronunciation_dicts', DefaultFlatPagination<PronunciationDictData>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently delete a pronunciation dictionary.
   *
   * @example
   * ```ts
   * await client.pronunciationDicts.delete(
   *   'c215a3e1-be41-4701-97e8-1d3c22f9a5b7',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/pronunciation_dicts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PronunciationDictDataDefaultFlatPagination = DefaultFlatPagination<PronunciationDictData>;

/**
 * An alias pronunciation item. When the `text` value is found in input, it is
 * replaced with the `alias` before speech synthesis.
 */
export interface PronunciationDictAliasItem {
  /**
   * The replacement text that will be spoken instead.
   */
  alias: string;

  /**
   * The text to match in the input. Case-insensitive matching is used during
   * synthesis.
   */
  text: string;

  /**
   * The item type.
   */
  type: 'alias';
}

/**
 * A pronunciation dictionary record.
 */
export interface PronunciationDictData {
  /**
   * Unique identifier for the pronunciation dictionary.
   */
  id?: string;

  /**
   * ISO 8601 timestamp with millisecond precision.
   */
  created_at?: string;

  /**
   * List of pronunciation items (alias or phoneme type).
   */
  items?: Array<PronunciationDictAliasItem | PronunciationDictPhonemeItem>;

  /**
   * Human-readable name for the dictionary. Must be unique within the organization.
   */
  name?: string;

  /**
   * Identifies the resource type.
   */
  record_type?: 'pronunciation_dict';

  /**
   * ISO 8601 timestamp with millisecond precision.
   */
  updated_at?: string;

  /**
   * Auto-incrementing version number. Increases by 1 on each update. Used for
   * optimistic concurrency control and cache invalidation.
   */
  version?: number;
}

/**
 * A phoneme pronunciation item. When the `text` value is found in input, it is
 * pronounced using the specified IPA phoneme notation.
 */
export interface PronunciationDictPhonemeItem {
  /**
   * The phonetic alphabet used for the phoneme notation.
   */
  alphabet: 'ipa';

  /**
   * The phoneme notation representing the desired pronunciation.
   */
  phoneme: string;

  /**
   * The text to match in the input. Case-insensitive matching is used during
   * synthesis.
   */
  text: string;

  /**
   * The item type.
   */
  type: 'phoneme';
}

/**
 * Response containing a single pronunciation dictionary.
 */
export interface PronunciationDictCreateResponse {
  /**
   * A pronunciation dictionary record.
   */
  data?: PronunciationDictData;
}

/**
 * Response containing a single pronunciation dictionary.
 */
export interface PronunciationDictRetrieveResponse {
  /**
   * A pronunciation dictionary record.
   */
  data?: PronunciationDictData;
}

/**
 * Response containing a single pronunciation dictionary.
 */
export interface PronunciationDictUpdateResponse {
  /**
   * A pronunciation dictionary record.
   */
  data?: PronunciationDictData;
}

export interface PronunciationDictCreateParams {
  /**
   * List of pronunciation items (alias or phoneme type). At least one item is
   * required.
   */
  items: Array<PronunciationDictAliasItem | PronunciationDictPhonemeItem>;

  /**
   * Human-readable name. Must be unique within the organization.
   */
  name: string;
}

export interface PronunciationDictUpdateParams {
  /**
   * Updated list of pronunciation items (alias or phoneme type).
   */
  items?: Array<PronunciationDictAliasItem | PronunciationDictPhonemeItem>;

  /**
   * Updated dictionary name.
   */
  name?: string;
}

export interface PronunciationDictListParams extends DefaultFlatPaginationParams {}

export declare namespace PronunciationDicts {
  export {
    type PronunciationDictAliasItem as PronunciationDictAliasItem,
    type PronunciationDictData as PronunciationDictData,
    type PronunciationDictPhonemeItem as PronunciationDictPhonemeItem,
    type PronunciationDictCreateResponse as PronunciationDictCreateResponse,
    type PronunciationDictRetrieveResponse as PronunciationDictRetrieveResponse,
    type PronunciationDictUpdateResponse as PronunciationDictUpdateResponse,
    type PronunciationDictDataDefaultFlatPagination as PronunciationDictDataDefaultFlatPagination,
    type PronunciationDictCreateParams as PronunciationDictCreateParams,
    type PronunciationDictUpdateParams as PronunciationDictUpdateParams,
    type PronunciationDictListParams as PronunciationDictListParams,
  };
}
