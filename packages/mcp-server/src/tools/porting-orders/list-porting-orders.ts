// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders',
  operationId: 'ListPortingOrders',
};

export const tool: Tool = {
  name: 'list_porting_orders',
  description: 'Returns a list of your porting order.',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[customer_reference], filter[customer_group_reference], filter[parent_support_key], filter[phone_numbers.country_code], filter[phone_numbers.carrier_name], filter[misc.type], filter[end_user.admin.entity_name], filter[end_user.admin.auth_person_name], filter[activation_settings.fast_port_eligible], filter[activation_settings.foc_datetime_requested][gt], filter[activation_settings.foc_datetime_requested][lt], filter[phone_numbers.phone_number][contains]',
        properties: {
          activation_settings: {
            type: 'object',
            properties: {
              fast_port_eligible: {
                type: 'boolean',
                description: 'Filter results by fast port eligible',
              },
              foc_datetime_requested: {
                type: 'object',
                description: 'FOC datetime range filtering operations',
                properties: {
                  gt: {
                    type: 'string',
                    description: 'Filter results by foc date later than this value',
                  },
                  lt: {
                    type: 'string',
                    description: 'Filter results by foc date earlier than this value',
                  },
                },
              },
            },
          },
          customer_group_reference: {
            type: 'string',
            description: 'Filter results by customer_group_reference',
          },
          customer_reference: {
            type: 'string',
            description: 'Filter results by customer_reference',
          },
          end_user: {
            type: 'object',
            properties: {
              admin: {
                type: 'object',
                properties: {
                  auth_person_name: {
                    type: 'string',
                    description: 'Filter results by authorized person',
                  },
                  entity_name: {
                    type: 'string',
                    description: 'Filter results by person or company name',
                  },
                },
              },
            },
          },
          misc: {
            type: 'object',
            properties: {
              type: {
                $ref: '#/$defs/porting_order_type',
              },
            },
          },
          parent_support_key: {
            type: 'string',
            description: 'Filter results by parent_support_key',
          },
          phone_numbers: {
            type: 'object',
            properties: {
              carrier_name: {
                type: 'string',
                description: 'Filter results by old service provider',
              },
              country_code: {
                type: 'string',
                description: 'Filter results by country ISO 3166-1 alpha-2 code',
              },
              phone_number: {
                type: 'object',
                description: 'Phone number pattern filtering operations',
                properties: {
                  contains: {
                    type: 'string',
                    description: 'Filter results by full or partial phone_number',
                  },
                },
              },
            },
          },
        },
      },
      include_phone_numbers: {
        type: 'boolean',
        description: 'Include the first 50 phone number objects in the results',
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
      sort: {
        type: 'object',
        description: 'Consolidated sort parameter (deepObject style). Originally: sort[value]',
        properties: {
          value: {
            type: 'string',
            description:
              'Specifies the sort order for results. If not given, results are sorted by created_at in descending order.',
            enum: [
              'created_at',
              '-created_at',
              'activation_settings.foc_datetime_requested',
              '-activation_settings.foc_datetime_requested',
            ],
          },
        },
      },
    },
    required: [],
    $defs: {
      porting_order_type: {
        type: 'string',
        description:
          "A port can be either 'full' or 'partial'. When type is 'full' the other attributes should be omitted.",
        enum: ['full', 'partial'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.portingOrders.list(body));
};

export default { metadata, tool, handler };
