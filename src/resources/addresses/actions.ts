// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Accepts this address suggestion as a new emergency address for Operator Connect
   * and finishes the uploads of the numbers associated with it to Microsoft.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addresses.actions.acceptSuggestions(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  acceptSuggestions(
    addressUuid: string,
    body: ActionAcceptSuggestionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionAcceptSuggestionsResponse> {
    return this._client.post(path`/addresses/${addressUuid}/actions/accept_suggestions`, {
      body,
      ...options,
    });
  }

  /**
   * Validates an address for emergency services.
   *
   * @example
   * ```ts
   * const response = await client.addresses.actions.validate({
   *   country_code: 'US',
   *   postal_code: '78701',
   *   street_address: '600 Congress Avenue',
   * });
   * ```
   */
  validate(body: ActionValidateParams, options?: RequestOptions): APIPromise<ActionValidateResponse> {
    return this._client.post('/addresses/actions/validate', { body, ...options });
  }
}

export interface ActionAcceptSuggestionsResponse {
  data?: ActionAcceptSuggestionsResponse.Data;
}

export namespace ActionAcceptSuggestionsResponse {
  export interface Data {
    /**
     * The UUID of the location.
     */
    id?: string;

    /**
     * Indicates if the address suggestions are accepted.
     */
    accepted?: boolean;

    record_type?: 'address_suggestion';
  }
}

export interface ActionValidateResponse {
  data?: ActionValidateResponse.Data;
}

export namespace ActionValidateResponse {
  export interface Data {
    /**
     * Indicates whether an address is valid or invalid.
     */
    result: 'valid' | 'invalid';

    /**
     * Provides normalized address when available.
     */
    suggested: Data.Suggested;

    errors?: Array<Shared.APIError>;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }

  export namespace Data {
    /**
     * Provides normalized address when available.
     */
    export interface Suggested {
      /**
       * The locality of the address. For US addresses, this corresponds to the state of
       * the address.
       */
      administrative_area?: string;

      /**
       * The two-character (ISO 3166-1 alpha-2) country code of the address.
       */
      country_code?: string;

      /**
       * Additional street address information about the address such as, but not limited
       * to, unit number or apartment number.
       */
      extended_address?: string;

      /**
       * The locality of the address. For US addresses, this corresponds to the city of
       * the address.
       */
      locality?: string;

      /**
       * The postal code of the address.
       */
      postal_code?: string;

      /**
       * The primary street address information about the address.
       */
      street_address?: string;

      [k: string]: unknown;
    }
  }
}

export interface ActionAcceptSuggestionsParams {
  /**
   * The ID of the address.
   */
  id?: string;
}

export interface ActionValidateParams {
  /**
   * The two-character (ISO 3166-1 alpha-2) country code of the address.
   */
  country_code: string;

  /**
   * The postal code of the address.
   */
  postal_code: string;

  /**
   * The primary street address information about the address.
   */
  street_address: string;

  /**
   * The locality of the address. For US addresses, this corresponds to the state of
   * the address.
   */
  administrative_area?: string;

  /**
   * Additional street address information about the address such as, but not limited
   * to, unit number or apartment number.
   */
  extended_address?: string;

  /**
   * The locality of the address. For US addresses, this corresponds to the city of
   * the address.
   */
  locality?: string;
}

export declare namespace Actions {
  export {
    type ActionAcceptSuggestionsResponse as ActionAcceptSuggestionsResponse,
    type ActionValidateResponse as ActionValidateResponse,
    type ActionAcceptSuggestionsParams as ActionAcceptSuggestionsParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
