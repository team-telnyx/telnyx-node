// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NumbersAPI from './numbers';
import * as Shared from '../../shared';
import * as EnterprisesAPI from '../enterprises';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class Numbers extends APIResource {
  /**
   * Paginated list of phone numbers registered for reputation monitoring under this
   * enterprise. The response includes the latest reputation snapshot per number
   * where one has been collected.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reputationPhoneNumber of client.enterprises.reputation.numbers.list(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    enterpriseID: string,
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReputationPhoneNumbersDefaultFlatPagination, ReputationPhoneNumber> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/reputation/numbers`,
      DefaultFlatPagination<ReputationPhoneNumber>,
      { query, ...options },
    );
  }

  /**
   * Add up to 100 phone numbers to reputation monitoring on this enterprise. Each
   * must be in E.164 format (`+1NPANXXXXXX` for US/CA). A number in your Telnyx
   * phone-number inventory is accepted as `source: telnyx`; a number that is not is
   * treated as hosted with another provider and must meet the requirements below.
   *
   * **Prerequisite**: reputation must already be enabled on this enterprise (see
   * `POST .../reputation`).
   *
   * **Pricing:** This is a billable action. See https://telnyx.com/pricing/numbers
   * for current pricing.
   *
   * A phone number that is not in your Telnyx inventory is treated as a number
   * hosted with another provider (`source: external`). It must be a US local number,
   * and the enterprise's ownership proof must be approved first
   * (`POST /enterprises/{enterprise_id}/reputation/external_verification`);
   * otherwise the request fails with a 400 whose `detail` contains
   * `external_verification_required`. Ownership of such numbers is checked every
   * day.
   *
   * @example
   * ```ts
   * const reputationPhoneNumberList =
   *   await client.enterprises.reputation.numbers.associate(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     { phone_numbers: ['+19493253498', '+12134445566'] },
   *   );
   * ```
   */
  associate(
    enterpriseID: string,
    body: NumberAssociateParams,
    options?: RequestOptions,
  ): APIPromise<ReputationPhoneNumberList> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/numbers`, { body, ...options });
  }

  /**
   * Stop tracking the reputation of this phone number. The number itself remains in
   * your inventory; only the reputation registration is removed.
   *
   * @example
   * ```ts
   * await client.enterprises.reputation.numbers.disassociate(
   *   '+19493253498',
   *   { enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6' },
   * );
   * ```
   */
  disassociate(
    phoneNumber: string,
    params: NumberDisassociateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { enterprise_id } = params;
    return this._client.delete(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve one registered number with its latest reputation snapshot. The
   * `phone_number` path parameter is in E.164 format and must be URL-encoded (e.g.
   * `%2B19493253498`).
   *
   * @example
   * ```ts
   * const reputationPhoneNumberWithReputation =
   *   await client.enterprises.reputation.numbers.retrieve(
   *     '+19493253498',
   *     {
   *       enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     },
   *   );
   * ```
   */
  retrieve(
    phoneNumber: string,
    params: NumberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReputationPhoneNumberWithReputation> {
    const { enterprise_id, ...query } = params;
    return this._client.get(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      query,
      ...options,
    });
  }

  /**
   * Immediately refresh the stored reputation data for the listed numbers. This is
   * in addition to the periodic refresh determined by `check_frequency`. Up to 100
   * numbers per call. The response carries the kicked-off jobs; the actual refresh
   * runs asynchronously.
   *
   * **Pricing:** Forcing a refresh performs live reputation lookups, which are
   * billable. See https://telnyx.com/pricing/numbers for current pricing.
   *
   * @example
   * ```ts
   * const response =
   *   await client.enterprises.reputation.numbers.refresh(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     { phone_numbers: ['+19493253498'] },
   *   );
   * ```
   */
  refresh(
    enterpriseID: string,
    body: NumberRefreshParams,
    options?: RequestOptions,
  ): APIPromise<NumberRefreshResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/numbers/refresh`, {
      body,
      ...options,
    });
  }

  /**
   * Get the ownership status of a phone number, when it was last checked, the
   * carrier recorded as its baseline, and the history of ownership events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.enterprises.reputation.numbers.retrieveOwnership(
   *     '+19493253498',
   *     {
   *       enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     },
   *   );
   * ```
   */
  retrieveOwnership(
    phoneNumber: string,
    params: NumberRetrieveOwnershipParams,
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveOwnershipResponse> {
    const { enterprise_id } = params;
    return this._client.get(
      path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}/ownership`,
      options,
    );
  }

  /**
   * Answer an ownership question about a phone number hosted with another provider.
   *
   * Send `still_own: true` to confirm you still own a number whose
   * `ownership_status` is `pending_confirmation` or `flagged`; its status returns to
   * `verified` and, after a carrier change, the new carrier becomes the one on
   * record.
   *
   * Send `still_own: false` to report that you no longer own the number. It is
   * removed from Number Reputation immediately, whatever its current status, and the
   * response shows it with `ownership_status: removed`.
   *
   * @example
   * ```ts
   * const reputationPhoneNumberWithReputation =
   *   await client.enterprises.reputation.numbers.ownershipConfirm(
   *     '+19493253498',
   *     {
   *       enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *       still_own: true,
   *     },
   *   );
   * ```
   */
  ownershipConfirm(
    phoneNumber: string,
    params: NumberOwnershipConfirmParams,
    options?: RequestOptions,
  ): APIPromise<ReputationPhoneNumberWithReputation> {
    const { enterprise_id, ...body } = params;
    return this._client.post(
      path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}/ownership_confirm`,
      { body, ...options },
    );
  }
}

