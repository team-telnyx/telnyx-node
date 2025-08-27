// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'fqdn_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/fqdn_connections/{id}',
  operationId: 'UpdateFqdnConnection',
};

export const tool: Tool = {
  name: 'update_fqdn_connections',
  description: 'Updates settings of an existing FQDN connection.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      active: {
        type: 'boolean',
        description: 'Defaults to true',
      },
      anchorsite_override: {
        $ref: '#/$defs/anchorsite_override',
      },
      android_push_credential_id: {
        type: 'string',
        title: 'Android Push Credential Id',
        description: 'The uuid of the push credential for Android',
      },
      connection_name: {
        type: 'string',
        title: 'Connection Name',
        description: 'A user-assigned name to help manage the connection.',
      },
      default_on_hold_comfort_noise_enabled: {
        type: 'boolean',
        description:
          'When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.',
      },
      dtmf_type: {
        $ref: '#/$defs/dtmf_type',
      },
      encode_contact_header_enabled: {
        type: 'boolean',
        description: 'Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.',
      },
      encrypted_media: {
        $ref: '#/$defs/encrypted_media',
      },
      inbound: {
        $ref: '#/$defs/inbound_fqdn',
      },
      ios_push_credential_id: {
        type: 'string',
        title: 'Ios Push Credential Id',
        description: 'The uuid of the push credential for Ios',
      },
      onnet_t38_passthrough_enabled: {
        type: 'boolean',
        description:
          "Enable on-net T38 if you prefer that the sender and receiver negotiate T38 directly when both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call according to each leg's settings.",
      },
      outbound: {
        $ref: '#/$defs/outbound_fqdn',
      },
      rtcp_settings: {
        $ref: '#/$defs/connection_rtcp_settings',
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the connection.',
        items: {
          type: 'string',
        },
      },
      transport_protocol: {
        $ref: '#/$defs/transport_protocol',
      },
      webhook_api_version: {
        $ref: '#/$defs/webhook_api_version',
      },
      webhook_event_failover_url: {
        type: 'string',
        title: 'Webhook Event Failover URL',
        description:
          "The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
      },
      webhook_event_url: {
        type: 'string',
        title: 'Webhook Event URL',
        description:
          "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
      },
      webhook_timeout_secs: {
        type: 'integer',
        title: 'Webhook Timeout Secs',
        description: 'Specifies how many seconds to wait before timing out a webhook.',
      },
    },
    required: ['id'],
    $defs: {
      anchorsite_override: {
        type: 'string',
        title: 'Anchorsite Override',
        description:
          "`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.",
        enum: [
          'Latency',
          'Chicago, IL',
          'Ashburn, VA',
          'San Jose, CA',
          'Sydney, Australia',
          'Amsterdam, Netherlands',
          'London, UK',
          'Toronto, Canada',
          'Vancouver, Canada',
          'Frankfurt, Germany',
        ],
      },
      dtmf_type: {
        type: 'string',
        title: 'DTMF Type',
        description:
          'Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.',
        enum: ['RFC 2833', 'Inband', 'SIP INFO'],
      },
      encrypted_media: {
        type: 'string',
        description: 'Enable use of SRTP for encryption. Cannot be set if the transport_portocol is TLS.',
        enum: ['SRTP'],
      },
      inbound_fqdn: {
        type: 'object',
        title: 'Inbound FQDN',
        properties: {
          ani_number_format: {
            type: 'string',
            description:
              "This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.",
            enum: ['+E.164', 'E.164', '+E.164-national', 'E.164-national'],
          },
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of inbound calls to phone numbers associated with this connection.',
          },
          codecs: {
            type: 'array',
            description:
              'Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.',
            items: {
              type: 'string',
            },
          },
          default_primary_fqdn_id: {
            type: 'string',
            description:
              'The default primary FQDN to use for the number. Only settable if the connection is\nof FQDN type. Value must be the ID of an FQDN set on the connection.',
          },
          default_routing_method: {
            type: 'string',
            description:
              'Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or null, other values are not allowed.',
            enum: ['sequential', 'round-robin'],
          },
          default_secondary_fqdn_id: {
            type: 'string',
            description:
              'The default secondary FQDN to use for the number. Only settable if the connection is\nof FQDN type. Value must be the ID of an FQDN set on the connection.',
          },
          default_tertiary_fqdn_id: {
            type: 'string',
            description:
              'The default tertiary FQDN to use for the number. Only settable if the connection is\nof FQDN type. Value must be the ID of an FQDN set on the connection.',
          },
          dnis_number_format: {
            type: 'string',
            enum: ['+e164', 'e164', 'national', 'sip_username'],
          },
          generate_ringback_tone: {
            type: 'boolean',
            description: 'Generate ringback tone through 183 session progress message with early media.',
          },
          isup_headers_enabled: {
            type: 'boolean',
            description:
              'When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)',
          },
          prack_enabled: {
            type: 'boolean',
            description: 'Enable PRACK messages as defined in RFC3262.',
          },
          shaken_stir_enabled: {
            type: 'boolean',
            description:
              'When enabled the SIP Connection will receive the Identity header with Shaken/Stir data in the SIP INVITE message of inbound calls, even when using UDP transport.',
          },
          sip_compact_headers_enabled: {
            type: 'boolean',
            description: 'Defaults to true.',
          },
          sip_region: {
            type: 'string',
            description:
              'Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.',
            enum: ['US', 'Europe', 'Australia'],
          },
          sip_subdomain: {
            type: 'string',
            description:
              'Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.',
          },
          sip_subdomain_receive_settings: {
            type: 'string',
            description:
              'This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).',
            enum: ['only_my_connections', 'from_anyone'],
          },
          timeout_1xx_secs: {
            type: 'integer',
            description: 'Time(sec) before aborting if connection is not made.',
          },
          timeout_2xx_secs: {
            type: 'integer',
            description: 'Time(sec) before aborting if call is unanswered (min: 1, max: 600).',
          },
        },
      },
      outbound_fqdn: {
        type: 'object',
        title: 'Connection Outbound Settings',
        properties: {
          ani_override: {
            type: 'string',
            title: 'ANI override type',
            description:
              'Set a phone number as the ani_override value to override caller id number on outbound calls.',
          },
          ani_override_type: {
            type: 'string',
            title: 'ANI override type',
            description:
              'Specifies when we should apply your ani_override setting. Only applies when ani_override is not blank.',
            enum: ['always', 'normal', 'emergency'],
          },
          call_parking_enabled: {
            type: 'boolean',
            description:
              'Forces all SIP calls originated on this connection to be \\"parked\\" instead of \\"bridged\\" to the destination specified on the URI. Parked calls will return ringback to the caller and will await for a Call Control command to define which action will be taken next.',
          },
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of inbound calls to phone numbers associated with this connection.',
          },
          encrypted_media: {
            $ref: '#/$defs/encrypted_media',
          },
          generate_ringback_tone: {
            type: 'boolean',
            description: 'Generate ringback tone through 183 session progress message with early media.',
          },
          instant_ringback_enabled: {
            type: 'boolean',
            description:
              'When set, ringback will not wait for indication before sending ringback tone to calling party.',
          },
          ip_authentication_method: {
            type: 'string',
            enum: ['credential-authentication', 'ip-authentication'],
          },
          ip_authentication_token: {
            type: 'string',
          },
          localization: {
            type: 'string',
            description:
              'A 2-character country code specifying the country whose national dialing rules should be used. For example, if set to `US` then any US number can be dialed without preprending +1 to the number. When left blank, Telnyx will try US and GB dialing rules, in that order, by default.",',
          },
          outbound_voice_profile_id: {
            type: 'string',
            title: 'Outbound Voice Profile ID',
            description: 'Identifies the associated outbound voice profile.',
          },
          t38_reinvite_source: {
            type: 'string',
            description:
              'This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite. By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.',
            enum: ['telnyx', 'customer', 'disabled', 'passthru', 'caller-passthru', 'callee-passthru'],
          },
          tech_prefix: {
            type: 'string',
            description: 'Numerical chars only, exactly 4 characters.',
          },
          timeout_1xx_secs: {
            type: 'integer',
            description: 'Time(sec) before aborting if connection is not made.',
          },
          timeout_2xx_secs: {
            type: 'integer',
            description: 'Time(sec) before aborting if call is unanswered (min: 1, max: 600).',
          },
        },
      },
      connection_rtcp_settings: {
        type: 'object',
        title: 'Connection RTCP Settings',
        properties: {
          capture_enabled: {
            type: 'boolean',
            description:
              'BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.',
          },
          port: {
            type: 'string',
            description: 'RTCP port by default is rtp+1, it can also be set to rtcp-mux',
            enum: ['rtcp-mux', 'rtp+1'],
          },
          report_frequency_secs: {
            type: 'integer',
            description:
              'RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.',
          },
        },
      },
      transport_protocol: {
        type: 'string',
        description:
          'One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.',
        enum: ['UDP', 'TCP', 'TLS'],
      },
      webhook_api_version: {
        type: 'string',
        title: 'Webhook API Version',
        description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',
        enum: ['1', '2'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.fqdnConnections.update(id, body));
};

export default { metadata, tool, handler };
