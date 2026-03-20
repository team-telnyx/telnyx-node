// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

/**
 * Capture and manage voice identities as clones for use in text-to-speech synthesis.
 */
export class VoiceClones extends APIResource {
  /**
   * Creates a new voice clone by capturing the voice identity of an existing voice
   * design. The clone can then be used for text-to-speech synthesis.
   *
   * @example
   * ```ts
   * const voiceClone = await client.voiceClones.create({
   *   gender: 'male',
   *   language: 'en',
   *   name: 'clone-narrator',
   *   voice_design_id: '550e8400-e29b-41d4-a716-446655440000',
   * });
   * ```
   */
  create(body: VoiceCloneCreateParams, options?: RequestOptions): APIPromise<VoiceCloneCreateResponse> {
    return this._client.post('/voice_clones', { body, ...options });
  }

  /**
   * Updates the name, language, or gender of a voice clone.
   *
   * @example
   * ```ts
   * const voiceClone = await client.voiceClones.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { name: 'updated-clone' },
   * );
   * ```
   */
  update(
    id: string,
    body: VoiceCloneUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VoiceCloneUpdateResponse> {
    return this._client.patch(path`/voice_clones/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of voice clones belonging to the authenticated account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const voiceCloneData of client.voiceClones.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VoiceCloneListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VoiceCloneDataDefaultFlatPagination, VoiceCloneData> {
    return this._client.getAPIList('/voice_clones', DefaultFlatPagination<VoiceCloneData>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a voice clone. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.voiceClones.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/voice_clones/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new voice clone by uploading an audio file directly. Supported
   * formats: WAV, MP3, FLAC, OGG, M4A. For best results, provide 5–10 seconds of
   * clear speech. Maximum file size: 2MB.
   *
   * @example
   * ```ts
   * const response = await client.voiceClones.createFromUpload({
   *   audio_file: fs.createReadStream('path/to/file'),
   *   language: 'lkf-Lz1vLbBu-9uDh-9AHaOS2D-Cbf',
   *   name: 'name',
   * });
   * ```
   */
  createFromUpload(
    body: VoiceCloneCreateFromUploadParams,
    options?: RequestOptions,
  ): APIPromise<VoiceCloneCreateFromUploadResponse> {
    return this._client.post(
      '/voice_clones/from_upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Downloads the WAV audio sample that was used to create the voice clone.
   *
   * @example
   * ```ts
   * const response = await client.voiceClones.downloadSample(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  downloadSample(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/voice_clones/${id}/sample`, {
      ...options,
      headers: buildHeaders([{ Accept: 'audio/wav' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export type VoiceCloneDataDefaultFlatPagination = DefaultFlatPagination<VoiceCloneData>;

/**
 * A voice clone object.
 */
export interface VoiceCloneData {
  /**
   * Unique identifier for the voice clone.
   */
  id?: string;

  /**
   * Timestamp when the voice clone was created.
   */
  created_at?: string;

  /**
   * Gender of the voice clone.
   */
  gender?: 'male' | 'female' | 'neutral' | null;

  /**
   * Voice style description. If not explicitly set on upload, falls back to the
   * source design's prompt text.
   */
  label?: string | null;

  /**
   * ISO 639-1 language code of the voice clone.
   */
  language?: string | null;

  /**
   * Name of the voice clone.
   */
  name?: string;

  /**
   * Voice synthesis provider used for this clone.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax';

  /**
   * List of TTS model identifiers supported by this clone's provider.
   */
  provider_supported_models?: Array<string>;

  /**
   * Provider-specific voice identifier used for TTS synthesis. For Telnyx clones
   * this equals the clone ID; for Minimax it is the Minimax-assigned voice ID.
   */
  provider_voice_id?: string | null;

  /**
   * Identifies the resource type.
   */
  record_type?: 'voice_clone';

  /**
   * UUID of the source voice design. `null` for upload-based clones.
   */
  source_voice_design_id?: string | null;

  /**
   * Version of the source voice design used. `null` for upload-based clones.
   */
  source_voice_design_version?: number | null;

  /**
   * Timestamp when the voice clone was last updated.
   */
  updated_at?: string;
}

/**
 * Response envelope for a single voice clone.
 */
export interface VoiceCloneCreateResponse {
  /**
   * A voice clone object.
   */
  data?: VoiceCloneData;
}

/**
 * Response envelope for a single voice clone.
 */
export interface VoiceCloneUpdateResponse {
  /**
   * A voice clone object.
   */
  data?: VoiceCloneData;
}

/**
 * Response envelope for a single voice clone.
 */
export interface VoiceCloneCreateFromUploadResponse {
  /**
   * A voice clone object.
   */
  data?: VoiceCloneData;
}

export interface VoiceCloneCreateParams {
  /**
   * Gender of the voice clone.
   */
  gender: 'male' | 'female' | 'neutral';

  /**
   * ISO 639-1 language code for the clone (e.g. `en`, `fr`, `de`).
   */
  language: string;

  /**
   * Name for the voice clone.
   */
  name: string;

  /**
   * UUID of the source voice design to clone.
   */
  voice_design_id: string;

  /**
   * Voice synthesis provider. Case-insensitive. Defaults to `telnyx`.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax';
}

export interface VoiceCloneUpdateParams {
  /**
   * New name for the voice clone.
   */
  name: string;

  /**
   * Updated gender for the voice clone.
   */
  gender?: 'male' | 'female' | 'neutral';

  /**
   * Updated ISO 639-1 language code or `auto`.
   */
  language?: string;
}

export interface VoiceCloneListParams extends DefaultFlatPaginationParams {
  /**
   * Case-insensitive substring filter on the name field.
   */
  'filter[name]'?: string;

  /**
   * Filter by voice synthesis provider. Case-insensitive.
   */
  'filter[provider]'?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax';

  /**
   * Sort order. Prefix with `-` for descending. Defaults to `-created_at`.
   */
  sort?: 'name' | '-name' | 'created_at' | '-created_at';
}

export interface VoiceCloneCreateFromUploadParams {
  /**
   * Audio file to clone the voice from. Supported formats: WAV, MP3, FLAC, OGG, M4A.
   * For best quality, provide 5–10 seconds of clear, uninterrupted speech. Maximum
   * size: 5MB for Telnyx, 20MB for Minimax.
   */
  audio_file: Uploadable;

  /**
   * ISO 639-1 language code (e.g. `en`, `fr`) or `auto` for automatic detection.
   */
  language: string;

  /**
   * Name for the voice clone.
   */
  name: string;

  /**
   * Gender of the voice clone.
   */
  gender?: 'male' | 'female' | 'neutral';

  /**
   * Optional custom label describing the voice style. If omitted, falls back to the
   * source design's prompt text.
   */
  label?: string;

  /**
   * Voice synthesis provider. Case-insensitive. Defaults to `telnyx`.
   */
  provider?: 'telnyx' | 'minimax' | 'Telnyx' | 'Minimax';

  /**
   * Optional transcript of the audio file. Providing this improves clone quality.
   */
  ref_text?: string;
}

export declare namespace VoiceClones {
  export {
    type VoiceCloneData as VoiceCloneData,
    type VoiceCloneCreateResponse as VoiceCloneCreateResponse,
    type VoiceCloneUpdateResponse as VoiceCloneUpdateResponse,
    type VoiceCloneCreateFromUploadResponse as VoiceCloneCreateFromUploadResponse,
    type VoiceCloneDataDefaultFlatPagination as VoiceCloneDataDefaultFlatPagination,
    type VoiceCloneCreateParams as VoiceCloneCreateParams,
    type VoiceCloneUpdateParams as VoiceCloneUpdateParams,
    type VoiceCloneListParams as VoiceCloneListParams,
    type VoiceCloneCreateFromUploadParams as VoiceCloneCreateFromUploadParams,
  };
}
