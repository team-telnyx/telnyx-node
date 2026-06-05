// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
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
   * Retrieve one registered number with its latest reputation snapshot. The
   * `phone_number` path parameter is in E.164 format and must be URL-encoded (e.g.
   * `%2B19493253498`).
   *
   * @example
   * ```ts
   * const number =
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
  ): APIPromise<NumberRetrieveResponse> {
    const { enterprise_id, ...query } = params;
    return this._client.get(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      query,
      ...options,
    });
  }

  /**
   * Paginated list of phone numbers registered for reputation monitoring under this
   * enterprise. The response includes the latest reputation snapshot per number
   * where one has been collected.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const numberListResponse of client.enterprises.reputation.numbers.list(
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
  ): PagePromise<NumberListResponsesDefaultFlatPagination, NumberListResponse> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/reputation/numbers`,
      DefaultFlatPagination<NumberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Add up to 100 phone numbers to reputation monitoring on this enterprise. Each
   * must be in E.164 format (`+1NPANXXXXXX` for US/CA) and belong to your Telnyx
   * phone-number inventory.
   *
   * **Prerequisite**: reputation must already be enabled on this enterprise (see
   * `POST .../reputation`).
   *
   * **Pricing:** This is a billable action. See https://telnyx.com/pricing/numbers
   * for current pricing.
   *
   * @example
   * ```ts
   * const response =
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
  ): APIPromise<NumberAssociateResponse> {
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
}

export type NumberListResponsesDefaultFlatPagination = DefaultFlatPagination<NumberListResponse>;

export interface NumberRetrieveResponse {
  data: NumberRetrieveResponse.Data;
}

export namespace NumberRetrieveResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    enterprise_id?: string;

    /**
     * E.164 with leading `+`.
     */
    phone_number?: string;

    /**
     * `null` until the first refresh has been collected for this number.
     */
    reputation_data?: Shared.ReputationData | null;

    updated_at?: string;
  }
}

export interface NumberListResponse {
  id?: string;

  created_at?: string;

  enterprise_id?: string;

  /**
   * E.164 with leading `+`.
   */
  phone_number?: string;

  /**
   * `null` until the first refresh has been collected for this number.
   */
  reputation_data?: Shared.ReputationData | null;

  updated_at?: string;
}

export interface NumberAssociateResponse {
  data: Array<NumberAssociateResponse.Data>;

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  meta: NumberAssociateResponse.Meta;
}

export namespace NumberAssociateResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    enterprise_id?: string;

    /**
     * E.164 with leading `+`.
     */
    phone_number?: string;

    /**
     * `null` until the first refresh has been collected for this number.
     */
    reputation_data?: Shared.ReputationData | null;

    updated_at?: string;
  }

  /**
   * JSON:API pagination metadata returned with every paginated list response. Page
   * numbering is 1-based. `page_size` reports the number of items actually returned
   * in `data` for this page; the requested size is taken from the `page[size]` query
   * parameter.
   */
  export interface Meta {
    /**
     * 1-based index of this page. Echoes the `page[number]` query parameter (default
     * `1`).
     */
    page_number: number;

    /**
     * Number of items returned in this page's `data` array. Capped at 250.
     */
    page_size: number;

    /**
     * Total number of pages available given the current `page_size`.
     */
    total_pages: number;

    /**
     * Total number of items across all pages (excludes soft-deleted rows).
     */
    total_results: number;
  }
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

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by specific phone number (E.164 format).
   */
  phone_number?: string;
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

export interface NumberRefreshParams {
  /**
   * Phone numbers to refresh reputation data for. 1–100 numbers per request, each in
   * E.164 format. Reputation refreshes are subject to per-enterprise rate limits.
   */
  phone_numbers: Array<string>;
}

export declare namespace Numbers {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberAssociateResponse as NumberAssociateResponse,
    type NumberRefreshResponse as NumberRefreshResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
    type NumberAssociateParams as NumberAssociateParams,
    type NumberDisassociateParams as NumberDisassociateParams,
    type NumberRefreshParams as NumberRefreshParams,
  };
}
