// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users/users';
import {
  UserGetGroupsReportParams,
  UserGetGroupsReportResponse,
  UserGroupReference,
  UserListParams,
  UserListResponse,
  UserListResponsesDefaultFlatPagination,
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
    type UserGroupReference as UserGroupReference,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserGetGroupsReportResponse as UserGetGroupsReportResponse,
    type UserListResponsesDefaultFlatPagination as UserListResponsesDefaultFlatPagination,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
    type UserGetGroupsReportParams as UserGetGroupsReportParams,
  };
}
