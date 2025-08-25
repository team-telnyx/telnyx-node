// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as PublicInternetGatewaysAPI from './public-internet-gateways';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class VirtualCrossConnects extends APIResource {
  /**
   * Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the
   * option of creating the primary connection first and the secondary connection
   * later. You also have the option of disabling the primary and/or secondary
   * connections at any time and later re-enabling them. With Azure, you do not have
   * this option. Azure requires both the primary and secondary connections to be
   * created at the same time and they can not be independantly disabled.
   *
   * @example
   * ```ts
   * const virtualCrossConnect =
   *   await client.virtualCrossConnects.create({
   *     bgp_asn: 1234,
   *     cloud_provider: 'aws',
   *     cloud_provider_region: 'us-east-1',
   *     network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     primary_cloud_account_id: '123456789012',
   *     region_code: 'ashburn-va',
   *   });
   * ```
   */
  create(
    body: VirtualCrossConnectCreateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualCrossConnectCreateResponse> {
    return this._client.post('/virtual_cross_connects', { body, ...options });
  }

  /**
   * Retrieve a Virtual Cross Connect.
   *
   * @example
   * ```ts
   * const virtualCrossConnect =
   *   await client.virtualCrossConnects.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VirtualCrossConnectRetrieveResponse> {
    return this._client.get(path`/virtual_cross_connects/${id}`, options);
  }

  /**
   * Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched
   * during the `created` state, as GCE will only inform you of your generated IP
   * once the pending connection requested has been accepted. Once the Virtual Cross
   * Connect has moved to `provisioning`, the IPs can no longer be
   * patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned`
   * and you are ready to enable routing, you can toggle the routing announcements to
   * `true`.
   *
   * @example
   * ```ts
   * const virtualCrossConnect =
   *   await client.virtualCrossConnects.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  update(
    id: string,
    body: VirtualCrossConnectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualCrossConnectUpdateResponse> {
    return this._client.patch(path`/virtual_cross_connects/${id}`, { body, ...options });
  }

  /**
   * List all Virtual Cross Connects.
   *
   * @example
   * ```ts
   * const virtualCrossConnects =
   *   await client.virtualCrossConnects.list();
   * ```
   */
  list(
    query: VirtualCrossConnectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VirtualCrossConnectListResponse> {
    return this._client.get('/virtual_cross_connects', { query, ...options });
  }

  /**
   * Delete a Virtual Cross Connect.
   *
   * @example
   * ```ts
   * const virtualCrossConnect =
   *   await client.virtualCrossConnects.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VirtualCrossConnectDeleteResponse> {
    return this._client.delete(path`/virtual_cross_connects/${id}`, options);
  }
}

export interface VirtualCrossConnectCreateResponse {
  data?: VirtualCrossConnectCreateResponse.Data;
}

export namespace VirtualCrossConnectCreateResponse {
  export interface Data
    extends GlobalIPAssignmentsAPI.Record,
      PublicInternetGatewaysAPI.Interface,
      PublicInternetGatewaysAPI.RegionIn {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
     * will be assigned by Telnyx.
     */
    bgp_asn: number;

    /**
     * The Virtual Private Cloud with which you would like to establish a cross
     * connect.
     */
    cloud_provider: 'aws' | 'azure' | 'gce';

    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The
     * available regions can be found using the /virtual_cross_connect_regions
     * endpoint.
     */
    cloud_provider_region: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.
     */
    primary_cloud_account_id: string;

    /**
     * The region interface is deployed to.
     */
    region_code: string;

    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
     * Connect.<br /><br />The available bandwidths can be found using the
     * /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;

    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;

    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    primary_enabled?: boolean;

    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.<br /><br />This attribute is only necessary for
     * GCE.
     */
    secondary_cloud_account_id?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;

    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    secondary_enabled?: boolean;

    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
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

export interface VirtualCrossConnectRetrieveResponse {
  data?: VirtualCrossConnectRetrieveResponse.Data;
}

export namespace VirtualCrossConnectRetrieveResponse {
  export interface Data
    extends GlobalIPAssignmentsAPI.Record,
      PublicInternetGatewaysAPI.Interface,
      PublicInternetGatewaysAPI.RegionIn {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
     * will be assigned by Telnyx.
     */
    bgp_asn: number;

    /**
     * The Virtual Private Cloud with which you would like to establish a cross
     * connect.
     */
    cloud_provider: 'aws' | 'azure' | 'gce';

    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The
     * available regions can be found using the /virtual_cross_connect_regions
     * endpoint.
     */
    cloud_provider_region: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.
     */
    primary_cloud_account_id: string;

    /**
     * The region interface is deployed to.
     */
    region_code: string;

    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
     * Connect.<br /><br />The available bandwidths can be found using the
     * /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;

    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;

    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    primary_enabled?: boolean;

    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.<br /><br />This attribute is only necessary for
     * GCE.
     */
    secondary_cloud_account_id?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;

    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    secondary_enabled?: boolean;

    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
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

export interface VirtualCrossConnectUpdateResponse {
  data?: VirtualCrossConnectUpdateResponse.Data;
}

export namespace VirtualCrossConnectUpdateResponse {
  export interface Data
    extends GlobalIPAssignmentsAPI.Record,
      PublicInternetGatewaysAPI.Interface,
      PublicInternetGatewaysAPI.RegionIn {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
     * will be assigned by Telnyx.
     */
    bgp_asn: number;

    /**
     * The Virtual Private Cloud with which you would like to establish a cross
     * connect.
     */
    cloud_provider: 'aws' | 'azure' | 'gce';

    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The
     * available regions can be found using the /virtual_cross_connect_regions
     * endpoint.
     */
    cloud_provider_region: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.
     */
    primary_cloud_account_id: string;

    /**
     * The region interface is deployed to.
     */
    region_code: string;

    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
     * Connect.<br /><br />The available bandwidths can be found using the
     * /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;

    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;

    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    primary_enabled?: boolean;

    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.<br /><br />This attribute is only necessary for
     * GCE.
     */
    secondary_cloud_account_id?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;

    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    secondary_enabled?: boolean;

    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
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

export interface VirtualCrossConnectListResponse {
  data?: Array<VirtualCrossConnectListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace VirtualCrossConnectListResponse {
  export interface Data
    extends GlobalIPAssignmentsAPI.Record,
      PublicInternetGatewaysAPI.Interface,
      PublicInternetGatewaysAPI.RegionIn {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
     * will be assigned by Telnyx.
     */
    bgp_asn: number;

    /**
     * The Virtual Private Cloud with which you would like to establish a cross
     * connect.
     */
    cloud_provider: 'aws' | 'azure' | 'gce';

    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The
     * available regions can be found using the /virtual_cross_connect_regions
     * endpoint.
     */
    cloud_provider_region: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.
     */
    primary_cloud_account_id: string;

    /**
     * The region interface is deployed to.
     */
    region_code: string;

    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
     * Connect.<br /><br />The available bandwidths can be found using the
     * /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;

    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;

    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    primary_enabled?: boolean;

    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.<br /><br />This attribute is only necessary for
     * GCE.
     */
    secondary_cloud_account_id?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;

    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    secondary_enabled?: boolean;

    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
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

export interface VirtualCrossConnectDeleteResponse {
  data?: VirtualCrossConnectDeleteResponse.Data;
}

export namespace VirtualCrossConnectDeleteResponse {
  export interface Data
    extends GlobalIPAssignmentsAPI.Record,
      PublicInternetGatewaysAPI.Interface,
      PublicInternetGatewaysAPI.RegionIn {
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
     * will be assigned by Telnyx.
     */
    bgp_asn: number;

    /**
     * The Virtual Private Cloud with which you would like to establish a cross
     * connect.
     */
    cloud_provider: 'aws' | 'azure' | 'gce';

    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The
     * available regions can be found using the /virtual_cross_connect_regions
     * endpoint.
     */
    cloud_provider_region: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.
     */
    primary_cloud_account_id: string;

    /**
     * The region interface is deployed to.
     */
    region_code: string;

    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
     * Connect.<br /><br />The available bandwidths can be found using the
     * /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;

    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;

    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    primary_enabled?: boolean;

    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    region?: Data.Region;

    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;

    /**
     * The identifier for your Virtual Private Cloud. The number will be different
     * based upon your Cloud provider.<br /><br />This attribute is only necessary for
     * GCE.
     */
    secondary_cloud_account_id?: string;

    /**
     * The IP address assigned for your side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;

    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will
     * disable the circuit.
     */
    secondary_enabled?: boolean;

    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;

    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross
     * Connect.<br /><br />If none is provided, one will be generated for
     * you.<br /><br />This value should be null for GCE as Google will only inform you
     * of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
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

export interface VirtualCrossConnectCreateParams {
  /**
   * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value
   * will be assigned by Telnyx.
   */
  bgp_asn: number;

  /**
   * The Virtual Private Cloud with which you would like to establish a cross
   * connect.
   */
  cloud_provider: 'aws' | 'azure' | 'gce';

  /**
   * The region where your Virtual Private Cloud hosts are located.<br /><br />The
   * available regions can be found using the /virtual_cross_connect_regions
   * endpoint.
   */
  cloud_provider_region: string;

  /**
   * The id of the network associated with the interface.
   */
  network_id: string;

  /**
   * The identifier for your Virtual Private Cloud. The number will be different
   * based upon your Cloud provider.
   */
  primary_cloud_account_id: string;

  /**
   * The region the interface should be deployed to.
   */
  region_code: string;

  /**
   * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross
   * Connect.<br /><br />The available bandwidths can be found using the
   * /virtual_cross_connect_regions endpoint.
   */
  bandwidth_mbps?: number;

  /**
   * A user specified name for the interface.
   */
  name?: string;

  /**
   * The authentication key for BGP peer configuration.
   */
  primary_bgp_key?: string;

  /**
   * The IP address assigned for your side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value should be null for GCE as Google will only inform you
   * of your assigned IP once the connection has been accepted.
   */
  primary_cloud_ip?: string;

  /**
   * The IP address assigned to the Telnyx side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value should be null for GCE as Google will only inform you
   * of your assigned IP once the connection has been accepted.
   */
  primary_telnyx_ip?: string;

  /**
   * The authentication key for BGP peer configuration.
   */
  secondary_bgp_key?: string;

  /**
   * The identifier for your Virtual Private Cloud. The number will be different
   * based upon your Cloud provider.<br /><br />This attribute is only necessary for
   * GCE.
   */
  secondary_cloud_account_id?: string;

  /**
   * The IP address assigned for your side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value should be null for GCE as Google will only inform you
   * of your assigned IP once the connection has been accepted.
   */
  secondary_cloud_ip?: string;

  /**
   * The IP address assigned to the Telnyx side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value should be null for GCE as Google will only inform you
   * of your assigned IP once the connection has been accepted.
   */
  secondary_telnyx_ip?: string;
}

export interface VirtualCrossConnectUpdateParams {
  /**
   * The IP address assigned for your side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
   */
  primary_cloud_ip?: string;

  /**
   * Indicates whether the primary circuit is enabled. Setting this to `false` will
   * disable the circuit.
   */
  primary_enabled?: boolean;

  /**
   * Whether the primary BGP route is being announced.
   */
  primary_routing_announcement?: boolean;

  /**
   * The IP address assigned for your side of the Virtual Cross
   * Connect.<br /><br />If none is provided, one will be generated for
   * you.<br /><br />This value can not be patched once the VXC has bene provisioned.
   */
  secondary_cloud_ip?: string;

  /**
   * Indicates whether the secondary circuit is enabled. Setting this to `false` will
   * disable the circuit.
   */
  secondary_enabled?: boolean;

  /**
   * Whether the secondary BGP route is being announced.
   */
  secondary_routing_announcement?: boolean;
}

export interface VirtualCrossConnectListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[network_id]
   */
  filter?: VirtualCrossConnectListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: VirtualCrossConnectListParams.Page;
}

export namespace VirtualCrossConnectListParams {
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

export declare namespace VirtualCrossConnects {
  export {
    type VirtualCrossConnectCreateResponse as VirtualCrossConnectCreateResponse,
    type VirtualCrossConnectRetrieveResponse as VirtualCrossConnectRetrieveResponse,
    type VirtualCrossConnectUpdateResponse as VirtualCrossConnectUpdateResponse,
    type VirtualCrossConnectListResponse as VirtualCrossConnectListResponse,
    type VirtualCrossConnectDeleteResponse as VirtualCrossConnectDeleteResponse,
    type VirtualCrossConnectCreateParams as VirtualCrossConnectCreateParams,
    type VirtualCrossConnectUpdateParams as VirtualCrossConnectUpdateParams,
    type VirtualCrossConnectListParams as VirtualCrossConnectListParams,
  };
}
