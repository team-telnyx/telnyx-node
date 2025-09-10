// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPLatency extends APIResource {
  /**
   * Global IP Latency Metrics
   */
  retrieve(
    query: GlobalIPLatencyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPLatencyRetrieveResponse> {
    return this._client.get('/global_ip_latency', { query, ...options });
  }
}

export interface GlobalIPLatencyRetrieveResponse {
  data?: Array<GlobalIPLatencyRetrieveResponse.Data>;
}

export namespace GlobalIPLatencyRetrieveResponse {
  export interface Data {
    global_ip?: Data.GlobalIP;

    mean_latency?: Data.MeanLatency;

    percentile_latency?: Data.PercentileLatency;

    prober_location?: Data.ProberLocation;

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

    export interface MeanLatency {
      /**
       * The average latency.
       */
      amount?: number;

      /**
       * The unit of the average latency.
       */
      unit?: string;
    }

    export interface PercentileLatency {
      '0'?: PercentileLatency._0;

      '100'?: PercentileLatency._100;

      '25'?: PercentileLatency._25;

      '50'?: PercentileLatency._50;

      '75'?: PercentileLatency._75;

      '90'?: PercentileLatency._90;

      '99'?: PercentileLatency._99;
    }

    export namespace PercentileLatency {
      export interface _0 {
        /**
         * The minimum latency.
         */
        amount?: number;

        /**
         * The unit of the minimum latency.
         */
        unit?: string;
      }

      export interface _100 {
        /**
         * The maximum latency.
         */
        amount?: number;

        /**
         * The unit of the maximum latency.
         */
        unit?: string;
      }

      export interface _25 {
        /**
         * The 25th percentile latency.
         */
        amount?: number;

        /**
         * The unit of the 25th percentile latency.
         */
        unit?: string;
      }

      export interface _50 {
        /**
         * The 50th percentile latency.
         */
        amount?: number;

        /**
         * The unit of the 50th percentile latency.
         */
        unit?: string;
      }

      export interface _75 {
        /**
         * The 75th percentile latency.
         */
        amount?: number;

        /**
         * The unit of the 75th percentile latency.
         */
        unit?: string;
      }

      export interface _90 {
        /**
         * The 90th percentile latency.
         */
        amount?: number;

        /**
         * The unit of the 90th percentile latency.
         */
        unit?: string;
      }

      export interface _99 {
        /**
         * The 99th percentile latency.
         */
        amount?: number;

        /**
         * The unit of the 99th percentile latency.
         */
        unit?: string;
      }
    }

    export interface ProberLocation {
      /**
       * Location ID.
       */
      id?: string;

      /**
       * Latitude.
       */
      lat?: number;

      /**
       * Longitude.
       */
      lon?: number;

      /**
       * Location name.
       */
      name?: string;
    }
  }
}

export interface GlobalIPLatencyRetrieveParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[global_ip_id][in]
   */
  filter?: GlobalIPLatencyRetrieveParams.Filter;
}

export namespace GlobalIPLatencyRetrieveParams {
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

export declare namespace GlobalIPLatency {
  export {
    type GlobalIPLatencyRetrieveResponse as GlobalIPLatencyRetrieveResponse,
    type GlobalIPLatencyRetrieveParams as GlobalIPLatencyRetrieveParams,
  };
}
