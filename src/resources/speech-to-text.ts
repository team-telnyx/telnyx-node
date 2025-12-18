// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class SpeechToText extends APIResource {
  /**
   * Transcribe audio streams to text over WebSocket.
   */
  transcribe(query: SpeechToTextTranscribeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/speech-to-text/transcription', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   * Whether to receive interim transcription results.
   */
  interim_results?: boolean;

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
}

export declare namespace SpeechToText {
  export { type SpeechToTextTranscribeParams as SpeechToTextTranscribeParams };
}
