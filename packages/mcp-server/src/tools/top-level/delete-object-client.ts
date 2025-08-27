// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/{bucketName}/{objectName}',
  operationId: 'DeleteObject',
};

export const tool: Tool = {
  name: 'delete_object_client',
  description: 'Delete an object from a given bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      objectName: {
        type: 'string',
      },
    },
    required: ['bucketName', 'objectName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { objectName, ...body } = args as any;
  const response = await client.deleteObject(objectName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
