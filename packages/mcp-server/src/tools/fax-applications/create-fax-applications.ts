// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'fax_applications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/fax_applications',
  operationId: 'CreateFaxApplication',
};

export const tool: Tool = {
  name: 'create_fax_applications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Fax Application Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/fax_application'\n    }\n  },\n  $defs: {\n    fax_application: {\n      type: 'object',\n      title: 'Fax Application',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Int ID',\n          description: 'Uniquely identifies the resource.'\n        },\n        active: {\n          type: 'boolean',\n          title: 'Connection Active',\n          description: 'Specifies whether the connection can be used.'\n        },\n        anchorsite_override: {\n          $ref: '#/$defs/anchorsite_override'\n        },\n        application_name: {\n          type: 'string',\n          title: 'Application Name',\n          description: 'A user-assigned name to help manage the application.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        inbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.'\n            },\n            sip_subdomain: {\n              type: 'string',\n              description: 'Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain \"example.sip.telnyx.com\" can be called from any SIP endpoint by using the SIP URI \"sip:@example.sip.telnyx.com\" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.'\n            },\n            sip_subdomain_receive_settings: {\n              type: 'string',\n              description: 'This option can be enabled to receive calls from: \"Anyone\" (any SIP endpoint in the public Internet) or \"Only my connections\" (any connection assigned to the same Telnyx user).',\n              enum: [                'only_my_connections',\n                'from_anyone'\n              ]\n            }\n          }\n        },\n        outbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.'\n            },\n            outbound_voice_profile_id: {\n              type: 'string',\n              title: 'Outbound Voice Profile ID',\n              description: 'Identifies the associated outbound voice profile.'\n            }\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Fax Application.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          title: 'Webhook Event Failover URL',\n          description: 'The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          title: 'Webhook Event URL',\n          description: 'The URL where webhooks related to this connection will be sent. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer',\n          title: 'Webhook Timeout Secs',\n          description: 'Specifies how many seconds to wait before timing out a webhook.'\n        }\n      }\n    },\n    anchorsite_override: {\n      type: 'string',\n      title: 'Anchorsite Override',\n      description: '`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user\\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.',\n      enum: [        'Latency',\n        'Chicago, IL',\n        'Ashburn, VA',\n        'San Jose, CA',\n        'Sydney, Australia',\n        'Amsterdam, Netherlands',\n        'London, UK',\n        'Toronto, Canada',\n        'Vancouver, Canada',\n        'Frankfurt, Germany'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      application_name: {
        type: 'string',
        title: 'Application Name',
        description: 'A user-assigned name to help manage the application.',
      },
      webhook_event_url: {
        type: 'string',
        title: 'Webhook Event URL',
        description:
          "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
      },
      active: {
        type: 'boolean',
        title: 'Connection Active',
        description: 'Specifies whether the connection can be used.',
      },
      anchorsite_override: {
        $ref: '#/$defs/anchorsite_override',
      },
      inbound: {
        type: 'object',
        properties: {
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.',
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
              'When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.',
          },
          outbound_voice_profile_id: {
            type: 'string',
            title: 'Outbound Voice Profile ID',
            description: 'Identifies the associated outbound voice profile.',
          },
        },
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the Fax Application.',
        items: {
          type: 'string',
        },
      },
      webhook_event_failover_url: {
        type: 'string',
        title: 'Webhook Event Failover URL',
        description:
          "The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
      },
      webhook_timeout_secs: {
        type: 'integer',
        title: 'Webhook Timeout Secs',
        description: 'Specifies how many seconds to wait before timing out a webhook.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['application_name', 'webhook_event_url'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.faxApplications.create(body)));
};

export default { metadata, tool, handler };
