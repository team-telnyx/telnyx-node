// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/events/{id}',
  operationId: 'showPortingEvent',
};

export const tool: Tool = {
  name: 'retrieve_porting_events',
  description: 'Show a specific porting event.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.porting.events.retrieve(id));
};

export default { metadata, tool, handler };
