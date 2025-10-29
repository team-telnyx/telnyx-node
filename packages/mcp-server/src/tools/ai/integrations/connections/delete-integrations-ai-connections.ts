// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.integrations.connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/integrations/connections/{user_connection_id}',
  operationId: 'delete_integration_connection',
};

export const tool: Tool = {
  name: 'delete_integrations_ai_connections',
  description: 'Delete a specific integration connection.',
  inputSchema: {
    type: 'object',
    properties: {
      user_connection_id: {
        type: 'string',
      },
    },
    required: ['user_connection_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { user_connection_id, ...body } = args as any;
  const response = await client.ai.integrations.connections.delete(user_connection_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
