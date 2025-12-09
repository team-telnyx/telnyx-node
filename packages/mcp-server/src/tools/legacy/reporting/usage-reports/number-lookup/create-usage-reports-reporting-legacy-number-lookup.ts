// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.usage_reports.number_lookup',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/usage_reports/number_lookup',
  operationId: 'submitTelcoDataUsageReport',
};

export const tool: Tool = {
  name: 'create_usage_reports_reporting_legacy_number_lookup',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit a new telco data usage report\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_lookup_create_response',\n  $defs: {\n    number_lookup_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/telco_data_usage_report_response'\n        }\n      }\n    },\n    telco_data_usage_report_response: {\n      type: 'object',\n      description: 'Telco data usage report response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the report'\n        },\n        aggregation_type: {\n          type: 'string',\n          description: 'Type of aggregation used in the report'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the report was created',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          description: 'End date of the report period',\n          format: 'date'\n        },\n        managed_accounts: {\n          type: 'array',\n          description: 'List of managed account IDs included in the report',\n          items: {\n            type: 'string'\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Record type identifier'\n        },\n        report_url: {\n          type: 'string',\n          description: 'URL to download the complete report'\n        },\n        result: {\n          type: 'array',\n          description: 'Array of usage records',\n          items: {\n            $ref: '#/$defs/telco_data_usage_record'\n          }\n        },\n        start_date: {\n          type: 'string',\n          description: 'Start date of the report period',\n          format: 'date'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the report'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp when the report was last updated',\n          format: 'date-time'\n        }\n      }\n    },\n    telco_data_usage_record: {\n      type: 'object',\n      properties: {\n        aggregations: {\n          type: 'array',\n          description: 'List of aggregations by lookup type',\n          items: {\n            $ref: '#/$defs/telco_data_aggregation'\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Record type identifier'\n        },\n        user_id: {\n          type: 'string',\n          description: 'User ID'\n        }\n      }\n    },\n    telco_data_aggregation: {\n      type: 'object',\n      properties: {\n        currency: {\n          type: 'string',\n          description: 'Currency code'\n        },\n        total_cost: {\n          type: 'number',\n          description: 'Total cost for this aggregation'\n        },\n        total_dips: {\n          type: 'integer',\n          description: 'Total number of lookups performed'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of telco data lookup'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      aggregationType: {
        type: 'string',
        description: 'Type of aggregation for the report',
        enum: ['ALL', 'BY_ORGANIZATION_MEMBER'],
      },
      endDate: {
        type: 'string',
        description: 'End date for the usage report',
        format: 'date',
      },
      managedAccounts: {
        type: 'array',
        description: 'List of managed accounts to include in the report',
        items: {
          type: 'string',
        },
      },
      startDate: {
        type: 'string',
        description: 'Start date for the usage report',
        format: 'date',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.legacy.reporting.usageReports.numberLookup.create(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
