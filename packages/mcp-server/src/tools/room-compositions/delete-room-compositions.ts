// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'room_compositions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/room_compositions/{room_composition_id}',
  operationId: 'DeleteRoomComposition',
};

export const tool: Tool = {
  name: 'delete_room_compositions',
  description: 'Synchronously delete a room composition.',
  inputSchema: {
    type: 'object',
    properties: {
      room_composition_id: {
        type: 'string',
      },
    },
    required: ['room_composition_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_composition_id, ...body } = args as any;
  const response = await client.roomCompositions.delete(room_composition_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
