// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionSubmitVerificationCodeParams, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const verifiedNumber of client.verifiedNumbers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VerifiedNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VerifiedNumbersDefaultFlatPagination, VerifiedNumber> {
    return this._client.getAPIList('/verified_numbers', DefaultFlatPagination<VerifiedNumber>, {
      query,
      ...options,
    });
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

export type VerifiedNumbersDefaultFlatPagination = DefaultFlatPagination<VerifiedNumber>;

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
  extension?: string;
}

export interface VerifiedNumberListParams extends DefaultFlatPaginationParams {}

VerifiedNumbers.Actions = Actions;

export declare namespace VerifiedNumbers {
  export {
    type VerifiedNumber as VerifiedNumber,
    type VerifiedNumberDataWrapper as VerifiedNumberDataWrapper,
    type VerifiedNumberCreateResponse as VerifiedNumberCreateResponse,
    type VerifiedNumbersDefaultFlatPagination as VerifiedNumbersDefaultFlatPagination,
    type VerifiedNumberCreateParams as VerifiedNumberCreateParams,
    type VerifiedNumberListParams as VerifiedNumberListParams,
  };

  export {
    Actions as Actions,
    type ActionSubmitVerificationCodeParams as ActionSubmitVerificationCodeParams,
  };
}
