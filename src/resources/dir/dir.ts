// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallReasonsAPI from '../call-reasons';
import * as InfringementClaimsAPI from '../infringement-claims';
import { InfringementClaimsDefaultFlatPagination } from '../infringement-claims';
import * as CommentsAPI from './comments';
import {
  CommentCreateParams,
  CommentCreateResponse,
  CommentListParams,
  CommentType,
  Comments,
  DirComment,
  DirCommentsDefaultFlatPagination,
} from './comments';
import * as PhoneNumberBatchesAPI from './phone-number-batches';
import {
  DirPhoneNumberStatus,
  PhoneNumberBatch,
  PhoneNumberBatchListParams,
  PhoneNumberBatchRetrieveParams,
  PhoneNumberBatchRetrieveResponse,
  PhoneNumberBatches,
  PhoneNumberBatchesDefaultFlatPagination,
} from './phone-number-batches';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  DirPhoneNumber,
  DirPhoneNumbersDefaultFlatPagination,
  PhoneNumberAddParams,
  PhoneNumberAddResponse,
  PhoneNumberListParams,
  PhoneNumberRemoveParams,
  PhoneNumberRemoveResponse,
  PhoneNumbers,
  RejectionReason,
} from './phone-numbers';
import * as LoaAPI from '../enterprises/reputation/loa';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DirResource extends APIResource {
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  phoneNumberBatches: PhoneNumberBatchesAPI.PhoneNumberBatches = new PhoneNumberBatchesAPI.PhoneNumberBatches(
    this._client,
  );
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);

  /**
   * Returns a single DIR by id. The enterprise is resolved server-side from the DIR
   * id. Returns `404` if the DIR does not exist or is not yours.
   *
   * @example
   * ```ts
   * const dirWrapped = await client.dir.retrieve(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  retrieve(dirID: string, options?: RequestOptions): APIPromise<DirWrapped> {
    return this._client.get(path`/dir/${dirID}`, options);
  }

  /**
   * Edit a DIR. DIRs in `draft`, `rejected`, `unsuccessful`, or `suspended` can be
   * edited freely: PATCH is a pure edit, `status` is never changed, and you re-vet
   * by calling `POST /v2/dir/{dir_id}/submit` explicitly. A `verified` DIR can also
   * be edited in place: a PATCH that changes any value returns the DIR to `draft`
   * and branded delivery stops until you re-submit and the DIR is approved again,
   * while a PATCH that changes nothing (an empty body or values identical to the
   * current ones) leaves the DIR `verified`, so idempotent retries are safe. DIRs in
   * any other status (`submitted`, `in_review`, `expired`, `infringement_claimed`,
   * `permanently_rejected`) cannot be edited.
   *
   * @example
   * ```ts
   * const dirWrapped = await client.dir.update(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   {
   *     call_reasons: [
   *       'Appointment reminders',
   *       'Billing inquiries',
   *       'Lab results',
   *     ],
   *     display_name: 'Acme Plumbing & Wellness',
   *     logo_url:
   *       'https://acmeplumbing.example.com/logo-v2-256.bmp',
   *   },
   * );
   * ```
   */
  update(dirID: string, body: DirUpdateParams, options?: RequestOptions): APIPromise<DirWrapped> {
    return this._client.patch(path`/dir/${dirID}`, { body, ...options });
  }

  /**
   * Returns every DIR (Display Identity Record) you own, across all of your
   * enterprises, as a single list. Pagination is JSON:API style (`page[number]`,
   * `page[size]`, max 250). Supports `filter[]` query params:
   * `filter[enterprise_id]`, `filter[status]`, `filter[display_name][contains]`,
   * `filter[call_reason][contains]`, plus the renewal-window filters
   * `filter[expiring_at][gte]` / `filter[expiring_at][lte]`. Sortable by
   * `created_at`, `updated_at`, `display_name`, `status` (prefix `-` for descending;
   * default `-created_at`).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dir of client.dir.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DirListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DirsDefaultFlatPagination, Dir> {
    return this._client.getAPIList('/dir', DefaultFlatPagination<Dir>, { query, ...options });
  }

  /**
   * Delete a DIR. Failure modes: `400` if a child phone number is in a non-deletable
   * status, `409` if the DIR has an unresolved infringement claim, `404` if the DIR
   * is not yours.
   *
   * @example
   * ```ts
   * await client.dir.delete(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  delete(dirID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/dir/${dirID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reference list of `document_type` values accepted by
   * `DirCreateRequest.documents[].document_type` and the infringement-contest
   * endpoint. Each entry has a stable `short_name` (used in API calls) and a
   * customer-facing description.
   *
   * @example
   * ```ts
   * const response = await client.dir.listDocumentTypes();
   * ```
   */
  listDocumentTypes(options?: RequestOptions): APIPromise<DirListDocumentTypesResponse> {
    return this._client.get('/dir/document_types', options);
  }

  /**
   * Return the trademark or copyright claims filed against this DIR. Each claim's
   * `status` is `pending` (newly filed; DIR auto-suspended), `contested` (you have
   * submitted contest evidence; awaiting resolution), or `resolved` (final).
   * Resolution outcomes: `upheld` (claim accepted; DIR stays
   * suspended/permanently_rejected), `rejected` (claim dismissed; DIR restored to
   * `verified`), `modified` (partial outcome).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const infringementClaim of client.dir.listInfringementClaims(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * )) {
   *   // ...
   * }
   * ```
   */
  listInfringementClaims(
    dirID: string,
    query: DirListInfringementClaimsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InfringementClaimsDefaultFlatPagination, InfringementClaimsAPI.InfringementClaim> {
    return this._client.getAPIList(
      path`/dir/${dirID}/infringement_claims`,
      DefaultFlatPagination<InfringementClaimsAPI.InfringementClaim>,
      { query, ...options },
    );
  }

  /**
   * Generate a pre-filled Letter of Authorization (LOA) PDF for a DIR. Enterprise
   * identity (legal name, DBA, address, contact, website, tax id) and the DIR
   * display name are read server-side; the caller supplies the telephone numbers to
   * authorize, an optional Authorized Agent block, and an optional drawn signature.
   *
   * When `signature` is omitted the PDF is returned unsigned so the customer can
   * sign it externally and upload it via the Documents API. When `signature` is
   * present the PDF embeds the supplied image, printed name, and signed-at date.
   *
   * Returns `application/pdf`.
   *
   * @example
   * ```ts
   * const response = await client.dir.newLoa(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { phone_numbers: ['+13125550000'] },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  newLoa(dirID: string, body: DirNewLoaParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/dir/${dirID}/loa`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Submit a DIR for vetting. Sends the DIR back through the vetting cycle from any
   * non-terminal status. When re-submitting from `suspended` or `expired`, the DIR's
   * previous Branded Calling registration is torn down transactionally and its phone
   * numbers flip back to `submitted`. When re-submitting from `verified`, the
   * existing registration stays live throughout the new vetting cycle.
   *
   * Returns `400` from `submitted`/`in_review`/`permanently_rejected`. Returns `409`
   * if the DIR has an unresolved infringement claim.
   *
   * @example
   * ```ts
   * const dirWrapped = await client.dir.submit(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  submit(dirID: string, options?: RequestOptions): APIPromise<DirWrapped> {
    return this._client.post(path`/dir/${dirID}/submit`, options);
  }

  /**
   * Push a fix for a DIR that is `suspended` with an open infringement claim back
   * into vetting. `POST /dir/{dir_id}/submit` is blocked while a claim is open, so
   * this is the customer-callable path to update the DIR's content and re-certify
   * before Telnyx adjudicates the claim. All four certification booleans must be
   * `true`. Optional content fields (`display_name`, `logo_url`, `call_reasons`,
   * `documents`) update the DIR; documents are append-only.
   *
   * @example
   * ```ts
   * const dirWrapped = await client.dir.updateInfringement(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   {
   *     certify_brand_is_accurate: true,
   *     certify_ip_ownership: true,
   *     certify_no_infringement: true,
   *     certify_no_shaft_content: true,
   *     infringement_resolution_notes:
   *       'Updated the display name to remove the disputed mark and re-uploaded the authorization.',
   *   },
   * );
   * ```
   */
  updateInfringement(
    dirID: string,
    body: DirUpdateInfringementParams,
    options?: RequestOptions,
  ): APIPromise<DirWrapped> {
    return this._client.put(path`/dir/${dirID}/infringement_update`, { body, ...options });
  }
}

