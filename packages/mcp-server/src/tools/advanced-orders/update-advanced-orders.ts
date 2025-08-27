// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'advanced_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/advanced_orders/{order_id}',
  operationId: 'update_advanced_order_v2',
};

export const tool: Tool = {
  name: 'update_advanced_orders',
  description: 'Update Advanced Order',
  inputSchema: {
    type: 'object',
    properties: {
      order_id: {
        type: 'string',
        title: 'Order Id',
      },
      area_code: {
        type: 'string',
        title: 'Area Code',
      },
      comments: {
        type: 'string',
        title: 'Comments',
      },
      country_code: {
        type: 'string',
        title: 'Country Code',
      },
      customer_reference: {
        type: 'string',
        title: 'Customer Reference',
      },
      features: {
        type: 'array',
        title: 'Features',
        items: {
          type: 'string',
          enum: ['sms', 'mms', 'voice', 'fax', 'emergency'],
        },
      },
      phone_number_type: {
        type: 'string',
        enum: ['local', 'mobile', 'toll_free', 'shared_cost', 'national', 'landline'],
      },
      quantity: {
        type: 'integer',
        title: 'Quantity',
      },
      requirement_group_id: {
        type: 'string',
        title: 'Requirement Group ID',
        description: 'The ID of the requirement group to associate with this advanced order',
      },
    },
    required: ['order_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { order_id, ...body } = args as any;
  return asTextContentResult((await client.advancedOrders.update(order_id, body)) as object);
};

export default { metadata, tool, handler };
