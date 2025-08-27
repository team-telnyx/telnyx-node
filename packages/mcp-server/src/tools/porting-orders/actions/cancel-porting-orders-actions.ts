// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{id}/actions/cancel',
  operationId: 'CancelPortingOrder',
};

export const tool: Tool = {
  name: 'cancel_porting_orders_actions',
  description: 'Cancel a porting order',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.portingOrders.actions.cancel(id));
};

export default { metadata, tool, handler };
