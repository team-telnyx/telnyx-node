// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * TeXML REST Commands
 */
export class Calls extends APIResource {
  /**
   * Initiate an outbound TeXML call using a TeXML application connection ID, not an
   * account SID. Request parameter names are case-sensitive. From and To are
   * required; Texml supplies inline instructions and Url overrides the application
   * XML request URL. When neither is supplied, the application configuration
   * supplies the instructions. The response is a flat call object without a data
   * wrapper.
   *
   * @example
   * ```ts
   * const call = await client.texml.calls.create('1234567890', {
   *   From: '+13120001234',
   *   To: '+13121230000',
   *   Texml: '<Response><Say>Hello</Say></Response>',
   * });
   * ```
   */
  create(
    connectionID: string,
    body: CallCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallCreateResponse> {
    return this._client.post(path`/texml/calls/${connectionID}`, { body, ...options });
  }
}

export interface CallCreateResponse {
  /**
   * The call control ID of the created call.
   */
  call_sid: string;

  /**
   * The caller address.
   */
  from: string;

  /**
   * The initial status of the outbound call.
   */
  status: 'queued';

  /**
   * The called address.
   */
  to: string;
}

export interface CallCreateParams {
  /**
   * The E.164-formatted phone number or SIP URI to present as the caller.
   */
  From: string;

  /**
   * The E.164-formatted phone number or SIP URI to call.
   */
  To: string;

  /**
   * HTTP method used to retrieve TeXML instructions from Url.
   */
  Method?: 'GET' | 'POST';

  /**
   * Inline TeXML instructions to execute when the call is answered.
   */
  Texml?: string;

  /**
   * The URL from which to retrieve TeXML instructions. Overrides the TeXML
   * application XML request URL.
   */
  Url?: string;
}

export declare namespace Calls {
  export { type CallCreateResponse as CallCreateResponse, type CallCreateParams as CallCreateParams };
}
