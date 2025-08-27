// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'number_reservations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/number_reservations',
  operationId: 'ListNumberReservations',
};

export const tool: Tool = {
  name: 'list_number_reservations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a paginated list of phone number reservations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Number Reservations Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/number_reservation'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    number_reservation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the numbers reservation was created.',\n          format: 'date-time'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        phone_numbers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/reserved_phone_number'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the entire reservation.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the number reservation was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    reserved_phone_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string denoting when the individual number reservation was created.',\n          format: 'date-time'\n        },\n        expired_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the individual number reservation is going to expire',\n          format: 'date-time'\n        },\n        phone_number: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the phone number\\'s reservation.',\n          enum: [            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8901 datetime string for when the the individual number reservation was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[status], filter[created_at], filter[phone_numbers.phone_number], filter[customer_reference]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Filter number reservations by date range.',
            properties: {
              gt: {
                type: 'string',
                description: 'Filter number reservations later than this value.',
              },
              lt: {
                type: 'string',
                description: 'Filter number reservations earlier than this value.',
              },
            },
          },
          customer_reference: {
            type: 'string',
            description: 'Filter number reservations via the customer reference set.',
          },
          'phone_numbers.phone_number': {
            type: 'string',
            description: 'Filter number reservations having these phone numbers.',
          },
          status: {
            type: 'string',
            description: 'Filter number reservations by status.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.numberReservations.list(body)));
};

export default { metadata, tool, handler };
