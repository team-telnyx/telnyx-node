// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as CredentialConnectionsAPI from './credential-connections/credential-connections';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FqdnConnections extends APIResource {
  /**
   * Creates a FQDN connection.
   *
   * @example
   * ```ts
   * const fqdnConnection = await client.fqdnConnections.create({
   *   connection_name: 'string',
   * });
   * ```
   */
  create(
    body: FqdnConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<FqdnConnectionCreateResponse> {
    return this._client.post('/fqdn_connections', { body, ...options });
  }

  /**
   * Retrieves the details of an existing FQDN connection.
   *
   * @example
   * ```ts
   * const fqdnConnection =
   *   await client.fqdnConnections.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FqdnConnectionRetrieveResponse> {
    return this._client.get(path`/fqdn_connections/${id}`, options);
  }

  /**
   * Updates settings of an existing FQDN connection.
   *
   * @example
   * ```ts
   * const fqdnConnection = await client.fqdnConnections.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body: FqdnConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FqdnConnectionUpdateResponse> {
    return this._client.patch(path`/fqdn_connections/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your FQDN connections.
   *
   * @example
   * ```ts
   * const fqdnConnections = await client.fqdnConnections.list();
   * ```
   */
  list(
    query: FqdnConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FqdnConnectionListResponse> {
    return this._client.get('/fqdn_connections', { query, ...options });
  }

  /**
   * Deletes an FQDN connection.
   *
   * @example
   * ```ts
   * const fqdnConnection = await client.fqdnConnections.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<FqdnConnectionDeleteResponse> {
    return this._client.delete(path`/fqdn_connections/${id}`, options);
  }
}

export interface FqdnConnection {
  /**
   * A user-assigned name to help manage the connection.
   */
  connection_name: string;

  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * Indicates whether DTMF timestamp adjustment is enabled.
   */
  adjust_dtmf_timestamp?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * Indicates whether call cost calculation is enabled.
   */
  call_cost_enabled?: boolean;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
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
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: CredentialConnectionsAPI.EncryptedMedia | null;

  /**
   * Indicates whether DTMF duration should be ignored.
   */
  ignore_dtmf_duration?: boolean;

  /**
   * Indicates whether the mark bit should be ignored.
   */
  ignore_mark_bit?: boolean;

  inbound?: InboundFqdn;

  /**
   * The connection is enabled for Microsoft Teams Direct Routing.
   */
  microsoft_teams_sbc?: boolean;

  /**
   * Indicates whether noise suppression is enabled.
   */
  noise_suppression?: boolean;

  /**
   * Enable on-net T38 if you prefer that the sender and receiver negotiate T38
   * directly when both are on the Telnyx network. If this is disabled, Telnyx will
   * be able to use T38 on just one leg of the call according to each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundFqdn;

  /**
   * The password for the FQDN connection.
   */
  password?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Defines if codecs should be passed on stream change.
   */
  rtp_pass_codecs_on_stream_change?: boolean;

  /**
   * Indicates whether normalized timestamps should be sent.
   */
  send_normalized_timestamps?: boolean;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * Indicates whether third-party control is enabled.
   */
  third_party_control_enabled?: boolean;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: TransportProtocol;

  /**
   * The name for the TXT record associated with the FQDN connection.
   */
  txt_name?: string;

  /**
   * The time to live for the TXT record associated with the FQDN connection.
   */
  txt_ttl?: number;

  /**
   * The value for the TXT record associated with the FQDN connection.
   */
  txt_value?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The username for the FQDN connection.
   */
  user_name?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: WebhookAPIVersion;

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

export interface InboundFqdn {
  /**
   * This setting allows you to set the format with which the caller's number (ANI)
   * is sent for inbound phone calls.
   */
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national';

  /**
   * When set, this will limit the total number of inbound calls to phone numbers
   * associated with this connection.
   */
  channel_limit?: number | null;

  /**
   * Defines the list of codecs that Telnyx will send for inbound calls to a specific
   * number on your portal account, in priority order. This only works when the
   * Connection the number is assigned to uses Media Handling mode: default. OPUS and
   * H.264 codecs are available only when using TCP or TLS transport for SIP.
   */
  codecs?: Array<string>;

  /**
   * The default primary FQDN to use for the number. Only settable if the connection
   * is of FQDN type. Value must be the ID of an FQDN set on the connection.
   */
  default_primary_fqdn_id?: string | null;

  /**
   * Default routing method to be used when a number is associated with the
   * connection. Must be one of the routing method types or null, other values are
   * not allowed.
   */
  default_routing_method?: 'sequential' | 'round-robin' | null;

  /**
   * The default secondary FQDN to use for the number. Only settable if the
   * connection is of FQDN type. Value must be the ID of an FQDN set on the
   * connection.
   */
  default_secondary_fqdn_id?: string | null;

  /**
   * The default tertiary FQDN to use for the number. Only settable if the connection
   * is of FQDN type. Value must be the ID of an FQDN set on the connection.
   */
  default_tertiary_fqdn_id?: string | null;

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
   * Defaults to true.
   */
  sip_compact_headers_enabled?: boolean;

  /**
   * Selects which `sip_region` to receive inbound calls from. If null, the default
   * region (US) will be used.
   */
  sip_region?: 'US' | 'Europe' | 'Australia';

  /**
   * Specifies a subdomain that can be used to receive Inbound calls to a Connection,
   * in the same way a phone number is used, from a SIP endpoint. Example: the
   * subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using
   * the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any
   * alphanumeric value. Please note TLS encrypted calls are not allowed for
   * subdomain calls.
   */
  sip_subdomain?: string | null;

  /**
   * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in
   * the public Internet) or "Only my connections" (any connection assigned to the
   * same Telnyx user).
   */
  sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone';

  /**
   * Time(sec) before aborting if connection is not made.
   */
  timeout_1xx_secs?: number;

  /**
   * Time(sec) before aborting if call is unanswered (min: 1, max: 600).
   */
  timeout_2xx_secs?: number;
}

export interface OutboundFqdn {
  /**
   * Set a phone number as the ani_override value to override caller id number on
   * outbound calls.
   */
  ani_override?: string;

  /**
   * Specifies when we should apply your ani_override setting. Only applies when
   * ani_override is not blank.
   */
  ani_override_type?: 'always' | 'normal' | 'emergency';

  /**
   * Forces all SIP calls originated on this connection to be \"parked\" instead of
   * \"bridged\" to the destination specified on the URI. Parked calls will return
   * ringback to the caller and will await for a Call Control command to define which
   * action will be taken next.
   */
  call_parking_enabled?: boolean | null;

  /**
   * When set, this will limit the total number of inbound calls to phone numbers
   * associated with this connection.
   */
  channel_limit?: number;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: CredentialConnectionsAPI.EncryptedMedia | null;

  /**
   * Generate ringback tone through 183 session progress message with early media.
   */
  generate_ringback_tone?: boolean;

  /**
   * When set, ringback will not wait for indication before sending ringback tone to
   * calling party.
   */
  instant_ringback_enabled?: boolean;

  ip_authentication_method?: 'credential-authentication' | 'ip-authentication';

  ip_authentication_token?: string;

  /**
   * A 2-character country code specifying the country whose national dialing rules
   * should be used. For example, if set to `US` then any US number can be dialed
   * without preprending +1 to the number. When left blank, Telnyx will try US and GB
   * dialing rules, in that order, by default.",
   */
  localization?: string;

  /**
   * Identifies the associated outbound voice profile.
   */
  outbound_voice_profile_id?: string;

  /**
   * This setting only affects connections with Fax-type Outbound Voice Profiles. The
   * setting dictates whether or not Telnyx sends a t.38 reinvite. By default, Telnyx
   * will send the re-invite. If set to `customer`, the caller is expected to send
   * the t.38 reinvite.
   */
  t38_reinvite_source?:
    | 'telnyx'
    | 'customer'
    | 'disabled'
    | 'passthru'
    | 'caller-passthru'
    | 'callee-passthru';

  /**
   * Numerical chars only, exactly 4 characters.
   */
  tech_prefix?: string;

  /**
   * Time(sec) before aborting if connection is not made.
   */
  timeout_1xx_secs?: number;

  /**
   * Time(sec) before aborting if call is unanswered (min: 1, max: 600).
   */
  timeout_2xx_secs?: number;
}

/**
 * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
 * FQDN authentication.
 */
export type TransportProtocol = 'UDP' | 'TCP' | 'TLS';

/**
 * Determines which webhook format will be used, Telnyx API v1 or v2.
 */
export type WebhookAPIVersion = '1' | '2';

export interface FqdnConnectionCreateResponse {
  data?: FqdnConnection;
}

export interface FqdnConnectionRetrieveResponse {
  data?: FqdnConnection;
}

export interface FqdnConnectionUpdateResponse {
  data?: FqdnConnection;
}

export interface FqdnConnectionListResponse {
  data?: Array<FqdnConnection>;

  meta?: Shared.ConnectionsPaginationMeta;
}

export interface FqdnConnectionDeleteResponse {
  data?: FqdnConnection;
}

export interface FqdnConnectionCreateParams {
  /**
   * A user-assigned name to help manage the connection.
   */
  connection_name: string;

  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * The uuid of the push credential for Android
   */
  android_push_credential_id?: string | null;

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
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: CredentialConnectionsAPI.EncryptedMedia | null;

  inbound?: InboundFqdn;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * When enabled, the connection will be created for Microsoft Teams Direct Routing.
   * A \*.mstsbc.telnyx.tech FQDN will be created for the connection automatically.
   */
  microsoft_teams_sbc?: boolean;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundFqdn;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: TransportProtocol;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: WebhookAPIVersion;

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

export interface FqdnConnectionUpdateParams {
  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * The uuid of the push credential for Android
   */
  android_push_credential_id?: string | null;

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
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG
   * scenarios.
   */
  encode_contact_header_enabled?: boolean;

  /**
   * Enable use of SRTP for encryption. Cannot be set if the transport_portocol is
   * TLS.
   */
  encrypted_media?: CredentialConnectionsAPI.EncryptedMedia | null;

  inbound?: InboundFqdn;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Enable on-net T38 if you prefer that the sender and receiver negotiate T38
   * directly when both are on the Telnyx network. If this is disabled, Telnyx will
   * be able to use T38 on just one leg of the call according to each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundFqdn;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: TransportProtocol;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: WebhookAPIVersion;

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

export interface FqdnConnectionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  filter?: FqdnConnectionListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: FqdnConnectionListParams.Page;

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

export namespace FqdnConnectionListParams {
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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace FqdnConnections {
  export {
    type FqdnConnection as FqdnConnection,
    type InboundFqdn as InboundFqdn,
    type OutboundFqdn as OutboundFqdn,
    type TransportProtocol as TransportProtocol,
    type WebhookAPIVersion as WebhookAPIVersion,
    type FqdnConnectionCreateResponse as FqdnConnectionCreateResponse,
    type FqdnConnectionRetrieveResponse as FqdnConnectionRetrieveResponse,
    type FqdnConnectionUpdateResponse as FqdnConnectionUpdateResponse,
    type FqdnConnectionListResponse as FqdnConnectionListResponse,
    type FqdnConnectionDeleteResponse as FqdnConnectionDeleteResponse,
    type FqdnConnectionCreateParams as FqdnConnectionCreateParams,
    type FqdnConnectionUpdateParams as FqdnConnectionUpdateParams,
    type FqdnConnectionListParams as FqdnConnectionListParams,
  };
}
