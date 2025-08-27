// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/{bucketName}',
  operationId: 'CreateBucket',
};

export const tool: Tool = {
  name: 'create_bucket_client',
  description: 'Create a bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      LocationConstraint: {
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
  const response = await client.createBucket(bucketName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