export type DirsDefaultFlatPagination = DefaultFlatPagination<Dir>;

export interface Dir {
  id?: string;

  authorizer_email?: string | null;

  authorizer_name?: string | null;

  call_reasons?: Array<Dir.CallReason>;

  certify_brand_is_accurate?: boolean;

  certify_ip_ownership?: boolean;

  certify_no_shaft_content?: boolean;

  created_at?: string;

  display_name?: string;

  documents?: Array<Document> | null;

  enterprise_id?: string;

  expiring_at?: string | null;

  logo_url?: string | null;

  rejected_at?: string | null;

  /**
   * Populated when `status` is `rejected`; cleared on `/submit` or successful
   * approval.
   */
  rejection_reasons?: Array<PhoneNumbersAPI.RejectionReason> | null;

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
  status?: DirStatus;

  submitted_at?: string | null;

  updated_at?: string;

  verified_at?: string | null;
}

export namespace Dir {
  export interface CallReason {
    created_at?: string;

    reason?: string;
  }
}

export interface DirList {
  data: Array<Dir>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: CallReasonsAPI.BrandedCallingPaginationMeta;
}

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
export type DirStatus =
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

export interface DirWrapped {
  data: Dir;
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

export interface DirListDocumentTypesResponse {
  data: Array<DirListDocumentTypesResponse.Data>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: CallReasonsAPI.BrandedCallingPaginationMeta;
}

export namespace DirListDocumentTypesResponse {
  /**
   * Single supported document type.
   */
  export interface Data {
    description?: string;

