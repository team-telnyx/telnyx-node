// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * View SIM card actions, their progress and timestamps using the SIM Card Actions API
 */
export class BulkSimCardActions extends APIResource {
  /**
   * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card
   * action contains details about a collection of individual SIM card actions.
   */
  list(
    query: BulkSimCardActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BulkSimCardActionDetailedsDefaultFlatPagination, BulkSimCardActionDetailed> {
    return this._client.getAPIList(
      '/bulk_sim_card_actions',
      DefaultFlatPagination<BulkSimCardActionDetailed>,
      { query, ...options },
    );
  }

  /**
   * This API fetches information about a bulk SIM card action. A bulk SIM card
   * action contains details about a collection of individual SIM card actions.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BulkSimCardActionRetrieveResponse> {
    return this._client.get(path`/bulk_sim_card_actions/${id}`, options);
  }
}

export type BulkSimCardActionDetailedsDefaultFlatPagination =
  DefaultFlatPagination<BulkSimCardActionDetailed>;

export interface BulkSimCardActionDetailed {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The action type. It can be one of the following: <br/>
   *
   * <ul>
   * <li><code>bulk_disable_voice</code> - disable voice for every SIM Card in a SIM Card Group.</li>
   * <li><code>bulk_enable_voice</code> - enable voice for every SIM Card in a SIM Card Group.</li>
   * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM Card.</li>
   * </ul>
   */
  action_type?: 'bulk_disable_voice' | 'bulk_enable_voice' | 'bulk_set_public_ips';

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * A JSON object representation of the bulk action payload.
   */
  settings?: { [key: string]: unknown };

  sim_card_actions_summary?: Array<SimCardActionsSummary>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface SimCardActionsSummary {
  count?: number;

  status?: 'in-progress' | 'completed' | 'failed' | 'interrupted';
}

export interface BulkSimCardActionRetrieveResponse {
  data?: BulkSimCardActionDetailed;
}

export interface BulkSimCardActionListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by action type.
   */
  'filter[action_type]'?: 'bulk_disable_voice' | 'bulk_enable_voice' | 'bulk_set_public_ips';
}

export declare namespace BulkSimCardActions {
  export {
    type BulkSimCardActionDetailed as BulkSimCardActionDetailed,
    type SimCardActionsSummary as SimCardActionsSummary,
    type BulkSimCardActionRetrieveResponse as BulkSimCardActionRetrieveResponse,
    type BulkSimCardActionDetailedsDefaultFlatPagination as BulkSimCardActionDetailedsDefaultFlatPagination,
    type BulkSimCardActionListParams as BulkSimCardActionListParams,
  };
}
