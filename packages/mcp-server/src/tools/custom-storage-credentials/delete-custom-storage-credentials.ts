// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'custom_storage_credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/custom_storage_credentials/{connection_id}',
  operationId: 'DeleteCustomStorageCredentials',
};

export const tool: Tool = {
  name: 'delete_custom_storage_credentials',
  description: 'Deletes a stored custom credentials configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
    },
    required: ['connection_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connection_id, ...body } = args as any;
  const response = await client.customStorageCredentials.delete(connection_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