    /**
     * Stable identifier passed to `Document.document_type`.
     */
    short_name?: string;
  }
}

export interface DirUpdateParams {
  /**
   * Contact email of the authorizer. Telnyx may send verification or infringement
   * notices here.
   */
  authorizer_email?: string;

  /**
   * Name of the person at your enterprise authorizing this DIR. Must be a real
   * individual.
   */
  authorizer_name?: string;

  /**
   * 1–10 reasons your business calls customers. Validate phrasing against
   * `POST /call_reasons/validate`.
   */
  call_reasons?: Array<string>;

  /**
   * Certification that the DIR information is accurate. Must be `true` for the DIR
   * to be submitted for vetting.
   */
  certify_brand_is_accurate?: boolean;

  /**
   * Certification of ownership of any logos/trademarks shown. Must be `true` for the
   * DIR to be submitted for vetting.
   */
  certify_ip_ownership?: boolean;

  /**
   * Certification that this DIR is not used for SHAFT content (Sex, Hate, Alcohol,
   * Firearms, Tobacco) where prohibited. Must be `true` for the DIR to be submitted
   * for vetting.
   */
  certify_no_shaft_content?: boolean;

  /**
   * Name shown to call recipients. 1–35 characters, no emoji, not whitespace-only.
   */
  display_name?: string;

  /**
   * Additional supporting documents to attach. Append-only: existing documents are
   * never removed or replaced, and an empty or omitted list is a no-op. Each
   * `document_id` may appear at most once on a DIR.
   */
  documents?: Array<Document>;

  /**
   * Publicly accessible HTTPS URL (max 128 chars) to a 256x256 BMP logo (max 1 MB).
   */
  logo_url?: string;

  /**
   * Set to true if your organization places calls on behalf of other enterprises
   * (BPO/reseller). Updating this triggers re-vetting on next submit.
   */
  reselling?: boolean;
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
   * Filter by enterprise ID.
   */
  'filter[enterprise_id]'?: string;

  /**
   * Return only DIRs whose `expiring_at` is at or after this ISO-8601 timestamp.
   * Pairs with the `[lte]` variant to build renewal-window dashboards.
   */
  'filter[expiring_at][gte]'?: string;

  /**
   * Return only DIRs whose `expiring_at` is at or before this ISO-8601 timestamp.
   */
  'filter[expiring_at][lte]'?: string;

  /**
   * Filter by DIR status.
   */
  'filter[status]'?: DirStatus;

  /**
   * Sort field. Allowed values: `created_at`, `updated_at`, `display_name`,
   * `status`. Prefix with `-` for descending. Default `-created_at`.
   */
  sort?:
    | 'created_at'
    | '-created_at'
    | 'updated_at'
    | '-updated_at'
    | 'display_name'
    | '-display_name'
    | 'status'
    | '-status';
}

export interface DirListInfringementClaimsParams extends DefaultFlatPaginationParams {}

export interface DirNewLoaParams {
  /**
   * Telephone numbers to authorize on the DIR, in `+E164` format (`+` followed by
   * 10-15 digits). Max 15 per request.
   */
  phone_numbers: Array<string>;

