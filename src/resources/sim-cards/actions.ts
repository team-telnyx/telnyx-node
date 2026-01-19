// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * This API fetches detailed information about a SIM card action to follow-up on an
   * existing asynchronous operation.
   *
   * @example
   * ```ts
   * const action = await client.simCards.actions.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/sim_card_actions/${id}`, options);
  }

  /**
   * This API lists a paginated collection of SIM card actions. It enables exploring
   * a collection of existing asynchronous operations using specific filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardAction of client.simCards.actions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimCardActionsDefaultFlatPagination, SimCardAction> {
    return this._client.getAPIList('/sim_card_actions', DefaultFlatPagination<SimCardAction>, {
      query,
      ...options,
    });
  }

  /**
   * This API triggers an asynchronous operation to set a public IP for each of the
   * specified SIM cards.<br/> For each SIM Card a SIM Card Action will be generated.
   * The status of the SIM Card Action can be followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCards.actions.bulkSetPublicIPs({
   *     sim_card_ids: ['6b14e151-8493-4fa1-8664-1cc4e6d14158'],
   *   });
   * ```
   */
  bulkSetPublicIPs(
    body: ActionBulkSetPublicIPsParams,
    options?: RequestOptions,
  ): APIPromise<ActionBulkSetPublicIPsResponse> {
    return this._client.post('/sim_cards/actions/bulk_set_public_ips', { body, ...options });
  }

  /**
   * This API disables a SIM card, disconnecting it from the network and making it
   * impossible to consume data.<br/> The API will trigger an asynchronous operation
   * called a SIM Card Action. Transitioning to the disabled state may take a period
   * of time. The status of the SIM Card Action can be followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API.
   *
   * @example
   * ```ts
   * const response = await client.simCards.actions.disable(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<ActionDisableResponse> {
    return this._client.post(path`/sim_cards/${id}/actions/disable`, options);
  }

  /**
   * This API enables a SIM card, connecting it to the network and making it possible
   * to consume data.<br/> To enable a SIM card, it must be associated with a SIM
   * card group.<br/> The API will trigger an asynchronous operation called a SIM
   * Card Action. Transitioning to the enabled state may take a period of time. The
   * status of the SIM Card Action can be followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API.
   *
   * @example
   * ```ts
   * const response = await client.simCards.actions.enable(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  enable(id: string, options?: RequestOptions): APIPromise<ActionEnableResponse> {
    return this._client.post(path`/sim_cards/${id}/actions/enable`, options);
  }

  /**
   * This API removes an existing public IP from a SIM card. <br/><br/> The API will
   * trigger an asynchronous operation called a SIM Card Action. The status of the
   * SIM Card Action can be followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCards.actions.removePublicIP(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  removePublicIP(id: string, options?: RequestOptions): APIPromise<ActionRemovePublicIPResponse> {
    return this._client.post(path`/sim_cards/${id}/actions/remove_public_ip`, options);
  }

  /**
   * This API makes a SIM card reachable on the public internet by mapping a random
   * public IP to the SIM card. <br/><br/> The API will trigger an asynchronous
   * operation called a SIM Card Action. The status of the SIM Card Action can be
   * followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API. <br/><br/> Setting a Public IP to a SIM Card incurs a charge and will only
   * succeed if the account has sufficient funds.
   *
   * @example
   * ```ts
   * const response = await client.simCards.actions.setPublicIP(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  setPublicIP(
    id: string,
    params: ActionSetPublicIPParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionSetPublicIPResponse> {
    const { region_code } = params ?? {};
    return this._client.post(path`/sim_cards/${id}/actions/set_public_ip`, {
      query: { region_code },
      ...options,
    });
  }

  /**
   * The SIM card will be able to connect to the network once the process to set it
   * to standby has been completed, thus making it possible to consume data.<br/> To
   * set a SIM card to standby, it must be associated with SIM card group.<br/> The
   * API will trigger an asynchronous operation called a SIM Card Action.
   * Transitioning to the standby state may take a period of time. The status of the
   * SIM Card Action can be followed through the
   * [List SIM Card Action](https://developers.telnyx.com/api-reference/sim-card-actions/list-sim-card-actions)
   * API.
   *
   * @example
   * ```ts
   * const response = await client.simCards.actions.setStandby(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  setStandby(id: string, options?: RequestOptions): APIPromise<ActionSetStandbyResponse> {
    return this._client.post(path`/sim_cards/${id}/actions/set_standby`, options);
  }

  /**
   * It validates whether SIM card registration codes are valid or not.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simCards.actions.validateRegistrationCodes();
   * ```
   */
  validateRegistrationCodes(
    body: ActionValidateRegistrationCodesParams,
    options?: RequestOptions,
  ): APIPromise<ActionValidateRegistrationCodesResponse> {
    return this._client.post('/sim_cards/actions/validate_registration_codes', { body, ...options });
  }
}

export type SimCardActionsDefaultFlatPagination = DefaultFlatPagination<SimCardAction>;

/**
 * This object represents a SIM card action. It allows tracking the current status
 * of an operation that impacts the SIM card.
 */
