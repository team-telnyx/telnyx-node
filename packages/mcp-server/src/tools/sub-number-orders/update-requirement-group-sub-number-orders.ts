// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sub_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sub_number_orders/{id}/requirement_group',
  operationId: 'updateSubNumberOrderRequirementGroup',
};

export const tool: Tool = {
  name: 'update_requirement_group_sub_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate requirement group for a sub number order\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sub_number_order_update_requirement_group_response',\n  $defs: {\n    sub_number_order_update_requirement_group_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            country_code: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            customer_reference: {\n              type: 'string'\n            },\n            is_block_sub_number_order: {\n              type: 'boolean'\n            },\n            order_request_id: {\n              type: 'string'\n            },\n            phone_number_type: {\n              type: 'string'\n            },\n            phone_numbers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  bundle_id: {\n                    type: 'string'\n                  },\n                  country_code: {\n                    type: 'string'\n                  },\n                  phone_number: {\n                    type: 'string'\n                  },\n                  phone_number_type: {\n                    type: 'string'\n                  },\n                  record_type: {\n                    type: 'string'\n                  },\n                  regulatory_requirements: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        field_type: {\n                          type: 'string'\n                        },\n                        field_value: {\n                          type: 'string'\n                        },\n                        requirement_id: {\n                          type: 'string'\n                        },\n                        status: {\n                          type: 'string'\n                        }\n                      }\n                    }\n                  },\n                  requirements_met: {\n                    type: 'boolean'\n                  },\n                  requirements_status: {\n                    type: 'string'\n                  },\n                  status: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            phone_numbers_count: {\n              type: 'integer'\n            },\n            record_type: {\n              type: 'string'\n            },\n            regulatory_requirements: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  field_type: {\n                    type: 'string'\n                  },\n                  record_type: {\n                    type: 'string'\n                  },\n                  requirement_id: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            requirements_met: {\n              type: 'boolean'\n            },\n            status: {\n              type: 'string'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      requirement_group_id: {
        type: 'string',
        description: 'The ID of the requirement group to associate',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'requirement_group_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.subNumberOrders.updateRequirementGroup(id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
