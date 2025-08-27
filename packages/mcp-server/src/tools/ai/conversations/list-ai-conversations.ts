// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.conversations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/conversations',
  operationId: 'get_conversations_public_conversations_get',
};

export const tool: Tool = {
  name: 'list_ai_conversations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of all AI conversations configured by the user. Supports [PostgREST-style query parameters](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for filtering. Examples are included for the standard metadata fields, but you can filter on any field in the metadata JSON object. For example, to filter by a custom field `metadata->custom_field`, use `metadata->custom_field=eq.value`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ConversationsListData',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        $ref: '#/$defs/conversation'\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    conversation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The datetime the conversation was created.',\n          format: 'date-time'\n        },\n        last_message_at: {\n          type: 'string',\n          description: 'The datetime of the latest message in the conversation.',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Metadata associated with the conversation. Telnyx provides several pieces of metadata, but customers can also add their own.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'last_message_at',\n        'metadata'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Filter by conversation ID (e.g. id=eq.123)',
      },
      created_at: {
        type: 'string',
        description: 'Filter by creation datetime (e.g., `created_at=gte.2025-01-01`)',
      },
      last_message_at: {
        type: 'string',
        description: 'Filter by last message datetime (e.g., `last_message_at=lte.2025-06-01`)',
      },
      limit: {
        type: 'integer',
        description: 'Limit the number of returned conversations (e.g., `limit=10`)',
      },
      'metadata->assistant_id': {
        type: 'string',
        description: 'Filter by assistant ID (e.g., `metadata->assistant_id=eq.assistant-123`)',
      },
      'metadata->call_control_id': {
        type: 'string',
        description: 'Filter by call control ID (e.g., `metadata->call_control_id=eq.v3:123`)',
      },
      'metadata->telnyx_agent_target': {
        type: 'string',
        description:
          'Filter by the phone number, SIP URI, or other identifier for the agent (e.g., `metadata->telnyx_agent_target=eq.+13128675309`)',
      },
      'metadata->telnyx_conversation_channel': {
        type: 'string',
        description:
          'Filter by conversation channel (e.g., `metadata->telnyx_conversation_channel=eq.phone_call`)',
      },
      'metadata->telnyx_end_user_target': {
        type: 'string',
        description:
          'Filter by the phone number, SIP URI, or other identifier for the end user (e.g., `metadata->telnyx_end_user_target=eq.+13128675309`)',
      },
      name: {
        type: 'string',
        description: 'Filter by conversation Name (e.g. `name=like.Voice%`)',
      },
      or: {
        type: 'string',
        description:
          'Apply OR conditions using PostgREST syntax (e.g., `or=(created_at.gte.2025-04-01,last_message_at.gte.2025-04-01)`)',
      },
      order: {
        type: 'string',
        description:
          'Order the results by specific fields (e.g., `order=created_at.desc` or `order=last_message_at.asc`)',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.conversations.list(body)));
};

export default { metadata, tool, handler };
