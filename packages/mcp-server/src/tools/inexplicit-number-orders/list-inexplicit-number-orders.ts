// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'inexplicit_number_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/inexplicit_number_orders',
  operationId: 'ListInexplicitNumberOrders',
};

export const tool: Tool = {
  name: 'list_inexplicit_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated list of inexplicit number orders.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/inexplicit_number_order_list_response',\n  $defs: {\n    inexplicit_number_order_list_response: {\n      type: 'object',\n      title: 'List Inexplicit Number Orders Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the inexplicit number order'\n              },\n              billing_group_id: {\n                type: 'string',\n                description: 'Billing group id to apply to phone numbers that are purchased'\n              },\n              connection_id: {\n                type: 'string',\n                description: 'Connection id to apply to phone numbers that are purchased'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created',\n                format: 'date-time'\n              },\n              customer_reference: {\n                type: 'string',\n                description: 'Reference label for the customer'\n              },\n              messaging_profile_id: {\n                type: 'string',\n                description: 'Messaging profile id to apply to phone numbers that are purchased'\n              },\n              ordering_groups: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    administrative_area: {\n                      type: 'string',\n                      description: 'Filter for phone numbers in a given state / province'\n                    },\n                    count_allocated: {\n                      type: 'integer',\n                      description: 'Quantity of phone numbers allocated'\n                    },\n                    count_requested: {\n                      type: 'integer',\n                      description: 'Quantity of phone numbers requested'\n                    },\n                    country_iso: {\n                      type: 'string',\n                      description: 'Country where you would like to purchase phone numbers'\n                    },\n                    created_at: {\n                      type: 'string',\n                      description: 'ISO 8601 formatted date indicating when the ordering group was created',\n                      format: 'date-time'\n                    },\n                    error_reason: {\n                      type: 'string',\n                      description: 'Error reason if applicable'\n                    },\n                    national_destination_code: {\n                      type: 'string',\n                      description: 'Filter by area code'\n                    },\n                    orders: {\n                      type: 'array',\n                      description: 'Array of orders created to fulfill the inexplicit order',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          number_order_id: {\n                            type: 'string',\n                            description: 'ID of the main number order'\n                          },\n                          sub_number_order_ids: {\n                            type: 'array',\n                            description: 'Array of sub number order IDs',\n                            items: {\n                              type: 'string'\n                            }\n                          }\n                        },\n                        required: [                          'number_order_id',\n                          'sub_number_order_ids'\n                        ]\n                      }\n                    },\n                    phone_number_type: {\n                      type: 'string',\n                      description: 'Number type'\n                    },\n                    'phone_number[contains]': {\n                      type: 'string',\n                      description: 'Filter for phone numbers that contain the digits specified'\n                    },\n                    'phone_number[ends_with]': {\n                      type: 'string',\n                      description: 'Filter by the ending digits of the phone number'\n                    },\n                    'phone_number[starts_with]': {\n                      type: 'string',\n                      description: 'Filter by the starting digits of the phone number'\n                    },\n                    status: {\n                      type: 'string',\n                      description: 'Status of the ordering group',\n                      enum: [                        'pending',\n                        'processing',\n                        'failed',\n                        'success',\n                        'partial_success'\n                      ]\n                    },\n                    strategy: {\n                      type: 'string',\n                      description: 'Ordering strategy used',\n                      enum: [                        'always',\n                        'never'\n                      ]\n                    },\n                    updated_at: {\n                      type: 'string',\n                      description: 'ISO 8601 formatted date indicating when the ordering group was updated',\n                      format: 'date-time'\n                    }\n                  }\n                }\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page_number: {
        type: 'integer',
        description: 'The page number to load',
      },
      page_size: {
        type: 'integer',
        description: 'The size of the page',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.inexplicitNumberOrders.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
