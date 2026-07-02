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
   * Whether the DIR's current authorizer email has been verified.
   *
   * @example
   * ```ts
   * const emailVerificationStatusWrapped =
   *   await client.dir.verifyEmail.list(
   *     '16635d38-75a6-4481-82e8-69af60e05011',
   *   );
   * ```
   */
  list(dirID: string, options?: RequestOptions): APIPromise<EmailVerificationStatusWrapped> {
    return this._client.get(path`/dir/${dirID}/verify_email`, options);
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
   * const emailVerificationStatusWrapped =
   *   await client.dir.verifyEmail.create(
   *     '16635d38-75a6-4481-82e8-69af60e05011',
   *   );
   * ```
   */
  create(dirID: string, options?: RequestOptions): APIPromise<EmailVerificationStatusWrapped> {
    return this._client.post(path`/dir/${dirID}/verify_email`, options);
  }

  /**
   * Submit the 6-digit code that was emailed to the DIR's authorizer email. On
   * success the authorizer email is marked verified.
   *
   * For security, any failure (wrong, expired, already-used, or too many attempts)
   * returns the same generic message.
   *
   * @example
   * ```ts
   * const emailVerificationStatusWrapped =
   *   await client.dir.verifyEmail.confirm(
   *     '16635d38-75a6-4481-82e8-69af60e05011',
   *     { code: '482915' },
   *   );
   * ```
   */
  confirm(
    dirID: string,
    body: VerifyEmailConfirmParams,
    options?: RequestOptions,
  ): APIPromise<EmailVerificationStatusWrapped> {
    return this._client.post(path`/dir/${dirID}/verify_email/confirm`, { body, ...options });
  }
}

export interface EmailVerificationStatusWrapped {
  /**
   * Verification state for a DIR's authorizer email.
   */
  data: EmailVerificationStatusWrapped.Data;
}

export namespace EmailVerificationStatusWrapped {
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

export interface VerifyEmailConfirmParams {
  /**
   * The 6-digit code sent to the authorizer email.
   */
  code: string;
}

export declare namespace VerifyEmail {
  export {
    type EmailVerificationStatusWrapped as EmailVerificationStatusWrapped,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
