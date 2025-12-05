// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PublicInternetGatewaysAPI from './public-internet-gateways';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as NetworksAPI from './networks/networks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PublicInternetGateways extends APIResource {
  /**
   * Create a new Public Internet Gateway.
   *
   * @example
   * ```ts
   * const publicInternetGateway =
   *   await client.publicInternetGateways.create();
   * ```
   */
  create(
    body: PublicInternetGatewayCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicInternetGatewayCreateResponse> {
    return this._client.post('/public_internet_gateways', { body, ...options });
  }

  /**
   * Retrieve a Public Internet Gateway.
   *
   * @example
   * ```ts
   * const publicInternetGateway =
   *   await client.publicInternetGateways.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PublicInternetGatewayRetrieveResponse> {
    return this._client.get(path`/public_internet_gateways/${id}`, options);
  }

  /**
   * List all Public Internet Gateways.
   *
   * @example
   * ```ts
   * const publicInternetGateways =
   *   await client.publicInternetGateways.list();
   * ```
   */
  list(
    query: PublicInternetGatewayListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicInternetGatewayListResponse> {
    return this._client.get('/public_internet_gateways', { query, ...options });
  }

  /**
   * Delete a Public Internet Gateway.
   *
   * @example
   * ```ts
   * const publicInternetGateway =
   *   await client.publicInternetGateways.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PublicInternetGatewayDeleteResponse> {
    return this._client.delete(path`/public_internet_gateways/${id}`, options);
  }
}

export interface Interface {
  /**
   * A user specified name for the interface.
   */
  name?: string;

  /**
   * The id of the network associated with the interface.
   */
  network_id?: string;

  /**
   * The current status of the interface deployment.
   */
  status?: NetworksAPI.InterfaceStatus;
}

export interface RegionIn {
  /**
   * The region the interface should be deployed to.
   */
  region_code?: string;
}

export interface PublicInternetGatewayCreateResponse {
  data?: PublicInternetGatewayCreateResponse.Data;
}

export namespace PublicInternetGatewayCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
    /**
     * The publically accessible ip for this interface.
     */
    public_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }
}

export interface PublicInternetGatewayRetrieveResponse {
  data?: PublicInternetGatewayRetrieveResponse.Data;
}

export namespace PublicInternetGatewayRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
    /**
     * The publically accessible ip for this interface.
     */
    public_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }
}

export interface PublicInternetGatewayListResponse {
  data?: Array<PublicInternetGatewayListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PublicInternetGatewayListResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
    /**
     * The publically accessible ip for this interface.
     */
    public_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }
}

export interface PublicInternetGatewayDeleteResponse {
  data?: PublicInternetGatewayDeleteResponse.Data;
}

export namespace PublicInternetGatewayDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record, PublicInternetGatewaysAPI.Interface {
    /**
     * The publically accessible ip for this interface.
     */
    public_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The region interface is deployed to.
     */
    region_code?: string;
  }
}

export interface PublicInternetGatewayCreateParams {
  /**
   * A user specified name for the interface.
   */
  name?: string;

  /**
   * The id of the network associated with the interface.
   */
  network_id?: string;

  /**
   * The region interface is deployed to.
   */
  region_code?: string;
}

export interface PublicInternetGatewayListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: PublicInternetGatewayListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: PublicInternetGatewayListParams.Page;
}

export namespace PublicInternetGatewayListParams {
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

export declare namespace PublicInternetGateways {
  export {
    type Interface as Interface,
    type RegionIn as RegionIn,
    type PublicInternetGatewayCreateResponse as PublicInternetGatewayCreateResponse,
    type PublicInternetGatewayRetrieveResponse as PublicInternetGatewayRetrieveResponse,
    type PublicInternetGatewayListResponse as PublicInternetGatewayListResponse,
    type PublicInternetGatewayDeleteResponse as PublicInternetGatewayDeleteResponse,
    type PublicInternetGatewayCreateParams as PublicInternetGatewayCreateParams,
    type PublicInternetGatewayListParams as PublicInternetGatewayListParams,
  };
}
