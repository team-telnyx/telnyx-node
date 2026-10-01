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
import * as ReferencesAPI from './references';
import {
  Reference,
  ReferenceCreateParams,
  ReferenceInput,
  ReferenceList,
  ReferenceUpdateParams,
  ReferenceUpdateResponse,
  References,
} from './references';
import * as VerifyEmailAPI from './verify-email';
import {
  EmailVerificationStatus,
  EmailVerificationStatusWrapped,
  VerifyEmail,
  VerifyEmailConfirmParams,
} from './verify-email';
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
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
  verifyEmail: VerifyEmailAPI.VerifyEmail = new VerifyEmailAPI.VerifyEmail(this._client);

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
   * Request deletion of a DIR. This does not remove the DIR on this call: it records
   * the request, moves the DIR to `delete_requested`, and Telnyx completes the
   * removal (de-registration and cleanup) shortly after. A verified DIR keeps
   * serving its branded identity, and keeps billing, until the removal is executed.
   * Failure modes: `400` if a child phone number is still attached or the DIR is
   * `in_review` (wait for the review to finish), `409` if the DIR has an unresolved
   * infringement claim, `404` if the DIR is not yours.
   *
   * @example
   * ```ts
   * const dir = await client.dir.delete(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  delete(dirID: string, options?: RequestOptions): APIPromise<DirDeleteResponse> {
    return this._client.delete(path`/dir/${dirID}`, options);
  }

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
   * be edited in place: a PATCH that changes any value returns the DIR to `draft`;
   * the currently approved identity keeps displaying, and the edited content goes
   * live only after you re-submit and the DIR is approved again. A PATCH that
   * changes nothing (an empty body or values identical to the current ones) leaves
   * the DIR `verified`, so idempotent retries are safe. Changing only
   * `bpo_authorizations` or `webhook_url` is the exception: the DIR stays
   * `verified`. Each BPO authorization is reviewed on its own instead. DIRs in any
   * other status (`submitted`, `in_review`, `expired`, `infringement_claimed`,
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

  /**
   * Submit a DIR for vetting. Sends the DIR back through the vetting cycle from any
   * non-terminal status. When re-submitting from `suspended` or `expired`, the DIR's
   * previous Branded Calling registration is torn down transactionally and its phone
   * numbers flip back to `submitted`. When re-submitting from `verified`, the
   * existing registration stays live throughout the new vetting cycle.
   *
   * Returns `400` from `submitted`/`in_review`/`permanently_rejected`. Returns `400`
   * if the DIR's business and financial references have not been submitted. Returns
   * `409` if the DIR has an unresolved infringement claim.
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
   * List the BPO (Business Process Outsourcer) accounts a Brand Owner has authorized
   * on this DIR, together with the review state of each authorization.
   *
   * Authorizations are supplied as the `bpo_authorizations` array when creating or
   * updating a DIR, and each one is reviewed on its own. Only an `approved`
   * authorization adds that BPO to this DIR's authorized callers in the branded
   * calling registry; `pending` and `rejected` authorizations do not. Each entry
   * includes the `loa_document_id` you submitted: because `bpo_authorizations`
   * replaces the whole list on every DIR update, send each entry you want to keep
   * back with its `loa_document_id` unchanged, and it keeps its review state. A
   * rejected entry carries a `rejection_reason`. Returns an empty list when the DIR
   * has authorized no BPOs.
   *
   * @example
   * ```ts
   * const response = await client.dir.retrieveBpoAuthorizations(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  retrieveBpoAuthorizations(
    dirID: string,
    query: DirRetrieveBpoAuthorizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirRetrieveBpoAuthorizationsResponse> {
    return this._client.get(path`/dir/${dirID}/bpo_authorizations`, { query, ...options });
  }

  /**
   * The Letter of Authorization in which a Brand Owner authorizes an approved BPO
   * (Business Process Outsourcer) to place branded calls that display this DIR on
   * the owner's behalf. Both parties are read from the caller's account: the Brand
   * Owner is the enterprise that owns the DIR, and the BPO is `bpo_enterprise_id`.
   * No business identity is accepted in the body.
   *
   * When `signature` is omitted the PDF is returned unsigned so the Brand Owner can
   * sign it externally and the BPO can upload it via the Documents API. When
   * `signature` is present the PDF embeds the supplied image, printed name, and
   * signed-at date.
   *
   * Returns `application/pdf`.
   *
   * @example
   * ```ts
   * const response = await client.dir.bpoLoa(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     bpo_enterprise_id:
   *       '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  bpoLoa(dirID: string, body: DirBpoLoaParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/dir/${dirID}/bpo_loa`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export type DirsDefaultFlatPagination = DefaultFlatPagination<Dir>;

/**
 * One authorization to include when creating or updating a DIR: an approved BPO
 * (Business Process Outsourcer) account plus the signed Letter of Authorization
 * the Brand Owner granted it.
 */
export interface BpoAuthorizationInput {
  /**
   * Enterprise id of an approved BPO (Business Process Outsourcer) account on your
   * organization to authorize for this DIR.
   */
  bpo_enterprise_id: string;

  /**
   * Id of the signed Letter of Authorization document (uploaded via the Telnyx
   * Documents API) in which the Brand Owner authorizes this BPO.
   */
  loa_document_id: string;
}

export interface Dir {
  id?: string;

  authorizer_email?: string | null;

  authorizer_name?: string | null;

  call_reasons?: Array<Dir.CallReason>;

  certify_brand_is_accurate?: boolean;

  certify_ip_ownership?: boolean;

  certify_no_shaft_content?: boolean;

  created_at?: string;

  /**
   * When deletion was requested. Set once the DIR enters `delete_requested`; `null`
   * otherwise.
   */
  delete_requested_at?: string | null;

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
   * - `delete_requested` - you have requested deletion; the DIR still exists and
   *   Telnyx is completing the removal (de-registration and cleanup). A verified DIR
   *   keeps serving its branded identity, and keeps billing, until the removal
   *   finishes.
   */
  status?: DirStatus;

  submitted_at?: string | null;

  updated_at?: string;

  verified_at?: string | null;

  /**
   * `https://` URL that receives webhook notifications for this DIR's
   * compliance-review outcomes. `null` when not subscribed.
   */
  webhook_url?: string | null;
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
 * - `delete_requested` - you have requested deletion; the DIR still exists and
 *   Telnyx is completing the removal (de-registration and cleanup). A verified DIR
 *   keeps serving its branded identity, and keeps billing, until the removal
 *   finishes.
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
  | 'permanently_rejected'
  | 'delete_requested';

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

  /**
   * An optional note describing this document, for example what it proves.
   */
  description?: string;
}

export interface SignaturePayload {
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

export interface DirDeleteResponse {
  data: DirDeleteResponse.Data;
}

export namespace DirDeleteResponse {
  export interface Data {
    /**
     * Id of the DIR whose deletion was requested.
     */
    id: string;

    /**
     * Always `delete_requested`: the DIR has been queued for removal, not yet removed.
     */
    status: 'delete_requested';
  }
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

/**
 * Paginated list of a DIR's BPO authorizations.
 */
export interface DirRetrieveBpoAuthorizationsResponse {
  data: Array<DirRetrieveBpoAuthorizationsResponse.Data>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: CallReasonsAPI.BrandedCallingPaginationMeta;
}

export namespace DirRetrieveBpoAuthorizationsResponse {
  /**
   * A single authorization of a BPO (Business Process Outsourcer) account on a DIR.
   */
  export interface Data {
    /**
     * The authorized BPO account's enterprise id.
     */
    bpo_enterprise_id: string;

    /**
     * Id of the signed Letter of Authorization document submitted for this BPO. Send
     * it back unchanged in `bpo_authorizations` when updating the DIR to keep this
     * authorization and its review state.
     */
    loa_document_id: string;

    /**
     * Always `bpo_authorization`.
     */
    record_type: 'bpo_authorization';

    /**
     * Review state of this authorization. `pending` on create or when the Letter of
     * Authorization is re-uploaded; an admin moves it to `approved` or `rejected`.
     * Only an `approved` authorization adds the BPO to this DIR's authorized callers
     * in the branded calling registry.
     */
    status: 'pending' | 'approved' | 'rejected';

    /**
     * Why the authorization was rejected. `null` unless `status` is `rejected`.
     */
    rejection_reason?: string | null;
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
   * Optional. Replace this DIR's authorized BPO (Business Process Outsourcer)
   * accounts with these, each with its signed Letter of Authorization. The supplied
   * list replaces the current one: a BPO left out has its authorization removed, and
   * a new BPO (or a changed Letter of Authorization) is created `pending` admin
   * review. Send an empty list to clear all authorizations; omit the field to leave
   * them unchanged. Editing this list does not re-vet the DIR. Maximum 10.
   */
  bpo_authorizations?: Array<BpoAuthorizationInput>;

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

  /**
   * Optional `https://` URL that receives webhook notifications when this DIR's
   * compliance review completes. Send `null` to clear. Changing only this field on a
   * `verified` DIR does not re-vet it. Maximum 2048 characters.
   */
  webhook_url?: string | null;
}

export interface DirListInfringementClaimsParams extends DefaultFlatPaginationParams {}

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
   * Check to certify that the brand no longer infringes anyone else's trademark or
   * intellectual property.
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

  /**
   * The business name shown to call recipients, 1 to 35 characters, no emoji, not
   * blank.
   */
  display_name?: string | null;

  /**
   * Append-only supporting documents to attach while resolving the claim (e.g.
   * authorization or licensing proof).
   */
  documents?: Array<Document> | null;

  /**
   * Publicly accessible HTTPS URL (max 128 chars) to a 256x256 BMP logo (max 1 MB).
   */
  logo_url?: string | null;
}

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
  signature?: SignaturePayload;
}

export interface DirRetrieveBpoAuthorizationsParams {
  /**
   * 1-based page number. Out-of-range values return an empty page with correct meta.
   */
  'page[number]'?: number;

  /**
   * Items per page. Maximum 250; values above are clamped to 250.
   */
  'page[size]'?: number;
}

export interface DirBpoLoaParams {
  /**
   * The approved BPO enterprise the Brand Owner is authorizing. Must be a BPO
   * account on the caller's organization that has already been approved.
   */
  bpo_enterprise_id: string;

  /**
   * Optional. When provided the rendered PDF embeds the signature image, printed
   * name, and signed-at date. When absent the PDF is returned unsigned so the Brand
   * Owner can sign externally and the BPO can upload it via the Documents API.
   */
  signature?: SignaturePayload;
}

DirResource.Comments = Comments;
DirResource.PhoneNumberBatches = PhoneNumberBatches;
DirResource.PhoneNumbers = PhoneNumbers;
DirResource.References = References;
DirResource.VerifyEmail = VerifyEmail;

export declare namespace DirResource {
  export {
    type BpoAuthorizationInput as BpoAuthorizationInput,
    type Dir as Dir,
    type DirList as DirList,
    type DirStatus as DirStatus,
    type DirWrapped as DirWrapped,
    type Document as Document,
    type SignaturePayload as SignaturePayload,
    type DirDeleteResponse as DirDeleteResponse,
    type DirListDocumentTypesResponse as DirListDocumentTypesResponse,
    type DirRetrieveBpoAuthorizationsResponse as DirRetrieveBpoAuthorizationsResponse,
    type DirsDefaultFlatPagination as DirsDefaultFlatPagination,
    type DirListParams as DirListParams,
    type DirUpdateParams as DirUpdateParams,
    type DirListInfringementClaimsParams as DirListInfringementClaimsParams,
    type DirUpdateInfringementParams as DirUpdateInfringementParams,
    type DirNewLoaParams as DirNewLoaParams,
    type DirRetrieveBpoAuthorizationsParams as DirRetrieveBpoAuthorizationsParams,
    type DirBpoLoaParams as DirBpoLoaParams,
  };

  export {
    Comments as Comments,
    type CommentType as CommentType,
    type DirComment as DirComment,
    type CommentCreateResponse as CommentCreateResponse,
    type DirCommentsDefaultFlatPagination as DirCommentsDefaultFlatPagination,
    type CommentListParams as CommentListParams,
    type CommentCreateParams as CommentCreateParams,
  };

  export {
    PhoneNumberBatches as PhoneNumberBatches,
    type DirPhoneNumberStatus as DirPhoneNumberStatus,
    type PhoneNumberBatch as PhoneNumberBatch,
    type PhoneNumberBatchRetrieveResponse as PhoneNumberBatchRetrieveResponse,
    type PhoneNumberBatchesDefaultFlatPagination as PhoneNumberBatchesDefaultFlatPagination,
    type PhoneNumberBatchListParams as PhoneNumberBatchListParams,
    type PhoneNumberBatchRetrieveParams as PhoneNumberBatchRetrieveParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type DirPhoneNumber as DirPhoneNumber,
    type RejectionReason as RejectionReason,
    type PhoneNumberAddResponse as PhoneNumberAddResponse,
    type PhoneNumberRemoveResponse as PhoneNumberRemoveResponse,
    type DirPhoneNumbersDefaultFlatPagination as DirPhoneNumbersDefaultFlatPagination,
    type PhoneNumberRemoveParams as PhoneNumberRemoveParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberAddParams as PhoneNumberAddParams,
  };

  export {
    References as References,
    type Reference as Reference,
    type ReferenceInput as ReferenceInput,
    type ReferenceList as ReferenceList,
    type ReferenceUpdateResponse as ReferenceUpdateResponse,
    type ReferenceCreateParams as ReferenceCreateParams,
    type ReferenceUpdateParams as ReferenceUpdateParams,
  };

  export {
    VerifyEmail as VerifyEmail,
    type EmailVerificationStatus as EmailVerificationStatus,
    type EmailVerificationStatusWrapped as EmailVerificationStatusWrapped,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}

export { type InfringementClaimsDefaultFlatPagination };
