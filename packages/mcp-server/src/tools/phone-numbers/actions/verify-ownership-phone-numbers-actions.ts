// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/phone_numbers/actions/verify_ownership',
  operationId: 'VerifyPhoneNumberOwnership',
};

export const tool: Tool = {
  name: 'verify_ownership_phone_numbers_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerifies ownership of the provided phone numbers and returns a mapping of numbers to their IDs, plus a list of numbers not found in the account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_verify_ownership_response',\n  $defs: {\n    action_verify_ownership_response: {\n      type: 'object',\n      title: 'Phone Number Verify Ownership Response',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            found: {\n              type: 'array',\n              description: 'The list of phone numbers which you own and are in an editable state',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Identifies the resource.'\n                  },\n                  number_val_e164: {\n                    type: 'string',\n                    description: 'The phone number in E.164 format'\n                  }\n                }\n              }\n            },\n            not_found: {\n              type: 'array',\n              description: 'Phone numbers that are not found in the account',\n              items: {\n                type: 'string',\n                description: 'Phone number in E.164 format'\n              }\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description: 'Array of phone numbers to verify ownership for',
        items: {
          type: 'string',
          description: 'Phone number in E.164 format',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.phoneNumbers.actions.verifyOwnership(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
