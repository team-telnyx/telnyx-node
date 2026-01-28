// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import { ActionCheckRegistrationStatusResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CredentialConnections extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a credential connection.
   *
   * @example
   * ```ts
   * const credentialConnection =
   *   await client.credentialConnections.create({
   *     connection_name: 'my name',
   *     password: 'my123secure456password789',
   *     user_name: 'myusername123',
   *   });
   * ```
   */
  create(
    body: CredentialConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialConnectionCreateResponse> {
    return this._client.post('/credential_connections', { body, ...options });
  }

  /**
   * Retrieves the details of an existing credential connection.
   *
   * @example
   * ```ts
   * const credentialConnection =
   *   await client.credentialConnections.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CredentialConnectionRetrieveResponse> {
    return this._client.get(path`/credential_connections/${id}`, options);
  }

  /**
   * Updates settings of an existing credential connection.
   *
   * @example
   * ```ts
   * const credentialConnection =
   *   await client.credentialConnections.update('id');
   * ```
   */
  update(
    id: string,
    body: CredentialConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialConnectionUpdateResponse> {
    return this._client.patch(path`/credential_connections/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your credential connections.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const credentialConnection of client.credentialConnections.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CredentialConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CredentialConnectionsDefaultFlatPagination, CredentialConnection> {
    return this._client.getAPIList('/credential_connections', DefaultFlatPagination<CredentialConnection>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing credential connection.
   *
   * @example
   * ```ts
   * const credentialConnection =
   *   await client.credentialConnections.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CredentialConnectionDeleteResponse> {
    return this._client.delete(path`/credential_connections/${id}`, options);
  }
}

export type CredentialConnectionsDefaultFlatPagination = DefaultFlatPagination<CredentialConnection>;

/**
 * `Latency` directs Telnyx to route media through the site with the lowest
 * round-trip time to the user's connection. Telnyx calculates this time using ICMP
 * ping messages. This can be disabled by specifying a site to handle all media.
 */
export type AnchorsiteOverride =
  | 'Latency'
  | 'Chicago, IL'
  | 'Ashburn, VA'
  | 'San Jose, CA'
  | 'Sydney, Australia'
  | 'Amsterdam, Netherlands'
  | 'London, UK'
  | 'Toronto, Canada'
  | 'Vancouver, Canada'
  | 'Frankfurt, Germany';

export interface ConnectionRtcpSettings {
  /**
   * BETA - Enable the capture and storage of RTCP messages to create QoS reports on
   * the Telnyx Mission Control Portal.
   */
  capture_enabled?: boolean;

  /**
   * RTCP port by default is rtp+1, it can also be set to rtcp-mux
   */
  port?: 'rtcp-mux' | 'rtp+1';

  /**
   * RTCP reports are sent to customers based on the frequency set. Frequency is in
   * seconds and it can be set to values from 5 to 3000 seconds.
   */
  report_frequency_secs?: number;
}

export interface CredentialConnection {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: AnchorsiteOverride;

  /**
   * The uuid of the push credential for Android
   */
  android_push_credential_id?: string | null;

  /**
   * Specifies if call cost webhooks should be sent for this connection.
   */
  call_cost_in_webhooks?: boolean;

  connection_name?: string;

  /**
   * ISO-8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * When enabled, Telnyx will generate comfort noise when you place the call on
   * hold. If disabled, you will need to generate comfort noise or on hold music to
   * avoid RTP timeout.
   */
  default_on_hold_comfort_noise_enabled?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: EncryptedMedia | null;

  inbound?: CredentialInbound;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  jitter_buffer?: CredentialConnection.JitterBuffer;

  /**
   * Controls when noise suppression is applied to calls. When set to 'inbound',
   * noise suppression is applied to incoming audio. When set to 'outbound', it's
   * applied to outgoing audio. When set to 'both', it's applied in both directions.
   * When set to 'disabled', noise suppression is turned off.
   */
  noise_suppression?: 'inbound' | 'outbound' | 'both' | 'disabled';

  /**
   * Configuration options for noise suppression. These settings are stored
   * regardless of the noise_suppression value, but only take effect when
   * noise_suppression is not 'disabled'. If you disable noise suppression and later
   * re-enable it, the previously configured settings will be used.
   */
  noise_suppression_details?: Shared.ConnectionNoiseSuppressionDetails;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: CredentialOutbound;

  /**
   * The password to be used as part of the credentials. Must be 8 to 128 characters
   * long.
   */
  password?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  rtcp_settings?: ConnectionRtcpSettings;

  /**
   * This feature enables inbound SIP URI calls to your Credential Auth Connection.
   * If enabled for all (unrestricted) then anyone who calls the SIP URI
   * <your-username>@telnyx.com will be connected to your Connection. You can also
   * choose to allow only calls that are originated on any Connections under your
   * account (internal).
   */
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal';

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * ISO-8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The user name to be used as part of the credentials. Must be 4-32 characters
   * long and alphanumeric values only (no spaces or special characters). At least
   * one of the first 5 characters must be a letter.
   */
  user_name?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace CredentialConnection {
  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  export interface JitterBuffer {
    /**
     * Enables Jitter Buffer for RTP streams of SIP Trunking calls. The feature is off
     * unless enabled.
     */
    enable_jitter_buffer?: boolean;

    /**
     * The maximum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_max?: number;

    /**
     * The minimum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_min?: number;
  }
}

export interface CredentialInbound {
  /**
   * This setting allows you to set the format with which the caller's number (ANI)
   * is sent for inbound phone calls.
   */
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national';

  /**
   * When set, this will limit the total number of inbound calls to phone numbers
   * associated with this connection.
   */
  channel_limit?: number;

  /**
   * Defines the list of codecs that Telnyx will send for inbound calls to a specific
   * number on your portal account, in priority order. This only works when the
   * Connection the number is assigned to uses Media Handling mode: default. OPUS and
   * H.264 codecs are available only when using TCP or TLS transport for SIP.
   */
  codecs?: Array<string>;

  /**
   * Default routing method to be used when a number is associated with the
   * connection. Must be one of the routing method types or left blank, other values
   * are not allowed.
   */
  default_routing_method?: 'sequential' | 'round-robin';

  dnis_number_format?: '+e164' | 'e164' | 'national' | 'sip_username';

  /**
   * Generate ringback tone through 183 session progress message with early media.
   */
  generate_ringback_tone?: boolean;

  /**
   * When set, inbound phone calls will receive ISUP parameters via SIP headers.
   * (Only when available and only when using TCP or TLS transport.)
   */
  isup_headers_enabled?: boolean;

  /**
   * Enable PRACK messages as defined in RFC3262.
   */
  prack_enabled?: boolean;

  /**
   * When enabled the SIP Connection will receive the Identity header with
   * Shaken/Stir data in the SIP INVITE message of inbound calls, even when using UDP
   * transport.
   */
  shaken_stir_enabled?: boolean;

  /**
   * When enabled, allows multiple devices to ring simultaneously on incoming calls.
   */
  simultaneous_ringing?: 'disabled' | 'enabled';

  /**
   * Defaults to true.
   */
  sip_compact_headers_enabled?: boolean;

  /**
   * Time(sec) before aborting if connection is not made.
   */
  timeout_1xx_secs?: number;

  /**
   * Time(sec) before aborting if call is unanswered (min: 1, max: 600).
   */
  timeout_2xx_secs?: number;
}

export interface CredentialOutbound {
  /**
   * Set a phone number as the ani_override value to override caller id number on
   * outbound calls.
   */
  ani_override?: string;

  /**
   * Specifies when we apply your ani_override setting. Only applies when
   * ani_override is not blank.
   */
  ani_override_type?: 'always' | 'normal' | 'emergency';

  /**
   * Forces all SIP calls originated on this connection to be "parked" instead of
   * "bridged" to the destination specified on the URI. Parked calls will return
   * ringback to the caller and will await for a Call Control command to define which
   * action will be taken next.
   */
  call_parking_enabled?: boolean | null;

  /**
   * When set, this will limit the total number of outbound calls to phone numbers
   * associated with this connection.
   */
  channel_limit?: number;

  /**
   * Generate ringback tone through 183 session progress message with early media.
   */
  generate_ringback_tone?: boolean;

  /**
   * When set, ringback will not wait for indication before sending ringback tone to
   * calling party.
   */
  instant_ringback_enabled?: boolean;

  /**
   * A 2-character country code specifying the country whose national dialing rules
   * should be used. For example, if set to `US` then any US number can be dialed
   * without preprending +1 to the number. When left blank, Telnyx will try US and GB
   * dialing rules, in that order, by default.
   */
  localization?: string;

  /**
   * Identifies the associated outbound voice profile.
   */
  outbound_voice_profile_id?: string;

  /**
   * This setting only affects connections with Fax-type Outbound Voice Profiles. The
   * setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By
   * default, Telnyx will send the re-invite. If set to `customer`, the caller is
   * expected to send the t.38 reinvite.
   */
  t38_reinvite_source?:
    | 'telnyx'
    | 'customer'
    | 'disabled'
    | 'passthru'
    | 'caller-passthru'
    | 'callee-passthru';
}

/**
 * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
 * digits sent to Telnyx will be accepted in all formats.
 */
export type DtmfType = 'RFC 2833' | 'Inband' | 'SIP INFO';

/**
 * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
 * TLS.
 */
export type EncryptedMedia = 'SRTP' | null;

export interface CredentialConnectionCreateResponse {
  data?: CredentialConnection;
}

export interface CredentialConnectionRetrieveResponse {
  data?: CredentialConnection;
}

export interface CredentialConnectionUpdateResponse {
  data?: CredentialConnection;
}

export interface CredentialConnectionDeleteResponse {
  data?: CredentialConnection;
}

export interface CredentialConnectionCreateParams {
  /**
   * A user-assigned name to help manage the connection.
   */
  connection_name: string;

  /**
   * The password to be used as part of the credentials. Must be 8 to 128 characters
   * long.
   */
  password: string;

  /**
   * The user name to be used as part of the credentials. Must be 4-32 characters
   * long and alphanumeric values only (no spaces or special characters).
   */
  user_name: string;

  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: AnchorsiteOverride;

  /**
   * The uuid of the push credential for Android
   */
  android_push_credential_id?: string | null;

  /**
   * Specifies if call cost webhooks should be sent for this connection.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * When enabled, Telnyx will generate comfort noise when you place the call on
   * hold. If disabled, you will need to generate comfort noise or on hold music to
   * avoid RTP timeout.
   */
  default_on_hold_comfort_noise_enabled?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: EncryptedMedia | null;

  inbound?: CredentialInbound;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  jitter_buffer?: CredentialConnectionCreateParams.JitterBuffer;

  /**
   * Controls when noise suppression is applied to calls. When set to 'inbound',
   * noise suppression is applied to incoming audio. When set to 'outbound', it's
   * applied to outgoing audio. When set to 'both', it's applied in both directions.
   * When set to 'disabled', noise suppression is turned off.
   */
  noise_suppression?: 'inbound' | 'outbound' | 'both' | 'disabled';

  /**
   * Configuration options for noise suppression. These settings are stored
   * regardless of the noise_suppression value, but only take effect when
   * noise_suppression is not 'disabled'. If you disable noise suppression and later
   * re-enable it, the previously configured settings will be used.
   */
  noise_suppression_details?: Shared.ConnectionNoiseSuppressionDetails;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: CredentialOutbound;

  rtcp_settings?: ConnectionRtcpSettings;

  /**
   * This feature enables inbound SIP URI calls to your Credential Auth Connection.
   * If enabled for all (unrestricted) then anyone who calls the SIP URI
   * <your-username>@telnyx.com will be connected to your Connection. You can also
   * choose to allow only calls that are originated on any Connections under your
   * account (internal).
   */
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal';

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * Determines which webhook format will be used, Telnyx API v1, v2 or texml. Note -
   * texml can only be set when the outbound object parameter call_parking_enabled is
   * included and set to true.
   */
  webhook_api_version?: '1' | '2' | 'texml';

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace CredentialConnectionCreateParams {
  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  export interface JitterBuffer {
    /**
     * Enables Jitter Buffer for RTP streams of SIP Trunking calls. The feature is off
     * unless enabled.
     */
    enable_jitter_buffer?: boolean;

    /**
     * The maximum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_max?: number;

    /**
     * The minimum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_min?: number;
  }
}

export interface CredentialConnectionUpdateParams {
  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: AnchorsiteOverride;

  /**
   * The uuid of the push credential for Android
   */
  android_push_credential_id?: string | null;

  /**
   * Specifies if call cost webhooks should be sent for this connection.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * A user-assigned name to help manage the connection.
   */
  connection_name?: string;

  /**
   * When enabled, Telnyx will generate comfort noise when you place the call on
   * hold. If disabled, you will need to generate comfort noise or on hold music to
   * avoid RTP timeout.
   */
  default_on_hold_comfort_noise_enabled?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: EncryptedMedia | null;

  inbound?: CredentialInbound;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  jitter_buffer?: CredentialConnectionUpdateParams.JitterBuffer;

  /**
   * Controls when noise suppression is applied to calls. When set to 'inbound',
   * noise suppression is applied to incoming audio. When set to 'outbound', it's
   * applied to outgoing audio. When set to 'both', it's applied in both directions.
   * When set to 'disabled', noise suppression is turned off.
   */
  noise_suppression?: 'inbound' | 'outbound' | 'both' | 'disabled';

  /**
   * Configuration options for noise suppression. These settings are stored
   * regardless of the noise_suppression value, but only take effect when
   * noise_suppression is not 'disabled'. If you disable noise suppression and later
   * re-enable it, the previously configured settings will be used.
   */
  noise_suppression_details?: Shared.ConnectionNoiseSuppressionDetails;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: CredentialOutbound;

  /**
   * The password to be used as part of the credentials. Must be 8 to 128 characters
   * long.
   */
  password?: string;

  rtcp_settings?: ConnectionRtcpSettings;

  /**
   * This feature enables inbound SIP URI calls to your Credential Auth Connection.
   * If enabled for all (unrestricted) then anyone who calls the SIP URI
   * <your-username>@telnyx.com will be connected to your Connection. You can also
   * choose to allow only calls that are originated on any Connections under your
   * account (internal).
   */
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal';

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * The user name to be used as part of the credentials. Must be 4-32 characters
   * long and alphanumeric values only (no spaces or special characters).
   */
  user_name?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace CredentialConnectionUpdateParams {
  /**
   * Configuration options for Jitter Buffer. Enables Jitter Buffer for RTP streams
   * of SIP Trunking calls. The feature is off unless enabled. You may define min and
   * max values in msec for customized buffering behaviors. Larger values add latency
   * but tolerate more jitter, while smaller values reduce latency but are more
   * sensitive to jitter and reordering.
   */
  export interface JitterBuffer {
    /**
     * Enables Jitter Buffer for RTP streams of SIP Trunking calls. The feature is off
     * unless enabled.
     */
    enable_jitter_buffer?: boolean;

    /**
     * The maximum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_max?: number;

    /**
     * The minimum jitter buffer size in milliseconds. Must be between 40 and 400. Has
     * no effect if enable_jitter_buffer is not true.
     */
    jitterbuffer_msec_min?: number;
  }
}

export interface CredentialConnectionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  filter?: CredentialConnectionListParams.Filter;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>connection_name</code>: sorts the result by the
   *     <code>connection_name</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-connection_name</code>: sorts the result by the
   *     <code>connection_name</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'connection_name' | 'active';
}

export namespace CredentialConnectionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  export interface Filter {
    /**
     * Filter by connection_name using nested operations
     */
    connection_name?: Filter.ConnectionName;

    /**
     * If present, connections with an `fqdn` that equals the given value will be
     * returned. Matching is case-sensitive, and the full string must match.
     */
    fqdn?: string;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }

  export namespace Filter {
    /**
     * Filter by connection_name using nested operations
     */
    export interface ConnectionName {
      /**
       * If present, connections with <code>connection_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }
  }
}

CredentialConnections.Actions = Actions;

export declare namespace CredentialConnections {
  export {
    type AnchorsiteOverride as AnchorsiteOverride,
    type ConnectionRtcpSettings as ConnectionRtcpSettings,
    type CredentialConnection as CredentialConnection,
    type CredentialInbound as CredentialInbound,
    type CredentialOutbound as CredentialOutbound,
    type DtmfType as DtmfType,
    type EncryptedMedia as EncryptedMedia,
    type CredentialConnectionCreateResponse as CredentialConnectionCreateResponse,
    type CredentialConnectionRetrieveResponse as CredentialConnectionRetrieveResponse,
    type CredentialConnectionUpdateResponse as CredentialConnectionUpdateResponse,
    type CredentialConnectionDeleteResponse as CredentialConnectionDeleteResponse,
    type CredentialConnectionsDefaultFlatPagination as CredentialConnectionsDefaultFlatPagination,
    type CredentialConnectionCreateParams as CredentialConnectionCreateParams,
    type CredentialConnectionUpdateParams as CredentialConnectionUpdateParams,
    type CredentialConnectionListParams as CredentialConnectionListParams,
  };

  export {
    Actions as Actions,
    type ActionCheckRegistrationStatusResponse as ActionCheckRegistrationStatusResponse,
  };
}
