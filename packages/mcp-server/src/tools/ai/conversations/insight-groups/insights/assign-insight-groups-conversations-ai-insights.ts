// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.conversations.insight_groups.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/conversations/insight-groups/{group_id}/insights/{insight_id}/assign',
  operationId: 'assign_insight_to_group',
};

export const tool: Tool = {
  name: 'assign_insight_groups_conversations_ai_insights',
  description: 'Assign an insight to a group',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { insight_id, ...body } = args as any;
  return asTextContentResult(
    (await client.ai.conversations.insightGroups.insights.assign(insight_id, body)) as object,
  );
};

export default { metadata, tool, handler };
