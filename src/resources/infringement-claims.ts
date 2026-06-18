// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Trademark or impersonation claims filed against your DIR. Customers may contest a claim with supporting evidence.
 */
export class InfringementClaims extends APIResource {
  /**
   * Retrieve a single claim by id. Returns `404` if the claim does not exist or is
   * not against a DIR you own.
   *
   * @example
   * ```ts
   * const infringementClaim =
   *   await client.infringementClaims.retrieve(
   *     'e379fbc8-cd83-4bef-a280-a0ac9d00dcf8',
   *   );
   * ```
   */
  retrieve(claimID: string, options?: RequestOptions): APIPromise<InfringementClaimRetrieveResponse> {
    return this._client.get(path`/infringement_claims/${claimID}`, options);
  }

  /**
   * Submit a written response and supporting documents disputing the claim. The
   * first call moves the claim from `pending` to `contested`; subsequent calls
   * append supplementary evidence without changing status. The `documents[]` you
   * attach are aggregated across rounds in the claim's `contest_documents` field.
   *
   * Only `pending` and `contested` claims accept new evidence. A `resolved` claim
   * returns `400`.
   *
   * Failure modes:
   *
   * - `400` - the claim is `resolved` (terminal); cannot be contested further.
   * - `404` - the claim does not exist or is not against a DIR you own.
   * - `422` - `contest_notes` is too short (< 10 chars), too long (> 2000 chars),
   *   `documents` is > 20 entries, or a `document_id` is duplicated within the same
   *   submission.
   *
   * @example
   * ```ts
   * const response = await client.infringementClaims.contest(
   *   'e379fbc8-cd83-4bef-a280-a0ac9d00dcf8',
   *   {
   *     contest_notes:
   *       'We own the trademark outright; our registration precedes the claimant by three years. See attached certificate.',
   *     documents: [
   *       {
   *         document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
   *         document_type: 'trademark_registration',
   *         description: 'USPTO trademark certificate.',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  contest(
    claimID: string,
    body: InfringementClaimContestParams,
    options?: RequestOptions,
  ): APIPromise<InfringementClaimContestResponse> {
    return this._client.post(path`/infringement_claims/${claimID}/contest`, { body, ...options });
  }
}

export interface InfringementClaimRetrieveResponse {
  data: InfringementClaimRetrieveResponse.Data;
}

export namespace InfringementClaimRetrieveResponse {
  export interface Data {
    id?: string;

    /**
     * When the claim was filed (set by the claimant's representative at file time).
     */
    claim_date?: string;

    claim_description?: string;

    /**
     * Category of infringement being claimed.
     */
    claim_type?: 'trademark' | 'copyright';

    claimant_contact?: string;

    claimant_name?: string;

    /**
     * Aggregated across all customer contest submissions on this claim.
     */
    contest_documents?: Array<Data.ContestDocument>;

    /**
     * Per-round submission audit trail. Each entry records one
     * `POST /infringement_claims/{id}/contest` call (notes, timestamp, document
     * count). Aggregated documents live on `contest_documents`.
     */
    contest_history?: Array<Data.ContestHistory>;

    created_at?: string;

    /**
     * Snapshot of the DIR the claim is filed against, embedded for convenience.
     */
    dir?: Data.Dir;

    dir_id?: string;

    enterprise_id?: string;

    /**
     * Set only when `status` is `resolved`.
     */
    resolution?: 'upheld' | 'rejected' | 'modified' | null;

    resolution_date?: string | null;

    resolution_notes?: string | null;

    /**
     * Lifecycle status. `pending` - newly filed; the DIR is auto-suspended.
     * `contested` - you have submitted contest evidence; awaiting Telnyx review.
     * `resolved` - final.
     */
    status?: 'pending' | 'contested' | 'resolved';

    updated_at?: string;
  }

  export namespace Data {
    export interface ContestDocument {
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

    /**
     * One round of customer contest evidence on an infringement claim. The aggregated
     * documents across rounds live on the parent claim's `contest_documents`; this
     * submission record carries only the per-round notes and document count.
     */
    export interface ContestHistory {
      document_count?: number;

      notes?: string;

      submitted_at?: string;
    }

    /**
     * Snapshot of the DIR the claim is filed against, embedded for convenience.
     */
    export interface Dir {
      id?: string;

      display_name?: string;

      enterprise_id?: string;

      /**
       * DIR lifecycle status.
       *
       * - `draft` - newly created; editable; not yet submitted.
       * - `submitted` / `in_review` - Telnyx is reviewing.
       * - `verified` - approved; phone numbers may be attached.
       * - `rejected` - Telnyx rejected this submission; `rejection_reasons` is
       *   populated; customer can edit and resubmit.
       * - `unsuccessful` - system-side error during processing; customer can edit and
       *   resubmit.
       * - `suspended` - temporarily disabled (e.g. by an active infringement claim).
       * - `expired` - verification expired; customer must resubmit.
       * - `infringement_claimed` - a trademark/impersonation claim is open against this
       *   DIR.
       * - `permanently_rejected` - terminal; cannot be resubmitted.
       */
      status?:
        | 'draft'
        | 'submitted'
        | 'in_review'
        | 'verified'
        | 'rejected'
        | 'unsuccessful'
        | 'suspended'
        | 'expired'
        | 'infringement_claimed'
        | 'permanently_rejected';
    }
  }
}

