// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting.events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting/events/{id}/republish',
  operationId: 'republishPortingEvent',
};

export const tool: Tool = {
  name: 'republish_porting_events',
  description: 'Republish a specific porting event.',
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
  const response = await client.porting.events.republish(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
