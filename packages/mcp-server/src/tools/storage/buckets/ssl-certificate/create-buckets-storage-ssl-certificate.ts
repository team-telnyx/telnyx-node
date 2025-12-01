// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.buckets.ssl_certificate',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/storage/buckets/{bucketName}/ssl_certificate',
  operationId: 'AddStorageSSLCertificate',
};

export const tool: Tool = {
  name: 'create_buckets_storage_ssl_certificate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUploads an SSL certificate and its matching secret so that you can use Telnyx’s storage as your CDN.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ssl_certificate_create_response',\n  $defs: {\n    ssl_certificate_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/ssl_certificate'\n        }\n      }\n    },\n    ssl_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the SSL certificate'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time when SSL certificate was uploaded',\n          format: 'date-time'\n        },\n        issued_by: {\n          type: 'object',\n          properties: {\n            common_name: {\n              type: 'string',\n              description: 'The common name of the entity the certificate was issued by'\n            },\n            organization: {\n              type: 'string',\n              description: 'The organization the certificate was issued by'\n            },\n            organization_unit: {\n              type: 'string',\n              description: 'The organizational unit the certificate was issued by'\n            }\n          }\n        },\n        issued_to: {\n          type: 'object',\n          properties: {\n            common_name: {\n              type: 'string',\n              description: 'The common name of the entity the certificate was issued to'\n            },\n            organization: {\n              type: 'string',\n              description: 'The organization the certificate was issued to'\n            },\n            organization_unit: {\n              type: 'string',\n              description: 'The organizational unit the certificate was issued to'\n            }\n          }\n        },\n        valid_from: {\n          type: 'string',\n          description: 'The time the certificate is valid from',\n          format: 'date-time'\n        },\n        valid_to: {\n          type: 'string',\n          description: 'The time the certificate is valid to',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      certificate: {
        type: 'string',
        description: 'The SSL certificate file',
      },
      private_key: {
        type: 'string',
        description: 'The private key file',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.storage.buckets.sslCertificate.create(bucketName, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
