// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.buckets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/storage/buckets/{bucketName}/{objectName}/presigned_url',
  operationId: 'CreatePresignedObjectUrl',
};

export const tool: Tool = {
  name: 'create_presigned_url_storage_buckets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a timed and authenticated URL to get an object. This is the equivalent to AWS S3’s “presigned” URL. Please note that Telnyx performs authentication differently from AWS S3 and you MUST NOT use the presign method of AWS s3api CLI or sdk to generate the presigned URL. \n\nRefer to: https://developers.telnyx.com/docs/cloud-storage/presigned-urls\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bucket_create_presigned_url_response',\n  $defs: {\n    bucket_create_presigned_url_response: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'object',\n          properties: {\n            token: {\n              type: 'string',\n              description: 'The token for the object'\n            },\n            expires_at: {\n              type: 'string',\n              description: 'The expiration time of the token',\n              format: 'date-time'\n            },\n            presigned_url: {\n              type: 'string',\n              description: 'The presigned URL for the object'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      objectName: {
        type: 'string',
      },
      ttl: {
        type: 'integer',
        description: 'The time to live of the token in seconds',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucketName', 'objectName'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { objectName, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.storage.buckets.createPresignedURL(objectName, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
