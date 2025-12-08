// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_hosted_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_hosted_number_orders/{id}/verification_codes',
  operationId: 'CreateVerificationCodesForMessagingHostedNumberOrder',
};

export const tool: Tool = {
  name: 'create_verification_codes_messaging_hosted_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate verification codes to validate numbers of the hosted order. The verification codes will be sent to the numbers of the hosted order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_hosted_number_order_create_verification_codes_response',\n  $defs: {\n    messaging_hosted_number_order_create_verification_codes_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'VerificationCodeResult',\n            description: 'Verification code result response',\n            properties: {\n              phone_number: {\n                type: 'string',\n                description: 'Phone number for which the verification code was created'\n              },\n              error: {\n                type: 'string',\n                description: 'Error message describing why the verification code creation failed'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of verification method used',\n                enum: [                  'sms',\n                  'call',\n                  'flashcall'\n                ]\n              },\n              verification_code_id: {\n                type: 'string',\n                description: 'Unique identifier for the verification code'\n              }\n            },\n            required: [              'phone_number'\n            ]\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      phone_numbers: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      verification_method: {
        type: 'string',
        enum: ['sms', 'call', 'flashcall'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'phone_numbers', 'verification_method'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.messagingHostedNumberOrders.createVerificationCodes(id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
