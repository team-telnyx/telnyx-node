// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'credential_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/credential_connections/{id}',
  operationId: 'DeleteCredentialConnection',
};

export const tool: Tool = {
  name: 'delete_credential_connections',
  description: 'Deletes an existing credential connection.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.credentialConnections.delete(id));
};

export default { metadata, tool, handler };
