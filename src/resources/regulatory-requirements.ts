// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RegulatoryRequirements extends APIResource {
  /**
   * Retrieve regulatory requirements
   */
  retrieve(
    query: RegulatoryRequirementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegulatoryRequirementRetrieveResponse> {
    return this._client.get('/regulatory_requirements', { query, ...options });
  }
}

export interface RegulatoryRequirementRetrieveResponse {
  data?: Array<RegulatoryRequirementRetrieveResponse.Data>;
}

export namespace RegulatoryRequirementRetrieveResponse {
  export interface Data {
    action?: string;

    country_code?: string;

    phone_number_type?: string;

    regulatory_requirements?: Array<Data.RegulatoryRequirement>;
  }

  export namespace Data {
    export interface RegulatoryRequirement {
      id?: string;

      acceptance_criteria?: RegulatoryRequirement.AcceptanceCriteria;

      description?: string;

      example?: string;

      field_type?: string;

      name?: string;
    }

    export namespace RegulatoryRequirement {
      export interface AcceptanceCriteria {
        acceptable_characters?: string;

        acceptable_values?: Array<string>;

        case_sensitive?: string;

        locality_limit?: string;

        max_length?: string;

        min_length?: string;

        regex?: string;

        time_limit?: string;
      }
    }
  }
}

export interface RegulatoryRequirementRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[requirement_group_id], filter[country_code],
   * filter[phone_number_type], filter[action]
   */
  filter?: RegulatoryRequirementRetrieveParams.Filter;
}

export namespace RegulatoryRequirementRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number], filter[requirement_group_id], filter[country_code],
   * filter[phone_number_type], filter[action]
   */
  export interface Filter {
    /**
     * Action to check requirements for
     */
    action?: 'ordering' | 'porting' | 'action';

    /**
     * Country code(iso2) to check requirements for
     */
    country_code?: string;

    /**
     * Phone number to check requirements for
     */
    phone_number?: string;

    /**
     * Phone number type to check requirements for
     */
    phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost';

    /**
     * ID of requirement group to check requirements for
     */
    requirement_group_id?: string;
  }
}

export declare namespace RegulatoryRequirements {
  export {
    type RegulatoryRequirementRetrieveResponse as RegulatoryRequirementRetrieveResponse,
    type RegulatoryRequirementRetrieveParams as RegulatoryRequirementRetrieveParams,
  };
}
