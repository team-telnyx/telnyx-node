// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'advanced_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/advanced_orders/{order_id}',
  operationId: 'get_advanced_order_v2',
};

export const tool: Tool = {
  name: 'retrieve_advanced_orders',
  description: 'Get Advanced Order',
  inputSchema: {
    type: 'object',
    properties: {
      order_id: {
        type: 'string',
        title: 'Order Id',
      },
    },
    required: ['order_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { order_id, ...body } = args as any;
  return asTextContentResult((await client.advancedOrders.retrieve(order_id)) as object);
};

export default { metadata, tool, handler };
