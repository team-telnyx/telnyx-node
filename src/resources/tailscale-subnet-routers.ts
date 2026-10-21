// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Tailscale Subnet Router operations
 */
export class TailscaleSubnetRouters extends APIResource {
  /**
   * Returns a paginated list of the Tailscale Subnet Routers on the account, with
   * support for filtering by Network.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tailscaleSubnetRouter of client.tailscaleSubnetRouters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TailscaleSubnetRouterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TailscaleSubnetRoutersDefaultFlatPagination, TailscaleSubnetRouter> {
    return this._client.getAPIList(
      '/tailscale_subnet_routers',
      DefaultFlatPagination<TailscaleSubnetRouter>,
      { query, ...options },
    );
  }

  /**
   * Creates a Tailscale Subnet Router on a Network and enrolls it in the user's
   * tailnet with the auth key. The response returns the router with `status`
   * `provisioning`. Poll `GET /tailscale_subnet_routers/{id}` until it is
   * `provisioned`. Then approve its routes in the tailnet, unless an auto-approver
   * covers them.
   *
   * @example
   * ```ts
   * const tailscaleSubnetRouter =
   *   await client.tailscaleSubnetRouters.create({
   *     advertised_routes: ['172.27.0.0/24'],
   *     auth_key: 'tskey-auth-k1AbCdEfGh2IjKlMnOpQrStUv',
   *     name: 'tailnet-ashburn',
   *     network_id: '0de011ae-ee53-4df4-ba96-754728eb5aad',
   *     region_code: 'ashburn-va',
   *   });
   * ```
   */
  create(
    body: TailscaleSubnetRouterCreateParams,
    options?: RequestOptions,
  ): APIPromise<TailscaleSubnetRouterCreateResponse> {
    return this._client.post('/tailscale_subnet_routers', { body, ...options });
  }

  /**
   * Removes the router from the Network and logs it out of the tailnet. The response
   * returns the router with `status` `deleting`. The record disappears once removal
   * completes. A machine entry can remain in the tailnet's admin console until it is
   * removed there.
   *
   * @example
   * ```ts
   * const tailscaleSubnetRouter =
   *   await client.tailscaleSubnetRouters.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TailscaleSubnetRouterDeleteResponse> {
    return this._client.delete(path`/tailscale_subnet_routers/${id}`, options);
  }

  /**
   * Returns the details of a single Tailscale Subnet Router by its identifier,
   * including its enrollment state.
   *
   * @example
   * ```ts
   * const tailscaleSubnetRouter =
   *   await client.tailscaleSubnetRouters.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TailscaleSubnetRouterRetrieveResponse> {
    return this._client.get(path`/tailscale_subnet_routers/${id}`, options);
  }

  /**
   * Renames the router, changes its advertised routes, or retries a failed
   * enrollment. Any change queues a new provisioning run and returns the router with
   * `status` `provisioning`. The router keeps its machine identity on the tailnet.
   * Send an empty object to retry a `failed` router with its stored auth key.
   * Include a new `auth_key` only while the router has never enrolled. The router's
   * Network and region cannot change: create a new router instead.
   *
   * @example
   * ```ts
   * const tailscaleSubnetRouter =
   *   await client.tailscaleSubnetRouters.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     {
   *       advertised_routes: ['172.27.0.0/24', '172.27.1.0/24'],
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: TailscaleSubnetRouterUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TailscaleSubnetRouterUpdateResponse> {
    return this._client.patch(path`/tailscale_subnet_routers/${id}`, { body, ...options });
  }
}

export type TailscaleSubnetRoutersDefaultFlatPagination = DefaultFlatPagination<TailscaleSubnetRouter>;

export interface TailscaleSubnetRouter {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * IPv4 subnets of the Network that the router advertises to the tailnet. Each
   * entry is a canonical CIDR that the Network routes. Default, loopback,
   * link-local, multicast, and Tailscale (`100.64.0.0/10`) ranges are rejected. So
   * are ranges that overlap the router's own, `172.27.254.0/24` and `198.18.0.0/20`.
   */
  advertised_routes?: Array<string>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The router's address on the Network, from `172.27.254.0/24`. Tailnet traffic
   * enters the Network from this address.
   */
  customer_address?: string;

  /**
   * The router's node id on the tailnet. Set once the router has enrolled.
   */
  device_id?: string | null;

