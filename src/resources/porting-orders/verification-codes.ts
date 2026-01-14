// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VerificationCodes extends APIResource {
  /**
   * Returns a list of verification codes for a porting order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const verificationCodeListResponse of client.portingOrders.verificationCodes.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: VerificationCodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VerificationCodeListResponsesDefaultFlatPagination, VerificationCodeListResponse> {
    return this._client.getAPIList(
      path`/porting_orders/${id}/verification_codes`,
      DefaultFlatPagination<VerificationCodeListResponse>,
      { query, ...options },
    );
  }

  /**
   * Send the verification code for all porting phone numbers.
   *
   * @example
   * ```ts
   * await client.portingOrders.verificationCodes.send(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  send(
    id: string,
    body: VerificationCodeSendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/porting_orders/${id}/verification_codes/send`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies the verification code for a list of phone numbers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.verificationCodes.verify(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  verify(
    id: string,
    body: VerificationCodeVerifyParams,
    options?: RequestOptions,
  ): APIPromise<VerificationCodeVerifyResponse> {
    return this._client.post(path`/porting_orders/${id}/verification_codes/verify`, { body, ...options });
  }
}

export type VerificationCodeListResponsesDefaultFlatPagination =
  DefaultFlatPagination<VerificationCodeListResponse>;

export interface VerificationCodeListResponse {
  /**
   * Uniquely identifies this porting verification code
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * E164 formatted phone number
   */
  phone_number?: string;

  /**
   * Identifies the associated porting order
   */
  porting_order_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Indicates whether the verification code has been verified
   */
  verified?: boolean;
}

export interface VerificationCodeVerifyResponse {
  data?: Array<VerificationCodeVerifyResponse.Data>;
}

export namespace VerificationCodeVerifyResponse {
  export interface Data {
    /**
     * Uniquely identifies this porting verification code
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * E164 formatted phone number
     */
    phone_number?: string;

    /**
     * Identifies the associated porting order
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * Indicates whether the verification code has been verified
     */
    verified?: boolean;
  }
}

export interface VerificationCodeListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[verified]
   */
  filter?: VerificationCodeListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: VerificationCodeListParams.Sort;
}

export namespace VerificationCodeListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[verified]
   */
  export interface Filter {
    /**
     * Filter verification codes that have been verified or not
     */
    verified?: boolean;
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order.
     */
    value?: 'created_at' | '-created_at';
  }
}

export interface VerificationCodeSendParams {
  phone_numbers?: Array<string>;

  verification_method?: 'sms' | 'call';
}

export interface VerificationCodeVerifyParams {
  verification_codes?: Array<VerificationCodeVerifyParams.VerificationCode>;
}

export namespace VerificationCodeVerifyParams {
  export interface VerificationCode {
    code?: string;

    phone_number?: string;
  }
}

export declare namespace VerificationCodes {
  export {
    type VerificationCodeListResponse as VerificationCodeListResponse,
    type VerificationCodeVerifyResponse as VerificationCodeVerifyResponse,
    type VerificationCodeListResponsesDefaultFlatPagination as VerificationCodeListResponsesDefaultFlatPagination,
    type VerificationCodeListParams as VerificationCodeListParams,
    type VerificationCodeSendParams as VerificationCodeSendParams,
    type VerificationCodeVerifyParams as VerificationCodeVerifyParams,
  };
}
