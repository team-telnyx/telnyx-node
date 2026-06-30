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
   * Submit the 6-digit code that was emailed to the DIR's authorizer email. On
   * success the authorizer email is marked verified.
   *
   * For security, any failure (wrong, expired, already-used, or too many attempts)
   * returns the same generic message.
   *
   * @example
   * ```ts
   * const response = await client.dir.verifyEmail.confirmCode(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   { code: '482915' },
   * );
   * ```
   */
  confirmCode(
    dirID: string,
    body: VerifyEmailConfirmCodeParams,
    options?: RequestOptions,
  ): APIPromise<VerifyEmailConfirmCodeResponse> {
    return this._client.post(path`/dir/${dirID}/verify_email/confirm`, { body, ...options });
  }

  /**
   * Email a 6-digit code to the DIR's authorizer email to confirm ownership of that
   * address.
   *
   * The code expires in 15 minutes. Requesting a new code invalidates any previous
   * one. Resends are rate limited (a short cooldown plus a daily cap). Submit the
   * code to `POST /dir/{dir_id}/verify_email/confirm`.
   *
   * @example
   * ```ts
   * const response = await client.dir.verifyEmail.sendCode(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  sendCode(dirID: string, options?: RequestOptions): APIPromise<VerifyEmailSendCodeResponse> {
    return this._client.post(path`/dir/${dirID}/verify_email`, options);
  }

  /**
   * Whether the DIR's current authorizer email has been verified.
   *
   * @example
   * ```ts
   * const response = await client.dir.verifyEmail.status(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  status(dirID: string, options?: RequestOptions): APIPromise<VerifyEmailStatusResponse> {
    return this._client.get(path`/dir/${dirID}/verify_email`, options);
  }
}

export interface VerifyEmailConfirmCodeResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  data: VerifyEmailConfirmCodeResponse.Data;
}

export namespace VerifyEmailConfirmCodeResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  export interface Data {
    /**
     * Whether the DIR's authorizer email has been confirmed.
     */
    email_verified: boolean;

    /**
     * Always `email_verification`.
     */
    record_type: 'email_verification';

    /**
     * `sent` after a code is emailed; `verified` after a successful confirm;
     * `unverified` when no verification is in progress.
     */
    status: 'sent' | 'verified' | 'unverified';
  }
}

export interface VerifyEmailSendCodeResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  data: VerifyEmailSendCodeResponse.Data;
}

export namespace VerifyEmailSendCodeResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  export interface Data {
    /**
     * Whether the DIR's authorizer email has been confirmed.
     */
    email_verified: boolean;

    /**
     * Always `email_verification`.
     */
    record_type: 'email_verification';

    /**
     * `sent` after a code is emailed; `verified` after a successful confirm;
     * `unverified` when no verification is in progress.
     */
    status: 'sent' | 'verified' | 'unverified';
  }
}

export interface VerifyEmailStatusResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  data: VerifyEmailStatusResponse.Data;
}

export namespace VerifyEmailStatusResponse {
  /**
   * Verification state for a DIR's authorizer email.
   */
  export interface Data {
    /**
     * Whether the DIR's authorizer email has been confirmed.
     */
    email_verified: boolean;

    /**
     * Always `email_verification`.
     */
    record_type: 'email_verification';

    /**
     * `sent` after a code is emailed; `verified` after a successful confirm;
     * `unverified` when no verification is in progress.
     */
    status: 'sent' | 'verified' | 'unverified';
  }
}

export interface VerifyEmailConfirmCodeParams {
  /**
   * The 6-digit code sent to the authorizer email.
   */
  code: string;
}

export declare namespace VerifyEmail {
  export {
    type VerifyEmailConfirmCodeResponse as VerifyEmailConfirmCodeResponse,
    type VerifyEmailSendCodeResponse as VerifyEmailSendCodeResponse,
    type VerifyEmailStatusResponse as VerifyEmailStatusResponse,
    type VerifyEmailConfirmCodeParams as VerifyEmailConfirmCodeParams,
  };
}
