// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Json extends APIResource {
  /**
   * Permanently deletes a recording transcription.
   *
   * @example
   * ```ts
   * await client.texml.accounts.transcriptions.json.deleteRecordingTranscriptionSidJson(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { account_sid: 'account_sid' },
   * );
   * ```
   */
  deleteRecordingTranscriptionSidJson(
    recordingTranscriptionSid: string,
    params: JsonDeleteRecordingTranscriptionSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_sid } = params;
    return this._client.delete(
      path`/texml/Accounts/${account_sid}/Transcriptions/${recordingTranscriptionSid}.json`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Returns the recording transcription resource identified by its ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.transcriptions.json.retrieveRecordingTranscriptionSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieveRecordingTranscriptionSidJson(
    recordingTranscriptionSid: string,
    params: JsonRetrieveRecordingTranscriptionSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<JsonRetrieveRecordingTranscriptionSidJsonResponse> {
    const { account_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Transcriptions/${recordingTranscriptionSid}.json`,
      options,
    );
  }
}

export interface JsonRetrieveRecordingTranscriptionSidJsonResponse {
  account_sid?: string;

  /**
   * The version of the API that was used to make the request.
   */
  api_version?: string;

  call_sid?: string;

  date_created?: string;

  date_updated?: string;

  /**
   * The duration of this recording, given in seconds.
   */
  duration?: string | null;

  /**
   * Identifier of a resource.
   */
  recording_sid?: string;

  /**
   * Identifier of a resource.
   */
  sid?: string;

  /**
   * The status of the recording transcriptions. The transcription text will be
   * available only when the status is completed.
   */
  status?: 'in-progress' | 'completed';

  /**
   * The recording's transcribed text
   */
  transcription_text?: string;

  /**
   * The relative URI for the recording transcription resource.
   */
  uri?: string;
}

export interface JsonDeleteRecordingTranscriptionSidJsonParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface JsonRetrieveRecordingTranscriptionSidJsonParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export declare namespace Json {
  export {
    type JsonRetrieveRecordingTranscriptionSidJsonResponse as JsonRetrieveRecordingTranscriptionSidJsonResponse,
    type JsonDeleteRecordingTranscriptionSidJsonParams as JsonDeleteRecordingTranscriptionSidJsonParams,
    type JsonRetrieveRecordingTranscriptionSidJsonParams as JsonRetrieveRecordingTranscriptionSidJsonParams,
  };
}
