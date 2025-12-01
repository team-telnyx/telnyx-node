// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.mcp_servers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/mcp_servers/{mcp_server_id}',
  operationId: 'delete_mcp_server',
};

export const tool: Tool = {
  name: 'delete_ai_mcp_servers',
  description: 'Delete a specific MCP server.',
  inputSchema: {
    type: 'object',
    properties: {
      mcp_server_id: {
        type: 'string',
        title: 'Mcp Server Id',
      },
    },
    required: ['mcp_server_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { mcp_server_id, ...body } = args as any;
  const response = await client.ai.mcpServers.delete(mcp_server_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
