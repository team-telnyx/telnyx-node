// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.mcp_servers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/mcp_servers/{mcp_server_id}',
  operationId: 'get_mcp_server',
};

export const tool: Tool = {
  name: 'retrieve_ai_mcp_servers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve details for a specific MCP server.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mcp_server_retrieve_response',\n  $defs: {\n    mcp_server_retrieve_response: {\n      type: 'object',\n      title: 'MCPServer',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        type: {\n          type: 'string',\n          title: 'Type'\n        },\n        url: {\n          type: 'string',\n          title: 'Url'\n        },\n        allowed_tools: {\n          type: 'array',\n          title: 'Allowed Tools',\n          items: {\n            type: 'string'\n          }\n        },\n        api_key_ref: {\n          type: 'string',\n          title: 'Api Key Ref'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'type',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      mcp_server_id: {
        type: 'string',
        title: 'Mcp Server Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['mcp_server_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { mcp_server_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.mcpServers.retrieve(mcp_server_id)),
  );
};

export default { metadata, tool, handler };
