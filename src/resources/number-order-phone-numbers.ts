// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NumberOrderPhoneNumbers extends APIResource {
  /**
   * Get an existing phone number in number order.
   */
  retrieve(
    numberOrderPhoneNumberID: string,
    options?: RequestOptions,
  ): APIPromise<NumberOrderPhoneNumberRetrieveResponse> {
    return this._client.get(path`/number_order_phone_numbers/${numberOrderPhoneNumberID}`, options);
  }

  /**
   * Get a list of phone numbers associated to orders.
   */
  list(
    query: NumberOrderPhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberOrderPhoneNumberListResponse> {
    return this._client.get('/number_order_phone_numbers', { query, ...options });
  }

  /**
   * Update requirement group for a phone number order
   */
  updateRequirementGroup(
    id: string,
    body: NumberOrderPhoneNumberUpdateRequirementGroupParams,
    options?: RequestOptions,
  ): APIPromise<NumberOrderPhoneNumberUpdateRequirementGroupResponse> {
    return this._client.post(path`/number_order_phone_numbers/${id}/requirement_group`, { body, ...options });
  }

  /**
   * Updates requirements for a single phone number within a number order.
   */
  updateRequirements(
    numberOrderPhoneNumberID: string,
    body: NumberOrderPhoneNumberUpdateRequirementsParams,
    options?: RequestOptions,
  ): APIPromise<NumberOrderPhoneNumberUpdateRequirementsResponse> {
    return this._client.patch(path`/number_order_phone_numbers/${numberOrderPhoneNumberID}`, {
      body,
      ...options,
    });
  }
}

export interface NumberOrderPhoneNumber {
  id?: string;

  bundle_id?: string | null;

  country_code?: string;

  deadline?: string;

  is_block_number?: boolean;

  locality?: string;

  order_request_id?: string;

  phone_number?: string;

  phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline';

  record_type?: string;

  regulatory_requirements?: Array<Shared.SubNumberOrderRegulatoryRequirementWithValue>;

  /**
   * True if all requirements are met for a phone number, false otherwise.
   */
  requirements_met?: boolean;

  /**
   * Status of requirements (if applicable)
   */
  requirements_status?:
    | 'pending'
    | 'approved'
    | 'cancelled'
    | 'deleted'
    | 'requirement-info-exception'
    | 'requirement-info-pending'
    | 'requirement-info-under-review';

  /**
   * The status of the phone number in the order.
   */
  status?: 'pending' | 'success' | 'failure';

  sub_number_order_id?: string;
}

export interface UpdateRegulatoryRequirement {
  /**
   * The value of the requirement. For address and document requirements, this should
   * be the ID of the resource. For textual, this should be the value of the
   * requirement.
   */
  field_value?: string;

  /**
   * Unique id for a requirement.
   */
  requirement_id?: string;
}

export interface NumberOrderPhoneNumberRetrieveResponse {
  data?: NumberOrderPhoneNumber;
}

export interface NumberOrderPhoneNumberListResponse {
  data?: Array<NumberOrderPhoneNumber>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface NumberOrderPhoneNumberUpdateRequirementGroupResponse {
  data?: NumberOrderPhoneNumberUpdateRequirementGroupResponse.Data;
}

export namespace NumberOrderPhoneNumberUpdateRequirementGroupResponse {
  export interface Data {
    id?: string;

    bundle_id?: string | null;

    country_code?: string;

    deadline?: string;

    is_block_number?: boolean;

    locality?: string;

    order_request_id?: string;

    phone_number?: string;

    phone_number_type?: string;

    record_type?: string;

    regulatory_requirements?: Array<Data.RegulatoryRequirement>;

    requirements_met?: boolean;

    requirements_status?: string;

    status?: string;

    sub_number_order_id?: string;
  }

  export namespace Data {
    export interface RegulatoryRequirement {
      field_type?: string;

      field_value?: string;

      requirement_id?: string;

      status?: string;
    }
  }
}

export interface NumberOrderPhoneNumberUpdateRequirementsResponse {
  data?: NumberOrderPhoneNumber;
}

export interface NumberOrderPhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[country_code]
   */
  filter?: NumberOrderPhoneNumberListParams.Filter;
}

export namespace NumberOrderPhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[country_code]
   */
  export interface Filter {
    /**
     * Country code of the order phone number.
     */
    country_code?: string;
  }
}

export interface NumberOrderPhoneNumberUpdateRequirementGroupParams {
  /**
   * The ID of the requirement group to associate
   */
  requirement_group_id: string;
}

export interface NumberOrderPhoneNumberUpdateRequirementsParams {
  regulatory_requirements?: Array<UpdateRegulatoryRequirement>;
}

export declare namespace NumberOrderPhoneNumbers {
  export {
    type NumberOrderPhoneNumber as NumberOrderPhoneNumber,
    type UpdateRegulatoryRequirement as UpdateRegulatoryRequirement,
    type NumberOrderPhoneNumberRetrieveResponse as NumberOrderPhoneNumberRetrieveResponse,
    type NumberOrderPhoneNumberListResponse as NumberOrderPhoneNumberListResponse,
    type NumberOrderPhoneNumberUpdateRequirementGroupResponse as NumberOrderPhoneNumberUpdateRequirementGroupResponse,
    type NumberOrderPhoneNumberUpdateRequirementsResponse as NumberOrderPhoneNumberUpdateRequirementsResponse,
    type NumberOrderPhoneNumberListParams as NumberOrderPhoneNumberListParams,
    type NumberOrderPhoneNumberUpdateRequirementGroupParams as NumberOrderPhoneNumberUpdateRequirementGroupParams,
    type NumberOrderPhoneNumberUpdateRequirementsParams as NumberOrderPhoneNumberUpdateRequirementsParams,
  };
}
