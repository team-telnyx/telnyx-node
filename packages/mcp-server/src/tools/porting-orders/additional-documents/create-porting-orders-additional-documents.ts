// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.additional_documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{id}/additional_documents',
  operationId: 'CreateAdditionalDocuments',
};

export const tool: Tool = {
  name: 'create_porting_orders_additional_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a list of additional documents for a porting order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/additional_document_create_response',\n  $defs: {\n    additional_document_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Uniquely identifies this additional document'\n              },\n              content_type: {\n                type: 'string',\n                description: 'The content type of the related document.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created.',\n                format: 'date-time'\n              },\n              document_id: {\n                type: 'string',\n                description: 'Identifies the associated document'\n              },\n              document_type: {\n                type: 'string',\n                description: 'Identifies the type of additional document',\n                enum: [                  'loa',\n                  'invoice',\n                  'csr',\n                  'other'\n                ]\n              },\n              filename: {\n                type: 'string',\n                description: 'The filename of the related document.'\n              },\n              porting_order_id: {\n                type: 'string',\n                description: 'Identifies the associated porting order'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated.',\n                format: 'date-time'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      additional_documents: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            document_id: {
              type: 'string',
              description: 'The document identification',
            },
            document_type: {
              type: 'string',
              description: 'The type of document being created.',
              enum: ['loa', 'invoice', 'csr', 'other'],
            },
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
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.portingOrders.additionalDocuments.create(id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
