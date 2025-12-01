// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.verification_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{id}/verification_codes',
  operationId: 'ListVerificationCodes',
};

export const tool: Tool = {
  name: 'list_porting_orders_verification_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of verification codes for a porting order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verification_code_list_response',\n  $defs: {\n    verification_code_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Uniquely identifies this porting verification code'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created.',\n                format: 'date-time'\n              },\n              phone_number: {\n                type: 'string',\n                description: 'E164 formatted phone number'\n              },\n              porting_order_id: {\n                type: 'string',\n                description: 'Identifies the associated porting order'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated.',\n                format: 'date-time'\n              },\n              verified: {\n                type: 'boolean',\n                description: 'Indicates whether the verification code has been verified'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[verified]',
        properties: {
          verified: {
            type: 'boolean',
            description: 'Filter verification codes that have been verified or not',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.portingOrders.verificationCodes.list(id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
