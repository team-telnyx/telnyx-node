// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AvailablePhoneNumberBlocks extends APIResource {
  /**
   * List available phone number blocks
   */
  list(
    query: AvailablePhoneNumberBlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvailablePhoneNumberBlockListResponse> {
    return this._client.get('/available_phone_number_blocks', { query, ...options });
  }
}

export interface AvailablePhoneNumberBlockListResponse {
  data?: Array<AvailablePhoneNumberBlockListResponse.Data>;

  meta?: Shared.AvailablePhoneNumbersMetadata;
}

export namespace AvailablePhoneNumberBlockListResponse {
  export interface Data {
    cost_information?: Data.CostInformation;

    features?: Array<Data.Feature>;

    range?: number;

    record_type?: 'available_phone_number_block';

    region_information?: Array<Data.RegionInformation>;

    starting_number?: string;
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

export interface AvailablePhoneNumberBlockListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[locality],
   * filter[country_code], filter[national_destination_code],
   * filter[phone_number_type]
   */
  filter?: AvailablePhoneNumberBlockListParams.Filter;
}

export namespace AvailablePhoneNumberBlockListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[locality],
   * filter[country_code], filter[national_destination_code],
   * filter[phone_number_type]
   */
  export interface Filter {
    /**
     * Filter phone numbers by country.
     */
    country_code?: string;

    /**
     * Filter phone numbers by city.
     */
    locality?: string;

    /**
     * Filter by the national destination code of the number.
     */
    national_destination_code?: string;

    /**
     * Filter phone numbers by number type.
     */
    phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost';
  }
}

export declare namespace AvailablePhoneNumberBlocks {
  export {
    type AvailablePhoneNumberBlockListResponse as AvailablePhoneNumberBlockListResponse,
    type AvailablePhoneNumberBlockListParams as AvailablePhoneNumberBlockListParams,
  };
}
