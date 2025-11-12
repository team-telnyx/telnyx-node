// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_order_phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/number_order_phone_numbers',
  operationId: 'RetrieveOrderPhoneNumbers',
};

export const tool: Tool = {
  name: 'list_number_order_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of phone numbers associated to orders.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_order_phone_number_list_response',\n  $defs: {\n    number_order_phone_number_list_response: {\n      type: 'object',\n      title: 'List Number Order Phone Numbers Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/number_order_phone_number'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    number_order_phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        bundle_id: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string'\n        },\n        deadline: {\n          type: 'string',\n          format: 'date-time'\n        },\n        is_block_number: {\n          type: 'boolean'\n        },\n        locality: {\n          type: 'string'\n        },\n        order_request_id: {\n          type: 'string'\n        },\n        phone_number: {\n          type: 'string'\n        },\n        phone_number_type: {\n          type: 'string',\n          enum: [            'local',\n            'toll_free',\n            'mobile',\n            'national',\n            'shared_cost',\n            'landline'\n          ]\n        },\n        record_type: {\n          type: 'string'\n        },\n        regulatory_requirements: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/sub_number_order_regulatory_requirement_with_value'\n          }\n        },\n        requirements_met: {\n          type: 'boolean',\n          description: 'True if all requirements are met for a phone number, false otherwise.'\n        },\n        requirements_status: {\n          type: 'string',\n          description: 'Status of requirements (if applicable)',\n          enum: [            'pending',\n            'approved',\n            'cancelled',\n            'deleted',\n            'requirement-info-exception',\n            'requirement-info-pending',\n            'requirement-info-under-review'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the phone number in the order.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        sub_number_order_id: {\n          type: 'string'\n        }\n      }\n    },\n    sub_number_order_regulatory_requirement_with_value: {\n      type: 'object',\n      properties: {\n        field_type: {\n          type: 'string',\n          enum: [            'textual',\n            'datetime',\n            'address',\n            'document'\n          ]\n        },\n        field_value: {\n          type: 'string',\n          description: 'The value of the requirement, this could be an id to a resource or a string value.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        requirement_id: {\n          type: 'string',\n          description: 'Unique id for a requirement.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[country_code]',
        properties: {
          country_code: {
            type: 'string',
            description: 'Country code of the order phone number.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.numberOrderPhoneNumbers.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
