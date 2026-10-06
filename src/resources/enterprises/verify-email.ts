// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Verify ownership of a DIR's authorizer email. A short code is emailed and confirmed; the email must be verified before references can be submitted.
 */
export class VerifyEmail extends APIResource {
  /**
   * Email a 6-digit code to the enterprise account's contact email to confirm
   * ownership of that address.
   *
   * A BPO (Business Process Outsourcer) account has no DIR, so it proves ownership
   * of its own contact email here rather than through a DIR. A BPO account cannot be
   * approved for use until this contact email is verified.
   *
   * The code expires in 15 minutes. Requesting a new code invalidates any previous
   * one. Resends are rate limited (a short cooldown plus a daily cap). Submit the
   * code to `POST /enterprises/{enterprise_id}/verify_email/confirm`.
   *
   * @example
   * ```ts
   * const enterpriseEmailVerificationStatusWrapped =
   *   await client.enterprises.verifyEmail.create(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   * ```
   */
  create(
    enterpriseID: string,
    options?: RequestOptions,
  ): APIPromise<EnterpriseEmailVerificationStatusWrapped> {
    return this._client.post(path`/enterprises/${enterpriseID}/verify_email`, options);
  }

  /**
   * Submit the 6-digit code that was emailed to the enterprise account's contact
   * email. On success the contact email is marked verified.
   *
   * For security, any failure (wrong, expired, already-used, or too many attempts)
   * returns the same generic message.
   *
   * @example
   * ```ts
   * const enterpriseEmailVerificationStatusWrapped =
   *   await client.enterprises.verifyEmail.confirm(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     { code: '482915' },
   *   );
   * ```
   */
  confirm(
    enterpriseID: string,
    body: VerifyEmailConfirmParams,
    options?: RequestOptions,
  ): APIPromise<EnterpriseEmailVerificationStatusWrapped> {
    return this._client.post(path`/enterprises/${enterpriseID}/verify_email/confirm`, { body, ...options });
  }
}

export interface EnterpriseEmailVerificationStatusWrapped {
  /**
   * Verification state for an enterprise account's contact email.
   */
  data: EnterpriseEmailVerificationStatusWrapped.Data;
}

export namespace EnterpriseEmailVerificationStatusWrapped {
  /**
   * Verification state for an enterprise account's contact email.
   */
  export interface Data {
    /**
     * Whether the enterprise account's contact email has been confirmed.
     */
    email_verified: boolean;

    /**
     * Always `email_verification`.
     */
    record_type: 'email_verification';

    /**
     * `sent` after a code is emailed; `verified` after a successful confirm.
     */
    status: 'sent' | 'verified';

    /**
     * When the code just sent stops being accepted. Present on a send response; null
     * on a confirm response.
     */
    expires_at?: string | null;

    /**
     * How many more codes may be requested for this enterprise account today. Present
     * on a send response; null on a confirm response.
     */
    sends_remaining_today?: number | null;
  }
}

export interface VerifyEmailConfirmParams {
  /**
   * The 6-digit code sent to the enterprise account's contact email.
   */
  code: string;
}

export declare namespace VerifyEmail {
  export {
    type EnterpriseEmailVerificationStatusWrapped as EnterpriseEmailVerificationStatusWrapped,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
