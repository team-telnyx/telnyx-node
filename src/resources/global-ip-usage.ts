// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPUsage extends APIResource {
  /**
   * Global IP Usage Metrics
   */
  retrieve(
    query: GlobalIPUsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPUsageRetrieveResponse> {
    return this._client.get('/global_ip_usage', { query, ...options });
  }
}

export interface GlobalIPUsageRetrieveResponse {
  data?: Array<GlobalIPUsageRetrieveResponse.Data>;
}

export namespace GlobalIPUsageRetrieveResponse {
  export interface Data {
    global_ip?: Data.GlobalIP;

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

export interface GlobalIPUsageRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_id][in]
   */
  filter?: GlobalIPUsageRetrieveParams.Filter;
}

export namespace GlobalIPUsageRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_id][in]
   */
  export interface Filter {
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
       * Filter by Global IP ID(s) separated by commas
       */
      in?: string;
    }
  }
}

export declare namespace GlobalIPUsage {
  export {
    type GlobalIPUsageRetrieveResponse as GlobalIPUsageRetrieveResponse,
    type GlobalIPUsageRetrieveParams as GlobalIPUsageRetrieveParams,
  };
}
