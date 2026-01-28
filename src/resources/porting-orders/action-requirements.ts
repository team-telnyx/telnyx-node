// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActionRequirements extends APIResource {
  /**
   * Returns a list of action requirements for a specific porting order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const actionRequirementListResponse of client.portingOrders.actionRequirements.list(
   *   'porting_order_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    portingOrderID: string,
    query: ActionRequirementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ActionRequirementListResponsesDefaultFlatPagination, ActionRequirementListResponse> {
    return this._client.getAPIList(
      path`/porting_orders/${portingOrderID}/action_requirements`,
      DefaultFlatPagination<ActionRequirementListResponse>,
      { query, ...options },
    );
  }

  /**
   * Initiates a specific action requirement for a porting order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.actionRequirements.initiate(
   *     'id',
   *     {
   *       porting_order_id: 'porting_order_id',
   *       params: { first_name: 'John', last_name: 'Doe' },
   *     },
   *   );
   * ```
   */
  initiate(
    id: string,
    params: ActionRequirementInitiateParams,
    options?: RequestOptions,
  ): APIPromise<ActionRequirementInitiateResponse> {
    const { porting_order_id, ...body } = params;
    return this._client.post(path`/porting_orders/${porting_order_id}/action_requirements/${id}/initiate`, {
      body,
      ...options,
    });
  }
}

export type ActionRequirementListResponsesDefaultFlatPagination =
  DefaultFlatPagination<ActionRequirementListResponse>;

export interface ActionRequirementListResponse {
  /**
   * Identifies the action requirement
   */
  id?: string;

  /**
   * The type of action required
   */
  action_type?: string;

  /**
   * Optional URL for the action
   */
  action_url?: string | null;

  /**
   * Reason for cancellation if status is 'cancelled'
   */
  cancel_reason?: string | null;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created
   */
  created_at?: string;

  /**
   * The ID of the porting order this action requirement belongs to
   */
  porting_order_id?: string;

  /**
   * Identifies the type of the resource
   */
  record_type?: 'porting_action_requirement';

  /**
   * The ID of the requirement type
   */
  requirement_type_id?: string;

  /**
   * Current status of the action requirement
   */
  status?: 'created' | 'pending' | 'completed' | 'cancelled' | 'failed';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated
   */
  updated_at?: string;
}

export interface ActionRequirementInitiateResponse {
  data?: ActionRequirementInitiateResponse.Data;
}

export namespace ActionRequirementInitiateResponse {
  export interface Data {
    /**
     * Identifies the action requirement
     */
    id?: string;

    /**
     * The type of action required
     */
    action_type?: string;

    /**
     * Optional URL for the action
     */
    action_url?: string | null;

    /**
     * Reason for cancellation if status is 'cancelled'
     */
    cancel_reason?: string | null;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created
     */
    created_at?: string;

    /**
     * The ID of the porting order this action requirement belongs to
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource
     */
    record_type?: 'porting_action_requirement';

    /**
     * The ID of the requirement type
     */
    requirement_type_id?: string;

    /**
     * Current status of the action requirement
     */
    status?: 'created' | 'pending' | 'completed' | 'cancelled' | 'failed';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated
     */
    updated_at?: string;
  }
}

export interface ActionRequirementListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[id][in][],
   * filter[requirement_type_id], filter[action_type], filter[status]
   */
  filter?: ActionRequirementListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: ActionRequirementListParams.Sort;
}

export namespace ActionRequirementListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[id][in][],
   * filter[requirement_type_id], filter[action_type], filter[status]
   */
  export interface Filter {
    /**
     * Filter action requirements by a list of IDs
     */
    id?: Array<string>;

    /**
     * Filter action requirements by action type
     */
    action_type?: 'au_id_verification';

    /**
     * Filter action requirements by requirement type ID
     */
    requirement_type_id?: string;

    /**
     * Filter action requirements by status
     */
    status?: 'created' | 'pending' | 'completed' | 'cancelled' | 'failed';
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order.
     */
    value?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at';
  }
}

export interface ActionRequirementInitiateParams {
  /**
   * Path param: The ID of the porting order
   */
  porting_order_id: string;

  /**
   * Body param: Required information for initiating the action requirement for AU ID
   * verification.
   */
  params: ActionRequirementInitiateParams.Params;
}

export namespace ActionRequirementInitiateParams {
  /**
   * Required information for initiating the action requirement for AU ID
   * verification.
   */
  export interface Params {
    /**
     * The first name of the person that will perform the verification flow.
     */
    first_name: string;

    /**
     * The last name of the person that will perform the verification flow.
     */
    last_name: string;
  }
}

export declare namespace ActionRequirements {
  export {
    type ActionRequirementListResponse as ActionRequirementListResponse,
    type ActionRequirementInitiateResponse as ActionRequirementInitiateResponse,
    type ActionRequirementListResponsesDefaultFlatPagination as ActionRequirementListResponsesDefaultFlatPagination,
    type ActionRequirementListParams as ActionRequirementListParams,
    type ActionRequirementInitiateParams as ActionRequirementInitiateParams,
  };
}
