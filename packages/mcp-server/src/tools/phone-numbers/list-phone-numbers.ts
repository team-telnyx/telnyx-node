// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_numbers',
  operationId: 'ListPhoneNumbers',
};

export const tool: Tool = {
  name: 'list_phone_numbers',
  description: 'List phone numbers',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[tag], filter[phone_number], filter[status], filter[country_iso_alpha2], filter[connection_id], filter[voice.connection_name], filter[voice.usage_payment_method], filter[billing_group_id], filter[emergency_address_id], filter[customer_reference], filter[number_type], filter[source]',
        properties: {
          billing_group_id: {
            type: 'string',
            description:
              "Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.",
          },
          connection_id: {
            type: 'string',
            description: 'Filter by connection_id.',
          },
          country_iso_alpha2: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
            description:
              'Filter by phone number country ISO alpha-2 code. Can be a single value or an array of values.',
          },
          customer_reference: {
            type: 'string',
            description: 'Filter numbers via the customer_reference set.',
          },
          emergency_address_id: {
            type: 'string',
            description:
              "Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.",
          },
          number_type: {
            type: 'object',
            description: 'Filter phone numbers by phone number type.',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter phone numbers by phone number type.',
                enum: ['local', 'national', 'toll_free', 'mobile', 'shared_cost'],
              },
            },
          },
          phone_number: {
            type: 'string',
            description:
              'Filter by phone number. Requires at least three digits.\n             Non-numerical characters will result in no values being returned.',
          },
          source: {
            type: 'string',
            description:
              "Filter phone numbers by their source. Use 'ported' for numbers ported from other carriers, or 'purchased' for numbers bought directly from Telnyx.",
            enum: ['ported', 'purchased'],
          },
          status: {
            type: 'string',
            description: 'Filter by phone number status.',
            enum: [
              'purchase-pending',
              'purchase-failed',
              'port-pending',
              'active',
              'deleted',
              'port-failed',
              'emergency-only',
              'ported-out',
              'port-out-pending',
            ],
          },
          tag: {
            type: 'string',
            description: 'Filter by phone number tags.',
          },
          'voice.connection_name': {
            type: 'object',
            description: 'Filter by voice connection name pattern matching.',
            properties: {
              contains: {
                type: 'string',
                description: 'Filter contains connection name. Requires at least three characters.',
              },
              ends_with: {
                type: 'string',
                description: 'Filter ends with connection name. Requires at least three characters.',
              },
              eq: {
                type: 'string',
                description: 'Filter by connection name.',
              },
              starts_with: {
                type: 'string',
                description: 'Filter starts with connection name. Requires at least three characters.',
              },
            },
          },
          'voice.usage_payment_method': {
            type: 'string',
            description: 'Filter by usage_payment_method.',
            enum: ['pay-per-minute', 'channel'],
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
      sort: {
        type: 'string',
        description:
          'Specifies the sort order for results. If not given, results are sorted by created_at in descending order.',
        enum: ['purchased_at', 'phone_number', 'connection_name', 'usage_payment_method'],
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.phoneNumbers.list(body));
};

export default { metadata, tool, handler };
