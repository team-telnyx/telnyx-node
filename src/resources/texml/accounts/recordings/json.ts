// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Json extends APIResource {
  /**
   * Deletes recording resource identified by recording id.
   *
   * @example
   * ```ts
   * await client.texml.accounts.recordings.json.deleteRecordingSidJson(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { account_sid: 'account_sid' },
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
   *     { account_sid: 'account_sid' },
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
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface JsonRetrieveRecordingSidJsonParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export declare namespace Json {
  export {
    type JsonDeleteRecordingSidJsonParams as JsonDeleteRecordingSidJsonParams,
    type JsonRetrieveRecordingSidJsonParams as JsonRetrieveRecordingSidJsonParams,
  };
}
