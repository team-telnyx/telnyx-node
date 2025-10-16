// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RequirementGroups extends APIResource {
  /**
   * Create a new requirement group
   *
   * @example
   * ```ts
   * const requirementGroup =
   *   await client.requirementGroups.create({
   *     action: 'ordering',
   *     country_code: 'US',
   *     phone_number_type: 'local',
   *   });
   * ```
   */
  create(body: RequirementGroupCreateParams, options?: RequestOptions): APIPromise<RequirementGroup> {
    return this._client.post('/requirement_groups', { body, ...options });
  }

  /**
   * Get a single requirement group by ID
   *
   * @example
   * ```ts
   * const requirementGroup =
   *   await client.requirementGroups.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RequirementGroup> {
    return this._client.get(path`/requirement_groups/${id}`, options);
  }

  /**
   * Update requirement values in requirement group
   *
   * @example
   * ```ts
   * const requirementGroup =
   *   await client.requirementGroups.update('id');
   * ```
   */
  update(
    id: string,
    body: RequirementGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequirementGroup> {
    return this._client.patch(path`/requirement_groups/${id}`, { body, ...options });
  }

  /**
   * List requirement groups
   *
   * @example
   * ```ts
   * const requirementGroups =
   *   await client.requirementGroups.list();
   * ```
   */
  list(
    query: RequirementGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequirementGroupListResponse> {
    return this._client.get('/requirement_groups', { query, ...options });
  }

  /**
   * Delete a requirement group by ID
   *
   * @example
   * ```ts
   * const requirementGroup =
   *   await client.requirementGroups.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RequirementGroup> {
    return this._client.delete(path`/requirement_groups/${id}`, options);
  }

  /**
   * Submit a Requirement Group for Approval
   *
   * @example
   * ```ts
   * const requirementGroup =
   *   await client.requirementGroups.submitForApproval('id');
   * ```
   */
  submitForApproval(id: string, options?: RequestOptions): APIPromise<RequirementGroup> {
    return this._client.post(path`/requirement_groups/${id}/submit_for_approval`, options);
  }
}

export interface RequirementGroup {
  id?: string;

  action?: string;

  country_code?: string;

  created_at?: string;

  customer_reference?: string;

  phone_number_type?: string;

  record_type?: string;

  regulatory_requirements?: Array<RequirementGroup.RegulatoryRequirement>;

  status?: 'approved' | 'unapproved' | 'pending-approval' | 'declined' | 'expired';

  updated_at?: string;
}

export namespace RequirementGroup {
  export interface RegulatoryRequirement {
    created_at?: string;

    expires_at?: string;

    field_type?: string;

    field_value?: string;

    requirement_id?: string;

    status?: 'approved' | 'unapproved' | 'pending-approval' | 'declined' | 'expired';

    updated_at?: string;
  }
}

export type RequirementGroupListResponse = Array<RequirementGroup>;

export interface RequirementGroupCreateParams {
  action: 'ordering' | 'porting';

  /**
   * ISO alpha 2 country code
   */
  country_code: string;

  phone_number_type: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost';

  customer_reference?: string;

  regulatory_requirements?: Array<RequirementGroupCreateParams.RegulatoryRequirement>;
}

export namespace RequirementGroupCreateParams {
  export interface RegulatoryRequirement {
    field_value?: string;

    requirement_id?: string;
  }
}

export interface RequirementGroupUpdateParams {
  /**
   * Reference for the customer
   */
  customer_reference?: string;

  regulatory_requirements?: Array<RequirementGroupUpdateParams.RegulatoryRequirement>;
}

export namespace RequirementGroupUpdateParams {
  export interface RegulatoryRequirement {
    /**
     * New value for the regulatory requirement
     */
    field_value?: string;

    /**
     * Unique identifier for the regulatory requirement
     */
    requirement_id?: string;
  }
}

export interface RequirementGroupListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[country_code], filter[phone_number_type], filter[action], filter[status],
   * filter[customer_reference]
   */
  filter?: RequirementGroupListParams.Filter;
}

export namespace RequirementGroupListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[country_code], filter[phone_number_type], filter[action], filter[status],
   * filter[customer_reference]
   */
  export interface Filter {
    /**
     * Filter requirement groups by action type
     */
    action?: 'ordering' | 'porting' | 'action';

    /**
     * Filter requirement groups by country code (iso alpha 2)
     */
    country_code?: string;

    /**
     * Filter requirement groups by customer reference
     */
    customer_reference?: string;

    /**
     * Filter requirement groups by phone number type.
     */
    phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost';

    /**
     * Filter requirement groups by status
     */
    status?: 'approved' | 'unapproved' | 'pending-approval' | 'declined' | 'expired';
  }
}

export declare namespace RequirementGroups {
  export {
    type RequirementGroup as RequirementGroup,
    type RequirementGroupListResponse as RequirementGroupListResponse,
    type RequirementGroupCreateParams as RequirementGroupCreateParams,
    type RequirementGroupUpdateParams as RequirementGroupUpdateParams,
    type RequirementGroupListParams as RequirementGroupListParams,
  };
}
