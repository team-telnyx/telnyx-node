// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Whatsapp business accounts
 */
export class Settings extends APIResource {
  /**
   * Get WABA settings
   *
   * @example
   * ```ts
   * const setting =
   *   await client.whatsapp.businessAccounts.settings.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp/business_accounts/${id}/settings`, options);
  }

  /**
   * Update WABA settings
   *
   * @example
   * ```ts
   * const setting =
   *   await client.whatsapp.businessAccounts.settings.update(
   *     'id',
   *   );
   * ```
   */
  update(id: string, body: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp/business_accounts/${id}/settings`, { body, ...options });
  }
}

export interface WabaSettings {
  /**
   * Internal ID of Whatsapp business account
   */
  id?: string;

  name?: string;

  record_type?: string;

  timezone?: string;

  updated_at?: string;

  /**
   * Enable/disable receiving Whatsapp events
   */
  webhook_enabled?: boolean;

  webhook_events?: Array<string>;

  /**
   * Failover URL to receive Whatsapp events
   */
  webhook_failover_url?: string;

  /**
   * URL to receive Whatsapp events
   */
  webhook_url?: string;
}

export interface SettingRetrieveResponse {
  data?: WabaSettings;
}

export interface SettingUpdateResponse {
  data?: WabaSettings;
}

export interface SettingUpdateParams {
  name?: string;

  /**
   * IANA timezone identifier
   */
  timezone?: string;

  /**
   * Enable/disable receiving Whatsapp events
   */
  webhook_enabled?: boolean;

  webhook_events?: Array<string>;

  /**
   * Failover URL to send Whatsapp events
   */
  webhook_failover_url?: string;

  /**
   * URL to send Whatsapp events
   */
  webhook_url?: string;
}

export declare namespace Settings {
  export {
    type WabaSettings as WabaSettings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams
  };
}
