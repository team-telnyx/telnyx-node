// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OtaUpdates extends APIResource {
  /**
   * This API returns the details of an Over the Air (OTA) update.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OtaUpdateRetrieveResponse> {
    return this._client.get(path`/ota_updates/${id}`, options);
  }

  /**
   * List OTA updates
   */
  list(
    query: OtaUpdateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OtaUpdateListResponsesDefaultFlatPagination, OtaUpdateListResponse> {
    return this._client.getAPIList('/ota_updates', DefaultFlatPagination<OtaUpdateListResponse>, {
      query,
      ...options,
    });
  }
}

export type OtaUpdateListResponsesDefaultFlatPagination = DefaultFlatPagination<OtaUpdateListResponse>;

export interface OtaUpdateRetrieveResponse {
  /**
   * This object represents an Over the Air (OTA) update request. It allows tracking
   * the current status of a operation that apply settings in a particular SIM card.
   * <br/><br/>
   */
  data?: OtaUpdateRetrieveResponse.Data;
}

export namespace OtaUpdateRetrieveResponse {
  /**
   * This object represents an Over the Air (OTA) update request. It allows tracking
   * the current status of a operation that apply settings in a particular SIM card.
   * <br/><br/>
   */
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;

    record_type?: string;

    /**
     * A JSON object representation of the operation. The information present here will
     * relate directly to the source of the OTA request.
     */
    settings?: Data.Settings;

    /**
     * The identification UUID of the related SIM card resource.
     */
    sim_card_id?: string;

    status?: 'in-progress' | 'completed' | 'failed';

    /**
     * Represents the type of the operation requested. This will relate directly to the
     * source of the request.
     */
    type?: 'sim_card_network_preferences';

    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * A JSON object representation of the operation. The information present here will
     * relate directly to the source of the OTA request.
     */
    export interface Settings {
      /**
       * A list of mobile network operators and the priority that should be applied when
       * the SIM is connecting to the network.
       */
      mobile_network_operators_preferences?: Array<Settings.MobileNetworkOperatorsPreference>;
    }

    export namespace Settings {
      export interface MobileNetworkOperatorsPreference {
        /**
         * The mobile network operator resource identification UUID.
         */
        mobile_network_operator_id?: string;

        /**
         * The mobile network operator resource name.
         */
        mobile_network_operator_name?: string;

        /**
         * It determines what is the priority of a specific network operator that should be
         * assumed by a SIM card when connecting to a network. The highest priority is 0,
         * the second highest is 1 and so on.
         */
        priority?: number;
      }
    }
  }
}

/**
 * This object represents an Over the Air (OTA) update request. It allows tracking
 * the current status of a operation that apply settings in a particular SIM card.
 * <br/><br/>
 */
export interface OtaUpdateListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  record_type?: string;

  /**
   * The identification UUID of the related SIM card resource.
   */
  sim_card_id?: string;

  status?: 'in-progress' | 'completed' | 'failed';

  /**
   * Represents the type of the operation requested. This will relate directly to the
   * source of the request.
   */
  type?: 'sim_card_network_preferences';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface OtaUpdateListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for OTA updates (deepObject style). Originally:
   * filter[status], filter[sim_card_id], filter[type]
   */
  filter?: OtaUpdateListParams.Filter;
}

export namespace OtaUpdateListParams {
  /**
   * Consolidated filter parameter for OTA updates (deepObject style). Originally:
   * filter[status], filter[sim_card_id], filter[type]
   */
  export interface Filter {
    /**
     * The SIM card identification UUID.
     */
    sim_card_id?: string;

    /**
     * Filter by a specific status of the resource's lifecycle.
     */
    status?: 'in-progress' | 'completed' | 'failed';

    /**
     * Filter by type.
     */
    type?: 'sim_card_network_preferences';
  }
}

export declare namespace OtaUpdates {
  export {
    type OtaUpdateRetrieveResponse as OtaUpdateRetrieveResponse,
    type OtaUpdateListResponse as OtaUpdateListResponse,
    type OtaUpdateListResponsesDefaultFlatPagination as OtaUpdateListResponsesDefaultFlatPagination,
    type OtaUpdateListParams as OtaUpdateListParams,
  };
}
