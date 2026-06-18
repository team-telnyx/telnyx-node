// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WireguardInterfacesAPI from './wireguard-interfaces';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as PublicInternetGatewaysAPI from './public-internet-gateways';
import * as NetworksAPI from './networks/networks';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * WireGuard Interface operations
 */
export class WireguardInterfaces extends APIResource {
  /**
   * Create a new WireGuard Interface. Current limitation of 10 interfaces per user
   * can be created.
   */
  create(
    params: WireguardInterfaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<WireguardInterfaceCreateResponse> {
    const { body } = params;
    return this._client.post('/wireguard_interfaces', { body: body, ...options });
  }

  /**
   * Retrieve a WireGuard Interfaces.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WireguardInterfaceRetrieveResponse> {
    return this._client.get(path`/wireguard_interfaces/${id}`, options);
  }

  /**
   * List all WireGuard Interfaces.
   */
  list(
    query: WireguardInterfaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WireguardInterfaceReadsDefaultFlatPagination, WireguardInterfaceRead> {
    return this._client.getAPIList('/wireguard_interfaces', DefaultFlatPagination<WireguardInterfaceRead>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a WireGuard Interface.
   */
  delete(id: string, options?: RequestOptions): APIPromise<WireguardInterfaceDeleteResponse> {
    return this._client.delete(path`/wireguard_interfaces/${id}`, options);
  }
}

export type WireguardInterfaceReadsDefaultFlatPagination = DefaultFlatPagination<WireguardInterfaceRead>;

export interface WireguardInterface
  extends GlobalIPAssignmentsAPI.Record,
    PublicInternetGatewaysAPI.NetworkInterface {
  /**
   * Enable SIP traffic forwarding over VPN interface.
   */
  enable_sip_trunking?: boolean;

  /**
   * The Telnyx WireGuard peers `Peer.endpoint` value.
   */
  endpoint?: string;

  /**
   * The Telnyx WireGuard peers `Peer.PublicKey`.
   */
  public_key?: string;
}

export interface WireguardInterfaceRead {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Enable SIP traffic forwarding over VPN interface.
   */
  enable_sip_trunking?: boolean;

  /**
   * The Telnyx WireGuard peers `Peer.endpoint` value.
   */
  endpoint?: string;

  /**
   * A user specified name for the interface.
   */
  name?: string;

  /**
   * The id of the network associated with the interface.
   */
  network_id?: string;

  /**
   * The Telnyx WireGuard peers `Peer.PublicKey`.
   */
  public_key?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  region?: WireguardInterfaceRead.Region;

  /**
   * The region interface is deployed to.
   */
  region_code?: string;

  /**
   * The current status of the interface deployment.
   */
  status?: NetworksAPI.InterfaceStatus;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace WireguardInterfaceRead {
  export interface Region {
    /**
     * Region code of the interface.
     */
    code?: string;

    /**
     * Region name of the interface.
     */
    name?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface WireguardInterfaceCreateResponse {
  data?: WireguardInterfaceRead;
}

export interface WireguardInterfaceRetrieveResponse {
  data?: WireguardInterfaceRead;
}

export interface WireguardInterfaceDeleteResponse {
  data?: WireguardInterfaceRead;
}

export interface WireguardInterfaceCreateParams {
  body: WireguardInterfaceCreateParams.Body;
}

export namespace WireguardInterfaceCreateParams {
  export interface Body
    extends WireguardInterfacesAPI.WireguardInterface,
      PublicInternetGatewaysAPI.NetworkInterfaceRegion {}
}

export interface WireguardInterfaceListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: WireguardInterfaceListParams.Filter;
}

export namespace WireguardInterfaceListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  export interface Filter {
    /**
     * The associated network id to filter on.
     */
    network_id?: string;
  }
}

export declare namespace WireguardInterfaces {
  export {
    type WireguardInterface as WireguardInterface,
    type WireguardInterfaceRead as WireguardInterfaceRead,
    type WireguardInterfaceCreateResponse as WireguardInterfaceCreateResponse,
    type WireguardInterfaceRetrieveResponse as WireguardInterfaceRetrieveResponse,
    type WireguardInterfaceDeleteResponse as WireguardInterfaceDeleteResponse,
    type WireguardInterfaceReadsDefaultFlatPagination as WireguardInterfaceReadsDefaultFlatPagination,
    type WireguardInterfaceCreateParams as WireguardInterfaceCreateParams,
    type WireguardInterfaceListParams as WireguardInterfaceListParams,
  };
}
