// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * TeXML REST Commands
 */
export class Json extends APIResource {
  /**
   * Permanently deletes a recording transcription.
   *
   * @example
   * ```ts
   * await client.texml.accounts.transcriptions.json.deleteRecordingTranscriptionSidJson(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { account_sid: 'f5586561-8ff0-4291-a51b-c7dfe4139ff9' },
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
   * const texmlRecordingTranscription =
   *   await client.texml.accounts.transcriptions.json.retrieveRecordingTranscriptionSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { account_sid: 'f5586561-8ff0-4291-a51b-c7dfe4139ff9' },
   *   );
   * ```
   */
  retrieveRecordingTranscriptionSidJson(
    recordingTranscriptionSid: string,
    params: JsonRetrieveRecordingTranscriptionSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<TexmlRecordingTranscription> {
    const { account_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Transcriptions/${recordingTranscriptionSid}.json`,
      options,
    );
  }
}

export interface TexmlRecordingTranscription {
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
   * The UUID of the Telnyx account that owns the resource, for example
   * `f5586561-8ff0-4291-a51b-c7dfe4139ff9`. The `account_sid` path segment is kept
   * for Twilio API compatibility, but the value is a Telnyx account UUID, not a
   * Twilio `AC...` SID. It must match the account that owns the API key used to
   * authenticate the request, otherwise the endpoint returns `404`. The same value
   * is sent as `AccountSid` in TeXML webhooks.
   */
  account_sid: string;
}

export interface JsonRetrieveRecordingTranscriptionSidJsonParams {
  /**
   * The UUID of the Telnyx account that owns the resource, for example
   * `f5586561-8ff0-4291-a51b-c7dfe4139ff9`. The `account_sid` path segment is kept
   * for Twilio API compatibility, but the value is a Telnyx account UUID, not a
   * Twilio `AC...` SID. It must match the account that owns the API key used to
   * authenticate the request, otherwise the endpoint returns `404`. The same value
   * is sent as `AccountSid` in TeXML webhooks.
   */
  account_sid: string;
}

export declare namespace Json {
  export {
    type TexmlRecordingTranscription as TexmlRecordingTranscription,
    type JsonDeleteRecordingTranscriptionSidJsonParams as JsonDeleteRecordingTranscriptionSidJsonParams,
    type JsonRetrieveRecordingTranscriptionSidJsonParams as JsonRetrieveRecordingTranscriptionSidJsonParams,
  };
}
