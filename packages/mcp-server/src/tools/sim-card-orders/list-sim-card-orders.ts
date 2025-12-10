// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_card_orders',
  operationId: 'GetSimCardOrders',
};

export const tool: Tool = {
  name: 'list_sim_card_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all SIM card orders according to filters.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_order_list_response',\n  $defs: {\n    sim_card_order_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/sim_card_order'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    sim_card_order: {\n      type: 'object',\n      title: 'SIMCardOrder',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        cost: {\n          type: 'object',\n          description: 'An object representing the total cost of the order.',\n          properties: {\n            amount: {\n              type: 'string',\n              description: 'A string representing the cost amount.'\n            },\n            currency: {\n              type: 'string',\n              description: 'Filter by ISO 4217 currency string.'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last created.'\n        },\n        order_address: {\n          type: 'object',\n          description: 'An object representing the address information from when the order was submitted.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Uniquely identifies the address for the order.'\n            },\n            administrative_area: {\n              type: 'string',\n              description: 'State or province where the address is located.'\n            },\n            business_name: {\n              type: 'string',\n              description: 'The name of the business where the address is located.'\n            },\n            country_code: {\n              type: 'string',\n              description: 'The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.'\n            },\n            extended_address: {\n              type: 'string',\n              description: 'Supplemental field for address information.'\n            },\n            first_name: {\n              type: 'string',\n              description: 'The first name of the shipping recipient.'\n            },\n            last_name: {\n              type: 'string',\n              description: 'The last name of the shipping recipient.'\n            },\n            locality: {\n              type: 'string',\n              description: 'The name of the city where the address is located.'\n            },\n            postal_code: {\n              type: 'string',\n              description: 'Postal code for the address.'\n            },\n            street_address: {\n              type: 'string',\n              description: 'The name of the street where the address is located.'\n            }\n          }\n        },\n        quantity: {\n          type: 'integer',\n          description: 'The amount of SIM cards requested in the SIM card order.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the SIM Card order.<ul> <li><code>pending</code> - the order is waiting to be processed.</li> <li><code>processing</code> - the order is currently being processed.</li> <li><code>ready_to_ship</code> - the order is ready to be shipped to the specified <b>address</b>.</li> <li><code>shipped</code> - the order was shipped and is on its way to be delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the order was delivered to the specified <b>address</b>.</li> <li><code>canceled</code> - the order was canceled.</li> </ul>',\n          enum: [            'pending',\n            'processing',\n            'ready_to_ship',\n            'shipped',\n            'delivered',\n            'canceled'\n          ]\n        },\n        tracking_url: {\n          type: 'string',\n          description: 'The URL used to get tracking information about the order.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for SIM card orders (deepObject style). Originally: filter[created_at], filter[updated_at], filter[quantity], filter[cost.amount], filter[cost.currency], filter[address.id], filter[address.street_address], filter[address.extended_address], filter[address.locality], filter[address.administrative_area], filter[address.country_code], filter[address.postal_code]',
        properties: {
          'address.administrative_area': {
            type: 'string',
            description: 'Filter by state or province where the address is located.',
          },
          'address.country_code': {
            type: 'string',
            description:
              'Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.',
          },
          'address.extended_address': {
            type: 'string',
            description:
              'Returns entries with matching name of the supplemental field for address information.',
          },
          'address.id': {
            type: 'string',
            description: 'Uniquely identifies the address for the order.',
          },
          'address.locality': {
            type: 'string',
            description: 'Filter by the name of the city where the address is located.',
          },
          'address.postal_code': {
            type: 'string',
            description: 'Filter by postal code for the address.',
          },
          'address.street_address': {
            type: 'string',
            description: 'Returns entries with matching name of the street where the address is located.',
          },
          'cost.amount': {
            type: 'string',
            description: 'The total monetary amount of the order.',
          },
          'cost.currency': {
            type: 'string',
            description: 'Filter by ISO 4217 currency string.',
          },
          created_at: {
            type: 'string',
            description:
              'Filter by ISO 8601 formatted date-time string matching resource creation date-time.',
            format: 'date-time',
          },
          quantity: {
            type: 'integer',
            description: 'Filter orders by how many SIM cards were ordered.',
          },
          updated_at: {
            type: 'string',
            description:
              'Filter by ISO 8601 formatted date-time string matching resource last update date-time.',
            format: 'date-time',
          },
        },
      },
      page: {
        type: 'object',
        description:
          'Consolidated pagination parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.simCardOrders.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
