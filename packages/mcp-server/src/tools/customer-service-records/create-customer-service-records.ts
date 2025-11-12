// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'customer_service_records',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/customer_service_records',
  operationId: 'CreateCustomerServiceRecord',
};

export const tool: Tool = {
  name: 'create_customer_service_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new customer service record for the provided phone number.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_service_record_create_response',\n  $defs: {\n    customer_service_record_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/customer_service_record'\n        }\n      }\n    },\n    customer_service_record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this customer service record'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        error_message: {\n          type: 'string',\n          description: 'The error message in case status is `failed`. This field would be null in case of `pending` or `completed` status.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number of the customer service record.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        result: {\n          type: 'object',\n          description: 'The result of the CSR request. This field would be null in case of `pending` or `failed` status.',\n          properties: {\n            address: {\n              type: 'object',\n              description: 'The address of the customer service record',\n              properties: {\n                administrative_area: {\n                  type: 'string',\n                  description: 'The state of the address'\n                },\n                full_address: {\n                  type: 'string',\n                  description: 'The full address'\n                },\n                locality: {\n                  type: 'string',\n                  description: 'The city of the address'\n                },\n                postal_code: {\n                  type: 'string',\n                  description: 'The zip code of the address'\n                },\n                street_address: {\n                  type: 'string',\n                  description: 'The street address'\n                }\n              }\n            },\n            admin: {\n              type: 'object',\n              description: 'The admin of the customer service record.',\n              properties: {\n                account_number: {\n                  type: 'string',\n                  description: 'The account number of the customer service record.'\n                },\n                authorized_person_name: {\n                  type: 'string',\n                  description: 'The authorized person name of the customer service record.'\n                },\n                billing_phone_number: {\n                  type: 'string',\n                  description: 'The billing phone number of the customer service record.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name of the customer service record.'\n                }\n              }\n            },\n            associated_phone_numbers: {\n              type: 'array',\n              description: 'The associated phone numbers of the customer service record.',\n              items: {\n                type: 'string'\n              }\n            },\n            carrier_name: {\n              type: 'string',\n              description: 'The name of the carrier that the customer service record is for.'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the customer service record',\n          enum: [            'pending',\n            'completed',\n            'failed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number: {
        type: 'string',
        description: 'A valid US phone number in E164 format.',
      },
      additional_data: {
        type: 'object',
        properties: {
          account_number: {
            type: 'string',
            description: 'The account number of the customer service record.',
          },
          address_line_1: {
            type: 'string',
            description: 'The first line of the address of the customer service record.',
          },
          authorized_person_name: {
            type: 'string',
            description: 'The name of the authorized person.',
          },
          billing_phone_number: {
            type: 'string',
            description: 'The billing phone number of the customer service record.',
          },
          city: {
            type: 'string',
            description: 'The city of the customer service record.',
          },
          customer_code: {
            type: 'string',
            description: 'The customer code of the customer service record.',
          },
          name: {
            type: 'string',
            description: 'The name of the administrator of CSR.',
          },
          pin: {
            type: 'string',
            description: 'The PIN of the customer service record.',
          },
          state: {
            type: 'string',
            description: 'The state of the customer service record.',
          },
          zip_code: {
            type: 'string',
            description: 'The zip code of the customer service record.',
          },
        },
      },
      webhook_url: {
        type: 'string',
        description: 'Callback URL to receive webhook notifications.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_number'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.customerServiceRecords.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
