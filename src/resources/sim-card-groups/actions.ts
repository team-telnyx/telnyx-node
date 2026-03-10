// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * This API allows fetching detailed information about a SIM card group action
   * resource to make follow-ups in an existing asynchronous operation.
   *
   * @example
   * ```ts
   * const action = await client.simCardGroups.actions.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/sim_card_group_actions/${id}`, options);
  }

  /**
   * This API allows listing a paginated collection a SIM card group actions. It
   * allows to explore a collection of existing asynchronous operation using specific
   * filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardGroupAction of client.simCardGroups.actions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimCardGroupActionsDefaultFlatPagination, SimCardGroupAction> {
    return this._client.getAPIList('/sim_card_group_actions', DefaultFlatPagination<SimCardGroupAction>, {
      query,
      ...options,
    });
  }

  /**
   * This action will asynchronously remove an existing Private Wireless Gateway
   * definition from a SIM card group. Completing this operation defines that all SIM
   * cards in the SIM card group will get their traffic handled by Telnyx's default
   * mobile network configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCardGroups.actions.removePrivateWirelessGateway(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  removePrivateWirelessGateway(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ActionRemovePrivateWirelessGatewayResponse> {
    return this._client.post(path`/sim_card_groups/${id}/actions/remove_private_wireless_gateway`, options);
  }

  /**
   * This action will asynchronously remove an existing Wireless Blocklist to all the
   * SIMs in the SIM card group.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCardGroups.actions.removeWirelessBlocklist(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  removeWirelessBlocklist(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ActionRemoveWirelessBlocklistResponse> {
    return this._client.post(path`/sim_card_groups/${id}/actions/remove_wireless_blocklist`, options);
  }

  /**
   * This action will asynchronously assign a provisioned Private Wireless Gateway to
   * the SIM card group. Completing this operation defines that all SIM cards in the
   * SIM card group will get their traffic controlled by the associated Private
   * Wireless Gateway. This operation will also imply that new SIM cards assigned to
   * a group will inherit its network definitions. If it's moved to a different group
   * that doesn't have a Private Wireless Gateway, it'll use Telnyx's default mobile
   * network configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCardGroups.actions.setPrivateWirelessGateway(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     {
   *       private_wireless_gateway_id:
   *         '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     },
   *   );
   * ```
   */
  setPrivateWirelessGateway(
    id: string,
    body: ActionSetPrivateWirelessGatewayParams,
    options?: RequestOptions,
  ): APIPromise<ActionSetPrivateWirelessGatewayResponse> {
    return this._client.post(path`/sim_card_groups/${id}/actions/set_private_wireless_gateway`, {
      body,
      ...options,
    });
  }

  /**
   * This action will asynchronously assign a Wireless Blocklist to all the SIMs in
   * the SIM card group.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCardGroups.actions.setWirelessBlocklist(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     {
   *       wireless_blocklist_id:
   *         '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     },
   *   );
   * ```
   */
  setWirelessBlocklist(
    id: string,
    body: ActionSetWirelessBlocklistParams,
    options?: RequestOptions,
  ): APIPromise<ActionSetWirelessBlocklistResponse> {
    return this._client.post(path`/sim_card_groups/${id}/actions/set_wireless_blocklist`, {
      body,
      ...options,
    });
  }
}

export type SimCardGroupActionsDefaultFlatPagination = DefaultFlatPagination<SimCardGroupAction>;

/**
 * This object represents a SIM card group action request. It allows tracking the
 * current status of an operation that impacts the SIM card group and SIM card in
 * it.
 */
export interface SimCardGroupAction {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * A JSON object representation of the action params.
   */
  settings?: SimCardGroupAction.Settings;

  /**
   * The SIM card group identification.
   */
  sim_card_group_id?: string;

  status?: 'in-progress' | 'completed' | 'failed';

  /**
   * Represents the type of the operation requested.
   */
  type?:
    | 'set_private_wireless_gateway'
    | 'remove_private_wireless_gateway'
    | 'set_wireless_blocklist'
    | 'remove_wireless_blocklist';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace SimCardGroupAction {
  /**
   * A JSON object representation of the action params.
   */
  export interface Settings {
    /**
     * The identification of the related Private Wireless Gateway resource.
     */
    private_wireless_gateway_id?: string;
  }
}

export interface ActionRetrieveResponse {
  /**
   * This object represents a SIM card group action request. It allows tracking the
   * current status of an operation that impacts the SIM card group and SIM card in
   * it.
   */
  data?: SimCardGroupAction;
}

export interface ActionRemovePrivateWirelessGatewayResponse {
  /**
   * This object represents a SIM card group action request. It allows tracking the
   * current status of an operation that impacts the SIM card group and SIM card in
   * it.
   */
  data?: SimCardGroupAction;
}

export interface ActionRemoveWirelessBlocklistResponse {
  /**
   * This object represents a SIM card group action request. It allows tracking the
   * current status of an operation that impacts the SIM card group and SIM card in
   * it.
   */
  data?: SimCardGroupAction;
}

export interface ActionSetPrivateWirelessGatewayResponse {
  /**
   * This object represents a SIM card group action request. It allows tracking the
   * current status of an operation that impacts the SIM card group and SIM card in
   * it.
   */
  data?: SimCardGroupAction;
}

export interface ActionSetWirelessBlocklistResponse {
  /**
   * This object represents a SIM card group action request. It allows tracking the
   * current status of an operation that impacts the SIM card group and SIM card in
   * it.
   */
  data?: SimCardGroupAction;
}

export interface ActionListParams extends DefaultFlatPaginationParams {
  /**
   * A valid SIM card group ID.
   */
  'filter[sim_card_group_id]'?: string;

  /**
   * Filter by a specific status of the resource's lifecycle.
   */
  'filter[status]'?: 'in-progress' | 'completed' | 'failed';

  /**
   * Filter by action type.
   */
  'filter[type]'?:
    | 'set_private_wireless_gateway'
    | 'remove_private_wireless_gateway'
    | 'set_wireless_blocklist'
    | 'remove_wireless_blocklist';
}

export interface ActionSetPrivateWirelessGatewayParams {
  /**
   * The identification of the related Private Wireless Gateway resource.
   */
  private_wireless_gateway_id: string;
}

export interface ActionSetWirelessBlocklistParams {
  /**
   * The identification of the related Wireless Blocklist resource.
   */
  wireless_blocklist_id: string;
}

export declare namespace Actions {
  export {
    type SimCardGroupAction as SimCardGroupAction,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionRemovePrivateWirelessGatewayResponse as ActionRemovePrivateWirelessGatewayResponse,
    type ActionRemoveWirelessBlocklistResponse as ActionRemoveWirelessBlocklistResponse,
    type ActionSetPrivateWirelessGatewayResponse as ActionSetPrivateWirelessGatewayResponse,
    type ActionSetWirelessBlocklistResponse as ActionSetWirelessBlocklistResponse,
    type SimCardGroupActionsDefaultFlatPagination as SimCardGroupActionsDefaultFlatPagination,
    type ActionListParams as ActionListParams,
    type ActionSetPrivateWirelessGatewayParams as ActionSetPrivateWirelessGatewayParams,
    type ActionSetWirelessBlocklistParams as ActionSetWirelessBlocklistParams,
  };
}
