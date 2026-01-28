// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IPs extends APIResource {
  /**
   * Create a new IP object.
   *
   * @example
   * ```ts
   * const ip = await client.ips.create({
   *   ip_address: '192.168.0.0',
   * });
   * ```
   */
  create(body: IPCreateParams, options?: RequestOptions): APIPromise<IPCreateResponse> {
    return this._client.post('/ips', { body, ...options });
  }

  /**
   * Return the details regarding a specific IP.
   *
   * @example
   * ```ts
   * const ip = await client.ips.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IPRetrieveResponse> {
    return this._client.get(path`/ips/${id}`, options);
  }

  /**
   * Update the details of a specific IP.
   *
   * @example
   * ```ts
   * const ip = await client.ips.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { ip_address: '192.168.0.0' },
   * );
   * ```
   */
  update(id: string, body: IPUpdateParams, options?: RequestOptions): APIPromise<IPUpdateResponse> {
    return this._client.patch(path`/ips/${id}`, { body, ...options });
  }

  /**
   * Get all IPs belonging to the user that match the given filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ip of client.ips.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: IPListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IPsDefaultFlatPagination, IP> {
    return this._client.getAPIList('/ips', DefaultFlatPagination<IP>, { query, ...options });
  }

  /**
   * Delete an IP.
   *
   * @example
   * ```ts
   * const ip = await client.ips.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<IPDeleteResponse> {
    return this._client.delete(path`/ips/${id}`, options);
  }
}

export type IPsDefaultFlatPagination = DefaultFlatPagination<IP>;

export interface IP {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ID of the IP Connection to which this IP should be attached.
   */
  connection_id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * IP adddress represented by this resource.
   */
  ip_address?: string;

  /**
   * Port to use when connecting to this IP.
   */
  port?: number;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface IPCreateResponse {
  data?: IP;
}

export interface IPRetrieveResponse {
  data?: IP;
}

export interface IPUpdateResponse {
  data?: IP;
}

export interface IPDeleteResponse {
  data?: IP;
}

export interface IPCreateParams {
  /**
   * IP adddress represented by this resource.
   */
  ip_address: string;

  /**
   * ID of the IP Connection to which this IP should be attached.
   */
  connection_id?: string;

  /**
   * Port to use when connecting to this IP.
   */
  port?: number;
}

export interface IPUpdateParams {
  /**
   * IP adddress represented by this resource.
   */
  ip_address: string;

  /**
   * ID of the IP Connection to which this IP should be attached.
   */
  connection_id?: string;

  /**
   * Port to use when connecting to this IP.
   */
  port?: number;
}

export interface IPListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_id], filter[ip_address], filter[port]
   */
  filter?: IPListParams.Filter;
}

export namespace IPListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_id], filter[ip_address], filter[port]
   */
  export interface Filter {
    /**
     * ID of the IP Connection to which this IP should be attached.
     */
    connection_id?: string;

    /**
     * IP adddress represented by this resource.
     */
    ip_address?: string;

    /**
     * Port to use when connecting to this IP.
     */
    port?: number;
  }
}

export declare namespace IPs {
  export {
    type IP as IP,
    type IPCreateResponse as IPCreateResponse,
    type IPRetrieveResponse as IPRetrieveResponse,
    type IPUpdateResponse as IPUpdateResponse,
    type IPDeleteResponse as IPDeleteResponse,
    type IPsDefaultFlatPagination as IPsDefaultFlatPagination,
    type IPCreateParams as IPCreateParams,
    type IPUpdateParams as IPUpdateParams,
    type IPListParams as IPListParams,
  };
}
