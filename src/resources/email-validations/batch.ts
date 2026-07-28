// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchAPI from './batch';
import * as EmailValidationsAPI from './email-validations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Validate email addresses synchronously or in asynchronous batches.
 */
export class Batch extends APIResource {
  /**
   * Creates an asynchronous batch validation job for up to 1,000 email addresses.
   *
   * @example
   * ```ts
   * const batch = await client.emailValidations.batch.create({
   *   emails: ['user@example.com', 'admin@example.org'],
   *   webhook_url:
   *     'https://example.com/webhooks/email-validation',
   * });
   * ```
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email_validations/batch', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the current status and, once completed, validation results for a batch
   * job.
   *
   * @example
   * ```ts
   * const batch = await client.emailValidations.batch.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BatchRetrieveResponse> {
    return this._client.get(path`/email_validations/batch/${id}`, options);
  }
}

export type EmailValidationBatchStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface BatchCreateResponse {
  /**
   * Shape returned by the create endpoint. Includes duplicates_removed.
   */
  data: BatchCreateResponse.Data;
}

export namespace BatchCreateResponse {
  /**
   * Shape returned by the create endpoint. Includes duplicates_removed.
   */
  export interface Data {
    id: string;

    duplicates_removed: number;

    record_type: 'email_validation_batch';

    status: BatchAPI.EmailValidationBatchStatus;

    total: number;

    webhook_url?: string;
  }
}

export interface BatchRetrieveResponse {
  /**
   * Shape returned by the GET endpoint. Does not include duplicates_removed.
   */
  data: BatchRetrieveResponse.Data;
}

export namespace BatchRetrieveResponse {
  /**
   * Shape returned by the GET endpoint. Does not include duplicates_removed.
   */
  export interface Data {
    id: string;

    record_type: 'email_validation_batch';

    status: BatchAPI.EmailValidationBatchStatus;

    total: number;

    completed_at?: string;

    /**
     * Map keyed by original email address. Present only when the batch is completed.
     */
    results?: { [key: string]: Data.Results };

    webhook_url?: string;
  }

  export namespace Data {
    export interface Results {
      checks: Results.Checks;

      email: string;

      risk_score: number;

      valid: boolean;

      /**
       * Suggested correction for typo. Omitted when nil.
       */
      did_you_mean?: string;
    }

    export namespace Results {
      export interface Checks {
        disposable: EmailValidationsAPI.EmailValidationCheck;

        mx: EmailValidationsAPI.EmailValidationCheck;

        role_based: EmailValidationsAPI.EmailValidationCheck;

        syntax: EmailValidationsAPI.EmailValidationCheck;

        typo: Checks.Typo;
      }

      export namespace Checks {
        export interface Typo extends EmailValidationsAPI.EmailValidationCheck {
          /**
           * Suggested correction for common typos. Omitted when nil.
           */
          suggestion?: string;
        }
      }
    }
  }
}

export interface BatchCreateParams {
  /**
   * Body param
   */
  emails: Array<string>;

  /**
   * Body param: URL for batch completion webhook. Empty string is treated as
   * omitted. SSRF-protected; private/reserved IPs and internal hostnames are
   * rejected.
   */
  webhook_url?: string;

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

export declare namespace Batch {
  export {
    type EmailValidationBatchStatus as EmailValidationBatchStatus,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchCreateParams as BatchCreateParams,
  };
}
