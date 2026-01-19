// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GlobalIPAssignmentsAPI from '../global-ip-assignments';
import * as PublicInternetGatewaysAPI from '../public-internet-gateways';
import * as DefaultGatewayAPI from './default-gateway';
import {
  DefaultGateway,
  DefaultGatewayCreateParams,
  DefaultGatewayCreateResponse,
  DefaultGatewayDeleteResponse,
  DefaultGatewayRetrieveResponse,
} from './default-gateway';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Networks extends APIResource {
  defaultGateway: DefaultGatewayAPI.DefaultGateway = new DefaultGatewayAPI.DefaultGateway(this._client);

  /**
   * Create a new Network.
   *
   * @example
   * ```ts
   * const network = await client.networks.create({
   *   name: 'test network',
   * });
   * ```
   */
  create(body: NetworkCreateParams, options?: RequestOptions): APIPromise<NetworkCreateResponse> {
    return this._client.post('/networks', { body, ...options });
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
   *   { name: 'test network' },
   * );
   * ```
   */
  update(
    networkID: string,
    body: NetworkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NetworkUpdateResponse> {
    return this._client.patch(path`/networks/${networkID}`, { body, ...options });
  }

  /**
   * List all Networks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const networkListResponse of client.networks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NetworkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NetworkListResponsesDefaultFlatPagination, NetworkListResponse> {
    return this._client.getAPIList('/networks', DefaultFlatPagination<NetworkListResponse>, {
      query,
      ...options,
    });
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

export type NetworkListResponsesDefaultFlatPagination = DefaultFlatPagination<NetworkListResponse>;

export type NetworkListInterfacesResponsesDefaultFlatPagination =
  DefaultFlatPagination<NetworkListInterfacesResponse>;

/**
 * The current status of the interface deployment.
 */
export type InterfaceStatus = 'created' | 'provisioning' | 'provisioned' | 'deleting';

export interface NetworkCreate extends GlobalIPAssignmentsAPI.Record {
  /**
   * A user specified name for the network.
   */
  name: string;
}

export interface NetworkCreateResponse {
  data?: NetworkCreateResponse.Data;
}

export namespace NetworkCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * A user specified name for the network.
     */
    name?: string;
  }
}

export interface NetworkRetrieveResponse {
  data?: NetworkRetrieveResponse.Data;
}

export namespace NetworkRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * A user specified name for the network.
     */
    name?: string;
  }
}

export interface NetworkUpdateResponse {
  data?: NetworkUpdateResponse.Data;
}

export namespace NetworkUpdateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * A user specified name for the network.
     */
    name?: string;
  }
}

export interface NetworkListResponse extends GlobalIPAssignmentsAPI.Record {
  /**
   * A user specified name for the network.
   */
  name?: string;
}

export interface NetworkDeleteResponse {
  data?: NetworkDeleteResponse.Data;
}

export namespace NetworkDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * A user specified name for the network.
     */
    name?: string;
  }
}

export interface NetworkListInterfacesResponse
  extends GlobalIPAssignmentsAPI.Record,
    PublicInternetGatewaysAPI.NetworkInterface {
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
   * Identifies the type of the interface.
   */
  type?: string;
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

export interface NetworkCreateParams {
  /**
   * A user specified name for the network.
   */
  name: string;
}

export interface NetworkUpdateParams {
  /**
   * A user specified name for the network.
   */
  name: string;
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

Networks.DefaultGateway = DefaultGateway;

export declare namespace Networks {
  export {
    type InterfaceStatus as InterfaceStatus,
    type NetworkCreate as NetworkCreate,
    type NetworkCreateResponse as NetworkCreateResponse,
    type NetworkRetrieveResponse as NetworkRetrieveResponse,
    type NetworkUpdateResponse as NetworkUpdateResponse,
    type NetworkListResponse as NetworkListResponse,
    type NetworkDeleteResponse as NetworkDeleteResponse,
    type NetworkListInterfacesResponse as NetworkListInterfacesResponse,
    type NetworkListResponsesDefaultFlatPagination as NetworkListResponsesDefaultFlatPagination,
    type NetworkListInterfacesResponsesDefaultFlatPagination as NetworkListInterfacesResponsesDefaultFlatPagination,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkUpdateParams as NetworkUpdateParams,
    type NetworkListParams as NetworkListParams,
    type NetworkListInterfacesParams as NetworkListInterfacesParams,
  };

  export {
    DefaultGateway as DefaultGateway,
    type DefaultGatewayCreateResponse as DefaultGatewayCreateResponse,
    type DefaultGatewayRetrieveResponse as DefaultGatewayRetrieveResponse,
    type DefaultGatewayDeleteResponse as DefaultGatewayDeleteResponse,
    type DefaultGatewayCreateParams as DefaultGatewayCreateParams,
  };
}
