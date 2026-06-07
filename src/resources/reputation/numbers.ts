// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class Numbers extends APIResource {
  /**
   * Convenience alias for
   * `GET /v2/enterprises/{enterprise_id}/reputation/numbers/{phone_number}`.
   */
  retrieve(
    phoneNumber: string,
    query: NumberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveResponse> {
    return this._client.get(path`/reputation/numbers/${phoneNumber}`, { query, ...options });
  }

  /**
   * Convenience alias for `GET /v2/enterprises/{enterprise_id}/reputation/numbers`
   * that returns numbers across every enterprise you own. Useful when you don't want
   * to look up the enterprise id first.
   */
  list(
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NumberListResponsesDefaultFlatPagination, NumberListResponse> {
    return this._client.getAPIList('/reputation/numbers', DefaultFlatPagination<NumberListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Convenience alias for
   * `DELETE /v2/enterprises/{enterprise_id}/reputation/numbers/{phone_number}`.
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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

export interface NumberRetrieveParams {
  /**
   * When true, fetches fresh reputation data (incurs API cost). When false
   * (default), returns cached data.
   */
  fresh?: boolean;
}

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by enterprise ID.
   */
  'filter[enterprise_id]'?: string;

  /**
   * Partial match on phone number. Must contain at least 5 digits.
   */
  'filter[phone_number][contains]'?: string;

  /**
   * Exact phone-number match (E.164).
   */
  'filter[phone_number][eq]'?: string;
}

export declare namespace Numbers {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
  };
}
