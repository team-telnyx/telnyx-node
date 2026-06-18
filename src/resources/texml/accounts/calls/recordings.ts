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
   *     { account_sid: 'account_sid', call_sid: 'call_sid' },
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
  export { type RecordingRecordingSidJsonParams as RecordingRecordingSidJsonParams };
}
