// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{bucketName}/{objectName}',
  operationId: 'GetObject',
};

export const tool: Tool = {
  name: 'get_object_client',
  description: 'Retrieves an object from a given bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      objectName: {
        type: 'string',
      },
      uploadId: {
        type: 'string',
      },
    },
    required: ['bucketName', 'objectName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { objectName, ...body } = args as any;
  return asBinaryContentResult(await client.getObject(objectName, body));
};

export default { metadata, tool, handler };
