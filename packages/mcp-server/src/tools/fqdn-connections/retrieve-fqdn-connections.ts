// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'fqdn_connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fqdn_connections/{id}',
  operationId: 'RetrieveFqdnConnection',
};

export const tool: Tool = {
  name: 'retrieve_fqdn_connections',
  description: 'Retrieves the details of an existing FQDN connection.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.fqdnConnections.retrieve(id));
};

export default { metadata, tool, handler };
