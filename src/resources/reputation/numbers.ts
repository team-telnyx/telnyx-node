// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { ReputationPhoneNumberWithReputationDataDefaultFlatPagination } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Associate phone numbers with an enterprise for reputation monitoring and retrieve reputation scores
 */
export class Numbers extends APIResource {
  /**
   * Get reputation data for a specific phone number without requiring an
   * `enterprise_id`.
   *
   * Same response as the enterprise-scoped endpoint. Uses cached data by default.
   */
  retrieve(
    phoneNumber: string,
    query: NumberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveResponse> {
    return this._client.get(path`/reputation/numbers/${phoneNumber}`, { query, ...options });
  }

  /**
   * List all phone numbers enrolled in Number Reputation monitoring for your
   * account. This is a simplified endpoint that does not require an `enterprise_id`
   * — it returns numbers across all your enterprises.
   *
   * Supports pagination and filtering by phone number.
   */
  list(
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    ReputationPhoneNumberWithReputationDataDefaultFlatPagination,
    Shared.ReputationPhoneNumberWithReputationData
  > {
    return this._client.getAPIList(
      '/reputation/numbers',
      DefaultFlatPagination<Shared.ReputationPhoneNumberWithReputationData>,
      { query, ...options },
    );
  }

  /**
   * Remove a phone number from Number Reputation monitoring without requiring an
   * `enterprise_id`.
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NumberRetrieveResponse {
  data?: Shared.ReputationPhoneNumberWithReputationData;
}

export interface NumberRetrieveParams {
  /**
   * When true, fetches fresh reputation data (incurs API cost). When false, returns
   * cached data.
   */
  fresh?: boolean;
}

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by specific phone number (E.164 format)
   */
  phone_number?: string;
}

export declare namespace Numbers {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
  };
}

export { type ReputationPhoneNumberWithReputationDataDefaultFlatPagination };