export interface SimCardAction {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The operation type. It can be one of the following: <br/>
   *
   * <ul>
   *  <li><code>enable</code> - move the SIM card to the <code>enabled</code> status</li>
   *  <li><code>enable_standby_sim_card</code> - move a SIM card previously on the <code>standby</code> status to the <code>enabled</code> status after it consumes data.</li>
   *  <li><code>disable</code> - move the SIM card to the <code>disabled</code> status</li>
   *  <li><code>set_standby</code> - move the SIM card to the <code>standby</code> status</li>
   *  </ul>
   */
  action_type?: 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby';

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * A JSON object representation of the action params.
   */
  settings?: { [key: string]: unknown } | null;

  /**
   * The related SIM card identifier.
   */
  sim_card_id?: string;

  status?: SimCardAction.Status;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace SimCardAction {
  export interface Status {
    /**
     * It describes why the SIM card action is in the current status. This will be
     * <code>null</code> for self-explanatory statuses, such as
     * <code>in-progress</code> and <code>completed</code> but will include further
     * information on statuses like <code>interrupted</code> and <code>failed</code>.
     */
    reason?: string;

    /**
     * The current status of the SIM card action.
     */
    value?: 'in-progress' | 'completed' | 'failed' | 'interrupted';
  }
}

export interface ActionRetrieveResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionBulkSetPublicIPsResponse {
  /**
   * This object represents a bulk SIM card action. It groups SIM card actions
   * created through a bulk endpoint under a single resource for further lookup.
   */
  data?: ActionBulkSetPublicIPsResponse.Data;
}

export namespace ActionBulkSetPublicIPsResponse {
  /**
   * This object represents a bulk SIM card action. It groups SIM card actions
   * created through a bulk endpoint under a single resource for further lookup.
   */
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * The operation type. It can be one of the following: <br/>
     *
     * <ul>
     * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card.</li>
     * </ul>
     */
    action_type?: 'bulk_set_public_ips';

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    record_type?: string;

    /**
     * A JSON object representation of the bulk action payload.
     */
    settings?: { [key: string]: unknown };

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface ActionDisableResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionEnableResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionRemovePublicIPResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionSetPublicIPResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionSetStandbyResponse {
  /**
   * This object represents a SIM card action. It allows tracking the current status
   * of an operation that impacts the SIM card.
   */
  data?: SimCardAction;
}

export interface ActionValidateRegistrationCodesResponse {
  data?: Array<ActionValidateRegistrationCodesResponse.Data>;
}

export namespace ActionValidateRegistrationCodesResponse {
  export interface Data {
    /**
     * The validation message
     */
    invalid_detail?: string | null;

    record_type?: string;

    /**
     * The 10-digit SIM card registration code
     */
    registration_code?: string;

    /**
     * The attribute that denotes whether the code is valid or not
     */
    valid?: boolean;
  }
}

export interface ActionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for SIM card actions (deepObject style).
   * Originally: filter[sim_card_id], filter[status],
   * filter[bulk_sim_card_action_id], filter[action_type]
   */
  filter?: ActionListParams.Filter;
}

export namespace ActionListParams {
  /**
   * Consolidated filter parameter for SIM card actions (deepObject style).
   * Originally: filter[sim_card_id], filter[status],
   * filter[bulk_sim_card_action_id], filter[action_type]
   */
  export interface Filter {
    /**
     * Filter by action type.
     */
    action_type?:
      | 'enable'
      | 'enable_standby_sim_card'
      | 'disable'
      | 'set_standby'
      | 'remove_public_ip'
      | 'set_public_ip';

    /**
     * Filter by a bulk SIM card action ID.
     */
    bulk_sim_card_action_id?: string;

    /**
     * A valid SIM card ID.
     */
    sim_card_id?: string;

    /**
     * Filter by a specific status of the resource's lifecycle.
     */
    status?: 'in-progress' | 'completed' | 'failed';
  }
}

export interface ActionBulkSetPublicIPsParams {
  sim_card_ids: Array<string>;
}

export interface ActionSetPublicIPParams {
  /**
   * The code of the region where the public IP should be assigned. A list of
   * available regions can be found at the regions endpoint
   */
  region_code?: string;
}

export interface ActionValidateRegistrationCodesParams {
  registration_codes?: Array<string>;
}

export declare namespace Actions {
  export {
    type SimCardAction as SimCardAction,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionBulkSetPublicIPsResponse as ActionBulkSetPublicIPsResponse,
    type ActionDisableResponse as ActionDisableResponse,
    type ActionEnableResponse as ActionEnableResponse,
    type ActionRemovePublicIPResponse as ActionRemovePublicIPResponse,
    type ActionSetPublicIPResponse as ActionSetPublicIPResponse,
    type ActionSetStandbyResponse as ActionSetStandbyResponse,
    type ActionValidateRegistrationCodesResponse as ActionValidateRegistrationCodesResponse,
    type SimCardActionsDefaultFlatPagination as SimCardActionsDefaultFlatPagination,
    type ActionListParams as ActionListParams,
    type ActionBulkSetPublicIPsParams as ActionBulkSetPublicIPsParams,
    type ActionSetPublicIPParams as ActionSetPublicIPParams,
    type ActionValidateRegistrationCodesParams as ActionValidateRegistrationCodesParams,
  };
}
