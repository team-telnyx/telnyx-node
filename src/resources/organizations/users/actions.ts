// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Deletes a user in your organization.
   */
  remove(id: string, options?: RequestOptions): APIPromise<ActionRemoveResponse> {
    return this._client.post(path`/organizations/users/${id}/actions/remove`, options);
  }
}

export interface ActionRemoveResponse {
  data?: ActionRemoveResponse.Data;
}

export namespace ActionRemoveResponse {
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

export declare namespace Actions {
  export { type ActionRemoveResponse as ActionRemoveResponse };
}
