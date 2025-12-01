// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.mcp_servers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/mcp_servers',
  operationId: 'list_mcp_servers',
};

export const tool: Tool = {
  name: 'list_ai_mcp_servers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of MCP servers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mcp_server_list_response',\n  $defs: {\n    mcp_server_list_response: {\n      type: 'array',\n      title: 'MCPServersListResponse',\n      items: {\n        type: 'object',\n        title: 'MCPServer',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id'\n          },\n          created_at: {\n            type: 'string',\n            title: 'Created At',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            title: 'Name'\n          },\n          type: {\n            type: 'string',\n            title: 'Type'\n          },\n          url: {\n            type: 'string',\n            title: 'Url'\n          },\n          allowed_tools: {\n            type: 'array',\n            title: 'Allowed Tools',\n            items: {\n              type: 'string'\n            }\n          },\n          api_key_ref: {\n            type: 'string',\n            title: 'Api Key Ref'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'name',\n          'type',\n          'url'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'page[number]': {
        type: 'integer',
        title: 'Page[Number]',
      },
      'page[size]': {
        type: 'integer',
        title: 'Page[Size]',
      },
      type: {
        type: 'string',
        title: 'Type',
      },
      url: {
        type: 'string',
        title: 'Url',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.mcpServers.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
