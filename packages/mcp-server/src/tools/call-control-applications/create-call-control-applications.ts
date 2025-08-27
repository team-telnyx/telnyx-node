// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'call_control_applications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/call_control_applications',
  operationId: 'CreateCallControlApplication',
};

export const tool: Tool = {
  name: 'create_call_control_applications',
  description: 'Create a call control application.',
  inputSchema: {
    type: 'object',
    properties: {
      application_name: {
        type: 'string',
        description: 'A user-assigned name to help manage the application.',
      },
      webhook_event_url: {
        type: 'string',
        description:
          "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
      },
      active: {
        type: 'boolean',
        description: 'Specifies whether the connection can be used.',
      },
      anchorsite_override: {
        type: 'string',
        description:
          "<code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.",
        enum: ['"Latency"', '"Chicago, IL"', '"Ashburn, VA"', '"San Jose, CA"'],
      },
      dtmf_type: {
        type: 'string',
        description:
          'Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.',
        enum: ['RFC 2833', 'Inband', 'SIP INFO'],
      },
      first_command_timeout: {
        type: 'boolean',
        description:
          'Specifies whether calls to phone numbers associated with this connection should hangup after timing out.',
      },
      first_command_timeout_secs: {
        type: 'integer',
        description: 'Specifies how many seconds to wait before timing out a dial command.',
      },
      inbound: {
        $ref: '#/$defs/call_control_application_inbound',
      },
      outbound: {
        $ref: '#/$defs/call_control_application_outbound',
      },
      redact_dtmf_debug_logging: {
        type: 'boolean',
        description:
          'When enabled, DTMF digits entered by users will be redacted in debug logs to protect PII data entered through IVR interactions.',
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
      webhook_timeout_secs: {
        type: 'integer',
        description: 'Specifies how many seconds to wait before timing out a webhook.',
      },
    },
    required: ['application_name', 'webhook_event_url'],
    $defs: {
      call_control_application_inbound: {
        type: 'object',
        title: 'Call Control Application Inbound',
        properties: {
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of inbound calls to phone numbers associated with this connection.',
          },
          shaken_stir_enabled: {
            type: 'boolean',
            description:
              'When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound calls.',
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
        },
      },
      call_control_application_outbound: {
        type: 'object',
        title: 'Call Control Application Outbound',
        properties: {
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of outbound calls to phone numbers associated with this connection.',
          },
          outbound_voice_profile_id: {
            type: 'string',
            description: 'Identifies the associated outbound voice profile.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.callControlApplications.create(body));
};

export default { metadata, tool, handler };
