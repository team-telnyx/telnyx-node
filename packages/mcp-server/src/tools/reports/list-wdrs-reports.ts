// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reports/wdrs',
  operationId: 'GetPaginatedWdrs',
};

export const tool: Tool = {
  name: 'list_wdrs_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch all Wdr records \n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_list_wdrs_response',\n  $defs: {\n    report_list_wdrs_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'WDR id'\n              },\n              cost: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'string',\n                    description: 'Final cost. Cost is calculated as rate * unit'\n                  },\n                  currency: {\n                    type: 'string',\n                    description: 'Currency of the rate and cost',\n                    enum: [                      'AUD',\n                      'CAD',\n                      'EUR',\n                      'GBP',\n                      'USD'\n                    ]\n                  }\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'Record created time',\n                format: 'date-time'\n              },\n              downlink_data: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'number',\n                    description: 'Downlink data'\n                  },\n                  unit: {\n                    type: 'string',\n                    description: 'Transmission unit',\n                    enum: [                      'B',\n                      'KB',\n                      'MB'\n                    ]\n                  }\n                }\n              },\n              duration_seconds: {\n                type: 'number',\n                description: 'Session duration in seconds.'\n              },\n              imsi: {\n                type: 'string',\n                description: 'International mobile subscriber identity.'\n              },\n              mcc: {\n                type: 'string',\n                description: 'Mobile country code.'\n              },\n              mnc: {\n                type: 'string',\n                description: 'Mobile network code.'\n              },\n              phone_number: {\n                type: 'string',\n                description: 'Phone number'\n              },\n              rate: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'string',\n                    description: 'Rate from which cost is calculated'\n                  },\n                  currency: {\n                    type: 'string',\n                    description: 'Currency of the rate and cost',\n                    enum: [                      'AUD',\n                      'CAD',\n                      'EUR',\n                      'GBP',\n                      'USD'\n                    ]\n                  }\n                }\n              },\n              record_type: {\n                type: 'string'\n              },\n              sim_card_id: {\n                type: 'string',\n                description: 'Sim card unique identifier'\n              },\n              sim_group_id: {\n                type: 'string',\n                description: 'Sim group unique identifier'\n              },\n              sim_group_name: {\n                type: 'string',\n                description: 'Defined sim group name'\n              },\n              uplink_data: {\n                type: 'object',\n                properties: {\n                  amount: {\n                    type: 'number',\n                    description: 'Uplink data'\n                  },\n                  unit: {\n                    type: 'string',\n                    description: 'Transmission unit',\n                    enum: [                      'B',\n                      'KB',\n                      'MB'\n                    ]\n                  }\n                }\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'WDR uuid',
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      imsi: {
        type: 'string',
        description: 'International mobile subscriber identity',
      },
      mcc: {
        type: 'string',
        description: 'Mobile country code',
      },
      mnc: {
        type: 'string',
        description: 'Mobile network code',
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'Page number',
          },
          size: {
            type: 'integer',
            description: 'Size of the page',
          },
        },
      },
      phone_number: {
        type: 'string',
        description: 'Phone number',
      },
      sim_card_id: {
        type: 'string',
        description: 'Sim card unique identifier',
      },
      sim_group_id: {
        type: 'string',
        description: 'Sim group unique identifier',
      },
      sim_group_name: {
        type: 'string',
        description: 'Sim group name',
      },
      sort: {
        type: 'array',
        description: "Field used to order the data. If no field is specified, default value is 'created_at'",
        items: {
          type: 'string',
        },
      },
      start_date: {
        type: 'string',
        description: 'Start date',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.reports.listWdrs(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
