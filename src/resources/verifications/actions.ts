// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ByPhoneNumberActionsAPI from './by-phone-number/actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Verify verification code by ID
   *
   * @example
   * ```ts
   * const verifyVerificationCodeResponse =
   *   await client.verifications.actions.verify(
   *     '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   );
   * ```
   */
  verify(
    verificationID: string,
    body: ActionVerifyParams,
    options?: RequestOptions,
  ): APIPromise<ByPhoneNumberActionsAPI.VerifyVerificationCodeResponse> {
    return this._client.post(path`/verifications/${verificationID}/actions/verify`, { body, ...options });
  }
}

export interface ActionVerifyParams {
  /**
   * This is the code the user submits for verification.
   */
  code?: string;

  /**
   * Identifies if the verification code has been accepted or rejected. Only
   * permitted if custom_code was used for the verification.
   */
  status?: 'accepted' | 'rejected';
}

export declare namespace Actions {
  export { type ActionVerifyParams as ActionVerifyParams };
}
