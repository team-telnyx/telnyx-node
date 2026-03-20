// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create and manage AI-generated voice designs using natural language prompts.
 */
export class VoiceDesigns extends APIResource {
  /**
   * Creates a new voice design (version 1) when `voice_design_id` is omitted. When
   * `voice_design_id` is provided, adds a new version to the existing design
   * instead. A design can have at most 50 versions.
   *
   * @example
   * ```ts
   * const voiceDesign = await client.voiceDesigns.create({
   *   prompt: 'Speak in a warm, friendly tone',
   *   text: 'Hello, welcome to our service.',
   * });
   * ```
   */
  create(body: VoiceDesignCreateParams, options?: RequestOptions): APIPromise<VoiceDesignCreateResponse> {
    return this._client.post('/voice_designs', { body, ...options });
  }

  /**
   * Returns the latest version of a voice design, or a specific version when
   * `?version=N` is provided. The `id` parameter accepts either a UUID or the design
   * name.
   *
   * @example
   * ```ts
   * const voiceDesign = await client.voiceDesigns.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: VoiceDesignRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoiceDesignRetrieveResponse> {
    return this._client.get(path`/voice_designs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of voice designs belonging to the authenticated
   * account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const voiceDesignListResponse of client.voiceDesigns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VoiceDesignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VoiceDesignListResponsesDefaultFlatPagination, VoiceDesignListResponse> {
    return this._client.getAPIList('/voice_designs', DefaultFlatPagination<VoiceDesignListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a voice design and all of its versions. This action cannot
   * be undone.
   *
   * @example
   * ```ts
   * await client.voiceDesigns.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/voice_designs/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes a specific version of a voice design. The version number
   * must be a positive integer.
   *
   * @example
   * ```ts
   * await client.voiceDesigns.deleteVersion(1, { id: 'id' });
   * ```
   */
  deleteVersion(
    version: number,
    params: VoiceDesignDeleteVersionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/voice_designs/${id}/versions/${version}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Downloads the WAV audio sample for the voice design. Returns the latest
   * version's sample by default, or a specific version when `?version=N` is
   * provided. The `id` parameter accepts either a UUID or the design name.
   *
   * @example
   * ```ts
   * const response = await client.voiceDesigns.downloadSample(
   *   'id',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  downloadSample(
    id: string,
    query: VoiceDesignDownloadSampleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/voice_designs/${id}/sample`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/wav' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Updates the name of a voice design. All versions retain their other properties.
   *
   * @example
   * ```ts
   * const response = await client.voiceDesigns.rename('id', {
   *   name: 'updated-narrator',
   * });
   * ```
   */
  rename(
    id: string,
    body: VoiceDesignRenameParams,
    options?: RequestOptions,
  ): APIPromise<VoiceDesignRenameResponse> {
    return this._client.patch(path`/voice_designs/${id}`, { body, ...options });
  }
}

export type VoiceDesignListResponsesDefaultFlatPagination = DefaultFlatPagination<VoiceDesignListResponse>;

/**
 * A voice design object with full version detail.
 */
export interface VoiceDesignData {
  /**
   * Unique identifier for the voice design.
   */
  id?: string;

  /**
   * Timestamp when the voice design was first created.
   */
  created_at?: string;

  /**
   * Name of the voice design.
   */
  name?: string;

  /**
   * Natural language prompt used to define the voice style for this version.
   */
  prompt?: string;

  /**
   * Voice synthesis provider used for this design.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax' | null;

  /**
   * List of TTS model identifiers supported by this design's provider (e.g.
   * `Qwen3TTS`, `speech-02-turbo`).
   */
  provider_supported_models?: Array<string>;

  /**
   * Provider-specific voice identifier. For Telnyx designs this is the design
   * version ID; for Minimax it is the Minimax-assigned voice ID.
   */
  provider_voice_id?: string | null;

  /**
   * Identifies the resource type.
   */
  record_type?: 'voice_design';

  /**
   * Sample text used to synthesize this version.
   */
  text?: string;

  /**
   * Timestamp when the voice design was last updated.
   */
  updated_at?: string;

  /**
   * Version number of this voice design.
   */
  version?: number;

  /**
   * Timestamp when this specific version was created.
   */
  version_created_at?: string;

  /**
   * Size of the voice sample audio in bytes.
   */
  voice_sample_size?: number;
}

/**
 * Response envelope for a single voice design with full version detail.
 */
export interface VoiceDesignCreateResponse {
  /**
   * A voice design object with full version detail.
   */
  data?: VoiceDesignData;
}

/**
 * Response envelope for a single voice design with full version detail.
 */
export interface VoiceDesignRetrieveResponse {
  /**
   * A voice design object with full version detail.
   */
  data?: VoiceDesignData;
}

/**
 * A summarized voice design object (without version-specific fields).
 */
export interface VoiceDesignListResponse {
  /**
   * Unique identifier for the voice design.
   */
  id?: string;

  /**
   * Timestamp when the voice design was first created.
   */
  created_at?: string;

