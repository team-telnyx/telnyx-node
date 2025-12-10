// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SMSOtp extends APIResource {
  /**
   * Query the status of an SMS OTP (One-Time Password) for Sole Proprietor brand
   * verification.
   *
   * This endpoint allows you to check the delivery and verification status of an OTP
   * sent during the Sole Proprietor brand verification process. You can query by
   * either:
   *
   * - `referenceId` - The reference ID returned when the OTP was initially triggered
   * - `brandId` - Query parameter for portal users to look up OTP status by Brand ID
   *
   * The response includes delivery status, verification dates, and detailed delivery
   * information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.brand.smsOtp.getStatus(
   *     'OTP4B2001',
   *   );
   * ```
   */
  getStatus(
    referenceID: string,
    query: SMSOtpGetStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SMSOtpGetStatusResponse> {
    return this._client.get(path`/10dlc/brand/smsOtp/${referenceID}`, { query, ...options });
  }

  /**
   * Trigger or re-trigger an SMS OTP (One-Time Password) for Sole Proprietor brand
   * verification.
   *
   * **Important Notes:**
   *
   * - Only allowed for Sole Proprietor (`SOLE_PROPRIETOR`) brands
   * - Triggers generation of a one-time password sent to the `mobilePhone` number in
   *   the brand's profile
   * - Campaigns cannot be created until OTP verification is complete
   * - US/CA numbers only for real OTPs; mock brands can use non-US/CA numbers for
   *   testing
   * - Returns a `referenceId` that can be used to check OTP status via the GET
   *   `/10dlc/brand/smsOtp/{referenceId}` endpoint
   *
   * **Use Cases:**
   *
   * - Initial OTP trigger after Sole Proprietor brand creation
   * - Re-triggering OTP if the user didn't receive or needs a new code
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.brand.smsOtp.trigger(
   *     '4b20019b-043a-78f8-0657-b3be3f4b4002',
   *     {
   *       pinSms: 'Your PIN is @OTP_PIN@',
   *       successSms: 'Verification successful!',
   *     },
   *   );
   * ```
   */
  trigger(
    brandID: string,
    body: SMSOtpTriggerParams,
    options?: RequestOptions,
  ): APIPromise<SMSOtpTriggerResponse> {
    return this._client.post(path`/10dlc/brand/${brandID}/smsOtp`, { body, ...options });
  }

  /**
   * Verify the SMS OTP (One-Time Password) for Sole Proprietor brand verification.
   *
   * **Verification Flow:**
   *
   * 1. User receives OTP via SMS after triggering
   * 2. User submits the OTP pin through this endpoint
   * 3. Upon successful verification:
   *    - A `BRAND_OTP_VERIFIED` webhook event is sent to the CSP
   *    - The brand's `identityStatus` changes to `VERIFIED`
   *    - Campaigns can now be created for this brand
   *
   * **Error Handling:**
   *
   * Provides proper error responses for:
   *
   * - Invalid OTP pins
   * - Expired OTPs
   * - OTP verification failures
   *
   * @example
   * ```ts
   * await client.number10dlc.brand.smsOtp.verify(
   *   '4b20019b-043a-78f8-0657-b3be3f4b4002',
   *   { otpPin: '123456' },
   * );
   * ```
   */
  verify(brandID: string, body: SMSOtpVerifyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/10dlc/brand/${brandID}/smsOtp`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Status information for an SMS OTP sent during Sole Proprietor brand verification
 */
export interface SMSOtpGetStatusResponse {
  /**
   * The Brand ID associated with this OTP request
   */
  brandId: string;

  /**
   * The current delivery status of the OTP SMS message. Common values include:
   * `DELIVERED_HANDSET`, `PENDING`, `FAILED`, `EXPIRED`
   */
  deliveryStatus: string;

  /**
   * The mobile phone number where the OTP was sent, in E.164 format
   */
  mobilePhone: string;

  /**
   * The reference ID for this OTP request, used for status queries
   */
  referenceId: string;

  /**
   * The timestamp when the OTP request was initiated
   */
  requestDate: string;

  /**
   * The timestamp when the delivery status was last updated
   */
  deliveryStatusDate?: string;

  /**
   * Additional details about the delivery status
   */
  deliveryStatusDetails?: string;

  /**
   * The timestamp when the OTP was successfully verified (if applicable)
   */
  verifyDate?: string;
}

/**
 * Response after successfully triggering a Brand SMS OTP
 */
export interface SMSOtpTriggerResponse {
  /**
   * The Brand ID for which the OTP was triggered
   */
  brandId: string;

  /**
   * The reference ID that can be used to check OTP status
   */
  referenceId: string;
}

export interface SMSOtpGetStatusParams {
  /**
   * Filter by Brand ID for easier lookup in portal applications
   */
  brandId?: string;
}

export interface SMSOtpTriggerParams {
  /**
   * SMS message template to send the OTP. Must include `@OTP_PIN@` placeholder which
   * will be replaced with the actual PIN
   */
  pinSms: string;

  /**
   * SMS message to send upon successful OTP verification
   */
  successSms: string;
}

export interface SMSOtpVerifyParams {
  /**
   * The OTP PIN received via SMS
   */
  otpPin: string;
}

export declare namespace SMSOtp {
  export {
    type SMSOtpGetStatusResponse as SMSOtpGetStatusResponse,
    type SMSOtpTriggerResponse as SMSOtpTriggerResponse,
    type SMSOtpGetStatusParams as SMSOtpGetStatusParams,
    type SMSOtpTriggerParams as SMSOtpTriggerParams,
    type SMSOtpVerifyParams as SMSOtpVerifyParams,
  };
}
