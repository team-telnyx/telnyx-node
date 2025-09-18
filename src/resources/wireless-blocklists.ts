// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WirelessBlocklists extends APIResource {
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

  /**
   * Update a Wireless Blocklist.
   *
   * @example
   * ```ts
   * const wirelessBlocklist =
   *   await client.wirelessBlocklists.update();
   * ```
   */
  update(
    body: WirelessBlocklistUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistUpdateResponse> {
    return this._client.patch('/wireless_blocklists', { body, ...options });
  }

  /**
   * Get all Wireless Blocklists belonging to the user.
   *
   * @example
   * ```ts
   * const wirelessBlocklists =
   *   await client.wirelessBlocklists.list();
   * ```
   */
  list(
    query: WirelessBlocklistListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WirelessBlocklistListResponse> {
    return this._client.get('/wireless_blocklists', { query, ...options });
  }

  /**
   * Deletes the Wireless Blocklist.
   *
   * @example
   * ```ts
   * const wirelessBlocklist =
   *   await client.wirelessBlocklists.delete(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WirelessBlocklistDeleteResponse> {
    return this._client.delete(path`/wireless_blocklists/${id}`, options);
  }
}

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

export interface WirelessBlocklistCreateResponse {
  data?: WirelessBlocklist;
}

export interface WirelessBlocklistRetrieveResponse {
  data?: WirelessBlocklist;
}

export interface WirelessBlocklistUpdateResponse {
  data?: WirelessBlocklist;
}

export interface WirelessBlocklistListResponse {
  data?: Array<WirelessBlocklist>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface WirelessBlocklistDeleteResponse {
  data?: WirelessBlocklist;
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

export interface WirelessBlocklistUpdateParams {
  /**
   * The name of the Wireless Blocklist.
   */
  name?: string;

  /**
   * The type of wireless blocklist.
   */
  type?: 'country' | 'mcc' | 'plmn';

  /**
   * Values to block. The values here depend on the `type` of Wireless Blocklist.
   */
  values?: Array<string>;
}

export interface WirelessBlocklistListParams {
  /**
   * The name of the Wireless Blocklist.
   */
  'filter[name]'?: string;

  /**
   * When the Private Wireless Gateway was last updated.
   */
  'filter[type]'?: string;

  /**
   * Values to filter on (inclusive).
   */
  'filter[values]'?: string;

  /**
   * The page number to load.
   */
  'page[number]'?: number;

  /**
   * The size of the page.
   */
  'page[size]'?: number;
}

export declare namespace WirelessBlocklists {
  export {
    type WirelessBlocklist as WirelessBlocklist,
    type WirelessBlocklistCreateResponse as WirelessBlocklistCreateResponse,
    type WirelessBlocklistRetrieveResponse as WirelessBlocklistRetrieveResponse,
    type WirelessBlocklistUpdateResponse as WirelessBlocklistUpdateResponse,
    type WirelessBlocklistListResponse as WirelessBlocklistListResponse,
    type WirelessBlocklistDeleteResponse as WirelessBlocklistDeleteResponse,
    type WirelessBlocklistCreateParams as WirelessBlocklistCreateParams,
    type WirelessBlocklistUpdateParams as WirelessBlocklistUpdateParams,
    type WirelessBlocklistListParams as WirelessBlocklistListParams,
  };
}
