// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml_applications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml_applications',
  operationId: 'CreateTexmlApplication',
};

export const tool: Tool = {
  name: 'create_texml_applications',
  description: 'Creates a TeXML Application.',
  inputSchema: {
    type: 'object',
    properties: {
      friendly_name: {
        type: 'string',
        title: 'Application Name',
        description: 'A user-assigned name to help manage the application.',
      },
      voice_url: {
        type: 'string',
        description: 'URL to which Telnyx will deliver your XML Translator webhooks.',
      },
      active: {
        type: 'boolean',
        title: 'Connection Active',
        description: 'Specifies whether the connection can be used.',
      },
      anchorsite_override: {
        $ref: '#/$defs/anchorsite_override',
      },
      call_cost_in_webhooks: {
        type: 'boolean',
        description: 'Specifies if call cost webhooks should be sent for this TeXML Application.',
      },
      dtmf_type: {
        $ref: '#/$defs/dtmf_type',
      },
      first_command_timeout: {
        type: 'boolean',
        title: 'First Command Timeout',
        description:
          'Specifies whether calls to phone numbers associated with this connection should hangup after timing out.',
      },
      first_command_timeout_secs: {
        type: 'integer',
        title: 'First Command Timeout Secs',
        description: 'Specifies how many seconds to wait before timing out a dial command.',
      },
      inbound: {
        type: 'object',
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
      outbound: {
        type: 'object',
        properties: {
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the total number of outbound calls to phone numbers associated with this connection.',
          },
          outbound_voice_profile_id: {
            type: 'string',
            title: 'Outbound Voice Profile ID',
            description: 'Identifies the associated outbound voice profile.',
          },
        },
      },
      status_callback: {
        type: 'string',
        description: 'URL for Telnyx to send requests to containing information about call progress events.',
      },
      status_callback_method: {
        type: 'string',
        description: 'HTTP request method Telnyx should use when requesting the status_callback URL.',
        enum: ['get', 'post'],
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the Texml Application.',
        items: {
          type: 'string',
        },
      },
      voice_fallback_url: {
        type: 'string',
        description:
          'URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.',
      },
      voice_method: {
        type: 'string',
        description:
          "HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.",
        enum: ['get', 'post'],
      },
    },
    required: ['friendly_name', 'voice_url'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.texmlApplications.create(body));
};

export default { metadata, tool, handler };
