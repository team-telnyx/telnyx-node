// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BillingGroups extends APIResource {
  /**
   * Create a billing group
   *
   * @example
   * ```ts
   * const billingGroup = await client.billingGroups.create({
   *   name: 'string',
   * });
   * ```
   */
  create(body: BillingGroupCreateParams, options?: RequestOptions): APIPromise<BillingGroupCreateResponse> {
    return this._client.post('/billing_groups', { body, ...options });
  }

  /**
   * Get a billing group
   *
   * @example
   * ```ts
   * const billingGroup = await client.billingGroups.retrieve(
   *   'f5586561-8ff0-4291-a0ac-84fe544797bd',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BillingGroupRetrieveResponse> {
    return this._client.get(path`/billing_groups/${id}`, options);
  }

  /**
   * Update a billing group
   *
   * @example
   * ```ts
   * const billingGroup = await client.billingGroups.update(
   *   'f5586561-8ff0-4291-a0ac-84fe544797bd',
   *   { name: 'string' },
   * );
   * ```
   */
  update(
    id: string,
    body: BillingGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BillingGroupUpdateResponse> {
    return this._client.patch(path`/billing_groups/${id}`, { body, ...options });
  }

  /**
   * List all billing groups
   *
   * @example
   * ```ts
   * const billingGroups = await client.billingGroups.list();
   * ```
   */
  list(
    query: BillingGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingGroupListResponse> {
    return this._client.get('/billing_groups', { query, ...options });
  }

  /**
   * Delete a billing group
   *
   * @example
   * ```ts
   * const billingGroup = await client.billingGroups.delete(
   *   'f5586561-8ff0-4291-a0ac-84fe544797bd',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<BillingGroupDeleteResponse> {
    return this._client.delete(path`/billing_groups/${id}`, options);
  }
}

export interface BillingGroup {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was removed.
   */
  deleted_at?: string | null;

  /**
   * A user-specified name for the billing group
   */
  name?: string;

  /**
   * Identifies the organization that owns the resource.
   */
  organization_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'billing_group';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface BillingGroupCreateResponse {
  data?: BillingGroup;
}

export interface BillingGroupRetrieveResponse {
  data?: BillingGroup;
}

export interface BillingGroupUpdateResponse {
  data?: BillingGroup;
}

export interface BillingGroupListResponse {
  data?: Array<BillingGroup>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface BillingGroupDeleteResponse {
  data?: BillingGroup;
}

export interface BillingGroupCreateParams {
  /**
   * A name for the billing group
   */
  name?: string;
}

export interface BillingGroupUpdateParams {
  /**
   * A name for the billing group
   */
  name?: string;
}

export interface BillingGroupListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: BillingGroupListParams.Page;
}

export namespace BillingGroupListParams {
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

export declare namespace BillingGroups {
  export {
    type BillingGroup as BillingGroup,
    type BillingGroupCreateResponse as BillingGroupCreateResponse,
    type BillingGroupRetrieveResponse as BillingGroupRetrieveResponse,
    type BillingGroupUpdateResponse as BillingGroupUpdateResponse,
    type BillingGroupListResponse as BillingGroupListResponse,
    type BillingGroupDeleteResponse as BillingGroupDeleteResponse,
    type BillingGroupCreateParams as BillingGroupCreateParams,
    type BillingGroupUpdateParams as BillingGroupUpdateParams,
    type BillingGroupListParams as BillingGroupListParams,
  };
}
