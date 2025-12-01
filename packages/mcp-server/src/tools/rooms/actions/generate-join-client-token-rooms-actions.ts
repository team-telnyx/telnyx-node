// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'rooms.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/rooms/{room_id}/actions/generate_join_client_token',
  operationId: 'CreateRoomClientToken',
};

export const tool: Tool = {
  name: 'generate_join_client_token_rooms_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSynchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_generate_join_client_token_response',\n  $defs: {\n    action_generate_join_client_token_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            token: {\n              type: 'string'\n            },\n            refresh_token: {\n              type: 'string'\n            },\n            refresh_token_expires_at: {\n              type: 'string',\n              description: 'ISO 8601 timestamp when the refresh token expires.',\n              format: 'date-time'\n            },\n            token_expires_at: {\n              type: 'string',\n              description: 'ISO 8601 timestamp when the token expires.',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      room_id: {
        type: 'string',
      },
      refresh_token_ttl_secs: {
        type: 'integer',
        description:
          "The time to live in seconds of the Refresh Token, after that time the Refresh Token is invalid and can't be used to refresh Client Token.",
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
    required: ['room_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { room_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.rooms.actions.generateJoinClientToken(room_id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
