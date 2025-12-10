// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as PortingOrdersAPI from './porting-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActivationJobs extends APIResource {
  /**
   * Returns a porting activation job.
   *
   * @example
   * ```ts
   * const activationJob =
   *   await client.portingOrders.activationJobs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    activationJobID: string,
    params: ActivationJobRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActivationJobRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/porting_orders/${id}/activation_jobs/${activationJobID}`, options);
  }

  /**
   * Updates the activation time of a porting activation job.
   *
   * @example
   * ```ts
   * const activationJob =
   *   await client.portingOrders.activationJobs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  update(
    activationJobID: string,
    params: ActivationJobUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ActivationJobUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/porting_orders/${id}/activation_jobs/${activationJobID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of your porting activation jobs.
   *
   * @example
   * ```ts
   * const activationJobs =
   *   await client.portingOrders.activationJobs.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    id: string,
    query: ActivationJobListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivationJobListResponse> {
    return this._client.get(path`/porting_orders/${id}/activation_jobs`, { query, ...options });
  }
}

export interface ActivationJobRetrieveResponse {
  data?: PortingOrdersAPI.PortingOrdersActivationJob;
}

export interface ActivationJobUpdateResponse {
  data?: PortingOrdersAPI.PortingOrdersActivationJob;
}

export interface ActivationJobListResponse {
  data?: Array<PortingOrdersAPI.PortingOrdersActivationJob>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface ActivationJobRetrieveParams {
  /**
   * Porting Order id
   */
  id: string;
}

export interface ActivationJobUpdateParams {
  /**
   * Path param: Porting Order id
   */
  id: string;

  /**
   * Body param: The desired activation time. The activation time should be between
   * any of the activation windows.
   */
  activate_at?: string;
}

export interface ActivationJobListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: ActivationJobListParams.Page;
}

export namespace ActivationJobListParams {
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

export declare namespace ActivationJobs {
  export {
    type ActivationJobRetrieveResponse as ActivationJobRetrieveResponse,
    type ActivationJobUpdateResponse as ActivationJobUpdateResponse,
    type ActivationJobListResponse as ActivationJobListResponse,
    type ActivationJobRetrieveParams as ActivationJobRetrieveParams,
    type ActivationJobUpdateParams as ActivationJobUpdateParams,
    type ActivationJobListParams as ActivationJobListParams,
  };
}
