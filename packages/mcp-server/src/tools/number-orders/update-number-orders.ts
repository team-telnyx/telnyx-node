// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/number_orders/{number_order_id}',
  operationId: 'UpdateNumberOrder',
};

export const tool: Tool = {
  name: 'update_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a phone number order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_order_update_response',\n  $defs: {\n    number_order_update_response: {\n      type: 'object',\n      title: 'Number Order Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/number_order_with_phone_numbers'\n        }\n      }\n    },\n    number_order_with_phone_numbers: {\n      type: 'object',\n      title: 'NumberOrder',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        billing_group_id: {\n          type: 'string',\n          description: 'Identifies the messaging profile associated with the phone number.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with this phone number.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the number order was created.',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Identifies the messaging profile associated with the phone number.'\n        },\n        phone_numbers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/phone_number'\n          }\n        },\n        phone_numbers_count: {\n          type: 'integer',\n          description: 'The count of phone numbers in the number order.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        requirements_met: {\n          type: 'boolean',\n          description: 'True if all requirements are met for every phone number, false otherwise.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the order.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        sub_number_orders_ids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the number order was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        bundle_id: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string',\n          description: 'Country code of the phone number'\n        },\n        country_iso_alpha2: {\n          type: 'string',\n          description: 'The ISO 3166-1 alpha-2 country code of the phone number.'\n        },\n        phone_number: {\n          type: 'string'\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Phone number type',\n          enum: [            'local',\n            'mobile',\n            'national',\n            'shared_cost',\n            'toll_free'\n          ]\n        },\n        record_type: {\n          type: 'string'\n        },\n        regulatory_requirements: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/sub_number_order_regulatory_requirement_with_value'\n          }\n        },\n        requirements_met: {\n          type: 'boolean',\n          description: 'True if all requirements are met for a phone number, false otherwise.'\n        },\n        requirements_status: {\n          type: 'string',\n          description: 'Status of document requirements (if applicable)',\n          enum: [            'pending',\n            'approved',\n            'cancelled',\n            'deleted',\n            'requirement-info-exception',\n            'requirement-info-pending',\n            'requirement-info-under-review'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the phone number in the order.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        }\n      }\n    },\n    sub_number_order_regulatory_requirement_with_value: {\n      type: 'object',\n      properties: {\n        field_type: {\n          type: 'string',\n          enum: [            'textual',\n            'datetime',\n            'address',\n            'document'\n          ]\n        },\n        field_value: {\n          type: 'string',\n          description: 'The value of the requirement, this could be an id to a resource or a string value.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        requirement_id: {\n          type: 'string',\n          description: 'Unique id for a requirement.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      number_order_id: {
        type: 'string',
      },
      customer_reference: {
        type: 'string',
        description: 'A customer reference string for customer look ups.',
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
    required: ['number_order_id'],
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
  const { number_order_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.numberOrders.update(number_order_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
