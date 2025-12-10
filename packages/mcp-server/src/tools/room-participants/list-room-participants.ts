// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'room_participants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/room_participants',
  operationId: 'ListRoomParticipants',
};

export const tool: Tool = {
  name: 'list_room_participants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView a list of room participants.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/room_participant'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    room_participant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for the room participant.'\n        },\n        context: {\n          type: 'string',\n          description: 'Context provided to the given participant through the client SDK'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant joined the session.',\n          format: 'date-time'\n        },\n        left_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant left the session.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string'\n        },\n        session_id: {\n          type: 'string',\n          description: 'Identify the room session that participant is part of.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the participant was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[date_joined_at][eq], filter[date_joined_at][gte], filter[date_joined_at][lte], filter[date_updated_at][eq], filter[date_updated_at][gte], filter[date_updated_at][lte], filter[date_left_at][eq], filter[date_left_at][gte], filter[date_left_at][lte], filter[context], filter[session_id]',
        properties: {
          context: {
            type: 'string',
            description: 'Filter room participants based on the context.',
          },
          date_joined_at: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants that joined on that date.',
                format: 'date',
              },
              gte: {
                type: 'string',
                description:
                  'ISO 8601 date for filtering room participants that joined on or after that date.',
                format: 'date',
              },
              lte: {
                type: 'string',
                description:
                  'ISO 8601 date for filtering room participants that joined on or before that date.',
                format: 'date',
              },
            },
          },
          date_left_at: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants that left on that date.',
                format: 'date',
              },
              gte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants that left on or after that date.',
                format: 'date',
              },
              lte: {
                type: 'string',
                description:
                  'ISO 8601 date for filtering room participants that left on or before that date.',
                format: 'date',
              },
            },
          },
          date_updated_at: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants updated on that date.',
                format: 'date',
              },
              gte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants updated on or after that date.',
                format: 'date',
              },
              lte: {
                type: 'string',
                description: 'ISO 8601 date for filtering room participants updated on or before that date.',
                format: 'date',
              },
            },
          },
          session_id: {
            type: 'string',
            description: 'Session_id for filtering room participants.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.roomParticipants.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
