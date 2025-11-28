// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'mobile_voice_connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/mobile_voice_connections',
  operationId: 'listMobileVoiceConnections',
};

export const tool: Tool = {
  name: 'list_mobile_voice_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Mobile Voice Connections\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mobile_voice_connection_list_response',\n  $defs: {\n    mobile_voice_connection_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the resource.'\n              },\n              active: {\n                type: 'boolean',\n                description: 'Indicates if the connection is active.'\n              },\n              connection_name: {\n                type: 'string',\n                description: 'The name of the connection.'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              inbound: {\n                type: 'object',\n                properties: {\n                  channel_limit: {\n                    type: 'integer'\n                  }\n                }\n              },\n              outbound: {\n                type: 'object',\n                properties: {\n                  channel_limit: {\n                    type: 'integer'\n                  },\n                  outbound_voice_profile_id: {\n                    type: 'string'\n                  }\n                }\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.',\n                enum: [                  'mobile_voice_connection'\n                ]\n              },\n              tags: {\n                type: 'array',\n                description: 'A list of tags associated with the connection.',\n                items: {\n                  type: 'string'\n                }\n              },\n              updated_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              webhook_api_version: {\n                type: 'string',\n                description: 'The API version for webhooks.',\n                enum: [                  '1',\n                  '2'\n                ]\n              },\n              webhook_event_failover_url: {\n                type: 'string',\n                description: 'The failover URL where webhooks are sent.'\n              },\n              webhook_event_url: {\n                type: 'string',\n                description: 'The URL where webhooks are sent.'\n              },\n              webhook_timeout_secs: {\n                type: 'integer',\n                description: 'The timeout for webhooks in seconds.'\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[connection_name][contains]': {
        type: 'string',
        description: 'Filter by connection name containing the given string',
      },
      'page[number]': {
        type: 'integer',
        description: 'The page number to load',
      },
      'page[size]': {
        type: 'integer',
        description: 'The size of the page',
      },
      sort: {
        type: 'string',
        description:
          'Sort by field (e.g., created_at, connection_name, active). Prefix with - for descending order.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.mobileVoiceConnections.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
