// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_card_orders/{id}',
  operationId: 'GetSimCardOrder',
};

export const tool: Tool = {
  name: 'retrieve_sim_card_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single SIM card order by its ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/sim_card_order'\n    }\n  },\n  $defs: {\n    sim_card_order: {\n      type: 'object',\n      title: 'SIMCardOrder',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        cost: {\n          type: 'object',\n          description: 'An object representing the total cost of the order.',\n          properties: {\n            amount: {\n              type: 'string',\n              description: 'A string representing the cost amount.'\n            },\n            currency: {\n              type: 'string',\n              description: 'Filter by ISO 4217 currency string.'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last created.'\n        },\n        order_address: {\n          type: 'object',\n          description: 'An object representing the address information from when the order was submitted.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Uniquely identifies the address for the order.'\n            },\n            administrative_area: {\n              type: 'string',\n              description: 'State or province where the address is located.'\n            },\n            business_name: {\n              type: 'string',\n              description: 'The name of the business where the address is located.'\n            },\n            country_code: {\n              type: 'string',\n              description: 'The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.'\n            },\n            extended_address: {\n              type: 'string',\n              description: 'Supplemental field for address information.'\n            },\n            first_name: {\n              type: 'string',\n              description: 'The first name of the shipping recipient.'\n            },\n            last_name: {\n              type: 'string',\n              description: 'The last name of the shipping recipient.'\n            },\n            locality: {\n              type: 'string',\n              description: 'The name of the city where the address is located.'\n            },\n            postal_code: {\n              type: 'string',\n              description: 'Postal code for the address.'\n            },\n            street_address: {\n              type: 'string',\n              description: 'The name of the street where the address is located.'\n            }\n          }\n        },\n        quantity: {\n          type: 'integer',\n          description: 'The amount of SIM cards requested in the SIM card order.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the SIM Card order.<ul> <li><code>pending</code> - the order is waiting to be processed.</li> <li><code>processing</code> - the order is currently being processed.</li> <li><code>ready_to_ship</code> - the order is ready to be shipped to the specified <b>address</b>.</li> <li><code>shipped</code> - the order was shipped and is on its way to be delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the order was delivered to the specified <b>address</b>.</li> <li><code>canceled</code> - the order was canceled.</li> </ul>',\n          enum: [            'pending',\n            'processing',\n            'ready_to_ship',\n            'shipped',\n            'delivered',\n            'canceled'\n          ]\n        },\n        tracking_url: {\n          type: 'string',\n          description: 'The URL used to get tracking information about the order.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.simCardOrders.retrieve(id)));
};

export default { metadata, tool, handler };
