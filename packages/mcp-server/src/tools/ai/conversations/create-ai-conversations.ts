// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/conversations',
  operationId: 'create_new_conversation_public_conversations_post',
};

export const tool: Tool = {
  name: 'create_ai_conversations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new AI Conversation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conversation',\n  $defs: {\n    conversation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The datetime the conversation was created.',\n          format: 'date-time'\n        },\n        last_message_at: {\n          type: 'string',\n          description: 'The datetime of the latest message in the conversation.',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Metadata associated with the conversation. Telnyx provides several pieces of metadata, but customers can also add their own.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'last_message_at',\n        'metadata'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      metadata: {
        type: 'object',
        description: 'Metadata associated with the conversation.',
        additionalProperties: true,
      },
      name: {
        type: 'string',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.conversations.create(body)));
};

export default { metadata, tool, handler };
