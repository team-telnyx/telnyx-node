// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Verify ownership of a DIR's authorizer email. A short code is emailed and confirmed.
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
   * address. The code goes to the authorizer, not to the caller. If the authorizer
   * is someone else (for example a client's executive), that person has to share the
   * code with whoever is completing setup.
   *
   * How long the code lasts: 15 minutes by default. 8 hours when the DIR has a call
   * center (BPO) linked through `bpo_authorizations` whose authorization is pending
   * review or approved (a rejected authorization does not count). Link the call
   * center before you send the code: a code sent before the link keeps the 15-minute
   * window, and a code sent after the link lasts 8 hours. The email states the
   * window, and `expires_at` in the response always shows the exact expiry.
   *
   * To resend, call this endpoint again. Each send issues a fresh code and
   * invalidates the previous one. Sends are limited to one every 60 seconds and 10
   * per DIR per UTC day. A throttled send returns `429` with `retry_after_secs` and
   * `sends_remaining_today` in the error `meta`.
   *
   * Submit the code to `POST /dir/{dir_id}/verify_email/confirm`.
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

/**
 * Verification state for a DIR's authorizer email.
 */
export interface EmailVerificationStatus {
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

  /**
   * When the outstanding code stops being accepted. Null when no verification is in
   * progress.
   */
  expires_at?: string | null;

  /**
   * How many more codes may be requested for this DIR today. Null when the daily cap
   * does not apply.
   */
  sends_remaining_today?: number | null;
}

export interface EmailVerificationStatusWrapped {
  /**
   * Verification state for a DIR's authorizer email.
   */
  data: EmailVerificationStatus;
}

export interface VerifyEmailConfirmParams {
  /**
   * The 6-digit code sent to the authorizer email.
   */
  code: string;
}

export declare namespace VerifyEmail {
  export {
    type EmailVerificationStatus as EmailVerificationStatus,
    type EmailVerificationStatusWrapped as EmailVerificationStatusWrapped,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
