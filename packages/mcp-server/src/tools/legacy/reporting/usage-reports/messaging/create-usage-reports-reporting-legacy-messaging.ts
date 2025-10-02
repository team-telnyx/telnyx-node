// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.usage_reports.messaging',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/usage_reports/messaging',
  operationId: 'submitMdrUsageReport',
};

export const tool: Tool = {
  name: 'create_usage_reports_reporting_legacy_messaging',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new legacy usage V2 MDR report request with the specified filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'Legacy V2 MDR usage report response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        aggregation_type: {\n          type: 'integer',\n          description: 'Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2'\n        },\n        connections: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        profiles: {\n          type: 'array',\n          description: 'List of messaging profile IDs',\n          items: {\n            type: 'string'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string'\n        },\n        result: {\n          type: 'object',\n          additionalProperties: true\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'integer',\n          description: 'Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      aggregation_type: {
        type: 'integer',
        description: 'Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2',
      },
      end_time: {
        type: 'string',
        format: 'date-time',
      },
      managed_accounts: {
        type: 'array',
        description: 'List of managed accounts to include',
        items: {
          type: 'string',
        },
      },
      profiles: {
        type: 'array',
        description: 'List of messaging profile IDs to filter by',
        items: {
          type: 'string',
        },
      },
      select_all_managed_accounts: {
        type: 'boolean',
      },
      start_time: {
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
    required: ['aggregation_type'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.legacy.reporting.usageReports.messaging.create(body)),
  );
};

export default { metadata, tool, handler };
