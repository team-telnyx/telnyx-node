// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * Async CSV import of competitor suppression lists.
 */
export class Imports extends APIResource {
  /**
   * Accepts `multipart/form-data` with a `file` field (the CSV) and an optional
   * `block_ttl_days` (integer >0, default 30). Validates:
   *
   * - content ≤ 25 MiB, else `413`
   * - row count ≤ 250 000, else `413`
   * - header-only / all-blank / undetectable provider → `400` Returns `202` with the
   *   import record (status `pending`); an Oban worker (`EmailBlockImportWorker`,
   *   max_attempts 3) transitions `pending → processing → completed | failed`.
   *   `block_ttl_days` applies only to imported `manual_block` rows; other reasons
   *   get `expires_at: nil`. Provider is auto-detected from the CSV header
   *   (`sendgrid` / `mailgun` / `ses` / `generic`).
   *
   * @example
   * ```ts
   * const emailBlockImportResponse =
   *   await client.emailBlocks.imports.create({
   *     file: fs.createReadStream('path/to/file'),
   *     block_ttl_days: 30,
   *   });
   * ```
   */
  create(body: ImportCreateParams, options?: RequestOptions): APIPromise<EmailBlockImportResponse> {
    return this._client.post(
      '/email_blocks/import',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Account-scoped fetch (cross-account → 404; malformed UUID → 404). Nullable
   * fields are omitted until terminal: `provider`/`completed_at` when nil;
   * `processed_rows`/`created_count`/`existing_count`/ `skipped_count`/`error_count`
   * only when `status == completed`; `errors` only when non-empty; `failure_reason`
   * only on terminal failure.
   *
   * @example
   * ```ts
   * const emailBlockImportResponse =
   *   await client.emailBlocks.imports.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailBlockImportResponse> {
    return this._client.get(path`/email_blocks/import/${id}`, options);
  }
}

/**
 * Import job. Schema fields hidden: `account_id`, `csv_content`, `block_ttl_days`.
 * Nullable fields use the omit-nullable pattern.
 */
export interface EmailBlockImport {
  id: string;

  created_at: string;

  /**
   * View-only.
   */
  record_type: 'email_block_import';

  status: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Data-row count at upload.
   */
  total: number;

  updated_at: string;

  /**
   * Omitted until terminal success.
   */
  completed_at?: string;

  /**
   * Only when `status == completed`.
   */
  created_count?: number;

  /**
   * Only when `status == completed`.
   */
  error_count?: number;

  /**
   * `{row_number: reason}`; only rendered when non-empty.
   */
  errors?: { [key: string]: string };

  /**
   * Only when `status == completed`.
   */
  existing_count?: number;

  /**
   * Only on terminal failure.
   */
  failure_reason?: string;

  /**
   * Only when `status == completed`.
   */
  processed_rows?: number;

  /**
   * Omitted when nil.
   */
  provider?: 'sendgrid' | 'mailgun' | 'ses' | 'generic';

  /**
   * Only when `status == completed`.
   */
  skipped_count?: number;
}

export interface EmailBlockImportResponse {
  /**
   * Import job. Schema fields hidden: `account_id`, `csv_content`, `block_ttl_days`.
   * Nullable fields use the omit-nullable pattern.
   */
  data: EmailBlockImport;
}

export interface ImportCreateParams {
  /**
   * The CSV file (Plug.Upload). Missing/non-upload → 400.
   */
  file: Uploadable;

  /**
   * TTL for imported `manual_block` rows; other reasons get `expires_at: null`.
   * Invalid/missing → falls back to 30.
   */
  block_ttl_days?: number;
}

export declare namespace Imports {
  export {
    type EmailBlockImport as EmailBlockImport,
    type EmailBlockImportResponse as EmailBlockImportResponse,
    type ImportCreateParams as ImportCreateParams,
  };
}