  /**
   * Third-party reseller / partner managing the enterprise's phone numbers. Omit
   * when the enterprise works directly with Telnyx.
   */
  agent?: LoaAPI.AgentInput;

  /**
   * Optional. When provided the rendered PDF embeds the signature image, printed
   * name, and signed-at date. When absent the PDF is returned unsigned so the
   * customer can sign externally and upload it via the Documents API.
   */
  signature?: DirNewLoaParams.Signature;
}

export namespace DirNewLoaParams {
  /**
   * Optional. When provided the rendered PDF embeds the signature image, printed
   * name, and signed-at date. When absent the PDF is returned unsigned so the
   * customer can sign externally and upload it via the Documents API.
   */
  export interface Signature {
    /**
     * PNG image, base64-encoded.
     */
    image_base64: string;

    /**
     * Optional. When absent the rendered PDF falls back to the enterprise contact's
     * legal name.
     */
    signer_name?: string | null;
  }
}

export interface DirUpdateInfringementParams {
  /**
   * Must be `true`.
   */
  certify_brand_is_accurate: true;

  /**
   * Must be `true`.
   */
  certify_ip_ownership: true;

  /**
   * Must be `true`.
   */
  certify_no_infringement: true;

  /**
   * Must be `true`.
   */
  certify_no_shaft_content: true;

  /**
   * Explanation of how the infringement concern was addressed.
   */
  infringement_resolution_notes: string;

  call_reasons?: Array<string> | null;

  display_name?: string | null;

  /**
   * Append-only supporting documents.
   */
  documents?: Array<Document> | null;

  /**
   * Publicly accessible HTTPS URL (max 128 chars) to a 256x256 BMP logo (max 1 MB).
   */
  logo_url?: string | null;
}

DirResource.Comments = Comments;
DirResource.PhoneNumberBatches = PhoneNumberBatches;
DirResource.PhoneNumbers = PhoneNumbers;

export declare namespace DirResource {
  export {
    type Dir as Dir,
    type DirList as DirList,
    type DirStatus as DirStatus,
    type DirWrapped as DirWrapped,
    type Document as Document,
    type DirListDocumentTypesResponse as DirListDocumentTypesResponse,
    type DirsDefaultFlatPagination as DirsDefaultFlatPagination,
    type DirUpdateParams as DirUpdateParams,
    type DirListParams as DirListParams,
    type DirListInfringementClaimsParams as DirListInfringementClaimsParams,
    type DirNewLoaParams as DirNewLoaParams,
    type DirUpdateInfringementParams as DirUpdateInfringementParams,
  };

  export {
    Comments as Comments,
    type CommentType as CommentType,
    type DirComment as DirComment,
    type CommentCreateResponse as CommentCreateResponse,
    type DirCommentsDefaultFlatPagination as DirCommentsDefaultFlatPagination,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };

  export {
    PhoneNumberBatches as PhoneNumberBatches,
    type DirPhoneNumberStatus as DirPhoneNumberStatus,
    type PhoneNumberBatch as PhoneNumberBatch,
    type PhoneNumberBatchRetrieveResponse as PhoneNumberBatchRetrieveResponse,
    type PhoneNumberBatchesDefaultFlatPagination as PhoneNumberBatchesDefaultFlatPagination,
    type PhoneNumberBatchRetrieveParams as PhoneNumberBatchRetrieveParams,
    type PhoneNumberBatchListParams as PhoneNumberBatchListParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type DirPhoneNumber as DirPhoneNumber,
    type RejectionReason as RejectionReason,
    type PhoneNumberAddResponse as PhoneNumberAddResponse,
    type PhoneNumberRemoveResponse as PhoneNumberRemoveResponse,
    type DirPhoneNumbersDefaultFlatPagination as DirPhoneNumbersDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberAddParams as PhoneNumberAddParams,
    type PhoneNumberRemoveParams as PhoneNumberRemoveParams,
  };
}

export { type InfringementClaimsDefaultFlatPagination };
