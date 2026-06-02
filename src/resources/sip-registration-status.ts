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
   * Raw external-side registration block reported by the registrar.
   */
  b2bua_external?: { [key: string]: unknown };

  /**
   * Raw internal-side block reported by the registrar.
   */
  b2bua_internal?: { [key: string]: unknown };

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
   * Registration state on the external (UAC / PBX) side, e.g. REGED.
   */
  external_state?: string;

  /**
   * Outward-facing SIP settings used for registration. Password is redacted.
   */
  external_uac_settings?: SipRegistrationStatusRetrieveResponse.ExternalUacSettings;

  /**
   * Internal routing target the connection delivers calls to.
   */
  internal_uac_settings?: SipRegistrationStatusRetrieveResponse.InternalUacSettings;

  /**
   * SIP response from the last registration attempt.
   */
  last_registration_response?: string;

  /**
   * Internal pairing state, e.g. ACTIVE or INACTIVE.
   */
  pair_state?: string;

  /**
   * True if the endpoint is currently registered.
   */
  registered?: boolean;

  /**
   * Owner of the connection.
   */
  user_id?: string;

  /**
   * SIP username used for the registration.
   */
  username?: string;
}

export namespace SipRegistrationStatusRetrieveResponse {
  /**
   * Outward-facing SIP settings used for registration. Password is redacted.
   */
  export interface ExternalUacSettings {
    auth_username?: string;

    expiration_sec?: number;

    from_user?: string;

    outbound_proxy?: string;

    /**
     * Always redacted.
     */
    password?: string;

    proxy?: string;

    transport?: 'TCP' | 'UDP' | 'TLS';

    username?: string;
  }

  /**
   * Internal routing target the connection delivers calls to.
   */
  export interface InternalUacSettings {
    destination_uri?: string;
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
