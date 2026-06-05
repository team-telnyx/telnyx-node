// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Phone numbers are submitted to Telnyx for vetting in batches. Batches group all numbers added in a single request under the same Letter of Authorization.
 */
export class PhoneNumberBatches extends APIResource {
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

  /**
   * List the phone-number batches submitted under a DIR. The enterprise is resolved
   * server-side from the DIR id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberBatchListResponse of client.dir.phoneNumberBatches.list(
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
  ): PagePromise<PhoneNumberBatchListResponsesDefaultFlatPagination, PhoneNumberBatchListResponse> {
    return this._client.getAPIList(
      path`/dir/${dirID}/phone_number_batches`,
      DefaultFlatPagination<PhoneNumberBatchListResponse>,
      { query, ...options },
    );
  }
}

export type PhoneNumberBatchListResponsesDefaultFlatPagination =
  DefaultFlatPagination<PhoneNumberBatchListResponse>;

export interface PhoneNumberBatchRetrieveResponse {
  /**
   * A phone-number batch groups all numbers added in a single bulk-add request.
   * Telnyx vets the batch as a unit. The response embeds the full `phone_numbers`
   * array so you can read per-number status without a separate call, plus a
   * batch-level `status` summarising the unit's progress.
   */
  data: PhoneNumberBatchRetrieveResponse.Data;
}

export namespace PhoneNumberBatchRetrieveResponse {
  /**
   * A phone-number batch groups all numbers added in a single bulk-add request.
   * Telnyx vets the batch as a unit. The response embeds the full `phone_numbers`
   * array so you can read per-number status without a separate call, plus a
   * batch-level `status` summarising the unit's progress.
   */
  export interface Data {
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
    documents?: Array<Data.Document>;

    enterprise_id?: string;

    /**
     * All phone numbers in this batch, with per-number status.
     */
    phone_numbers?: Array<Data.PhoneNumber>;

    /**
     * Aggregate batch status. Mirrors the values used on individual phone numbers
     * (`submitted`, `in_review`, `verified`, `unsuccessful`, `permanently_rejected`,
     * etc.).
     */
    status?:
      | 'submitted'
      | 'in_review'
      | 'verified'
      | 'unsuccessful'
      | 'suspended'
      | 'expired'
      | 'permanently_rejected';

    /**
     * When the batch was created (and implicitly submitted for vetting).
     */
    submitted_at?: string;

    /**
     * Number of phone numbers in this batch (length of `phone_numbers`).
     */
    total_count?: number;
  }

  export namespace Data {
    export interface Document {
      /**
       * Id returned by the Telnyx Documents API after you upload the file (upload via
       * `POST /v2/documents`; see https://developers.telnyx.com/api/documents).
       */
      document_id: string;

      /**
       * Type of supporting document. Pick the closest match to what the file actually
       * contains; `other` triggers manual vetting and may slow approval. The matching
       * short_name reference list is at `GET /v2/dir/document_types`.
       */
      document_type:
        | 'letter_of_authorization'
        | 'business_registration'
        | 'articles_of_incorporation'
        | 'tax_document'
        | 'ein_letter'
        | 'trademark_registration'
        | 'website_ownership'
        | 'business_license'
        | 'professional_license'
        | 'government_id'
        | 'utility_bill'
        | 'bank_statement'
        | 'other';

      description?: string;
    }

    export interface PhoneNumber {
      id?: string;

      /**
       * Id of the batch this number was vetted as part of.
       */
      batch_id?: string | null;

      created_at?: string;

      dir_id?: string;

      enterprise_id?: string;

      /**
       * Id of the Letter of Authorization document attached to this number's batch.
       */
      loa_document_id?: string | null;

      /**
       * E.164 with leading `+`.
       */
      phone_number?: string;

      /**
       * Populated when `status` is `unsuccessful` or `permanently_rejected`.
       */
      rejection_reason?: PhoneNumber.RejectionReason | null;

      /**
       * Phone-number lifecycle status.
       *
       * - `submitted` / `in_review` — Telnyx is reviewing the batch this number belongs
       *   to.
       * - `verified` — approved; the DIR's display identity will be shown on outbound
       *   calls from this number.
       * - `unsuccessful` — Telnyx rejected this submission; the customer may re-add to
       *   retry.
       * - `suspended` — temporarily disabled (e.g. by an active infringement claim on
       *   the DIR).
       * - `expired` — verification expired; re-add to renew.
       * - `permanently_rejected` — terminal; cannot be re-added on this or any other DIR
       *   you own.
       */
      status?:
        | 'submitted'
        | 'in_review'
        | 'verified'
        | 'unsuccessful'
        | 'suspended'
        | 'expired'
        | 'permanently_rejected';

      updated_at?: string;

      verified_at?: string | null;
    }

    export namespace PhoneNumber {
      /**
       * Populated when `status` is `unsuccessful` or `permanently_rejected`.
       */
      export interface RejectionReason {
        code?: string;

        detail?: string;

        /**
         * Customer-visible free-text comment from the Telnyx vetting team. Only the first
         * entry of `rejection_reasons` carries this; the rest are `null`.
         */
        message?: string | null;

