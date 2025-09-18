// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VerifiedNumbersAPI from './verified-numbers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Submit verification code
   *
   * @example
   * ```ts
   * const verifiedNumberDataWrapper =
   *   await client.verifiedNumbers.actions.submitVerificationCode(
   *     '+15551234567',
   *     { verification_code: '123456' },
   *   );
   * ```
   */
  submitVerificationCode(
    phoneNumber: string,
    body: ActionSubmitVerificationCodeParams,
    options?: RequestOptions,
  ): APIPromise<VerifiedNumbersAPI.VerifiedNumberDataWrapper> {
    return this._client.post(path`/verified_numbers/${phoneNumber}/actions/verify`, { body, ...options });
  }
}

export interface ActionSubmitVerificationCodeParams {
  verification_code: string;
}

export declare namespace Actions {
  export { type ActionSubmitVerificationCodeParams as ActionSubmitVerificationCodeParams };
}
