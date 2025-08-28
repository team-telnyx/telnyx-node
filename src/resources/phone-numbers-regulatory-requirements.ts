// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PhoneNumbersRegulatoryRequirements extends APIResource {
  /**
   * Retrieve regulatory requirements for a list of phone numbers
   */
  retrieve(
    query: PhoneNumbersRegulatoryRequirementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumbersRegulatoryRequirementRetrieveResponse> {
    return this._client.get('/phone_numbers_regulatory_requirements', { query, ...options });
  }
}

export interface PhoneNumbersRegulatoryRequirementRetrieveResponse {
  data?: Array<PhoneNumbersRegulatoryRequirementRetrieveResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PhoneNumbersRegulatoryRequirementRetrieveResponse {
  export interface Data {
    phone_number?: string;

    phone_number_type?: string;

    record_type?: string;

    region_information?: Array<Data.RegionInformation>;

    regulatory_requirements?: Array<Data.RegulatoryRequirement>;
  }

  export namespace Data {
    export interface RegionInformation {
      region_name?: string;

      region_type?: string;
    }

    export interface RegulatoryRequirement {
      id?: string;

      acceptance_criteria?: RegulatoryRequirement.AcceptanceCriteria;

      description?: string;

      example?: string;

      field_type?: string;

      label?: string;

      record_type?: string;
    }

    export namespace RegulatoryRequirement {
      export interface AcceptanceCriteria {
        field_type?: string;

        field_value?: string;

        locality_limit?: string;
      }
    }
  }
}

export interface PhoneNumbersRegulatoryRequirementRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number]
   */
  filter?: PhoneNumbersRegulatoryRequirementRetrieveParams.Filter;
}

export namespace PhoneNumbersRegulatoryRequirementRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number]
   */
  export interface Filter {
    /**
     * Record type phone number/ phone numbers
     */
    phone_number?: string;
  }
}

export declare namespace PhoneNumbersRegulatoryRequirements {
  export {
    type PhoneNumbersRegulatoryRequirementRetrieveResponse as PhoneNumbersRegulatoryRequirementRetrieveResponse,
    type PhoneNumbersRegulatoryRequirementRetrieveParams as PhoneNumbersRegulatoryRequirementRetrieveParams,
  };
}