  /**
   * A user specified name for the router.
   */
  name?: string;

  /**
   * The id of the Network the router is attached to.
   */
  network_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The code of the region the router is created in. `GET /network_coverage` lists
   * the regions whose `available_services` include `tailscale_subnet_router`.
   */
  region_code?: string;

  /**
   * `provisioning`: Telnyx is creating the router or applying a change.
   * `provisioned`: the router is on the tailnet and advertises its routes; the
   * tailnet still approves them. `failed`: enrollment did not complete, and `PATCH`
   * retries it. `deleting`: the router is being removed.
   */
  status?: 'provisioning' | 'provisioned' | 'failed' | 'deleting';

  /**
   * The name of the tailnet the router is enrolled in. Set once the router has
   * enrolled.
   */
  tailnet_name?: string | null;

  /**
   * The router's addresses on the tailnet. Empty until the router has enrolled.
   */
  tailscale_ips?: Array<string>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface TailscaleSubnetRouterCreateResponse {
  data?: TailscaleSubnetRouter;
}

export interface TailscaleSubnetRouterRetrieveResponse {
  data?: TailscaleSubnetRouter;
}

export interface TailscaleSubnetRouterUpdateResponse {
  data?: TailscaleSubnetRouter;
}

export interface TailscaleSubnetRouterDeleteResponse {
  data?: TailscaleSubnetRouter;
}

export interface TailscaleSubnetRouterListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: TailscaleSubnetRouterListParams.Filter;
}

export namespace TailscaleSubnetRouterListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  export interface Filter {
    /**
     * The id of the Network to filter on.
     */
    network_id?: string;
  }
}

export interface TailscaleSubnetRouterCreateParams {
  /**
   * IPv4 subnets of the Network that the router advertises to the tailnet. Each
   * entry is a canonical CIDR that the Network routes. Default, loopback,
   * link-local, multicast, and Tailscale (`100.64.0.0/10`) ranges are rejected. So
   * are ranges that overlap the router's own, `172.27.254.0/24` and `198.18.0.0/20`.
   */
  advertised_routes: Array<string>;

  /**
   * A Tailscale auth key that enrolls the router in the user's tailnet: reusable,
   * pre-approved, tagged, and not ephemeral. Telnyx stores it encrypted until
   * enrollment succeeds, then discards it. It is never returned.
   */
  auth_key: string;

  /**
   * A user specified name for the router.
   */
  name: string;

  /**
   * The id of the Network to attach the router to.
   */
  network_id: string;

  /**
   * The code of the region to create the router in. `GET /network_coverage` lists
   * the regions whose `available_services` include `tailscale_subnet_router`.
   */
  region_code: string;
}

export interface TailscaleSubnetRouterUpdateParams {
  /**
   * IPv4 subnets of the Network that the router advertises to the tailnet. Each
   * entry is a canonical CIDR that the Network routes. Default, loopback,
   * link-local, multicast, and Tailscale (`100.64.0.0/10`) ranges are rejected. So
   * are ranges that overlap the router's own, `172.27.254.0/24` and `198.18.0.0/20`.
   */
  advertised_routes?: Array<string>;

  /**
   * A replacement Tailscale auth key. Accepted only while the router has never
   * enrolled, for example after a `failed` enrollment. Never returned.
   */
  auth_key?: string;

  /**
   * A user specified name for the router.
   */
  name?: string;
}

export declare namespace TailscaleSubnetRouters {
  export {
    type TailscaleSubnetRouter as TailscaleSubnetRouter,
    type TailscaleSubnetRouterCreateResponse as TailscaleSubnetRouterCreateResponse,
    type TailscaleSubnetRouterRetrieveResponse as TailscaleSubnetRouterRetrieveResponse,
    type TailscaleSubnetRouterUpdateResponse as TailscaleSubnetRouterUpdateResponse,
    type TailscaleSubnetRouterDeleteResponse as TailscaleSubnetRouterDeleteResponse,
    type TailscaleSubnetRoutersDefaultFlatPagination as TailscaleSubnetRoutersDefaultFlatPagination,
    type TailscaleSubnetRouterListParams as TailscaleSubnetRouterListParams,
    type TailscaleSubnetRouterCreateParams as TailscaleSubnetRouterCreateParams,
    type TailscaleSubnetRouterUpdateParams as TailscaleSubnetRouterUpdateParams,
  };
}
