// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'credential_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/credential_connections/{id}',
  operationId: 'UpdateCredentialConnection',
};

export const tool: Tool = {
  name: 'update_credential_connections',
  description: 'Updates settings of an existing credential connection.',
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
        $ref: '#/$defs/credential_inbound',
      },
      ios_push_credential_id: {
        type: 'string',
        title: 'Ios Push Credential Id',
        description: 'The uuid of the push credential for Ios',
      },
      onnet_t38_passthrough_enabled: {
        type: 'boolean',
        description:
          "Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.",
      },
      outbound: {
        $ref: '#/$defs/credential_outbound',
      },
      password: {
        type: 'string',
        description: 'The password to be used as part of the credentials. Must be 8 to 128 characters long.',
      },
      rtcp_settings: {
        $ref: '#/$defs/connection_rtcp_settings',
      },
      sip_uri_calling_preference: {
        type: 'string',
        description:
          'This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).',
        enum: ['disabled', 'unrestricted', 'internal'],
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the connection.',
        items: {
          type: 'string',
        },
      },
      user_name: {
        type: 'string',
        description:
          'The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).',
      },
      webhook_api_version: {
        type: 'string',
        description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',
        enum: ['1', '2'],
      },
      webhook_event_failover_url: {
        type: 'string',
        description:
          "The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
      },
      webhook_event_url: {
        type: 'string',
        description:
          "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
      },
      webhook_timeout_secs: {
        type: 'integer',
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
      credential_inbound: {
        type: 'object',
        title: 'Credential Inbound',
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
      credential_outbound: {
        type: 'object',
        title: 'Credential Outbound',
        properties: {
          ani_override: {
            type: 'string',
            description:
              'Set a phone number as the ani_override value to override caller id number on outbound calls.',
          },
          ani_override_type: {
            type: 'string',
            description:
              'Specifies when we apply your ani_override setting. Only applies when ani_override is not blank.',
            enum: ['always', 'normal', 'emergency'],
          },
          call_parking_enabled: {
            type: 'boolean',
            description:
              'Forces all SIP calls originated on this connection to be "parked" instead of "bridged" to the destination specified on the URI. Parked calls will return ringback to the caller and will await for a Call Control command to define which action will be taken next.',
          },
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of outbound calls to phone numbers associated with this connection.',
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
          localization: {
            type: 'string',
            description:
              'A 2-character country code specifying the country whose national dialing rules should be used. For example, if set to `US` then any US number can be dialed without preprending +1 to the number. When left blank, Telnyx will try US and GB dialing rules, in that order, by default.',
          },
          outbound_voice_profile_id: {
            type: 'string',
            title: 'Outbound Voice Profile ID',
            description: 'Identifies the associated outbound voice profile.',
          },
          t38_reinvite_source: {
            type: 'string',
            description:
              'This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.',
            enum: ['telnyx', 'customer', 'disabled', 'passthru', 'caller-passthru', 'callee-passthru'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.credentialConnections.update(id, body));
};

export default { metadata, tool, handler };
