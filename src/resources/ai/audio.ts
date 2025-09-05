// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Audio extends APIResource {
  /**
   * Transcribe speech to text. This endpoint is consistent with the
   * [OpenAI Transcription API](https://platform.openai.com/docs/api-reference/audio/createTranscription)
   * and may be used with the OpenAI JS or Python SDK.
   *
   * @example
   * ```ts
   * const response = await client.ai.audio.transcribe({
   *   model: 'distil-whisper/distil-large-v2',
   * });
   * ```
   */
  transcribe(body: AudioTranscribeParams, options?: RequestOptions): APIPromise<AudioTranscribeResponse> {
    return this._client.post(
      '/ai/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface AudioTranscribeResponse {
  /**
   * The transcribed text for the audio file.
   */
  text: string;

  /**
   * The duration of the audio file in seconds. This is only included if
   * `response_format` is set to `verbose_json`.
   */
  duration?: number;

  /**
   * Segments of the transcribed text and their corresponding details. This is only
   * included if `response_format` is set to `verbose_json`.
   */
  segments?: Array<AudioTranscribeResponse.Segment>;
}

export namespace AudioTranscribeResponse {
  export interface Segment {
    /**
     * Unique identifier of the segment.
     */
    id: number;

    /**
     * End time of the segment in seconds.
     */
    end: number;

    /**
     * Start time of the segment in seconds.
     */
    start: number;

    /**
     * Text content of the segment.
     */
    text: string;
  }
}

export interface AudioTranscribeParams {
  /**
   * ID of the model to use. `distil-whisper/distil-large-v2` is lower latency but
   * English-only. `openai/whisper-large-v3-turbo` is multi-lingual but slightly
   * higher latency.
   */
  model: 'distil-whisper/distil-large-v2' | 'openai/whisper-large-v3-turbo';

  /**
   * The audio file object to transcribe, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm. File uploads are limited to 100 MB. Cannot
   * be used together with `file_url`
   */
  file?: Uploadable;

  /**
   * Link to audio file in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a,
   * ogg, wav, or webm. Support for hosted files is limited to 100MB. Cannot be used
   * together with `file`
   */
  file_url?: string;

  /**
   * The format of the transcript output. Use `verbose_json` to take advantage of
   * timestamps.
   */
  response_format?: 'json' | 'verbose_json';

  /**
   * The timestamp granularities to populate for this transcription.
   * `response_format` must be set verbose_json to use timestamp granularities.
   * Currently `segment` is supported.
   */
  'timestamp_granularities[]'?: 'segment';
}

export declare namespace Audio {
  export {
    type AudioTranscribeResponse as AudioTranscribeResponse,
    type AudioTranscribeParams as AudioTranscribeParams,
  };
}
