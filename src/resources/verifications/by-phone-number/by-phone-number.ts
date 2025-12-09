// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VerificationsAPI from '../verifications';
import * as ActionsAPI from './actions';
import { ActionVerifyParams, Actions, VerifyVerificationCodeResponse } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ByPhoneNumber extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * List verifications by phone number
   *
   * @example
   * ```ts
   * const byPhoneNumbers =
   *   await client.verifications.byPhoneNumber.list(
   *     '+13035551234',
   *   );
   * ```
   */
  list(phoneNumber: string, options?: RequestOptions): APIPromise<ByPhoneNumberListResponse> {
    return this._client.get(path`/verifications/by_phone_number/${phoneNumber}`, options);
  }
}

export interface VerifyMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface ByPhoneNumberListResponse {
  data: Array<VerificationsAPI.Verification>;

  meta: VerifyMeta;
}

ByPhoneNumber.Actions = Actions;

export declare namespace ByPhoneNumber {
  export { type VerifyMeta as VerifyMeta, type ByPhoneNumberListResponse as ByPhoneNumberListResponse };

  export {
    Actions as Actions,
    type VerifyVerificationCodeResponse as VerifyVerificationCodeResponse,
    type ActionVerifyParams as ActionVerifyParams,
  };
}
