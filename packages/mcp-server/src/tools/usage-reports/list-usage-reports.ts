// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'usage_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/usage_reports',
  operationId: 'GetUsageReports',
};

export const tool: Tool = {
  name: 'list_usage_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Telnyx usage data by product, broken out by the specified dimensions\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/usage_report_list_response',\n  $defs: {\n    usage_report_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer',\n              description: 'Selected page number.'\n            },\n            page_size: {\n              type: 'integer',\n              description: 'Records per single page'\n            },\n            total_pages: {\n              type: 'integer',\n              description: 'Total number of pages.'\n            },\n            total_results: {\n              type: 'integer',\n              description: 'Total number of results.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dimensions: {
        type: 'array',
        description: 'Breakout by specified product dimensions',
        items: {
          type: 'string',
        },
      },
      metrics: {
        type: 'array',
        description: 'Specified product usage values',
        items: {
          type: 'string',
        },
      },
      product: {
        type: 'string',
        description: 'Telnyx product',
      },
      date_range: {
        type: 'string',
        description:
          'A more user-friendly way to specify the timespan you want to filter by. More options can be found in the Telnyx API Reference docs.',
      },
      end_date: {
        type: 'string',
        description:
          'The end date for the time range you are interested in. The maximum time range is 31 days. Format: YYYY-MM-DDTHH:mm:ssZ',
      },
      filter: {
        type: 'string',
        description: 'Filter records on dimensions',
      },
      format: {
        type: 'string',
        description:
          'Specify the response format (csv or json). JSON is returned by default, even if not specified.',
        enum: ['csv', 'json'],
      },
      managed_accounts: {
        type: 'boolean',
        description: 'Return the aggregations for all Managed Accounts under the user making the request.',
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            title: 'Page[Number]',
          },
          size: {
            type: 'integer',
            title: 'Page[Size]',
          },
        },
      },
      sort: {
        type: 'array',
        description: 'Specifies the sort order for results',
        items: {
          type: 'string',
        },
      },
      start_date: {
        type: 'string',
        description:
          'The start date for the time range you are interested in. The maximum time range is 31 days. Format: YYYY-MM-DDTHH:mm:ssZ',
      },
      authorization_bearer: {
        type: 'string',
        description: 'Authenticates the request with your Telnyx API V2 KEY',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['dimensions', 'metrics', 'product'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.usageReports.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
