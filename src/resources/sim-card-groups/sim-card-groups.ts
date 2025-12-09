// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionListParams,
  ActionRemovePrivateWirelessGatewayResponse,
  ActionRemoveWirelessBlocklistResponse,
  ActionRetrieveResponse,
  ActionSetPrivateWirelessGatewayParams,
  ActionSetPrivateWirelessGatewayResponse,
  ActionSetWirelessBlocklistParams,
  ActionSetWirelessBlocklistResponse,
  Actions,
  SimCardGroupAction,
  SimCardGroupActionsDefaultFlatPagination,
} from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SimCardGroups extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a new SIM card group object
   *
   * @example
   * ```ts
   * const simCardGroup = await client.simCardGroups.create({
   *   name: 'My Test Group',
   * });
   * ```
   */
  create(body: SimCardGroupCreateParams, options?: RequestOptions): APIPromise<SimCardGroupCreateResponse> {
    return this._client.post('/sim_card_groups', { body, ...options });
  }

  /**
   * Returns the details regarding a specific SIM card group
   *
   * @example
   * ```ts
   * const simCardGroup = await client.simCardGroups.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: SimCardGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimCardGroupRetrieveResponse> {
    return this._client.get(path`/sim_card_groups/${id}`, { query, ...options });
  }

  /**
   * Updates a SIM card group
   *
   * @example
   * ```ts
   * const simCardGroup = await client.simCardGroups.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  update(
    id: string,
    body: SimCardGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SimCardGroupUpdateResponse> {
    return this._client.patch(path`/sim_card_groups/${id}`, { body, ...options });
  }

  /**
   * Get all SIM card groups belonging to the user that match the given filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardGroupListResponse of client.simCardGroups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SimCardGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimCardGroupListResponsesDefaultFlatPagination, SimCardGroupListResponse> {
    return this._client.getAPIList('/sim_card_groups', DefaultFlatPagination<SimCardGroupListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a SIM card group
   *
   * @example
   * ```ts
   * const simCardGroup = await client.simCardGroups.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SimCardGroupDeleteResponse> {
    return this._client.delete(path`/sim_card_groups/${id}`, options);
  }
}

export type SimCardGroupListResponsesDefaultFlatPagination = DefaultFlatPagination<SimCardGroupListResponse>;

/**
 * Represents the amount of data consumed.
 */
export interface ConsumedData {
  amount?: string;

  unit?: string;
}

export interface SimCardGroup {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Represents the amount of data consumed.
   */
  consumed_data?: ConsumedData;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  data_limit?: SimCardGroup.DataLimit;

  /**
   * Indicates whether the SIM card group is the users default group.<br/>The default
   * group is created for the user and can not be removed.
   */
  default?: boolean;

  /**
   * A user friendly name for the SIM card group.
   */
  name?: string;

  /**
   * The identification of the related Private Wireless Gateway resource.
   */
  private_wireless_gateway_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The identification of the related Wireless Blocklist resource.
   */
  wireless_blocklist_id?: string;
}

export namespace SimCardGroup {
  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  export interface DataLimit {
    amount?: string;

    unit?: string;
  }
}

export interface SimCardGroupCreateResponse {
  data?: SimCardGroup;
}

export interface SimCardGroupRetrieveResponse {
  data?: SimCardGroup;
}

export interface SimCardGroupUpdateResponse {
  data?: SimCardGroup;
}

export interface SimCardGroupListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Represents the amount of data consumed.
   */
  consumed_data?: ConsumedData;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  data_limit?: SimCardGroupListResponse.DataLimit;

  /**
   * Indicates whether the SIM card group is the users default group.<br/>The default
   * group is created for the user and can not be removed.
   */
  default?: boolean;

  /**
   * A user friendly name for the SIM card group.
   */
  name?: string;

  /**
   * The identification of the related Private Wireless Gateway resource.
   */
  private_wireless_gateway_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The number of SIM cards associated with the group.
   */
  sim_card_count?: number;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The identification of the related Wireless Blocklist resource.
   */
  wireless_blocklist_id?: string;
}

export namespace SimCardGroupListResponse {
  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  export interface DataLimit {
    amount?: string;

    unit?: string;
  }
}

export interface SimCardGroupDeleteResponse {
  data?: SimCardGroup;
}

export interface SimCardGroupCreateParams {
  /**
   * A user friendly name for the SIM card group.
   */
  name: string;

  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  data_limit?: SimCardGroupCreateParams.DataLimit;
}

export namespace SimCardGroupCreateParams {
  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  export interface DataLimit {
    amount?: string;

    unit?: string;
  }
}

export interface SimCardGroupRetrieveParams {
  /**
   * It includes a list of associated ICCIDs.
   */
  include_iccids?: boolean;
}

export interface SimCardGroupUpdateParams {
  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  data_limit?: SimCardGroupUpdateParams.DataLimit;

  /**
   * A user friendly name for the SIM card group.
   */
  name?: string;
}

export namespace SimCardGroupUpdateParams {
  /**
   * Upper limit on the amount of data the SIM cards, within the group, can use.
   */
  export interface DataLimit {
    amount?: string;

    unit?: string;
  }
}

export interface SimCardGroupListParams extends DefaultFlatPaginationParams {
  /**
   * A valid SIM card group name.
   */
  'filter[name]'?: string;

  /**
   * A Private Wireless Gateway ID associated with the group.
   */
  'filter[private_wireless_gateway_id]'?: string;

  /**
   * A Wireless Blocklist ID associated with the group.
   */
  'filter[wireless_blocklist_id]'?: string;
}

SimCardGroups.Actions = Actions;

export declare namespace SimCardGroups {
  export {
    type ConsumedData as ConsumedData,
    type SimCardGroup as SimCardGroup,
    type SimCardGroupCreateResponse as SimCardGroupCreateResponse,
    type SimCardGroupRetrieveResponse as SimCardGroupRetrieveResponse,
    type SimCardGroupUpdateResponse as SimCardGroupUpdateResponse,
    type SimCardGroupListResponse as SimCardGroupListResponse,
    type SimCardGroupDeleteResponse as SimCardGroupDeleteResponse,
    type SimCardGroupListResponsesDefaultFlatPagination as SimCardGroupListResponsesDefaultFlatPagination,
    type SimCardGroupCreateParams as SimCardGroupCreateParams,
    type SimCardGroupRetrieveParams as SimCardGroupRetrieveParams,
    type SimCardGroupUpdateParams as SimCardGroupUpdateParams,
    type SimCardGroupListParams as SimCardGroupListParams,
  };

  export {
    Actions as Actions,
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
