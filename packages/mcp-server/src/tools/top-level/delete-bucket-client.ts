// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/{bucketName}',
  operationId: 'DeleteBucket',
};

export const tool: Tool = {
  name: 'delete_bucket_client',
  description: 'Deletes a bucket. The bucket must be empty for it to be deleted.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
    },
    required: ['bucketName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, ...body } = args as any;
  const response = await client.deleteBucket(bucketName).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
