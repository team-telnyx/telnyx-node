// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Siprec extends APIResource {
  /**
   * Updates siprec session identified by siprec_sid.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.siprec.siprecSidJson(
   *     'siprec_sid',
   *     { account_sid: 'account_sid', call_sid: 'call_sid' },
   *   );
   * ```
   */
  siprecSidJson(
    siprecSid: string,
    params: SiprecSiprecSidJsonParams,
    options?: RequestOptions,
  ): APIPromise<SiprecSiprecSidJsonResponse> {
    const { account_sid, call_sid, ...body } = params;
    return this._client.post(
      path`/texml/Accounts/${account_sid}/Calls/${call_sid}/Siprec/${siprecSid}.json`,
      {
        body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
      },
    );
  }
}

export interface SiprecSiprecSidJsonResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The id of the call the resource belongs to.
   */
  call_sid?: string;

  /**
   * The date and time the siprec session was last updated.
   */
  date_updated?: string;

  /**
   * The error code of the siprec session.
   */
  error_code?: string;

  /**
   * The SID of the siprec session.
   */
  sid?: string;

  /**
   * The status of the siprec session.
   */
  status?: 'in-progress' | 'stopped';

  /**
   * The URI of the siprec session.
   */
  uri?: string;
}

export interface SiprecSiprecSidJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Path param: The CallSid that identifies the call to update.
   */
  call_sid: string;

  /**
   * Body param: The new status of the resource. Specifying `stopped` will end the
   * siprec session.
   */
  Status?: 'stopped';
}

export declare namespace Siprec {
  export {
    type SiprecSiprecSidJsonResponse as SiprecSiprecSidJsonResponse,
    type SiprecSiprecSidJsonParams as SiprecSiprecSidJsonParams,
  };
}
