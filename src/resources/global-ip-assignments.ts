// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as NetworksAPI from './networks/networks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GlobalIPAssignments extends APIResource {
  /**
   * Create a Global IP assignment.
   *
   * @example
   * ```ts
   * const globalIPAssignment =
   *   await client.globalIPAssignments.create();
   * ```
   */
  create(
    body: GlobalIPAssignmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentCreateResponse> {
    return this._client.post('/global_ip_assignments', { body, ...options });
  }

  /**
   * Retrieve a Global IP assignment.
   *
   * @example
   * ```ts
   * const globalIPAssignment =
   *   await client.globalIPAssignments.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GlobalIPAssignmentRetrieveResponse> {
    return this._client.get(path`/global_ip_assignments/${id}`, options);
  }

  /**
   * Update a Global IP assignment.
   *
   * @example
   * ```ts
   * const globalIPAssignment =
   *   await client.globalIPAssignments.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { body: {} },
   *   );
   * ```
   */
  update(
    id: string,
    params: GlobalIPAssignmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentUpdateResponse> {
    const { body } = params;
    return this._client.patch(path`/global_ip_assignments/${id}`, { body: body, ...options });
  }

  /**
   * List all Global IP assignments.
   *
   * @example
   * ```ts
   * const globalIPAssignments =
   *   await client.globalIPAssignments.list();
   * ```
   */
  list(
    query: GlobalIPAssignmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentListResponse> {
    return this._client.get('/global_ip_assignments', { query, ...options });
  }

  /**
   * Delete a Global IP assignment.
   *
   * @example
   * ```ts
   * const globalIPAssignment =
   *   await client.globalIPAssignments.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<GlobalIPAssignmentDeleteResponse> {
    return this._client.delete(path`/global_ip_assignments/${id}`, options);
  }
}

export interface GlobalIPAssignment extends Record {
  /**
   * Global IP ID.
   */
  global_ip_id?: string;

  /**
   * Status of BGP announcement.
   */
  is_announced?: boolean;

  /**
   * Wireguard peer is connected.
   */
  is_connected?: boolean;

  /**
   * Enable/disable BGP announcement.
   */
  is_in_maintenance?: boolean;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The current status of the interface deployment.
   */
  status?: NetworksAPI.InterfaceStatus;

  /**
   * Wireguard peer ID.
   */
  wireguard_peer_id?: string;
}

export interface Record {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface GlobalIPAssignmentCreateResponse {
  data?: GlobalIPAssignment;
}

export interface GlobalIPAssignmentRetrieveResponse {
  data?: GlobalIPAssignment;
}

export interface GlobalIPAssignmentUpdateResponse {
  data?: GlobalIPAssignment;
}

export interface GlobalIPAssignmentListResponse {
  data?: Array<GlobalIPAssignment>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface GlobalIPAssignmentDeleteResponse {
  data?: GlobalIPAssignment;
}

export interface GlobalIPAssignmentCreateParams {
  /**
   * Global IP ID.
   */
  global_ip_id?: string;

  /**
   * Enable/disable BGP announcement.
   */
  is_in_maintenance?: boolean;

  /**
   * Wireguard peer ID.
   */
  wireguard_peer_id?: string;
}

export interface GlobalIPAssignmentUpdateParams {
  body: GlobalIPAssignmentUpdateParams.Body;
}

export namespace GlobalIPAssignmentUpdateParams {
  export interface Body extends GlobalIPAssignmentsAPI.GlobalIPAssignment {}
}

export interface GlobalIPAssignmentListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: GlobalIPAssignmentListParams.Page;
}

export namespace GlobalIPAssignmentListParams {
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

export declare namespace GlobalIPAssignments {
  export {
    type GlobalIPAssignment as GlobalIPAssignment,
    type Record as Record,
    type GlobalIPAssignmentCreateResponse as GlobalIPAssignmentCreateResponse,
    type GlobalIPAssignmentRetrieveResponse as GlobalIPAssignmentRetrieveResponse,
    type GlobalIPAssignmentUpdateResponse as GlobalIPAssignmentUpdateResponse,
    type GlobalIPAssignmentListResponse as GlobalIPAssignmentListResponse,
    type GlobalIPAssignmentDeleteResponse as GlobalIPAssignmentDeleteResponse,
    type GlobalIPAssignmentCreateParams as GlobalIPAssignmentCreateParams,
    type GlobalIPAssignmentUpdateParams as GlobalIPAssignmentUpdateParams,
    type GlobalIPAssignmentListParams as GlobalIPAssignmentListParams,
  };
}
