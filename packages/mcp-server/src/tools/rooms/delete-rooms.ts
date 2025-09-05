// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/rooms/{room_id}',
  operationId: 'DeleteRoom',
};

export const tool: Tool = {
  name: 'delete_rooms',
  description:
    "Synchronously delete a Room. Participants from that room will be kicked out, they won't be able to join that room anymore, and you won't be charged anymore for that room.",
  inputSchema: {
    type: 'object',
    properties: {
      room_id: {
        type: 'string',
      },
    },
    required: ['room_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_id, ...body } = args as any;
  const response = await client.rooms.delete(room_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
