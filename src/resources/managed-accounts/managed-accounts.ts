// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionDisableResponse, ActionEnableParams, ActionEnableResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ManagedAccounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a new managed account owned by the authenticated user. You need to be
   * explictly approved by Telnyx in order to become a manager account.
   *
   * @example
   * ```ts
   * const managedAccount = await client.managedAccounts.create({
   *   business_name: "Larry's Cat Food Inc",
   * });
   * ```
   */
  create(
    body: ManagedAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<ManagedAccountCreateResponse> {
    return this._client.post('/managed_accounts', { body, ...options });
  }

  /**
   * Retrieves the details of a single managed account.
   *
   * @example
   * ```ts
   * const managedAccount =
   *   await client.managedAccounts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ManagedAccountRetrieveResponse> {
    return this._client.get(path`/managed_accounts/${id}`, options);
  }

  /**
   * Update a single managed account.
   *
   * @example
   * ```ts
   * const managedAccount = await client.managedAccounts.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body: ManagedAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ManagedAccountUpdateResponse> {
    return this._client.patch(path`/managed_accounts/${id}`, { body, ...options });
  }

  /**
   * Lists the accounts managed by the current user. Users need to be explictly
   * approved by Telnyx in order to become manager accounts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const managedAccountListResponse of client.managedAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ManagedAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ManagedAccountListResponsesDefaultFlatPagination, ManagedAccountListResponse> {
    return this._client.getAPIList('/managed_accounts', DefaultFlatPagination<ManagedAccountListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Display information about allocatable global outbound channels for the current
   * user. Only usable by account managers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.managedAccounts.getAllocatableGlobalOutboundChannels();
   * ```
   */
  getAllocatableGlobalOutboundChannels(
    options?: RequestOptions,
  ): APIPromise<ManagedAccountGetAllocatableGlobalOutboundChannelsResponse> {
    return this._client.get('/managed_accounts/allocatable_global_outbound_channels', options);
  }

  /**
   * Update the amount of allocatable global outbound channels allocated to a
   * specific managed account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.managedAccounts.updateGlobalChannelLimit(
   *     'id',
   *   );
   * ```
   */
  updateGlobalChannelLimit(
    id: string,
    body: ManagedAccountUpdateGlobalChannelLimitParams,
    options?: RequestOptions,
  ): APIPromise<ManagedAccountUpdateGlobalChannelLimitResponse> {
    return this._client.patch(path`/managed_accounts/${id}/update_global_channel_limit`, {
      body,
      ...options,
    });
  }
}

export type ManagedAccountListResponsesDefaultFlatPagination =
  DefaultFlatPagination<ManagedAccountListResponse>;

export interface ManagedAccount {
  /**
   * Uniquely identifies the managed account.
   */
  id: string;

  /**
   * The managed account's V2 API access key
   */
  api_key: string;

  /**
   * The managed account's V1 API token
   */
  api_token: string;

  /**
   * The manager account's email, which serves as the V1 API user identifier
   */
  api_user: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at: string;

  /**
   * The managed account's email.
   */
  email: string;

  /**
   * The ID of the manager account associated with the managed account.
   */
  manager_account_id: string;

  /**
   * Identifies the type of the resource.
   */
  record_type: 'managed_account';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at: string;

  balance?: ManagedAccountBalance;

  /**
   * Boolean value that indicates if the managed account is able to have custom
   * pricing set for it or not. If false, uses the pricing of the manager account.
   * Defaults to false. There may be time lag between when the value is changed and
   * pricing changes take effect.
   */
  managed_account_allow_custom_pricing?: boolean;

  /**
   * The organization the managed account is associated with.
   */
  organization_name?: string;

  /**
   * Boolean value that indicates if the billing information and charges to the
   * managed account "roll up" to the manager account. If true, the managed account
   * will not have its own balance and will use the shared balance with the manager
   * account. This value cannot be changed after account creation without going
   * through Telnyx support as changes require manual updates to the account ledger.
   * Defaults to false.
   */
  rollup_billing?: boolean;
}

export interface ManagedAccountBalance {
  /**
   * Available amount to spend (balance + credit limit)
   */
  available_credit?: string;

