// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'global_ip_usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global_ip_usage',
  operationId: 'GetGlobalIpUsage',
};

export const tool: Tool = {
  name: 'retrieve_global_ip_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGlobal IP Usage Metrics\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/global_ip_usage_retrieve_response',\n  $defs: {\n    global_ip_usage_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              global_ip: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Global IP ID.'\n                  },\n                  ip_address: {\n                    type: 'string',\n                    description: 'The Global IP address.'\n                  }\n                }\n              },\n              received: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'number',\n                    description: 'The amount of data received.'\n                  },\n                  unit: {\n                    type: 'string',\n                    description: 'The unit of the amount of data received.'\n                  }\n                }\n              },\n              timestamp: {\n                type: 'string',\n                description: 'The timestamp of the metric.',\n                format: 'date-time'\n              },\n              transmitted: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'number',\n                    description: 'The amount of data transmitted.'\n                  },\n                  unit: {\n                    type: 'string',\n                    description: 'The unit of the amount of data transmitted.'\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[global_ip_id][in]',
        properties: {
          global_ip_id: {
            anyOf: [
              {
                type: 'string',
                description: 'Filter by exact Global IP ID',
              },
              {
                type: 'object',
                description: 'Filtering operations',
                properties: {
                  in: {
                    type: 'string',
                    description: 'Filter by Global IP ID(s) separated by commas',
                  },
                },
              },
            ],
            description: 'Filter by exact Global IP ID',
          },
        },
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.globalIPUsage.retrieve(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