  /**
   * Name of the voice design.
   */
  name?: string;

  /**
   * Voice synthesis provider used for this design.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax' | null;

  /**
   * List of TTS model identifiers supported by this design's provider.
   */
  provider_supported_models?: Array<string>;

  /**
   * Identifies the resource type.
   */
  record_type?: 'voice_design';

  /**
   * Timestamp when the voice design was last updated.
   */
  updated_at?: string;
}

/**
 * Response envelope for a voice design after a rename operation (no
 * version-specific fields).
 */
export interface VoiceDesignRenameResponse {
  /**
   * A summarized voice design object (without version-specific fields).
   */
  data?: VoiceDesignRenameResponse.Data;
}

export namespace VoiceDesignRenameResponse {
  /**
   * A summarized voice design object (without version-specific fields).
   */
  export interface Data {
    /**
     * Unique identifier for the voice design.
     */
    id?: string;

    /**
     * Timestamp when the voice design was first created.
     */
    created_at?: string;

    /**
     * Name of the voice design.
     */
    name?: string;

    /**
     * Voice synthesis provider used for this design.
     */
    provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax' | null;

    /**
     * List of TTS model identifiers supported by this design's provider.
     */
    provider_supported_models?: Array<string>;

    /**
     * Identifies the resource type.
     */
    record_type?: 'voice_design';

    /**
     * Timestamp when the voice design was last updated.
     */
    updated_at?: string;
  }
}

export interface VoiceDesignCreateParams {
  /**
   * Natural language description of the voice style, e.g. 'Speak in a warm, friendly
   * tone with a slight British accent'.
   */
  prompt: string;

  /**
   * Sample text to synthesize for this voice design.
   */
  text: string;

  /**
   * Language for synthesis. Supported values: Auto, Chinese, English, Japanese,
   * Korean, German, French, Russian, Portuguese, Spanish, Italian. Defaults to Auto.
   */
  language?: string;

  /**
   * Maximum number of tokens to generate. Default: 2048.
   */
  max_new_tokens?: number;

  /**
   * Name for the voice design. Required when creating a new design
   * (`voice_design_id` is not provided); ignored when adding a version. Cannot be a
   * UUID.
   */
  name?: string;

  /**
   * Voice synthesis provider. `telnyx` uses the Qwen3TTS model; `minimax` uses the
   * Minimax speech models. Case-insensitive. Defaults to `telnyx`.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax';

  /**
   * Repetition penalty to reduce repeated patterns in generated audio. Default:
   * 1.05.
   */
  repetition_penalty?: number;

  /**
   * Sampling temperature controlling randomness. Higher values produce more varied
   * output. Default: 0.9.
   */
  temperature?: number;

  /**
   * Top-k sampling parameter — limits the token vocabulary considered at each step.
   * Default: 50.
   */
  top_k?: number;

  /**
   * Top-p (nucleus) sampling parameter — cumulative probability cutoff for token
   * selection. Default: 1.0.
   */
  top_p?: number;

  /**
   * ID of an existing voice design to add a new version to. When provided, a new
   * version is created instead of a new design.
   */
  voice_design_id?: string;
}

export interface VoiceDesignRetrieveParams {
  /**
   * Specific version number to retrieve. Defaults to the latest version.
   */
  version?: number;
}

export interface VoiceDesignListParams extends DefaultFlatPaginationParams {
  /**
   * Case-insensitive substring filter on the name field.
   */
  'filter[name]'?: string;

  /**
   * Sort order. Prefix with `-` for descending. Defaults to `-created_at`.
   */
  sort?: 'name' | '-name' | 'created_at' | '-created_at';
}

export interface VoiceDesignDeleteVersionParams {
  /**
   * The voice design UUID or name.
   */
  id: string;
}

export interface VoiceDesignDownloadSampleParams {
  /**
   * Specific version number to download the sample for. Defaults to the latest
   * version.
   */
  version?: number;
}

export interface VoiceDesignRenameParams {
  /**
   * New name for the voice design.
   */
  name: string;
}

export declare namespace VoiceDesigns {
  export {
    type VoiceDesignData as VoiceDesignData,
    type VoiceDesignCreateResponse as VoiceDesignCreateResponse,
    type VoiceDesignRetrieveResponse as VoiceDesignRetrieveResponse,
    type VoiceDesignListResponse as VoiceDesignListResponse,
    type VoiceDesignRenameResponse as VoiceDesignRenameResponse,
    type VoiceDesignListResponsesDefaultFlatPagination as VoiceDesignListResponsesDefaultFlatPagination,
    type VoiceDesignCreateParams as VoiceDesignCreateParams,
    type VoiceDesignRetrieveParams as VoiceDesignRetrieveParams,
    type VoiceDesignListParams as VoiceDesignListParams,
    type VoiceDesignDeleteVersionParams as VoiceDesignDeleteVersionParams,
    type VoiceDesignDownloadSampleParams as VoiceDesignDownloadSampleParams,
    type VoiceDesignRenameParams as VoiceDesignRenameParams,
  };
}
