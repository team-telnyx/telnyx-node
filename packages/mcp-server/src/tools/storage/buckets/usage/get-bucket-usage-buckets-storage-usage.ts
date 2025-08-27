// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'storage.buckets.usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/storage/buckets/{bucketName}/usage/storage',
  operationId: 'GetBucketUsage',
};

export const tool: Tool = {
  name: 'get_bucket_usage_buckets_storage_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the amount of storage space and number of files a bucket takes up.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          num_objects: {\n            type: 'integer',\n            description: 'The number of objects in the bucket'\n          },\n          size: {\n            type: 'integer',\n            description: 'The size of the bucket in bytes'\n          },\n          size_kb: {\n            type: 'integer',\n            description: 'The size of the bucket in kilobytes'\n          },\n          timestamp: {\n            type: 'string',\n            description: 'The time the snapshot was taken',\n            format: 'date-time'\n          }\n        }\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta_simple'\n    }\n  },\n  $defs: {\n    pagination_meta_simple: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucketName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.storage.buckets.usage.getBucketUsage(bucketName)),
  );
};

export default { metadata, tool, handler };
