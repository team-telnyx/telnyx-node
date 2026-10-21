// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FuncsAPI from './funcs/funcs';
import {
  FuncListParams,
  FuncListResponse,
  FuncListResponsesDefaultFlatPagination,
  FuncRetrieveLogsParams,
  FuncRetrieveLogsResponse,
  FuncRetrieveMetricAggregatesParams,
  FuncRetrieveMetricAggregatesResponse,
  FuncRetrieveRevisionsParams,
  FuncRetrieveRevisionsResponse,
  FuncRetrieveShipInspectionResponse,
  Funcs,
  FunctionsObservabilityPaginationMeta,
  LogsMeta,
} from './funcs/funcs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Inspect Stateful Actor types
 */
export class Compute extends APIResource {
  funcs: FuncsAPI.Funcs = new FuncsAPI.Funcs(this._client);

  /**
   * Retrieve one account-scoped Stateful Actor type. owner_function_id identifies
   * the function that owns and ships the actor class; other functions may reference
   * the same actor type through actor bindings.
   *
   * @example
   * ```ts
   * const compute = await client.compute.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ComputeRetrieveResponse> {
    return this._client.get(path`/compute/actors/${id}`, options);
  }
}

export interface ComputeRetrieveResponse {
  data?: ComputeRetrieveResponse.Data;
}

export namespace ComputeRetrieveResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    /**
     * ID of the function that owns and ships this actor type. Empty when the type is
     * unowned.
     */
    owner_function_id?: string;

    /**
     * Last deployment fan-out report, not a live probe. Omitted on actor types without
     * a placement-aware deployment.
     */
    placement?: Data.Placement;

    record_type?: string;

    status?: string;

    type?: string;

    updated_at?: string;
  }

  export namespace Data {
    /**
     * Last deployment fan-out report, not a live probe. Omitted on actor types without
     * a placement-aware deployment.
     */
    export interface Placement {
      cluster_results?: Array<Placement.ClusterResult>;

      /**
       * Public regions with successful deployment
       */
      clusters?: Array<string>;

      excluded_clusters?: Array<string>;

      /**
       * Optional ISO-8601 millisecond timestamp
       */
      observed_at?: string;

      partial?: boolean;

      policy?: 'everywhere' | 'single_site';

      unchecked_clusters?: Array<string>;
    }

    export namespace Placement {
      export interface ClusterResult {
        /**
         * Public region, or unknown when no mapping exists
         */
        cluster_id?: string;

        error?: string;

        error_code?: string;

        status?: string;

        success?: boolean;
      }
    }
  }
}

Compute.Funcs = Funcs;

export declare namespace Compute {
  export { type ComputeRetrieveResponse as ComputeRetrieveResponse };

  export {
    Funcs as Funcs,
    type FunctionsObservabilityPaginationMeta as FunctionsObservabilityPaginationMeta,
    type LogsMeta as LogsMeta,
    type FuncListResponse as FuncListResponse,
    type FuncRetrieveLogsResponse as FuncRetrieveLogsResponse,
    type FuncRetrieveMetricAggregatesResponse as FuncRetrieveMetricAggregatesResponse,
    type FuncRetrieveRevisionsResponse as FuncRetrieveRevisionsResponse,
    type FuncRetrieveShipInspectionResponse as FuncRetrieveShipInspectionResponse,
    type FuncListResponsesDefaultFlatPagination as FuncListResponsesDefaultFlatPagination,
    type FuncRetrieveLogsParams as FuncRetrieveLogsParams,
    type FuncRetrieveMetricAggregatesParams as FuncRetrieveMetricAggregatesParams,
    type FuncRetrieveRevisionsParams as FuncRetrieveRevisionsParams,
    type FuncListParams as FuncListParams,
  };
}
