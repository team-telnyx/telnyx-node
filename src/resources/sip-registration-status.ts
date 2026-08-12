// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * UAC connection operations
 */
export class SipRegistrationStatus extends APIResource {
  /**
   * Returns the live SIP registration status for a Telnyx endpoint: whether it is
   * currently registered, when the current registration expires, and the last
   * response Telnyx received from the registrar.
   *
   * The endpoint supports three credential types, selected with the
   * `credential_type` query parameter. Each type is keyed by a different identifier:
   *
   * | `credential_type`           | Keyed by        | Use case                                                                   |
   * | --------------------------- | --------------- | -------------------------------------------------------------------------- |
   * | `uac_external_credential`   | `connection_id` | A UAC (SIP attach) connection that registers to an external PBX.           |
   * | `telephony_credential`      | `username`      | An ephemeral, one-time-use telephony credential.                           |
   * | `sip_credential_connection` | `username`      | A traditional SIP credential connection that registers directly to Telnyx. |
   *
   * The authenticated account is taken from your API key; you can only read the
   * registration status of connections and credentials your account owns.
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
  credential_type?: 'uac_external_credential' | 'telephony_credential' | 'sip_credential_connection';

  /**
   * SIP username used for the registration.
   */
  credential_username?: string;

  /**
   * SIP response from the last registration attempt.
   */
  last_registration_response?: string | null;

  /**
   * True if the endpoint is currently registered.
   */
  registered?: boolean;

  /**
   * Detailed registration information reported by the registrar. The populated
   * fields depend on `credential_type`: UAC external credentials report
   * `auth_retries`, `uptime`, `next_action_at`, `failures`, and `sip_uri_user_host`;
   * telephony credentials and SIP credential connections report `ua_ip`, `ua_port`,
   * `transport`, and `last_modified`. All types report `expires`.
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
   * fields depend on `credential_type`: UAC external credentials report
   * `auth_retries`, `uptime`, `next_action_at`, `failures`, and `sip_uri_user_host`;
   * telephony credentials and SIP credential connections report `ua_ip`, `ua_port`,
   * `transport`, and `last_modified`. All types report `expires`.
   */
  export interface SipRegistrationDetails {
    /**
     * Number of authentication retries on the last attempt (uac_external_credential).
     */
    auth_retries?: number;

    /**
     * Unix timestamp when the current registration expires.
     */
    expires?: number;

    /**
     * Count of consecutive registration failures (uac_external_credential).
     */
    failures?: number;

    /**
     * Timestamp when the registration was last modified (telephony_credential and
     * sip_credential_connection).
     */
    last_modified?: string;

    /**
     * Unix timestamp of the next scheduled registration action
     * (uac_external_credential).
     */
    next_action_at?: number;

    /**
     * SIP URI user@host of the registered contact (uac_external_credential).
     */
    sip_uri_user_host?: string;

    /**
     * Transport used for the registration, e.g. UDP/TCP/TLS (telephony_credential and
     * sip_credential_connection).
     */
    transport?: string;

    /**
     * IP address of the registered user agent (telephony_credential and
     * sip_credential_connection).
     */
    ua_ip?: string;

    /**
     * Port of the registered user agent (telephony_credential and
     * sip_credential_connection).
     */
    ua_port?: number;

    /**
     * Registration uptime reported by the registrar (uac_external_credential).
     */
    uptime?: number;
  }
}

export interface SipRegistrationStatusRetrieveParams {
  /**
   * The kind of credential to look up. `uac_external_credential` is keyed by
   * `connection_id`; `telephony_credential` and `sip_credential_connection` are
   * keyed by `username`.
   */
  credential_type: 'uac_external_credential' | 'telephony_credential' | 'sip_credential_connection';

  /**
   * Identifier of the UAC connection to look up. Required when `credential_type` is
   * `uac_external_credential`.
   */
  connection_id?: string;

  /**
   * SIP username to look up. Required when `credential_type` is
   * `telephony_credential` or `sip_credential_connection`.
   */
  username?: string;
}

export declare namespace SipRegistrationStatus {
  export {
    type SipRegistrationStatusRetrieveResponse as SipRegistrationStatusRetrieveResponse,
    type SipRegistrationStatusRetrieveParams as SipRegistrationStatusRetrieveParams,
  };
}
