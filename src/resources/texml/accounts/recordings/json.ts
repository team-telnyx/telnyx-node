// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * TeXML REST Commands
 */
export class Json extends APIResource {
  /**
   * Deletes recording resource identified by recording id.
   *
   * @example
   * ```ts
   * await client.texml.accounts.recordings.json.deleteRecordingSidJson(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { account_sid: 'f5586561-8ff0-4291-a51b-c7dfe4139ff9' },
   * );
   * ```
   */
  deleteRecordingSidJson(
    recordingSid: string,
    params: JsonDeleteRecordingSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_sid } = params;
    return this._client.delete(path`/texml/Accounts/${account_sid}/Recordings/${recordingSid}.json`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns recording resource identified by recording id.
   *
   * @example
   * ```ts
   * const texmlGetCallRecordingResponseBody =
   *   await client.texml.accounts.recordings.json.retrieveRecordingSidJson(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { account_sid: 'f5586561-8ff0-4291-a51b-c7dfe4139ff9' },
   *   );
   * ```
   */
  retrieveRecordingSidJson(
    recordingSid: string,
    params: JsonRetrieveRecordingSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TexmlGetCallRecordingResponseBody> {
    const { account_sid } = params;
    return this._client.get(path`/texml/Accounts/${account_sid}/Recordings/${recordingSid}.json`, options);
  }
}

export interface JsonDeleteRecordingSidJsonParams {
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

export interface JsonRetrieveRecordingSidJsonParams {
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
    type JsonDeleteRecordingSidJsonParams as JsonDeleteRecordingSidJsonParams,
    type JsonRetrieveRecordingSidJsonParams as JsonRetrieveRecordingSidJsonParams,
  };
}
