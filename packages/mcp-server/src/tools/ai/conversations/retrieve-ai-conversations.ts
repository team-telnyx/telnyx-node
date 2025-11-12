// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/conversations/{conversation_id}',
  operationId: 'get_conversation_by_id_public_conversations_get',
};

export const tool: Tool = {
  name: 'retrieve_ai_conversations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific AI conversation by its ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conversation_retrieve_response',\n  $defs: {\n    conversation_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/conversation'\n        }\n      }\n    },\n    conversation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The datetime the conversation was created.',\n          format: 'date-time'\n        },\n        last_message_at: {\n          type: 'string',\n          description: 'The datetime of the latest message in the conversation.',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Metadata associated with the conversation. Telnyx provides several pieces of metadata, but customers can also add their own.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'last_message_at',\n        'metadata'\n      ]\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.conversations.retrieve(conversation_id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
