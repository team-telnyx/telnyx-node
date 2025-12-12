// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AvailablePhoneNumbers extends APIResource {
  /**
   * List available phone numbers
   */
  list(
    query: AvailablePhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvailablePhoneNumberListResponse> {
    return this._client.get('/available_phone_numbers', { query, ...options });
  }
}

export interface AvailablePhoneNumberListResponse {
  data?: Array<AvailablePhoneNumberListResponse.Data>;

  meta?: Shared.AvailablePhoneNumbersMetadata;

  metadata?: Shared.AvailablePhoneNumbersMetadata;
}

export namespace AvailablePhoneNumberListResponse {
  export interface Data {
    /**
     * Specifies whether the phone number is an exact match based on the search
     * criteria or not.
     */
    best_effort?: boolean;

    cost_information?: Data.CostInformation;

    features?: Array<Data.Feature>;

    phone_number?: string;

    /**
     * Specifies whether the phone number can receive calls immediately after purchase
     * or not.
     */
    quickship?: boolean;

    record_type?: 'available_phone_number';

    region_information?: Array<Data.RegionInformation>;

    /**
     * Specifies whether the phone number can be reserved before purchase or not.
     */
    reservable?: boolean;

    vanity_format?: string;
  }

  export namespace Data {
    export interface CostInformation {
      /**
       * The ISO 4217 code for the currency.
       */
      currency?: string;

      monthly_cost?: string;

      upfront_cost?: string;
    }

    export interface Feature {
      name?: string;
    }

    export interface RegionInformation {
      region_name?: string;

      region_type?: 'country_code' | 'rate_center' | 'state' | 'location';
    }
  }
}

export interface AvailablePhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[locality], filter[administrative_area],
   * filter[country_code], filter[national_destination_code], filter[rate_center],
   * filter[phone_number_type], filter[features], filter[limit], filter[best_effort],
   * filter[quickship], filter[reservable], filter[exclude_held_numbers]
   */
  filter?: AvailablePhoneNumberListParams.Filter;
}

export namespace AvailablePhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[locality], filter[administrative_area],
   * filter[country_code], filter[national_destination_code], filter[rate_center],
   * filter[phone_number_type], filter[features], filter[limit], filter[best_effort],
   * filter[quickship], filter[reservable], filter[exclude_held_numbers]
   */
  export interface Filter {
    /**
     * Find numbers in a particular US state or CA province.
     */
    administrative_area?: string;

    /**
     * Filter to determine if best effort results should be included. Only available in
     * USA/CANADA.
     */
    best_effort?: boolean;

    /**
     * Filter phone numbers by country.
     */
    country_code?: string;

    /**
     * Filter to exclude phone numbers that are currently on hold/reserved for your
     * account.
     */
    exclude_held_numbers?: boolean;

    /**
     * Filter phone numbers with specific features.
     */
    features?: Array<
      'sms' | 'mms' | 'voice' | 'fax' | 'emergency' | 'hd_voice' | 'international_sms' | 'local_calling'
    >;

    /**
     * Limits the number of results.
     */
    limit?: number;

    /**
     * Filter phone numbers by city.
     */
    locality?: string;

    /**
     * Filter by the national destination code of the number.
     */
    national_destination_code?: string;

    /**
     * Filter phone numbers by pattern matching.
     */
    phone_number?: Filter.PhoneNumber;

    /**
     * Filter phone numbers by number type.
     */
    phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost';

    /**
     * Filter to exclude phone numbers that need additional time after to purchase to
     * activate. Only applicable for +1 toll_free numbers.
     */
    quickship?: boolean;

    /**
     * Filter phone numbers by rate center. This filter is only applicable to USA and
     * Canada numbers.
     */
    rate_center?: string;

    /**
     * Filter to ensure only numbers that can be reserved are included in the results.
     */
    reservable?: boolean;
  }

  export namespace Filter {
    /**
     * Filter phone numbers by pattern matching.
     */
    export interface PhoneNumber {
      /**
       * Filter numbers containing a pattern (excludes NDC if used with
       * `national_destination_code` filter).
       */
      contains?: string;

      /**
       * Filter numbers ending with a pattern (excludes NDC if used with
       * `national_destination_code` filter).
       */
      ends_with?: string;

      /**
       * Filter numbers starting with a pattern (excludes NDC if used with
       * `national_destination_code` filter).
       */
      starts_with?: string;
    }
  }
}

export declare namespace AvailablePhoneNumbers {
  export {
    type AvailablePhoneNumberListResponse as AvailablePhoneNumberListResponse,
    type AvailablePhoneNumberListParams as AvailablePhoneNumberListParams,
  };
}
