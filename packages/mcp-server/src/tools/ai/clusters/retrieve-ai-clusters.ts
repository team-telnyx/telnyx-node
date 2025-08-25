// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.clusters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/clusters/{task_id}',
  operationId: 'fetch_cluster_by_task_id_public_text_clusters__task_id__get',
};

export const tool: Tool = {
  name: 'retrieve_ai_clusters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a cluster\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ClusteringStatusResponseData',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'ClusteringStatusResponse',\n      properties: {\n        bucket: {\n          type: 'string'\n        },\n        clusters: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/recursive_cluster'\n          }\n        },\n        status: {\n          $ref: '#/$defs/task_status'\n        }\n      },\n      required: [        'bucket',\n        'clusters',\n        'status'\n      ]\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    recursive_cluster: {\n      type: 'object',\n      title: 'RecursiveCluster',\n      properties: {\n        cluster_id: {\n          type: 'string'\n        },\n        cluster_summary: {\n          type: 'string'\n        },\n        total_number_of_nodes: {\n          type: 'integer'\n        },\n        cluster_header: {\n          type: 'string'\n        },\n        nodes: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'ClusterNode',\n            properties: {\n              filename: {\n                type: 'string',\n                description: 'The corresponding source file of your embedded storage bucket that the node is from.'\n              },\n              text: {\n                type: 'string',\n                description: 'The text of the node.'\n              }\n            },\n            required: [              'filename',\n              'text'\n            ]\n          }\n        },\n        subclusters: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/recursive_cluster'\n          }\n        }\n      },\n      required: [        'cluster_id',\n        'cluster_summary',\n        'total_number_of_nodes'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'pending',\n        'starting',\n        'running',\n        'completed',\n        'failed'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      show_subclusters: {
        type: 'boolean',
        title: 'Show Subclusters',
        description: 'Whether or not to include subclusters and their nodes in the response.',
      },
      top_n_nodes: {
        type: 'integer',
        title: 'Top N Nodes',
        description:
          'The number of nodes in the cluster to return in the response. Nodes will be sorted by their centrality within the cluster.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { task_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.clusters.retrieve(task_id, body)));
};

export default { metadata, tool, handler };
