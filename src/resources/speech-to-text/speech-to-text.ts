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
   * - `file_based` — file-based transcription via `/ai/audio/transcriptions`.
   * - `in_call` — live call transcription via Call Control `transcription_start`.
   * - `ai_assistant` — STT configured on a Call Control AI Assistant via
   *   voice-assistant `TranscriptionConfig` (covers both live-streaming and
   *   non-streaming/batch models).
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
   * A (provider, model) tuple along with the service surfaces it supports. Each
   * entry in `service_types` describes one surface and the languages accepted on it.
   */
  export interface Data {
    /**
     * Provider-scoped model name.
     */
    model: string;

    /**
     * STT provider name.
     */
    provider: string;

    /**
     * Service surfaces this (provider, model) supports. When the request filters by
     * `service_type`, only the matching nested entry is returned for each matching
     * model.
     */
    service_types: Array<Data.ServiceType>;
  }

  export namespace Data {
    /**
     * A supported service surface for a given (provider, model), along with the
     * language codes accepted on that surface. Language support can differ per surface
     * — for example, a model may accept a narrower language set for streaming than for
     * file transcription.
     */
    export interface ServiceType {
      /**
       * Languages accepted on this service surface, in the provider's native code
       * format. `auto` indicates the provider performs language detection.
       */
      languages: Array<string>;

      /**
       * Service surface a model is available on. `ai_assistant` is the STT surface
       * configured via Call Control voice-assistant transcription; it covers both
       * live-streaming and non-streaming/batch models (matching the
       * `TranscriptionConfig.model` enum on `call-control` voice assistants).
       */
      type: 'streaming' | 'file_based' | 'in_call' | 'ai_assistant';
    }
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
   * Filter to entries that support the given service type. For backward
   * compatibility with the values that briefly shipped before the product-aligned
   * rename, the legacy aliases `file_transcription`, `in_call_transcription`, and
   * `ai_assistant_transcription` are silently accepted and normalized to
   * `file_based`, `in_call`, and `ai_assistant` respectively. The response always
   * emits the canonical (post-rename) values.
   */
  service_type?: 'streaming' | 'file_based' | 'in_call' | 'ai_assistant';
}

export declare namespace SpeechToText {
  export {
    type SpeechToTextListProvidersResponse as SpeechToTextListProvidersResponse,
    type TranscribeClientEvent as TranscribeClientEvent,
    type TranscribeServerEvent as TranscribeServerEvent,
    type SpeechToTextListProvidersParams as SpeechToTextListProvidersParams,
  };
}
