// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WirelessBlocklistValues extends APIResource {
  /**
   * Retrieve all wireless blocklist values for a given blocklist type.
   */
  list(
    query: WirelessBlocklistValueListParams,
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistValueListResponse> {
    return this._client.get('/wireless_blocklist_values', { query, ...options });
  }
}

export interface WirelessBlocklistValueListResponse {
  data?:
    | Array<WirelessBlocklistValueListResponse.Country>
    | Array<WirelessBlocklistValueListResponse.Mcc>
    | Array<WirelessBlocklistValueListResponse.Plmn>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace WirelessBlocklistValueListResponse {
  export interface Country {
    /**
     * ISO 3166-1 Alpha-2 Country Code.
     */
    code: string;

    /**
     * The name of the country.
     */
    name: string;
  }

  export interface Mcc {
    /**
     * Mobile Country Code.
     */
    code: string;

    /**
     * The name of the country.
     */
    name: string;
  }

  export interface Plmn {
    /**
     * Public land mobile network code (MCC + MNC).
     */
    code: string;

    /**
     * The name of the network.
     */
    name: string;
  }
}

export interface WirelessBlocklistValueListParams {
  /**
   * The Wireless Blocklist type for which to list possible values (e.g., `country`,
   * `mcc`, `plmn`).
   */
  type: 'country' | 'mcc' | 'plmn';
}

export declare namespace WirelessBlocklistValues {
  export {
    type WirelessBlocklistValueListResponse as WirelessBlocklistValueListResponse,
    type WirelessBlocklistValueListParams as WirelessBlocklistValueListParams,
  };
}
