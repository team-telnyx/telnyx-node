// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RecordingTranscriptions extends APIResource {
  /**
   * Retrieves the details of an existing recording transcription.
   */
  retrieve(
    recordingTranscriptionID: string,
    options?: RequestOptions,
  ): APIPromise<RecordingTranscriptionRetrieveResponse> {
    return this._client.get(path`/recording_transcriptions/${recordingTranscriptionID}`, options);
  }

  /**
   * Returns a list of your recording transcriptions.
   */
  list(options?: RequestOptions): APIPromise<RecordingTranscriptionListResponse> {
    return this._client.get('/recording_transcriptions', options);
  }

  /**
   * Permanently deletes a recording transcription.
   */
  delete(
    recordingTranscriptionID: string,
    options?: RequestOptions,
  ): APIPromise<RecordingTranscriptionDeleteResponse> {
    return this._client.delete(path`/recording_transcriptions/${recordingTranscriptionID}`, options);
  }
}

export interface RecordingTranscription {
  /**
   * Uniquely identifies the recording transcription.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The duration of the recording transcription in milliseconds.
   */
  duration_millis?: number;

  record_type?: 'recording_transcription';

  /**
   * Uniquely identifies the recording associated with this transcription.
   */
  recording_id?: string;

  /**
   * The status of the recording transcription. Only `completed` has transcription
   * text available.
   */
  status?: 'in-progress' | 'completed';

  /**
   * The recording's transcribed text.
   */
  transcription_text?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface RecordingTranscriptionRetrieveResponse {
  data?: RecordingTranscription;
}

export interface RecordingTranscriptionListResponse {
  data?: Array<RecordingTranscription>;

  meta?: RecordingTranscriptionListResponse.Meta;
}

export namespace RecordingTranscriptionListResponse {
  export interface Meta {
    cursors?: Meta.Cursors;

    /**
     * Path to next page.
     */
    next?: string;

    /**
     * Path to previous page.
     */
    previous?: string;
  }

  export namespace Meta {
    export interface Cursors {
      /**
       * Opaque identifier of next page.
       */
      after?: string;

      /**
       * Opaque identifier of previous page.
       */
      before?: string;
    }
  }
}

export interface RecordingTranscriptionDeleteResponse {
  data?: RecordingTranscription;
}

export declare namespace RecordingTranscriptions {
  export {
    type RecordingTranscription as RecordingTranscription,
    type RecordingTranscriptionRetrieveResponse as RecordingTranscriptionRetrieveResponse,
    type RecordingTranscriptionListResponse as RecordingTranscriptionListResponse,
    type RecordingTranscriptionDeleteResponse as RecordingTranscriptionDeleteResponse,
  };
}
