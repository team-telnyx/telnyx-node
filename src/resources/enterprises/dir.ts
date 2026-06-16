// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * A Display Identity Record (DIR) is the verified calling identity (display name, logo, call reasons) shown to recipients on outbound calls.
 */
export class Dir extends APIResource {
  /**
   * Create a new DIR under the given enterprise. The DIR starts in `draft` status;
   * it must be submitted (`POST .../submit`) and approved by Telnyx before any phone
   * number can be attached.
   *
   * **Field rules**
   *
   * - `display_name`: 1–35 characters, no emoji or whitespace-only strings; this is
   *   the name shown to recipients.
   * - `call_reasons`: 1–10 strings, each ≤64 characters; describe why your business
   *   calls customers (e.g. 'Appointment reminders', 'Billing inquiries'). Validate
   *   the wording against `POST /call_reasons/validate`.
   * - `logo_url`: HTTPS URL (max 128 chars) to a 256×256 BMP (max 1 MB). The image
   *   is downloaded and hashed at submission time.
   * - `documents`: up to 20 entries; each `document_id` must be obtained by
   *   uploading the file via the Telnyx Documents API first. Within one DIR a
   *   `document_id` may only appear once.
   * - `certify_brand_is_accurate`, `certify_no_shaft_content`,
   *   `certify_ip_ownership` MUST all be `true`.
   *
   * **Failure modes**
   *
   * - `422` - validation error; `errors[].source.pointer` names the offending field.
   * - `403` - Branded Calling not activated on this enterprise (see
   *   `POST /enterprises/{id}/branded_calling`).
   * - `404` - enterprise does not exist or does not belong to your account.
   *
   * @example
   * ```ts
   * const dir = await client.enterprises.dir.create(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   {
   *     authorizer_email: 'sam@acmeplumbing.example.com',
   *     authorizer_name: 'Sam Owner',
   *     certify_brand_is_accurate: true,
   *     certify_ip_ownership: true,
   *     certify_no_shaft_content: true,
   *     display_name: 'Acme Plumbing',
   *     call_reasons: [
   *       'Appointment reminders',
   *       'Billing inquiries',
   *     ],
   *   },
   * );
   * ```
   */
  create(
    enterpriseID: string,
    body: DirCreateParams,
    options?: RequestOptions,
  ): APIPromise<DirCreateResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/dir`, { body, ...options });
  }

  /**
   * Return the DIRs (Display Identity Records) belonging to a single enterprise.
   * Pagination is JSON:API style (`page[number]`, `page[size]`, max 250). Supports
   * `filter[]` query params: `filter[status]`, `filter[display_name][contains]`,
   * `filter[call_reason][contains]`, plus the renewal-window filters
   * `filter[expiring_at][gte]` / `filter[expiring_at][lte]` and the convenience
   * `filter[expiring_within_days]` (mutually exclusive with the explicit gte/lte
   * form). Sortable by `created_at`, `updated_at`, `display_name`, `status`,
   * `submitted_at`, `verified_at`, `expiring_at` (prefix `-` for descending; default
   * `-created_at`).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dirListResponse of client.enterprises.dir.list(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    enterpriseID: string,
    query: DirListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DirListResponsesDefaultFlatPagination, DirListResponse> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/dir`,
      DefaultFlatPagination<DirListResponse>,
      { query, ...options },
    );
  }
}

export type DirListResponsesDefaultFlatPagination = DefaultFlatPagination<DirListResponse>;

export interface DirCreateResponse {
  data: DirCreateResponse.Data;
}

export namespace DirCreateResponse {
  export interface Data {
    id?: string;

    authorizer_email?: string | null;

    authorizer_name?: string | null;

    call_reasons?: Array<Data.CallReason>;

    certify_brand_is_accurate?: boolean;

    certify_ip_ownership?: boolean;

    certify_no_shaft_content?: boolean;

    created_at?: string;

    display_name?: string;

    documents?: Array<Data.Document> | null;

    enterprise_id?: string;

    expiring_at?: string | null;

    logo_url?: string | null;

    rejected_at?: string | null;

    /**
     * Populated when `status` is `rejected`; cleared on `/submit` or successful
     * approval.
     */
    rejection_reasons?: Array<Data.RejectionReason> | null;

    reselling?: boolean;

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

    submitted_at?: string | null;

    updated_at?: string;

    verified_at?: string | null;
  }

  export namespace Data {
    export interface CallReason {
      created_at?: string;

