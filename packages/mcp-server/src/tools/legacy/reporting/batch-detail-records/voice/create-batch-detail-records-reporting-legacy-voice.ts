// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.batch_detail_records.voice',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/batch_detail_records/voice',
  operationId: 'submitCdrRequest',
};

export const tool: Tool = {
  name: 'create_batch_detail_records_reporting_legacy_voice',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new CDR report request with the specified filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'Response object for CDR detailed report',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the report'\n        },\n        call_types: {\n          type: 'array',\n          description: 'List of call types (Inbound = 1, Outbound = 2)',\n          items: {\n            type: 'integer',\n            description: 'Call type value'\n          }\n        },\n        connections: {\n          type: 'array',\n          description: 'List of connections',\n          items: {\n            type: 'integer',\n            description: 'List of connections'\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation date of the report'\n        },\n        end_time: {\n          type: 'string',\n          description: 'End time in ISO format'\n        },\n        filters: {\n          type: 'array',\n          description: 'List of filters',\n          items: {\n            type: 'object',\n            description: 'Query filter criteria. Note: The first filter object must specify filter_type as \\'and\\'. You cannot follow an \\'or\\' with another \\'and\\'.',\n            properties: {\n              billing_group: {\n                type: 'string',\n                description: 'Billing group UUID to filter by'\n              },\n              cld: {\n                type: 'string',\n                description: 'Called line identification (destination number)'\n              },\n              cld_filter: {\n                type: 'string',\n                description: 'Filter type for CLD matching',\n                enum: [                  'contains',\n                  'starts_with',\n                  'ends_with'\n                ]\n              },\n              cli: {\n                type: 'string',\n                description: 'Calling line identification (caller ID)'\n              },\n              cli_filter: {\n                type: 'string',\n                description: 'Filter type for CLI matching',\n                enum: [                  'contains',\n                  'starts_with',\n                  'ends_with'\n                ]\n              },\n              filter_type: {\n                type: 'string',\n                description: 'Logical operator for combining filters',\n                enum: [                  'and',\n                  'or'\n                ]\n              },\n              tags_list: {\n                type: 'string',\n                description: 'Tag name to filter by'\n              }\n            }\n          }\n        },\n        managed_accounts: {\n          type: 'array',\n          description: 'List of managed accounts',\n          items: {\n            type: 'string'\n          }\n        },\n        record_type: {\n          type: 'string'\n        },\n        record_types: {\n          type: 'array',\n          description: 'List of record types (Complete = 1, Incomplete = 2, Errors = 3)',\n          items: {\n            type: 'integer',\n            description: 'Record type value'\n          }\n        },\n        report_name: {\n          type: 'string',\n          description: 'Name of the report'\n        },\n        report_url: {\n          type: 'string',\n          description: 'URL to download the report'\n        },\n        retry: {\n          type: 'integer',\n          description: 'Number of retries'\n        },\n        source: {\n          type: 'string',\n          description: 'Source of the report. Valid values: calls (default), call-control, fax-api, webrtc'\n        },\n        start_time: {\n          type: 'string',\n          description: 'Start time in ISO format'\n        },\n        status: {\n          type: 'integer',\n          description: 'Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)'\n        },\n        timezone: {\n          type: 'string',\n          description: 'Timezone for the report'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Last update date of the report'\n        }\n      }\n    }\n  }\n}\n```",
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
      call_types: {
        type: 'array',
        description: 'List of call types to filter by (Inbound = 1, Outbound = 2)',
        items: {
          type: 'integer',
        },
      },
      connections: {
        type: 'array',
        description: 'List of connections to filter by',
        items: {
          type: 'integer',
        },
      },
      fields: {
        type: 'array',
        description: 'Set of fields to include in the report',
        items: {
          type: 'string',
        },
      },
      filters: {
        type: 'array',
        description: 'List of filters to apply',
        items: {
          type: 'object',
          description:
            "Query filter criteria. Note: The first filter object must specify filter_type as 'and'. You cannot follow an 'or' with another 'and'.",
          properties: {
            billing_group: {
              type: 'string',
              description: 'Billing group UUID to filter by',
            },
            cld: {
              type: 'string',
              description: 'Called line identification (destination number)',
            },
            cld_filter: {
              type: 'string',
              description: 'Filter type for CLD matching',
              enum: ['contains', 'starts_with', 'ends_with'],
            },
            cli: {
              type: 'string',
              description: 'Calling line identification (caller ID)',
            },
            cli_filter: {
              type: 'string',
              description: 'Filter type for CLI matching',
              enum: ['contains', 'starts_with', 'ends_with'],
            },
            filter_type: {
              type: 'string',
              description: 'Logical operator for combining filters',
              enum: ['and', 'or'],
            },
            tags_list: {
              type: 'string',
              description: 'Tag name to filter by',
            },
          },
        },
      },
      include_all_metadata: {
        type: 'boolean',
        description: 'Whether to include all metadata',
      },
      managed_accounts: {
        type: 'array',
        description: 'List of managed accounts to include',
        items: {
          type: 'string',
        },
      },
      record_types: {
        type: 'array',
        description: 'List of record types to filter by (Complete = 1, Incomplete = 2, Errors = 3)',
        items: {
          type: 'integer',
        },
      },
      report_name: {
        type: 'string',
        description: 'Name of the report',
      },
      select_all_managed_accounts: {
        type: 'boolean',
        description: 'Whether to select all managed accounts',
      },
      source: {
        type: 'string',
        description: 'Source of the report. Valid values: calls (default), call-control, fax-api, webrtc',
      },
      timezone: {
        type: 'string',
        description: 'Timezone for the report',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.legacy.reporting.batchDetailRecords.voice.create(body)),
  );
};

export default { metadata, tool, handler };
