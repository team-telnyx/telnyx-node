// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WireguardPeersAPI from './wireguard-peers';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireguardPeers extends APIResource {
  /**
   * Create a new WireGuard Peer. Current limitation of 5 peers per interface can be
   * created.
   *
   * @example
   * ```ts
   * const wireguardPeer = await client.wireguardPeers.create({
   *   wireguard_interface_id:
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * });
   * ```
   */
  create(body: WireguardPeerCreateParams, options?: RequestOptions): APIPromise<WireguardPeerCreateResponse> {
    return this._client.post('/wireguard_peers', { body, ...options });
  }

  /**
   * Retrieve the WireGuard peer.
   *
   * @example
   * ```ts
   * const wireguardPeer = await client.wireguardPeers.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WireguardPeerRetrieveResponse> {
    return this._client.get(path`/wireguard_peers/${id}`, options);
  }

  /**
   * Update the WireGuard peer.
   *
   * @example
   * ```ts
   * const wireguardPeer = await client.wireguardPeers.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  update(
    id: string,
    body: WireguardPeerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WireguardPeerUpdateResponse> {
    return this._client.patch(path`/wireguard_peers/${id}`, { body, ...options });
  }

  /**
   * List all WireGuard peers.
   *
   * @example
   * ```ts
   * const wireguardPeers = await client.wireguardPeers.list();
   * ```
   */
  list(
    query: WireguardPeerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WireguardPeerListResponse> {
    return this._client.get('/wireguard_peers', { query, ...options });
  }

  /**
   * Delete the WireGuard peer.
   *
   * @example
   * ```ts
   * const wireguardPeer = await client.wireguardPeers.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WireguardPeerDeleteResponse> {
    return this._client.delete(path`/wireguard_peers/${id}`, options);
  }

  /**
   * Retrieve Wireguard config template for Peer
   *
   * @example
   * ```ts
   * const response = await client.wireguardPeers.retrieveConfig(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieveConfig(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/wireguard_peers/${id}/config`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export interface WireguardPeerPatch {
  /**
   * The WireGuard `PublicKey`.<br /><br />If you do not provide a Public Key, a new
   * Public and Private key pair will be generated for you.
   */
  public_key?: string;
}

export interface WireguardPeerCreateResponse {
  data?: WireguardPeerCreateResponse.Data;
}

export namespace WireguardPeerCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, WireguardPeersAPI.WireguardPeerPatch {
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    last_seen?: string;

    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever
     * utlised if, on POST, you do NOT provide your own `public_key`. In which case, a
     * new Public and Private key pair will be generated for you. When your
     * `private_key` is returned, you must save this immediately as we do not save it
     * within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    private_key?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
  }
}

export interface WireguardPeerRetrieveResponse {
  data?: WireguardPeerRetrieveResponse.Data;
}

export namespace WireguardPeerRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, WireguardPeersAPI.WireguardPeerPatch {
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    last_seen?: string;

    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever
     * utlised if, on POST, you do NOT provide your own `public_key`. In which case, a
     * new Public and Private key pair will be generated for you. When your
     * `private_key` is returned, you must save this immediately as we do not save it
     * within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    private_key?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
  }
}

export interface WireguardPeerUpdateResponse {
  data?: WireguardPeerUpdateResponse.Data;
}

export namespace WireguardPeerUpdateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, WireguardPeersAPI.WireguardPeerPatch {
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    last_seen?: string;

    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever
     * utlised if, on POST, you do NOT provide your own `public_key`. In which case, a
     * new Public and Private key pair will be generated for you. When your
     * `private_key` is returned, you must save this immediately as we do not save it
     * within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    private_key?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
  }
}

export interface WireguardPeerListResponse {
  data?: Array<WireguardPeerListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace WireguardPeerListResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, WireguardPeersAPI.WireguardPeerPatch {
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    last_seen?: string;

    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever
     * utlised if, on POST, you do NOT provide your own `public_key`. In which case, a
     * new Public and Private key pair will be generated for you. When your
     * `private_key` is returned, you must save this immediately as we do not save it
     * within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    private_key?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
  }
}

export interface WireguardPeerDeleteResponse {
  data?: WireguardPeerDeleteResponse.Data;
}

export namespace WireguardPeerDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, WireguardPeersAPI.WireguardPeerPatch {
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    last_seen?: string;

    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever
     * utlised if, on POST, you do NOT provide your own `public_key`. In which case, a
     * new Public and Private key pair will be generated for you. When your
     * `private_key` is returned, you must save this immediately as we do not save it
     * within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    private_key?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
  }
}

export type WireguardPeerRetrieveConfigResponse = string;

export interface WireguardPeerCreateParams {
  /**
   * The id of the wireguard interface associated with the peer.
   */
  wireguard_interface_id: string;

  /**
   * The WireGuard `PublicKey`.<br /><br />If you do not provide a Public Key, a new
   * Public and Private key pair will be generated for you.
   */
  public_key?: string;
}

export interface WireguardPeerUpdateParams {
  /**
   * The WireGuard `PublicKey`.<br /><br />If you do not provide a Public Key, a new
   * Public and Private key pair will be generated for you.
   */
  public_key?: string;
}

export interface WireguardPeerListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[wireguard_interface_id]
   */
  filter?: WireguardPeerListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: WireguardPeerListParams.Page;
}

export namespace WireguardPeerListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[wireguard_interface_id]
   */
  export interface Filter {
    /**
     * The id of the associated WireGuard interface to filter on.
     */
    wireguard_interface_id?: string;
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

export declare namespace WireguardPeers {
  export {
    type WireguardPeerPatch as WireguardPeerPatch,
    type WireguardPeerCreateResponse as WireguardPeerCreateResponse,
    type WireguardPeerRetrieveResponse as WireguardPeerRetrieveResponse,
    type WireguardPeerUpdateResponse as WireguardPeerUpdateResponse,
    type WireguardPeerListResponse as WireguardPeerListResponse,
    type WireguardPeerDeleteResponse as WireguardPeerDeleteResponse,
    type WireguardPeerRetrieveConfigResponse as WireguardPeerRetrieveConfigResponse,
    type WireguardPeerCreateParams as WireguardPeerCreateParams,
    type WireguardPeerUpdateParams as WireguardPeerUpdateParams,
    type WireguardPeerListParams as WireguardPeerListParams,
  };
}
