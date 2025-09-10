// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as CredentialConnectionsAPI from './credential-connections/credential-connections';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IPConnections extends APIResource {
  /**
   * Creates an IP connection.
   *
   * @example
   * ```ts
   * const ipConnection = await client.ipConnections.create();
   * ```
   */
  create(body: IPConnectionCreateParams, options?: RequestOptions): APIPromise<IPConnectionCreateResponse> {
    return this._client.post('/ip_connections', { body, ...options });
  }

  /**
   * Retrieves the details of an existing ip connection.
   *
   * @example
   * ```ts
   * const ipConnection = await client.ipConnections.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IPConnectionRetrieveResponse> {
    return this._client.get(path`/ip_connections/${id}`, options);
  }

  /**
   * Updates settings of an existing IP connection.
   *
   * @example
   * ```ts
   * const ipConnection = await client.ipConnections.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body: IPConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IPConnectionUpdateResponse> {
    return this._client.patch(path`/ip_connections/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your IP connections.
   *
   * @example
   * ```ts
   * const ipConnections = await client.ipConnections.list();
   * ```
   */
  list(
    query: IPConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IPConnectionListResponse> {
    return this._client.get('/ip_connections', { query, ...options });
  }

  /**
   * Deletes an existing IP connection.
   *
   * @example
   * ```ts
   * const ipConnection = await client.ipConnections.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<IPConnectionDeleteResponse> {
    return this._client.delete(path`/ip_connections/${id}`, options);
  }
}

export interface InboundIP {
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
   * The default primary IP to use for the number. Only settable if the connection is
   * of IP authentication type. Value must be the ID of an authorized IP set on the
   * connection.
   */
  default_primary_ip_id?: string;

  /**
   * Default routing method to be used when a number is associated with the
   * connection. Must be one of the routing method types or left blank, other values
   * are not allowed.
   */
  default_routing_method?: 'sequential' | 'round-robin';

  /**
   * The default secondary IP to use for the number. Only settable if the connection
   * is of IP authentication type. Value must be the ID of an authorized IP set on
   * the connection.
   */
  default_secondary_ip_id?: string;

  /**
   * The default tertiary IP to use for the number. Only settable if the connection
   * is of IP authentication type. Value must be the ID of an authorized IP set on
   * the connection.
   */
  default_tertiary_ip_id?: string;

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
  sip_subdomain?: string;

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

export interface IPConnection {
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
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  connection_name?: string;

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

  inbound?: InboundIP;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundIP;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: 'UDP' | 'TCP' | 'TLS';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

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

export interface OutboundIP {
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

  ip_authentication_method?: 'tech-prefixp-charge-info' | 'token';

  ip_authentication_token?: string;

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

  /**
   * Numerical chars only, exactly 4 characters.
   */
  tech_prefix?: string;
}

export interface IPConnectionCreateResponse {
  data?: IPConnection;
}

export interface IPConnectionRetrieveResponse {
  data?: IPConnection;
}

export interface IPConnectionUpdateResponse {
  data?: IPConnection;
}

export interface IPConnectionListResponse {
  data?: Array<IPConnection>;

  meta?: Shared.ConnectionsPaginationMeta;
}

export interface IPConnectionDeleteResponse {
  data?: IPConnection;
}

export interface IPConnectionCreateParams {
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

  inbound?: IPConnectionCreateParams.Inbound;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundIP;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: 'UDP' | 'TCP' | 'TLS';

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

export namespace IPConnectionCreateParams {
  export interface Inbound {
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
    sip_subdomain?: string;

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
}

export interface IPConnectionUpdateParams {
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

  inbound?: InboundIP;

  /**
   * The uuid of the push credential for Ios
   */
  ios_push_credential_id?: string | null;

  /**
   * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly
   * if both are on the Telnyx network. If this is disabled, Telnyx will be able to
   * use T38 on just one leg of the call depending on each leg's settings.
   */
  onnet_t38_passthrough_enabled?: boolean;

  outbound?: OutboundIP;

  rtcp_settings?: CredentialConnectionsAPI.ConnectionRtcpSettings;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or
   * FQDN authentication.
   */
  transport_protocol?: 'UDP' | 'TCP' | 'TLS';

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

export interface IPConnectionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  filter?: IPConnectionListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: IPConnectionListParams.Page;

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

export namespace IPConnectionListParams {
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

export declare namespace IPConnections {
  export {
    type InboundIP as InboundIP,
    type IPConnection as IPConnection,
    type OutboundIP as OutboundIP,
    type IPConnectionCreateResponse as IPConnectionCreateResponse,
    type IPConnectionRetrieveResponse as IPConnectionRetrieveResponse,
    type IPConnectionUpdateResponse as IPConnectionUpdateResponse,
    type IPConnectionListResponse as IPConnectionListResponse,
    type IPConnectionDeleteResponse as IPConnectionDeleteResponse,
    type IPConnectionCreateParams as IPConnectionCreateParams,
    type IPConnectionUpdateParams as IPConnectionUpdateParams,
    type IPConnectionListParams as IPConnectionListParams,
  };
}
