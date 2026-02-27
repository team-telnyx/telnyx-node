// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class TextToSpeech extends APIResource {
  /**
   * Retrieve a list of available voices from one or all TTS providers. When
   * `provider` is specified, returns voices for that provider only. Otherwise,
   * returns voices from all providers.
   *
   * Some providers (ElevenLabs, Resemble) require an API key to list voices.
   */
  listVoices(
    query: TextToSpeechListVoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TextToSpeechListVoicesResponse> {
    return this._client.get('/text-to-speech/voices', { query, ...options });
  }

  /**
   * Open a WebSocket connection to stream text and receive synthesized audio in real
   * time. Authentication is provided via the standard
   * `Authorization: Bearer <API_KEY>` header. Send JSON frames with text to
   * synthesize; receive JSON frames containing base64-encoded audio chunks.
   *
   * Supported providers: `aws`, `telnyx`, `azure`, `murfai`, `minimax`, `rime`,
   * `resemble`, `elevenlabs`.
   *
   * **Connection flow:**
   *
   * 1. Open WebSocket with query parameters specifying provider, voice, and model.
   * 2. Send an initial handshake message `{"text": " "}` (single space) with
   *    optional `voice_settings` to initialize the session.
   * 3. Send text messages as `{"text": "Hello world"}`.
   * 4. Receive audio chunks as JSON frames with base64-encoded audio.
   * 5. A final frame with `isFinal: true` indicates the end of audio for the current
   *    text.
   *
   * To interrupt and restart synthesis mid-stream, send `{"force": true}` — the
   * current worker is stopped and a new one is started.
   */
  stream(
    query: TextToSpeechStreamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/text-to-speech/speech', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * List of available voices.
 */
export interface TextToSpeechListVoicesResponse {
  voices?: Array<TextToSpeechListVoicesResponse.Voice>;
}

export namespace TextToSpeechListVoicesResponse {
  /**
   * A voice available for text-to-speech synthesis.
   */
  export interface Voice {
    /**
     * Voice gender.
     */
    gender?: string;

    /**
     * Language code.
     */
    language?: string;

    /**
     * Voice name.
     */
    name?: string;

    /**
     * The TTS provider.
     */
    provider?: string;

    /**
     * Voice identifier.
     */
    voice_id?: string;
  }
}

export interface TextToSpeechListVoicesParams {
  /**
   * API key for providers that require one to list voices (e.g. ElevenLabs).
   */
  api_key?: string;

  /**
   * Filter voices by provider. If omitted, voices from all providers are returned.
   */
  provider?: 'aws' | 'telnyx' | 'azure' | 'elevenlabs' | 'minimax' | 'rime' | 'resemble';
}

export interface TextToSpeechStreamParams {
  /**
   * Audio output format override. Supported for Telnyx `Natural`/`NaturalHD` models
   * only. Accepted values: `pcm`, `wav`.
   */
  audio_format?: 'pcm' | 'wav';

  /**
   * When `true`, bypass the audio cache and generate fresh audio.
   */
  disable_cache?: boolean;

  /**
   * Model identifier for the chosen provider. Examples: `Natural`, `NaturalHD`
   * (Telnyx); `Polly.Generative` (AWS).
   */
  model_id?: string;

  /**
   * TTS provider. Defaults to `telnyx` if not specified. Ignored when `voice` is
   * provided.
   */
  provider?: 'aws' | 'telnyx' | 'azure' | 'elevenlabs' | 'minimax' | 'murfai' | 'rime' | 'resemble';

  /**
   * Client-provided socket identifier for tracking. If not provided, one is
   * generated server-side.
   */
  socket_id?: string;

  /**
   * Voice identifier in the format `provider.model_id.voice_id` or
   * `provider.voice_id` (e.g. `telnyx.NaturalHD.Telnyx_Alloy` or
   * `azure.en-US-AvaMultilingualNeural`). When provided, the `provider`, `model_id`,
   * and `voice_id` are extracted automatically. Takes precedence over individual
   * `provider`/`model_id`/`voice_id` parameters.
   */
  voice?: string;

  /**
   * Voice identifier for the chosen provider.
   */
  voice_id?: string;
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
    type TextToSpeechStreamParams as TextToSpeechStreamParams,
  };
}
