// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CountryCoverage extends APIResource {
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

export interface CountryCoverageRetrieveResponse {
  data?: { [key: string]: CountryCoverageRetrieveResponse.Data };
}

export namespace CountryCoverageRetrieveResponse {
  export interface Data {
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

    local?: Data.Local;

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

    toll_free?: Data.TollFree;
  }

  export namespace Data {
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
}

export interface CountryCoverageRetrieveCountryResponse {
  data?: CountryCoverageRetrieveCountryResponse.Data;
}

export namespace CountryCoverageRetrieveCountryResponse {
  export interface Data {
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

    local?: Data.Local;

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

    toll_free?: Data.TollFree;
  }

  export namespace Data {
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
}

export declare namespace CountryCoverage {
  export {
    type CountryCoverageRetrieveResponse as CountryCoverageRetrieveResponse,
    type CountryCoverageRetrieveCountryResponse as CountryCoverageRetrieveCountryResponse,
  };
}
