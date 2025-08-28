// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/documents/{id}',
  operationId: 'DeleteDocument',
};

export const tool: Tool = {
  name: 'delete_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a document.<br /><br />A document can only be deleted if it's not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/doc_service_document'\n    }\n  },\n  $defs: {\n    doc_service_document: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        content_type: {\n          type: 'string',\n          description: 'The document\\'s content_type.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'Optional reference string for customer tracking.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The filename of the document.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sha256: {\n          type: 'string',\n          description: 'The document\\'s SHA256 hash provided for optional verification purposes.'\n        },\n        size: {\n          type: 'object',\n          description: 'Indicates the document\\'s filesize',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The number of bytes'\n            },\n            unit: {\n              type: 'string',\n              description: 'Identifies the unit'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the current document reviewing status',\n          enum: [            'pending',\n            'verified',\n            'denied'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.documents.delete(id)));
};

export default { metadata, tool, handler };
