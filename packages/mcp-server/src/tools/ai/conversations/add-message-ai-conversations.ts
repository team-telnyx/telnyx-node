// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/conversations/{conversation_id}/message',
  operationId: 'add_new_message',
};

export const tool: Tool = {
  name: 'add_message_ai_conversations',
  description:
    'Add a new message to the conversation. Used to insert a new messages to a conversation manually ( without using chat endpoint )',
  inputSchema: {
    type: 'object',
    properties: {
      conversation_id: {
        type: 'string',
        title: 'Conversation Id',
        description: 'The ID of the conversation',
      },
      role: {
        type: 'string',
        title: 'Role',
      },
      content: {
        type: 'string',
        title: 'Content',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
        additionalProperties: true,
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      sent_at: {
        type: 'string',
        title: 'Sent At',
        format: 'date-time',
      },
      tool_call_id: {
        type: 'string',
        title: 'Tool Call Id',
      },
      tool_calls: {
        type: 'array',
        title: 'Tool Calls',
        items: {
          type: 'object',
          additionalProperties: true,
        },
      },
      tool_choice: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            title: 'ToolChoiceObject',
            additionalProperties: true,
          },
        ],
        title: 'Tool Choice',
      },
    },
    required: ['conversation_id', 'role'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conversation_id, ...body } = args as any;
  return asTextContentResult((await client.ai.conversations.addMessage(conversation_id, body)) as object);
};

export default { metadata, tool, handler };
