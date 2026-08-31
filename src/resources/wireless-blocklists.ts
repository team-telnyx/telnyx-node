// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Wireless Blocklists operations
 */
export class WirelessBlocklists extends APIResource {
  /**
   * Get all Wireless Blocklists belonging to the user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const wirelessWirelessBlocklist of client.wirelessBlocklists.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WirelessBlocklistListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WirelessWirelessBlocklistsDefaultFlatPagination, WirelessWirelessBlocklist> {
    return this._client.getAPIList('/wireless_blocklists', DefaultFlatPagination<WirelessWirelessBlocklist>, {
      query,
      ...options,
    });
  }

  /**
   * Updates the specified wireless blocklist. The update is processed
   * asynchronously, so the request is accepted and completes in the background.
   *
   * @example
   * ```ts
   * const wirelessBlocklist =
   *   await client.wirelessBlocklists.update(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  update(
    id: string,
    body: WirelessBlocklistUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistUpdateResponse> {
    return this._client.patch(path`/wireless_blocklists/${id}`, { body, ...options });
  }

  /**
   * Create a Wireless Blocklist to prevent SIMs from connecting to certain networks.
   *
   * @example
   * ```ts
   * const wirelessBlocklist =
   *   await client.wirelessBlocklists.create({
   *     name: 'My Wireless Blocklist',
   *     type: 'country',
   *     values: ['CA', 'US'],
   *   });
   * ```
   */
  create(
    body: WirelessBlocklistCreateParams,
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistCreateResponse> {
    return this._client.post('/wireless_blocklists', { body, ...options });
  }

  /**
   * Permanently deletes the specified wireless blocklist from your account. The
   * request returns `422` when the wireless blocklist is assigned to a SIM Card
   * Group.
   *
   * @example
   * ```ts
   * await client.wirelessBlocklists.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/wireless_blocklists/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve information about a Wireless Blocklist.
   *
   * @example
   * ```ts
   * const wirelessBlocklist =
   *   await client.wirelessBlocklists.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WirelessBlocklistRetrieveResponse> {
    return this._client.get(path`/wireless_blocklists/${id}`, options);
  }
}

export type WirelessWirelessBlocklistsDefaultFlatPagination =
  DefaultFlatPagination<WirelessWirelessBlocklist>;

export interface WirelessBlocklist {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The wireless blocklist name.
   */
  name?: string;

  record_type?: string;

  /**
   * The type of the wireless blocklist.
   */
  type?: 'country' | 'mcc' | 'plmn';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Values to block. The values here depend on the `type` of Wireless Blocklist.
   */
  values?: Array<string>;
}

export interface WirelessWirelessBlocklist {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The wireless blocklist name.
   */
  name?: string;

  /**
   * The type of the wireless blocklist.
   */
  type?: 'country' | 'mcc' | 'plmn';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Values to block. The values here depend on the `type` of Wireless Blocklist.
   */
  values?: Array<string>;
}

export interface WirelessBlocklistCreateResponse {
  data?: WirelessWirelessBlocklist;
}

export interface WirelessBlocklistRetrieveResponse {
  data?: WirelessWirelessBlocklist;
}

export interface WirelessBlocklistUpdateResponse {
  data?: WirelessWirelessBlocklist;
}

export interface WirelessBlocklistListParams extends DefaultFlatPaginationParams {
  /**
   * The name of the Wireless Blocklist.
   */
  'filter[name]'?: string;

  /**
   * When the Private Wireless Gateway was last updated.
   */
  'filter[type]'?: string;
}

export interface WirelessBlocklistUpdateParams {
  /**
   * The name of the Wireless Blocklist.
   */
  name?: string;

  /**
   * Values to block. The values here depend on the `type` of Wireless Blocklist.
   */
  values?: Array<string>;
}

export interface WirelessBlocklistCreateParams {
  /**
   * The name of the Wireless Blocklist.
   */
  name: string;

  /**
   * The type of wireless blocklist.
   */
  type: 'country' | 'mcc' | 'plmn';

  /**
   * Values to block. The values here depend on the `type` of Wireless Blocklist.
   */
  values: Array<string>;
}

export declare namespace WirelessBlocklists {
  export {
    type WirelessBlocklist as WirelessBlocklist,
    type WirelessWirelessBlocklist as WirelessWirelessBlocklist,
    type WirelessBlocklistCreateResponse as WirelessBlocklistCreateResponse,
    type WirelessBlocklistRetrieveResponse as WirelessBlocklistRetrieveResponse,
    type WirelessBlocklistUpdateResponse as WirelessBlocklistUpdateResponse,
    type WirelessWirelessBlocklistsDefaultFlatPagination as WirelessWirelessBlocklistsDefaultFlatPagination,
    type WirelessBlocklistListParams as WirelessBlocklistListParams,
    type WirelessBlocklistUpdateParams as WirelessBlocklistUpdateParams,
    type WirelessBlocklistCreateParams as WirelessBlocklistCreateParams,
  };
}
