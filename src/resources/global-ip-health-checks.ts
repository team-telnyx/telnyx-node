// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GlobalIPHealthChecks extends APIResource {
  /**
   * Create a Global IP health check.
   *
   * @example
   * ```ts
   * const globalIPHealthCheck =
   *   await client.globalIPHealthChecks.create();
   * ```
   */
  create(
    body: GlobalIPHealthCheckCreateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalIPHealthCheckCreateResponse> {
    return this._client.post('/global_ip_health_checks', { body, ...options });
  }

  /**
   * Retrieve a Global IP health check.
   *
   * @example
   * ```ts
   * const globalIPHealthCheck =
   *   await client.globalIPHealthChecks.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GlobalIPHealthCheckRetrieveResponse> {
    return this._client.get(path`/global_ip_health_checks/${id}`, options);
  }

  /**
   * List all Global IP health checks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const globalIPHealthCheckListResponse of client.globalIPHealthChecks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GlobalIPHealthCheckListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GlobalIPHealthCheckListResponsesDefaultFlatPagination, GlobalIPHealthCheckListResponse> {
    return this._client.getAPIList(
      '/global_ip_health_checks',
      DefaultFlatPagination<GlobalIPHealthCheckListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Global IP health check.
   *
   * @example
   * ```ts
   * const globalIPHealthCheck =
   *   await client.globalIPHealthChecks.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<GlobalIPHealthCheckDeleteResponse> {
    return this._client.delete(path`/global_ip_health_checks/${id}`, options);
  }
}

export type GlobalIPHealthCheckListResponsesDefaultFlatPagination =
  DefaultFlatPagination<GlobalIPHealthCheckListResponse>;

export interface GlobalIPHealthCheckCreateResponse {
  data?: GlobalIPHealthCheckCreateResponse.Data;
}

export namespace GlobalIPHealthCheckCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Global IP ID.
     */
    global_ip_id?: string;

    /**
     * A Global IP health check params.
     */
    health_check_params?: { [key: string]: unknown };

    /**
     * The Global IP health check type.
     */
    health_check_type?: string;
  }
}

export interface GlobalIPHealthCheckRetrieveResponse {
  data?: GlobalIPHealthCheckRetrieveResponse.Data;
}

export namespace GlobalIPHealthCheckRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Global IP ID.
     */
    global_ip_id?: string;

    /**
     * A Global IP health check params.
     */
    health_check_params?: { [key: string]: unknown };

    /**
     * The Global IP health check type.
     */
    health_check_type?: string;
  }
}

export interface GlobalIPHealthCheckListResponse extends GlobalIPAssignmentsAPI.Record {
  /**
   * Global IP ID.
   */
  global_ip_id?: string;

  /**
   * A Global IP health check params.
   */
  health_check_params?: { [key: string]: unknown };

  /**
   * The Global IP health check type.
   */
  health_check_type?: string;
}

export interface GlobalIPHealthCheckDeleteResponse {
  data?: GlobalIPHealthCheckDeleteResponse.Data;
}

export namespace GlobalIPHealthCheckDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
    /**
     * Global IP ID.
     */
    global_ip_id?: string;

    /**
     * A Global IP health check params.
     */
    health_check_params?: { [key: string]: unknown };

    /**
     * The Global IP health check type.
     */
    health_check_type?: string;
  }
}

export interface GlobalIPHealthCheckCreateParams {
  /**
   * Global IP ID.
   */
  global_ip_id?: string;

  /**
   * A Global IP health check params.
   */
  health_check_params?: { [key: string]: unknown };

  /**
   * The Global IP health check type.
   */
  health_check_type?: string;
}

export interface GlobalIPHealthCheckListParams extends DefaultFlatPaginationParams {}

export declare namespace GlobalIPHealthChecks {
  export {
    type GlobalIPHealthCheckCreateResponse as GlobalIPHealthCheckCreateResponse,
    type GlobalIPHealthCheckRetrieveResponse as GlobalIPHealthCheckRetrieveResponse,
    type GlobalIPHealthCheckListResponse as GlobalIPHealthCheckListResponse,
    type GlobalIPHealthCheckDeleteResponse as GlobalIPHealthCheckDeleteResponse,
    type GlobalIPHealthCheckListResponsesDefaultFlatPagination as GlobalIPHealthCheckListResponsesDefaultFlatPagination,
    type GlobalIPHealthCheckCreateParams as GlobalIPHealthCheckCreateParams,
    type GlobalIPHealthCheckListParams as GlobalIPHealthCheckListParams,
  };
}