export type ReputationPhoneNumbersDefaultFlatPagination = DefaultFlatPagination<ReputationPhoneNumber>;

/**
 * Where the phone number is hosted. `telnyx`: in your Telnyx inventory.
 * `external`: a number you own that is hosted with another provider.
 */
export type ReputationNumberSource = 'telnyx' | 'external';

/**
 * Result of ongoing ownership checks. `verified`: the number is with the carrier
 * on record. `pending_confirmation`: the number's carrier changed, or a periodic
 * ownership re-verification is due; confirm you still own it before `confirm_by`.
 * `flagged`: a periodic re-verification went unanswered; the number stays
 * monitored and is not removed, but confirm ownership
 * (`POST .../ownership_confirm`) to return it to `verified`. `removed`: the number
 * is no longer monitored; returned by `POST .../ownership_confirm` with
 * `still_own: false`, and when listing numbers with
 * `filter[ownership_status]=removed`.
 */
export type ReputationOwnershipStatus = 'verified' | 'flagged' | 'pending_confirmation' | 'removed';

export interface ReputationPhoneNumber {
  id?: string;

  /**
   * Deadline to confirm you still own the number. Set only while `ownership_status`
   * is `pending_confirmation`.
   */
  confirm_by?: string | null;

  created_at?: string;

  enterprise_id?: string;

  /**
   * Why the number's ownership was flagged. `carrier_changed` when an ownership
   * check found the number with a different carrier.
   */
  flag_reason?: string | null;

  /**
   * Result of ongoing ownership checks. `verified`: the number is with the carrier
   * on record. `pending_confirmation`: the number's carrier changed, or a periodic
   * ownership re-verification is due; confirm you still own it before `confirm_by`.
   * `flagged`: a periodic re-verification went unanswered; the number stays
   * monitored and is not removed, but confirm ownership
   * (`POST .../ownership_confirm`) to return it to `verified`. `removed`: the number
   * is no longer monitored; returned by `POST .../ownership_confirm` with
   * `still_own: false`, and when listing numbers with
   * `filter[ownership_status]=removed`.
   */
  ownership_status?: ReputationOwnershipStatus;

  /**
   * E.164 with leading `+`.
   */
  phone_number?: string;

  /**
   * Why a number was removed. `ported_away`: you confirmed the number left your
   * control after a carrier change. `unconfirmed_ownership`: a carrier change was
   * not confirmed before the deadline. `reassigned`: the number was reported as
   * permanently disconnected. `customer_reported`: you reported that you no longer
   * own the number. `customer_removed`: you removed the number.
   */
  removal_reason?:
    | 'ported_away'
    | 'unconfirmed_ownership'
    | 'reassigned'
    | 'customer_reported'
    | 'customer_removed'
    | null;

  /**
   * When the number was removed. Set only for removed numbers.
   */
  removed_at?: string | null;

  /**
   * Reputation snapshot for a phone number. Each metric is a 0–100 score;
   * `spam_risk` is a coarse bucket. Field set may grow over time - read by key.
   */
  reputation_data?: Shared.ReputationData | null;

  /**
   * Where the phone number is hosted. `telnyx`: in your Telnyx inventory.
   * `external`: a number you own that is hosted with another provider.
   */
  source?: ReputationNumberSource;

  updated_at?: string;
}

export interface ReputationPhoneNumberList {
  data: Array<ReputationPhoneNumber>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: EnterprisesAPI.NumberReputationPaginationMeta;
}

/**
 * List of reputation-monitored phone numbers, each carrying its current reputation
 * data.
 */
export interface ReputationPhoneNumberListWithReputation {
  data: Array<ReputationPhoneNumber>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: EnterprisesAPI.NumberReputationPaginationMeta;
}

export interface ReputationPhoneNumberWithReputation {
  data: ReputationPhoneNumber;
}

export interface NumberRefreshResponse {
  data: NumberRefreshResponse.Data;
}

export namespace NumberRefreshResponse {
  export interface Data {
    /**
     * Per-number outcome of the refresh.
     */
    results: Array<Data.Result>;

    total_failed: number;

    total_requested: number;

    total_successful: number;
  }

  export namespace Data {
    export interface Result {
      phone_number: string;

      success: boolean;

      /**
       * `null` when `success` is `true`; carries an error message otherwise.
       */
      error?: string | null;
    }
  }
}

