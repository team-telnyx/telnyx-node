// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReputationNumbersAPI from '../enterprises/reputation/numbers';
import { ReputationPhoneNumbersDefaultFlatPagination } from '../enterprises/reputation/numbers';
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
   * Convenience alias for `GET /v2/enterprises/{enterprise_id}/reputation/numbers`
   * that returns numbers across every enterprise you own. Useful when you don't want
   * to look up the enterprise id first.
   */
  list(
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReputationPhoneNumbersDefaultFlatPagination, ReputationNumbersAPI.ReputationPhoneNumber> {
    return this._client.getAPIList(
      '/reputation/numbers',
      DefaultFlatPagination<ReputationNumbersAPI.ReputationPhoneNumber>,
      { query, ...options },
    );
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

  /**
   * Convenience alias for
   * `GET /v2/enterprises/{enterprise_id}/reputation/numbers/{phone_number}`.
   */
  retrieve(
    phoneNumber: string,
    query: NumberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReputationNumbersAPI.ReputationPhoneNumberWithReputation> {
    return this._client.get(path`/reputation/numbers/${phoneNumber}`, { query, ...options });
  }
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

export interface NumberRetrieveParams {
  /**
   * When true, fetches fresh reputation data (incurs API cost). When false
   * (default), returns cached data.
   */
  fresh?: boolean;
}

export declare namespace Numbers {
  export { type NumberListParams as NumberListParams, type NumberRetrieveParams as NumberRetrieveParams };
}

export { type ReputationPhoneNumbersDefaultFlatPagination };
