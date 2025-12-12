// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as GlobalIPAssignmentsAPI from '../global-ip-assignments';
import * as NetworksAPI from './networks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DefaultGateway extends APIResource {
  /**
   * Create Default Gateway.
   *
   * @example
   * ```ts
   * const defaultGateway =
   *   await client.networks.defaultGateway.create(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  create(
    networkIdentifier: string,
    body: DefaultGatewayCreateParams,
    options?: RequestOptions,
  ): APIPromise<DefaultGatewayCreateResponse> {
    return this._client.post(path`/networks/${networkIdentifier}/default_gateway`, { body, ...options });
  }

  /**
   * Get Default Gateway status.
   *
   * @example
   * ```ts
   * const defaultGateway =
   *   await client.networks.defaultGateway.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DefaultGatewayRetrieveResponse> {
    return this._client.get(path`/networks/${id}/default_gateway`, options);
  }

  /**
   * Delete Default Gateway.
   *
   * @example
   * ```ts
   * const defaultGateway =
   *   await client.networks.defaultGateway.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DefaultGatewayDeleteResponse> {
    return this._client.delete(path`/networks/${id}/default_gateway`, options);
  }
}

export interface DefaultGatewayCreateResponse {
  data?: Array<DefaultGatewayCreateResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace DefaultGatewayCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Network ID.
     */
    network_id?: string;

    /**
     * The current status of the interface deployment.
     */
    status?: NetworksAPI.InterfaceStatus;

    /**
     * Wireguard peer ID.
     */
    wireguard_peer_id?: string;
  }
}

export interface DefaultGatewayRetrieveResponse {
  data?: Array<DefaultGatewayRetrieveResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace DefaultGatewayRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Network ID.
     */
    network_id?: string;

    /**
     * The current status of the interface deployment.
     */
    status?: NetworksAPI.InterfaceStatus;

    /**
     * Wireguard peer ID.
     */
    wireguard_peer_id?: string;
  }
}

export interface DefaultGatewayDeleteResponse {
  data?: Array<DefaultGatewayDeleteResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace DefaultGatewayDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Network ID.
     */
    network_id?: string;

    /**
     * The current status of the interface deployment.
     */
    status?: NetworksAPI.InterfaceStatus;

    /**
     * Wireguard peer ID.
     */
    wireguard_peer_id?: string;
  }
}

export interface DefaultGatewayCreateParams {
  /**
   * Wireguard peer ID.
   */
  wireguard_peer_id?: string;
}

export declare namespace DefaultGateway {
  export {
    type DefaultGatewayCreateResponse as DefaultGatewayCreateResponse,
    type DefaultGatewayRetrieveResponse as DefaultGatewayRetrieveResponse,
    type DefaultGatewayDeleteResponse as DefaultGatewayDeleteResponse,
    type DefaultGatewayCreateParams as DefaultGatewayCreateParams,
  };
}
