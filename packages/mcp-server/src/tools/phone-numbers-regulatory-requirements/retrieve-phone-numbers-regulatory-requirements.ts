// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers_regulatory_requirements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_numbers_regulatory_requirements',
  operationId: 'ListRegulatoryRequirementsPhoneNumbers',
};

export const tool: Tool = {
  name: 'retrieve_phone_numbers_regulatory_requirements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve regulatory requirements for a list of phone numbers\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_numbers_regulatory_requirement_retrieve_response',\n  $defs: {\n    phone_numbers_regulatory_requirement_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              phone_number: {\n                type: 'string'\n              },\n              phone_number_type: {\n                type: 'string'\n              },\n              record_type: {\n                type: 'string'\n              },\n              region_information: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    region_name: {\n                      type: 'string'\n                    },\n                    region_type: {\n                      type: 'string'\n                    }\n                  }\n                }\n              },\n              regulatory_requirements: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    acceptance_criteria: {\n                      type: 'object',\n                      properties: {\n                        field_type: {\n                          type: 'string'\n                        },\n                        field_value: {\n                          type: 'string'\n                        },\n                        locality_limit: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    description: {\n                      type: 'string'\n                    },\n                    example: {\n                      type: 'string'\n                    },\n                    field_type: {\n                      type: 'string'\n                    },\n                    label: {\n                      type: 'string'\n                    },\n                    record_type: {\n                      type: 'string'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[phone_number]',
        properties: {
          phone_number: {
            type: 'string',
            description: 'Record type phone number/ phone numbers',
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
      await maybeFilter(jq_filter, await client.phoneNumbersRegulatoryRequirements.retrieve(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
