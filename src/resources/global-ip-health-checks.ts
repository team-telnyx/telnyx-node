// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
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
   * const globalIPHealthChecks =
   *   await client.globalIPHealthChecks.list();
   * ```
   */
  list(
    query: GlobalIPHealthCheckListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPHealthCheckListResponse> {
    return this._client.get('/global_ip_health_checks', { query, ...options });
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface GlobalIPHealthCheckListResponse {
  data?: Array<GlobalIPHealthCheckListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace GlobalIPHealthCheckListResponse {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
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

export interface GlobalIPHealthCheckListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: GlobalIPHealthCheckListParams.Page;
}

export namespace GlobalIPHealthCheckListParams {
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

export declare namespace GlobalIPHealthChecks {
  export {
    type GlobalIPHealthCheckCreateResponse as GlobalIPHealthCheckCreateResponse,
    type GlobalIPHealthCheckRetrieveResponse as GlobalIPHealthCheckRetrieveResponse,
    type GlobalIPHealthCheckListResponse as GlobalIPHealthCheckListResponse,
    type GlobalIPHealthCheckDeleteResponse as GlobalIPHealthCheckDeleteResponse,
    type GlobalIPHealthCheckCreateParams as GlobalIPHealthCheckCreateParams,
    type GlobalIPHealthCheckListParams as GlobalIPHealthCheckListParams,
  };
}
