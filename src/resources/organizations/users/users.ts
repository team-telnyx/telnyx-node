// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from './users';
import * as ActionsAPI from './actions';
import { ActionRemoveResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a user in your organization.
   */
  retrieve(
    id: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/organizations/users/${id}`, { query, ...options });
  }

  /**
   * Returns a list of the users in your organization.
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserListResponsesDefaultFlatPagination, UserListResponse> {
    return this._client.getAPIList('/organizations/users', DefaultFlatPagination<UserListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Returns a report of all users in your organization with their group memberships.
   * This endpoint returns all users without pagination and always includes group
   * information. The report can be retrieved in JSON or CSV format by sending
   * specific content-type headers.
   */
  getGroupsReport(
    params: UserGetGroupsReportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGetGroupsReportResponse> {
    const { Accept } = params ?? {};
    return this._client.get('/organizations/users/users_groups_report', {
      ...options,
      headers: buildHeaders([
        { ...(Accept?.toString() != null ? { Accept: Accept?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type UserListResponsesDefaultFlatPagination = DefaultFlatPagination<UserListResponse>;

/**
 * A reference to a group that a user belongs to.
 */
export interface UserGroupReference {
  /**
   * The unique identifier of the group.
   */
  id: string;

  /**
   * The name of the group.
   */
  name: string;
}

export interface UserRetrieveResponse {
  data?: UserRetrieveResponse.Data;
}

export namespace UserRetrieveResponse {
  export interface Data {
    /**
     * Identifies the specific resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The email address of the user.
     */
    email?: string;

    /**
     * The groups the user belongs to. Only included when include_groups parameter is
     * true.
     */
    groups?: Array<UsersAPI.UserGroupReference>;

    /**
     * ISO 8601 formatted date indicating when the resource last signed into the
     * portal. Null if the user has never signed in.
     */
    last_sign_in_at?: string | null;

    /**
     * Indicates whether this user is allowed to bypass SSO and use password
     * authentication.
     */
    organization_user_bypasses_sso?: boolean;

    /**
     * Identifies the type of the resource. Can be 'organization_owner' or
     * 'organization_sub_user'.
     */
    record_type?: string;

    /**
     * The status of the account.
     */
    user_status?: 'enabled' | 'disabled' | 'blocked';
  }
}

export interface UserListResponse {
  /**
   * Identifies the specific resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The email address of the user.
   */
  email?: string;

  /**
   * The groups the user belongs to. Only included when include_groups parameter is
   * true.
   */
  groups?: Array<UserGroupReference>;

  /**
   * ISO 8601 formatted date indicating when the resource last signed into the
   * portal. Null if the user has never signed in.
   */
  last_sign_in_at?: string | null;

  /**
   * Indicates whether this user is allowed to bypass SSO and use password
   * authentication.
   */
  organization_user_bypasses_sso?: boolean;

  /**
   * Identifies the type of the resource. Can be 'organization_owner' or
   * 'organization_sub_user'.
   */
  record_type?: string;

  /**
   * The status of the account.
   */
  user_status?: 'enabled' | 'disabled' | 'blocked';
}

export interface UserGetGroupsReportResponse {
  data?: Array<UserGetGroupsReportResponse.Data>;
}

export namespace UserGetGroupsReportResponse {
  /**
   * An organization user with their group memberships always included.
   */
  export interface Data {
    /**
     * Identifies the specific resource.
     */
    id: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at: string;

    /**
     * The email address of the user.
     */
    email: string;

    /**
     * The groups the user belongs to.
     */
    groups: Array<UsersAPI.UserGroupReference>;

    /**
     * Identifies the type of the resource. Can be 'organization_owner' or
     * 'organization_sub_user'.
     */
    record_type: string;

    /**
     * The status of the account.
     */
    user_status: 'enabled' | 'disabled' | 'blocked';

    /**
     * ISO 8601 formatted date indicating when the resource last signed into the
     * portal. Null if the user has never signed in.
     */
    last_sign_in_at?: string | null;

    /**
     * Indicates whether this user is allowed to bypass SSO and use password
     * authentication.
     */
    organization_user_bypasses_sso?: boolean;
  }
}

export interface UserRetrieveParams {
  /**
   * When set to true, includes the groups array for each user in the response. The
   * groups array contains objects with id and name for each group the user belongs
   * to.
   */
  include_groups?: boolean;
}

export interface UserListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by email address (partial match)
   */
  'filter[email]'?: string;

  /**
   * Filter by user status
   */
  'filter[user_status]'?: 'enabled' | 'disabled' | 'blocked';

  /**
   * When set to true, includes the groups array for each user in the response. The
   * groups array contains objects with id and name for each group the user belongs
   * to.
   */
  include_groups?: boolean;
}

export interface UserGetGroupsReportParams {
  /**
   * Specify the response format. Use 'application/json' for JSON format or
   * 'text/csv' for CSV format.
   */
  Accept?: 'application/json' | 'text/csv';
}

Users.Actions = Actions;

export declare namespace Users {
  export {
    type UserGroupReference as UserGroupReference,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserGetGroupsReportResponse as UserGetGroupsReportResponse,
    type UserListResponsesDefaultFlatPagination as UserListResponsesDefaultFlatPagination,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
    type UserGetGroupsReportParams as UserGetGroupsReportParams,
  };

  export { Actions as Actions, type ActionRemoveResponse as ActionRemoveResponse };
}