  /**
   * The account's current balance.
   */
  balance?: string;

  /**
   * The account's credit limit.
   */
  credit_limit?: string;

  /**
   * The ISO 4217 currency identifier.
   */
  currency?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'balance';
}

export interface ManagedAccountCreateResponse {
  data?: ManagedAccount;
}

export interface ManagedAccountRetrieveResponse {
  data?: ManagedAccount;
}

export interface ManagedAccountUpdateResponse {
  data?: ManagedAccount;
}

export interface ManagedAccountListResponse {
  /**
   * Uniquely identifies the managed account.
   */
  id: string;

  /**
   * The manager account's email, which serves as the V1 API user identifier
   */
  api_user: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at: string;

  /**
   * The managed account's email.
   */
  email: string;

  /**
   * The ID of the manager account associated with the managed account.
   */
  manager_account_id: string;

  /**
   * Identifies the type of the resource.
   */
  record_type: 'managed_account';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at: string;

  /**
   * Boolean value that indicates if the managed account is able to have custom
   * pricing set for it or not. If false, uses the pricing of the manager account.
   * Defaults to false. There may be time lag between when the value is changed and
   * pricing changes take effect.
   */
  managed_account_allow_custom_pricing?: boolean;

  /**
   * The organization the managed account is associated with.
   */
  organization_name?: string;

  /**
   * Boolean value that indicates if the billing information and charges to the
   * managed account "roll up" to the manager account. If true, the managed account
   * will not have its own balance and will use the shared balance with the manager
   * account. This value cannot be changed after account creation without going
   * through Telnyx support as changes require manual updates to the account ledger.
   * Defaults to false.
   */
  rollup_billing?: boolean;
}

export interface ManagedAccountGetAllocatableGlobalOutboundChannelsResponse {
  data?: ManagedAccountGetAllocatableGlobalOutboundChannelsResponse.Data;
}

export namespace ManagedAccountGetAllocatableGlobalOutboundChannelsResponse {
  export interface Data {
    /**
     * The total amount of allocatable global outbound channels available to the
     * authenticated manager. Will be 0 if the feature is not enabled for their
     * account.
     */
    allocatable_global_outbound_channels?: number;

    /**
     * Boolean value that indicates if the managed account is able to have custom
     * pricing set for it or not. If false, uses the pricing of the manager account.
     * Defaults to false. This value may be changed, but there may be time lag between
     * when the value is changed and pricing changes take effect.
     */
    managed_account_allow_custom_pricing?: boolean;

    /**
     * The type of the data contained in this record.
     */
    record_type?: string;

    /**
     * The total number of allocatable global outbound channels currently allocated
     * across all managed accounts for the authenticated user. This includes any amount
     * of channels allocated by default at managed account creation time. Will be 0 if
     * the feature is not enabled for their account.
     */
    total_global_channels_allocated?: number;
  }
}

export interface ManagedAccountUpdateGlobalChannelLimitResponse {
  data?: ManagedAccountUpdateGlobalChannelLimitResponse.Data;
}

export namespace ManagedAccountUpdateGlobalChannelLimitResponse {
  export interface Data {
    /**
     * The user ID of the managed account.
     */
    id?: string;

    /**
     * Integer value that indicates the number of allocatable global outbound channels
     * that are allocated to the managed account. If the value is 0 then the account
     * will have no usable channels and will not be able to perform outbound calling.
     */
    channel_limit?: number;

    /**
     * The email of the managed account.
     */
    email?: string;

    /**
     * The user ID of the manager of the account.
     */
    manager_account_id?: string;

    /**
     * The name of the type of data in the response.
     */
    record_type?: string;
  }
}

export interface ManagedAccountCreateParams {
  /**
   * The name of the business for which the new managed account is being created,
   * that will be used as the managed accounts's organization's name.
   */
  business_name: string;

  /**
   * The email address for the managed account. If not provided, the email address
   * will be generated based on the email address of the manager account.
   */
  email?: string;

  /**
   * Boolean value that indicates if the managed account is able to have custom
   * pricing set for it or not. If false, uses the pricing of the manager account.
   * Defaults to false. This value may be changed after creation, but there may be
   * time lag between when the value is changed and pricing changes take effect.
   */
  managed_account_allow_custom_pricing?: boolean;

