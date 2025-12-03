// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'inexplicit_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/inexplicit_number_orders',
  operationId: 'CreateInexplicitNumberOrder',
};

export const tool: Tool = {
  name: 'create_inexplicit_number_orders',
  description:
    'Create an inexplicit number order to programmatically purchase phone numbers without specifying exact numbers.',
  inputSchema: {
    type: 'object',
    properties: {
      ordering_groups: {
        type: 'array',
        description:
          'Group(s) of numbers to order. You can have multiple ordering_groups objects added to a single request.',
        items: {
          type: 'object',
          properties: {
            count_requested: {
              type: 'string',
              description: 'Quantity of phone numbers to order',
            },
            country_iso: {
              type: 'string',
              description: 'Country where you would like to purchase phone numbers. Allowable values: US, CA',
              enum: ['US', 'CA'],
            },
            phone_number_type: {
              type: 'string',
              description: 'Number type (local, toll-free, etc.)',
            },
            administrative_area: {
              type: 'string',
              description: 'Filter for phone numbers in a given state / province',
            },
            exclude_held_numbers: {
              type: 'boolean',
              description:
                'Filter to exclude phone numbers that are currently on hold/reserved for your account.',
            },
            features: {
              type: 'array',
              description:
                'Filter for phone numbers that have the features to satisfy your use case (e.g., ["voice"])',
              items: {
                type: 'string',
              },
            },
            locality: {
              type: 'string',
              description: 'Filter for phone numbers in a given city / region / rate center',
            },
            national_destination_code: {
              type: 'string',
              description: 'Filter by area code',
            },
            phone_number: {
              type: 'object',
              description: 'Phone number search criteria',
              properties: {
                contains: {
                  type: 'string',
                  description: 'Filter for phone numbers that contain the digits specified',
                },
                ends_with: {
                  type: 'string',
                  description: 'Filter by the ending digits of the phone number',
                },
                starts_with: {
                  type: 'string',
                  description: 'Filter by the starting digits of the phone number',
                },
              },
            },
            quickship: {
              type: 'boolean',
              description:
                'Filter to exclude phone numbers that need additional time after to purchase to activate. Only applicable for +1 toll_free numbers.',
            },
            strategy: {
              type: 'string',
              description:
                "Ordering strategy. Define what action should be taken if we don't have enough phone numbers to fulfill your request. Allowable values are: always = proceed with ordering phone numbers, regardless of current inventory levels; never = do not place any orders unless there are enough phone numbers to satisfy the request. If not specified, the always strategy will be enforced.",
              enum: ['always', 'never'],
            },
          },
          required: ['count_requested', 'country_iso', 'phone_number_type'],
        },
      },
      billing_group_id: {
        type: 'string',
        description: 'Billing group id to apply to phone numbers that are purchased',
      },
      connection_id: {
        type: 'string',
        description: 'Connection id to apply to phone numbers that are purchased',
      },
      customer_reference: {
        type: 'string',
        description: 'Reference label for the customer',
      },
      messaging_profile_id: {
        type: 'string',
        description: 'Messaging profile id to apply to phone numbers that are purchased',
      },
    },
    required: ['ordering_groups'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.inexplicitNumberOrders.create(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
