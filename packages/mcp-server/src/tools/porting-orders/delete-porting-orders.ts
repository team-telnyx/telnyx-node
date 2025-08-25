// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/porting_orders/{id}',
  operationId: 'DeletePortingOrder',
};

export const tool: Tool = {
  name: 'delete_porting_orders',
  description:
    'Deletes an existing porting order. This operation is restrict to porting orders in draft state.',
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
  const response = await client.portingOrders.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
