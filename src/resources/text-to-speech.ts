// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Text to speech streaming command operations
 */
export class TextToSpeech extends APIResource {
  /**
   * Generate synthesized speech audio from text input. Returns audio in the
   * requested format (binary audio stream, base64-encoded JSON, or an audio URL for
   * later retrieval).
   *
   * Authentication is provided via the standard `Authorization: Bearer <API_KEY>`
   * header.
   *
   * The `voice` parameter provides a convenient shorthand to specify provider,
   * model, and voice in a single string (e.g. `telnyx.NaturalHD.Alloy`).
   * Alternatively, specify `provider` explicitly along with provider-specific
   * parameters.
   *
   * Supported providers: `aws`, `telnyx`, `azure`, `elevenlabs`, `minimax`, `rime`,
   * `resemble`.
   */
  generate(
    body: TextToSpeechGenerateParams,
    options?: RequestOptions,
  ): APIPromise<TextToSpeechGenerateResponse> {
    return this._client.post('/text-to-speech/speech', { body, ...options });
  }

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
 * Response when `output_type` is `base64_output`.
 */
export interface TextToSpeechGenerateResponse {
  /**
   * Base64-encoded audio data.
   */
  base64_audio?: string;
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

export interface TextToSpeechGenerateParams {
  /**
   * AWS Polly provider-specific parameters.
   */
  aws?: TextToSpeechGenerateParams.Aws;

  /**
   * Azure Cognitive Services provider-specific parameters.
   */
  azure?: TextToSpeechGenerateParams.Azure;

  /**
   * When `true`, bypass the audio cache and generate fresh audio.
   */
  disable_cache?: boolean;

  /**
   * ElevenLabs provider-specific parameters.
   */
  elevenlabs?: TextToSpeechGenerateParams.Elevenlabs;

  /**
   * Language code (e.g. `en-US`). Usage varies by provider.
   */
  language?: string;

  /**
   * Minimax provider-specific parameters.
   */
  minimax?: TextToSpeechGenerateParams.Minimax;

  /**
   * Determines the response format. `binary_output` returns raw audio bytes,
   * `base64_output` returns base64-encoded audio in JSON.
   */
  output_type?: 'binary_output' | 'base64_output';

  /**
   * TTS provider. Required unless `voice` is provided.
   */
  provider?: 'aws' | 'telnyx' | 'azure' | 'elevenlabs' | 'minimax' | 'rime' | 'resemble';

  /**
   * Resemble AI provider-specific parameters.
   */
  resemble?: TextToSpeechGenerateParams.Resemble;

  /**
   * Rime provider-specific parameters.
   */
  rime?: TextToSpeechGenerateParams.Rime;

  /**
   * Telnyx provider-specific parameters.
   */
  telnyx?: TextToSpeechGenerateParams.Telnyx;

  /**
   * The text to convert to speech.
   */
  text?: string;

  /**
   * Text type. Use `ssml` for SSML-formatted input (supported by AWS and Azure).
   */
  text_type?: 'text' | 'ssml';

  /**
   * Voice identifier in the format `provider.model_id.voice_id` or
   * `provider.voice_id`. Examples: `telnyx.NaturalHD.Alloy`,
   * `azure.en-US-AvaMultilingualNeural`, `aws.Polly.Generative.Lucia`. When
   * provided, `provider`, `model_id`, and `voice_id` are extracted automatically and
   * take precedence over individual parameters.
   */
  voice?: string;

  /**
   * Provider-specific voice settings. Contents vary by provider — see
   * provider-specific parameter objects below.
   */
  voice_settings?: { [key: string]: unknown };
}

export namespace TextToSpeechGenerateParams {
  /**
   * AWS Polly provider-specific parameters.
   */
  export interface Aws {
    /**
     * Language code (e.g. `en-US`, `es-ES`).
     */
    language_code?: string;

    /**
     * List of lexicon names to apply.
     */
    lexicon_names?: Array<string>;

    /**
     * Audio output format.
     */
    output_format?: string;

    /**
     * Audio sample rate.
     */
    sample_rate?: string;

    /**
     * Input text type.
     */
    text_type?: 'text' | 'ssml';
  }

  /**
   * Azure Cognitive Services provider-specific parameters.
   */
  export interface Azure {
    /**
     * Custom Azure API key. If not provided, the default Telnyx key is used.
     */
    api_key?: string;

    /**
     * Custom Azure deployment ID.
     */
    deployment_id?: string;

    /**
     * Azure audio effect to apply.
     */
    effect?: string;

    /**
     * Voice gender preference.
     */
    gender?: string;

    /**
     * Language code (e.g. `en-US`).
     */
    language_code?: string;

    /**
     * Azure audio output format.
     */
    output_format?: string;

    /**
     * Azure region (e.g. `eastus`, `westeurope`).
     */
    region?: string;

    /**
     * Input text type. Use `ssml` for SSML-formatted input.
     */
    text_type?: 'text' | 'ssml';
  }

  /**
   * ElevenLabs provider-specific parameters.
   */
  export interface Elevenlabs {
    /**
     * Custom ElevenLabs API key. If not provided, the default Telnyx key is used.
     */
    api_key?: string;

    /**
     * Language code.
     */
    language_code?: string;

    /**
     * ElevenLabs voice settings (stability, similarity_boost, etc.).
     */
    voice_settings?: { [key: string]: unknown };
  }

  /**
   * Minimax provider-specific parameters.
   */
  export interface Minimax {
    /**
     * Language code to boost pronunciation for.
     */
    language_boost?: string;

    /**
     * Pitch adjustment.
     */
    pitch?: number;

    /**
     * Audio output format.
     */
    response_format?: string;

    /**
     * Speech speed multiplier.
     */
    speed?: number;

    /**
     * Volume level.
     */
    vol?: number;
  }

  /**
   * Resemble AI provider-specific parameters.
   */
  export interface Resemble {
    /**
     * Custom Resemble API key.
     */
    api_key?: string;

    /**
     * Audio output format.
     */
    format?: string;

    /**
     * Synthesis precision.
     */
    precision?: string;

    /**
     * Audio sample rate.
     */
    sample_rate?: string;
  }

  /**
   * Rime provider-specific parameters.
   */
  export interface Rime {
    /**
     * Audio output format.
     */
    response_format?: string;

    /**
     * Audio sampling rate in Hz.
     */
    sampling_rate?: number;

    /**
     * Voice speed multiplier.
     */
    voice_speed?: number;
  }

  /**
   * Telnyx provider-specific parameters.
   */
  export interface Telnyx {
    /**
     * Audio response format.
     */
    response_format?: string;

    /**
     * Audio sampling rate in Hz.
     */
    sampling_rate?: number;

    /**
     * Sampling temperature.
     */
    temperature?: number;

    /**
     * Voice speed multiplier.
     */
    voice_speed?: number;
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
    type TextToSpeechGenerateResponse as TextToSpeechGenerateResponse,
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechGenerateParams as TextToSpeechGenerateParams,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
    type TextToSpeechStreamParams as TextToSpeechStreamParams,
  };
}
