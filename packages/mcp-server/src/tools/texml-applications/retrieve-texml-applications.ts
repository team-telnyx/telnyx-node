// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'texml_applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml_applications/{id}',
  operationId: 'GetTexmlApplication',
};

export const tool: Tool = {
  name: 'retrieve_texml_applications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of an existing TeXML Application.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Texml Application Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/texml_application'\n    }\n  },\n  $defs: {\n    texml_application: {\n      type: 'object',\n      title: 'Texml Application',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Int ID',\n          description: 'Uniquely identifies the resource.'\n        },\n        active: {\n          type: 'boolean',\n          title: 'Connection Active',\n          description: 'Specifies whether the connection can be used.'\n        },\n        anchorsite_override: {\n          $ref: '#/$defs/anchorsite_override'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        dtmf_type: {\n          $ref: '#/$defs/dtmf_type'\n        },\n        first_command_timeout: {\n          type: 'boolean',\n          title: 'First Command Timeout',\n          description: 'Specifies whether calls to phone numbers associated with this connection should hangup after timing out.'\n        },\n        first_command_timeout_secs: {\n          type: 'integer',\n          title: 'First Command Timeout Secs',\n          description: 'Specifies how many seconds to wait before timing out a dial command.'\n        },\n        friendly_name: {\n          type: 'string',\n          title: 'Application Name',\n          description: 'A user-assigned name to help manage the application.'\n        },\n        inbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the total number of inbound calls to phone numbers associated with this connection.'\n            },\n            shaken_stir_enabled: {\n              type: 'boolean',\n              description: 'When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound calls.'\n            },\n            sip_subdomain: {\n              type: 'string',\n              description: 'Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain \"example.sip.telnyx.com\" can be called from any SIP endpoint by using the SIP URI \"sip:@example.sip.telnyx.com\" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.'\n            },\n            sip_subdomain_receive_settings: {\n              type: 'string',\n              description: 'This option can be enabled to receive calls from: \"Anyone\" (any SIP endpoint in the public Internet) or \"Only my connections\" (any connection assigned to the same Telnyx user).',\n              enum: [                'only_my_connections',\n                'from_anyone'\n              ]\n            }\n          }\n        },\n        outbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the total number of outbound calls to phone numbers associated with this connection.'\n            },\n            outbound_voice_profile_id: {\n              type: 'string',\n              title: 'Outbound Voice Profile ID',\n              description: 'Identifies the associated outbound voice profile.'\n            }\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status_callback: {\n          type: 'string',\n          description: 'URL for Telnyx to send requests to containing information about call progress events.'\n        },\n        status_callback_method: {\n          type: 'string',\n          description: 'HTTP request method Telnyx should use when requesting the status_callback URL.',\n          enum: [            'get',\n            'post'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Texml Application.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        voice_fallback_url: {\n          type: 'string',\n          description: 'URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.'\n        },\n        voice_method: {\n          type: 'string',\n          description: 'HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either \\'get\\' or \\'post\\'.',\n          enum: [            'get',\n            'post'\n          ]\n        },\n        voice_url: {\n          type: 'string',\n          description: 'URL to which Telnyx will deliver your XML Translator webhooks.'\n        }\n      }\n    },\n    anchorsite_override: {\n      type: 'string',\n      title: 'Anchorsite Override',\n      description: '`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user\\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.',\n      enum: [        'Latency',\n        'Chicago, IL',\n        'Ashburn, VA',\n        'San Jose, CA',\n        'Sydney, Australia',\n        'Amsterdam, Netherlands',\n        'London, UK',\n        'Toronto, Canada',\n        'Vancouver, Canada',\n        'Frankfurt, Germany'\n      ]\n    },\n    dtmf_type: {\n      type: 'string',\n      title: 'DTMF Type',\n      description: 'Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.',\n      enum: [        'RFC 2833',\n        'Inband',\n        'SIP INFO'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.texmlApplications.retrieve(id)));
};

export default { metadata, tool, handler };
