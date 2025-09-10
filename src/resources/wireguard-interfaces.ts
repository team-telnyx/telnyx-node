// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as PublicInternetGatewaysAPI from './public-internet-gateways';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireguardInterfaces extends APIResource {
  /**
   * Create a new WireGuard Interface. Current limitation of 10 interfaces per user
   * can be created.
   *
   * @example
   * ```ts
   * const wireguardInterface =
   *   await client.wireguardInterfaces.create({
   *     network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     region_code: 'ashburn-va',
   *   });
   * ```
   */
  create(
    body: WireguardInterfaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<WireguardInterfaceCreateResponse> {
    return this._client.post('/wireguard_interfaces', { body, ...options });
  }

  /**
   * Retrieve a WireGuard Interfaces.
   *
   * @example
   * ```ts
   * const wireguardInterface =
   *   await client.wireguardInterfaces.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WireguardInterfaceRetrieveResponse> {
    return this._client.get(path`/wireguard_interfaces/${id}`, options);
  }

  /**
   * List all WireGuard Interfaces.
   *
   * @example
   * ```ts
   * const wireguardInterfaces =
   *   await client.wireguardInterfaces.list();
   * ```
   */
  list(
    query: WireguardInterfaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WireguardInterfaceListResponse> {
    return this._client.get('/wireguard_interfaces', { query, ...options });
  }

  /**
   * Delete a WireGuard Interface.
   *
   * @example
   * ```ts
   * const wireguardInterface =
   *   await client.wireguardInterfaces.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WireguardInterfaceDeleteResponse> {
    return this._client.delete(path`/wireguard_interfaces/${id}`, options);
  }
}

export interface WireguardInterfaceCreateResponse {
  data?: WireguardInterfaceCreateResponse.Data;
}

export namespace WireguardInterfaceCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }

  export namespace Data {
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
}

export interface WireguardInterfaceRetrieveResponse {
  data?: WireguardInterfaceRetrieveResponse.Data;
}

export namespace WireguardInterfaceRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }

  export namespace Data {
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
}

export interface WireguardInterfaceListResponse {
  data?: Array<WireguardInterfaceListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace WireguardInterfaceListResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }

  export namespace Data {
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
}

export interface WireguardInterfaceDeleteResponse {
  data?: WireguardInterfaceDeleteResponse.Data;
}

export namespace WireguardInterfaceDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }

  export namespace Data {
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
}

export interface WireguardInterfaceCreateParams {
  /**
   * The id of the network associated with the interface.
   */
  network_id: string;

  /**
   * The region the interface should be deployed to.
   */
  region_code: string;

  /**
   * Enable SIP traffic forwarding over VPN interface.
   */
  enable_sip_trunking?: boolean;

  /**
   * A user specified name for the interface.
   */
  name?: string;
}

export interface WireguardInterfaceListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: WireguardInterfaceListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: WireguardInterfaceListParams.Page;
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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace WireguardInterfaces {
  export {
    type WireguardInterfaceCreateResponse as WireguardInterfaceCreateResponse,
    type WireguardInterfaceRetrieveResponse as WireguardInterfaceRetrieveResponse,
    type WireguardInterfaceListResponse as WireguardInterfaceListResponse,
    type WireguardInterfaceDeleteResponse as WireguardInterfaceDeleteResponse,
    type WireguardInterfaceCreateParams as WireguardInterfaceCreateParams,
    type WireguardInterfaceListParams as WireguardInterfaceListParams,
  };
}
