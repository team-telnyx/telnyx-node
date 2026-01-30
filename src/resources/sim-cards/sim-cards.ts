// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { SimpleSimCardsDefaultFlatPagination } from '../shared';
import * as ActionsAPI from './actions';
import {
  ActionBulkSetPublicIPsParams,
  ActionBulkSetPublicIPsResponse,
  ActionDisableResponse,
  ActionEnableResponse,
  ActionListParams,
  ActionRemovePublicIPResponse,
  ActionRetrieveResponse,
  ActionSetPublicIPParams,
  ActionSetPublicIPResponse,
  ActionSetStandbyResponse,
  ActionValidateRegistrationCodesParams,
  ActionValidateRegistrationCodesResponse,
  Actions,
  SimCardAction,
  SimCardActionsDefaultFlatPagination,
} from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SimCards extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns the details regarding a specific SIM card.
   *
   * @example
   * ```ts
   * const simCard = await client.simCards.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: SimCardRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimCardRetrieveResponse> {
    return this._client.get(path`/sim_cards/${id}`, { query, ...options });
  }

  /**
   * Updates SIM card data
   *
   * @example
   * ```ts
   * const simCard = await client.simCards.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  update(
    simCardID: string,
    body: SimCardUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SimCardUpdateResponse> {
    return this._client.patch(path`/sim_cards/${simCardID}`, { body, ...options });
  }

  /**
   * Get all SIM cards belonging to the user that match the given filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simpleSimCard of client.simCards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SimCardListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimpleSimCardsDefaultFlatPagination, Shared.SimpleSimCard> {
    return this._client.getAPIList('/sim_cards', DefaultFlatPagination<Shared.SimpleSimCard>, {
      query,
      ...options,
    });
  }

  /**
   * The SIM card will be decommissioned, removed from your account and you will stop
   * being charged.<br />The SIM card won't be able to connect to the network after
   * the deletion is completed, thus making it impossible to consume data.<br/>
   * Transitioning to the disabled state may take a period of time. Until the
   * transition is completed, the SIM card status will be disabling
   * <code>disabling</code>.<br />In order to re-enable the SIM card, you will need
   * to re-register it.
   *
   * @example
   * ```ts
   * const simCard = await client.simCards.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(
    id: string,
    params: SimCardDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimCardDeleteResponse> {
    const { report_lost } = params ?? {};
    return this._client.delete(path`/sim_cards/${id}`, { query: { report_lost }, ...options });
  }

  /**
   * It returns the activation code for an eSIM.<br/><br/> This API is only available
   * for eSIMs. If the given SIM is a physical SIM card, or has already been
   * installed, an error will be returned.
   *
   * @example
   * ```ts
   * const response = await client.simCards.getActivationCode(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  getActivationCode(id: string, options?: RequestOptions): APIPromise<SimCardGetActivationCodeResponse> {
    return this._client.get(path`/sim_cards/${id}/activation_code`, options);
  }

  /**
   * It returns the device details where a SIM card is currently being used.
   *
   * @example
   * ```ts
   * const response = await client.simCards.getDeviceDetails(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  getDeviceDetails(id: string, options?: RequestOptions): APIPromise<SimCardGetDeviceDetailsResponse> {
    return this._client.get(path`/sim_cards/${id}/device_details`, options);
  }

  /**
   * It returns the public IP requested for a SIM card.
   *
   * @example
   * ```ts
   * const response = await client.simCards.getPublicIP(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  getPublicIP(id: string, options?: RequestOptions): APIPromise<SimCardGetPublicIPResponse> {
    return this._client.get(path`/sim_cards/${id}/public_ip`, options);
  }

  /**
   * This API allows listing a paginated collection of Wireless Connectivity Logs
   * associated with a SIM Card, for troubleshooting purposes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const simCardListWirelessConnectivityLogsResponse of client.simCards.listWirelessConnectivityLogs(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * )) {
   *   // ...
   * }
   * ```
   */
  listWirelessConnectivityLogs(
    id: string,
    query: SimCardListWirelessConnectivityLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination,
    SimCardListWirelessConnectivityLogsResponse
  > {
    return this._client.getAPIList(
      path`/sim_cards/${id}/wireless_connectivity_logs`,
      DefaultFlatPagination<SimCardListWirelessConnectivityLogsResponse>,
      { query, ...options },
    );
  }
}

export type SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination =
  DefaultFlatPagination<SimCardListWirelessConnectivityLogsResponse>;

export interface SimCard {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Indicate whether the SIM card has any pending (in-progress) actions.
   */
  actions_in_progress?: boolean;

  /**
   * List of IMEIs authorized to use a given SIM card.
   */
  authorized_imeis?: Array<string> | null;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The SIM card consumption so far in the current billing cycle.
   */
  current_billing_period_consumed_data?: SimCard.CurrentBillingPeriodConsumedData;

  /**
   * Current physical location data of a given SIM card. Accuracy is given in meters.
   */
  current_device_location?: SimCard.CurrentDeviceLocation;

  /**
   * IMEI of the device where a given SIM card is currently being used.
   */
  current_imei?: string;

  /**
   * Mobile Country Code of the current network to which the SIM card is connected.
   * It's a three decimal digit that identifies a country.<br/><br/> This code is
   * commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows
   * identifying a carrier known as PLMN (Public Land Mobile Network) code.
   */
  current_mcc?: string;

  /**
   * Mobile Network Code of the current network to which the SIM card is connected.
   * It's a two to three decimal digits that identify a network.<br/><br/> This code
   * is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows
   * identifying a carrier known as PLMN (Public Land Mobile Network) code.
   */
  current_mnc?: string;

  /**
   * The SIM card individual data limit configuration.
   */
  data_limit?: SimCard.DataLimit;

  /**
   * The Embedded Identity Document (eID) for eSIM cards.
   */
  eid?: string | null;

  /**
   * The installation status of the eSIM. Only applicable for eSIM cards.
   */
  esim_installation_status?: 'released' | 'disabled' | null;

  /**
   * The ICCID is the identifier of the specific SIM card/chip. Each SIM is
   * internationally identified by its integrated circuit card identifier (ICCID).
   * ICCIDs are stored in the SIM card's memory and are also engraved or printed on
   * the SIM card body during a process called personalization.
   */
  iccid?: string;

  /**
   * SIM cards are identified on their individual network operators by a unique
   * International Mobile Subscriber Identity (IMSI). <br/> Mobile network operators
   * connect mobile phone calls and communicate with their market SIM cards using
   * their IMSIs. The IMSI is stored in the Subscriber Identity Module (SIM) inside
   * the device and is sent by the device to the appropriate network. It is used to
   * acquire the details of the device in the Home Location Register (HLR) or the
   * Visitor Location Register (VLR).
   */
  imsi?: string;

  /**
   * The SIM's address in the currently connected network. This IPv4 address is
   * usually obtained dynamically, so it may vary according to the location or new
   * connections.
   */
  ipv4?: string;

  /**
   * The SIM's address in the currently connected network. This IPv6 address is
   * usually obtained dynamically, so it may vary according to the location or new
   * connections.
   */
  ipv6?: string;

  /**
   * Indicates whether the device is actively connected to a network and able to run
   * data.
   */
  live_data_session?: 'connected' | 'disconnected' | 'unknown';

  /**
   * Mobile Station International Subscriber Directory Number (MSISDN) is a number
   * used to identify a mobile phone number internationally. <br/> MSISDN is defined
   * by the E.164 numbering plan. It includes a country code and a National
   * Destination Code which identifies the subscriber's operator.
   */
  msisdn?: string;

  /**
   * PIN and PUK codes for the SIM card. Only available when
   * include_pin_puk_codes=true is set in the request.
   */
  pin_puk_codes?: SimCard.PinPukCodes;

  record_type?: string;

  /**
   * List of resources with actions in progress.
   */
  resources_with_in_progress_actions?: Array<{ [key: string]: unknown }>;

  /**
   * The group SIMCardGroup identification. This attribute can be <code>null</code>
   * when it's present in an associated resource.
   */
  sim_card_group_id?: string;

  status?: Shared.SimCardStatus;

  /**
   * Searchable tags associated with the SIM card
   */
  tags?: Array<string>;

  /**
   * The type of SIM card
   */
  type?: 'physical' | 'esim';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The version of the SIM card.
   */
  version?: string;
}

export namespace SimCard {
  /**
   * The SIM card consumption so far in the current billing cycle.
   */
  export interface CurrentBillingPeriodConsumedData {
    amount?: string;

    unit?: string;
  }

  /**
   * Current physical location data of a given SIM card. Accuracy is given in meters.
   */
  export interface CurrentDeviceLocation {
    accuracy?: number;

    accuracy_unit?: string;

    latitude?: string;

    longitude?: string;
  }

  /**
   * The SIM card individual data limit configuration.
   */
  export interface DataLimit {
    amount?: string;

    unit?: 'MB' | 'GB';
  }

  /**
   * PIN and PUK codes for the SIM card. Only available when
   * include_pin_puk_codes=true is set in the request.
   */
  export interface PinPukCodes {
    /**
     * The primary Personal Identification Number (PIN) for the SIM card. This is a
     * 4-digit code used to protect the SIM card from unauthorized use.
     */
    pin1?: string;

    /**
     * The secondary Personal Identification Number (PIN2) for the SIM card. This is a
     * 4-digit code used for additional security features.
     */
    pin2?: string;

    /**
     * The primary Personal Unblocking Key (PUK1) for the SIM card. This is an 8-digit
     * code used to unlock the SIM card if PIN1 is entered incorrectly multiple times.
     */
    puk1?: string;

    /**
     * The secondary Personal Unblocking Key (PUK2) for the SIM card. This is an
     * 8-digit code used to unlock the SIM card if PIN2 is entered incorrectly multiple
     * times.
     */
    puk2?: string;
  }
}

export interface SimCardRetrieveResponse {
  data?: SimCard;
}

export interface SimCardUpdateResponse {
  data?: SimCard;
}

export interface SimCardDeleteResponse {
  data?: SimCard;
}

export interface SimCardGetActivationCodeResponse {
  data?: SimCardGetActivationCodeResponse.Data;
}

export namespace SimCardGetActivationCodeResponse {
  export interface Data {
    /**
     * Contents of the eSIM activation QR code.
     */
    activation_code?: string;

    record_type?: string;
  }
}

export interface SimCardGetDeviceDetailsResponse {
  data?: SimCardGetDeviceDetailsResponse.Data;
}

export namespace SimCardGetDeviceDetailsResponse {
  export interface Data {
    /**
     * Brand of the device where the SIM card is being used in.
     */
    brand_name?: string;

    /**
     * Type of the device where the SIM card is being used in.
     */
    device_type?: string;

    /**
     * IMEI of the device where the SIM card is being used in.
     */
    imei?: string;

    /**
     * Brand of the device where the SIM card is being used in.
     */
    model_name?: string;

    /**
     * Operating system of the device where the SIM card is being used in.
     */
    operating_system?: string;

    record_type?: string;
  }
}

export interface SimCardGetPublicIPResponse {
  data?: SimCardGetPublicIPResponse.Data;
}

export namespace SimCardGetPublicIPResponse {
  export interface Data {
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The provisioned IP address. This attribute will only be available when
     * underlying resource status is in a "provisioned" status.
     */
    ip?: string;

    record_type?: string;

    region_code?: string;

    sim_card_id?: string;

    type?: 'ipv4';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

/**
 * This object represents a wireless connectivity session log that happened through
 * a SIM card. It aids in finding out potential problems when the SIM is not able
 * to attach properly.
 */
export interface SimCardListWirelessConnectivityLogsResponse {
  /**
   * Uniquely identifies the session.
   */
  id?: number;

  /**
   * The Access Point Name (APN) identifies the packet data network that a mobile
   * data user wants to communicate with.
   */
  apn?: string;

  /**
   * The cell ID to which the SIM connected.
   */
  cell_id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the record was created.
   */
  created_at?: string;

  /**
   * The International Mobile Equipment Identity (or IMEI) is a number, usually
   * unique, that identifies the device currently being used connect to the network.
   */
  imei?: string;

  /**
   * SIM cards are identified on their individual network operators by a unique
   * International Mobile Subscriber Identity (IMSI). <br/> Mobile network operators
   * connect mobile phone calls and communicate with their market SIM cards using
   * their IMSIs. The IMSI is stored in the Subscriber Identity Module (SIM) inside
   * the device and is sent by the device to the appropriate network. It is used to
   * acquire the details of the device in the Home Location Register (HLR) or the
   * Visitor Location Register (VLR).
   */
  imsi?: string;

  /**
   * The SIM's address in the currently connected network. This IPv4 address is
   * usually obtained dynamically, so it may vary according to the location or new
   * connections.
   */
  ipv4?: string;

  /**
   * The SIM's address in the currently connected network. This IPv6 address is
   * usually obtained dynamically, so it may vary according to the location or new
   * connections.
   */
  ipv6?: string;

  /**
   * ISO 8601 formatted date-time indicating when the last heartbeat to the device
   * was successfully recorded.
   */
  last_seen?: string;

  /**
   * The type of the session, 'registration' being the initial authentication session
   * and 'data' the actual data transfer sessions.
   */
  log_type?: 'registration' | 'data';

  /**
   * It's a three decimal digit that identifies a country.<br/><br/> This code is
   * commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows
   * identifying a carrier known as PLMN (Public Land Mobile Network) code.
   */
  mobile_country_code?: string;

  /**
   * It's a two to three decimal digits that identify a network.<br/><br/> This code
   * is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows
   * identifying a carrier known as PLMN (Public Land Mobile Network) code.
   */
  mobile_network_code?: string;

  /**
   * The radio technology the SIM card used during the session.
   */
  radio_access_technology?: string;

  record_type?: string;

  /**
   * The identification UUID of the related SIM card resource.
   */
  sim_card_id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the session started.
   */
  start_time?: string;

  /**
   * The state of the SIM card after when the session happened.
   */
  state?: string;

  /**
   * ISO 8601 formatted date-time indicating when the session ended.
   */
  stop_time?: string;
}

export interface SimCardRetrieveParams {
  /**
   * When set to true, includes the PIN and PUK codes in the response. These codes
   * are used for SIM card security and unlocking purposes. Available for both
   * physical SIM cards and eSIMs.
   */
  include_pin_puk_codes?: boolean;

  /**
   * It includes the associated SIM card group object in the response when present.
   */
  include_sim_card_group?: boolean;
}

export interface SimCardUpdateParams {
  /**
   * List of IMEIs authorized to use a given SIM card.
   */
  authorized_imeis?: Array<string> | null;

  /**
   * The SIM card individual data limit configuration.
   */
  data_limit?: SimCardUpdateParams.DataLimit;

  /**
   * The group SIMCardGroup identification. This attribute can be <code>null</code>
   * when it's present in an associated resource.
   */
  sim_card_group_id?: string;

  status?: Shared.SimCardStatus;

  /**
   * Searchable tags associated with the SIM card
   */
  tags?: Array<string>;
}

export namespace SimCardUpdateParams {
  /**
   * The SIM card individual data limit configuration.
   */
  export interface DataLimit {
    amount?: string;

    unit?: 'MB' | 'GB';
  }
}

export interface SimCardListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for SIM cards (deepObject style). Originally:
   * filter[iccid], filter[msisdn], filter[status], filter[tags]
   */
  filter?: SimCardListParams.Filter;

  /**
   * A valid SIM card group ID.
   */
  'filter[sim_card_group_id]'?: string;

  /**
   * It includes the associated SIM card group object in the response when present.
   */
  include_sim_card_group?: boolean;

  /**
   * Sorts SIM cards by the given field. Defaults to ascending order unless field is
   * prefixed with a minus sign.
   */
  sort?: 'current_billing_period_consumed_data.amount' | '-current_billing_period_consumed_data.amount';
}

export namespace SimCardListParams {
  /**
   * Consolidated filter parameter for SIM cards (deepObject style). Originally:
   * filter[iccid], filter[msisdn], filter[status], filter[tags]
   */
  export interface Filter {
    /**
     * A search string to partially match for the SIM card's ICCID.
     */
    iccid?: string;

    /**
     * A search string to match for the SIM card's MSISDN.
     */
    msisdn?: string;

    /**
     * Filter by a SIM card's status.
     */
    status?: Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>;

    /**
     * A list of SIM card tags to filter on.<br/><br/> If the SIM card contains
     * <b><i>all</i></b> of the given <code>tags</code> they will be found.<br/><br/>
     * For example, if the SIM cards have the following tags: <ul>
     *
     *   <li><code>['customers', 'staff', 'test']</code>
     *   <li><code>['test']</code></li>
     *   <li><code>['customers']</code></li>
     * </ul>
     * Searching for <code>['customers', 'test']</code> returns only the first because it's the only one with both tags.<br/> Searching for <code>test</code> returns the first two SIMs, because both of them have such tag.<br/> Searching for <code>customers</code> returns the first and last SIMs.<br/>
     */
    tags?: Array<string>;
  }
}

export interface SimCardDeleteParams {
  /**
   * Enables deletion of disabled eSIMs that can't be uninstalled from a device. This
   * is irreversible and the eSIM cannot be re-registered.
   */
  report_lost?: boolean;
}

export interface SimCardListWirelessConnectivityLogsParams extends DefaultFlatPaginationParams {}

SimCards.Actions = Actions;

export declare namespace SimCards {
  export {
    type SimCard as SimCard,
    type SimCardRetrieveResponse as SimCardRetrieveResponse,
    type SimCardUpdateResponse as SimCardUpdateResponse,
    type SimCardDeleteResponse as SimCardDeleteResponse,
    type SimCardGetActivationCodeResponse as SimCardGetActivationCodeResponse,
    type SimCardGetDeviceDetailsResponse as SimCardGetDeviceDetailsResponse,
    type SimCardGetPublicIPResponse as SimCardGetPublicIPResponse,
    type SimCardListWirelessConnectivityLogsResponse as SimCardListWirelessConnectivityLogsResponse,
    type SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination as SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination,
    type SimCardRetrieveParams as SimCardRetrieveParams,
    type SimCardUpdateParams as SimCardUpdateParams,
    type SimCardListParams as SimCardListParams,
    type SimCardDeleteParams as SimCardDeleteParams,
    type SimCardListWirelessConnectivityLogsParams as SimCardListWirelessConnectivityLogsParams,
  };

  export {
    Actions as Actions,
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

export { type SimpleSimCardsDefaultFlatPagination };
