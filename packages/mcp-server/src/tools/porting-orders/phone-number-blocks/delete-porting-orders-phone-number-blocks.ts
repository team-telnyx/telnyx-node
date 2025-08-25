// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.phone_number_blocks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/porting_orders/{porting_order_id}/phone_number_blocks/{id}',
  operationId: 'deletePortingPhoneNumberBlock',
};

export const tool: Tool = {
  name: 'delete_porting_orders_phone_number_blocks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a phone number block.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/porting_phone_number_block'\n    }\n  },\n  $defs: {\n    porting_phone_number_block: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this porting phone number block.'\n        },\n        activation_ranges: {\n          type: 'array',\n          description: 'Specifies the activation ranges for this porting phone number block. The activation range must be within the phone number range and should not overlap with other activation ranges.',\n          items: {\n            type: 'object',\n            properties: {\n              end_at: {\n                type: 'string',\n                description: 'Specifies the end of the activation range. It must be no more than the end of the phone number range.'\n              },\n              start_at: {\n                type: 'string',\n                description: 'Specifies the start of the activation range. Must be greater or equal the start of the phone number range.'\n              }\n            }\n          }\n        },\n        country_code: {\n          type: 'string',\n          description: 'Specifies the country code for this porting phone number block. It is a two-letter ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        phone_number_range: {\n          type: 'object',\n          description: 'Specifies the phone number range for this porting phone number block.',\n          properties: {\n            end_at: {\n              type: 'string',\n              description: 'Specifies the end of the phone number range for this porting phone number block.'\n            },\n            start_at: {\n              type: 'string',\n              description: 'Specifies the start of the phone number range for this porting phone number block.'\n            }\n          }\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Specifies the phone number type for this porting phone number block.',\n          enum: [            'landline',\n            'local',\n            'mobile',\n            'national',\n            'shared_cost',\n            'toll_free'\n          ]\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['porting_order_id', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.phoneNumberBlocks.delete(id, body)),
  );
};

export default { metadata, tool, handler };
