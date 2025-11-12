// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sub_number_orders_report',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sub_number_orders_report',
  operationId: 'CreateSubNumberOrdersReport',
};

export const tool: Tool = {
  name: 'create_sub_number_orders_report',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a CSV report for sub number orders. The report will be generated asynchronously and can be downloaded once complete.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sub_number_orders_report_create_response',\n  $defs: {\n    sub_number_orders_report_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the resource.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was created.',\n              format: 'date-time'\n            },\n            filters: {\n              type: 'object',\n              description: 'The filters that were applied to generate this report',\n              properties: {\n                country_code: {\n                  type: 'string'\n                },\n                created_at_gt: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                created_at_lt: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                customer_reference: {\n                  type: 'string'\n                },\n                order_request_id: {\n                  type: 'string'\n                },\n                status: {\n                  type: 'string'\n                }\n              }\n            },\n            order_type: {\n              type: 'string',\n              description: 'The type of order report.'\n            },\n            status: {\n              type: 'string',\n              description: 'Indicates the completion level of the sub number orders report. The report must have a status of \\'success\\' before it can be downloaded.',\n              enum: [                'pending',\n                'success',\n                'failed',\n                'expired'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was updated.',\n              format: 'date-time'\n            },\n            user_id: {\n              type: 'string',\n              description: 'The ID of the user who created the report.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country_code: {
        type: 'string',
        description: 'Filter by country code',
      },
      created_at_gt: {
        type: 'string',
        description: 'Filter for orders created after this date',
        format: 'date-time',
      },
      created_at_lt: {
        type: 'string',
        description: 'Filter for orders created before this date',
        format: 'date-time',
      },
      customer_reference: {
        type: 'string',
        description: 'Filter by customer reference',
      },
      order_request_id: {
        type: 'string',
        description: 'Filter by specific order request ID',
      },
      status: {
        type: 'string',
        description: 'Filter by order status',
        enum: ['pending', 'success', 'failure'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.subNumberOrdersReport.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
