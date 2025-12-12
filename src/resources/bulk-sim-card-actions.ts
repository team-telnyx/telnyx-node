// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BulkSimCardActions extends APIResource {
  /**
   * This API fetches information about a bulk SIM card action. A bulk SIM card
   * action contains details about a collection of individual SIM card actions.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BulkSimCardActionRetrieveResponse> {
    return this._client.get(path`/bulk_sim_card_actions/${id}`, options);
  }

  /**
   * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card
   * action contains details about a collection of individual SIM card actions.
   */
  list(
    query: BulkSimCardActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BulkSimCardActionListResponsesDefaultFlatPagination, BulkSimCardActionListResponse> {
    return this._client.getAPIList(
      '/bulk_sim_card_actions',
      DefaultFlatPagination<BulkSimCardActionListResponse>,
      { query, ...options },
    );
  }
}

export type BulkSimCardActionListResponsesDefaultFlatPagination =
  DefaultFlatPagination<BulkSimCardActionListResponse>;

export interface BulkSimCardActionRetrieveResponse {
  data?: BulkSimCardActionRetrieveResponse.Data;
}

export namespace BulkSimCardActionRetrieveResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * The operation type. It can be one of the following: <br/>
     *
     * <ul>
     * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card.</li>
     * </ul>
     */
    action_type?: 'bulk_set_public_ips';

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    record_type?: string;

    /**
     * A JSON object representation of the bulk action payload.
     */
    settings?: { [key: string]: unknown };

    sim_card_actions_summary?: Array<Data.SimCardActionsSummary>;

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface SimCardActionsSummary {
      count?: number;

      status?: 'in-progress' | 'completed' | 'failed' | 'interrupted';
    }
  }
}

export interface BulkSimCardActionListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The operation type. It can be one of the following: <br/>
   *
   * <ul>
   * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card.</li>
   * </ul>
   */
  action_type?: 'bulk_set_public_ips';

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * A JSON object representation of the bulk action payload.
   */
  settings?: { [key: string]: unknown };

  sim_card_actions_summary?: Array<BulkSimCardActionListResponse.SimCardActionsSummary>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace BulkSimCardActionListResponse {
  export interface SimCardActionsSummary {
    count?: number;

    status?: 'in-progress' | 'completed' | 'failed' | 'interrupted';
  }
}

export interface BulkSimCardActionListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by action type.
   */
  'filter[action_type]'?: 'bulk_set_public_ips';
}

export declare namespace BulkSimCardActions {
  export {
    type BulkSimCardActionRetrieveResponse as BulkSimCardActionRetrieveResponse,
    type BulkSimCardActionListResponse as BulkSimCardActionListResponse,
    type BulkSimCardActionListResponsesDefaultFlatPagination as BulkSimCardActionListResponsesDefaultFlatPagination,
    type BulkSimCardActionListParams as BulkSimCardActionListParams,
  };
}
