// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_hosted_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_hosted_number_orders/{id}/validation_codes',
  operationId: 'ValidateVerificationCodesForMessagingHostedNumberOrder',
};

export const tool: Tool = {
  name: 'validate_codes_messaging_hosted_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidate the verification codes sent to the numbers of the hosted order. The verification codes must be created in the verification codes endpoint.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_hosted_number_order_validate_codes_response',\n  $defs: {\n    messaging_hosted_number_order_validate_codes_response: {\n      type: 'object',\n      title: 'Retrieve Messaging Hosted Number Response',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            order_id: {\n              type: 'string'\n            },\n            phone_numbers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  phone_number: {\n                    type: 'string'\n                  },\n                  status: {\n                    type: 'string',\n                    enum: [                      'verified',\n                      'rejected',\n                      'already_verified'\n                    ]\n                  }\n                },\n                required: [                  'phone_number',\n                  'status'\n                ]\n              }\n            }\n          },\n          required: [            'order_id',\n            'phone_numbers'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      verification_codes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
            },
            phone_number: {
              type: 'string',
            },
          },
          required: ['code', 'phone_number'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'verification_codes'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.messagingHostedNumberOrders.validateCodes(id, body)),
  );
};

export default { metadata, tool, handler };
