// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Look up the live SIP registration status of a UAC connection.
 */
export class SipRegistrationStatus extends APIResource {
  /**
   * Returns the live SIP registration state of a UAC connection: whether it is
   * currently registered, when it last registered, and the last response Telnyx
   * received from the registrar. Only `uac_external_credential` is supported today.
   */
  retrieve(
    query: SipRegistrationStatusRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SipRegistrationStatusRetrieveResponse> {
    return this._client.get('/sip_registration_status', { query, ...options });
  }
}

export interface SipRegistrationStatusRetrieveResponse {
  /**
   * Identifier of the UAC connection.
   */
  connection_id?: string;

  /**
   * Human-readable connection name.
   */
  connection_name?: string;

  /**
   * The credential type that was looked up.
   */
  credential_type?: 'uac_external_credential';

  /**
   * SIP username used for the registration.
   */
  credential_username?: string;

  /**
   * SIP response from the last registration attempt.
   */
  last_registration_response?: string;

  /**
   * True if the endpoint is currently registered.
   */
  registered?: boolean;

  /**
   * Detailed registration information reported by the registrar.
   */
  sip_registration_details?: SipRegistrationStatusRetrieveResponse.SipRegistrationDetails;

  /**
   * Human-readable registration status derived from the registrar state.
   */
  sip_registration_status?:
    | 'unregistering'
    | 'connection_disabled'
    | 'standby'
    | 'failed'
    | 'trying'
    | 'registered'
    | 'unknown';
}

export namespace SipRegistrationStatusRetrieveResponse {
  /**
   * Detailed registration information reported by the registrar.
   */
  export interface SipRegistrationDetails {
    /**
     * Number of authentication retries on the last attempt.
     */
    auth_retries?: number;

    /**
     * Unix timestamp when the current registration expires.
     */
    expires?: number;

    /**
     * Count of consecutive registration failures.
     */
    failures?: number;

    /**
     * Unix timestamp of the next scheduled registration action.
     */
    next_action_at?: number;

    /**
     * SIP URI user@host of the registered contact.
     */
    sip_uri_user_host?: string;

    /**
     * Registration uptime reported by the registrar.
     */
    uptime?: number;
  }
}

export interface SipRegistrationStatusRetrieveParams {
  /**
   * Identifier of the UAC connection to look up.
   */
  connection_id: string;

  /**
   * The kind of credential to look up. Only `uac_external_credential` is supported
   * today.
   */
  credential_type: 'uac_external_credential';
}

export declare namespace SipRegistrationStatus {
  export {
    type SipRegistrationStatusRetrieveResponse as SipRegistrationStatusRetrieveResponse,
    type SipRegistrationStatusRetrieveParams as SipRegistrationStatusRetrieveParams,
  };
}
