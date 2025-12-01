// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging.rcs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/messaging/rcs/test_number_invite/{id}/{phone_number}',
};

export const tool: Tool = {
  name: 'invite_test_number_messaging_rcs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdds a test phone number to an RCS agent for testing purposes.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/rc_invite_test_number_response',\n  $defs: {\n    rc_invite_test_number_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            agent_id: {\n              type: 'string',\n              description: 'RCS agent ID'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'Phone number that was invited for testing'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource',\n              enum: [                'rcs.test_number_invite'\n              ]\n            },\n            status: {\n              type: 'string',\n              description: 'Status of the test number invitation'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      phone_number: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'phone_number'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messaging.rcs.inviteTestNumber(phone_number, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
