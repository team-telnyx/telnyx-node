// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/{bucketName}/{objectName}',
  operationId: 'PutObject',
};

export const tool: Tool = {
  name: 'put_object_client',
  description: 'Add an object to a bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      objectName: {
        type: 'string',
      },
      body: {
        type: 'string',
      },
      partNumber: {
        type: 'string',
      },
      uploadId: {
        type: 'string',
      },
    },
    required: ['bucketName', 'objectName', 'body'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { objectName, ...body } = args as any;
  const response = await client.putObject(objectName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
