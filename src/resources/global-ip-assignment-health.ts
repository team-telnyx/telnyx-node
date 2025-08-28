// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPAssignmentHealth extends APIResource {
  /**
   * Global IP Assignment Health Check Metrics
   */
  retrieve(
    query: GlobalIPAssignmentHealthRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentHealthRetrieveResponse> {
    return this._client.get('/global_ip_assignment_health', { query, ...options });
  }
}

export interface GlobalIPAssignmentHealthRetrieveResponse {
  data?: Array<GlobalIPAssignmentHealthRetrieveResponse.Data>;
}

export namespace GlobalIPAssignmentHealthRetrieveResponse {
  export interface Data {
    global_ip?: Data.GlobalIP;

    global_ip_assignment?: Data.GlobalIPAssignment;

    health?: Data.Health;

    /**
     * The timestamp of the metric.
     */
    timestamp?: string;
  }

  export namespace Data {
    export interface GlobalIP {
      /**
       * Global IP ID.
       */
      id?: string;

      /**
       * The Global IP address.
       */
      ip_address?: string;
    }

    export interface GlobalIPAssignment {
      /**
       * Global IP assignment ID.
       */
      id?: string;

      wireguard_peer?: GlobalIPAssignment.WireguardPeer;

      /**
       * Wireguard peer ID.
       */
      wireguard_peer_id?: string;
    }

    export namespace GlobalIPAssignment {
      export interface WireguardPeer {
        /**
         * The IP address of the interface.
         */
        ip_address?: string;

        /**
         * A user specified name for the interface.
         */
        name?: string;
      }
    }

    export interface Health {
      /**
       * The number of failed health checks.
       */
      fail?: number;

      /**
       * The number of successful health checks.
       */
      pass?: number;
    }
  }
}

export interface GlobalIPAssignmentHealthRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_id][in], filter[global_ip_assignment_id][in]
   */
  filter?: GlobalIPAssignmentHealthRetrieveParams.Filter;
}

export namespace GlobalIPAssignmentHealthRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_id][in], filter[global_ip_assignment_id][in]
   */
  export interface Filter {
    /**
     * Filter by exact Global IP Assignment ID
     */
    global_ip_assignment_id?: string | Filter.In;

    /**
     * Filter by exact Global IP ID
     */
    global_ip_id?: string | Filter.In;
  }

  export namespace Filter {
    /**
     * Filtering operations
     */
    export interface In {
      /**
       * Filter by Global IP Assignment ID(s) separated by commas
       */
      in?: string;
    }

    /**
     * Filtering operations
     */
    export interface In {
      /**
       * Filter by Global IP ID(s) separated by commas
       */
      in?: string;
    }
  }
}

export declare namespace GlobalIPAssignmentHealth {
  export {
    type GlobalIPAssignmentHealthRetrieveResponse as GlobalIPAssignmentHealthRetrieveResponse,
    type GlobalIPAssignmentHealthRetrieveParams as GlobalIPAssignmentHealthRetrieveParams,
  };
}
