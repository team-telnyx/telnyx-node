// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.phone_number_configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/phone_number_configurations',
  operationId: 'ListPhoneNumberConfigurations',
};

export const tool: Tool = {
  name: 'list_porting_orders_phone_number_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of phone number configurations paginated.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Uniquely identifies this phone number configuration'\n          },\n          created_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was created.',\n            format: 'date-time'\n          },\n          porting_phone_number_id: {\n            type: 'string',\n            description: 'Identifies the associated porting phone number'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was updated.',\n            format: 'date-time'\n          },\n          user_bundle_id: {\n            type: 'string',\n            description: 'Identifies the associated user bundle'\n          }\n        }\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[porting_order.status][in][], filter[porting_phone_number][in][], filter[user_bundle_id][in][]',
        properties: {
          'porting_order.status': {
            type: 'array',
            description: 'Filter results by specific porting order statuses',
            items: {
              type: 'string',
              enum: [
                'activation-in-progress',
                'cancel-pending',
                'cancelled',
                'draft',
                'exception',
                'foc-date-confirmed',
                'in-process',
                'ported',
                'submitted',
              ],
            },
          },
          porting_phone_number: {
            type: 'array',
            description: 'Filter results by a list of porting phone number IDs',
            items: {
              type: 'string',
            },
          },
          user_bundle_id: {
            type: 'array',
            description: 'Filter results by a list of user bundle IDs',
            items: {
              type: 'string',
            },
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
            enum: ['created_at', '-created_at'],
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.phoneNumberConfigurations.list(body)),
  );
};

export default { metadata, tool, handler };
