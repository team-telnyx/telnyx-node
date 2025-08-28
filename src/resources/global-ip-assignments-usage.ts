// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPAssignmentsUsage extends APIResource {
  /**
   * Global IP Assignment Usage Metrics
   */
  retrieve(
    query: GlobalIPAssignmentsUsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentsUsageRetrieveResponse> {
    return this._client.get('/global_ip_assignments_usage', { query, ...options });
  }
}

export interface GlobalIPAssignmentsUsageRetrieveResponse {
  data?: Array<GlobalIPAssignmentsUsageRetrieveResponse.Data>;
}

export namespace GlobalIPAssignmentsUsageRetrieveResponse {
  export interface Data {
    global_ip?: Data.GlobalIP;

    global_ip_assignment?: Data.GlobalIPAssignment;

    received?: Data.Received;

    /**
     * The timestamp of the metric.
     */
    timestamp?: string;

    transmitted?: Data.Transmitted;
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

    export interface Received {
      /**
       * The amount of data received.
       */
      amount?: number;

      /**
       * The unit of the amount of data received.
       */
      unit?: string;
    }

    export interface Transmitted {
      /**
       * The amount of data transmitted.
       */
      amount?: number;

      /**
       * The unit of the amount of data transmitted.
       */
      unit?: string;
    }
  }
}

export interface GlobalIPAssignmentsUsageRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_assignment_id][in], filter[global_ip_id][in]
   */
  filter?: GlobalIPAssignmentsUsageRetrieveParams.Filter;
}

export namespace GlobalIPAssignmentsUsageRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_assignment_id][in], filter[global_ip_id][in]
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

export declare namespace GlobalIPAssignmentsUsage {
  export {
    type GlobalIPAssignmentsUsageRetrieveResponse as GlobalIPAssignmentsUsageRetrieveResponse,
    type GlobalIPAssignmentsUsageRetrieveParams as GlobalIPAssignmentsUsageRetrieveParams,
  };
}
