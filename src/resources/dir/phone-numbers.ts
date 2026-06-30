// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Associate phone numbers with a verified DIR so calls from those numbers carry the DIR's display identity.
 */
export class PhoneNumbers extends APIResource {
  /**
   * List the phone numbers registered under a DIR. The enterprise is resolved
   * server-side from the DIR id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberListResponse of client.dir.phoneNumbers.list(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    dirID: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberListResponsesDefaultFlatPagination, PhoneNumberListResponse> {
    return this._client.getAPIList(
      path`/dir/${dirID}/phone_numbers`,
      DefaultFlatPagination<PhoneNumberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Register phone numbers under a DIR. The enterprise is resolved server-side from
   * the DIR id. Same body, failure modes, and batch semantics whichever path form
   * you use.
   *
   * **Pricing:** This is a billable action. See https://telnyx.com/pricing/numbers
   * for current pricing.
   *
   * @example
   * ```ts
   * const response = await client.dir.phoneNumbers.add(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   {
   *     documents: [
   *       {
   *         document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
   *         document_type: 'letter_of_authorization',
   *         description:
   *           'LOA authorising Telnyx to register these numbers under the DIR.',
   *       },
   *     ],
   *     phone_numbers: ['+19493253498', '+12134445566'],
   *   },
   * );
   * ```
   */
  add(
    dirID: string,
    body: PhoneNumberAddParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberAddResponse> {
    return this._client.post(path`/dir/${dirID}/phone_numbers`, { body, ...options });
  }

  /**
   * Deregister phone numbers from a DIR. The enterprise is resolved server-side from
   * the DIR id. Returns a partial-success envelope.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.dir.phoneNumbers.remove(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   { phone_numbers: ['+19493253498'] },
   * );
   * ```
   */
  remove(
    dirID: string,
    body: PhoneNumberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberRemoveResponse> {
    return this._client.delete(path`/dir/${dirID}/phone_numbers`, { body, ...options });
  }
}

export type PhoneNumberListResponsesDefaultFlatPagination = DefaultFlatPagination<PhoneNumberListResponse>;

export interface PhoneNumberListResponse {
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
  rejection_reason?: PhoneNumberListResponse.RejectionReason | null;

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

export namespace PhoneNumberListResponse {
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

/**
 * Bulk-add success response (HTTP 201). All numbers in the request were accepted
 * into a single new batch. Every entry in `data` shares the same `batch_id` - read
 * it from any element to obtain the batch id for subsequent
 * `GET .../phone_number_batches/{batch_id}` calls. If any number in the request
 * fails (schema-invalid, not in inventory, already attached to another DIR, etc.)
 * the entire request is rejected with HTTP 400 and the canonical Telnyx error
 * envelope; the success body described here is therefore an all-or-nothing
 * payload.
 */
export interface PhoneNumberAddResponse {
  /**
   * Phone numbers accepted into the new batch. List order mirrors the request order.
   * Each element shares the same `batch_id`.
   */
  data: Array<PhoneNumberAddResponse.Data>;
}

export namespace PhoneNumberAddResponse {
  export interface Data {
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
    rejection_reason?: Data.RejectionReason | null;

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

  export namespace Data {
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

/**
 * Bulk-delete partial-success response. `data` is the list of phone numbers that
 * were soft-deleted. `meta.errors` holds per-number failures (e.g. number not
 * associated with this DIR). When EVERY number in the request fails, the endpoint
 * instead returns 400 with the canonical Telnyx error envelope and `data`/`meta`
 * are absent.
 */
export interface PhoneNumberRemoveResponse {
  /**
   * Phone numbers that were successfully soft-deleted. Bare E.164 strings.
   */
  data: Array<string>;

  meta: PhoneNumberRemoveResponse.Meta;
}

export namespace PhoneNumberRemoveResponse {
  export interface Meta {
    /**
     * Per-number failures that did not block the call. Each entry has `phone_number`,
     * `code`, `title`, `detail`.
     */
    errors: Array<Meta.Error>;
  }

  export namespace Meta {
    /**
     * Per-number error returned by the bulk-delete endpoint. Bulk-add does not use
     * this shape - it returns a 400 with the canonical envelope grouping numbers by
     * failure category.
     */
    export interface Error {
      /**
       * Stable per-number error code. Currently only `not_associated` is emitted, when
       * the number is not attached to this DIR.
       */
      code: 'not_associated';

      detail: string;

      phone_number: string;

      title: string;
    }
  }
}

export interface PhoneNumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by phone-number status.
   */
  status?:
    | 'submitted'
    | 'in_review'
    | 'verified'
    | 'unsuccessful'
    | 'suspended'
    | 'expired'
    | 'permanently_rejected';
}

export interface PhoneNumberAddParams {
  /**
   * Supporting documents covering this batch. At least one entry with
   * `document_type: letter_of_authorization` is required - the LOA authorises Telnyx
   * to register these numbers under the DIR. Each `document_id` must come from the
   * Telnyx Documents API. Additional document types (e.g. business registration) may
   * be included alongside the LOA.
   */
  documents: Array<PhoneNumberAddParams.Document>;

  /**
   * 1–15 phone numbers in E.164 format. 10-digit US numbers are auto-prefixed with
   * `1`.
   */
  phone_numbers: Array<string>;
}

export namespace PhoneNumberAddParams {
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
}

export interface PhoneNumberRemoveParams {
  phone_numbers: Array<string>;
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberAddResponse as PhoneNumberAddResponse,
    type PhoneNumberRemoveResponse as PhoneNumberRemoveResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberAddParams as PhoneNumberAddParams,
    type PhoneNumberRemoveParams as PhoneNumberRemoveParams,
  };
}
