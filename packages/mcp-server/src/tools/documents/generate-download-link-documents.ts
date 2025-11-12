// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/{id}/download_link',
  operationId: 'getDocumentDownloadLink',
};

export const tool: Tool = {
  name: 'generate_download_link_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a temporary pre-signed URL that can be used to download the document directly from the storage backend without authentication.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_generate_download_link_response',\n  $defs: {\n    document_generate_download_link_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            url: {\n              type: 'string',\n              description: 'Pre-signed temporary URL for downloading the document'\n            }\n          },\n          required: [            'url'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.documents.generateDownloadLink(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
