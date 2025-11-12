// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/{id}',
  operationId: 'RetrieveConnection',
};

export const tool: Tool = {
  name: 'retrieve_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection_retrieve_response',\n  $defs: {\n    connection_retrieve_response: {\n      type: 'object',\n      title: 'Connection Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Connection',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the specific resource.'\n            },\n            active: {\n              type: 'boolean',\n              description: 'Defaults to true'\n            },\n            anchorsite_override: {\n              $ref: '#/$defs/anchorsite_override'\n            },\n            connection_name: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was created.'\n            },\n            outbound_voice_profile_id: {\n              type: 'string',\n              title: 'Outbound Voice Profile ID',\n              description: 'Identifies the associated outbound voice profile.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            tags: {\n              type: 'array',\n              description: 'Tags associated with the connection.',\n              items: {\n                type: 'string'\n              }\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was updated.'\n            },\n            webhook_api_version: {\n              type: 'string',\n              description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',\n              enum: [                '1',\n                '2'\n              ]\n            },\n            webhook_event_failover_url: {\n              type: 'string',\n              description: 'The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails.'\n            },\n            webhook_event_url: {\n              type: 'string',\n              description: 'The URL where webhooks related to this connection will be sent.'\n            }\n          }\n        }\n      }\n    },\n    anchorsite_override: {\n      type: 'string',\n      title: 'Anchorsite Override',\n      description: '`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user\\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.',\n      enum: [        'Latency',\n        'Chicago, IL',\n        'Ashburn, VA',\n        'San Jose, CA',\n        'Sydney, Australia',\n        'Amsterdam, Netherlands',\n        'London, UK',\n        'Toronto, Canada',\n        'Vancouver, Canada',\n        'Frankfurt, Germany'\n      ]\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.connections.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
