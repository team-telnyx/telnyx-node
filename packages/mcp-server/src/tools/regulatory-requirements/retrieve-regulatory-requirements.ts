// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'regulatory_requirements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/regulatory_requirements',
  operationId: 'ListRegulatoryRequirements',
};

export const tool: Tool = {
  name: 'retrieve_regulatory_requirements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve regulatory requirements\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          action: {\n            type: 'string'\n          },\n          country_code: {\n            type: 'string'\n          },\n          phone_number_type: {\n            type: 'string'\n          },\n          regulatory_requirements: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                acceptance_criteria: {\n                  type: 'object',\n                  properties: {\n                    acceptable_characters: {\n                      type: 'string'\n                    },\n                    acceptable_values: {\n                      type: 'array',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    case_sensitive: {\n                      type: 'string'\n                    },\n                    locality_limit: {\n                      type: 'string'\n                    },\n                    max_length: {\n                      type: 'string'\n                    },\n                    min_length: {\n                      type: 'string'\n                    },\n                    regex: {\n                      type: 'string'\n                    },\n                    time_limit: {\n                      type: 'string'\n                    }\n                  }\n                },\n                description: {\n                  type: 'string'\n                },\n                example: {\n                  type: 'string'\n                },\n                field_type: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[phone_number], filter[requirement_group_id], filter[country_code], filter[phone_number_type], filter[action]',
        properties: {
          action: {
            type: 'string',
            description: 'Action to check requirements for',
            enum: ['ordering', 'porting', 'action'],
          },
          country_code: {
            type: 'string',
            description: 'Country code(iso2) to check requirements for',
          },
          phone_number: {
            type: 'string',
            description: 'Phone number to check requirements for',
          },
          phone_number_type: {
            type: 'string',
            description: 'Phone number type to check requirements for',
            enum: ['local', 'toll_free', 'mobile', 'national', 'shared_cost'],
          },
          requirement_group_id: {
            type: 'string',
            description: 'ID of requirement group to check requirements for',
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
    await maybeFilter(jq_filter, await client.regulatoryRequirements.retrieve(body)),
  );
};

export default { metadata, tool, handler };
