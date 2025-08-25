// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'reports.cdr_usage_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reports/cdr_usage_reports/sync',
  operationId: 'GetCDRUsageReportSync',
};

export const tool: Tool = {
  name: 'fetch_sync_reports_cdr_usage_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. \n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        aggregation_type: {\n          type: 'string',\n          enum: [            'NO_AGGREGATION',\n            'CONNECTION',\n            'TAG',\n            'BILLING_GROUP'\n          ]\n        },\n        connections: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        product_breakdown: {\n          type: 'string',\n          enum: [            'NO_BREAKDOWN',\n            'DID_VS_TOLL_FREE',\n            'COUNTRY',\n            'DID_VS_TOLL_FREE_PER_COUNTRY'\n          ]\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string'\n        },\n        result: {\n          type: 'object',\n          additionalProperties: true\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'PENDING',\n            'COMPLETE',\n            'FAILED',\n            'EXPIRED'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      aggregation_type: {
        type: 'string',
        enum: ['NO_AGGREGATION', 'CONNECTION', 'TAG', 'BILLING_GROUP'],
      },
      product_breakdown: {
        type: 'string',
        enum: ['NO_BREAKDOWN', 'DID_VS_TOLL_FREE', 'COUNTRY', 'DID_VS_TOLL_FREE_PER_COUNTRY'],
      },
      connections: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['aggregation_type', 'product_breakdown'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.reports.cdrUsageReports.fetchSync(body)),
  );
};

export default { metadata, tool, handler };
