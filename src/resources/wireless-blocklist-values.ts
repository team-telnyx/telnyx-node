// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Wireless Blocklists operations
 */
export class WirelessBlocklistValues extends APIResource {
  /**
   * Retrieve all wireless blocklist values for a given blocklist type. The request
   * returns `422` when `type` is missing or invalid.
   */
  list(
    query: WirelessBlocklistValueListParams,
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistValueListResponse> {
    return this._client.get('/wireless_blocklist_values', { query, ...options });
  }
}

export interface WirelessBlocklistValueListResponse {
  data:
    | Array<WirelessBlocklistValueListResponse.Country>
    | Array<WirelessBlocklistValueListResponse.Mcc>
    | Array<WirelessBlocklistValueListResponse.Plmn>;
}

export namespace WirelessBlocklistValueListResponse {
  export interface Country {
    /**
     * ISO 3166-1 Alpha-2 Country Code.
     */
    country_code: string;
  }

  export interface Mcc {
    /**
     * Mobile Country Code.
     */
    mcc: string;
  }

  export interface Plmn {
    /**
     * Public land mobile network code (MCC + MNC).
     */
    plmn: string;
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
