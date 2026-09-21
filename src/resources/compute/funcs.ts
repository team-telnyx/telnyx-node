// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FuncsAPI from './funcs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Funcs extends APIResource {
  /**
   * Returns logs oldest first. `type=runtime` (default) returns function
   * stdout/stderr. `type=invocations` returns one platform-generated record per HTTP
   * request served.
   */
  retrieveLogs(
    id: string,
    query: FuncRetrieveLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FuncRetrieveLogsResponse> {
    return this._client.get(path`/compute/funcs/${id}/logs`, { query, ...options });
  }

  /**
   * Returns aggregate request, latency, CPU, memory, and resource-limit metrics for
   * a function over the requested window.
   */
  retrieveMetricAggregates(
    id: string,
    query: FuncRetrieveMetricAggregatesParams,
    options?: RequestOptions,
  ): APIPromise<FuncRetrieveMetricAggregatesResponse> {
    return this._client.get(path`/compute/funcs/${id}/metric_aggregates`, { query, ...options });
  }

  /**
   * Lists a function's ship history newest first, including per-ship failure stage
   * and reason when recorded.
   */
  retrieveRevisions(
    id: string,
    query: FuncRetrieveRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FuncRetrieveRevisionsResponse> {
    return this._client.get(path`/compute/funcs/${id}/revisions`, { query, ...options });
  }

  /**
   * Returns the latest ship outcome. The stage is `none` on success, `pending` while
   * building, or a failure stage such as `build`, `platform`, `pre_build`, `deploy`,
   * or `security_review`. This stage-neutral customer-facing path is an alias over
   * the same inspection resource as `build_log_inspection`.
   */
  retrieveShipInspection(
    id: string,
    options?: RequestOptions,
  ): APIPromise<FuncRetrieveShipInspectionResponse> {
    return this._client.get(path`/compute/funcs/${id}/ship_inspection`, options);
  }
}

export interface FunctionsObservabilityPaginationMeta {
  page_number?: number;

  page_size?: number;

  total_pages?: number;

  total_results?: number;
}

export interface LogsMeta {
  has_more?: boolean;

  partial?: boolean;
}

export type FuncRetrieveLogsResponse =
  | FuncRetrieveLogsResponse.FuncRuntimeLogsResponse
  | FuncRetrieveLogsResponse.FuncInvocationLogsResponse;

export namespace FuncRetrieveLogsResponse {
  export interface FuncRuntimeLogsResponse {
    data?: Array<FuncRuntimeLogsResponse.Data>;

    meta?: FuncsAPI.LogsMeta;
  }

  export namespace FuncRuntimeLogsResponse {
    export interface Data {
      level?: string;

      message?: string;

      record_type?: 'compute_func_runtime_log';

      timestamp?: string;
    }
  }

  export interface FuncInvocationLogsResponse {
    data?: Array<FuncInvocationLogsResponse.Data>;

    meta?: FuncsAPI.LogsMeta;
  }

  export namespace FuncInvocationLogsResponse {
    export interface Data {
      duration_ms?: number;

      method?: string;

      path?: string;

      record_type?: 'compute_func_invocation_log';

      region?: string;

      request_size_bytes?: number;

      response_size_bytes?: number;

      status_code?: number;

      timestamp?: string;
    }
  }
}

export interface FuncRetrieveMetricAggregatesResponse {
  data?: Array<FuncRetrieveMetricAggregatesResponse.Data>;

  meta?: FunctionsObservabilityPaginationMeta;
}

export namespace FuncRetrieveMetricAggregatesResponse {
  export interface Data {
    cpu_used_cores_avg?: number | null;

    cpu_used_cores_max?: number | null;

    end_time?: string;

    function_id?: string;

    function_name?: string;

    memory_used_bytes_avg?: number | null;

    memory_used_bytes_max?: number | null;

    product?: string;

    record_type?: string;

    request_client_error_rate?: number | null;

    request_count?: number | null;

    request_error_rate?: number | null;

    request_latency_avg_ms?: number | null;

    request_latency_p50_ms?: number | null;

    request_latency_p95_ms?: number | null;

    request_latency_p99_ms?: number | null;

    request_success_rate?: number | null;

    start_time?: string;
  }
}

export interface FuncRetrieveRevisionsResponse {
  data?: Array<FuncRetrieveRevisionsResponse.Data>;

  meta?: FunctionsObservabilityPaginationMeta;
}

export namespace FuncRetrieveRevisionsResponse {
  export interface Data {
    active?: boolean;

    build_ok_at?: string;

    build_status?: string;

    commit_sha?: string;

    deploy_status?: string;

    failure_reason?: string;

    failure_stage?: string;

    image?: string;

    record_type?: string;

    revision_id?: string;

    shipped_at?: string;

    shipped_by?: string;
  }
}

export interface FuncRetrieveShipInspectionResponse {
  data?: FuncRetrieveShipInspectionResponse.Data;
}

export namespace FuncRetrieveShipInspectionResponse {
  export interface Data {
    created_at?: string;

    reason?: string;

    /**
     * Stable record type retained by both inspection path aliases.
     */
    record_type?: 'build_log_inspection';

    runtime?: string;

    snippet?: string;

    stage?: 'build' | 'platform' | 'pre_build' | 'deploy' | 'security_review' | 'none' | 'pending';
  }
}

export interface FuncRetrieveLogsParams {
  /**
   * Return records at or before this RFC 3339 timestamp.
   */
  end_time?: string;

  /**
   * Maximum records to return.
   */
  limit?: number;

  /**
   * Return records at or after this RFC 3339 timestamp.
   */
  start_time?: string;

  /**
   * Log stream to return.
   */
  type?: 'runtime' | 'invocations';
}

export interface FuncRetrieveMetricAggregatesParams {
  /**
   * Exclusive window end, UTC ISO 8601 with milliseconds
   */
  end_time: string;

  /**
   * Inclusive window start, UTC ISO 8601 with milliseconds
   */
  start_time: string;

  /**
   * Edge site filter
   */
  'filter[edge_site]'?: string;

  /**
   * Kubernetes namespace filter
   */
  'filter[namespace]'?: string;

  'page[number]'?: number;

  'page[size]'?: number;
}

export interface FuncRetrieveRevisionsParams {
  'page[number]'?: number;

  'page[size]'?: number;
}

export declare namespace Funcs {
  export {
    type FunctionsObservabilityPaginationMeta as FunctionsObservabilityPaginationMeta,
    type LogsMeta as LogsMeta,
    type FuncRetrieveLogsResponse as FuncRetrieveLogsResponse,
    type FuncRetrieveMetricAggregatesResponse as FuncRetrieveMetricAggregatesResponse,
    type FuncRetrieveRevisionsResponse as FuncRetrieveRevisionsResponse,
    type FuncRetrieveShipInspectionResponse as FuncRetrieveShipInspectionResponse,
    type FuncRetrieveLogsParams as FuncRetrieveLogsParams,
    type FuncRetrieveMetricAggregatesParams as FuncRetrieveMetricAggregatesParams,
    type FuncRetrieveRevisionsParams as FuncRetrieveRevisionsParams,
  };
}
