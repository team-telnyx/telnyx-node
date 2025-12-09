// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.associated_phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{porting_order_id}/associated_phone_numbers',
  operationId: 'listPortingAssociatedPhoneNumbers',
};

export const tool: Tool = {
  name: 'list_porting_orders_associated_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all associated phone numbers for a porting order. Associated phone numbers are used for partial porting in GB to specify which phone numbers should be kept or disconnected.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/porting_associated_phone_number'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    porting_associated_phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this associated phone number.'\n        },\n        action: {\n          type: 'string',\n          description: 'Specifies the action to take with this phone number during partial porting.',\n          enum: [            'keep',\n            'disconnect'\n          ]\n        },\n        country_code: {\n          type: 'string',\n          description: 'Specifies the country code for this associated phone number. It is a two-letter ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        phone_number_range: {\n          type: 'object',\n          description: 'Specifies the phone number range for this associated phone number.',\n          properties: {\n            end_at: {\n              type: 'string',\n              description: 'Specifies the end of the phone number range for this associated phone number.'\n            },\n            start_at: {\n              type: 'string',\n              description: 'Specifies the start of the phone number range for this associated phone number.'\n            }\n          }\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Specifies the phone number type for this associated phone number.',\n          enum: [            'landline',\n            'local',\n            'mobile',\n            'national',\n            'shared_cost',\n            'toll_free'\n          ]\n        },\n        porting_order_id: {\n          type: 'string',\n          description: 'Identifies the porting order associated with this phone number.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[phone_number], filter[action]',
        properties: {
          action: {
            type: 'string',
            description: 'Filter results by action type',
            enum: ['keep', 'disconnect'],
          },
          phone_number: {
            type: 'string',
            description: 'Filter results by a phone number. It should be in E.164 format.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
      sort: {
        type: 'object',
        description: 'Consolidated sort parameter (deepObject style). Originally: sort[value]',
        properties: {
          value: {
            type: 'string',
            description:
              'Specifies the sort order for results. If not given, results are sorted by created_at in descending order',
            enum: ['-created_at', 'created_at'],
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
    required: ['porting_order_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { porting_order_id, jq_filter, ...body } = args as any;
  const response = await client.portingOrders.associatedPhoneNumbers
    .list(porting_order_id, body)
    .asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