        title?: string;
      }
    }
  }
}

/**
 * A phone-number batch groups all numbers added in a single bulk-add request.
 * Telnyx vets the batch as a unit. The response embeds the full `phone_numbers`
 * array so you can read per-number status without a separate call, plus a
 * batch-level `status` summarising the unit's progress.
 */
export interface PhoneNumberBatchListResponse {
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
  documents?: Array<PhoneNumberBatchListResponse.Document>;

  enterprise_id?: string;

  /**
   * All phone numbers in this batch, with per-number status.
   */
  phone_numbers?: Array<PhoneNumberBatchListResponse.PhoneNumber>;

  /**
   * Aggregate batch status. Mirrors the values used on individual phone numbers
   * (`submitted`, `in_review`, `verified`, `unsuccessful`, `permanently_rejected`,
   * etc.).
   */
  status?:
    | 'submitted'
    | 'in_review'
    | 'verified'
    | 'unsuccessful'
    | 'suspended'
    | 'expired'
    | 'permanently_rejected';

  /**
   * When the batch was created (and implicitly submitted for vetting).
   */
  submitted_at?: string;

  /**
   * Number of phone numbers in this batch (length of `phone_numbers`).
   */
  total_count?: number;
}

export namespace PhoneNumberBatchListResponse {
  export interface Document {
    /**
     * Id returned by the Telnyx Documents API after you upload the file (upload via
     * `POST /v2/documents`; see https://developers.telnyx.com/api/documents).
     */
    document_id: string;

    /**
     * Type of supporting document. Pick the closest match to what the file actually
     * contains; `other` triggers manual vetting and may slow approval. The matching
     * short_name reference list is at `GET /v2/dir/document_types`.
     */
    document_type:
      | 'letter_of_authorization'
      | 'business_registration'
      | 'articles_of_incorporation'
      | 'tax_document'
      | 'ein_letter'
      | 'trademark_registration'
      | 'website_ownership'
      | 'business_license'
      | 'professional_license'
      | 'government_id'
      | 'utility_bill'
      | 'bank_statement'
      | 'other';

    description?: string;
  }

  export interface PhoneNumber {
    id?: string;

    /**
     * Id of the batch this number was vetted as part of.
     */
    batch_id?: string | null;

    created_at?: string;

    dir_id?: string;

    enterprise_id?: string;

    /**
     * Id of the Letter of Authorization document attached to this number's batch.
     */
    loa_document_id?: string | null;

    /**
     * E.164 with leading `+`.
     */
    phone_number?: string;

    /**
     * Populated when `status` is `unsuccessful` or `permanently_rejected`.
     */
    rejection_reason?: PhoneNumber.RejectionReason | null;

    /**
     * Phone-number lifecycle status.
     *
     * - `submitted` / `in_review` — Telnyx is reviewing the batch this number belongs
     *   to.
     * - `verified` — approved; the DIR's display identity will be shown on outbound
     *   calls from this number.
     * - `unsuccessful` — Telnyx rejected this submission; the customer may re-add to
     *   retry.
     * - `suspended` — temporarily disabled (e.g. by an active infringement claim on
     *   the DIR).
     * - `expired` — verification expired; re-add to renew.
     * - `permanently_rejected` — terminal; cannot be re-added on this or any other DIR
     *   you own.
     */
    status?:
      | 'submitted'
      | 'in_review'
      | 'verified'
      | 'unsuccessful'
      | 'suspended'
      | 'expired'
      | 'permanently_rejected';

    updated_at?: string;

    verified_at?: string | null;
  }

  export namespace PhoneNumber {
    /**
     * Populated when `status` is `unsuccessful` or `permanently_rejected`.
     */
    export interface RejectionReason {
      code?: string;

      detail?: string;

      /**
       * Customer-visible free-text comment from the Telnyx vetting team. Only the first
       * entry of `rejection_reasons` carries this; the rest are `null`.
       */
      message?: string | null;

      title?: string;
    }
  }
}

export interface PhoneNumberBatchRetrieveParams {
  /**
   * The DIR id. Lowercase UUID.
   */
  dir_id: string;
}

export interface PhoneNumberBatchListParams extends DefaultFlatPaginationParams {
  /**
   * Restrict to batches whose aggregate status equals this value.
   */
  'filter[status]'?:
    | 'submitted'
    | 'in_review'
    | 'verified'
    | 'unsuccessful'
    | 'suspended'
    | 'expired'
    | 'permanently_rejected';
}

export declare namespace PhoneNumberBatches {
  export {
    type PhoneNumberBatchRetrieveResponse as PhoneNumberBatchRetrieveResponse,
    type PhoneNumberBatchListResponse as PhoneNumberBatchListResponse,
    type PhoneNumberBatchListResponsesDefaultFlatPagination as PhoneNumberBatchListResponsesDefaultFlatPagination,
    type PhoneNumberBatchRetrieveParams as PhoneNumberBatchRetrieveParams,
    type PhoneNumberBatchListParams as PhoneNumberBatchListParams,
  };
}
