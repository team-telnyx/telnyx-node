// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'requirement_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/requirement_groups/{id}',
  operationId: 'UpdateRequirementGroup',
};

export const tool: Tool = {
  name: 'update_requirement_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate requirement values in requirement group\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/requirement_group',\n  $defs: {\n    requirement_group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        action: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string'\n        },\n        phone_number_type: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string'\n        },\n        regulatory_requirements: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              expires_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              field_type: {\n                type: 'string'\n              },\n              field_value: {\n                type: 'string'\n              },\n              requirement_id: {\n                type: 'string'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'approved',\n                  'unapproved',\n                  'pending-approval',\n                  'declined'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          enum: [            'approved',\n            'unapproved',\n            'pending-approval',\n            'declined'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      customer_reference: {
        type: 'string',
        description: 'Reference for the customer',
      },
      regulatory_requirements: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field_value: {
              type: 'string',
              description: 'New value for the regulatory requirement',
            },
            requirement_id: {
              type: 'string',
              description: 'Unique identifier for the regulatory requirement',
            },
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.requirementGroups.update(id, body)));
};

export default { metadata, tool, handler };
