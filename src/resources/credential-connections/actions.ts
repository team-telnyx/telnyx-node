// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Credential connection operations
 */
export class Actions extends APIResource {
  /**
   * Returns the live SIP registration status for a credential connection. Reports
   * whether the endpoint is currently registered (`status`) and the timestamp of the
   * last SIP registration event (`last_registration`).
   *
   * @example
   * ```ts
   * const response =
   *   await client.credentialConnections.actions.checkRegistrationStatus(
   *     'id',
   *   );
   * ```
   */
  checkRegistrationStatus(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ActionCheckRegistrationStatusResponse> {
    return this._client.post(path`/credential_connections/${id}/actions/check_registration_status`, options);
  }
}

export interface ActionCheckRegistrationStatusResponse {
  data?: ActionCheckRegistrationStatusResponse.Data;
}

export namespace ActionCheckRegistrationStatusResponse {
  export interface Data {
    /**
     * The ip used during the SIP connection
     */
    ip_address?: string | null;

    /**
     * ISO 8601 formatted date indicating when the resource was last updated.
     */
    last_registration?: string | null;

    /**
     * The port of the SIP connection
     */
    port?: number | null;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The user name of the SIP connection
     */
    sip_username?: string | null;

    /**
     * The current registration status of your SIP connection
     */
    status?: 'Not Applicable' | 'Not Registered' | 'Failed' | 'Expired' | 'Registered' | 'Unregistered';

    /**
     * The protocol of the SIP connection
     */
    transport?: string | null;

    /**
     * The user agent of the SIP connection
     */
    user_agent?: string | null;
  }
}

export declare namespace Actions {
  export { type ActionCheckRegistrationStatusResponse as ActionCheckRegistrationStatusResponse };
}
