// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GlobalIPAssignmentsAPI from '../global-ip-assignments';
import * as DefaultGatewayAPI from './default-gateway';
import {
  DefaultGateway,
  DefaultGatewayCreateParams,
  DefaultGatewayCreateResponse,
  DefaultGatewayDeleteResponse,
  DefaultGatewayResource,
  DefaultGatewayRetrieveResponse,
} from './default-gateway';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Network operations
 */
export class Networks extends APIResource {
  defaultGateway: DefaultGatewayAPI.DefaultGatewayResource = new DefaultGatewayAPI.DefaultGatewayResource(
    this._client,
  );

  /**
   * List all Networks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const network of client.networks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NetworkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NetworksDefaultFlatPagination, Network> {
    return this._client.getAPIList('/networks', DefaultFlatPagination<Network>, { query, ...options });
  }

  /**
   * Create a new Network.
   *
   * @example
   * ```ts
   * const network = await client.networks.create({
   *   network_create: {},
   * });
   * ```
   */
  create(params: NetworkCreateParams, options?: RequestOptions): APIPromise<NetworkCreateResponse> {
    const { network_create } = params;
    return this._client.post('/networks', { body: network_create, ...options });
  }

  /**
   * Delete a Network.
   *
   * @example
   * ```ts
   * const network = await client.networks.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<NetworkDeleteResponse> {
    return this._client.delete(path`/networks/${id}`, options);
  }

  /**
   * Retrieve a Network.
   *
   * @example
   * ```ts
   * const network = await client.networks.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NetworkRetrieveResponse> {
    return this._client.get(path`/networks/${id}`, options);
  }

  /**
   * Update a Network.
   *
   * @example
   * ```ts
   * const network = await client.networks.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { network_create: {} },
   * );
   * ```
   */
  update(
    networkID: string,
    params: NetworkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NetworkUpdateResponse> {
    const { network_create } = params;
    return this._client.patch(path`/networks/${networkID}`, { body: network_create, ...options });
  }

  /**
   * List all Interfaces for a Network.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const networkListInterfacesResponse of client.networks.listInterfaces(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * )) {
   *   // ...
   * }
   * ```
   */
  listInterfaces(
    id: string,
    query: NetworkListInterfacesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NetworkListInterfacesResponsesDefaultFlatPagination, NetworkListInterfacesResponse> {
    return this._client.getAPIList(
      path`/networks/${id}/network_interfaces`,
      DefaultFlatPagination<NetworkListInterfacesResponse>,
      { query, ...options },
    );
  }
}

export type NetworksDefaultFlatPagination = DefaultFlatPagination<Network>;

export type NetworkListInterfacesResponsesDefaultFlatPagination =
  DefaultFlatPagination<NetworkListInterfacesResponse>;

/**
 * The current status of the interface deployment.
 */
export type InterfaceStatus = 'created' | 'provisioning' | 'provisioned' | 'deleting';

export interface Network extends GlobalIPAssignmentsAPI.Record {
  /**
   * A user specified name for the network.
   */
  name?: string;
}

export interface NetworkCreate extends Network {}

export interface NetworkCreateResponse {
  data?: Network;
}

export interface NetworkRetrieveResponse {
  data?: Network;
}

export interface NetworkUpdateResponse {
  data?: Network;
}

export interface NetworkDeleteResponse {
  data?: Network;
}

export interface NetworkListInterfacesResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A user specified name for the interface.
   */
  name?: string;

  /**
   * The id of the network associated with the interface.
   */
  network_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  region?: NetworkListInterfacesResponse.Region;

  /**
   * The region interface is deployed to.
   */
  region_code?: string;

  /**
   * The current status of the interface deployment.
   */
  status?: InterfaceStatus;

  /**
   * Identifies the type of the interface.
   */
  type?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace NetworkListInterfacesResponse {
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

export interface NetworkListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  filter?: NetworkListParams.Filter;
}

export namespace NetworkListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  export interface Filter {
    /**
     * The network name to filter on.
     */
    name?: string;
  }
}

export interface NetworkCreateParams {
  network_create: NetworkCreate;
}

export interface NetworkUpdateParams {
  network_create: NetworkCreate;
}

export interface NetworkListInterfacesParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name],
   * filter[type], filter[status]
   */
  filter?: NetworkListInterfacesParams.Filter;
}

export namespace NetworkListInterfacesParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name],
   * filter[type], filter[status]
   */
  export interface Filter {
    /**
     * The interface name to filter on.
     */
    name?: string;

    /**
     * The interface type to filter on.
     */
    type?: string;
  }
}

Networks.DefaultGatewayResource = DefaultGatewayResource;

export declare namespace Networks {
  export {
    type InterfaceStatus as InterfaceStatus,
    type Network as Network,
    type NetworkCreate as NetworkCreate,
    type NetworkCreateResponse as NetworkCreateResponse,
    type NetworkRetrieveResponse as NetworkRetrieveResponse,
    type NetworkUpdateResponse as NetworkUpdateResponse,
    type NetworkDeleteResponse as NetworkDeleteResponse,
    type NetworkListInterfacesResponse as NetworkListInterfacesResponse,
    type NetworksDefaultFlatPagination as NetworksDefaultFlatPagination,
    type NetworkListInterfacesResponsesDefaultFlatPagination as NetworkListInterfacesResponsesDefaultFlatPagination,
    type NetworkListParams as NetworkListParams,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkUpdateParams as NetworkUpdateParams,
    type NetworkListInterfacesParams as NetworkListInterfacesParams,
  };

  export {
    DefaultGatewayResource as DefaultGatewayResource,
    type DefaultGateway as DefaultGateway,
    type DefaultGatewayCreateResponse as DefaultGatewayCreateResponse,
    type DefaultGatewayRetrieveResponse as DefaultGatewayRetrieveResponse,
    type DefaultGatewayDeleteResponse as DefaultGatewayDeleteResponse,
    type DefaultGatewayCreateParams as DefaultGatewayCreateParams,
  };
}
