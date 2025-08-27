// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{id}',
  operationId: 'GetPortingOrder',
};

export const tool: Tool = {
  name: 'retrieve_porting_orders',
  description: 'Retrieves the details of an existing porting order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      include_phone_numbers: {
        type: 'boolean',
        description: 'Include the first 50 phone number objects in the results',
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
  return asTextContentResult(await client.portingOrders.retrieve(id, body));
};

export default { metadata, tool, handler };
