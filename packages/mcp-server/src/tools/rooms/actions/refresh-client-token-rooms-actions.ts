// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/rooms/{room_id}/actions/refresh_client_token',
  operationId: 'RefreshRoomClientToken',
};

export const tool: Tool = {
  name: 'refresh_client_token_rooms_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSynchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_refresh_client_token_response',\n  $defs: {\n    action_refresh_client_token_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            token: {\n              type: 'string'\n            },\n            token_expires_at: {\n              type: 'string',\n              description: 'ISO 8601 timestamp when the token expires.',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_id: {
        type: 'string',
      },
      refresh_token: {
        type: 'string',
      },
      token_ttl_secs: {
        type: 'integer',
        description:
          "The time to live in seconds of the Client Token, after that time the Client Token is invalid and can't be used to join a Room.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['room_id', 'refresh_token'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.rooms.actions.refreshClientToken(room_id, body)),
  );
};

export default { metadata, tool, handler };
