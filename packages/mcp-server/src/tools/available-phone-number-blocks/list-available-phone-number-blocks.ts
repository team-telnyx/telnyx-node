// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'available_phone_number_blocks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/available_phone_number_blocks',
  operationId: 'ListAvailablePhoneNumberBlocks',
};

export const tool: Tool = {
  name: 'list_available_phone_number_blocks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available phone number blocks\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/available_phone_number_block_list_response',\n  $defs: {\n    available_phone_number_block_list_response: {\n      type: 'object',\n      title: 'List Available Phone Numbers Blocks Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              cost_information: {\n                type: 'object',\n                properties: {\n                  currency: {\n                    type: 'string',\n                    description: 'The ISO 4217 code for the currency.'\n                  },\n                  monthly_cost: {\n                    type: 'string'\n                  },\n                  upfront_cost: {\n                    type: 'string'\n                  }\n                }\n              },\n              features: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    name: {\n                      type: 'string'\n                    }\n                  }\n                }\n              },\n              range: {\n                type: 'integer'\n              },\n              record_type: {\n                type: 'string',\n                enum: [                  'available_phone_number_block'\n                ]\n              },\n              region_information: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    region_name: {\n                      type: 'string'\n                    },\n                    region_type: {\n                      type: 'string',\n                      enum: [                        'country_code',\n                        'rate_center',\n                        'state',\n                        'location'\n                      ]\n                    }\n                  }\n                }\n              },\n              starting_number: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            best_effort_results: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[locality], filter[country_code], filter[national_destination_code], filter[phone_number_type]',
        properties: {
          country_code: {
            type: 'string',
            description: 'Filter phone numbers by country.',
          },
          locality: {
            type: 'string',
            description: 'Filter phone numbers by city.',
          },
          national_destination_code: {
            type: 'string',
            description: 'Filter by the national destination code of the number.',
          },
          phone_number_type: {
            type: 'string',
            description: 'Filter phone numbers by number type.',
            enum: ['local', 'toll_free', 'mobile', 'national', 'shared_cost'],
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.availablePhoneNumberBlocks.list(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
