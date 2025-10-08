// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.associated_phone_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{porting_order_id}/associated_phone_numbers',
  operationId: 'createPortingAssociatedPhoneNumber',
};

export const tool: Tool = {
  name: 'create_porting_orders_associated_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new associated phone number for a porting order. This is used for partial porting in GB to specify which phone numbers should be kept or disconnected.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/associated_phone_number_create_response',\n  $defs: {\n    associated_phone_number_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/porting_associated_phone_number'\n        }\n      }\n    },\n    porting_associated_phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this associated phone number.'\n        },\n        action: {\n          type: 'string',\n          description: 'Specifies the action to take with this phone number during partial porting.',\n          enum: [            'keep',\n            'disconnect'\n          ]\n        },\n        country_code: {\n          type: 'string',\n          description: 'Specifies the country code for this associated phone number. It is a two-letter ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        phone_number_range: {\n          type: 'object',\n          description: 'Specifies the phone number range for this associated phone number.',\n          properties: {\n            end_at: {\n              type: 'string',\n              description: 'Specifies the end of the phone number range for this associated phone number.'\n            },\n            start_at: {\n              type: 'string',\n              description: 'Specifies the start of the phone number range for this associated phone number.'\n            }\n          }\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Specifies the phone number type for this associated phone number.',\n          enum: [            'landline',\n            'local',\n            'mobile',\n            'national',\n            'shared_cost',\n            'toll_free'\n          ]\n        },\n        porting_order_id: {\n          type: 'string',\n          description: 'Identifies the porting order associated with this phone number.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      action: {
        type: 'string',
        description: 'Specifies the action to take with this phone number during partial porting.',
        enum: ['keep', 'disconnect'],
      },
      phone_number_range: {
        type: 'object',
        properties: {
          end_at: {
            type: 'string',
            description: 'Specifies the end of the phone number range for this associated phone number.',
          },
          start_at: {
            type: 'string',
            description: 'Specifies the start of the phone number range for this associated phone number.',
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
    required: ['porting_order_id', 'action', 'phone_number_range'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { porting_order_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.portingOrders.associatedPhoneNumbers.create(porting_order_id, body),
    ),
  );
};

export default { metadata, tool, handler };
