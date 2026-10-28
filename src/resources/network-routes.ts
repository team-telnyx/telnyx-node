// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Routes on a Network that send a CIDR to a next hop, such as a tunnel.
 */
export class NetworkRoutes extends APIResource {
  /**
   * Lists the routes of the account's Networks. A Network's list is its effective
   * route table: the routes added with `POST /network_routes` (`origin` `static`)
   * and the routes that its attachments install (`origin` `attachment`). Lookup is
   * longest prefix within the Network.
   *
   * @example
   * ```ts
   * const networkRoutes = await client.networkRoutes.list({
   *   filter: {
   *     network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24',
   *   },
   * });
   * ```
   */
  list(query: NetworkRouteListParams, options?: RequestOptions): APIPromise<NetworkRouteListResponse> {
    return this._client.get('/network_routes', { query, ...options });
  }

  /**
   * Adds a route to a Network. Traffic on the Network to an address in `cidr` goes
   * via `next_hop`. With a tunnel as the next hop, functions on the Network reach
   * the CIDR through the tunnel without a redeploy. A Network holds each CIDR once.
   *
   * @example
   * ```ts
   * const networkRoute = await client.networkRoutes.create({
   *   cidr: '10.20.0.0/16',
   *   network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24',
   *   next_hop: {
   *     type: 'tunnel',
   *     id: '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39',
   *   },
   * });
   * ```
   */
  create(body: NetworkRouteCreateParams, options?: RequestOptions): APIPromise<NetworkRouteCreateResponse> {
    return this._client.post('/network_routes', { body, ...options });
  }

  /**
   * Deletes a route that was added with `POST /network_routes`. Traffic to its CIDR
   * stops going via the next hop at once. Routes that an attachment installs
   * (`origin` `attachment`) leave with the attachment and cannot be deleted here.
   *
   * @example
   * ```ts
   * await client.networkRoutes.delete(
   *   'e8a2c5d0-3f7b-4a19-b6d2-9c1e0f8a7b53',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/network_routes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a route and its status.
   *
   * @example
   * ```ts
   * const networkRoute = await client.networkRoutes.retrieve(
   *   'e8a2c5d0-3f7b-4a19-b6d2-9c1e0f8a7b53',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NetworkRouteRetrieveResponse> {
    return this._client.get(path`/network_routes/${id}`, options);
  }
}

export interface NetappsCursorPaginationMeta {
  /**
   * Opaque cursors. Absent keys mean there is no such page.
   */
  cursors?: NetappsCursorPaginationMeta.Cursors;

  /**
   * The path of the next page, with the same query parameters. Absent on the last
   * page.
   */
  next?: string;

  /**
   * The path of the previous page. Present when the request used `page[after]`.
   */
  previous?: string;
}

export namespace NetappsCursorPaginationMeta {
  /**
   * Opaque cursors. Absent keys mean there is no such page.
   */
  export interface Cursors {
    /**
     * Pass as `page[after]` to fetch the next page. Absent on the last page.
     */
    after?: string;

    /**
     * The cursor of the previous page. Present when the request used `page[after]`.
     */
    before?: string;
  }
}

export interface NetworkRoute {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The IPv4 CIDR the route covers.
   */
  cidr?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The id of the Network the route belongs to.
   */
  network_id?: string;

  /**
   * Where the Network sends traffic for the route's CIDR.
   */
  next_hop?: NetworkRoute.NextHop;

  /**
   * `static` for a route added with `POST /network_routes`, `attachment` for a route
   * that another resource installed and removes.
   */
  origin?: 'static' | 'attachment';

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * `pending` until Telnyx installs the route on the Network, then `active`.
   * `inactive` while a tunnel next hop has no connected process. `failed` (Preview,
   * not reported yet) when Telnyx could not install the route.
   */
  status?: 'pending' | 'active' | 'inactive' | 'failed';
}

