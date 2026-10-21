// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RecordingsJsonAPI from './recordings-json';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * TeXML REST Commands
 */
export class Recordings extends APIResource {
  /**
   * Updates recording resource for particular call.
   *
   * @example
   * ```ts
   * const texmlCreateCallRecordingResponseBody =
   *   await client.texml.accounts.calls.recordings.recordingSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     {
   *       account_sid: 'f5586561-8ff0-4291-a51b-c7dfe4139ff9',
   *       call_sid: 'call_sid',
   *     },
   *   );
   * ```
   */
  recordingSidJson(
    recordingSid: string,
    params: RecordingRecordingSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<RecordingsJsonAPI.TexmlCreateCallRecordingResponseBody> {
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

export interface RecordingRecordingSidJsonParams {
  /**
   * Path param: The UUID of the Telnyx account that owns the resource, for example
   * `f5586561-8ff0-4291-a51b-c7dfe4139ff9`. The `account_sid` path segment is kept
   * for Twilio API compatibility, but the value is a Telnyx account UUID, not a
   * Twilio `AC...` SID. It must match the account that owns the API key used to
   * authenticate the request, otherwise the endpoint returns `404`. The same value
   * is sent as `AccountSid` in TeXML webhooks.
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
  export { type RecordingRecordingSidJsonParams as RecordingRecordingSidJsonParams };
}
