// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionSubmitVerificationCodeParams, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VerifiedNumbers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Initiates phone number verification procedure. Supports DTMF extension dialing
   * for voice calls to numbers behind IVR systems.
   *
   * @example
   * ```ts
   * const verifiedNumber = await client.verifiedNumbers.create({
   *   phone_number: '+15551234567',
   *   verification_method: 'sms',
   * });
   * ```
   */
  create(
    body: VerifiedNumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<VerifiedNumberCreateResponse> {
    return this._client.post('/verified_numbers', { body, ...options });
  }

  /**
   * Retrieve a verified number
   *
   * @example
   * ```ts
   * const verifiedNumberDataWrapper =
   *   await client.verifiedNumbers.retrieve('+15551234567');
   * ```
   */
  retrieve(phoneNumber: string, options?: RequestOptions): APIPromise<VerifiedNumberDataWrapper> {
    return this._client.get(path`/verified_numbers/${phoneNumber}`, options);
  }

  /**
   * Gets a paginated list of Verified Numbers.
   *
   * @example
   * ```ts
   * const verifiedNumbers = await client.verifiedNumbers.list();
   * ```
   */
  list(
    query: VerifiedNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VerifiedNumberListResponse> {
    return this._client.get('/verified_numbers', { query, ...options });
  }

  /**
   * Delete a verified number
   *
   * @example
   * ```ts
   * const verifiedNumberDataWrapper =
   *   await client.verifiedNumbers.delete('+15551234567');
   * ```
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<VerifiedNumberDataWrapper> {
    return this._client.delete(path`/verified_numbers/${phoneNumber}`, options);
  }
}

export interface VerifiedNumber {
  phone_number?: string;

  /**
   * The possible verified numbers record types.
   */
  record_type?: 'verified_number';

  verified_at?: string;
}

export interface VerifiedNumberDataWrapper {
  data?: VerifiedNumber;
}

export interface VerifiedNumberCreateResponse {
  phone_number?: string;

  verification_method?: string;
}

/**
 * A paginated list of Verified Numbers
 */
export interface VerifiedNumberListResponse {
  data: Array<VerifiedNumber>;

  meta: VerifiedNumberListResponse.Meta;
}

export namespace VerifiedNumberListResponse {
  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface VerifiedNumberCreateParams {
  phone_number: string;

  /**
   * Verification method.
   */
  verification_method: 'sms' | 'call';

  /**
   * Optional DTMF extension sequence to dial after the call is answered. This
   * parameter enables verification of phone numbers behind IVR systems that require
   * extension dialing. Valid characters: digits 0-9, letters A-D, symbols \* and #.
   * Pauses: w = 0.5 second pause, W = 1 second pause. Maximum length: 50 characters.
   * Only works with 'call' verification method.
   */
  extension?: string | null;
}

export interface VerifiedNumberListParams {
  /**
   * Consolidated page parameter (deepObject style). Use page[size] and page[number]
   * in the query string. Originally: page[size], page[number]
   */
  page?: VerifiedNumberListParams.Page;
}

export namespace VerifiedNumberListParams {
  /**
   * Consolidated page parameter (deepObject style). Use page[size] and page[number]
   * in the query string. Originally: page[size], page[number]
   */
  export interface Page {
    number?: number;

    size?: number;
  }
}

VerifiedNumbers.Actions = Actions;

export declare namespace VerifiedNumbers {
  export {
    type VerifiedNumber as VerifiedNumber,
    type VerifiedNumberDataWrapper as VerifiedNumberDataWrapper,
    type VerifiedNumberCreateResponse as VerifiedNumberCreateResponse,
    type VerifiedNumberListResponse as VerifiedNumberListResponse,
    type VerifiedNumberCreateParams as VerifiedNumberCreateParams,
    type VerifiedNumberListParams as VerifiedNumberListParams,
  };

  export {
    Actions as Actions,
    type ActionSubmitVerificationCodeParams as ActionSubmitVerificationCodeParams,
  };
}
