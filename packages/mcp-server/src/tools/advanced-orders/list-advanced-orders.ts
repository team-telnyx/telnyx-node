// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'advanced_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/advanced_orders',
  operationId: 'list_advanced_orders_v2',
};

export const tool: Tool = {
  name: 'list_advanced_orders',
  description: 'List Advanced Orders',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.advancedOrders.list()) as object);
};

export default { metadata, tool, handler };
