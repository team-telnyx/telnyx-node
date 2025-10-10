// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/external_connections',
  operationId: 'CreateExternalConnection',
};

export const tool: Tool = {
  name: 'create_external_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new External Connection based on the parameters sent in the request. The external_sip_connection and outbound voice profile id are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/external_connection_create_response',\n  $defs: {\n    external_connection_create_response: {\n      type: 'object',\n      title: 'External Connection Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/external_connection'\n        }\n      }\n    },\n    external_connection: {\n      type: 'object',\n      title: 'External Connection',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Int ID',\n          description: 'Uniquely identifies the resource.'\n        },\n        active: {\n          type: 'boolean',\n          title: 'Connection Active',\n          description: 'Specifies whether the connection can be used.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        credential_active: {\n          type: 'boolean',\n          title: 'Credential Active',\n          description: 'If the credential associated with this service is active.'\n        },\n        external_sip_connection: {\n          type: 'string',\n          title: 'External SIP Connection',\n          description: 'The service that will be consuming this connection.',\n          enum: [            'zoom',\n            'operator_connect'\n          ]\n        },\n        inbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.'\n            }\n          }\n        },\n        outbound: {\n          type: 'object',\n          properties: {\n            channel_limit: {\n              type: 'integer',\n              description: 'When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.'\n            },\n            outbound_voice_profile_id: {\n              type: 'string',\n              title: 'Outbound Voice Profile ID',\n              description: 'Identifies the associated outbound voice profile.'\n            }\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the connection.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        webhook_api_version: {\n          type: 'string',\n          description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',\n          enum: [            '1',\n            '2'\n          ]\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this connection will be sent. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer',\n          description: 'Specifies how many seconds to wait before timing out a webhook.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      external_sip_connection: {
        type: 'string',
        title: 'External SIP Connection',
        description: 'The service that will be consuming this connection.',
        enum: ['zoom'],
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
      active: {
        type: 'boolean',
        title: 'Connection Active',
        description: 'Specifies whether the connection can be used.',
      },
      inbound: {
        type: 'object',
        properties: {
          channel_limit: {
            type: 'integer',
            description:
              'When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.',
          },
        },
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the connection.',
        items: {
          type: 'string',
        },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['external_sip_connection', 'outbound'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.externalConnections.create(body)));
};

export default { metadata, tool, handler };
