// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/events',
  operationId: 'listPortoutEvents',
};

export const tool: Tool = {
  name: 'list_portouts_events',
  description: 'Returns a list of all port-out events.',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[event_type], filter[portout_id], filter[created_at]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Filter by created_at date range using nested operations',
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
          event_type: {
            type: 'string',
            description: 'Filter by event type.',
            enum: ['portout.status_changed', 'portout.new_comment', 'portout.foc_date_changed'],
          },
          portout_id: {
            type: 'string',
            description: 'Filter by port-out order ID.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
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
  const response = await client.portouts.events.list(body).asResponse();
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
