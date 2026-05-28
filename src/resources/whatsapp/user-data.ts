// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage Whatsapp business accounts
 */
export class UserData extends APIResource {
  /**
   * Fetch Whatsapp user data
   *
   * @example
   * ```ts
   * const userData = await client.whatsapp.userData.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<UserDataRetrieveResponse> {
    return this._client.get('/v2/whatsapp/user_data', options);
  }

  /**
   * Update Whatsapp user data
   *
   * @example
   * ```ts
   * const userData = await client.whatsapp.userData.update();
   * ```
   */
  update(body: UserDataUpdateParams, options?: RequestOptions): APIPromise<UserDataUpdateResponse> {
    return this._client.patch('/v2/whatsapp/user_data', { body, ...options });
  }
}

export interface WhatsappUserData {
  created_at?: string;

  record_type?: string;

  updated_at?: string;

  /**
   * Failover URL to receive Whatsapp signup events
   */
  webhook_failover_url?: string;

  /**
   * URL to receive Whatsapp signup events
   */
  webhook_url?: string;
}

export interface UserDataRetrieveResponse {
  data?: WhatsappUserData;
}

export interface UserDataUpdateResponse {
  data?: WhatsappUserData;
}

export interface UserDataUpdateParams {
  /**
   * Failover URL to send Whatsapp signup events
   */
  webhook_failover_url?: string;

  /**
   * URL to send Whatsapp signup events
   */
  webhook_url?: string;
}

export declare namespace UserData {
  export {
    type WhatsappUserData as WhatsappUserData,
    type UserDataRetrieveResponse as UserDataRetrieveResponse,
    type UserDataUpdateResponse as UserDataUpdateResponse,
    type UserDataUpdateParams as UserDataUpdateParams,
  };
}
