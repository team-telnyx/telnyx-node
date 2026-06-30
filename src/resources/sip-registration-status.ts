// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * UAC connection operations
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
   * Identifier of the connection associated with the credential.
   */
  connection_id?: string;

  /**
   * Human-readable connection name.
   */
  connection_name?: string;

  /**
   * The credential type that was looked up.
   */
  credential_type?: 'uac_external_credential' | 'telephony_credential';

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
   * Detailed registration information reported by the registrar. The populated
   * fields depend on `credential_type`.
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
   * Detailed registration information reported by the registrar. The populated
   * fields depend on `credential_type`.
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
     * Timestamp when the registration row was last modified (telephony_credential).
     */
    last_modified?: string;

    /**
     * Unix timestamp of the next scheduled registration action.
     */
    next_action_at?: number;

    /**
     * Registrar node handling the registration (telephony_credential).
     */
    node?: string;

    /**
     * SIP URI user@host of the registered contact.
     */
    sip_uri_user_host?: string;

    /**
     * Transport used for the registration, e.g. UDP/TCP/TLS (telephony_credential).
     */
    transport?: string;

    /**
     * IP address of the registered user agent (telephony_credential).
     */
    ua_ip?: string;

    /**
     * Port of the registered user agent (telephony_credential).
     */
    ua_port?: number;

    /**
     * Registration uptime reported by the registrar.
     */
    uptime?: number;
  }
}

export interface SipRegistrationStatusRetrieveParams {
  /**
   * The kind of credential to look up. `uac_external_credential` is keyed by
   * `connection_id`; `telephony_credential` is keyed by `username`.
   */
  credential_type: 'uac_external_credential' | 'telephony_credential';

  /**
   * Identifier of the UAC connection to look up. Required when `credential_type` is
   * `uac_external_credential`.
   */
  connection_id?: string;

  /**
   * SIP username of the telephony credential to look up. Required when
   * `credential_type` is `telephony_credential`.
   */
  username?: string;
}

export declare namespace SipRegistrationStatus {
  export {
    type SipRegistrationStatusRetrieveResponse as SipRegistrationStatusRetrieveResponse,
    type SipRegistrationStatusRetrieveParams as SipRegistrationStatusRetrieveParams,
  };
}
