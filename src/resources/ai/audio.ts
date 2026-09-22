// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
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
 * Word-level timing detail. Only present when using a `deepgram/*` model with
 * `model_config` options that enable word timestamps.
 */
export interface AudioTranscriptionResponseWord {
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
   * The transcribed word with punctuation and capitalisation applied. Only present
   * when `punctuate` or `smart_format` is enabled via `model_config`.
   */
  punctuated_word?: string;

  /**
   * Speaker index. Only present when diarization is enabled via `model_config`.
   */
  speaker?: number;

  /**
   * Confidence score for the speaker assignment (0.0 to 1.0). Only present when
   * diarization is enabled via `model_config`.
   */
  speaker_confidence?: number;
}

/**
 * Response fields vary by model. `distil-whisper/distil-large-v2` returns `text`,
 * `duration`, and `segments` in `verbose_json` mode.
 * `openai/whisper-large-v3-turbo` returns `text` only. The `deepgram/*` models
 * return `text` and, depending on `model_config`, may include `words` with
 * per-word timestamps and speaker labels. The Parakeet models
 * (`nvidia/parakeet-v3`, `omi-health/omi-med-stt-v1`) return `text` only.
 */
export interface AudioTranscribeResponse {
  /**
   * The transcribed text for the audio file.
   */
  text: string;

  /**
   * The duration of the audio file in seconds. Returned by
   * `distil-whisper/distil-large-v2` and the `deepgram/*` models when
   * `response_format` is `verbose_json`. Not returned by
   * `openai/whisper-large-v3-turbo`.
   */
  duration?: number;

  /**
   * Segments of the transcribed text and their corresponding details. Returned by
   * `distil-whisper/distil-large-v2` and the `deepgram/*` models when
   * `response_format` is `verbose_json`; Deepgram segments also carry nested `words`
   * and `speakers`. Not returned by `openai/whisper-large-v3-turbo`.
   */
  segments?: Array<AudioTranscribeResponse.Segment>;

  /**
   * Word-level timestamps and optional speaker labels. Only returned by the
   * `deepgram/*` models when word-level output is enabled via `model_config`.
   */
  words?: Array<AudioTranscriptionResponseWord>;
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

    /**
     * Speaker indices heard in this segment. Returned by the `deepgram/*` models when
     * `diarize` is enabled via `model_config`.
     */
    speakers?: Array<number>;

    /**
     * Word-level timing detail for this segment. Returned by the `deepgram/*` models
     * when word-level output is enabled via `model_config`.
     */
    words?: Array<AudioAPI.AudioTranscriptionResponseWord>;
  }
}

export interface AudioTranscribeParams {
  /**
   * ID of the model to use. `distil-whisper/distil-large-v2` is lower latency but
   * English-only. `openai/whisper-large-v3-turbo` is multi-lingual but slightly
   * higher latency. The `deepgram/*` models only accept mp3/wav files:
   * `deepgram/nova-3` covers ~49 languages plus `multi` and `deepgram/nova-2` covers
   * ~33, while the `-medical` variants are tuned for clinical vocabulary and accept
   * English only (`en` and its regional variants, e.g. `en-US`, `en-GB`).
   * `nvidia/parakeet-v3` is multilingual with automatic language detection;
   * `omi-health/omi-med-stt-v1` is a medical model, English only.
   */
  model:
    | 'distil-whisper/distil-large-v2'
    | 'openai/whisper-large-v3-turbo'
    | 'deepgram/nova-2'
    | 'deepgram/nova-2-medical'
    | 'deepgram/nova-3'
    | 'deepgram/nova-3-medical'
    | 'nvidia/parakeet-v3'
    | 'omi-health/omi-med-stt-v1';

  /**
   * The audio file object to transcribe, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm. File uploads are limited to 100 MB. Cannot
   * be used together with `file_url`. Note: the `deepgram/*` models only support mp3
   * and wav formats.
   */
  file?: Uploadable;

  /**
   * Link to audio file in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a,
   * ogg, wav, or webm. Support for hosted files is limited to 100MB. Cannot be used
   * together with `file`. Note: the `deepgram/*` models only support mp3 and wav
   * formats.
   */
  file_url?: string;

  /**
   * The language of the audio to be transcribed. `deepgram/nova-3` supports ~49
   * languages plus `multi`, and `deepgram/nova-2` supports ~33 plus `multi`; the
   * `-medical` variants are English only (`en` and its regional variants, e.g.
   * `en-US`, `en-GB`). Deepgram models validate on the base language and forward the
   * full tag, so regional variants such as `de-CH` and `pt-BR` are accepted where
   * the base language is supported; an unsupported language returns a 400. For
   * `openai/whisper-large-v3-turbo`, supports multiple languages.
   * `distil-whisper/distil-large-v2` does not support language parameter.
   * `nvidia/parakeet-v3` detects the language automatically;
   * `omi-health/omi-med-stt-v1` is English only.
   */
  language?: string;

  /**
   * Additional model-specific configuration parameters. Only allowed with the
   * `deepgram/*` models. Can include Deepgram-specific options such as
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
    type AudioTranscriptionResponseWord as AudioTranscriptionResponseWord,
    type AudioTranscribeResponse as AudioTranscribeResponse,
    type AudioTranscribeParams as AudioTranscribeParams,
  };
}
