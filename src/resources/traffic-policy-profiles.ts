// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Traffic Policy Profiles operations
 */
export class TrafficPolicyProfiles extends APIResource {
  /**
   * Create a new traffic policy profile. At least one of `services`, `ip_ranges`, or
   * `domains` must be provided.
   *
   * @example
   * ```ts
   * const trafficPolicyProfile =
   *   await client.trafficPolicyProfiles.create({
   *     type: 'whitelist',
   *   });
   * ```
   */
  create(
    body: TrafficPolicyProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrafficPolicyProfileCreateResponse> {
    return this._client.post('/traffic_policy_profiles', { body, ...options });
  }

  /**
   * Returns the details regarding a specific traffic policy profile.
   *
   * @example
   * ```ts
   * const trafficPolicyProfile =
   *   await client.trafficPolicyProfiles.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TrafficPolicyProfileRetrieveResponse> {
    return this._client.get(path`/traffic_policy_profiles/${id}`, options);
  }

  /**
   * Updates a traffic policy profile.
   *
   * @example
   * ```ts
   * const trafficPolicyProfile =
   *   await client.trafficPolicyProfiles.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  update(
    id: string,
    body: TrafficPolicyProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TrafficPolicyProfileUpdateResponse> {
    return this._client.patch(path`/traffic_policy_profiles/${id}`, { body, ...options });
  }

  /**
   * Get all traffic policy profiles belonging to the user that match the given
   * filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const trafficPolicyProfileListResponse of client.trafficPolicyProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TrafficPolicyProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TrafficPolicyProfileListResponsesDefaultFlatPagination, TrafficPolicyProfileListResponse> {
    return this._client.getAPIList(
      '/traffic_policy_profiles',
      DefaultFlatPagination<TrafficPolicyProfileListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the traffic policy profile.
   *
   * @example
   * ```ts
   * const trafficPolicyProfile =
   *   await client.trafficPolicyProfiles.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TrafficPolicyProfileDeleteResponse> {
    return this._client.delete(path`/traffic_policy_profiles/${id}`, options);
  }

  /**
   * Get all available PCEF services that can be used in traffic policy profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const trafficPolicyProfileListServicesResponse of client.trafficPolicyProfiles.listServices()) {
   *   // ...
   * }
   * ```
   */
  listServices(
    query: TrafficPolicyProfileListServicesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    TrafficPolicyProfileListServicesResponsesDefaultFlatPagination,
    TrafficPolicyProfileListServicesResponse
  > {
    return this._client.getAPIList(
      '/traffic_policy_profiles/services',
      DefaultFlatPagination<TrafficPolicyProfileListServicesResponse>,
      { query, ...options },
    );
  }
}

export type TrafficPolicyProfileListResponsesDefaultFlatPagination =
  DefaultFlatPagination<TrafficPolicyProfileListResponse>;

export type TrafficPolicyProfileListServicesResponsesDefaultFlatPagination =
  DefaultFlatPagination<TrafficPolicyProfileListServicesResponse>;

export interface TrafficPolicyProfileCreateResponse {
  data?: TrafficPolicyProfileCreateResponse.Data;
}

export namespace TrafficPolicyProfileCreateResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Array of domain names.
     */
    domains?: Array<string>;

    /**
     * Array of IP ranges in CIDR notation.
     */
    ip_ranges?: Array<string>;

    /**
     * Bandwidth limit in kbps.
     */
    limit_bw_kbps?: number | null;

    record_type?: string;

    /**
     * Array of PCEF service IDs included in the profile.
     */
    services?: Array<string>;

    /**
     * The type of the traffic policy profile.
     */
    type?: 'whitelist' | 'blacklist' | 'throttling';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface TrafficPolicyProfileRetrieveResponse {
  data?: TrafficPolicyProfileRetrieveResponse.Data;
}

export namespace TrafficPolicyProfileRetrieveResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Array of domain names.
     */
    domains?: Array<string>;

    /**
     * Array of IP ranges in CIDR notation.
     */
    ip_ranges?: Array<string>;

    /**
     * Bandwidth limit in kbps.
     */
    limit_bw_kbps?: number | null;

    record_type?: string;

    /**
     * Array of PCEF service IDs included in the profile.
     */
    services?: Array<string>;

    /**
     * The type of the traffic policy profile.
     */
    type?: 'whitelist' | 'blacklist' | 'throttling';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface TrafficPolicyProfileUpdateResponse {
  data?: TrafficPolicyProfileUpdateResponse.Data;
}

export namespace TrafficPolicyProfileUpdateResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Array of domain names.
     */
    domains?: Array<string>;

    /**
     * Array of IP ranges in CIDR notation.
     */
    ip_ranges?: Array<string>;

    /**
     * Bandwidth limit in kbps.
     */
    limit_bw_kbps?: number | null;

    record_type?: string;

    /**
     * Array of PCEF service IDs included in the profile.
     */
    services?: Array<string>;

    /**
     * The type of the traffic policy profile.
     */
    type?: 'whitelist' | 'blacklist' | 'throttling';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface TrafficPolicyProfileListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Array of domain names.
   */
  domains?: Array<string>;

  /**
   * Array of IP ranges in CIDR notation.
   */
  ip_ranges?: Array<string>;

  /**
   * Bandwidth limit in kbps.
   */
  limit_bw_kbps?: number | null;

  record_type?: string;

  /**
   * Array of PCEF service IDs included in the profile.
   */
  services?: Array<string>;

  /**
   * The type of the traffic policy profile.
   */
  type?: 'whitelist' | 'blacklist' | 'throttling';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface TrafficPolicyProfileDeleteResponse {
  data?: TrafficPolicyProfileDeleteResponse.Data;
}

export namespace TrafficPolicyProfileDeleteResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;
  }
}

