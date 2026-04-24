// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Country Coverage
 */
export class CountryCoverageResource extends APIResource {
  /**
   * Get country coverage
   */
  retrieve(options?: RequestOptions): APIPromise<CountryCoverageRetrieveResponse> {
    return this._client.get('/country_coverage', options);
  }

  /**
   * Get coverage for a specific country
   */
  retrieveCountry(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryCoverageRetrieveCountryResponse> {
    return this._client.get(path`/country_coverage/countries/${countryCode}`, options);
  }
}

export interface CountryCoverage {
  /**
   * Country ISO code
   */
  code?: string;

  /**
   * Set of features supported
   */
  features?: Array<string>;

  international_sms?: boolean;

  /**
   * Indicates whether country can be queried with inventory coverage endpoint
   */
  inventory_coverage?: boolean;

  local?: CountryCoverage.Local;

  mobile?: { [key: string]: unknown };

  national?: { [key: string]: unknown };

  numbers?: boolean;

  p2p?: boolean;

  /**
   * Phone number type
   */
  phone_number_type?: Array<string>;

  /**
   * Supports quickship
   */
  quickship?: boolean;

  /**
   * Geographic region (e.g., AMER, EMEA, APAC)
   */
  region?: string | null;

  /**
   * Supports reservable
   */
  reservable?: boolean;

  shared_cost?: { [key: string]: unknown };

  toll_free?: CountryCoverage.TollFree;
}

export namespace CountryCoverage {
  export interface Local {
    features?: Array<string>;

    full_pstn_replacement?: boolean;

    international_sms?: boolean;

    p2p?: boolean;

    quickship?: boolean;

    reservable?: boolean;
  }

  export interface TollFree {
    features?: Array<string>;

    full_pstn_replacement?: boolean;

    international_sms?: boolean;

    p2p?: boolean;

    quickship?: boolean;

    reservable?: boolean;
  }
}

export interface CountryCoverageRetrieveResponse {
  data?: { [key: string]: CountryCoverage };
}

export interface CountryCoverageRetrieveCountryResponse {
  data?: CountryCoverage;
}

export declare namespace CountryCoverageResource {
  export {
    type CountryCoverage as CountryCoverage,
    type CountryCoverageRetrieveResponse as CountryCoverageRetrieveResponse,
    type CountryCoverageRetrieveCountryResponse as CountryCoverageRetrieveCountryResponse,
  };
}
