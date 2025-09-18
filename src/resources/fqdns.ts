// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Fqdns extends APIResource {
  /**
   * Create a new FQDN object.
   *
   * @example
   * ```ts
   * const fqdn = await client.fqdns.create({
   *   connection_id: '1516447646313612565',
   *   dns_record_type: 'a',
   *   fqdn: 'example.com',
   * });
   * ```
   */
  create(body: FqdnCreateParams, options?: RequestOptions): APIPromise<FqdnCreateResponse> {
    return this._client.post('/fqdns', { body, ...options });
  }

  /**
   * Return the details regarding a specific FQDN.
   *
   * @example
   * ```ts
   * const fqdn = await client.fqdns.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FqdnRetrieveResponse> {
    return this._client.get(path`/fqdns/${id}`, options);
  }

  /**
   * Update the details of a specific FQDN.
   *
   * @example
   * ```ts
   * const fqdn = await client.fqdns.update('id');
   * ```
   */
  update(
    id: string,
    body: FqdnUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FqdnUpdateResponse> {
    return this._client.patch(path`/fqdns/${id}`, { body, ...options });
  }

  /**
   * Get all FQDNs belonging to the user that match the given filters.
   *
   * @example
   * ```ts
   * const fqdns = await client.fqdns.list();
   * ```
   */
  list(
    query: FqdnListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FqdnListResponse> {
    return this._client.get('/fqdns', { query, ...options });
  }

  /**
   * Delete an FQDN.
   *
   * @example
   * ```ts
   * const fqdn = await client.fqdns.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<FqdnDeleteResponse> {
    return this._client.delete(path`/fqdns/${id}`, options);
  }
}

export interface Fqdn {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ID of the FQDN connection to which this FQDN is attached.
   */
  connection_id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The DNS record type for the FQDN. For cases where a port is not set, the DNS
   * record type must be 'srv'. For cases where a port is set, the DNS record type
   * must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060
   * will be used.
   */
  dns_record_type?: string;

  /**
   * FQDN represented by this resource.
   */
  fqdn?: string;

  /**
   * Port to use when connecting to this FQDN.
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

export interface FqdnCreateResponse {
  data?: Fqdn;
}

export interface FqdnRetrieveResponse {
  data?: Fqdn;
}

export interface FqdnUpdateResponse {
  data?: Fqdn;
}

export interface FqdnListResponse {
  data?: Array<Fqdn>;

  meta?: Shared.ConnectionsPaginationMeta;
}

export interface FqdnDeleteResponse {
  data?: Fqdn;
}

export interface FqdnCreateParams {
  /**
   * ID of the FQDN connection to which this IP should be attached.
   */
  connection_id: string;

  /**
   * The DNS record type for the FQDN. For cases where a port is not set, the DNS
   * record type must be 'srv'. For cases where a port is set, the DNS record type
   * must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060
   * will be used.
   */
  dns_record_type: string;

  /**
   * FQDN represented by this resource.
   */
  fqdn: string;

  /**
   * Port to use when connecting to this FQDN.
   */
  port?: number | null;
}

export interface FqdnUpdateParams {
  /**
   * ID of the FQDN connection to which this IP should be attached.
   */
  connection_id?: string;

  /**
   * The DNS record type for the FQDN. For cases where a port is not set, the DNS
   * record type must be 'srv'. For cases where a port is set, the DNS record type
   * must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060
   * will be used.
   */
  dns_record_type?: string;

  /**
   * FQDN represented by this resource.
   */
  fqdn?: string;

  /**
   * Port to use when connecting to this FQDN.
   */
  port?: number | null;
}

export interface FqdnListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_id], filter[fqdn], filter[port], filter[dns_record_type]
   */
  filter?: FqdnListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: FqdnListParams.Page;
}

export namespace FqdnListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_id], filter[fqdn], filter[port], filter[dns_record_type]
   */
  export interface Filter {
    /**
     * ID of the FQDN connection to which the FQDN belongs.
     */
    connection_id?: string;

    /**
     * DNS record type used by the FQDN.
     */
    dns_record_type?: string;

    /**
     * FQDN represented by the resource.
     */
    fqdn?: string;

    /**
     * Port to use when connecting to the FQDN.
     */
    port?: number;
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
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

export declare namespace Fqdns {
  export {
    type Fqdn as Fqdn,
    type FqdnCreateResponse as FqdnCreateResponse,
    type FqdnRetrieveResponse as FqdnRetrieveResponse,
    type FqdnUpdateResponse as FqdnUpdateResponse,
    type FqdnListResponse as FqdnListResponse,
    type FqdnDeleteResponse as FqdnDeleteResponse,
    type FqdnCreateParams as FqdnCreateParams,
    type FqdnUpdateParams as FqdnUpdateParams,
    type FqdnListParams as FqdnListParams,
  };
}
