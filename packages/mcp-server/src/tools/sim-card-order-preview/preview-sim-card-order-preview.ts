// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_order_preview',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sim_card_order_preview',
  operationId: 'PreviewSimCardOrders',
};

export const tool: Tool = {
  name: 'preview_sim_card_order_preview',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPreview SIM card order purchases.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_order_preview_preview_response',\n  $defs: {\n    sim_card_order_preview_preview_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'SIMCardOrderPreview',\n          properties: {\n            quantity: {\n              type: 'integer',\n              description: 'The amount of SIM cards requested in the SIM card order.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            shipping_cost: {\n              type: 'object',\n              properties: {\n                amount: {\n                  type: 'string',\n                  description: 'A string representing the cost amount.'\n                },\n                currency: {\n                  type: 'string',\n                  description: 'ISO 4217 currency string.'\n                }\n              }\n            },\n            sim_cards_cost: {\n              type: 'object',\n              properties: {\n                amount: {\n                  type: 'string',\n                  description: 'A string representing the cost amount.'\n                },\n                currency: {\n                  type: 'string',\n                  description: 'ISO 4217 currency string.'\n                }\n              }\n            },\n            total_cost: {\n              type: 'object',\n              properties: {\n                amount: {\n                  type: 'string',\n                  description: 'A string representing the cost amount.'\n                },\n                currency: {\n                  type: 'string',\n                  description: 'ISO 4217 currency string.'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address_id: {
        type: 'string',
        description: 'Uniquely identifies the address for the order.',
      },
      quantity: {
        type: 'integer',
        description: 'The amount of SIM cards that the user would like to purchase in the SIM card order.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['address_id', 'quantity'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.simCardOrderPreview.preview(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
