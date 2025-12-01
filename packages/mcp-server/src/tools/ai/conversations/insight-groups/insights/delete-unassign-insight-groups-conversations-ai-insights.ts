// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations.insight_groups.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/conversations/insight-groups/{group_id}/insights/{insight_id}/unassign',
  operationId: 'unassign_insight_from_group',
};

export const tool: Tool = {
  name: 'delete_unassign_insight_groups_conversations_ai_insights',
  description: 'Remove an insight from a group',
  inputSchema: {
    type: 'object',
    properties: {
      group_id: {
        type: 'string',
        title: 'Group Id',
        description: 'The ID of the insight group',
      },
      insight_id: {
        type: 'string',
        title: 'Insight Id',
        description: 'The ID of the insight',
      },
    },
    required: ['group_id', 'insight_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { insight_id, ...body } = args as any;
  const response = await client.ai.conversations.insightGroups.insights
    .deleteUnassign(insight_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
