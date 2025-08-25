// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'room_recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/room_recordings',
  operationId: 'DeleteRoomRecordings',
};

export const tool: Tool = {
  name: 'delete_bulk_room_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete several room recordings in a bulk.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Bulk Room Recordings Delete Response',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        room_recordings: {\n          type: 'integer',\n          description: 'Amount of room recordings affected'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[date_ended_at][eq], filter[date_ended_at][gte], filter[date_ended_at][lte], filter[date_started_at][eq], filter[date_started_at][gte], filter[date_started_at][lte], filter[room_id], filter[participant_id], filter[session_id], filter[status], filter[type], filter[duration_secs]',
        properties: {
          date_ended_at: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings ended on that date.',
                format: 'date',
              },
              gte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings ended on or after that date.',
                format: 'date',
              },
              lte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings ended on or before that date.',
                format: 'date',
              },
            },
          },
          date_started_at: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings started on that date.',
                format: 'date',
              },
              gte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings started on or after that date.',
                format: 'date',
              },
              lte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room recordings started on or before that date.',
                format: 'date',
              },
            },
          },
          duration_secs: {
            type: 'integer',
            description: 'duration_secs greater or equal for filtering room recordings.',
          },
          participant_id: {
            type: 'string',
            description: 'participant_id for filtering room recordings.',
          },
          room_id: {
            type: 'string',
            description: 'room_id for filtering room recordings.',
          },
          session_id: {
            type: 'string',
            description: 'session_id for filtering room recordings.',
          },
          status: {
            type: 'string',
            description: 'status for filtering room recordings.',
          },
          type: {
            type: 'string',
            description: 'type for filtering room recordings.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
          },
        },
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.roomRecordings.deleteBulk(body)));
};

export default { metadata, tool, handler };
