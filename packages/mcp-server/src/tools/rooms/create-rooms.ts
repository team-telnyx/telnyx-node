// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/rooms',
  operationId: 'CreateRoom',
};

export const tool: Tool = {
  name: 'create_rooms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSynchronously create a Room.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/room_create_response',\n  $defs: {\n    room_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/room'\n        }\n      }\n    },\n    room: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room.'\n        },\n        active_session_id: {\n          type: 'string',\n          description: 'The identifier of the active room session if any.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was created.',\n          format: 'date-time'\n        },\n        enable_recording: {\n          type: 'boolean',\n          description: 'Enable or disable recording for that room.'\n        },\n        max_participants: {\n          type: 'integer',\n          description: 'Maximum participants allowed in the room.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        sessions: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/room_session'\n          }\n        },\n        unique_name: {\n          type: 'string',\n          description: 'The unique (within the Telnyx account scope) name of the room.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was updated.',\n          format: 'date-time'\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this room will be sent if sending to the primary URL fails. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this room will be sent. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer',\n          description: 'Specifies how many seconds to wait before timing out a webhook.'\n        }\n      }\n    },\n    room_session: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room session.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Shows if the room session is active or not.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session was created.',\n          format: 'date-time'\n        },\n        ended_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session has ended.',\n          format: 'date-time'\n        },\n        participants: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/room_participant'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        room_id: {\n          type: 'string',\n          description: 'Identify the room hosting that room session.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room session was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    room_participant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room participant.'\n        },\n        context: {\n          type: 'string',\n          description: 'Context provided to the given participant through the client SDK'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant joined the session.',\n          format: 'date-time'\n        },\n        left_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant left the session.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session that participant is part of.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      enable_recording: {
        type: 'boolean',
        description: 'Enable or disable recording for that room.',
      },
      max_participants: {
        type: 'integer',
        description:
          'The maximum amount of participants allowed in a room. If new participants try to join after that limit is reached, their request will be rejected.',
      },
      unique_name: {
        type: 'string',
        description: 'The unique (within the Telnyx account scope) name of the room.',
      },
      webhook_event_failover_url: {
        type: 'string',
        description:
          "The failover URL where webhooks related to this room will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
      },
      webhook_event_url: {
        type: 'string',
        description:
          "The URL where webhooks related to this room will be sent. Must include a scheme, such as 'https'.",
      },
      webhook_timeout_secs: {
        type: 'integer',
        description: 'Specifies how many seconds to wait before timing out a webhook.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.rooms.create(body)));
};

export default { metadata, tool, handler };
