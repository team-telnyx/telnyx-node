// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class TextToSpeech extends APIResource {
  /**
   * Converts the provided text to speech using the specified voice and returns audio
   * data
   */
  generateSpeech(body: TextToSpeechGenerateSpeechParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/text-to-speech/speech', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/mpeg' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns a list of voices that can be used with the text to speech commands.
   */
  listVoices(
    query: TextToSpeechListVoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TextToSpeechListVoicesResponse> {
    return this._client.get('/text-to-speech/voices', { query, ...options });
  }
}

export interface TextToSpeechListVoicesResponse {
  voices?: Array<TextToSpeechListVoicesResponse.Voice>;
}

export namespace TextToSpeechListVoicesResponse {
  export interface Voice {
    id?: string;

    accent?: string;

    age?: string;

    gender?: string;

    label?: string;

    language?: string;

    name?: string;

    provider?: string;
  }
}

export interface TextToSpeechGenerateSpeechParams {
  /**
   * The text to convert to speech
   */
  text: string;

  /**
   * The voice ID in the format Provider.ModelId.VoiceId.
   *
   * Examples:
   *
   * - AWS.Polly.Joanna-Neural
   * - Azure.en-US-AvaMultilingualNeural
   * - ElevenLabs.eleven_multilingual_v2.Rachel
   * - Telnyx.KokoroTTS.af
   *
   * Use the `GET /text-to-speech/voices` endpoint to get a complete list of
   * available voices.
   */
  voice: string;
}

export interface TextToSpeechListVoicesParams {
  /**
   * Reference to your ElevenLabs API key stored in the Telnyx Portal
   */
  elevenlabs_api_key_ref?: string;

  /**
   * Filter voices by provider
   */
  provider?: 'aws' | 'azure' | 'elevenlabs' | 'telnyx';
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechGenerateSpeechParams as TextToSpeechGenerateSpeechParams,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
  };
}
