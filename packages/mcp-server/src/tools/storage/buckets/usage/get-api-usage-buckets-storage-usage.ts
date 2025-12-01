// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.buckets.usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/storage/buckets/{bucketName}/usage/api',
  operationId: 'GetStorageAPIUsage',
};

export const tool: Tool = {
  name: 'get_api_usage_buckets_storage_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the detail on API usage on a bucket of a particular time period, group by method category.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/usage_get_api_usage_response',\n  $defs: {\n    usage_get_api_usage_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              categories: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    bytes_received: {\n                      type: 'integer',\n                      description: 'The number of bytes received'\n                    },\n                    bytes_sent: {\n                      type: 'integer',\n                      description: 'The number of bytes sent'\n                    },\n                    category: {\n                      type: 'string',\n                      description: 'The category of the bucket operation',\n                      enum: [                        'list_bucket',\n                        'list_buckets',\n                        'get-bucket_location',\n                        'create_bucket',\n                        'stat_bucket',\n                        'get_bucket_versioning',\n                        'set_bucket_versioning',\n                        'get_obj',\n                        'put_obj',\n                        'delete_obj'\n                      ]\n                    },\n                    ops: {\n                      type: 'integer',\n                      description: 'The number of operations'\n                    },\n                    successful_ops: {\n                      type: 'integer',\n                      description: 'The number of successful operations'\n                    }\n                  }\n                }\n              },\n              timestamp: {\n                type: 'string',\n                description: 'The time the usage was recorded',\n                format: 'date-time'\n              },\n              total: {\n                type: 'object',\n                properties: {\n                  bytes_received: {\n                    type: 'integer',\n                    description: 'The number of bytes received'\n                  },\n                  bytes_sent: {\n                    type: 'integer',\n                    description: 'The number of bytes sent'\n                  },\n                  ops: {\n                    type: 'integer',\n                    description: 'The number of operations'\n                  },\n                  successful_ops: {\n                    type: 'integer',\n                    description: 'The number of successful operations'\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[start_time], filter[end_time]',
        properties: {
          end_time: {
            type: 'string',
            description: 'The end time of the period to filter the usage (ISO microsecond format)',
            format: 'date-time',
          },
          start_time: {
            type: 'string',
            description: 'The start time of the period to filter the usage (ISO microsecond format)',
            format: 'date-time',
          },
        },
        required: ['end_time', 'start_time'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucketName', 'filter'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.storage.buckets.usage.getAPIUsage(bucketName, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
