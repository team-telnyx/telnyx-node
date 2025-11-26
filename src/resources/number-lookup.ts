// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NumberLookup extends APIResource {
  /**
   * Returns information about the provided phone number.
   */
  retrieve(
    phoneNumber: string,
    query: NumberLookupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberLookupRetrieveResponse> {
    return this._client.get(path`/number_lookup/${phoneNumber}`, { query, ...options });
  }
}

export interface NumberLookupRetrieveResponse {
  data?: NumberLookupRetrieveResponse.Data;
}

export namespace NumberLookupRetrieveResponse {
  export interface Data {
    caller_name?: Data.CallerName;

    carrier?: Data.Carrier;

    /**
     * Region code that matches the specific country calling code
     */
    country_code?: string;

    /**
     * Unused
     */
    fraud?: string | null;

    /**
     * Hyphen-separated national number, preceded by the national destination code
     * (NDC), with a 0 prefix, if an NDC is found
     */
    national_format?: string;

    /**
     * E164-formatted phone number
     */
    phone_number?: string;

    portability?: Data.Portability;

    /**
     * Identifies the type of record
     */
    record_type?: string;
  }

  export namespace Data {
    export interface CallerName {
      /**
       * The name of the requested phone number's owner as per the CNAM database
       */
      caller_name?: string;

      /**
       * A caller-name lookup specific error code, expressed as a stringified 5-digit
       * integer
       */
      error_code?: string;
    }

    export interface Carrier {
      /**
       * Unused
       */
      error_code?: string | null;

      /**
       * Region code that matches the specific country calling code if the requested
       * phone number type is mobile
       */
      mobile_country_code?: string;

      /**
       * National destination code (NDC), with a 0 prefix, if an NDC is found and the
       * requested phone number type is mobile
       */
      mobile_network_code?: string;

      /**
       * SPID (Service Provider ID) name, if the requested phone number has been ported;
       * otherwise, the name of carrier who owns the phone number block
       */
      name?: string;

      /**
       * If known to Telnyx and applicable, the primary network carrier.
       */
      normalized_carrier?: string;

      /**
       * A phone number type that identifies the type of service associated with the
       * requested phone number
       */
      type?:
        | 'fixed line'
        | 'mobile'
        | 'voip'
        | 'fixed line or mobile'
        | 'toll free'
        | 'premium rate'
        | 'shared cost'
        | 'personal number'
        | 'pager'
        | 'uan'
        | 'voicemail'
        | 'unknown';
    }

    export interface Portability {
      /**
       * Alternative SPID (Service Provider ID). Often used when a carrier is using a
       * number from another carrier
       */
      altspid?: string;

      /**
       * Alternative service provider name
       */
      altspid_carrier_name?: string;

      /**
       * Alternative service provider type
       */
      altspid_carrier_type?: string;

      /**
       * City name extracted from the locality in the Local Exchange Routing Guide (LERG)
       * database
       */
      city?: string;

      /**
       * Type of number
       */
      line_type?: string;

      /**
       * Local Routing Number, if assigned to the requested phone number
       */
      lrn?: string;

      /**
       * Operating Company Name (OCN) as per the Local Exchange Routing Guide (LERG)
       * database
       */
      ocn?: string;

      /**
       * ISO-formatted date when the requested phone number has been ported
       */
      ported_date?: string;

      /**
       * Indicates whether or not the requested phone number has been ported
       */
      ported_status?: 'Y' | 'N' | '';

      /**
       * SPID (Service Provider ID)
       */
      spid?: string;

      /**
       * Service provider name
       */
      spid_carrier_name?: string;

      /**
       * Service provider type
       */
      spid_carrier_type?: string;

      state?: string;
    }
  }
}

export interface NumberLookupRetrieveParams {
  /**
   * Specifies the type of number lookup to be performed
   */
  type?: 'carrier' | 'caller-name';
}

export declare namespace NumberLookup {
  export {
    type NumberLookupRetrieveResponse as NumberLookupRetrieveResponse,
    type NumberLookupRetrieveParams as NumberLookupRetrieveParams,
  };
}
