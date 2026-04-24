// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Operations related to users in your organization
 */
export class Actions extends APIResource {
  /**
   * Deletes a user in your organization.
   */
  remove(id: string, options?: RequestOptions): APIPromise<ActionRemoveResponse> {
    return this._client.post(path`/organizations/users/${id}/actions/remove`, options);
  }
}

export interface ActionRemoveResponse {
  data?: UsersAPI.OrganizationUser;
}

export declare namespace Actions {
  export { type ActionRemoveResponse as ActionRemoveResponse };
}
