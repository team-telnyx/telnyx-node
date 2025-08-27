// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'verified_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/verified_numbers',
  operationId: 'ListVerifiedNumbers',
};

export const tool: Tool = {
  name: 'list_verified_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a paginated list of Verified Numbers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ListVerifiedNumbersResponse',\n  description: 'A paginated list of Verified Numbers',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/verified_number'\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  },\n  required: [    'data',\n    'meta'\n  ],\n  $defs: {\n    verified_number: {\n      type: 'object',\n      title: 'VerifiedNumberResponse',\n      properties: {\n        phone_number: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string',\n          title: 'VerifiedNumberRecordType',\n          description: 'The possible verified numbers record types.',\n          enum: [            'verified_number'\n          ]\n        },\n        verified_at: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'object',
        description:
          'Consolidated page parameter (deepObject style). Use page[size] and page[number] in the query string. Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            title: 'page[number]',
          },
          size: {
            type: 'integer',
            title: 'page[size]',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.verifiedNumbers.list(body)));
};

export default { metadata, tool, handler };
