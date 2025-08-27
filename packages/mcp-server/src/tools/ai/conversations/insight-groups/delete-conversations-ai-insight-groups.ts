// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.conversations.insight_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/conversations/insight-groups/{group_id}',
  operationId: 'delete_insight_group_by_id',
};

export const tool: Tool = {
  name: 'delete_conversations_ai_insight_groups',
  description: 'Delete insight group by ID',
  inputSchema: {
    type: 'object',
    properties: {
      group_id: {
        type: 'string',
        title: 'Group Id',
        description: 'The ID of the insight group',
      },
    },
    required: ['group_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { group_id, ...body } = args as any;
  return asTextContentResult((await client.ai.conversations.insightGroups.delete(group_id)) as object);
};

export default { metadata, tool, handler };
