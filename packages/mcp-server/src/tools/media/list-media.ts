// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'media',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/media',
  operationId: 'ListMediaStorage',
};

export const tool: Tool = {
  name: 'list_media',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of stored media files.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/media_list_response',\n  $defs: {\n    media_list_response: {\n      type: 'object',\n      title: 'List of media resources response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/media_resource'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    media_resource: {\n      type: 'object',\n      title: 'Media Resource',\n      properties: {\n        content_type: {\n          type: 'string',\n          description: 'Content type of the file'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource was created'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource will expire and be deleted.'\n        },\n        media_name: {\n          type: 'string',\n          description: 'Uniquely identifies a media resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource was last updated'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[content_type][]',
        properties: {
          content_type: {
            type: 'array',
            description: 'Filters files by given content types',
            items: {
              type: 'string',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.media.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
