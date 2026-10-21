// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Look up phone number data
 */
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
    /**
     * Identity information for the phone number's owner, including name and postal
     * address. Populated when `type=caller-identity` is requested.
     */
    caller_identity?: Data.CallerIdentity;

    caller_name?: Data.CallerName;

    carrier?: Data.Carrier;

    /**
     * Region code that matches the specific country calling code
     */
    country_code?: string;

    /**
     * Enhanced caller name for the phone number's owner. Populated when
     * `type=enhanced-caller-name` is requested.
     */
    enhanced_caller_name?: Data.EnhancedCallerName;

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
     * Network number ID (NNID) override for the phone number, when one applies
     * (available only to accounts enabled for NNID); otherwise null.
     */
    nnid_override?: Data.NnidOverride | null;

    /**
     * E164-formatted phone number
     */
    phone_number?: string;

    portability?: Data.Portability;

    /**
     * Identifies the type of record
     */
    record_type?: string;

    /**
     * Indicates whether the phone number is valid.
     */
    valid_number?: boolean;
  }

  export namespace Data {
    /**
     * Identity information for the phone number's owner, including name and postal
     * address. Populated when `type=caller-identity` is requested.
     */
    export interface CallerIdentity {
      /**
       * Postal address associated with the phone number's owner.
       */
      address?: CallerIdentity.Address;

      /**
       * How strongly the phone number is linked to the returned name, on a scale of 50
       * to 90 (higher means more supporting signals). Reflects signal strength, not
       * probability: 70 indicates stronger, more consistent evidence than 60, not a 70%
       * chance of being correct. As a guide, 70+ is high confidence, 60 moderate, and 50
       * limited. Below 50 no name is returned, so scores under 50 are never present.
       */
      confidence_score?: number | null;

      /**
       * A lookup-specific error code if the identity could not be resolved; otherwise
       * null.
       */
      error_code?: string | null;

      /**
       * The name associated with the phone number.
       */
      name?: string | null;
    }

    export namespace CallerIdentity {
      /**
       * Postal address associated with the phone number's owner.
       */
      export interface Address {
        /**
         * City.
         */
        city?: string | null;

        /**
         * Two-letter ISO 3166-1 country code.
         */
        country_code?: string | null;

        /**
         * Postal or ZIP code.
         */
        postal_code?: string | null;

        /**
         * Two-letter state or province code.
         */
        state_code?: string | null;

        /**
         * First line of the street address.
         */
        street_line_1?: string | null;

        /**
         * Second line of the street address, if any.
         */
        street_line_2?: string | null;

        /**
         * ZIP+4 extension, if available.
         */
        zip4?: string | null;
      }
    }

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

    /**
     * Enhanced caller name for the phone number's owner. Populated when
     * `type=enhanced-caller-name` is requested.
     */
    export interface EnhancedCallerName {
      /**
       * The name associated with the phone number.
       */
      caller_name?: string | null;

      /**
       * A lookup-specific error code if the enhanced caller name could not be resolved;
       * otherwise null.
       */
      error_code?: string | null;
    }

    /**
     * Network number ID (NNID) override for the phone number, when one applies
     * (available only to accounts enabled for NNID); otherwise null.
     */
    export interface NnidOverride {
      /**
       * Name associated with the NNID.
       */
      name?: string;

      /**
       * The network number ID.
       */
      nnid?: string;

      /**
       * The NNID type.
       */
      type?: string;
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
       * The line type of the phone number. Uses the same value set as carrier.type; see
       * the API reference for the full list.
       */
      line_type?:
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
   * Specifies the type of number lookup to be performed. May be supplied more than
   * once to request several data sources in a single call (for example,
   * `?type=carrier&type=enhanced-caller-name`). Each requested type populates the
   * corresponding object in the response.
   */
  type?: 'carrier' | 'caller-name' | 'caller-identity' | 'enhanced-caller-name';
}

export declare namespace NumberLookup {
  export {
    type NumberLookupRetrieveResponse as NumberLookupRetrieveResponse,
    type NumberLookupRetrieveParams as NumberLookupRetrieveParams,
  };
}
