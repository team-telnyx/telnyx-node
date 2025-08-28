// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ManagedAccountsAPI from './managed-accounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Disables a managed account, forbidding it to use Telnyx services, including
   * sending or receiving phone calls and SMS messages. Ongoing phone calls will not
   * be affected. The managed account and its sub-users will no longer be able to log
   * in via the mission control portal.
   *
   * @example
   * ```ts
   * const response =
   *   await client.managedAccounts.actions.disable('id');
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<ActionDisableResponse> {
    return this._client.post(path`/managed_accounts/${id}/actions/disable`, options);
  }

  /**
   * Enables a managed account and its sub-users to use Telnyx services.
   *
   * @example
   * ```ts
   * const response =
   *   await client.managedAccounts.actions.enable('id');
   * ```
   */
  enable(
    id: string,
    body: ActionEnableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionEnableResponse> {
    return this._client.post(path`/managed_accounts/${id}/actions/enable`, { body, ...options });
  }
}

export interface ActionDisableResponse {
  data?: ManagedAccountsAPI.ManagedAccount;
}

export interface ActionEnableResponse {
  data?: ManagedAccountsAPI.ManagedAccount;
}

export interface ActionEnableParams {
  /**
   * When true, all connections owned by this managed account will automatically be
   * re-enabled. Note: Any connections that do not pass validations will not be
   * re-enabled.
   */
  reenable_all_connections?: boolean;
}

export declare namespace Actions {
  export {
    type ActionDisableResponse as ActionDisableResponse,
    type ActionEnableResponse as ActionEnableResponse,
    type ActionEnableParams as ActionEnableParams,
  };
}