export interface NumberRetrieveOwnershipResponse {
  data: NumberRetrieveOwnershipResponse.Data;
}

export namespace NumberRetrieveOwnershipResponse {
  export interface Data {
    /**
     * Service provider ID (SPID) of the carrier that held the number when its
     * ownership was last established.
     */
    baseline_carrier?: string | null;

    baseline_recorded_at?: string | null;

    confirm_by?: string | null;

    flag_reason?: string | null;

    /**
     * Ownership events, most recent first.
     */
    history?: Array<Data.History>;

    /**
     * When ownership of the number was last checked.
     */
    last_checked_at?: string | null;

    /**
     * Result of ongoing ownership checks. `verified`: the number is with the carrier
     * on record. `pending_confirmation`: the number's carrier changed, or a periodic
     * ownership re-verification is due; confirm you still own it before `confirm_by`.
     * `flagged`: a periodic re-verification went unanswered; the number stays
     * monitored and is not removed, but confirm ownership
     * (`POST .../ownership_confirm`) to return it to `verified`. `removed`: the number
     * is no longer monitored; returned by `POST .../ownership_confirm` with
     * `still_own: false`, and when listing numbers with
     * `filter[ownership_status]=removed`.
     */
    ownership_status?: NumbersAPI.ReputationOwnershipStatus;

    phone_number?: string;

    /**
     * Where the phone number is hosted. `telnyx`: in your Telnyx inventory.
     * `external`: a number you own that is hosted with another provider.
     */
    source?: NumbersAPI.ReputationNumberSource;
  }

  export namespace Data {
    export interface History {
      /**
       * `added`, `check`, `flag`, `confirm` or `removed`.
       */
      event_type?: string;

      occurred_at?: string;

      /**
       * What the event found or did, for example `unchanged` or `carrier_changed`.
       */
      outcome?: string | null;
    }
  }
}

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Only numbers with this ownership status. `removed` lists the numbers that were
   * removed, each with its `removal_reason` and `removed_at`; removed numbers are
   * not returned otherwise.
   */
  'filter[ownership_status]'?: ReputationOwnershipStatus;

  /**
   * Partial match on phone number. Must contain at least 5 digits.
   */
  'filter[phone_number][contains]'?: string;

  /**
   * Exact phone-number match (E.164).
   */
  'filter[phone_number][eq]'?: string;

  /**
   * Only numbers with this source.
   */
  'filter[source]'?: ReputationNumberSource;
}

export interface NumberAssociateParams {
  /**
   * 1–100 phone numbers in E.164 format with a leading `+`.
   */
  phone_numbers: Array<string>;
}

export interface NumberDisassociateParams {
  /**
   * The enterprise id. Lowercase UUID.
   */
  enterprise_id: string;
}

export interface NumberRetrieveParams {
  /**
   * Path param: The enterprise id. Lowercase UUID.
   */
  enterprise_id: string;

  /**
   * Query param: When true, fetches fresh reputation data (incurs API cost). When
   * false (default), returns cached data.
   */
  fresh?: boolean;
}

export interface NumberRefreshParams {
  /**
   * Phone numbers to refresh reputation data for. 1–100 numbers per request, each in
   * E.164 format. Reputation refreshes are subject to per-enterprise rate limits.
   */
  phone_numbers: Array<string>;
}

export interface NumberRetrieveOwnershipParams {
  /**
   * The enterprise id. Lowercase UUID.
   */
  enterprise_id: string;
}

export interface NumberOwnershipConfirmParams {
  /**
   * Path param: The enterprise id. Lowercase UUID.
   */
  enterprise_id: string;

  /**
   * Body param: `true` confirms you still own the number. `false` reports that you
   * no longer own it and removes it from Number Reputation.
   */
  still_own: boolean;

  /**
   * Body param: Optional id of an uploaded document supporting the confirmation.
   */
  evidence_document_id?: string;
}

export declare namespace Numbers {
  export {
    type ReputationNumberSource as ReputationNumberSource,
    type ReputationOwnershipStatus as ReputationOwnershipStatus,
    type ReputationPhoneNumber as ReputationPhoneNumber,
    type ReputationPhoneNumberList as ReputationPhoneNumberList,
    type ReputationPhoneNumberListWithReputation as ReputationPhoneNumberListWithReputation,
    type ReputationPhoneNumberWithReputation as ReputationPhoneNumberWithReputation,
    type NumberRefreshResponse as NumberRefreshResponse,
    type NumberRetrieveOwnershipResponse as NumberRetrieveOwnershipResponse,
    type ReputationPhoneNumbersDefaultFlatPagination as ReputationPhoneNumbersDefaultFlatPagination,
    type NumberListParams as NumberListParams,
    type NumberAssociateParams as NumberAssociateParams,
    type NumberDisassociateParams as NumberDisassociateParams,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberRefreshParams as NumberRefreshParams,
    type NumberRetrieveOwnershipParams as NumberRetrieveOwnershipParams,
    type NumberOwnershipConfirmParams as NumberOwnershipConfirmParams,
  };
}
