// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Verify verification code by phone number
   *
   * @example
   * ```ts
   * const verifyVerificationCodeResponse =
   *   await client.verifications.byPhoneNumber.actions.verify(
   *     '+13035551234',
   *     {
   *       code: '17686',
   *       verify_profile_id:
   *         '12ade33a-21c0-473b-b055-b3c836e1c292',
   *     },
   *   );
   * ```
   */
  verify(
    phoneNumber: string,
    body: ActionVerifyParams,
    options?: RequestOptions,
  ): APIPromise<VerifyVerificationCodeResponse> {
    return this._client.post(path`/verifications/by_phone_number/${phoneNumber}/actions/verify`, {
      body,
      ...options,
    });
  }
}

export interface VerifyVerificationCodeResponse {
  data: VerifyVerificationCodeResponse.Data;
}

export namespace VerifyVerificationCodeResponse {
  export interface Data {
    /**
     * +E164 formatted phone number.
     */
    phone_number: string;

    /**
     * Identifies if the verification code has been accepted or rejected.
     */
    response_code: 'accepted' | 'rejected';
  }
}

export interface ActionVerifyParams {
  /**
   * This is the code the user submits for verification.
   */
  code: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;
}

export declare namespace Actions {
  export {
    type VerifyVerificationCodeResponse as VerifyVerificationCodeResponse,
    type ActionVerifyParams as ActionVerifyParams,
  };
}
