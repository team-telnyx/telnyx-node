// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'wireless.detail_records_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wireless/detail_records_reports',
  operationId: 'GetWdrReports',
};

export const tool: Tool = {
  name: 'list_wireless_detail_records_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the WDR Reports that match the given parameters.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/detail_records_report_list_response',\n  $defs: {\n    detail_records_report_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/wdr_report'\n          }\n        }\n      }\n    },\n    wdr_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        end_time: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating the end time.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string',\n          description: 'The URL where the report content, when generated, will be published to.'\n        },\n        start_time: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating the start time.'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the status of the report, which is updated asynchronously.',\n          enum: [            'pending',\n            'complete',\n            'failed',\n            'deleted'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'page[number]': {
        type: 'integer',
        description: 'The page number to load.',
      },
      'page[size]': {
        type: 'integer',
        description: 'The size of the page.',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.wireless.detailRecordsReports.list(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
