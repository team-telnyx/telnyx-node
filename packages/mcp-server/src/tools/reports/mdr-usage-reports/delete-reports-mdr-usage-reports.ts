// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'reports.mdr_usage_reports',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/reports/mdr_usage_reports/{id}',
  operationId: 'DeleteUsageReport',
};

export const tool: Tool = {
  name: 'delete_reports_mdr_usage_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete messaging usage report by id\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mdr_usage_report_delete_response',\n  $defs: {\n    mdr_usage_report_delete_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/mdr_usage_report'\n        }\n      }\n    },\n    mdr_usage_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource'\n        },\n        aggregation_type: {\n          type: 'string',\n          enum: [            'NO_AGGREGATION',\n            'PROFILE',\n            'TAGS'\n          ]\n        },\n        connections: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        end_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        profiles: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string'\n        },\n        report_url: {\n          type: 'string'\n        },\n        result: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              carrier_passthrough_fee: {\n                type: 'string'\n              },\n              connection: {\n                type: 'string'\n              },\n              cost: {\n                type: 'string'\n              },\n              currency: {\n                type: 'string'\n              },\n              delivered: {\n                type: 'string'\n              },\n              direction: {\n                type: 'string'\n              },\n              message_type: {\n                type: 'string'\n              },\n              parts: {\n                type: 'string'\n              },\n              product: {\n                type: 'string'\n              },\n              profile_id: {\n                type: 'string'\n              },\n              received: {\n                type: 'string'\n              },\n              sent: {\n                type: 'string'\n              },\n              tags: {\n                type: 'string'\n              },\n              tn_type: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        start_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'PENDING',\n            'COMPLETE',\n            'FAILED',\n            'EXPIRED'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.reports.mdrUsageReports.delete(id)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
