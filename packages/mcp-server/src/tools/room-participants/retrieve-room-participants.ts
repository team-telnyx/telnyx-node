// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'room_participants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/room_participants/{room_participant_id}',
  operationId: 'ViewRoomParticipant',
};

export const tool: Tool = {
  name: 'retrieve_room_participants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView a room participant.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/room_participant'\n    }\n  },\n  $defs: {\n    room_participant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room participant.'\n        },\n        context: {\n          type: 'string',\n          description: 'Context provided to the given participant through the client SDK'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant joined the session.',\n          format: 'date-time'\n        },\n        left_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant left the session.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session that participant is part of.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_participant_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['room_participant_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_participant_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.roomParticipants.retrieve(room_participant_id)),
  );
};

export default { metadata, tool, handler };
