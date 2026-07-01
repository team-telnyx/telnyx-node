// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PublicInternetGatewaysAPI from './public-internet-gateways';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as NetworksAPI from './networks/networks';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Public Internet Gateway operations
 */
export class PublicInternetGateways extends APIResource {
  /**
   * List all Public Internet Gateways.
   */
  list(
    query: PublicInternetGatewayListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicInternetGatewayReadsDefaultFlatPagination, PublicInternetGatewayRead> {
    return this._client.getAPIList(
      '/public_internet_gateways',
      DefaultFlatPagination<PublicInternetGatewayRead>,
      { query, ...options },
    );
  }

  /**
   * Create a new Public Internet Gateway.
   */
  create(
    params: PublicInternetGatewayCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicInternetGatewayCreateResponse> {
    const { body } = params;
    return this._client.post('/public_internet_gateways', { body: body, ...options });
  }

  /**
   * Delete a Public Internet Gateway.
   */
  delete(id: string, options?: RequestOptions): APIPromise<PublicInternetGatewayDeleteResponse> {
    return this._client.delete(path`/public_internet_gateways/${id}`, options);
  }

  /**
   * Retrieve a Public Internet Gateway.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PublicInternetGatewayRetrieveResponse> {
    return this._client.get(path`/public_internet_gateways/${id}`, options);
  }
}

export type PublicInternetGatewayReadsDefaultFlatPagination =
  DefaultFlatPagination<PublicInternetGatewayRead>;

export interface NetworkInterface {
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

export interface NetworkInterfaceRegion {
  /**
   * The region the interface should be deployed to.
   */
  region_code?: string;
}

export interface PublicInternetGateway extends GlobalIPAssignmentsAPI.Record, NetworkInterface {
  /**
   * The publically accessible ip for this interface.
   */
  public_ip?: string;

  /**
   * The region interface is deployed to.
   */
  region_code?: string;
}

export interface PublicInternetGatewayRead {
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

  /**
   * The current status of the interface deployment.
   */
  status?: NetworksAPI.InterfaceStatus;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface PublicInternetGatewayCreateResponse {
  data?: PublicInternetGatewayRead;
}

export interface PublicInternetGatewayRetrieveResponse {
  data?: PublicInternetGatewayRead;
}

export interface PublicInternetGatewayDeleteResponse {
  data?: PublicInternetGatewayRead;
}

export interface PublicInternetGatewayListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: PublicInternetGatewayListParams.Filter;
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
}

export interface PublicInternetGatewayCreateParams {
  body: PublicInternetGatewayCreateParams.Body;
}

export namespace PublicInternetGatewayCreateParams {
  export interface Body extends PublicInternetGatewaysAPI.PublicInternetGateway {}
}

export declare namespace PublicInternetGateways {
  export {
    type NetworkInterface as NetworkInterface,
    type NetworkInterfaceRegion as NetworkInterfaceRegion,
    type PublicInternetGateway as PublicInternetGateway,
    type PublicInternetGatewayRead as PublicInternetGatewayRead,
    type PublicInternetGatewayCreateResponse as PublicInternetGatewayCreateResponse,
    type PublicInternetGatewayRetrieveResponse as PublicInternetGatewayRetrieveResponse,
    type PublicInternetGatewayDeleteResponse as PublicInternetGatewayDeleteResponse,
    type PublicInternetGatewayReadsDefaultFlatPagination as PublicInternetGatewayReadsDefaultFlatPagination,
    type PublicInternetGatewayListParams as PublicInternetGatewayListParams,
    type PublicInternetGatewayCreateParams as PublicInternetGatewayCreateParams,
  };
}
