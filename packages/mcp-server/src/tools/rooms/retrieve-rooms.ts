// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/rooms/{room_id}',
  operationId: 'ViewRoom',
};

export const tool: Tool = {
  name: 'retrieve_rooms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView a room.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/room_retrieve_response',\n  $defs: {\n    room_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/room'\n        }\n      }\n    },\n    room: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room.'\n        },\n        active_session_id: {\n          type: 'string',\n          description: 'The identifier of the active room session if any.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was created.',\n          format: 'date-time'\n        },\n        enable_recording: {\n          type: 'boolean',\n          description: 'Enable or disable recording for that room.'\n        },\n        max_participants: {\n          type: 'integer',\n          description: 'Maximum participants allowed in the room.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        sessions: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/room_session'\n          }\n        },\n        unique_name: {\n          type: 'string',\n          description: 'The unique (within the Telnyx account scope) name of the room.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was updated.',\n          format: 'date-time'\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this room will be sent if sending to the primary URL fails. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this room will be sent. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer',\n          description: 'Specifies how many seconds to wait before timing out a webhook.'\n        }\n      }\n    },\n    room_session: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room session.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Shows if the room session is active or not.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session was created.',\n          format: 'date-time'\n        },\n        ended_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session has ended.',\n          format: 'date-time'\n        },\n        participants: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/room_participant'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        room_id: {\n          type: 'string',\n          description: 'Identify the room hosting that room session.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    room_participant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room participant.'\n        },\n        context: {\n          type: 'string',\n          description: 'Context provided to the given participant through the client SDK'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant joined the session.',\n          format: 'date-time'\n        },\n        left_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant left the session.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session that participant is part of.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_id: {
        type: 'string',
      },
      include_sessions: {
        type: 'boolean',
        description: 'To decide if room sessions should be included in the response.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['room_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.rooms.retrieve(room_id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
