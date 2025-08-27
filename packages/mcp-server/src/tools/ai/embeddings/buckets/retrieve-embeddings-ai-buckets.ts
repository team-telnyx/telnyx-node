// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.embeddings.buckets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/embeddings/buckets/{bucket_name}',
  operationId: 'GetBucketName',
};

export const tool: Tool = {
  name: 'retrieve_embeddings_ai_buckets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all embedded files for a given user bucket, including their processing status.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'EmbeddingsBucketFilesData',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        type: 'object',\n        title: 'EmbeddingsBucketFiles',\n        properties: {\n          created_at: {\n            type: 'string',\n            title: 'Created At',\n            format: 'date-time'\n          },\n          filename: {\n            type: 'string',\n            title: 'Filename'\n          },\n          status: {\n            type: 'string',\n            title: 'Status'\n          },\n          error_reason: {\n            type: 'string',\n            title: 'Error Reason'\n          },\n          last_embedded_at: {\n            type: 'string',\n            title: 'Last Embedded At',\n            format: 'date-time'\n          },\n          updated_at: {\n            type: 'string',\n            title: 'Updated At',\n            format: 'date-time'\n          }\n        },\n        required: [          'created_at',\n          'filename',\n          'status'\n        ]\n      }\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        title: 'Bucket Name',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucket_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.embeddings.buckets.retrieve(bucket_name)),
  );
};

export default { metadata, tool, handler };
