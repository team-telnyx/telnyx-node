// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.embeddings.buckets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/embeddings/buckets/{bucket_name}',
  operationId: 'embedding_bucket_files_public_embedding_buckets__bucket_name__delete',
};

export const tool: Tool = {
  name: 'delete_embeddings_ai_buckets',
  description:
    "Deletes an entire bucket's embeddings and disables the bucket for AI-use, returning it to normal storage pricing.",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        title: 'Bucket Name',
      },
    },
    required: ['bucket_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  const response = await client.ai.embeddings.buckets.delete(bucket_name).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
