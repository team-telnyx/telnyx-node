// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RecordingsJson extends APIResource {
  /**
   * Starts recording with specified parameters for call idientified by call_sid.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.recordingsJson.recordingsJson(
   *     'call_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  recordingsJson(
    callSid: string,
    params: RecordingsJsonRecordingsJsonParams,
    options?: RequestOptions,
  ): APIPromise<RecordingsJsonRecordingsJsonResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Calls/${callSid}/Recordings.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Returns recordings for a call identified by call_sid.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.recordingsJson.retrieveRecordingsJson(
   *     'call_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieveRecordingsJson(
    callSid: string,
    params: RecordingsJsonRetrieveRecordingsJsonParams,
    options?: RequestOptions,
  ): APIPromise<RecordingsJsonRetrieveRecordingsJsonResponse> {
    const { account_sid } = params;
    return this._client.get(path`/texml/Accounts/${account_sid}/Calls/${callSid}/Recordings.json`, options);
  }
}

export interface RecordingsJsonRecordingsJsonResponse {
  account_sid?: string;

  call_sid?: string;

  channels?: 1 | 2;

  conference_sid?: string | null;

  date_created?: string;

  date_updated?: string;

  /**
   * The duration of this recording, given in seconds.
   */
  duration?: string | null;

  error_code?: string | null;

  /**
   * The price of this recording, the currency is specified in the price_unit field.
   */
  price?: string | null;

  /**
   * The unit in which the price is given.
   */
  price_unit?: string | null;

  /**
   * Identifier of a resource.
   */
  sid?: string;

  /**
   * Defines how the recording was created.
   */
  source?:
    | 'StartCallRecordingAPI'
    | 'StartConferenceRecordingAPI'
    | 'OutboundAPI'
    | 'DialVerb'
    | 'Conference'
    | 'RecordVerb'
    | 'Trunking';

  start_time?: string;

  /**
   * The audio track to record for the call. The default is `both`.
   */
  track?: 'inbound' | 'outbound' | 'both';

  /**
   * The relative URI for this recording resource.
   */
  uri?: string;
}

export interface RecordingsJsonRetrieveRecordingsJsonResponse {
  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * Relative uri to the first page of the query results
   */
  first_page_uri?: string;

  /**
   * Relative uri to the next page of the query results
   */
  next_page_uri?: string;

  /**
   * Current page number, zero-indexed.
   */
  page?: number;

  /**
   * The number of items on the page
   */
  page_size?: number;

  /**
   * Relative uri to the previous page of the query results
   */
  previous_page_uri?: string;

  recordings?: Array<AccountsAPI.TexmlGetCallRecordingResponseBody>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export interface RecordingsJsonRecordingsJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: Whether to play a beep when recording is started.
   */
  PlayBeep?: boolean;

  /**
   * Body param: When `dual`, final audio file has the first leg on channel A, and
   * the rest on channel B. `single` mixes both tracks into a single channel.
   */
  RecordingChannels?: 'single' | 'dual';

  /**
   * Body param: Url where status callbacks will be sent.
   */
  RecordingStatusCallback?: string;

  /**
   * Body param: The changes to the recording's state that should generate a call to
   * `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`.
   * Separate multiple values with a space. Defaults to `completed`.
   */
  RecordingStatusCallbackEvent?: string;

  /**
   * Body param: HTTP method used to send status callbacks.
   */
  RecordingStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: The audio track to record for the call. The default is `both`.
   */
  RecordingTrack?: 'inbound' | 'outbound' | 'both';

  /**
   * Body param: Whether to send RecordingUrl in webhooks.
   */
  SendRecordingUrl?: boolean;
}

export interface RecordingsJsonRetrieveRecordingsJsonParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export declare namespace RecordingsJson {
  export {
    type RecordingsJsonRecordingsJsonResponse as RecordingsJsonRecordingsJsonResponse,
    type RecordingsJsonRetrieveRecordingsJsonResponse as RecordingsJsonRetrieveRecordingsJsonResponse,
    type RecordingsJsonRecordingsJsonParams as RecordingsJsonRecordingsJsonParams,
    type RecordingsJsonRetrieveRecordingsJsonParams as RecordingsJsonRetrieveRecordingsJsonParams,
  };
}
