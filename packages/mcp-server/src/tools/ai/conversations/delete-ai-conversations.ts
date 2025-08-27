// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.conversations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/conversations/{conversation_id}',
  operationId: 'delete_conversation_by_id_public_conversations_delete',
};

export const tool: Tool = {
  name: 'delete_ai_conversations',
  description: 'Delete a specific conversation by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      conversation_id: {
        type: 'string',
      },
    },
    required: ['conversation_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conversation_id, ...body } = args as any;
  const response = await client.ai.conversations.delete(conversation_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
