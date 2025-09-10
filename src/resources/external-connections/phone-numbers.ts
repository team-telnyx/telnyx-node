// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExternalConnectionsAPI from './external-connections';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * Return the details of a phone number associated with the given external
   * connection.
   *
   * @example
   * ```ts
   * const phoneNumber =
   *   await client.externalConnections.phoneNumbers.retrieve(
   *     '1234567889',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    phoneNumberID: string,
    params: PhoneNumberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/external_connections/${id}/phone_numbers/${phoneNumberID}`, options);
  }

  /**
   * Asynchronously update settings of the phone number associated with the given
   * external connection.
   *
   * @example
   * ```ts
   * const phoneNumber =
   *   await client.externalConnections.phoneNumbers.update(
   *     '1234567889',
   *     { id: 'id' },
   *   );
   * ```
   */
  update(
    phoneNumberID: string,
    params: PhoneNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/external_connections/${id}/phone_numbers/${phoneNumberID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of all active phone numbers associated with the given external
   * connection.
   *
   * @example
   * ```ts
   * const phoneNumbers =
   *   await client.externalConnections.phoneNumbers.list('id');
   * ```
   */
  list(
    id: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberListResponse> {
    return this._client.get(path`/external_connections/${id}/phone_numbers`, { query, ...options });
  }
}

export interface ExternalConnectionPhoneNumber {
  acquired_capabilities?: Array<
    'FirstPartyAppAssignment' | 'InboundCalling' | 'Office365' | 'OutboundCalling' | 'UserAssignment'
  >;

  /**
   * Identifies the civic address assigned to the phone number.
   */
  civic_address_id?: string;

  /**
   * The iso country code that will be displayed to the user when they receive a call
   * from this phone number.
   */
  displayed_country_code?: string;

  /**
   * Identifies the location assigned to the phone number.
   */
  location_id?: string;

  /**
   * Phone number ID from the Telnyx API.
   */
  number_id?: string;

  /**
   * Phone number in E164 format.
   */
  telephone_number?: string;

  /**
   * Uniquely identifies the resource.
   */
  ticket_id?: string;
}

export interface PhoneNumberRetrieveResponse {
  data?: ExternalConnectionPhoneNumber;
}

export interface PhoneNumberUpdateResponse {
  data?: ExternalConnectionPhoneNumber;
}

export interface PhoneNumberListResponse {
  data?: Array<ExternalConnectionPhoneNumber>;

  meta?: ExternalConnectionsAPI.ExternalVoiceIntegrationsPaginationMeta;
}

export interface PhoneNumberRetrieveParams {
  /**
   * Identifies the resource.
   */
  id: string;
}

export interface PhoneNumberUpdateParams {
  /**
   * Path param: Identifies the resource.
   */
  id: string;

  /**
   * Body param: Identifies the location to assign the phone number to.
   */
  location_id?: string;
}

export interface PhoneNumberListParams {
  /**
   * Filter parameter for phone numbers (deepObject style). Supports filtering by
   * phone_number, civic_address_id, and location_id with eq/contains operations.
   */
  filter?: PhoneNumberListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: PhoneNumberListParams.Page;
}

export namespace PhoneNumberListParams {
  /**
   * Filter parameter for phone numbers (deepObject style). Supports filtering by
   * phone_number, civic_address_id, and location_id with eq/contains operations.
   */
  export interface Filter {
    civic_address_id?: Filter.CivicAddressID;

    location_id?: Filter.LocationID;

    phone_number?: Filter.PhoneNumber;
  }

  export namespace Filter {
    export interface CivicAddressID {
      /**
       * The civic address ID to filter by
       */
      eq?: string;
    }

    export interface LocationID {
      /**
       * The location ID to filter by
       */
      eq?: string;
    }

    export interface PhoneNumber {
      /**
       * The phone number to filter by (partial match)
       */
      contains?: string;

      /**
       * The phone number to filter by (exact match)
       */
      eq?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace PhoneNumbers {
  export {
    type ExternalConnectionPhoneNumber as ExternalConnectionPhoneNumber,
    type PhoneNumberRetrieveResponse as PhoneNumberRetrieveResponse,
    type PhoneNumberUpdateResponse as PhoneNumberUpdateResponse,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
  };
}
