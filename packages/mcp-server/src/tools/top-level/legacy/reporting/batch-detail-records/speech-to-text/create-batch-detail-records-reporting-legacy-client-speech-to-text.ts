// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.legacy.reporting.batch_detail_records.speech_to_text',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/batch_detail_records/speech_to_text',
  operationId: 'submitSttRequest',
};

export const tool: Tool = {
  name: 'create_batch_detail_records_reporting_legacy_client_speech_to_text',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Speech to Text batch report request with the specified filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        download_link: {\n          type: 'string',\n          description: 'URL to download the report'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string'\n        },\n        start_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'PENDING',\n            'COMPLETE',\n            'FAILED',\n            'EXPIRED'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description: 'End date in ISO format with timezone (date range must be up to one month)',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        description: 'Start date in ISO format with timezone',
        format: 'date-time',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.client.legacy.reporting.batchDetailRecords.speechToText.create(body),
    ),
  );
};

export default { metadata, tool, handler };
