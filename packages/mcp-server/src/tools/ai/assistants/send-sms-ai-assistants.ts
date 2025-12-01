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
  httpPath: '/ai/assistants/{assistant_id}/chat/sms',
  operationId: 'assistant_sms_chat_assistants__assistant_id__chat_sms_post',
};

export const tool: Tool = {
  name: 'send_sms_ai_assistants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend an SMS message for an assistant. This endpoint: \n1. Validates the assistant exists and has messaging profile configured \n2. If should_create_conversation is true, creates a new conversation with metadata \n3. Sends the SMS message (If `text` is set, this will be sent. Otherwise, if this is the first message in the conversation and the assistant has a `greeting` configured, this will be sent. Otherwise the assistant will generate the text to send.) \n4. Updates conversation metadata if provided \n5. Returns the conversation ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/assistant_send_sms_response',\n  $defs: {\n    assistant_send_sms_response: {\n      type: 'object',\n      title: 'AssistantSmsChatResponse',\n      properties: {\n        conversation_id: {\n          type: 'string',\n          title: 'Conversation Id'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      from: {
        type: 'string',
        title: 'From',
      },
      text: {
        type: 'string',
        title: 'Text',
      },
      to: {
        type: 'string',
        title: 'To',
      },
      conversation_metadata: {
        type: 'object',
        title: 'Conversation Metadata',
        additionalProperties: true,
      },
      should_create_conversation: {
        type: 'boolean',
        title: 'Should Create Conversation',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id', 'from', 'text', 'to'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.sendSMS(assistant_id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
