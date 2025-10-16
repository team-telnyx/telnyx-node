// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'inventory_coverage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/inventory_coverage',
  operationId: 'CreateInventoryCoverage',
};

export const tool: Tool = {
  name: 'list_inventory_coverage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/inventory_coverage_list_response',\n  $defs: {\n    inventory_coverage_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              administrative_area: {\n                type: 'string'\n              },\n              advance_requirements: {\n                type: 'boolean',\n                description: 'Indicates if the phone number requires advance requirements.'\n              },\n              count: {\n                type: 'integer'\n              },\n              coverage_type: {\n                type: 'string',\n                enum: [                  'number',\n                  'block'\n                ]\n              },\n              group: {\n                type: 'string'\n              },\n              group_type: {\n                type: 'string'\n              },\n              number_range: {\n                type: 'integer'\n              },\n              number_type: {\n                type: 'string',\n                enum: [                  'did',\n                  'toll-free'\n                ]\n              },\n              phone_number_type: {\n                type: 'string',\n                enum: [                  'local',\n                  'toll_free',\n                  'national',\n                  'landline',\n                  'shared_cost',\n                  'mobile'\n                ]\n              },\n              record_type: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[npa], filter[nxx], filter[administrative_area], filter[phone_number_type], filter[country_code], filter[count], filter[features], filter[groupBy]',
        properties: {
          administrative_area: {
            type: 'string',
            description: 'Filter by administrative area',
          },
          count: {
            type: 'boolean',
            description: 'Include count in the result',
          },
          country_code: {
            type: 'string',
            description: 'Filter by country. Defaults to US',
            enum: [
              'AT',
              'AU',
              'BE',
              'BG',
              'CA',
              'CH',
              'CN',
              'CY',
              'CZ',
              'DE',
              'DK',
              'EE',
              'ES',
              'FI',
              'FR',
              'GB',
              'GR',
              'HU',
              'HR',
              'IE',
              'IT',
              'LT',
              'LU',
              'LV',
              'NL',
              'NZ',
              'MX',
              'NO',
              'PL',
              'PT',
              'RO',
              'SE',
              'SG',
              'SI',
              'SK',
              'US',
            ],
          },
          features: {
            type: 'array',
            description:
              'Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used.',
            items: {
              type: 'string',
              enum: ['sms', 'mms', 'voice', 'fax', 'emergency'],
            },
          },
          groupBy: {
            type: 'string',
            description: 'Filter to group results',
            enum: ['locality', 'npa', 'national_destination_code'],
          },
          npa: {
            type: 'integer',
            description: 'Filter by npa',
          },
          nxx: {
            type: 'integer',
            description: 'Filter by nxx',
          },
          phone_number_type: {
            type: 'string',
            description: 'Filter by phone number type',
            enum: ['local', 'toll_free', 'national', 'mobile', 'landline', 'shared_cost'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.inventoryCoverage.list(body)));
};

export default { metadata, tool, handler };
