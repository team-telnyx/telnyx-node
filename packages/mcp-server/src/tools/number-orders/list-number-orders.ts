// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/number_orders',
  operationId: 'ListNumberOrders',
};

export const tool: Tool = {
  name: 'list_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated list of number orders.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_order_list_response',\n  $defs: {\n    number_order_list_response: {\n      type: 'object',\n      title: 'List Number Orders Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Number Order With Phone Numbers',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              billing_group_id: {\n                type: 'string',\n                description: 'Identifies the messaging profile associated with the phone number.'\n              },\n              connection_id: {\n                type: 'string',\n                description: 'Identifies the connection associated with this phone number.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'An ISO 8901 datetime string denoting when the number order was created.',\n                format: 'date-time'\n              },\n              customer_reference: {\n                type: 'string',\n                description: 'A customer reference string for customer look ups.'\n              },\n              messaging_profile_id: {\n                type: 'string',\n                description: 'Identifies the messaging profile associated with the phone number.'\n              },\n              phone_numbers: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  description: 'The unique phone numbers given as arguments in the job creation.',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'The phone number\\'s ID'\n                    },\n                    phone_number: {\n                      type: 'string',\n                      description: 'The phone number in e164 format.'\n                    }\n                  }\n                }\n              },\n              phone_numbers_count: {\n                type: 'integer',\n                description: 'The count of phone numbers in the number order.'\n              },\n              record_type: {\n                type: 'string'\n              },\n              requirements_met: {\n                type: 'boolean',\n                description: 'True if all requirements are met for every phone number, false otherwise.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the order.',\n                enum: [                  'pending',\n                  'success',\n                  'failure'\n                ]\n              },\n              sub_number_orders_ids: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              updated_at: {\n                type: 'string',\n                description: 'An ISO 8901 datetime string for when the number order was updated.',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[status], filter[created_at], filter[phone_numbers_count], filter[customer_reference], filter[requirements_met]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Filter number orders by date range.',
            properties: {
              gt: {
                type: 'string',
                description: 'Filter number orders later than this value.',
              },
              lt: {
                type: 'string',
                description: 'Filter number orders earlier than this value.',
              },
            },
          },
          customer_reference: {
            type: 'string',
            description: 'Filter number orders via the customer reference set.',
          },
          phone_numbers_count: {
            type: 'string',
            description: 'Filter number order with this amount of numbers',
          },
          requirements_met: {
            type: 'boolean',
            description: 'Filter number orders by requirements met.',
          },
          status: {
            type: 'string',
            description: 'Filter number orders by status.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.numberOrders.list(body)));
};

export default { metadata, tool, handler };
