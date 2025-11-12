// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_phone_numbers',
  operationId: 'ListPortingPhoneNumbers',
};

export const tool: Tool = {
  name: 'list_porting_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your porting phone numbers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/porting_phone_number_list_response',\n  $defs: {\n    porting_phone_number_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              activation_status: {\n                type: 'string',\n                description: 'Activation status',\n                enum: [                  'New',\n                  'Pending',\n                  'Conflict',\n                  'Cancel Pending',\n                  'Failed',\n                  'Concurred',\n                  'Activate RDY',\n                  'Disconnect Pending',\n                  'Concurrence Sent',\n                  'Old',\n                  'Sending',\n                  'Active',\n                  'Cancelled'\n                ]\n              },\n              phone_number: {\n                type: 'string',\n                description: 'E164 formatted phone number'\n              },\n              phone_number_type: {\n                type: 'string',\n                description: 'The type of the phone number',\n                enum: [                  'landline',\n                  'local',\n                  'mobile',\n                  'national',\n                  'shared_cost',\n                  'toll_free'\n                ]\n              },\n              portability_status: {\n                type: 'string',\n                description: 'Specifies whether Telnyx is able to confirm portability this number in the United States & Canada. International phone numbers are provisional by default.',\n                enum: [                  'pending',\n                  'confirmed',\n                  'provisional'\n                ]\n              },\n              porting_order_id: {\n                type: 'string',\n                description: 'Identifies the associated port request'\n              },\n              porting_order_status: {\n                type: 'string',\n                description: 'The current status of the porting order',\n                enum: [                  'draft',\n                  'in-process',\n                  'submitted',\n                  'exception',\n                  'foc-date-confirmed',\n                  'cancel-pending',\n                  'ported',\n                  'cancelled'\n                ]\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              requirements_status: {\n                type: 'string',\n                description: 'The current status of the requirements in a INTL porting order',\n                enum: [                  'requirement-info-pending',\n                  'requirement-info-under-review',\n                  'requirement-info-exception',\n                  'approved'\n                ]\n              },\n              support_key: {\n                type: 'string',\n                description: 'A key to reference this porting order when contacting Telnyx customer support'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[porting_order_status]',
        properties: {
          porting_order_status: {
            type: 'string',
            description: 'Filter results by porting order status',
            enum: [
              'draft',
              'in-process',
              'submitted',
              'exception',
              'foc-date-confirmed',
              'cancel-pending',
              'ported',
              'cancelled',
            ],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.portingPhoneNumbers.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
