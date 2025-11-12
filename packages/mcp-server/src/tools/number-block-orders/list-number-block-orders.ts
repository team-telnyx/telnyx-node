// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_block_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/number_block_orders',
  operationId: 'ListNumberBlockOrders',
};

export const tool: Tool = {
  name: 'list_number_block_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated list of number block orders.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_block_order_list_response',\n  $defs: {\n    number_block_order_list_response: {\n      type: 'object',\n      title: 'List Number Block Orders Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/number_block_order'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    number_block_order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated to all numbers in the phone number block.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the number order was created.',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Identifies the messaging profile associated to all numbers in the phone number block.'\n        },\n        phone_numbers_count: {\n          type: 'integer',\n          description: 'The count of phone numbers in the number order.'\n        },\n        range: {\n          type: 'integer',\n          description: 'The phone number range included in the block.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        requirements_met: {\n          type: 'boolean',\n          description: 'True if all requirements are met for every phone number, false otherwise.'\n        },\n        starting_number: {\n          type: 'string',\n          description: 'Starting phone number block'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the order.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the number order was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[status], filter[created_at], filter[phone_numbers.starting_number]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Filter number block orders by date range.',
            properties: {
              gt: {
                type: 'string',
                description: 'Filter number block orders later than this value.',
              },
              lt: {
                type: 'string',
                description: 'Filter number block orders earlier than this value.',
              },
            },
          },
          'phone_numbers.starting_number': {
            type: 'string',
            description: 'Filter number block  orders having these phone numbers.',
          },
          status: {
            type: 'string',
            description: 'Filter number block orders by status.',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.numberBlockOrders.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
