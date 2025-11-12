// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.embeddings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/embeddings/url',
  operationId: 'PostEmbeddingUrl',
};

export const tool: Tool = {
  name: 'url_ai_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEmbed website content from a specified URL, including child pages up to 5 levels deep within the same domain. The process crawls and loads content from the main URL and its linked pages into a Telnyx Cloud Storage bucket. As soon as each webpage is added to the bucket, its content is immediately processed for embeddings, that can be used for [similarity search](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding-similarity-search) and [clustering](https://developers.telnyx.com/docs/inference/clusters).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedding_response',\n  $defs: {\n    embedding_response: {\n      type: 'object',\n      title: 'EmbeddingResponse',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            created_at: {\n              type: 'string',\n              title: 'Created At'\n            },\n            finished_at: {\n              type: 'string',\n              title: 'Finished At'\n            },\n            status: {\n              type: 'string',\n              title: 'Status'\n            },\n            task_id: {\n              type: 'string',\n              title: 'Task ID'\n            },\n            task_name: {\n              type: 'string',\n              title: 'Task Name'\n            },\n            user_id: {\n              type: 'string',\n              title: 'User ID'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        title: 'Bucket Name',
        description: 'Name of the bucket to store the embeddings. This bucket must already exist.',
      },
      url: {
        type: 'string',
        title: 'URL',
        description: 'The URL of the webpage to embed',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket_name', 'url'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.embeddings.url(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
