// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'available_phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/available_phone_numbers',
  operationId: 'ListAvailablePhoneNumbers',
};

export const tool: Tool = {
  name: 'list_available_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available phone numbers\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Available Phone Numbers Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          best_effort: {\n            type: 'boolean',\n            description: 'Specifies whether the phone number is an exact match based on the search criteria or not.'\n          },\n          cost_information: {\n            type: 'object',\n            properties: {\n              currency: {\n                type: 'string',\n                description: 'The ISO 4217 code for the currency.'\n              },\n              monthly_cost: {\n                type: 'string'\n              },\n              upfront_cost: {\n                type: 'string'\n              }\n            }\n          },\n          features: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                name: {\n                  type: 'string'\n                }\n              }\n            }\n          },\n          phone_number: {\n            type: 'string'\n          },\n          quickship: {\n            type: 'boolean',\n            description: 'Specifies whether the phone number can receive calls immediately after purchase or not.'\n          },\n          record_type: {\n            type: 'string',\n            enum: [              'available_phone_number'\n            ]\n          },\n          region_information: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                region_name: {\n                  type: 'string'\n                },\n                region_type: {\n                  type: 'string',\n                  enum: [                    'country_code',\n                    'rate_center',\n                    'state',\n                    'location'\n                  ]\n                }\n              }\n            }\n          },\n          reservable: {\n            type: 'boolean',\n            description: 'Specifies whether the phone number can be reserved before purchase or not.'\n          },\n          vanity_format: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        best_effort_results: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[phone_number], filter[locality], filter[administrative_area], filter[country_code], filter[national_destination_code], filter[rate_center], filter[phone_number_type], filter[features], filter[limit], filter[best_effort], filter[quickship], filter[reservable], filter[exclude_held_numbers]',
        properties: {
          administrative_area: {
            type: 'string',
            description: 'Find numbers in a particular US state or CA province.',
          },
          best_effort: {
            type: 'boolean',
            description:
              'Filter to determine if best effort results should be included. Only available in USA/CANADA.',
          },
          country_code: {
            type: 'string',
            description: 'Filter phone numbers by country.',
          },
          exclude_held_numbers: {
            type: 'boolean',
            description:
              'Filter to exclude phone numbers that are currently on hold/reserved for your account.',
          },
          features: {
            type: 'array',
            description: 'Filter phone numbers with specific features.',
            items: {
              type: 'string',
              enum: [
                'sms',
                'mms',
                'voice',
                'fax',
                'emergency',
                'hd_voice',
                'international_sms',
                'local_calling',
              ],
            },
          },
          limit: {
            type: 'integer',
            description: 'Limits the number of results.',
          },
          locality: {
            type: 'string',
            description: 'Filter phone numbers by city.',
          },
          national_destination_code: {
            type: 'string',
            description: 'Filter by the national destination code of the number.',
          },
          phone_number: {
            type: 'object',
            description: 'Filter phone numbers by pattern matching.',
            properties: {
              contains: {
                type: 'string',
                description:
                  'Filter numbers containing a pattern (excludes NDC if used with `national_destination_code` filter).',
              },
              ends_with: {
                type: 'string',
                description:
                  'Filter numbers ending with a pattern (excludes NDC if used with `national_destination_code` filter).',
              },
              starts_with: {
                type: 'string',
                description:
                  'Filter numbers starting with a pattern (excludes NDC if used with `national_destination_code` filter).',
              },
            },
          },
          phone_number_type: {
            type: 'string',
            description: 'Filter phone numbers by number type.',
            enum: ['local', 'toll_free', 'mobile', 'national', 'shared_cost'],
          },
          quickship: {
            type: 'boolean',
            description:
              'Filter to exclude phone numbers that need additional time after to purchase to activate. Only applicable for +1 toll_free numbers.',
          },
          rate_center: {
            type: 'string',
            description:
              'Filter phone numbers by rate center. This filter is only applicable to USA and Canada numbers.',
          },
          reservable: {
            type: 'boolean',
            description: 'Filter to ensure only numbers that can be reserved are included in the results.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.availablePhoneNumbers.list(body)));
};

export default { metadata, tool, handler };