      reason?: string;
    }

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

export interface DirListResponse {
  id?: string;

  authorizer_email?: string | null;

  authorizer_name?: string | null;

  call_reasons?: Array<DirListResponse.CallReason>;

  certify_brand_is_accurate?: boolean;

  certify_ip_ownership?: boolean;

  certify_no_shaft_content?: boolean;

  created_at?: string;

  display_name?: string;

  documents?: Array<DirListResponse.Document> | null;

  enterprise_id?: string;

  expiring_at?: string | null;

  logo_url?: string | null;

  rejected_at?: string | null;

  /**
   * Populated when `status` is `rejected`; cleared on `/submit` or successful
   * approval.
   */
  rejection_reasons?: Array<DirListResponse.RejectionReason> | null;

  reselling?: boolean;

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

  submitted_at?: string | null;

  updated_at?: string;

  verified_at?: string | null;
}

export namespace DirListResponse {
  export interface CallReason {
    created_at?: string;

    reason?: string;
  }

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

export interface DirCreateParams {
  /**
   * Contact email of the authorizer. Telnyx may send verification or
   * infringement-notice email here; use a monitored mailbox.
   */
  authorizer_email: string;

  /**
   * Name of the person at your enterprise who is authorizing this DIR registration.
   * Must be a real individual (used for audit and trademark-claim contests).
   */
  authorizer_name: string;

  /**
   * Must be `true`.
   */
  certify_brand_is_accurate: true;

  /**
   * Must be `true`. Confirms ownership of any logos/trademarks shown.
   */
  certify_ip_ownership: true;

  /**
   * Must be `true`. Confirms this DIR is not used for SHAFT content (Sex, Hate,
   * Alcohol, Firearms, Tobacco) where prohibited.
   */
  certify_no_shaft_content: true;

  /**
   * Name shown to call recipients. No emoji; not whitespace-only.
   */
  display_name: string;

  /**
   * 1–10 reasons your business calls customers. Validate phrasing against
   * `POST /call_reasons/validate`.
   */
  call_reasons?: Array<string>;

  /**
   * Supporting documents. Each `document_id` may appear at most once on a DIR.
   */
  documents?: Array<DirCreateParams.Document>;

  /**
   * Publicly accessible HTTPS URL (max 128 chars) to a 256x256 BMP logo (max 1 MB).
   */
  logo_url?: string;

  /**
   * Set to true if your organization places calls on behalf of other enterprises
   * (BPO/reseller).
   */
  reselling?: boolean;
}

export namespace DirCreateParams {
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

export interface DirListParams extends DefaultFlatPaginationParams {
  /**
   * Case-insensitive partial match on call reason.
   */
  'filter[call_reason][contains]'?: string;

  /**
   * Case-insensitive partial match on display name.
   */
  'filter[display_name][contains]'?: string;

  /**
   * Return only DIRs whose `expiring_at` is at or after this ISO-8601 timestamp.
   */
  'filter[expiring_at][gte]'?: string;

  /**
   * Return only DIRs whose `expiring_at` is at or before this ISO-8601 timestamp.
   */
  'filter[expiring_at][lte]'?: string;

  /**
   * Convenience: returns DIRs whose `expiring_at` falls within the next N days
   * (1–365). Equivalent to setting `filter[expiring_at][gte]=<now>` +
   * `filter[expiring_at][lte]=<now+N>`. Mutually exclusive with the explicit
   * `[gte]`/`[lte]` filters - combining returns 400.
   */
  'filter[expiring_within_days]'?: number;

  /**
   * Filter by DIR status.
   */
  'filter[status]'?:
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

  /**
   * Sort field. Allowed: `created_at`, `updated_at`, `display_name`, `status`,
   * `submitted_at`, `verified_at`, `expiring_at`. Prefix with `-` for descending.
   * Default `-created_at`.
   */
  sort?:
    | 'created_at'
    | '-created_at'
    | 'updated_at'
    | '-updated_at'
    | 'display_name'
    | '-display_name'
    | 'status'
    | '-status'
    | 'submitted_at'
    | '-submitted_at'
    | 'verified_at'
    | '-verified_at'
    | 'expiring_at'
    | '-expiring_at';
}

export declare namespace Dir {
  export {
    type DirCreateResponse as DirCreateResponse,
    type DirListResponse as DirListResponse,
    type DirListResponsesDefaultFlatPagination as DirListResponsesDefaultFlatPagination,
    type DirCreateParams as DirCreateParams,
    type DirListParams as DirListParams,
  };
}
