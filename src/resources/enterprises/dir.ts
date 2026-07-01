// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirAPI from '../dir/dir';
import { DirsDefaultFlatPagination } from '../dir/dir';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * A Display Identity Record (DIR) is the verified calling identity (display name, logo, call reasons) shown to recipients on outbound calls.
 */
export class Dir extends APIResource {
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
   * for await (const dir of client.enterprises.dir.list(
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
  ): PagePromise<DirsDefaultFlatPagination, DirAPI.Dir> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/dir`,
      DefaultFlatPagination<DirAPI.Dir>,
      { query, ...options },
    );
  }

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
   * const dirWrapped = await client.enterprises.dir.create(
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
  ): APIPromise<DirAPI.DirWrapped> {
    return this._client.post(path`/enterprises/${enterpriseID}/dir`, { body, ...options });
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
  'filter[status]'?: DirAPI.DirStatus;

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
  documents?: Array<DirAPI.Document>;

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

export declare namespace Dir {
  export { type DirListParams as DirListParams, type DirCreateParams as DirCreateParams };
}

export { type DirsDefaultFlatPagination };
