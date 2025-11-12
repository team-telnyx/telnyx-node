// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.action_requirements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{porting_order_id}/action_requirements',
  operationId: 'listPortingActionRequirements',
};

export const tool: Tool = {
  name: 'list_porting_orders_action_requirements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of action requirements for a specific porting order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_requirement_list_response',\n  $defs: {\n    action_requirement_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the action requirement'\n              },\n              action_type: {\n                type: 'string',\n                description: 'The type of action required'\n              },\n              action_url: {\n                type: 'string',\n                description: 'Optional URL for the action'\n              },\n              cancel_reason: {\n                type: 'string',\n                description: 'Reason for cancellation if status is \\'cancelled\\''\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was created',\n                format: 'date-time'\n              },\n              porting_order_id: {\n                type: 'string',\n                description: 'The ID of the porting order this action requirement belongs to'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource',\n                enum: [                  'porting_action_requirement'\n                ]\n              },\n              requirement_type_id: {\n                type: 'string',\n                description: 'The ID of the requirement type'\n              },\n              status: {\n                type: 'string',\n                description: 'Current status of the action requirement',\n                enum: [                  'created',\n                  'pending',\n                  'completed',\n                  'cancelled',\n                  'failed'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was updated',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[id][in][], filter[requirement_type_id], filter[action_type], filter[status]',
        properties: {
          id: {
            type: 'array',
            description: 'Filter action requirements by a list of IDs',
            items: {
              type: 'string',
            },
          },
          action_type: {
            type: 'string',
            description: 'Filter action requirements by action type',
            enum: ['au_id_verification'],
          },
          requirement_type_id: {
            type: 'string',
            description: 'Filter action requirements by requirement type ID',
          },
          status: {
            type: 'string',
            description: 'Filter action requirements by status',
            enum: ['created', 'pending', 'completed', 'cancelled', 'failed'],
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
              'Specifies the sort order for results. If not given, results are sorted by created_at in descending order.',
            enum: ['created_at', '-created_at', 'updated_at', '-updated_at'],
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
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.portingOrders.actionRequirements.list(porting_order_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
