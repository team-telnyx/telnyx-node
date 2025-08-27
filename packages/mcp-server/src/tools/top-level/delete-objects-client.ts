// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{bucketName}',
  operationId: 'DeleteObjects',
};

export const tool: Tool = {
  name: 'delete_objects_client',
  description: 'Deletes one or multiple objects from a given bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      delete: {
        type: 'string',
        enum: [true],
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            Key: {
              type: 'string',
            },
          },
        },
      },
    },
    required: ['bucketName', 'delete', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, ...body } = args as any;
  return asTextContentResult((await client.deleteObjects(bucketName, body)) as object);
};

export default { metadata, tool, handler };
