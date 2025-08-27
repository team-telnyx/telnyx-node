// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'usage_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/usage_reports/options',
  operationId: 'ListUsageReportsOptions',
};

export const tool: Tool = {
  name: 'get_options_usage_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the Usage Reports options for querying usage, including the products available and their respective metrics and dimensions\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'An object following one of the schemas published in https://developers.telnyx.com/docs/api/v2/detail-records',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'Collection of product description',\n      items: {\n        type: 'object',\n        description: 'An object following one of the schemas published in https://developers.telnyx.com/docs/api/v2/detail-records',\n        properties: {\n          product: {\n            type: 'string',\n            description: 'Telnyx Product'\n          },\n          product_dimensions: {\n            type: 'array',\n            description: 'Telnyx Product Dimensions',\n            items: {\n              type: 'string'\n            }\n          },\n          product_metrics: {\n            type: 'array',\n            description: 'Telnyx Product Metrics',\n            items: {\n              type: 'string'\n            }\n          },\n          record_types: {\n            type: 'array',\n            description: 'Subproducts if applicable',\n            items: {\n              type: 'object',\n              description: 'An object following one of the schemas published in https://developers.telnyx.com/docs/api/v2/detail-records',\n              properties: {\n                product_dimensions: {\n                  type: 'array',\n                  description: 'Telnyx Product Dimensions',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                product_metrics: {\n                  type: 'array',\n                  description: 'Telnyx Product Metrics',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                record_type: {\n                  type: 'string',\n                  description: 'Telnyx Product type'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product: {
        type: 'string',
        description:
          'Options (dimensions and metrics) for a given product. If none specified, all products will be returned.',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.usageReports.getOptions(body)));
};

export default { metadata, tool, handler };
