// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/conversations/insights/{insight_id}',
  operationId: 'delete_insight_by_id',
};

export const tool: Tool = {
  name: 'delete_conversations_ai_insights',
  description: 'Delete insight by ID',
  inputSchema: {
    type: 'object',
    properties: {
      insight_id: {
        type: 'string',
        title: 'Insight Id',
        description: 'The ID of the insight',
      },
    },
    required: ['insight_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { insight_id, ...body } = args as any;
  const response = await client.ai.conversations.insights.delete(insight_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
