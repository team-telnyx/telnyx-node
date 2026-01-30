// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GlobalIPAssignmentsAPI from './global-ip-assignments';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GlobalIPAssignments extends APIResource {
  /**
   * Create a Global IP assignment.
   */
  create(
    body: GlobalIPAssignmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentCreateResponse> {
    return this._client.post('/global_ip_assignments', { body, ...options });
  }

  /**
   * Retrieve a Global IP assignment.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GlobalIPAssignmentRetrieveResponse> {
    return this._client.get(path`/global_ip_assignments/${id}`, options);
  }

  /**
   * Update a Global IP assignment.
   */
  update(
    globalIPAssignmentID: string,
    params: GlobalIPAssignmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalIPAssignmentUpdateResponse> {
    const { globalIpAssignmentUpdateRequest } = params;
    return this._client.patch(path`/global_ip_assignments/${globalIPAssignmentID}`, {
      body: globalIpAssignmentUpdateRequest,
      ...options,
    });
  }

  /**
   * List all Global IP assignments.
   */
  list(
    query: GlobalIPAssignmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GlobalIPAssignmentsDefaultFlatPagination, GlobalIPAssignment> {
    return this._client.getAPIList('/global_ip_assignments', DefaultFlatPagination<GlobalIPAssignment>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a Global IP assignment.
   */
  delete(id: string, options?: RequestOptions): APIPromise<GlobalIPAssignmentDeleteResponse> {
    return this._client.delete(path`/global_ip_assignments/${id}`, options);
  }
}

export type GlobalIPAssignmentsDefaultFlatPagination = DefaultFlatPagination<GlobalIPAssignment>;

export interface GlobalIPAssignment {
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

export interface GlobalIPAssignmentDeleteResponse {
  data?: GlobalIPAssignment;
}

export interface GlobalIPAssignmentCreateParams {}

export interface GlobalIPAssignmentUpdateParams {
  globalIpAssignmentUpdateRequest: GlobalIPAssignmentUpdateParams.GlobalIPAssignmentUpdateRequest;
}

export namespace GlobalIPAssignmentUpdateParams {
  export interface GlobalIPAssignmentUpdateRequest extends GlobalIPAssignmentsAPI.GlobalIPAssignment {}
}

export interface GlobalIPAssignmentListParams extends DefaultFlatPaginationParams {}

export declare namespace GlobalIPAssignments {
  export {
    type GlobalIPAssignment as GlobalIPAssignment,
    type Record as Record,
    type GlobalIPAssignmentCreateResponse as GlobalIPAssignmentCreateResponse,
    type GlobalIPAssignmentRetrieveResponse as GlobalIPAssignmentRetrieveResponse,
    type GlobalIPAssignmentUpdateResponse as GlobalIPAssignmentUpdateResponse,
    type GlobalIPAssignmentDeleteResponse as GlobalIPAssignmentDeleteResponse,
    type GlobalIPAssignmentsDefaultFlatPagination as GlobalIPAssignmentsDefaultFlatPagination,
    type GlobalIPAssignmentCreateParams as GlobalIPAssignmentCreateParams,
    type GlobalIPAssignmentUpdateParams as GlobalIPAssignmentUpdateParams,
    type GlobalIPAssignmentListParams as GlobalIPAssignmentListParams,
  };
}
