// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.clusters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/clusters/{task_id}/graph',
  operationId: 'fetch_cluster_image_by_task_id_public_text_clusters__task_id__image_get',
};

export const tool: Tool = {
  name: 'fetch_graph_ai_clusters',
  description: 'Fetch a cluster visualization',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      cluster_id: {
        type: 'integer',
        title: 'Cluster Id',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  return asTextContentResult((await client.ai.clusters.fetchGraph(task_id, body)) as object);
};

export default { metadata, tool, handler };
