// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.usage_reports.messaging',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/legacy/reporting/usage_reports/messaging',
  operationId: 'getMdrUsageReports',
};

export const tool: Tool = {
  name: 'list_usage_reports_reporting_legacy_messaging',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch all previous requests for MDR usage reports. \n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_list_response',\n  $defs: {\n    messaging_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/mdr_usage_report_response_legacy'\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    },\n    mdr_usage_report_response_legacy: {\n      type: 'object',\n      description: 'Legacy V2 MDR usage report response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        aggregation_type: {\n          type: 'integer',\n          description: 'Aggregation type: No aggregation = 0, By Messaging Profile = 1, By Tags = 2'\n        },\n        connections: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        profiles: {\n          type: 'array',\n          description: 'List of messaging profile IDs',\n          items: {\n            type: 'string'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string'\n        },\n        result: {\n          type: 'object',\n          additionalProperties: true\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'integer',\n          description: 'Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'Page number',
      },
      per_page: {
        type: 'integer',
        description: 'Size of the page',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.legacy.reporting.usageReports.messaging.list(body)),
  );
};

export default { metadata, tool, handler };
