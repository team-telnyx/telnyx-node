// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

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
      customer_group_reference: {
        type: 'string',
        description: 'A customer-specified group reference for customer bookkeeping purposes',
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
  try {
    return asTextContentResult(await client.portingOrders.create(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