  /**
   * Password for the managed account. If a password is not supplied, the account
   * will not be able to be signed into directly. (A password reset may still be
   * performed later to enable sign-in via password.)
   */
  password?: string;

  /**
   * Boolean value that indicates if the billing information and charges to the
   * managed account "roll up" to the manager account. If true, the managed account
   * will not have its own balance and will use the shared balance with the manager
   * account. This value cannot be changed after account creation without going
   * through Telnyx support as changes require manual updates to the account ledger.
   * Defaults to false.
   */
  rollup_billing?: boolean;
}

export interface ManagedAccountUpdateParams {
  /**
   * Boolean value that indicates if the managed account is able to have custom
   * pricing set for it or not. If false, uses the pricing of the manager account.
   * Defaults to false. This value may be changed, but there may be time lag between
   * when the value is changed and pricing changes take effect.
   */
  managed_account_allow_custom_pricing?: boolean;
}

export interface ManagedAccountListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[email][contains], filter[email][eq], filter[organization_name][contains],
   * filter[organization_name][eq]
   */
  filter?: ManagedAccountListParams.Filter;

  /**
   * Specifies if cancelled accounts should be included in the results.
   */
  include_cancelled_accounts?: boolean;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>email</code>: sorts the result by the
   *     <code>email</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-email</code>: sorts the result by the
   *     <code>email</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'email';
}

export namespace ManagedAccountListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[email][contains], filter[email][eq], filter[organization_name][contains],
   * filter[organization_name][eq]
   */
  export interface Filter {
    email?: Filter.Email;

    organization_name?: Filter.OrganizationName;
  }

  export namespace Filter {
    export interface Email {
      /**
       * If present, email containing the given value will be returned. Matching is not
       * case-sensitive. Requires at least three characters.
       */
      contains?: string;

      /**
       * If present, only returns results with the <code>email</code> matching exactly
       * the value given.
       */
      eq?: string;
    }

    export interface OrganizationName {
      /**
       * If present, only returns results with the <code>organization_name</code>
       * containing the given value. Matching is not case-sensitive. Requires at least
       * three characters.
       */
      contains?: string;

      /**
       * If present, only returns results with the <code>organization_name</code>
       * matching exactly the value given.
       */
      eq?: string;
    }
  }
}

export interface ManagedAccountUpdateGlobalChannelLimitParams {
  /**
   * Integer value that indicates the number of allocatable global outbound channels
   * that should be allocated to the managed account. Must be 0 or more. If the value
   * is 0 then the account will have no usable channels and will not be able to
   * perform outbound calling.
   */
  channel_limit?: number;
}

ManagedAccounts.Actions = Actions;

export declare namespace ManagedAccounts {
  export {
    type ManagedAccount as ManagedAccount,
    type ManagedAccountBalance as ManagedAccountBalance,
    type ManagedAccountCreateResponse as ManagedAccountCreateResponse,
    type ManagedAccountRetrieveResponse as ManagedAccountRetrieveResponse,
    type ManagedAccountUpdateResponse as ManagedAccountUpdateResponse,
    type ManagedAccountListResponse as ManagedAccountListResponse,
    type ManagedAccountGetAllocatableGlobalOutboundChannelsResponse as ManagedAccountGetAllocatableGlobalOutboundChannelsResponse,
    type ManagedAccountUpdateGlobalChannelLimitResponse as ManagedAccountUpdateGlobalChannelLimitResponse,
    type ManagedAccountListResponsesDefaultFlatPagination as ManagedAccountListResponsesDefaultFlatPagination,
    type ManagedAccountCreateParams as ManagedAccountCreateParams,
    type ManagedAccountUpdateParams as ManagedAccountUpdateParams,
    type ManagedAccountListParams as ManagedAccountListParams,
    type ManagedAccountUpdateGlobalChannelLimitParams as ManagedAccountUpdateGlobalChannelLimitParams,
  };

  export {
    Actions as Actions,
    type ActionDisableResponse as ActionDisableResponse,
    type ActionEnableResponse as ActionEnableResponse,
    type ActionEnableParams as ActionEnableParams,
  };
}
