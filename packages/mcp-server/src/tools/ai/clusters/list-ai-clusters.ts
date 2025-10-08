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
  httpPath: '/ai/clusters',
  operationId: 'list_all_requested_clusters_public_text_clusters_get',
};

export const tool: Tool = {
  name: 'list_ai_clusters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all clusters\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cluster_list_response',\n  $defs: {\n    cluster_list_response: {\n      type: 'object',\n      title: 'ClusteringRequestInfoData',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'ClusteringRequestInfo',\n            properties: {\n              bucket: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              finished_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              min_cluster_size: {\n                type: 'integer'\n              },\n              min_subcluster_size: {\n                type: 'integer'\n              },\n              status: {\n                $ref: '#/$defs/task_status'\n              },\n              task_id: {\n                type: 'string'\n              }\n            },\n            required: [              'bucket',\n              'created_at',\n              'finished_at',\n              'min_cluster_size',\n              'min_subcluster_size',\n              'status',\n              'task_id'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/meta'\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'pending',\n        'starting',\n        'running',\n        'completed',\n        'failed'\n      ]\n    },\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            title: 'Page[Number]',
          },
          size: {
            type: 'integer',
            title: 'Page[Size]',
          },
        },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.clusters.list(body)));
};

export default { metadata, tool, handler };
