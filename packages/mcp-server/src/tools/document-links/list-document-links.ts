// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'document_links',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/document_links',
  operationId: 'ListDocumentLinks',
};

export const tool: Tool = {
  name: 'list_document_links',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all documents links ordered by created_at descending.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_link_list_response',\n  $defs: {\n    document_link_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the resource.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n              },\n              document_id: {\n                type: 'string',\n                description: 'Identifies the associated document.'\n              },\n              linked_record_type: {\n                type: 'string',\n                description: 'The linked resource\\'s record type.'\n              },\n              linked_resource_id: {\n                type: 'string',\n                description: 'Identifies the linked resource.'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for document links (deepObject style). Originally: filter[linked_record_type], filter[linked_resource_id]',
        properties: {
          linked_record_type: {
            type: 'string',
            description: 'The linked_record_type of the document to filter on.',
          },
          linked_resource_id: {
            type: 'string',
            description: 'The linked_resource_id of the document to filter on.',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.documentLinks.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
