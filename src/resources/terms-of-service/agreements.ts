// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Accept and review the Branded Calling and Phone Number Reputation terms of service.
 */
export class Agreements extends APIResource {
  /**
   * Retrieve a single ToS agreement record. Returns `404` if the agreement does not
   * exist or does not belong to the authenticated user.
   */
  retrieve(agreementID: string, options?: RequestOptions): APIPromise<AgreementRetrieveResponse> {
    return this._client.get(path`/terms_of_service/agreements/${agreementID}`, options);
  }

  /**
   * Returns the Terms of Service agreements the authenticated user has on file. Each
   * entry records the version agreed to and when. Most users only have one agreement
   * per product, but if the ToS is updated and the user re-agrees a new entry is
   * added.
   *
   * Results are paginated with the standard `page[number]` / `page[size]`
   * parameters; the response uses the standard `{data, meta}` JSON:API envelope.
   *
   * By default this returns agreements for **all** products the user has agreed to.
   * Pass the `product_type` query parameter to scope the result to a single product.
   */
  list(
    query: AgreementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgreementListResponsesDefaultFlatPagination, AgreementListResponse> {
    return this._client.getAPIList(
      '/terms_of_service/agreements',
      DefaultFlatPagination<AgreementListResponse>,
      { query, ...options },
    );
  }
}

export type AgreementListResponsesDefaultFlatPagination = DefaultFlatPagination<AgreementListResponse>;

export interface AgreementRetrieveResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface - the caller already knows
   * their own identity.
   */
  data: AgreementRetrieveResponse.Data;
}

export namespace AgreementRetrieveResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface - the caller already knows
   * their own identity.
   */
  export interface Data {
    id?: string;

    agreed_at?: string;

    created_at?: string;

    /**
     * Telnyx product the Terms of Service apply to.
     */
    product_type?: 'branded_calling' | 'number_reputation';

    terms_version?: string;

    /**
     * Convenience alias of `terms_version`. Both keys are present on every response.
     */
    version?: string;
  }
}

/**
 * A recorded user agreement to a product's Terms of Service. The `user_id` is
 * intentionally NOT echoed back on this public surface - the caller already knows
 * their own identity.
 */
export interface AgreementListResponse {
  id?: string;

  agreed_at?: string;

  created_at?: string;

  /**
   * Telnyx product the Terms of Service apply to.
   */
  product_type?: 'branded_calling' | 'number_reputation';

  terms_version?: string;

  /**
   * Convenience alias of `terms_version`. Both keys are present on every response.
   */
  version?: string;
}

export interface AgreementListParams extends DefaultFlatPaginationParams {
  /**
   * Optional filter. Omit to list the user's agreements for **every** product
   * (branded_calling and number_reputation); pass a value to return only that
   * product's agreements.
   */
  product_type?: 'branded_calling' | 'number_reputation';
}

export declare namespace Agreements {
  export {
    type AgreementRetrieveResponse as AgreementRetrieveResponse,
    type AgreementListResponse as AgreementListResponse,
    type AgreementListResponsesDefaultFlatPagination as AgreementListResponsesDefaultFlatPagination,
    type AgreementListParams as AgreementListParams,
  };
}
