// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'charges_summary',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/charges_summary',
};

export const tool: Tool = {
  name: 'retrieve_charges_summary',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a summary of monthly charges for a specified date range. The date range cannot exceed 31 days.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/charges_summary_retrieve_response',\n  $defs: {\n    charges_summary_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            currency: {\n              type: 'string',\n              description: 'Currency code'\n            },\n            end_date: {\n              type: 'string',\n              description: 'End date of the summary period',\n              format: 'date'\n            },\n            start_date: {\n              type: 'string',\n              description: 'Start date of the summary period',\n              format: 'date'\n            },\n            summary: {\n              type: 'object',\n              properties: {\n                adjustments: {\n                  type: 'array',\n                  description: 'List of billing adjustments',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      amount: {\n                        type: 'string',\n                        description: 'Adjustment amount as decimal string'\n                      },\n                      description: {\n                        type: 'string',\n                        description: 'Description of the adjustment'\n                      },\n                      event_date: {\n                        type: 'string',\n                        description: 'Date when the adjustment occurred',\n                        format: 'date'\n                      }\n                    },\n                    required: [                      'amount',\n                      'description',\n                      'event_date'\n                    ]\n                  }\n                },\n                lines: {\n                  type: 'array',\n                  description: 'List of charge summary lines',\n                  items: {\n                    anyOf: [                      {\n                        type: 'object',\n                        properties: {\n                          alias: {\n                            type: 'string',\n                            description: 'Service alias'\n                          },\n                          existing_this_month: {\n                            $ref: '#/$defs/month_detail'\n                          },\n                          name: {\n                            type: 'string',\n                            description: 'Service name'\n                          },\n                          new_this_month: {\n                            $ref: '#/$defs/month_detail'\n                          },\n                          type: {\n                            type: 'string',\n                            enum: [                              'comparative'\n                            ]\n                          }\n                        },\n                        required: [                          'alias',\n                          'existing_this_month',\n                          'name',\n                          'new_this_month',\n                          'type'\n                        ]\n                      },\n                      {\n                        type: 'object',\n                        properties: {\n                          alias: {\n                            type: 'string',\n                            description: 'Service alias'\n                          },\n                          amount: {\n                            type: 'string',\n                            description: 'Total amount as decimal string'\n                          },\n                          name: {\n                            type: 'string',\n                            description: 'Service name'\n                          },\n                          quantity: {\n                            type: 'integer',\n                            description: 'Number of items'\n                          },\n                          type: {\n                            type: 'string',\n                            enum: [                              'simple'\n                            ]\n                          }\n                        },\n                        required: [                          'alias',\n                          'amount',\n                          'name',\n                          'quantity',\n                          'type'\n                        ]\n                      }\n                    ]\n                  }\n                }\n              },\n              required: [                'adjustments',\n                'lines'\n              ]\n            },\n            total: {\n              type: 'object',\n              properties: {\n                credits: {\n                  type: 'string',\n                  description: 'Total credits as decimal string'\n                },\n                existing_mrc: {\n                  type: 'string',\n                  description: 'Total existing monthly recurring charges as decimal string'\n                },\n                grand_total: {\n                  type: 'string',\n                  description: 'Grand total of all charges as decimal string'\n                },\n                ledger_adjustments: {\n                  type: 'string',\n                  description: 'Ledger adjustments as decimal string'\n                },\n                new_mrc: {\n                  type: 'string',\n                  description: 'Total new monthly recurring charges as decimal string'\n                },\n                new_otc: {\n                  type: 'string',\n                  description: 'Total new one-time charges as decimal string'\n                },\n                other: {\n                  type: 'string',\n                  description: 'Other charges as decimal string'\n                }\n              },\n              required: [                'credits',\n                'existing_mrc',\n                'grand_total',\n                'ledger_adjustments',\n                'new_mrc',\n                'new_otc',\n                'other'\n              ]\n            },\n            user_email: {\n              type: 'string',\n              description: 'User email address'\n            },\n            user_id: {\n              type: 'string',\n              description: 'User identifier'\n            }\n          },\n          required: [            'currency',\n            'end_date',\n            'start_date',\n            'summary',\n            'total',\n            'user_email',\n            'user_id'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    month_detail: {\n      type: 'object',\n      properties: {\n        mrc: {\n          type: 'string',\n          description: 'Monthly recurring charge amount as decimal string'\n        },\n        quantity: {\n          type: 'integer',\n          description: 'Number of items'\n        },\n        otc: {\n          type: 'string',\n          description: 'One-time charge amount as decimal string'\n        }\n      },\n      required: [        'mrc',\n        'quantity'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description:
          'End date for the charges summary in ISO date format (YYYY-MM-DD). The date is exclusive, data for the end_date itself is not included in the report. The interval between start_date and end_date cannot exceed 31 days.',
        format: 'date',
      },
      start_date: {
        type: 'string',
        description: 'Start date for the charges summary in ISO date format (YYYY-MM-DD)',
        format: 'date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['end_date', 'start_date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.chargesSummary.retrieve(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
