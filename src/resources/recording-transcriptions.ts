// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Call Recordings operations.
 */
export class RecordingTranscriptions extends APIResource {
  /**
   * Retrieves the details of an existing recording transcription.
   */
  retrieve(recordingTranscriptionID: string, options?: RequestOptions): APIPromise<RecordingTranscriptionRetrieveResponse> {
    return this._client.get(path`/recording_transcriptions/${recordingTranscriptionID}`, options);
  }

  /**
   * Returns a list of your recording transcriptions.
   */
  list(query: RecordingTranscriptionListParams | null | undefined = {}, options?: RequestOptions): PagePromise<RecordingTranscriptionsDefaultFlatPagination, RecordingTranscription> {
    return this._client.getAPIList('/recording_transcriptions', DefaultFlatPagination<RecordingTranscription>, { query, ...options });
  }

  /**
   * Permanently deletes a recording transcription.
   */
  delete(recordingTranscriptionID: string, options?: RequestOptions): APIPromise<RecordingTranscriptionDeleteResponse> {
    return this._client.delete(path`/recording_transcriptions/${recordingTranscriptionID}`, options);
  }
}

export type RecordingTranscriptionsDefaultFlatPagination = DefaultFlatPagination<RecordingTranscription>

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

export interface RecordingTranscriptionDeleteResponse {
  data?: RecordingTranscription;
}

export interface RecordingTranscriptionListParams extends DefaultFlatPaginationParams {
  /**
   * Filter recording transcriptions by various attributes.
   */
  filter?: RecordingTranscriptionListParams.Filter;
}

export namespace RecordingTranscriptionListParams {
  /**
   * Filter recording transcriptions by various attributes.
   */
  export interface Filter {
    created_at?: Filter.CreatedAt;

    /**
     * If present, transcriptions will be filtered to those associated with the given
     * recording.
     */
    recording_id?: string;
  }

  export namespace Filter {
    export interface CreatedAt {
      /**
       * Returns only transcriptions created later than or at given ISO 8601 datetime.
       */
      gte?: string;

      /**
       * Returns only transcriptions created earlier than or at given ISO 8601 datetime.
       */
      lte?: string;
    }
  }
}

export declare namespace RecordingTranscriptions {
  export {
    type RecordingTranscription as RecordingTranscription,
    type RecordingTranscriptionRetrieveResponse as RecordingTranscriptionRetrieveResponse,
    type RecordingTranscriptionDeleteResponse as RecordingTranscriptionDeleteResponse,
    type RecordingTranscriptionsDefaultFlatPagination as RecordingTranscriptionsDefaultFlatPagination,
    type RecordingTranscriptionListParams as RecordingTranscriptionListParams
  };
}
