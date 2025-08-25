// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'fqdn_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/fqdn_connections/{id}',
  operationId: 'DeleteFqdnConnection',
};

export const tool: Tool = {
  name: 'delete_fqdn_connections',
  description: 'Deletes an FQDN connection.',
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
  return asTextContentResult(await client.fqdnConnections.delete(id));
};

export default { metadata, tool, handler };
