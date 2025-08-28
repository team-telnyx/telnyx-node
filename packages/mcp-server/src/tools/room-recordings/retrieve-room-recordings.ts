// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'room_recordings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/room_recordings/{room_recording_id}',
  operationId: 'ViewRoomRecording',
};

export const tool: Tool = {
  name: 'retrieve_room_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView a room recording.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room recording.'\n        },\n        codec: {\n          type: 'string',\n          description: 'Shows the codec used for the room recording.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room recording has completed.',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room recording was created.',\n          format: 'date-time'\n        },\n        download_url: {\n          type: 'string',\n          description: 'Url to download the recording.'\n        },\n        duration_secs: {\n          type: 'integer',\n          description: 'Shows the room recording duration in seconds.'\n        },\n        ended_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room recording has ended.',\n          format: 'date-time'\n        },\n        participant_id: {\n          type: 'string',\n          description: 'Identify the room participant associated with the room recording.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        room_id: {\n          type: 'string',\n          description: 'Identify the room associated with the room recording.'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session associated with the room recording.'\n        },\n        size_mb: {\n          type: 'number',\n          description: 'Shows the room recording size in MB.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room recording has stated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Shows the room recording status.',\n          enum: [            'completed',\n            'processing'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Shows the room recording type.',\n          enum: [            'audio',\n            'video'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room recording was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_recording_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['room_recording_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_recording_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.roomRecordings.retrieve(room_recording_id)),
  );
};

export default { metadata, tool, handler };
