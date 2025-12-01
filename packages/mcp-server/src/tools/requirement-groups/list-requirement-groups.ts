// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'requirement_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/requirement_groups',
  operationId: 'GetRequirementGroups',
};

export const tool: Tool = {
  name: 'list_requirement_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList requirement groups\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/requirement_group_list_response',\n  $defs: {\n    requirement_group_list_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/requirement_group'\n      }\n    },\n    requirement_group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        action: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string'\n        },\n        phone_number_type: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string'\n        },\n        regulatory_requirements: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              expires_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              field_type: {\n                type: 'string'\n              },\n              field_value: {\n                type: 'string'\n              },\n              requirement_id: {\n                type: 'string'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'approved',\n                  'unapproved',\n                  'pending-approval',\n                  'declined',\n                  'expired'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          enum: [            'approved',\n            'unapproved',\n            'pending-approval',\n            'declined',\n            'expired'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[country_code], filter[phone_number_type], filter[action], filter[status], filter[customer_reference]',
        properties: {
          action: {
            type: 'string',
            description: 'Filter requirement groups by action type',
            enum: ['ordering', 'porting', 'action'],
          },
          country_code: {
            type: 'string',
            description: 'Filter requirement groups by country code (iso alpha 2)',
          },
          customer_reference: {
            type: 'string',
            description: 'Filter requirement groups by customer reference',
          },
          phone_number_type: {
            type: 'string',
            description: 'Filter requirement groups by phone number type.',
            enum: ['local', 'toll_free', 'mobile', 'national', 'shared_cost'],
          },
          status: {
            type: 'string',
            description: 'Filter requirement groups by status',
            enum: ['approved', 'unapproved', 'pending-approval', 'declined', 'expired'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.requirementGroups.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
