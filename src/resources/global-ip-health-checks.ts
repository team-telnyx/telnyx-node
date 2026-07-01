// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Global IPs
 */
export class GlobalIPHealthChecks extends APIResource {
  /**
   * List all Global IP health checks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const globalIPHealthCheck of client.globalIPHealthChecks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GlobalIPHealthCheckListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GlobalIPHealthChecksDefaultFlatPagination, GlobalIPHealthCheck> {
    return this._client.getAPIList('/global_ip_health_checks', DefaultFlatPagination<GlobalIPHealthCheck>, {
      query,
      ...options,
    });
  }

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
}

export type GlobalIPHealthChecksDefaultFlatPagination = DefaultFlatPagination<GlobalIPHealthCheck>;

export interface GlobalIPHealthCheck extends GlobalIPAssignmentsAPI.Record {
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

export interface GlobalIPHealthCheckCreateResponse {
  data?: GlobalIPHealthCheck;
}

export interface GlobalIPHealthCheckRetrieveResponse {
  data?: GlobalIPHealthCheck;
}

export interface GlobalIPHealthCheckDeleteResponse {
  data?: GlobalIPHealthCheck;
}

export interface GlobalIPHealthCheckListParams extends DefaultFlatPaginationParams {}

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

export declare namespace GlobalIPHealthChecks {
  export {
    type GlobalIPHealthCheck as GlobalIPHealthCheck,
    type GlobalIPHealthCheckCreateResponse as GlobalIPHealthCheckCreateResponse,
    type GlobalIPHealthCheckRetrieveResponse as GlobalIPHealthCheckRetrieveResponse,
    type GlobalIPHealthCheckDeleteResponse as GlobalIPHealthCheckDeleteResponse,
    type GlobalIPHealthChecksDefaultFlatPagination as GlobalIPHealthChecksDefaultFlatPagination,
    type GlobalIPHealthCheckListParams as GlobalIPHealthCheckListParams,
    type GlobalIPHealthCheckCreateParams as GlobalIPHealthCheckCreateParams,
  };
}
