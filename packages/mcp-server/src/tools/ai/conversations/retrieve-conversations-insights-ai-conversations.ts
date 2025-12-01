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
  httpPath: '/ai/conversations/{conversation_id}/conversations-insights',
  operationId: 'get_conversations_public__conversation_id__insights_get',
};

export const tool: Tool = {
  name: 'retrieve_conversations_insights_ai_conversations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve insights for a specific conversation\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conversation_retrieve_conversations_insights_response',\n  $defs: {\n    conversation_retrieve_conversations_insights_response: {\n      type: 'object',\n      title: 'ConversationInsightListData',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the conversation insight.'\n              },\n              conversation_insights: {\n                type: 'array',\n                description: 'List of insights extracted from the conversation.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    insight_id: {\n                      type: 'string',\n                      description: 'Unique identifier for the insight configuration.'\n                    },\n                    result: {\n                      type: 'string',\n                      description: 'Insight result from the conversation. If the insight has a JSON schema, this will be stringified JSON object.'\n                    }\n                  },\n                  required: [                    'insight_id',\n                    'result'\n                  ]\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the object was created.',\n                format: 'date-time'\n              },\n              status: {\n                type: 'string',\n                description: 'Current status of the insight generation for the conversation.',\n                enum: [                  'pending',\n                  'in_progress',\n                  'completed',\n                  'failed'\n                ]\n              }\n            },\n            required: [              'id',\n              'conversation_insights',\n              'created_at',\n              'status'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/meta'\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
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
      await maybeFilter(
        jq_filter,
        await client.ai.conversations.retrieveConversationsInsights(conversation_id),
      ),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
