// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

/**
 * Speech to text streaming operations via WebSocket
 */
export class SpeechToText extends APIResource {}

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
