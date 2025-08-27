// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/events',
  operationId: 'listPortingEvents',
};

export const tool: Tool = {
  name: 'list_porting_events',
  description: 'Returns a list of all porting events.',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[type], filter[porting_order_id], filter[created_at][gte], filter[created_at][lte]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Created at date range filtering operations',
            properties: {
              gte: {
                type: 'string',
                description: 'Filter by created at greater than or equal to.',
                format: 'date-time',
              },
              lte: {
                type: 'string',
                description: 'Filter by created at less than or equal to.',
                format: 'date-time',
              },
            },
          },
          porting_order_id: {
            type: 'string',
            description: 'Filter by porting order ID.',
          },
          type: {
            type: 'string',
            description: 'Filter by event type.',
            enum: [
              'porting_order.deleted',
              'porting_order.loa_updated',
              'porting_order.messaging_changed',
              'porting_order.status_changed',
              'porting_order.sharing_token_expired',
              'porting_order.new_comment',
              'porting_order.split',
            ],
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.porting.events.list(body));
};

export default { metadata, tool, handler };
