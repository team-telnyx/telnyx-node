// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * const globalIPs = await client.globalIPs.list();
   * ```
   */
  list(
    query: GlobalIPListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPListResponse> {
    return this._client.get('/global_ips', { query, ...options });
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

export interface GlobalIPCreateResponse {
  data?: GlobalIPCreateResponse.Data;
}

export namespace GlobalIPCreateResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface GlobalIPRetrieveResponse {
  data?: GlobalIPRetrieveResponse.Data;
}

export namespace GlobalIPRetrieveResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface GlobalIPListResponse {
  data?: Array<GlobalIPListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace GlobalIPListResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface GlobalIPDeleteResponse {
  data?: GlobalIPDeleteResponse.Data;
}

export namespace GlobalIPDeleteResponse {
  export interface Data extends GlobalIPAssignmentsAPI.Record {
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

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
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

export interface GlobalIPListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: GlobalIPListParams.Page;
}

export namespace GlobalIPListParams {
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

export declare namespace GlobalIPs {
  export {
    type GlobalIPCreateResponse as GlobalIPCreateResponse,
    type GlobalIPRetrieveResponse as GlobalIPRetrieveResponse,
    type GlobalIPListResponse as GlobalIPListResponse,
    type GlobalIPDeleteResponse as GlobalIPDeleteResponse,
    type GlobalIPCreateParams as GlobalIPCreateParams,
    type GlobalIPListParams as GlobalIPListParams,
  };
}
