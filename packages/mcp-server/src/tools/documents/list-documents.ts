// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents',
  operationId: 'ListDocuments',
};

export const tool: Tool = {
  name: 'list_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all documents ordered by created_at descending.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/doc_service_document'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    doc_service_document: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        content_type: {\n          type: 'string',\n          description: 'The document\\'s content_type.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'Optional reference string for customer tracking.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The filename of the document.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sha256: {\n          type: 'string',\n          description: 'The document\\'s SHA256 hash provided for optional verification purposes.'\n        },\n        size: {\n          type: 'object',\n          description: 'Indicates the document\\'s filesize',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The number of bytes'\n            },\n            unit: {\n              type: 'string',\n              description: 'Identifies the unit'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the current document reviewing status',\n          enum: [            'pending',\n            'verified',\n            'denied'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for documents (deepObject style). Originally: filter[filename][contains], filter[customer_reference][eq], filter[customer_reference][in][], filter[created_at][gt], filter[created_at][lt]',
        properties: {
          created_at: {
            type: 'object',
            properties: {
              gt: {
                type: 'string',
                description: 'Filter by created at greater than provided value.',
                format: 'date-time',
              },
              lt: {
                type: 'string',
                description: 'Filter by created at less than provided value.',
                format: 'date-time',
              },
            },
          },
          customer_reference: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter documents by a customer reference.',
              },
              in: {
                type: 'array',
                description: 'Filter documents by a list of customer references.',
                items: {
                  type: 'string',
                },
              },
            },
          },
          filename: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description: 'Filter by string matching part of filename.',
              },
            },
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
      sort: {
        type: 'array',
        description: 'Consolidated sort parameter for documents (deepObject style). Originally: sort[]',
        items: {
          type: 'string',
          enum: ['filename', 'created_at', 'updated_at', '-filename', '-created_at', '-updated_at'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.documents.list(body)));
};

export default { metadata, tool, handler };
