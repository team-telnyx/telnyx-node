// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DynamicEmergencyEndpoints extends APIResource {
  /**
   * Creates a dynamic emergency endpoints.
   *
   * @example
   * ```ts
   * const dynamicEmergencyEndpoint =
   *   await client.dynamicEmergencyEndpoints.create({
   *     callback_number: '+13125550000',
   *     caller_name: 'Jane Doe Desk Phone',
   *     dynamic_emergency_address_id:
   *       '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   *   });
   * ```
   */
  create(
    body: DynamicEmergencyEndpointCreateParams,
    options?: RequestOptions,
  ): APIPromise<DynamicEmergencyEndpointCreateResponse> {
    return this._client.post('/dynamic_emergency_endpoints', { body, ...options });
  }

  /**
   * Returns the dynamic emergency endpoint based on the ID provided
   *
   * @example
   * ```ts
   * const dynamicEmergencyEndpoint =
   *   await client.dynamicEmergencyEndpoints.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DynamicEmergencyEndpointRetrieveResponse> {
    return this._client.get(path`/dynamic_emergency_endpoints/${id}`, options);
  }

  /**
   * Returns the dynamic emergency endpoints according to filters
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dynamicEmergencyEndpoint of client.dynamicEmergencyEndpoints.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DynamicEmergencyEndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DynamicEmergencyEndpointsDefaultFlatPagination, DynamicEmergencyEndpoint> {
    return this._client.getAPIList(
      '/dynamic_emergency_endpoints',
      DefaultFlatPagination<DynamicEmergencyEndpoint>,
      { query, ...options },
    );
  }

  /**
   * Deletes the dynamic emergency endpoint based on the ID provided
   *
   * @example
   * ```ts
   * const dynamicEmergencyEndpoint =
   *   await client.dynamicEmergencyEndpoints.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DynamicEmergencyEndpointDeleteResponse> {
    return this._client.delete(path`/dynamic_emergency_endpoints/${id}`, options);
  }
}

export type DynamicEmergencyEndpointsDefaultFlatPagination = DefaultFlatPagination<DynamicEmergencyEndpoint>;

export interface DynamicEmergencyEndpoint {
  callback_number: string;

  caller_name: string;

  /**
   * An id of a currently active dynamic emergency location.
   */
  dynamic_emergency_address_id: string;

  id?: string;

  /**
   * ISO 8601 formatted date of when the resource was created
   */
  created_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  sip_from_id?: string;

  /**
   * Status of dynamic emergency address
   */
  status?: 'pending' | 'activated' | 'rejected';

  /**
   * ISO 8601 formatted date of when the resource was last updated
   */
  updated_at?: string;
}

export interface DynamicEmergencyEndpointCreateResponse {
  data?: DynamicEmergencyEndpoint;
}

export interface DynamicEmergencyEndpointRetrieveResponse {
  data?: DynamicEmergencyEndpoint;
}

export interface DynamicEmergencyEndpointDeleteResponse {
  data?: DynamicEmergencyEndpoint;
}

export interface DynamicEmergencyEndpointCreateParams {
  callback_number: string;

  caller_name: string;

  /**
   * An id of a currently active dynamic emergency location.
   */
  dynamic_emergency_address_id: string;
}

export interface DynamicEmergencyEndpointListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[country_code]
   */
  filter?: DynamicEmergencyEndpointListParams.Filter;
}

export namespace DynamicEmergencyEndpointListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[country_code]
   */
  export interface Filter {
    /**
     * Filter by country code.
     */
    country_code?: string;

    /**
     * Filter by status.
     */
    status?: 'pending' | 'activated' | 'rejected';
  }
}

export declare namespace DynamicEmergencyEndpoints {
  export {
    type DynamicEmergencyEndpoint as DynamicEmergencyEndpoint,
    type DynamicEmergencyEndpointCreateResponse as DynamicEmergencyEndpointCreateResponse,
    type DynamicEmergencyEndpointRetrieveResponse as DynamicEmergencyEndpointRetrieveResponse,
    type DynamicEmergencyEndpointDeleteResponse as DynamicEmergencyEndpointDeleteResponse,
    type DynamicEmergencyEndpointsDefaultFlatPagination as DynamicEmergencyEndpointsDefaultFlatPagination,
    type DynamicEmergencyEndpointCreateParams as DynamicEmergencyEndpointCreateParams,
    type DynamicEmergencyEndpointListParams as DynamicEmergencyEndpointListParams,
  };
}
