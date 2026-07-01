// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirAPI from './dir';
import * as PhoneNumbersAPI from './phone-numbers';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Phone numbers are submitted to Telnyx for vetting in batches. Batches group all numbers added in a single request under the same Letter of Authorization.
 */
export class PhoneNumberBatches extends APIResource {
  /**
   * List the phone-number batches submitted under a DIR. The enterprise is resolved
   * server-side from the DIR id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberBatch of client.dir.phoneNumberBatches.list(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    dirID: string,
    query: PhoneNumberBatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberBatchesDefaultFlatPagination, PhoneNumberBatch> {
    return this._client.getAPIList(
      path`/dir/${dirID}/phone_number_batches`,
      DefaultFlatPagination<PhoneNumberBatch>,
      { query, ...options },
    );
  }

  /**
   * Get a single phone-number batch by id. The enterprise is resolved server-side
   * from the DIR id.
   *
   * @example
   * ```ts
   * const phoneNumberBatch =
   *   await client.dir.phoneNumberBatches.retrieve(
   *     '0a4b1f5e-2f12-4c0c-9a98-9b3a7d8b8e62',
   *     { dir_id: '16635d38-75a6-4481-82e8-69af60e05011' },
   *   );
   * ```
   */
  retrieve(
    batchID: string,
    params: PhoneNumberBatchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberBatchRetrieveResponse> {
    const { dir_id } = params;
    return this._client.get(path`/dir/${dir_id}/phone_number_batches/${batchID}`, options);
  }
}

export type PhoneNumberBatchesDefaultFlatPagination = DefaultFlatPagination<PhoneNumberBatch>;

/**
 * Phone-number lifecycle status.
 *
 * - `submitted` / `in_review` - Telnyx is reviewing the batch this number belongs
 *   to.
 * - `verified` - approved; the DIR's display identity will be shown on outbound
 *   calls from this number.
 * - `unsuccessful` - Telnyx rejected this submission; the customer may re-add to
 *   retry.
 * - `suspended` - temporarily disabled (e.g. by an active infringement claim on
 *   the DIR).
 * - `expired` - verification expired; re-add to renew.
 * - `permanently_rejected` - terminal; cannot be re-added on this or any other DIR
 *   you own.
 */
export type DirPhoneNumberStatus =
  | 'submitted'
  | 'in_review'
  | 'verified'
  | 'unsuccessful'
  | 'suspended'
  | 'expired'
  | 'permanently_rejected';

/**
 * A phone-number batch groups all numbers added in a single bulk-add request.
 * Telnyx vets the batch as a unit. The response embeds the full `phone_numbers`
 * array so you can read per-number status without a separate call, plus a
 * batch-level `status` summarising the unit's progress.
 */
export interface PhoneNumberBatch {
  batch_id?: string;

  /**
   * The DIR's display name at the time the batch was read.
   */
  dir_display_name?: string;

  dir_id?: string;

  /**
   * Documents attached to this batch (e.g. a Letter of Authorization). Empty when
   * none were supplied at add time.
   */
  documents?: Array<DirAPI.Document>;

  enterprise_id?: string;

  /**
   * All phone numbers in this batch, with per-number status.
   */
  phone_numbers?: Array<PhoneNumbersAPI.DirPhoneNumber>;

  /**
   * Aggregate batch status. Mirrors the values used on individual phone numbers
   * (`submitted`, `in_review`, `verified`, `unsuccessful`, `permanently_rejected`,
   * etc.).
   */
  status?: DirPhoneNumberStatus;

  /**
   * When the batch was created (and implicitly submitted for vetting).
   */
  submitted_at?: string;

  /**
   * Number of phone numbers in this batch (length of `phone_numbers`).
   */
  total_count?: number;
}

export interface PhoneNumberBatchRetrieveResponse {
  /**
   * A phone-number batch groups all numbers added in a single bulk-add request.
   * Telnyx vets the batch as a unit. The response embeds the full `phone_numbers`
   * array so you can read per-number status without a separate call, plus a
   * batch-level `status` summarising the unit's progress.
   */
  data: PhoneNumberBatch;
}

export interface PhoneNumberBatchListParams extends DefaultFlatPaginationParams {
  /**
   * Restrict to batches whose aggregate status equals this value.
   */
  'filter[status]'?: DirPhoneNumberStatus;
}

export interface PhoneNumberBatchRetrieveParams {
  /**
   * The DIR id. Lowercase UUID.
   */
  dir_id: string;
}

export declare namespace PhoneNumberBatches {
  export {
    type DirPhoneNumberStatus as DirPhoneNumberStatus,
    type PhoneNumberBatch as PhoneNumberBatch,
    type PhoneNumberBatchRetrieveResponse as PhoneNumberBatchRetrieveResponse,
    type PhoneNumberBatchesDefaultFlatPagination as PhoneNumberBatchesDefaultFlatPagination,
    type PhoneNumberBatchListParams as PhoneNumberBatchListParams,
    type PhoneNumberBatchRetrieveParams as PhoneNumberBatchRetrieveParams,
  };
}
