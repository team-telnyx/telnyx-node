// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users/users';
import {
  OrganizationUser,
  OrganizationUsersDefaultFlatPagination,
  UserGetGroupsReportParams,
  UserGetGroupsReportResponse,
  UserGroupReference,
  UserListParams,
  UserRetrieveParams,
  UserRetrieveResponse,
  Users,
} from './users/users';

export class Organizations extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Organizations.Users = Users;

export declare namespace Organizations {
  export {
    Users as Users,
    type OrganizationUser as OrganizationUser,
    type UserGroupReference as UserGroupReference,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserGetGroupsReportResponse as UserGetGroupsReportResponse,
    type OrganizationUsersDefaultFlatPagination as OrganizationUsersDefaultFlatPagination,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
    type UserGetGroupsReportParams as UserGetGroupsReportParams,
  };
}
