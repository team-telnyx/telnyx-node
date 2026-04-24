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

/**
 * Response fields vary by model. `distil-whisper/distil-large-v2` returns `text`,
 * `duration`, and `segments` in `verbose_json` mode.
 * `openai/whisper-large-v3-turbo` returns `text` only. `deepgram/nova-3` returns
 * `text` and, depending on `model_config`, may include `words` with per-word
 * timestamps and speaker labels.
 */
export interface AudioTranscribeResponse {
  /**
   * The transcribed text for the audio file.
   */
  text: string;

  /**
   * The duration of the audio file in seconds. Returned by
   * `distil-whisper/distil-large-v2` and `deepgram/nova-3` when `response_format` is
   * `verbose_json`. Not returned by `openai/whisper-large-v3-turbo`.
   */
  duration?: number;

  /**
   * Segments of the transcribed text and their corresponding details. Returned by
   * `distil-whisper/distil-large-v2` when `response_format` is `verbose_json`. Not
   * returned by `openai/whisper-large-v3-turbo`.
   */
  segments?: Array<AudioTranscribeResponse.Segment>;

  /**
   * Word-level timestamps and optional speaker labels. Only returned by
   * `deepgram/nova-3` when word-level output is enabled via `model_config`.
   */
  words?: Array<AudioTranscribeResponse.Word>;
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

  /**
   * Word-level timing detail. Only present when using `deepgram/nova-3` with
   * `model_config` options that enable word timestamps.
   */
  export interface Word {
    /**
     * End time of the word in seconds.
     */
    end: number;

    /**
     * Start time of the word in seconds.
     */
    start: number;

    /**
     * The transcribed word.
     */
    word: string;

    /**
     * Confidence score for the word (0.0 to 1.0).
     */
    confidence?: number;

    /**
     * Speaker index. Only present when diarization is enabled via `model_config`.
     */
    speaker?: number;
  }
}

export interface AudioTranscribeParams {
  /**
   * ID of the model to use. `distil-whisper/distil-large-v2` is lower latency but
   * English-only. `openai/whisper-large-v3-turbo` is multi-lingual but slightly
   * higher latency. `deepgram/nova-3` supports English variants (en, en-US, en-GB,
   * en-AU, en-NZ, en-IN) and only accepts mp3/wav files.
   */
  model: 'distil-whisper/distil-large-v2' | 'openai/whisper-large-v3-turbo' | 'deepgram/nova-3';

  /**
   * The audio file object to transcribe, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm. File uploads are limited to 100 MB. Cannot
   * be used together with `file_url`. Note: `deepgram/nova-3` only supports mp3 and
   * wav formats.
   */
  file?: Uploadable;

  /**
   * Link to audio file in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a,
   * ogg, wav, or webm. Support for hosted files is limited to 100MB. Cannot be used
   * together with `file`. Note: `deepgram/nova-3` only supports mp3 and wav formats.
   */
  file_url?: string;

  /**
   * The language of the audio to be transcribed. For `deepgram/nova-3`, only English
   * variants are supported: `en`, `en-US`, `en-GB`, `en-AU`, `en-NZ`, `en-IN`. For
   * `openai/whisper-large-v3-turbo`, supports multiple languages.
   * `distil-whisper/distil-large-v2` does not support language parameter.
   */
  language?: string;

  /**
   * Additional model-specific configuration parameters. Only allowed with
   * `deepgram/nova-3` model. Can include Deepgram-specific options such as
   * `smart_format`, `punctuate`, `diarize`, `utterance`, `numerals`, and `language`.
   * If `language` is provided both as a top-level parameter and in `model_config`,
   * the top-level parameter takes precedence.
   */
  model_config?: { [key: string]: unknown };

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