export interface InfringementClaimContestResponse {
  data: InfringementClaimContestResponse.Data;
}

export namespace InfringementClaimContestResponse {
  export interface Data {
    id?: string;

    /**
     * When the claim was filed (set by the claimant's representative at file time).
     */
    claim_date?: string;

    claim_description?: string;

    /**
     * Category of infringement being claimed.
     */
    claim_type?: 'trademark' | 'copyright';

    claimant_contact?: string;

    claimant_name?: string;

    /**
     * Aggregated across all customer contest submissions on this claim.
     */
    contest_documents?: Array<Data.ContestDocument>;

    /**
     * Per-round submission audit trail. Each entry records one
     * `POST /infringement_claims/{id}/contest` call (notes, timestamp, document
     * count). Aggregated documents live on `contest_documents`.
     */
    contest_history?: Array<Data.ContestHistory>;

    created_at?: string;

    /**
     * Snapshot of the DIR the claim is filed against, embedded for convenience.
     */
    dir?: Data.Dir;

    dir_id?: string;

    enterprise_id?: string;

    /**
     * Set only when `status` is `resolved`.
     */
    resolution?: 'upheld' | 'rejected' | 'modified' | null;

    resolution_date?: string | null;

    resolution_notes?: string | null;

    /**
     * Lifecycle status. `pending` - newly filed; the DIR is auto-suspended.
     * `contested` - you have submitted contest evidence; awaiting Telnyx review.
     * `resolved` - final.
     */
    status?: 'pending' | 'contested' | 'resolved';

    updated_at?: string;
  }

  export namespace Data {
    export interface ContestDocument {
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

    /**
     * One round of customer contest evidence on an infringement claim. The aggregated
     * documents across rounds live on the parent claim's `contest_documents`; this
     * submission record carries only the per-round notes and document count.
     */
    export interface ContestHistory {
      document_count?: number;

      notes?: string;

      submitted_at?: string;
    }

    /**
     * Snapshot of the DIR the claim is filed against, embedded for convenience.
     */
    export interface Dir {
      id?: string;

      display_name?: string;

      enterprise_id?: string;

      /**
       * DIR lifecycle status.
       *
       * - `draft` - newly created; editable; not yet submitted.
       * - `submitted` / `in_review` - Telnyx is reviewing.
       * - `verified` - approved; phone numbers may be attached.
       * - `rejected` - Telnyx rejected this submission; `rejection_reasons` is
       *   populated; customer can edit and resubmit.
       * - `unsuccessful` - system-side error during processing; customer can edit and
       *   resubmit.
       * - `suspended` - temporarily disabled (e.g. by an active infringement claim).
       * - `expired` - verification expired; customer must resubmit.
       * - `infringement_claimed` - a trademark/impersonation claim is open against this
       *   DIR.
       * - `permanently_rejected` - terminal; cannot be resubmitted.
       */
      status?:
        | 'draft'
        | 'submitted'
        | 'in_review'
        | 'verified'
        | 'rejected'
        | 'unsuccessful'
        | 'suspended'
        | 'expired'
        | 'infringement_claimed'
        | 'permanently_rejected';
    }
  }
}

export interface InfringementClaimContestParams {
  /**
   * Customer's response to the claim. 10–2000 characters.
   */
  contest_notes: string;

  /**
   * Up to 20 supporting documents per submission. `document_id` must be unique
   * within this submission. Documents are aggregated into the claim's
   * `contest_documents` across all submissions.
   */
  documents?: Array<InfringementClaimContestParams.Document>;
}

export namespace InfringementClaimContestParams {
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

export declare namespace InfringementClaims {
  export {
    type InfringementClaimRetrieveResponse as InfringementClaimRetrieveResponse,
    type InfringementClaimContestResponse as InfringementClaimContestResponse,
    type InfringementClaimContestParams as InfringementClaimContestParams,
  };
}
