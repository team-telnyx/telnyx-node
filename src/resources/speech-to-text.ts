// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Speech to text command operations
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
   * Silence duration (in milliseconds) that triggers end-of-speech detection. When
   * set, the engine uses this value to determine when a speaker has stopped talking.
   * Not all engines support this parameter.
   */
  endpointing?: number;

  /**
   * Whether to receive interim transcription results.
   */
  interim_results?: boolean;

  /**
   * A key term to boost in the transcription. The engine will be more likely to
   * recognize this term. Can be specified multiple times for multiple terms.
   */
  keyterm?: string;

  /**
   * Comma-separated list of keywords to boost in the transcription. The engine will
   * prioritize recognition of these words.
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
   * Enable redaction of sensitive information (e.g., PCI data, SSN) from
   * transcription results. Supported values depend on the transcription engine.
   */
  redact?: string;
}

export declare namespace SpeechToText {
  export { type SpeechToTextTranscribeParams as SpeechToTextTranscribeParams };
}
