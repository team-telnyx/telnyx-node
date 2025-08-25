// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
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
  ): APIPromise<MobileNetworkOperatorListResponse> {
    return this._client.get('/mobile_network_operators', { query, ...options });
  }
}

export interface MobileNetworkOperatorListResponse {
  data?: Array<MobileNetworkOperatorListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace MobileNetworkOperatorListResponse {
  export interface Data {
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
}

export interface MobileNetworkOperatorListParams {
  /**
   * Consolidated filter parameter for mobile network operators (deepObject style).
   * Originally: filter[name][starts_with], filter[name][contains],
   * filter[name][ends_with], filter[country_code], filter[mcc], filter[mnc],
   * filter[tadig], filter[network_preferences_enabled]
   */
  filter?: MobileNetworkOperatorListParams.Filter;

  /**
   * Consolidated pagination parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MobileNetworkOperatorListParams.Page;
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

  /**
   * Consolidated pagination parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load.
     */
    number?: number;

    /**
     * The size of the page.
     */
    size?: number;
  }
}

export declare namespace MobileNetworkOperators {
  export {
    type MobileNetworkOperatorListResponse as MobileNetworkOperatorListResponse,
    type MobileNetworkOperatorListParams as MobileNetworkOperatorListParams,
  };
}
