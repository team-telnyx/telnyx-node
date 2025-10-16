// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_reservations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/number_reservations',
  operationId: 'CreateNumberReservation',
};

export const tool: Tool = {
  name: 'create_number_reservations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a Phone Number Reservation for multiple numbers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_reservation_create_response',\n  $defs: {\n    number_reservation_create_response: {\n      type: 'object',\n      title: 'Number Reservation Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/number_reservation'\n        }\n      }\n    },\n    number_reservation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the numbers reservation was created.',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        phone_numbers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/reserved_phone_number'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the entire reservation.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the number reservation was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    reserved_phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the individual number reservation was created.',\n          format: 'date-time'\n        },\n        expired_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the individual number reservation is going to expire',\n          format: 'date-time'\n        },\n        phone_number: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the phone number\\'s reservation.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the the individual number reservation was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_reference: {
        type: 'string',
        description: 'A customer reference string for customer look ups.',
      },
      phone_numbers: {
        type: 'array',
        items: {
          $ref: '#/$defs/reserved_phone_number',
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
    $defs: {
      reserved_phone_number: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          created_at: {
            type: 'string',
            description:
              'An ISO 8901 datetime string denoting when the individual number reservation was created.',
            format: 'date-time',
          },
          expired_at: {
            type: 'string',
            description:
              'An ISO 8901 datetime string for when the individual number reservation is going to expire',
            format: 'date-time',
          },
          phone_number: {
            type: 'string',
          },
          record_type: {
            type: 'string',
          },
          status: {
            type: 'string',
            description: "The status of the phone number's reservation.",
            enum: ['pending', 'success', 'failure'],
          },
          updated_at: {
            type: 'string',
            description:
              'An ISO 8901 datetime string for when the the individual number reservation was updated.',
            format: 'date-time',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.numberReservations.create(body)));
};

export default { metadata, tool, handler };
