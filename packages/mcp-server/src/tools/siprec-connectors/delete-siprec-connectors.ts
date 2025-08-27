// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'siprec_connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/siprec_connectors/{connector_name}',
  operationId: 'deleteSiprecConnector',
};

export const tool: Tool = {
  name: 'delete_siprec_connectors',
  description: 'Deletes a stored SIPREC connector.',
  inputSchema: {
    type: 'object',
    properties: {
      connector_name: {
        type: 'string',
      },
    },
    required: ['connector_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connector_name, ...body } = args as any;
  const response = await client.siprecConnectors.delete(connector_name).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