export namespace NetworkRoute {
  /**
   * Where the Network sends traffic for the route's CIDR.
   */
  export interface NextHop {
    /**
     * The id of the tunnel or attachment.
     */
    id: string;

    /**
     * The type of the next hop. Routes added with `POST /network_routes` use `tunnel`.
     * Routes that attachments install carry the attachment's type.
     */
    type:
      | 'tunnel'
      | 'wireguard_peer'
      | 'wireguard_interface'
      | 'private_wireless_gateway'
      | 'virtual_cross_connect'
      | 'ipsec_tunnel'
      | 'public_internet_gateway';
  }
}

export interface NetworkRouteCreateResponse {
  data?: NetworkRoute;
}

export interface NetworkRouteRetrieveResponse {
  data?: NetworkRoute;
}

export interface NetworkRouteListResponse {
  data?: Array<NetworkRoute>;

  meta?: NetappsCursorPaginationMeta;
}

export interface NetworkRouteListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[network_id], filter[origin], filter[next_hop.type], filter[cidr],
   * filter[status]
   */
  filter: NetworkRouteListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[limit]
   */
  page?: NetworkRouteListParams.Page;

  /**
   * Sorts the results by a field, ascending, or descending with a leading `-`. The
   * default is `-created_at`.
   */
  sort?: 'cidr' | '-cidr' | 'status' | '-status' | 'created_at' | '-created_at';
}

export namespace NetworkRouteListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[network_id], filter[origin], filter[next_hop.type], filter[cidr],
   * filter[status]
   */
  export interface Filter {
    /**
     * The id of the Network whose route table is returned. Required.
     */
    network_id: string;

    /**
     * Only routes with this CIDR.
     */
    cidr?: string;

    /**
     * Only routes whose next hop has this type.
     */
    'next_hop.type'?:
      | 'tunnel'
      | 'wireguard_peer'
      | 'wireguard_interface'
      | 'private_wireless_gateway'
      | 'virtual_cross_connect'
      | 'ipsec_tunnel'
      | 'public_internet_gateway';

    /**
     * Only routes of this origin.
     */
    origin?: 'static' | 'attachment';

    /**
     * Only routes with this status.
     */
    status?: 'pending' | 'active' | 'inactive' | 'failed';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[limit]
   */
  export interface Page {
    /**
     * The cursor from `meta.cursors.after` of the previous page.
     */
    after?: string;

    /**
     * The number of results per page.
     */
    limit?: number;
  }
}

export interface NetworkRouteCreateParams {
  /**
   * The IPv4 subnet to route, such as a subnet behind the tunnel. It must be a
   * canonical CIDR. Default, loopback, link-local, multicast, and shared address
   * space (`100.64.0.0/10`) ranges are rejected. So are ranges that overlap the
   * Tailscale Subnet Router ranges, `172.27.254.0/24` and `198.18.0.0/20`, or a
   * subnet already on the Network.
   */
  cidr: string;

  /**
   * The id of the Network to add the route to.
   */
  network_id: string;

  /**
   * Where the Network sends traffic for `cidr`.
   */
  next_hop: NetworkRouteCreateParams.NextHop;
}

export namespace NetworkRouteCreateParams {
  /**
   * Where the Network sends traffic for `cidr`.
   */
  export interface NextHop {
    /**
     * The id of the tunnel.
     */
    id: string;

    /**
     * The type of the next hop.
     */
    type: 'tunnel';
  }
}

export declare namespace NetworkRoutes {
  export {
    type NetappsCursorPaginationMeta as NetappsCursorPaginationMeta,
    type NetworkRoute as NetworkRoute,
    type NetworkRouteCreateResponse as NetworkRouteCreateResponse,
    type NetworkRouteRetrieveResponse as NetworkRouteRetrieveResponse,
    type NetworkRouteListResponse as NetworkRouteListResponse,
    type NetworkRouteListParams as NetworkRouteListParams,
    type NetworkRouteCreateParams as NetworkRouteCreateParams,
  };
}
