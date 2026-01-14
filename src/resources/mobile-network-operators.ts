// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class MobileNetworkOperators extends APIResource {
  /**
   * Telnyx has a set of GSM mobile operators partners that are available through our
   * mobile network roaming. This resource is entirely managed by Telnyx and may
   * change over time. That means that this resource won't allow any write operations
   * for it. Still, it's available so it can be used as a support resource that can
   * be related to other resources or become a configuration option.
   */
  list(
    query: MobileNetworkOperatorListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MobileNetworkOperatorListResponsesDefaultFlatPagination, MobileNetworkOperatorListResponse> {
    return this._client.getAPIList(
      '/mobile_network_operators',
      DefaultFlatPagination<MobileNetworkOperatorListResponse>,
      { query, ...options },
    );
  }
}

export type MobileNetworkOperatorListResponsesDefaultFlatPagination =
  DefaultFlatPagination<MobileNetworkOperatorListResponse>;

export interface MobileNetworkOperatorListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
   */
  country_code?: string;

  /**
   * MCC stands for Mobile Country Code. It's a three decimal digit that identifies a
   * country.<br/><br/> This code is commonly seen joined with a Mobile Network Code
   * (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land
   * Mobile Network) code.
   */
  mcc?: string;

  /**
   * MNC stands for Mobile Network Code. It's a two to three decimal digits that
   * identify a network.<br/><br/> This code is commonly seen joined with a Mobile
   * Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN
   * (Public Land Mobile Network) code.
   */
  mnc?: string;

  /**
   * The network operator name.
   */
  name?: string;

  /**
   * Indicate whether the mobile network operator can be set as preferred in the
   * Network Preferences API.
   */
  network_preferences_enabled?: boolean;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * TADIG stands for Transferred Account Data Interchange Group. The TADIG code is a
   * unique identifier for network operators in GSM mobile networks.
   */
  tadig?: string;
}

export interface MobileNetworkOperatorListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for mobile network operators (deepObject style).
   * Originally: filter[name][starts_with], filter[name][contains],
   * filter[name][ends_with], filter[country_code], filter[mcc], filter[mnc],
   * filter[tadig], filter[network_preferences_enabled]
   */
  filter?: MobileNetworkOperatorListParams.Filter;
}

export namespace MobileNetworkOperatorListParams {
  /**
   * Consolidated filter parameter for mobile network operators (deepObject style).
   * Originally: filter[name][starts_with], filter[name][contains],
   * filter[name][ends_with], filter[country_code], filter[mcc], filter[mnc],
   * filter[tadig], filter[network_preferences_enabled]
   */
  export interface Filter {
    /**
     * Filter by exact country_code.
     */
    country_code?: string;

    /**
     * Filter by exact MCC.
     */
    mcc?: string;

    /**
     * Filter by exact MNC.
     */
    mnc?: string;

    /**
     * Advanced name filtering operations
     */
    name?: Filter.Name;

    /**
     * Filter by network_preferences_enabled.
     */
    network_preferences_enabled?: boolean;

    /**
     * Filter by exact TADIG.
     */
    tadig?: string;
  }

  export namespace Filter {
    /**
     * Advanced name filtering operations
     */
    export interface Name {
      /**
       * Filter by name containing match.
       */
      contains?: string;

      /**
       * Filter by name ending with.
       */
      ends_with?: string;

      /**
       * Filter by name starting with.
       */
      starts_with?: string;
    }
  }
}

export declare namespace MobileNetworkOperators {
  export {
    type MobileNetworkOperatorListResponse as MobileNetworkOperatorListResponse,
    type MobileNetworkOperatorListResponsesDefaultFlatPagination as MobileNetworkOperatorListResponsesDefaultFlatPagination,
    type MobileNetworkOperatorListParams as MobileNetworkOperatorListParams,
  };
}
