// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'room_recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/room_recordings/{room_recording_id}',
  operationId: 'DeleteRoomRecording',
};

export const tool: Tool = {
  name: 'delete_room_recordings',
  description: 'Synchronously delete a Room Recording.',
  inputSchema: {
    type: 'object',
    properties: {
      room_recording_id: {
        type: 'string',
      },
    },
    required: ['room_recording_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_recording_id, ...body } = args as any;
  const response = await client.roomRecordings.delete(room_recording_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
