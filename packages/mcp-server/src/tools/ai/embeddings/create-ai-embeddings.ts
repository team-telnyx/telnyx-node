// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.embeddings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/embeddings',
  operationId: 'PostEmbedding',
};

export const tool: Tool = {
  name: 'create_ai_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform embedding on a Telnyx Storage Bucket using the a embedding model.\nThe current supported file types are:\n- PDF\n- HTML\n- txt/unstructured text files\n- json\n- csv\n- audio / video (mp3, mp4, mpeg, mpga, m4a, wav, or webm ) - Max of 100mb file size.\n\nAny files not matching the above types will be attempted to be embedded as unstructured text.\n\nThis process can be slow, so it runs in the background and the user can check\nthe status of the task using the endpoint `/ai/embeddings/{task_id}`.\n\n **Important Note**: When you update documents in a Telnyx Storage bucket, their associated embeddings are automatically kept up to date. If you add or update a file, it is automatically embedded. If you delete a file, the embeddings are deleted for that particular file.\n\nYou can also specify a custom `loader` param. Currently the only supported loader value is\n`intercom` which loads Intercom article jsons as specified by [the Intercom article API](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/Articles/article/)\nThis loader will split each article into paragraphs and save additional parameters relevant to Intercom docs, such as\n`article_url` and `heading`. These values will be returned by the `/v2/ai/embeddings/similarity-search` endpoint in the `loader_metadata` field.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedding_response',\n  $defs: {\n    embedding_response: {\n      type: 'object',\n      title: 'EmbeddingResponse',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            created_at: {\n              type: 'string',\n              title: 'Created At'\n            },\n            finished_at: {\n              type: 'string',\n              title: 'Finished At'\n            },\n            status: {\n              type: 'string',\n              title: 'Status'\n            },\n            task_id: {\n              type: 'string',\n              title: 'Task ID'\n            },\n            task_name: {\n              type: 'string',\n              title: 'Task Name'\n            },\n            user_id: {\n              type: 'string',\n              title: 'User ID'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        title: 'Bucket Name',
      },
      document_chunk_overlap_size: {
        type: 'integer',
        title: 'Document Chunk Overlap Size',
      },
      document_chunk_size: {
        type: 'integer',
        title: 'Document Chunk Size',
      },
      embedding_model: {
        type: 'string',
        title: 'SupportedEmbeddingModels',
        description: 'Supported models to vectorize and embed documents.',
        enum: ['thenlper/gte-large', 'intfloat/multilingual-e5-large'],
      },
      loader: {
        type: 'string',
        title: 'SupportedEmbeddingLoaders',
        description: 'Supported types of custom document loaders for embeddings.',
        enum: ['default', 'intercom'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket_name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.embeddings.create(body)));
};

export default { metadata, tool, handler };
