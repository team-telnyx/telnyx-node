// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.embeddings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/embeddings/similarity-search',
  operationId: 'PostEmbeddingSimilaritySearch',
};

export const tool: Tool = {
  name: 'similarity_search_ai_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform a similarity search on a Telnyx Storage Bucket, returning the most similar `num_docs` document chunks to the query.\n\nCurrently the only available distance metric is cosine similarity which will return a `distance` between 0 and 1.\nThe lower the distance, the more similar the returned document chunks are to the query.\nA `certainty` will also be returned, which is a value between 0 and 1 where the higher the certainty, the more similar the document.\nYou can read more about Weaviate distance metrics here: [Weaviate Docs](https://weaviate.io/developers/weaviate/config-refs/distances)\n\nIf a bucket was embedded using a custom loader, such as `intercom`, the additional metadata will be returned in the \n`loader_metadata` field.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'EmbeddingSimilaritySearchResponse',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        type: 'object',\n        title: 'EmbeddingSimilaritySearchDocument',\n        description: 'Example document response from embedding service\\n{\\n  \"document_chunk\": \"your status? This is Vanessa Bloome...\",\\n  \"distance\": 0.18607724,\\n  \"metadata\": {\\n    \"source\": \"https://us-central-1.telnyxstorage.com/scripts/bee_movie_script.txt\",\\n    \"checksum\": \"343054dd19bab39bbf6761a3d20f1daa\",\\n    \"embedding\": \"openai/text-embedding-ada-002\",\\n    \"filename\": \"bee_movie_script.txt\",\\n    \"certainty\": 0.9069613814353943,\\n    \"loader_metadata\": {}\\n  }\\n}',\n        properties: {\n          distance: {\n            type: 'number',\n            title: 'Distance'\n          },\n          document_chunk: {\n            type: 'string',\n            title: 'Document Chunk'\n          },\n          metadata: {\n            type: 'object',\n            title: 'EmbeddingMetadata',\n            properties: {\n              checksum: {\n                type: 'string',\n                title: 'Checksum'\n              },\n              embedding: {\n                type: 'string',\n                title: 'Embedding'\n              },\n              filename: {\n                type: 'string',\n                title: 'Filename'\n              },\n              source: {\n                type: 'string',\n                title: 'Source'\n              },\n              certainty: {\n                type: 'number',\n                title: 'Certainty'\n              },\n              loader_metadata: {\n                type: 'object',\n                title: 'Loader Metadata',\n                additionalProperties: true\n              }\n            },\n            required: [              'checksum',\n              'embedding',\n              'filename',\n              'source'\n            ]\n          }\n        },\n        required: [          'distance',\n          'document_chunk',\n          'metadata'\n        ]\n      }\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        title: 'Bucket Name',
      },
      query: {
        type: 'string',
        title: 'Query',
      },
      num_of_docs: {
        type: 'integer',
        title: 'Num Of Docs',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket_name', 'query'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.embeddings.similaritySearch(body)));
};

export default { metadata, tool, handler };
