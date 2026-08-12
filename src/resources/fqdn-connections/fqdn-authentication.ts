// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * FQDN connection operations
 */
export class FqdnAuthenticationResource extends APIResource {
  /**
   * Retrieves the details of an existing FQDN authentication strategy for a specific
   * FQDN connection.
   *
   * @example
   * ```ts
   * const fqdnAuthentications =
   *   await client.fqdnConnections.fqdnAuthentication.list(
   *     'fqdn_connection_id',
   *   );
   * ```
   */
  list(fqdnConnectionID: string, options?: RequestOptions): APIPromise<FqdnAuthenticationListResponse> {
    return this._client.get(path`/fqdn_connections/${fqdnConnectionID}/fqdn_authentication`, options);
  }

  /**
   * Updates the FQDN authentication strategy for a specific FQDN connection.
   *
   * @example
   * ```ts
   * const response =
   *   await client.fqdnConnections.fqdnAuthentication.patchAll(
   *     'fqdn_connection_id',
   *   );
   * ```
   */
  patchAll(
    fqdnConnectionID: string,
    body: FqdnAuthenticationPatchAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FqdnAuthenticationPatchAllResponse> {
    return this._client.patch(path`/fqdn_connections/${fqdnConnectionID}/fqdn_authentication`, {
      body,
      ...options,
    });
  }
}

export interface FqdnAuthentication {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The ID of the FQDN connection this authentication strategy belongs to.
   */
  connection_id?: string;

  /**
   * The failover webhook URL.
   */
  failover_url?: string;

  /**
   * The outbound authentication type.
   */
  fqdn_outbound_authentication?: 'ip-authentication' | 'credential-authentication';

  /**
   * The IP authentication method.
   */
  ip_authentication_method?: 'token' | 'p-charge-info';

  /**
   * Whether the connection is a Microsoft Teams SBC.
   */
  microsoft_teams_sbc?: boolean;

  /**
   * The password for authentication.
   */
  password?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The TXT record name for Microsoft Teams SBC DNS verification.
   */
  txt_name?: string;

  /**
   * The TTL for the TXT record.
   */
  txt_ttl?: number;

  /**
   * The TXT record value for Microsoft Teams SBC DNS verification.
   */
  txt_value?: string;

  /**
   * The username for authentication.
   */
  user_name?: string;

  /**
   * The webhook URL for authentication events.
   */
  webhook_url?: string;
}

export interface FqdnAuthenticationListResponse {
  data?: FqdnAuthentication;
}

export interface FqdnAuthenticationPatchAllResponse {
  data?: FqdnAuthentication;
}

export interface FqdnAuthenticationPatchAllParams {
  /**
   * The failover webhook URL.
   */
  failover_url?: string;

  /**
   * The outbound authentication type.
   */
  fqdn_outbound_authentication?: 'ip-authentication' | 'credential-authentication';

  /**
   * The IP authentication method.
   */
  ip_authentication_method?: 'token' | 'p-charge-info';

  /**
   * The password for authentication.
   */
  password?: string;

  /**
   * The TXT record name for Microsoft Teams SBC DNS verification.
   */
  txt_name?: string;

  /**
   * The TTL for the TXT record.
   */
  txt_ttl?: number;

  /**
   * The TXT record value for Microsoft Teams SBC DNS verification.
   */
  txt_value?: string;

  /**
   * The username for authentication.
   */
  user_name?: string;

  /**
   * The webhook URL for authentication events.
   */
  webhook_url?: string;
}

export declare namespace FqdnAuthenticationResource {
  export {
    type FqdnAuthentication as FqdnAuthentication,
    type FqdnAuthenticationListResponse as FqdnAuthenticationListResponse,
    type FqdnAuthenticationPatchAllResponse as FqdnAuthenticationPatchAllResponse,
    type FqdnAuthenticationPatchAllParams as FqdnAuthenticationPatchAllParams,
  };
}
