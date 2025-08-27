// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders.phone_number_blocks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{porting_order_id}/phone_number_blocks',
  operationId: 'listPortingPhoneNumberBlocks',
};

export const tool: Tool = {
  name: 'list_porting_orders_phone_number_blocks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all phone number blocks of a porting order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/porting_phone_number_block'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    porting_phone_number_block: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this porting phone number block.'\n        },\n        activation_ranges: {\n          type: 'array',\n          description: 'Specifies the activation ranges for this porting phone number block. The activation range must be within the phone number range and should not overlap with other activation ranges.',\n          items: {\n            type: 'object',\n            properties: {\n              end_at: {\n                type: 'string',\n                description: 'Specifies the end of the activation range. It must be no more than the end of the phone number range.'\n              },\n              start_at: {\n                type: 'string',\n                description: 'Specifies the start of the activation range. Must be greater or equal the start of the phone number range.'\n              }\n            }\n          }\n        },\n        country_code: {\n          type: 'string',\n          description: 'Specifies the country code for this porting phone number block. It is a two-letter ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        phone_number_range: {\n          type: 'object',\n          description: 'Specifies the phone number range for this porting phone number block.',\n          properties: {\n            end_at: {\n              type: 'string',\n              description: 'Specifies the end of the phone number range for this porting phone number block.'\n            },\n            start_at: {\n              type: 'string',\n              description: 'Specifies the start of the phone number range for this porting phone number block.'\n            }\n          }\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Specifies the phone number type for this porting phone number block.',\n          enum: [            'landline',\n            'local',\n            'mobile',\n            'national',\n            'shared_cost',\n            'toll_free'\n          ]\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[porting_order_id], filter[support_key], filter[status], filter[phone_number], filter[activation_status], filter[portability_status]',
        properties: {
          activation_status: {
            type: 'string',
            description: 'Filter results by activation status',
            enum: [
              'New',
              'Pending',
              'Conflict',
              'Cancel Pending',
              'Failed',
              'Concurred',
              'Activate RDY',
              'Disconnect Pending',
              'Concurrence Sent',
              'Old',
              'Sending',
              'Active',
              'Cancelled',
            ],
          },
          phone_number: {
            type: 'array',
            description: 'Filter results by a list of phone numbers',
            items: {
              type: 'string',
            },
          },
          portability_status: {
            type: 'string',
            description: 'Filter results by portability status',
            enum: ['pending', 'confirmed', 'provisional'],
          },
          porting_order_id: {
            type: 'array',
            description: 'Filter results by a list of porting order ids',
            items: {
              type: 'string',
            },
          },
          status: {
            anyOf: [
              {
                type: 'string',
                description: 'Filter by single status',
                enum: [
                  'draft',
                  'in-process',
                  'submitted',
                  'exception',
                  'foc-date-confirmed',
                  'cancel-pending',
                  'ported',
                  'cancelled',
                ],
              },
              {
                type: 'array',
                description: 'Filter by multiple statuses (in operation)',
                items: {
                  type: 'string',
                  enum: [
                    'draft',
                    'in-process',
                    'submitted',
                    'exception',
                    'foc-date-confirmed',
                    'cancel-pending',
                    'ported',
                    'cancelled',
                  ],
                },
              },
            ],
            description:
              'Filter porting orders by status(es). Originally: filter[status], filter[status][in][]',
          },
          support_key: {
            anyOf: [
              {
                type: 'string',
                description: 'Filter by exact support key match (eq operation)',
              },
              {
                type: 'array',
                description: 'Filter by multiple support keys (in operation)',
                items: {
                  type: 'string',
                },
              },
            ],
            description:
              'Filter results by support key(s). Originally: filter[support_key][eq], filter[support_key][in][]',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.phoneNumberBlocks.list(porting_order_id, body)),
  );
};

export default { metadata, tool, handler };
