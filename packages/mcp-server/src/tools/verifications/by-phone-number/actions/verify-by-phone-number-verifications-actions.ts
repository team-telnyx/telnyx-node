// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verifications.by_phone_number.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/verifications/by_phone_number/{phone_number}/actions/verify',
  operationId: 'VerifyVerificationCodeByPhoneNumber',
};

export const tool: Tool = {
  name: 'verify_by_phone_number_verifications_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerify verification code by phone number\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verify_verification_code_response',\n  $defs: {\n    verify_verification_code_response: {\n      type: 'object',\n      title: 'VerifyVerificationCodeResponse',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            phone_number: {\n              type: 'string',\n              description: '+E164 formatted phone number.'\n            },\n            response_code: {\n              type: 'string',\n              description: 'Identifies if the verification code has been accepted or rejected.',\n              enum: [                'accepted',\n                'rejected'\n              ]\n            }\n          },\n          required: [            'phone_number',\n            'response_code'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number: {
        type: 'string',
        description: '+E164 formatted phone number.',
      },
      code: {
        type: 'string',
        description: 'This is the code the user submits for verification.',
      },
      verify_profile_id: {
        type: 'string',
        description: 'The identifier of the associated Verify profile.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_number', 'code', 'verify_profile_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.verifications.byPhoneNumber.actions.verify(phone_number, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
