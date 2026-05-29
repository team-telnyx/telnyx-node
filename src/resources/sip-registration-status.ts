// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Look up SIP registration status across credential types
 */
export class SipRegistrationStatus extends APIResource {
  /**
   * Returns the live SIP registration state of a connection or credential. Supports
   * UAC third-party credentials, telephony credentials, and SIP credential
   * connections.
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
   * Identifier of the resource.
   */
  connection_id?: string;

  /**
   * Human-readable connection name.
   */
  connection_name?: string;

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
   * Owner of the resource.
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
   * Identifier of the connection or credential to look up.
   */
  connection_id: string;

  /**
   * The kind of credential to look up.
   */
  credential_type: 'uac_external_credential' | 'telephony_credential' | 'sip_credential_connection';

  /**
   * Owner of the connection. Used to authorize the lookup.
   */
  user_id: string;
}

export declare namespace SipRegistrationStatus {
  export {
    type SipRegistrationStatusRetrieveResponse as SipRegistrationStatusRetrieveResponse,
    type SipRegistrationStatusRetrieveParams as SipRegistrationStatusRetrieveParams,
  };
}
