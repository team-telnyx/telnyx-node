// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.usage_reports.voice',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/usage_reports/voice',
  operationId: 'submitCdrUsageReport',
};

export const tool: Tool = {
  name: 'create_usage_reports_reporting_legacy_voice',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new legacy usage V2 CDR report request with the specified filters\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/voice_create_response',\n  $defs: {\n    voice_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/cdr_usage_report_response_legacy'\n        }\n      }\n    },\n    cdr_usage_report_response_legacy: {\n      type: 'object',\n      description: 'Legacy V2 CDR usage report response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        aggregation_type: {\n          type: 'integer',\n          description: 'Aggregation type: All = 0, By Connections = 1, By Tags = 2, By Billing Group = 3'\n        },\n        connections: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        product_breakdown: {\n          type: 'integer',\n          description: 'Product breakdown type: No breakdown = 0, DID vs Toll-free = 1, Country = 2, DID vs Toll-free per Country = 3'\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string'\n        },\n        result: {\n          type: 'object',\n          additionalProperties: true\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'integer',\n          description: 'Status of the report: Pending = 1, Complete = 2, Failed = 3, Expired = 4'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_time: {
        type: 'string',
        description: 'End time in ISO format',
        format: 'date-time',
      },
      start_time: {
        type: 'string',
        description: 'Start time in ISO format',
        format: 'date-time',
      },
      aggregation_type: {
        type: 'integer',
        description: 'Aggregation type: All = 0, By Connections = 1, By Tags = 2, By Billing Group = 3',
      },
      connections: {
        type: 'array',
        description: 'List of connections to filter by',
        items: {
          type: 'integer',
          description: 'List of connections to filter by',
        },
      },
      managed_accounts: {
        type: 'array',
        description: 'List of managed accounts to include',
        items: {
          type: 'string',
        },
      },
      product_breakdown: {
        type: 'integer',
        description:
          'Product breakdown type: No breakdown = 0, DID vs Toll-free = 1, Country = 2, DID vs Toll-free per Country = 3',
      },
      select_all_managed_accounts: {
        type: 'boolean',
        description: 'Whether to select all managed accounts',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['end_time', 'start_time'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.legacy.reporting.usageReports.voice.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
