// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verified_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/verified_numbers',
  operationId: 'CreateVerifiedNumber',
};

export const tool: Tool = {
  name: 'create_verified_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates phone number verification procedure. Supports DTMF extension dialing for voice calls to numbers behind IVR systems.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verified_number_create_response',\n  $defs: {\n    verified_number_create_response: {\n      type: 'object',\n      title: 'CreateVerifiedNumberResponse',\n      properties: {\n        phone_number: {\n          type: 'string'\n        },\n        verification_method: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number: {
        type: 'string',
      },
      verification_method: {
        type: 'string',
        description: 'Verification method.',
        enum: ['sms', 'call'],
      },
      extension: {
        type: 'string',
        description:
          "Optional DTMF extension sequence to dial after the call is answered. This parameter enables verification of phone numbers behind IVR systems that require extension dialing. Valid characters: digits 0-9, letters A-D, symbols * and #. Pauses: w = 0.5 second pause, W = 1 second pause. Maximum length: 50 characters. Only works with 'call' verification method.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_number', 'verification_method'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.verifiedNumbers.create(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
