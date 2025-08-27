// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms.sessions.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/room_sessions/{room_session_id}/actions/unmute',
  operationId: 'UnmuteParticipantInSession',
};

export const tool: Tool = {
  name: 'unmute_sessions_rooms_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUnmute participants in room session.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_session_id: {
        type: 'string',
      },
      exclude: {
        type: 'array',
        description: 'List of participant id to exclude from the action.',
        items: {
          type: 'string',
        },
      },
      participants: {
        anyOf: [
          {
            type: 'string',
            enum: ['all'],
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        description:
          'Either a list of participant id to perform the action on, or the keyword "all" to perform the action on all participant.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['room_session_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_session_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.rooms.sessions.actions.unmute(room_session_id, body)),
  );
};

export default { metadata, tool, handler };
