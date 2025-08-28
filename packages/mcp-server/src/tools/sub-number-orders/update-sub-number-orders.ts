// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sub_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sub_number_orders/{sub_number_order_id}',
  operationId: 'UpdateSubNumberOrder',
};

export const tool: Tool = {
  name: 'update_sub_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a sub number order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Sub Number Order Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/sub_number_order'\n    }\n  },\n  $defs: {\n    sub_number_order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the number order was created.',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        is_block_sub_number_order: {\n          type: 'boolean',\n          description: 'True if the sub number order is a block sub number order'\n        },\n        order_request_id: {\n          type: 'string'\n        },\n        phone_number_type: {\n          type: 'string',\n          enum: [            'local',\n            'toll_free',\n            'mobile',\n            'national',\n            'shared_cost',\n            'landline'\n          ]\n        },\n        phone_numbers_count: {\n          type: 'integer',\n          description: 'The count of phone numbers in the number order.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        regulatory_requirements: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/sub_number_order_regulatory_requirement'\n          }\n        },\n        requirements_met: {\n          type: 'boolean',\n          description: 'True if all requirements are met for every phone number, false otherwise.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the order.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the number order was updated.',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string'\n        }\n      }\n    },\n    sub_number_order_regulatory_requirement: {\n      type: 'object',\n      properties: {\n        field_type: {\n          type: 'string',\n          enum: [            'textual',\n            'datetime',\n            'address',\n            'document'\n          ]\n        },\n        record_type: {\n          type: 'string'\n        },\n        requirement_id: {\n          type: 'string',\n          description: 'Unique id for a requirement.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      sub_number_order_id: {
        type: 'string',
      },
      regulatory_requirements: {
        type: 'array',
        items: {
          $ref: '#/$defs/update_regulatory_requirement',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['sub_number_order_id'],
    $defs: {
      update_regulatory_requirement: {
        type: 'object',
        properties: {
          field_value: {
            type: 'string',
            description:
              'The value of the requirement. For address and document requirements, this should be the ID of the resource. For textual, this should be the value of the requirement.',
          },
          requirement_id: {
            type: 'string',
            description: 'Unique id for a requirement.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { sub_number_order_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.subNumberOrders.update(sub_number_order_id, body)),
  );
};

export default { metadata, tool, handler };
