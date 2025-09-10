// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.clusters',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/clusters/{task_id}',
  operationId: 'delete_cluster_by_task_id_public_text_clusters__task_id__delete',
};

export const tool: Tool = {
  name: 'delete_ai_clusters',
  description: 'Delete a cluster',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  const response = await client.ai.clusters.delete(task_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