export interface TrafficPolicyProfileListServicesResponse {
  /**
   * The service identifier.
   */
  id?: string;

  /**
   * The group the service belongs to.
   */
  group?: string;

  /**
   * The name of the service.
   */
  name?: string;

  resource_type?: string;
}

export interface TrafficPolicyProfileCreateParams {
  /**
   * The type of the traffic policy profile.
   */
  type: 'whitelist' | 'blacklist';

  /**
   * Array of domain names.
   */
  domains?: Array<string>;

  /**
   * Array of IP ranges in CIDR notation.
   */
  ip_ranges?: Array<string>;

  /**
   * Bandwidth limit in kbps. Must be 512 or 1024.
   */
  limit_bw_kbps?: 512 | 1024;

  /**
   * Array of PCEF service IDs to include in the profile.
   */
  services?: Array<string>;
}

export interface TrafficPolicyProfileUpdateParams {
  /**
   * Array of domain names.
   */
  domains?: Array<string>;

  /**
   * Array of IP ranges in CIDR notation.
   */
  ip_ranges?: Array<string>;

  /**
   * Bandwidth limit in kbps. Must be 512 or 1024, or null to remove.
   */
  limit_bw_kbps?: 512 | 1024 | null;

  /**
   * Array of PCEF service IDs to include in the profile.
   */
  services?: Array<string>;

  /**
   * The type of the traffic policy profile.
   */
  type?: 'whitelist' | 'blacklist' | 'throttling';
}

export interface TrafficPolicyProfileListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by service ID.
   */
  'filter[service]'?: string;

  /**
   * Filter by traffic policy profile type.
   */
  'filter[type]'?: 'whitelist' | 'blacklist' | 'throttling';

  /**
   * Sorts traffic policy profiles by the given field. Defaults to ascending order
   * unless field is prefixed with a minus sign.
   */
  sort?: 'service' | '-service' | 'type' | '-type';
}

export interface TrafficPolicyProfileListServicesParams extends DefaultFlatPaginationParams {
  /**
   * Filter services by group.
   */
  'filter[group]'?: string;

  /**
   * Filter services by name.
   */
  'filter[name]'?: string;
}

export declare namespace TrafficPolicyProfiles {
  export {
    type TrafficPolicyProfileCreateResponse as TrafficPolicyProfileCreateResponse,
    type TrafficPolicyProfileRetrieveResponse as TrafficPolicyProfileRetrieveResponse,
    type TrafficPolicyProfileUpdateResponse as TrafficPolicyProfileUpdateResponse,
    type TrafficPolicyProfileListResponse as TrafficPolicyProfileListResponse,
    type TrafficPolicyProfileDeleteResponse as TrafficPolicyProfileDeleteResponse,
    type TrafficPolicyProfileListServicesResponse as TrafficPolicyProfileListServicesResponse,
    type TrafficPolicyProfileListResponsesDefaultFlatPagination as TrafficPolicyProfileListResponsesDefaultFlatPagination,
    type TrafficPolicyProfileListServicesResponsesDefaultFlatPagination as TrafficPolicyProfileListServicesResponsesDefaultFlatPagination,
    type TrafficPolicyProfileCreateParams as TrafficPolicyProfileCreateParams,
    type TrafficPolicyProfileUpdateParams as TrafficPolicyProfileUpdateParams,
    type TrafficPolicyProfileListParams as TrafficPolicyProfileListParams,
    type TrafficPolicyProfileListServicesParams as TrafficPolicyProfileListServicesParams,
  };
}
