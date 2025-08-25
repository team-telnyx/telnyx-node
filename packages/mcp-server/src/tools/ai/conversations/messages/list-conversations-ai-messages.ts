// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/conversations/{conversation_id}/messages',
  operationId: 'get_conversations_public__conversation_id__messages_get',
};

export const tool: Tool = {
  name: 'list_conversations_ai_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve messages for a specific conversation, including tool calls made by the assistant.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ConversationMessageListData',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        type: 'object',\n        properties: {\n          role: {\n            type: 'string',\n            description: 'The role of the message sender.',\n            enum: [              'user',\n              'assistant',\n              'tool'\n            ]\n          },\n          text: {\n            type: 'string',\n            description: 'The message content. Can be null for tool calls.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'The datetime the message was created on the conversation. This does not necesarily correspond to the time the message was sent. The best field to use to determine the time the end user experienced the message is `sent_at`.',\n            format: 'date-time'\n          },\n          sent_at: {\n            type: 'string',\n            description: 'The datetime the message was sent to the end user.',\n            format: 'date-time'\n          },\n          tool_calls: {\n            type: 'array',\n            description: 'Optional tool calls made by the assistant.',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'Unique identifier for the tool call.'\n                },\n                function: {\n                  type: 'object',\n                  properties: {\n                    arguments: {\n                      type: 'string',\n                      description: 'JSON-formatted arguments to pass to the function.'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the function to call.'\n                    }\n                  },\n                  required: [                    'arguments',\n                    'name'\n                  ]\n                },\n                type: {\n                  type: 'string',\n                  description: 'Type of the tool call.',\n                  enum: [                    'function'\n                  ]\n                }\n              },\n              required: [                'id',\n                'function',\n                'type'\n              ]\n            }\n          }\n        },\n        required: [          'role',\n          'text'\n        ]\n      }\n    },\n    meta: {\n      $ref: '#/$defs/meta'\n    }\n  },\n  required: [    'data',\n    'meta'\n  ],\n  $defs: {\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      conversation_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['conversation_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conversation_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.conversations.messages.list(conversation_id)),
  );
};

export default { metadata, tool, handler };
