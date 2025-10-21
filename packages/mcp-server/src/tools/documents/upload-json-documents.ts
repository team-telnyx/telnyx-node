// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/documents',
  operationId: 'CreateDocument',
};

export const tool: Tool = {
  name: 'upload_json_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_upload_json_response',\n  $defs: {\n    document_upload_json_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/doc_service_document'\n        }\n      }\n    },\n    doc_service_document: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        content_type: {\n          type: 'string',\n          description: 'The document\\'s content_type.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'Optional reference string for customer tracking.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The filename of the document.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sha256: {\n          type: 'string',\n          description: 'The document\\'s SHA256 hash provided for optional verification purposes.'\n        },\n        size: {\n          type: 'object',\n          description: 'Indicates the document\\'s filesize',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The number of bytes'\n            },\n            unit: {\n              type: 'string',\n              description: 'Identifies the unit'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the current document reviewing status',\n          enum: [            'pending',\n            'verified',\n            'denied'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            description:
              'If the file is already hosted publicly, you can provide a URL and have the documents service fetch it for you.',
          },
          customer_reference: {
            type: 'string',
            description: 'Optional reference string for customer tracking.',
          },
          filename: {
            type: 'string',
            description: 'The filename of the document.',
          },
        },
        required: ['url'],
      },
      {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            description: 'The Base64 encoded contents of the file you are uploading.',
          },
          customer_reference: {
            type: 'string',
            description: 'A customer reference string for customer look ups.',
          },
          filename: {
            type: 'string',
            description: 'The filename of the document.',
          },
        },
        required: ['file'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.documents.uploadJson(body)));
};

export default { metadata, tool, handler };
