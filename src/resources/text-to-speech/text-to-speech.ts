// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

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
   * model, and voice in a single string (e.g. `telnyx.NaturalHD.Alloy` or
   * `Telnyx.Ultra.<voice_id>`). Alternatively, specify `provider` explicitly along
   * with provider-specific parameters.
   *
   * Supported providers: `aws`, `telnyx`, `azure`, `elevenlabs`, `minimax`, `rime`,
   * `resemble`, `xai`.
   *
   * The Telnyx `Ultra` model supports 44 languages with emotion control, speed
   * adjustment, and volume control. Use the `telnyx` provider-specific parameters to
   * configure these features.
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

/**
 * Client-to-server frame containing text to synthesize.
 */
export interface StreamClientEvent {
  /**
   * Text to convert to speech. Send `" "` (single space) as an initial handshake
   * with optional `voice_settings`. Subsequent messages contain the actual text to
   * synthesize.
   */
  text: string;

  /**
   * When `true`, stops the current synthesis worker and starts a new one. Used to
   * interrupt speech mid-stream and begin synthesizing new text.
   */
  force?: boolean;

  /**
   * Provider-specific voice settings sent with the initial handshake. Contents vary
   * by provider — e.g. `{"speed": 1.2}` for Minimax, `{"voice_speed": 1.5}` for
   * Telnyx.
   */
  voice_settings?: { [key: string]: unknown };
}

/**
 * Union of all server-to-client WebSocket events for TTS streaming.
 */
export type StreamServerEvent =
  | StreamServerEvent.AudioChunkFrame
  | StreamServerEvent.FinalFrameEvent
  | StreamServerEvent.ErrorFrame;

export namespace StreamServerEvent {
  /**
   * Server-to-client frame containing a base64-encoded audio chunk.
   */
  export interface AudioChunkFrame {
    /**
     * Base64-encoded audio data. May be `null` for providers that use
     * `drop_concatenated_audio` mode (Telnyx Natural/NaturalHD, Rime, Minimax, MurfAI,
     * Resemble) — in that case only streamed chunks carry audio.
     */
    audio?: string | null;

    /**
     * Whether this audio was served from cache.
     */
    cached?: boolean;

    /**
     * Always `false` for audio chunk frames.
     */
    isFinal?: boolean;

    /**
     * The text segment that this audio chunk corresponds to.
     */
    text?: string | null;

    /**
     * Milliseconds from the start-of-speech request to the first audio frame. Only
     * present on the first audio chunk of a synthesis request.
     */
    timeToFirstAudioFrameMs?: number;

    /**
     * Frame type identifier.
     */
    type?: 'audio_chunk';
  }

  /**
   * Server-to-client frame indicating synthesis is complete for the current text.
   */
  export interface FinalFrameEvent {
    /**
     * Always `null` for the final frame.
     */
    audio?: null;

    /**
     * Always `true`.
     */
    isFinal?: true;

    /**
     * Empty string.
     */
    text?: string;

    /**
     * Present if this was the first response frame.
     */
    timeToFirstAudioFrameMs?: number;

    /**
     * Frame type identifier.
     */
    type?: 'final';
  }

  /**
   * Server-to-client frame indicating an error during synthesis. The connection is
   * closed shortly after.
   */
  export interface ErrorFrame {
    /**
     * Error message describing what went wrong.
     */
    error?: string;

    /**
     * Frame type identifier.
     */
    type?: 'error';
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
  provider?: 'aws' | 'telnyx' | 'azure' | 'elevenlabs' | 'minimax' | 'rime' | 'resemble' | 'xai';

  /**
   * Resemble AI provider-specific parameters.
   */
  resemble?: TextToSpeechGenerateParams.Resemble;

  /**
   * Rime provider-specific parameters.
   */
  rime?: TextToSpeechGenerateParams.Rime;

  /**
   * Telnyx provider-specific parameters. Use `voice_speed` and `temperature` for
   * `Natural` and `NaturalHD` models. For the `Ultra` model, use `voice_speed`,
   * `volume`, and `emotion`.
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
   * `Telnyx.Ultra.<voice_id>`, `azure.en-US-AvaMultilingualNeural`,
   * `aws.Polly.Generative.Lucia`. When provided, `provider`, `model_id`, and
   * `voice_id` are extracted automatically and take precedence over individual
   * parameters.
   */
  voice?: string;

  /**
   * Provider-specific voice settings. Contents vary by provider — see
   * provider-specific parameter objects below.
   */
  voice_settings?: { [key: string]: unknown };

  /**
   * xAI provider-specific parameters.
   */
  xai?: TextToSpeechGenerateParams.Xai;
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
   * Telnyx provider-specific parameters. Use `voice_speed` and `temperature` for
   * `Natural` and `NaturalHD` models. For the `Ultra` model, use `voice_speed`,
   * `volume`, and `emotion`.
   */
  export interface Telnyx {
    /**
     * Emotion control for the Ultra model. Adjusts the emotional tone of the
     * synthesized speech.
     */
    emotion?: 'neutral' | 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised';

    /**
     * Audio response format.
     */
    response_format?: string;

    /**
     * Audio sampling rate in Hz.
     */
    sampling_rate?: number;

    /**
     * Sampling temperature. Applies to `Natural` and `NaturalHD` models only.
     */
    temperature?: number;

    /**
     * Voice speed multiplier. Applies to all models. Range: 0.5 to 2.0.
     */
    voice_speed?: number;

    /**
     * Volume level for the Ultra model. Range: 0.0 to 2.0.
     */
    volume?: number;
  }

  /**
   * xAI provider-specific parameters.
   */
  export interface Xai {
    /**
     * xAI voice identifier.
     */
    voice_id: 'eve' | 'ara' | 'rex' | 'sal' | 'leo';

    /**
     * Language code, or `auto` to detect.
     */
    language?: string;

    /**
     * Audio output format.
     */
    output_format?: 'mp3' | 'wav' | 'pcm' | 'mulaw' | 'alaw';

    /**
     * Audio sample rate in Hz.
     */
    sample_rate?: 8000 | 16000 | 22050 | 24000 | 44100 | 48000;
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
  provider?: 'aws' | 'telnyx' | 'azure' | 'elevenlabs' | 'minimax' | 'rime' | 'resemble' | 'xai';
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechGenerateResponse as TextToSpeechGenerateResponse,
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type StreamClientEvent as StreamClientEvent,
    type StreamServerEvent as StreamServerEvent,
    type TextToSpeechGenerateParams as TextToSpeechGenerateParams,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
  };
}
