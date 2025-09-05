// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'room_compositions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/room_compositions',
  operationId: 'CreateRoomComposition',
};

export const tool: Tool = {
  name: 'create_room_compositions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAsynchronously create a room composition.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/room_composition'\n    }\n  },\n  $defs: {\n    room_composition: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room composition.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room composition has completed.',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room composition was created.',\n          format: 'date-time'\n        },\n        download_url: {\n          type: 'string',\n          description: 'Url to download the composition.'\n        },\n        duration_secs: {\n          type: 'integer',\n          description: 'Shows the room composition duration in seconds.'\n        },\n        ended_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room composition has ended.',\n          format: 'date-time'\n        },\n        format: {\n          type: 'string',\n          description: 'Shows format of the room composition.',\n          enum: [            'mp4'\n          ]\n        },\n        record_type: {\n          type: 'string'\n        },\n        room_id: {\n          type: 'string',\n          description: 'Identify the room associated with the room composition.'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session associated with the room composition.'\n        },\n        size_mb: {\n          type: 'number',\n          description: 'Shows the room composition size in MB.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room composition has stated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Shows the room composition status.',\n          enum: [            'completed',\n            'enqueued',\n            'processing'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room composition was updated.',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'Identify the user associated with the room composition.'\n        },\n        video_layout: {\n          type: 'object',\n          description: 'Describes the video layout of the room composition in terms of regions. Limited to 2 regions.',\n          additionalProperties: true\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this room composition will be sent if sending to the primary URL fails. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this room composition will be sent. Must include a scheme, such as \\'https\\'.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer',\n          description: 'Specifies how many seconds to wait before timing out a webhook.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'The desired format of the room composition.',
      },
      resolution: {
        type: 'string',
        description:
          'The desired resolution (width/height in pixels) of the resulting video of the room composition. Both width and height are required to be between 16 and 1280; and width * height should not exceed 1280 * 720',
      },
      session_id: {
        type: 'string',
        description: 'id of the room session associated with the room composition.',
      },
      video_layout: {
        type: 'object',
        description: 'Describes the video layout of the room composition in terms of regions.',
        additionalProperties: true,
      },
      webhook_event_failover_url: {
        type: 'string',
        description:
          "The failover URL where webhooks related to this room composition will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
      },
      webhook_event_url: {
        type: 'string',
        description:
          "The URL where webhooks related to this room composition will be sent. Must include a scheme, such as 'https'.",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.roomCompositions.create(body)));
};

export default { metadata, tool, handler };
