// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/{assistant_id}/chat',
  operationId: 'assistant_chat_public_assistants__assistant_id__chat_post',
};

export const tool: Tool = {
  name: 'chat_ai_assistants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows a client to send a chat message to a specific AI Assistant. The assistant processes the message and returns a relevant reply based on the current conversation context. Refer to the Conversation API to [create a conversation](https://developers.telnyx.com/api/inference/inference-embedding/create-new-conversation-public-conversations-post), [filter existing conversations](https://developers.telnyx.com/api/inference/inference-embedding/get-conversations-public-conversations-get), [fetch messages for a conversation](https://developers.telnyx.com/api/inference/inference-embedding/get-conversations-public-conversation-id-messages-get), and [manually add messages to a conversation](https://developers.telnyx.com/api/inference/inference-embedding/add-new-message).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/assistant_chat_response',\n  $defs: {\n    assistant_chat_response: {\n      type: 'object',\n      title: 'AssistantChatResponse',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content',\n          description: 'The assistant\\'s generated response based on the input message and context.'\n        }\n      },\n      required: [        'content'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      content: {
        type: 'string',
        title: 'Content',
        description: 'The message content sent by the client to the assistant',
      },
      conversation_id: {
        type: 'string',
        title: 'Conversation Id',
        description: 'A unique identifier for the conversation thread, used to maintain context',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The optional display name of the user sending the message',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id', 'content', 'conversation_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.chat(assistant_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
