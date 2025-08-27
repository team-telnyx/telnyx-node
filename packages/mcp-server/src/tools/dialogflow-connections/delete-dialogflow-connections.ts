// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'dialogflow_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/dialogflow_connections/{connection_id}',
  operationId: 'DeleteDialogflowConnection',
};

export const tool: Tool = {
  name: 'delete_dialogflow_connections',
  description: 'Deletes a stored Dialogflow Connection.',
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
    },
    required: ['connection_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connection_id, ...body } = args as any;
  const response = await client.dialogflowConnections.delete(connection_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
