// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Speech to text streaming operations via WebSocket
 */
export class SpeechToText extends APIResource {
  /**
   * Open a WebSocket connection to stream audio and receive transcriptions in
   * real-time. Authentication is provided via the standard
   * `Authorization: Bearer <API_KEY>` header.
   *
   * Supported engines: `Azure`, `Deepgram`, `Google`, `Telnyx`.
   *
   * **Connection flow:**
   *
   * 1. Open WebSocket with query parameters specifying engine, input format, and
   *    language.
   * 2. Send binary audio frames (mp3/wav format).
   * 3. Receive JSON transcript frames with `transcript`, `is_final`, and
   *    `confidence` fields.
   * 4. Close connection when done.
   */
  transcribe(query: SpeechToTextTranscribeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/speech-to-text/transcription', {
      query,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

/**
 * Parameters for the transcribe REST endpoint.
 */
export interface SpeechToTextTranscribeParams {
  /**
   * The format of input audio stream.
   */
  input_format: 'mp3' | 'wav';

  /**
   * The transcription engine to use for processing the audio stream.
   */
  transcription_engine: 'Azure' | 'Deepgram' | 'Google' | 'Telnyx';

  /**
   * Silence duration (in milliseconds) that triggers end-of-speech detection.
   */
  endpointing?: number;

  /**
   * Whether to receive interim transcription results.
   */
  interim_results?: boolean;

  /**
   * A key term to boost in the transcription.
   */
  keyterm?: string;

  /**
   * Comma-separated list of keywords to boost in the transcription.
   */
  keywords?: string;

  /**
   * The language spoken in the audio stream.
   */
  language?: string;

  /**
   * The specific model to use within the selected transcription engine.
   */
  model?:
    | 'fast'
    | 'deepgram/nova-2'
    | 'deepgram/nova-3'
    | 'latest_long'
    | 'latest_short'
    | 'command_and_search'
    | 'phone_call'
    | 'video'
    | 'default'
    | 'medical_conversation'
    | 'medical_dictation'
    | 'openai/whisper-tiny'
    | 'openai/whisper-large-v3-turbo';

  /**
   * Enable redaction of sensitive information from transcription results.
   */
  redact?: string;
}

/**
 * Parameters for establishing a speech-to-text WebSocket connection.
 */
export interface SpeechToTextStreamParams {
  /**
   * The transcription engine to use for processing the audio stream.
   */
  transcription_engine: 'Azure' | 'Deepgram' | 'Google' | 'Telnyx';

  /**
   * The format of the input audio stream.
   */
  input_format?: 'mp3' | 'wav' | 'raw';

  /**
   * The language code for transcription (e.g., 'en-US', 'es-ES').
   */
  language?: string;

  /**
   * Whether to return interim (partial) transcription results.
   */
  interim_results?: boolean;

  /**
   * The model to use for transcription (engine-specific).
   */
  model?: string;
}

/**
 * Binary audio data sent from client to server.
 * Send raw audio bytes in mp3 or wav format.
 */
export type SttClientEvent = ArrayBuffer | Buffer | Uint8Array;

/**
 * Union of all server-to-client WebSocket events for STT streaming.
 */
export type SttServerEvent = SttServerEvent.TranscriptFrame | SttServerEvent.ErrorFrame;

export namespace SttServerEvent {
  /**
   * Server-to-client frame containing a transcription result.
   */
  export interface TranscriptFrame {
    /**
     * Frame type identifier.
     */
    type: 'transcript';

    /**
     * The transcribed text from the audio.
     */
    transcript: string;

    /**
     * Whether this is a final transcription result.
     * When `false`, this is an interim result that may be refined.
     */
    is_final?: boolean;

    /**
     * Confidence score of the transcription, ranging from 0 to 1.
     */
    confidence?: number;
  }

  /**
   * Server-to-client frame indicating an error during transcription.
   */
  export interface ErrorFrame {
    /**
     * Frame type identifier.
     */
    type: 'error';

    /**
     * Error message describing what went wrong.
     */
    error: string;
  }
}

/**
 * Transcript frame with transcription result.
 */
export type TranscriptFrame = SttServerEvent.TranscriptFrame;

/**
 * Error frame indicating transcription failure.
 */
export type SttErrorFrame = SttServerEvent.ErrorFrame;

export declare namespace SpeechToText {
  export { type SpeechToTextTranscribeParams as SpeechToTextTranscribeParams };
}
