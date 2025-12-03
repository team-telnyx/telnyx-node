// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'charges_breakdown',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/charges_breakdown',
  operationId: 'GetMonthlyChargesBreakdown',
};

export const tool: Tool = {
  name: 'retrieve_charges_breakdown',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a detailed breakdown of monthly charges for phone numbers in a specified date range. The date range cannot exceed 31 days.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/charges_breakdown_retrieve_response',\n  $defs: {\n    charges_breakdown_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            currency: {\n              type: 'string',\n              description: 'Currency code'\n            },\n            end_date: {\n              type: 'string',\n              description: 'End date of the breakdown period',\n              format: 'date'\n            },\n            results: {\n              type: 'array',\n              description: 'List of phone number charge breakdowns',\n              items: {\n                type: 'object',\n                properties: {\n                  charge_type: {\n                    type: 'string',\n                    description: 'Type of charge for the number'\n                  },\n                  service_owner_email: {\n                    type: 'string',\n                    description: 'Email address of the service owner'\n                  },\n                  service_owner_user_id: {\n                    type: 'string',\n                    description: 'User ID of the service owner'\n                  },\n                  services: {\n                    type: 'array',\n                    description: 'List of services associated with this number',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        cost: {\n                          type: 'string',\n                          description: 'Cost per unit as decimal string'\n                        },\n                        cost_type: {\n                          type: 'string',\n                          description: 'Type of cost (MRC or OTC)'\n                        },\n                        name: {\n                          type: 'string',\n                          description: 'Service name'\n                        }\n                      },\n                      required: [                        'cost',\n                        'cost_type',\n                        'name'\n                      ]\n                    }\n                  },\n                  tn: {\n                    type: 'string',\n                    description: 'Phone number'\n                  }\n                },\n                required: [                  'charge_type',\n                  'service_owner_email',\n                  'service_owner_user_id',\n                  'services',\n                  'tn'\n                ]\n              }\n            },\n            start_date: {\n              type: 'string',\n              description: 'Start date of the breakdown period',\n              format: 'date'\n            },\n            user_email: {\n              type: 'string',\n              description: 'User email address'\n            },\n            user_id: {\n              type: 'string',\n              description: 'User identifier'\n            }\n          },\n          required: [            'currency',\n            'end_date',\n            'results',\n            'start_date',\n            'user_email',\n            'user_id'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      start_date: {
        type: 'string',
        description: 'Start date for the charges breakdown in ISO date format (YYYY-MM-DD)',
        format: 'date',
      },
      end_date: {
        type: 'string',
        description:
          'End date for the charges breakdown in ISO date format (YYYY-MM-DD). If not provided, defaults to start_date + 1 month. The date is exclusive, data for the end_date itself is not included in the report. The interval between start_date and end_date cannot exceed 31 days.',
        format: 'date',
      },
      format: {
        type: 'string',
        description: 'Response format',
        enum: ['json', 'csv'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['start_date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.chargesBreakdown.retrieve(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
