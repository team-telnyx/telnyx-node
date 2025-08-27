// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'integration_secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integration_secrets',
  operationId: 'list_integration_secrets',
};

export const tool: Tool = {
  name: 'list_integration_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of all integration secrets configured by the user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SecretsListData',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        $ref: '#/$defs/integration_secret'\n      }\n    },\n    meta: {\n      type: 'object',\n      title: 'Metadata',\n      properties: {\n        page_number: {\n          type: 'integer',\n          title: 'Page Number'\n        },\n        page_size: {\n          type: 'integer',\n          title: 'Page Size'\n        },\n        total_pages: {\n          type: 'integer',\n          title: 'Total Pages'\n        },\n        total_results: {\n          type: 'integer',\n          title: 'Total Items'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  },\n  required: [    'data',\n    'meta'\n  ],\n  $defs: {\n    integration_secret: {\n      type: 'object',\n      title: 'IntegrationSecret',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        identifier: {\n          type: 'string',\n          title: 'Identifier'\n        },\n        record_type: {\n          type: 'string',\n          title: 'Record Type'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'identifier',\n        'record_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[type]',
        properties: {
          type: {
            type: 'string',
            title: 'Filter by type',
            enum: ['bearer', 'basic'],
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            title: 'Page Number',
          },
          size: {
            type: 'integer',
            title: 'Page Size',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.integrationSecrets.list(body)));
};

export default { metadata, tool, handler };
