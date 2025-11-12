// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.clusters',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/clusters',
  operationId: 'compute_new_cluster_public_text_clusters_post',
};

export const tool: Tool = {
  name: 'compute_ai_clusters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStarts a background task to compute how the data in an [embedded storage bucket](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding) is clustered. This helps identify common themes and patterns in the data.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cluster_compute_response',\n  $defs: {\n    cluster_compute_response: {\n      type: 'object',\n      title: 'TextClusteringResponseData',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'TextClusteringResponse',\n          properties: {\n            task_id: {\n              type: 'string'\n            }\n          },\n          required: [            'task_id'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket: {
        type: 'string',
        description:
          'The embedded storage bucket to compute the clusters from. The bucket must already be [embedded](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding).',
      },
      files: {
        type: 'array',
        description: 'Array of files to filter which are included.',
        items: {
          type: 'string',
        },
      },
      min_cluster_size: {
        type: 'integer',
        description:
          'Smallest number of related text chunks to qualify as a cluster. Top-level clusters should be thought of as identifying broad themes in your data.',
      },
      min_subcluster_size: {
        type: 'integer',
        description:
          'Smallest number of related text chunks to qualify as a sub-cluster. Sub-clusters should be thought of as identifying more specific topics within a broader theme.',
      },
      prefix: {
        type: 'string',
        description: 'Prefix to filter whcih files in the buckets are included.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.clusters.compute(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
