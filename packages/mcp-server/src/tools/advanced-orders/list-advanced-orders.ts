// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'advanced_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/advanced_orders',
  operationId: 'list_advanced_orders_v2',
};

export const tool: Tool = {
  name: 'list_advanced_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Advanced Orders\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/advanced_order_list_response',\n  $defs: {\n    advanced_order_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Advanced Order',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id'\n              },\n              area_code: {\n                type: 'string',\n                title: 'Area Code'\n              },\n              comments: {\n                type: 'string',\n                title: 'Comments'\n              },\n              country_code: {\n                type: 'string',\n                title: 'Country Code'\n              },\n              customer_reference: {\n                type: 'string',\n                title: 'Customer Reference'\n              },\n              features: {\n                type: 'array',\n                title: 'Features',\n                items: {\n                  type: 'string',\n                  enum: [                    'sms',\n                    'mms',\n                    'voice',\n                    'fax',\n                    'emergency'\n                  ]\n                }\n              },\n              orders: {\n                type: 'array',\n                title: 'Orders',\n                items: {\n                  type: 'string'\n                }\n              },\n              phone_number_type: {\n                type: 'array',\n                items: {\n                  type: 'string',\n                  enum: [                    'local',\n                    'mobile',\n                    'toll_free',\n                    'shared_cost',\n                    'national',\n                    'landline'\n                  ]\n                }\n              },\n              quantity: {\n                type: 'integer',\n                title: 'Quantity'\n              },\n              requirement_group_id: {\n                type: 'string',\n                title: 'Requirement Group ID',\n                description: 'The ID of the requirement group associated with this advanced order'\n              },\n              status: {\n                type: 'array',\n                items: {\n                  type: 'string',\n                  enum: [                    'pending',\n                    'processing',\n                    'ordered'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.advancedOrders.list()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
