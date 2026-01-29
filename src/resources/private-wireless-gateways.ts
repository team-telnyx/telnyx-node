// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PrivateWirelessGateways extends APIResource {
  /**
   * Asynchronously create a Private Wireless Gateway for SIM cards for a previously
   * created network. This operation may take several minutes so you can check the
   * Private Wireless Gateway status at the section Get a Private Wireless Gateway.
   *
   * @example
   * ```ts
   * const privateWirelessGateway =
   *   await client.privateWirelessGateways.create({
   *     name: 'My private wireless gateway',
   *     network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   });
   * ```
   */
  create(
    body: PrivateWirelessGatewayCreateParams,
    options?: RequestOptions,
  ): APIPromise<PrivateWirelessGatewayCreateResponse> {
    return this._client.post('/private_wireless_gateways', { body, ...options });
  }

  /**
   * Retrieve information about a Private Wireless Gateway.
   *
   * @example
   * ```ts
   * const privateWirelessGateway =
   *   await client.privateWirelessGateways.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PrivateWirelessGatewayRetrieveResponse> {
    return this._client.get(path`/private_wireless_gateways/${id}`, options);
  }

  /**
   * Get all Private Wireless Gateways belonging to the user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const privateWirelessGateway of client.privateWirelessGateways.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PrivateWirelessGatewayListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PrivateWirelessGatewaysDefaultFlatPagination, PrivateWirelessGateway> {
    return this._client.getAPIList(
      '/private_wireless_gateways',
      DefaultFlatPagination<PrivateWirelessGateway>,
      { query, ...options },
    );
  }

  /**
   * Deletes the Private Wireless Gateway.
   *
   * @example
   * ```ts
   * const privateWirelessGateway =
   *   await client.privateWirelessGateways.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PrivateWirelessGatewayDeleteResponse> {
    return this._client.delete(path`/private_wireless_gateways/${id}`, options);
  }
}

export type PrivateWirelessGatewaysDefaultFlatPagination = DefaultFlatPagination<PrivateWirelessGateway>;

export interface PrivateWirelessGateway {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * A list of the resources that have been assigned to the Private Wireless Gateway.
   */
  assigned_resources?: Array<PwgAssignedResourcesSummary>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * IP block used to assign IPs to the SIM cards in the Private Wireless Gateway.
   */
  ip_range?: string;

  /**
   * The private wireless gateway name.
   */
  name?: string;

  /**
   * The identification of the related network resource.
   */
  network_id?: string;

  record_type?: string;

  /**
   * The name of the region where the Private Wireless Gateway is deployed.
   */
  region_code?: string;

  /**
   * The current status or failure details of the Private Wireless Gateway.
   */
  status?: PrivateWirelessGatewayStatus;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

/**
 * The current status or failure details of the Private Wireless Gateway.
 */
export interface PrivateWirelessGatewayStatus {
  /**
   * This attribute is an
   * [error code](https://developers.telnyx.com/development/api-fundamentals/api-errors)
   * related to the failure reason.
   */
  error_code?: string | null;

  /**
   * This attribute provides a human-readable explanation of why a failure happened.
   */
  error_description?: string | null;

  /**
   * The current status or failure details of the Private Wireless Gateway. <ul>
   *
   *  <li><code>provisioning</code> - the Private Wireless Gateway is being provisioned.</li>
   *  <li><code>provisioned</code> - the Private Wireless Gateway was provisioned and able to receive connections.</li>
   *  <li><code>failed</code> - the provisioning had failed for a reason and it requires an intervention.</li>
   *  <li><code>decommissioning</code> - the Private Wireless Gateway is being removed from the network.</li>
   *  </ul>
   *  Transitioning between the provisioning and provisioned states may take some time.
   */
  value?: 'provisioning' | 'provisioned' | 'failed' | 'decommissioning';
}

/**
 * The summary of the resource that have been assigned to the Private Wireless
 * Gateway.
 */
export interface PwgAssignedResourcesSummary {
  /**
   * The current count of a resource type assigned to the Private Wireless Gateway.
   */
  count?: number;

  /**
   * The type of the resource assigned to the Private Wireless Gateway.
   */
  record_type?: string;
}

export interface PrivateWirelessGatewayCreateResponse {
  data?: PrivateWirelessGateway;
}

export interface PrivateWirelessGatewayRetrieveResponse {
  data?: PrivateWirelessGateway;
}

export interface PrivateWirelessGatewayDeleteResponse {
  data?: PrivateWirelessGateway;
}

export interface PrivateWirelessGatewayCreateParams {
  /**
   * The private wireless gateway name.
   */
  name: string;

  /**
   * The identification of the related network resource.
   */
  network_id: string;

  /**
   * The code of the region where the private wireless gateway will be assigned. A
   * list of available regions can be found at the regions endpoint
   */
  region_code?: string;
}

export interface PrivateWirelessGatewayListParams extends DefaultFlatPaginationParams {
  /**
   * Private Wireless Gateway resource creation date.
   */
  'filter[created_at]'?: string;

  /**
   * The IP address range of the Private Wireless Gateway.
   */
  'filter[ip_range]'?: string;

  /**
   * The name of the Private Wireless Gateway.
   */
  'filter[name]'?: string;

  /**
   * The name of the region where the Private Wireless Gateway is deployed.
   */
  'filter[region_code]'?: string;

  /**
   * When the Private Wireless Gateway was last updated.
   */
  'filter[updated_at]'?: string;
}

export declare namespace PrivateWirelessGateways {
  export {
    type PrivateWirelessGateway as PrivateWirelessGateway,
    type PrivateWirelessGatewayStatus as PrivateWirelessGatewayStatus,
    type PwgAssignedResourcesSummary as PwgAssignedResourcesSummary,
    type PrivateWirelessGatewayCreateResponse as PrivateWirelessGatewayCreateResponse,
    type PrivateWirelessGatewayRetrieveResponse as PrivateWirelessGatewayRetrieveResponse,
    type PrivateWirelessGatewayDeleteResponse as PrivateWirelessGatewayDeleteResponse,
    type PrivateWirelessGatewaysDefaultFlatPagination as PrivateWirelessGatewaysDefaultFlatPagination,
    type PrivateWirelessGatewayCreateParams as PrivateWirelessGatewayCreateParams,
    type PrivateWirelessGatewayListParams as PrivateWirelessGatewayListParams,
  };
}
