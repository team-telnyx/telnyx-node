// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Streams extends APIResource {
  /**
   * Updates streaming resource for particular call.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.streams.streamingSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { account_sid: 'account_sid', call_sid: 'call_sid' },
   *   );
   * ```
   */
  streamingSidJson(
    streamingSid: string,
    params: StreamStreamingSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<StreamStreamingSidJsonResponse> {
    const { account_sid, call_sid, ...body } = params;
    return this._client.post(
      path`/texml/Accounts/${account_sid}/Calls/${call_sid}/Streams/${streamingSid}.json`,
      {
        body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
      },
    );
  }
}

export interface StreamStreamingSidJsonResponse {
  account_sid?: string;

  call_sid?: string;

  date_updated?: string;

  /**
   * Identifier of a resource.
   */
  sid?: string;

  /**
   * The status of the streaming.
   */
  status?: 'stopped';

  /**
   * The relative URI for this streaming resource.
   */
  uri?: string;
}

export interface StreamStreamingSidJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Path param: The CallSid that identifies the call to update.
   */
  call_sid: string;

  /**
   * Body param: The status of the Stream you wish to update.
   */
  Status?: 'stopped';
}

export declare namespace Streams {
  export {
    type StreamStreamingSidJsonResponse as StreamStreamingSidJsonResponse,
    type StreamStreamingSidJsonParams as StreamStreamingSidJsonParams,
  };
}
