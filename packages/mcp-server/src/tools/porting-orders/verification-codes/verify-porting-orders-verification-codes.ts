// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders.verification_codes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{id}/verification_codes/verify',
  operationId: 'VerifyPortingVerificationCodes',
};

export const tool: Tool = {
  name: 'verify_porting_orders_verification_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerifies the verification code for a list of phone numbers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Uniquely identifies this porting verification code'\n          },\n          created_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was created.',\n            format: 'date-time'\n          },\n          phone_number: {\n            type: 'string',\n            description: 'E164 formatted phone number'\n          },\n          porting_order_id: {\n            type: 'string',\n            description: 'Identifies the associated porting order'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was updated.',\n            format: 'date-time'\n          },\n          verified: {\n            type: 'boolean',\n            description: 'Indicates whether the verification code has been verified'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.verificationCodes.verify(id, body)),
  );
};

export default { metadata, tool, handler };
