// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionVerifyParams, Actions } from './actions';
import * as ByPhoneNumberAPI from './by-phone-number/by-phone-number';
import { ByPhoneNumber, ByPhoneNumberListResponse, VerifyMeta } from './by-phone-number/by-phone-number';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Two factor authentication API
 */
export class Verifications extends APIResource {
  byPhoneNumber: ByPhoneNumberAPI.ByPhoneNumber = new ByPhoneNumberAPI.ByPhoneNumber(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Starts a verification for the specified phone number and delivers its code in a
   * voice call using the selected Verify profile. Returns the pending verification
   * record.
   *
   * @example
   * ```ts
   * const createVerificationResponse =
   *   await client.verifications.triggerCall({
   *     phone_number: '+13035551234',
   *     verify_profile_id:
   *       '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   });
   * ```
   */
  triggerCall(
    body: VerificationTriggerCallParams,
    options?: RequestOptions,
  ): APIPromise<CreateVerificationResponse> {
    return this._client.post('/verifications/call', { body, ...options });
  }

  /**
   * Starts a verification for the specified phone number and places a brief call
   * with the code embedded in the caller ID. Returns the pending verification
   * record.
   *
   * @example
   * ```ts
   * const createVerificationResponse =
   *   await client.verifications.triggerFlashcall({
   *     phone_number: '+13035551234',
   *     verify_profile_id:
   *       '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   });
   * ```
   */
  triggerFlashcall(
    body: VerificationTriggerFlashcallParams,
    options?: RequestOptions,
  ): APIPromise<CreateVerificationResponse> {
    return this._client.post('/verifications/flashcall', { body, ...options });
  }

  /**
   * Starts a verification for the specified phone number and sends its code by SMS
   * using the selected Verify profile. Returns the pending verification record.
   *
   * @example
   * ```ts
   * const createVerificationResponse =
   *   await client.verifications.triggerSMS({
   *     phone_number: '+13035551234',
   *     verify_profile_id:
   *       '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   });
   * ```
   */
  triggerSMS(
    body: VerificationTriggerSMSParams,
    options?: RequestOptions,
  ): APIPromise<CreateVerificationResponse> {
    return this._client.post('/verifications/sms', { body, ...options });
  }

  /**
   * Returns the verification identified by ID, including its channel, phone number,
   * Verify profile, timeout, and current status.
   *
   * @example
   * ```ts
   * const verification = await client.verifications.retrieve(
   *   '12ade33a-21c0-473b-b055-b3c836e1c292',
   * );
   * ```
   */
  retrieve(verificationID: string, options?: RequestOptions): APIPromise<VerificationRetrieveResponse> {
    return this._client.get(path`/verifications/${verificationID}`, options);
  }

  /**
   * Starts a verification for the specified phone number and sends its code over
   * WhatsApp using the selected Verify profile. Returns the pending verification
   * record.
   *
   * @example
   * ```ts
   * const createVerificationResponse =
   *   await client.verifications.triggerWhatsappVerification({
   *     phone_number: '+13035551234',
   *     verify_profile_id:
   *       '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   });
   * ```
   */
  triggerWhatsappVerification(
    body: VerificationTriggerWhatsappVerificationParams,
    options?: RequestOptions,
  ): APIPromise<CreateVerificationResponse> {
    return this._client.post('/verifications/whatsapp', { body, ...options });
  }
}

/**
 * The request body when creating a verification.
 */
export interface CreateVerificationRequestSMS {
  /**
   * +E164 formatted phone number.
   */
  phone_number: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;

  /**
   * Send a self-generated numeric code to the end-user
   */
  custom_code?: string | null;

  /**
   * The number of seconds the verification code is valid for.
   */
  timeout_secs?: number;
}

export interface CreateVerificationResponse {
  data: Verification;
}

export interface Verification {
  id?: string;

  created_at?: string;

  /**
   * Send a self-generated numeric code to the end-user
   */
  custom_code?: string | null;

  /**
   * +E164 formatted phone number.
   */
  phone_number?: string;

  /**
   * The possible verification record types.
   */
  record_type?: 'verification';

  /**
   * The possible statuses of the verification request.
   */
  status?: 'pending' | 'accepted' | 'invalid' | 'expired' | 'error';

  /**
   * This is the number of seconds before the code of the request is expired. Once
   * this request has expired, the code will no longer verify the user. Note: this
   * will override the `default_verification_timeout_secs` on the Verify profile.
   */
  timeout_secs?: number;

  /**
   * The possible types of verification.
   */
  type?: 'sms' | 'call' | 'flashcall' | 'whatsapp';

  updated_at?: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id?: string;
}

export interface VerificationRetrieveResponse {
  data: Verification;
}

export interface VerificationTriggerCallParams {
  /**
   * +E164 formatted phone number.
   */
  phone_number: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;

  /**
   * Send a self-generated numeric code to the end-user
   */
  custom_code?: string | null;

  /**
   * Optional extension to dial after call is answered using DTMF digits. Valid
   * digits are 0-9, A-D, \*, and #. Pauses can be added using w (0.5s) and W (1s).
   */
  extension?: string | null;

  /**
   * The number of seconds the verification code is valid for.
   */
  timeout_secs?: number;
}

export interface VerificationTriggerFlashcallParams {
  /**
   * +E164 formatted phone number.
   */
  phone_number: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;

  /**
   * The number of seconds the verification code is valid for.
   */
  timeout_secs?: number;
}

export interface VerificationTriggerSMSParams {
  /**
   * +E164 formatted phone number.
   */
  phone_number: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;

  /**
   * Send a self-generated numeric code to the end-user
   */
  custom_code?: string | null;

  /**
   * The number of seconds the verification code is valid for.
   */
  timeout_secs?: number;
}

export interface VerificationTriggerWhatsappVerificationParams {
  /**
   * +E164 formatted phone number.
   */
  phone_number: string;

  /**
   * The identifier of the associated Verify profile.
   */
  verify_profile_id: string;

  /**
   * Send a self-generated numeric code to the end-user
   */
  custom_code?: string | null;

  /**
   * The number of seconds the verification code is valid for.
   */
  timeout_secs?: number;
}

Verifications.ByPhoneNumber = ByPhoneNumber;
Verifications.Actions = Actions;

export declare namespace Verifications {
  export {
    type CreateVerificationRequestSMS as CreateVerificationRequestSMS,
    type CreateVerificationResponse as CreateVerificationResponse,
    type Verification as Verification,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationTriggerCallParams as VerificationTriggerCallParams,
    type VerificationTriggerFlashcallParams as VerificationTriggerFlashcallParams,
    type VerificationTriggerSMSParams as VerificationTriggerSMSParams,
    type VerificationTriggerWhatsappVerificationParams as VerificationTriggerWhatsappVerificationParams,
  };

  export {
    ByPhoneNumber as ByPhoneNumber,
    type VerifyMeta as VerifyMeta,
    type ByPhoneNumberListResponse as ByPhoneNumberListResponse,
  };

  export { Actions as Actions, type ActionVerifyParams as ActionVerifyParams };
}
