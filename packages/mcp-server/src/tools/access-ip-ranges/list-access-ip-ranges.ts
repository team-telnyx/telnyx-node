// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'access_ip_ranges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/access_ip_ranges',
  operationId: 'ListAccessIpRanges',
};

export const tool: Tool = {
  name: 'list_access_ip_ranges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Access IP Ranges\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_ip_range_list_response',\n  $defs: {\n    access_ip_range_list_response: {\n      type: 'object',\n      title: 'AccessIPRangeListResponseSchema',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            $ref: '#/$defs/access_ip_range'\n          }\n        },\n        meta: {\n          type: 'object',\n          title: 'PaginationMeta',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          },\n          required: [            'page_number',\n            'page_size',\n            'total_pages',\n            'total_results'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    access_ip_range: {\n      type: 'object',\n      title: 'AccessIPRangeResponseSchema',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        cidr_block: {\n          type: 'string',\n          title: 'Cidr Block'\n        },\n        status: {\n          $ref: '#/$defs/cloudflare_sync_status'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'cidr_block',\n        'status',\n        'user_id'\n      ]\n    },\n    cloudflare_sync_status: {\n      type: 'string',\n      title: 'CloudflareSyncStatus',\n      description: 'An enumeration.',\n      enum: [        'pending',\n        'added'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[cidr_block], filter[cidr_block][startswith], filter[cidr_block][endswith], filter[cidr_block][contains], filter[created_at]. Supports complex bracket operations for dynamic filtering.',
        properties: {
          cidr_block: {
            anyOf: [
              {
                type: 'string',
                description: 'Filter by exact CIDR block match',
              },
              {
                type: 'object',
                title: 'CidrBlockPatternFilter',
                description: 'CIDR block pattern matching operations',
                properties: {
                  contains: {
                    type: 'string',
                    description: 'Filter CIDR blocks containing the specified string',
                  },
                  endswith: {
                    type: 'string',
                    description: 'Filter CIDR blocks ending with the specified string',
                  },
                  startswith: {
                    type: 'string',
                    description: 'Filter CIDR blocks starting with the specified string',
                  },
                },
              },
            ],
            description: 'Filter by exact CIDR block match',
          },
          created_at: {
            anyOf: [
              {
                type: 'string',
                description: 'Filter by exact creation date-time',
                format: 'date-time',
              },
              {
                type: 'object',
                title: 'DateRangeFilter',
                description: 'Date range filtering operations',
                properties: {
                  gt: {
                    type: 'string',
                    description: 'Filter for creation date-time greater than',
                    format: 'date-time',
                  },
                  gte: {
                    type: 'string',
                    description: 'Filter for creation date-time greater than or equal to',
                    format: 'date-time',
                  },
                  lt: {
                    type: 'string',
                    description: 'Filter for creation date-time less than',
                    format: 'date-time',
                  },
                  lte: {
                    type: 'string',
                    description: 'Filter for creation date-time less than or equal to',
                    format: 'date-time',
                  },
                },
              },
            ],
            description: 'Filter by exact creation date-time',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
          },
          size: {
            type: 'integer',
          },
        },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.accessIPRanges.list(body)));
};

export default { metadata, tool, handler };
