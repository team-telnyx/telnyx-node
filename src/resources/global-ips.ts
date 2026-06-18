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
export class GlobalIPs extends APIResource {
  /**
   * Create a Global IP.
   *
   * @example
   * ```ts
   * const globalIP = await client.globalIPs.create();
   * ```
   */
  create(body: GlobalIPCreateParams, options?: RequestOptions): APIPromise<GlobalIPCreateResponse> {
    return this._client.post('/global_ips', { body, ...options });
  }

  /**
   * Retrieve a Global IP.
   *
   * @example
   * ```ts
   * const globalIP = await client.globalIPs.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GlobalIPRetrieveResponse> {
    return this._client.get(path`/global_ips/${id}`, options);
  }

  /**
   * List all Global IPs.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const globalIP of client.globalIPs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GlobalIPListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GlobalIPsDefaultFlatPagination, GlobalIP> {
    return this._client.getAPIList('/global_ips', DefaultFlatPagination<GlobalIP>, { query, ...options });
  }

  /**
   * Delete a Global IP.
   *
   * @example
   * ```ts
   * const globalIP = await client.globalIPs.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<GlobalIPDeleteResponse> {
    return this._client.delete(path`/global_ips/${id}`, options);
  }
}

export type GlobalIPsDefaultFlatPagination = DefaultFlatPagination<GlobalIP>;

export interface GlobalIP extends GlobalIPAssignmentsAPI.Record {
  /**
   * A user specified description for the address.
   */
  description?: string;

  /**
   * The Global IP address.
   */
  ip_address?: string;

  /**
   * A user specified name for the address.
   */
  name?: string;

  /**
   * A Global IP ports grouped by protocol code.
   */
  ports?: { [key: string]: unknown };
}

export interface GlobalIPCreateResponse {
  data?: GlobalIP;
}

export interface GlobalIPRetrieveResponse {
  data?: GlobalIP;
}

export interface GlobalIPDeleteResponse {
  data?: GlobalIP;
}

export interface GlobalIPCreateParams {
  /**
   * A user specified description for the address.
   */
  description?: string;

  /**
   * A user specified name for the address.
   */
  name?: string;

  /**
   * A Global IP ports grouped by protocol code.
   */
  ports?: { [key: string]: unknown };
}

export interface GlobalIPListParams extends DefaultFlatPaginationParams {}

export declare namespace GlobalIPs {
  export {
    type GlobalIP as GlobalIP,
    type GlobalIPCreateResponse as GlobalIPCreateResponse,
    type GlobalIPRetrieveResponse as GlobalIPRetrieveResponse,
    type GlobalIPDeleteResponse as GlobalIPDeleteResponse,
    type GlobalIPsDefaultFlatPagination as GlobalIPsDefaultFlatPagination,
    type GlobalIPCreateParams as GlobalIPCreateParams,
    type GlobalIPListParams as GlobalIPListParams,
  };
}
