// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Checks the registration_status for a credential connection,
   * (`registration_status`) as well as the timestamp for the last SIP registration
   * event (`registration_status_updated_at`)
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
    ip_address?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was last updated.
     */
    last_registration?: string;

    /**
     * The port of the SIP connection
     */
    port?: number;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The user name of the SIP connection
     */
    sip_username?: string;

    /**
     * The current registration status of your SIP connection
     */
    status?: 'Not Applicable' | 'Not Registered' | 'Failed' | 'Expired' | 'Registered' | 'Unregistered';

    /**
     * The protocol of the SIP connection
     */
    transport?: string;

    /**
     * The user agent of the SIP connection
     */
    user_agent?: string;
  }
}

export declare namespace Actions {
  export { type ActionCheckRegistrationStatusResponse as ActionCheckRegistrationStatusResponse };
}
