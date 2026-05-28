// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';

/**
 * Discover available speech-to-text providers, models, and supported languages.
 */
export class SpeechToText extends APIResource {
  /**
   * Retrieve the canonical list of supported speech-to-text providers, models,
   * accepted language codes, and the service types each model supports.
   *
   * Service types:
   *
   * - `streaming` — standalone WebSocket transcription via
   *   `/speech-to-text/transcription`.
   * - `file_transcription` — file-based transcription via
   *   `/ai/audio/transcriptions`.
   * - `in_call_transcription` — live call transcription via Call Control
   *   `transcription_start`.
   *
   * Use this endpoint to discover which (provider, model) combinations are available
   * for the surface you need, and which language codes each accepts. `auto` in a
   * `languages` array indicates the provider performs language detection.
   */
  listProviders(
    query: SpeechToTextListProvidersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpeechToTextListProvidersResponse> {
    return this._client.get('/speech-to-text/providers', {
      query,
      defaultBaseURL: 'https://api.telnyx.com/v2',
      ...options,
    });
  }
}

/**
 * List of supported STT providers and models.
 */
export interface SpeechToTextListProvidersResponse {
  data: Array<SpeechToTextListProvidersResponse.Data>;

  meta: SpeechToTextListProvidersResponse.Meta;
}

export namespace SpeechToTextListProvidersResponse {
  /**
   * A (provider, model) tuple along with its supported service types and languages.
   */
  export interface Data {
    /**
     * Languages this (provider, model) accepts, in the provider's native code format.
     * `auto` indicates the provider performs language detection.
     */
    languages: Array<string>;

    /**
     * Provider-scoped model name.
     */
    model: string;

    /**
     * STT provider name.
     */
    provider: string;

    /**
     * Service surfaces this (provider, model) supports.
     */
    service_types: Array<'streaming' | 'file_transcription' | 'in_call_transcription'>;
  }

  export interface Meta {
    /**
     * Total number of entries returned.
     */
    total: number;
  }
}

/**
 * Binary audio data in mp3 or wav format.
 */
export type TranscribeClientEvent = Uploadable;

/**
 * Union of all server-to-client WebSocket events for STT streaming.
 */
export type TranscribeServerEvent =
  | TranscribeServerEvent.TranscriptFrame
  | TranscribeServerEvent.SttErrorFrame;

export namespace TranscribeServerEvent {
  /**
   * Server-to-client frame containing a transcription result.
   */
  export interface TranscriptFrame {
    /**
     * The transcribed text from the audio.
     */
    transcript: string;

    /**
     * Frame type identifier.
     */
    type: 'transcript';

    /**
     * Confidence score of the transcription, ranging from 0 to 1.
     */
    confidence?: number;

    /**
     * Whether this is a final transcription result. When `false`, this is an interim
     * result that may be refined.
     */
    is_final?: boolean;
  }

  /**
   * Server-to-client frame indicating an error during transcription. The connection
   * may be closed shortly after.
   */
  export interface SttErrorFrame {
    /**
     * Error message describing what went wrong.
     */
    error: string;

    /**
     * Frame type identifier.
     */
    type: 'error';
  }
}

export interface SpeechToTextListProvidersParams {
  /**
   * Filter to entries for a specific STT provider. The enum mirrors the providers
   * advertised across the speech-to-text spec (including `google` and `telnyx`,
   * which are accepted as WebSocket transcription engines). A provider that has no
   * models currently registered for any service type will return an empty `data`
   * array rather than an error.
   */
  provider?:
    | 'deepgram'
    | 'speechmatics'
    | 'assemblyai'
    | 'xai'
    | 'soniox'
    | 'azure'
    | 'openai'
    | 'google'
    | 'telnyx';

  /**
   * Filter to entries that support the given service type.
   */
  service_type?: 'streaming' | 'file_transcription' | 'in_call_transcription';
}

export declare namespace SpeechToText {
  export {
    type SpeechToTextListProvidersResponse as SpeechToTextListProvidersResponse,
    type TranscribeClientEvent as TranscribeClientEvent,
    type TranscribeServerEvent as TranscribeServerEvent,
    type SpeechToTextListProvidersParams as SpeechToTextListProvidersParams,
  };
}
