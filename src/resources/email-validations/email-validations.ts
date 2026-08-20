// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailValidationsAPI from './email-validations';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateParams,
  BatchCreateResponse,
  BatchRetrieveResponse,
  EmailValidationBatchStatus,
} from './batch';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Validate email addresses synchronously or in asynchronous batches.
 */
export class EmailValidations extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Validates a single email address and returns deliverability checks.
   *
   * @example
   * ```ts
   * const emailValidation =
   *   await client.emailValidations.create({
   *     email: 'user@example.com',
   *   });
   * ```
   */
  create(
    params: EmailValidationCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmailValidationCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email_validations', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface EmailValidationCheck {
  pass: boolean;

  /**
   * Human-readable check detail. Omitted when nil.
   */
  details?: string;
}

export interface EmailValidationChecks {
  disposable: EmailValidationCheck;

  mx: EmailValidationCheck;

  role_based: EmailValidationCheck;

  syntax: EmailValidationCheck;

  typo: EmailValidationChecks.Typo;
}

export namespace EmailValidationChecks {
  export interface Typo extends EmailValidationsAPI.EmailValidationCheck {
    /**
     * Suggested correction for common typos. Omitted when nil.
     */
    suggestion?: string;
  }
}

export interface EmailValidationCreateResponse {
  data: EmailValidationCreateResponse.Data;
}

export namespace EmailValidationCreateResponse {
  export interface Data {
    checks: EmailValidationsAPI.EmailValidationChecks;

    email: string;

    record_type: 'email_validation';

    risk_score: number;

    valid: boolean;

    /**
     * Suggested correction for typo. Omitted when nil.
     */
    did_you_mean?: string;
  }
}

export interface EmailValidationCreateParams {
  /**
   * Body param: Email address to validate. Any non-empty string is accepted; invalid
   * syntax returns valid=false rather than a request error.
   */
  email: string;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
}

EmailValidations.Batch = Batch;

export declare namespace EmailValidations {
  export {
    type EmailValidationCheck as EmailValidationCheck,
    type EmailValidationChecks as EmailValidationChecks,
    type EmailValidationCreateResponse as EmailValidationCreateResponse,
    type EmailValidationCreateParams as EmailValidationCreateParams,
  };

  export {
    Batch as Batch,
    type EmailValidationBatchStatus as EmailValidationBatchStatus,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchCreateParams as BatchCreateParams,
  };
}
