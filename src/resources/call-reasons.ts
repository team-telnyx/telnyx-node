// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Static reference values the API accepts: call reasons, document types, rejection types.
 */
export class CallReasons extends APIResource {
  /**
   * Telnyx maintains a library of pre-vetted call-reason phrases (e.g. "Appointment
   * reminders", "Billing inquiries") that carry through DIR vetting smoothly. You
   * can use any string that fits your use case in `DirCreateRequest.call_reasons`,
   * but matching one of these reduces the chance the vetting team flags the phrasing
   * for clarification.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const callReasonListResponse of client.callReasons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CallReasonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CallReasonListResponsesDefaultFlatPagination, CallReasonListResponse> {
    return this._client.getAPIList('/call_reasons', DefaultFlatPagination<CallReasonListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Check up to 10 candidate `call_reasons` strings against Telnyx's vetting
   * heuristics before sending them on a DIR create or update. The endpoint flags
   * strings that are likely to be rejected during vetting (too generic, banned
   * phrases, length issues, etc.) so you can fix them up front.
   *
   * @example
   * ```ts
   * const response = await client.callReasons.validate({
   *   body: ['Appointment reminders', 'Billing inquiries'],
   * });
   * ```
   */
  validate(
    params: CallReasonValidateParams,
    options?: RequestOptions,
  ): APIPromise<CallReasonValidateResponse> {
    const { body } = params;
    return this._client.post('/call_reasons/validate', { body: body, ...options });
  }
}

export type CallReasonListResponsesDefaultFlatPagination = DefaultFlatPagination<CallReasonListResponse>;

/**
 * Pre-vetted call-reason library entry.
 */
export interface CallReasonListResponse {
  id?: string;

  description?: string;

  reason?: string;
}

export interface CallReasonValidateResponse {
  data: CallReasonValidateResponse.Data;
}

export namespace CallReasonValidateResponse {
  export interface Data {
    /**
     * `true` when every supplied reason matches a pre-vetted entry in the call-reason
     * library. When `true`, the DIR will sail through the call-reasons portion of
     * vetting.
     */
    all_pre_approved: boolean;

    /**
     * Subset of the input that does NOT match the pre-vetted library. The DIR can
     * still be submitted with these — they will go through manual review.
     */
    non_approved_reasons: Array<string>;

    /**
     * `true` when at least one supplied reason is in `non_approved_reasons`.
     * Equivalent to `non_approved_reasons.length > 0` and the inverse of
     * `all_pre_approved`.
     */
    requires_manual_vetting: boolean;
  }
}

export interface CallReasonListParams extends DefaultFlatPaginationParams {}

export interface CallReasonValidateParams {
  /**
   * **Bare JSON array** of candidate call-reason strings (NOT an object — there is
   * no top-level `call_reasons` key on this endpoint). 1–10 strings, each ≤64
   * characters.
   */
  body: Array<string>;
}

export declare namespace CallReasons {
  export {
    type CallReasonListResponse as CallReasonListResponse,
    type CallReasonValidateResponse as CallReasonValidateResponse,
    type CallReasonListResponsesDefaultFlatPagination as CallReasonListResponsesDefaultFlatPagination,
    type CallReasonListParams as CallReasonListParams,
    type CallReasonValidateParams as CallReasonValidateParams,
  };
}
