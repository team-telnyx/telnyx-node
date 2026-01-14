// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Recordings extends APIResource {
  /**
   * Updates recording resource for particular call.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.recordings.recordingSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { account_sid: 'account_sid', call_sid: 'call_sid' },
   *   );
   * ```
   */
  recordingSidJson(
    recordingSid: string,
    params: RecordingRecordingSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<RecordingRecordingSidJsonResponse> {
    const { account_sid, call_sid, ...body } = params;
    return this._client.post(
      path`/texml/Accounts/${account_sid}/Calls/${call_sid}/Recordings/${recordingSid}.json`,
      {
        body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
      },
    );
  }
}

export interface RecordingRecordingSidJsonResponse {
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

export interface RecordingRecordingSidJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Path param: The CallSid that identifies the call to update.
   */
  call_sid: string;

  /**
   * Body param
   */
  Status?: 'in-progress' | 'paused' | 'stopped';
}

export declare namespace Recordings {
  export {
    type RecordingRecordingSidJsonResponse as RecordingRecordingSidJsonResponse,
    type RecordingRecordingSidJsonParams as RecordingRecordingSidJsonParams,
  };
}
