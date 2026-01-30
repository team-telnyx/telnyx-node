// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Requirements extends APIResource {
  /**
   * Retrieve a document requirement record
   *
   * @example
   * ```ts
   * const requirement = await client.requirements.retrieve(
   *   'a9dad8d5-fdbd-49d7-aa23-39bb08a5ebaa',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RequirementRetrieveResponse> {
    return this._client.get(path`/requirements/${id}`, options);
  }

  /**
   * List all requirements with filtering, sorting, and pagination
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const requirementListResponse of client.requirements.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RequirementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RequirementListResponsesDefaultFlatPagination, RequirementListResponse> {
    return this._client.getAPIList('/requirements', DefaultFlatPagination<RequirementListResponse>, {
      query,
      ...options,
    });
  }
}

export type RequirementListResponsesDefaultFlatPagination = DefaultFlatPagination<RequirementListResponse>;

export interface RequirementRetrieveResponse {
  data?: RequirementRetrieveResponse.Data;
}

export namespace RequirementRetrieveResponse {
  export interface Data {
    /**
     * Identifies the associated document
     */
    id?: string;

    /**
     * Indicates whether this requirement applies to branded_calling, ordering,
     * porting, or both ordering and porting
     */
    action?: 'both' | 'branded_calling' | 'ordering' | 'porting';

    /**
     * The 2-character (ISO 3166-1 alpha-2) country code where this requirement applies
     */
    country_code?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The locality where this requirement applies
     */
    locality?: string;

    /**
     * Indicates the phone_number_type this requirement applies to. Leave blank if this
     * requirement applies to all number_types.
     */
    phone_number_type?: 'local' | 'national' | 'toll_free';

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * Lists the requirement types necessary to fulfill this requirement
     */
    requirements_types?: Array<Shared.DocReqsRequirementType>;

    /**
     * ISO 8601 formatted date-time indicating when the resource was last updated.
     */
    updated_at?: string;
  }
}

export interface RequirementListResponse {
  /**
   * Identifies the associated document
   */
  id?: string;

  /**
   * Indicates whether this requirement applies to branded_calling, ordering,
   * porting, or both ordering and porting
   */
  action?: 'both' | 'branded_calling' | 'ordering' | 'porting';

  /**
   * The 2-character (ISO 3166-1 alpha-2) country code where this requirement applies
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The locality where this requirement applies
   */
  locality?: string;

  /**
   * Indicates the phone_number_type this requirement applies to. Leave blank if this
   * requirement applies to all number_types.
   */
  phone_number_type?: 'local' | 'national' | 'toll_free';

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Lists the requirement types necessary to fulfill this requirement
   */
  requirements_types?: Array<Shared.DocReqsRequirementType>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was last updated.
   */
  updated_at?: string;
}

export interface RequirementListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for requirements (deepObject style). Originally:
   * filter[country_code], filter[phone_number_type], filter[action]
   */
  filter?: RequirementListParams.Filter;

  /**
   * Consolidated sort parameter for requirements (deepObject style). Originally:
   * sort[]
   */
  sort?: Array<
    | 'created_at'
    | 'updated_at'
    | 'country_code'
    | 'phone_number_type'
    | '-created_at'
    | '-updated_at'
    | '-country_code'
    | '-phone_number_type'
  >;
}

export namespace RequirementListParams {
  /**
   * Consolidated filter parameter for requirements (deepObject style). Originally:
   * filter[country_code], filter[phone_number_type], filter[action]
   */
  export interface Filter {
    /**
     * Filters requirements to those applying to a specific action.
     */
    action?: 'branded_calling' | 'ordering' | 'porting';

    /**
     * Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country
     * code
     */
    country_code?: string;

    /**
     * Filters results to those applying to a specific phone_number_type
     */
    phone_number_type?: 'local' | 'national' | 'toll_free';
  }
}

export declare namespace Requirements {
  export {
    type RequirementRetrieveResponse as RequirementRetrieveResponse,
    type RequirementListResponse as RequirementListResponse,
    type RequirementListResponsesDefaultFlatPagination as RequirementListResponsesDefaultFlatPagination,
    type RequirementListParams as RequirementListParams,
  };
}
