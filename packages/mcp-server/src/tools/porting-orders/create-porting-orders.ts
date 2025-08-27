// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders',
  operationId: 'CreatePortingOrder',
};

export const tool: Tool = {
  name: 'create_porting_orders',
  description: 'Creates a new porting order object.',
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description: 'The list of +E.164 formatted phone numbers',
        items: {
          type: 'string',
        },
      },
      customer_reference: {
        type: 'string',
        description: 'A customer-specified reference number for customer bookkeeping purposes',
      },
    },
    required: ['phone_numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.portingOrders.create(body));
};

export default { metadata, tool, handler };
