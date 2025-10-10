// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations.insights',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/conversations/insights',
  operationId: 'get_all_insights',
};

export const tool: Tool = {
  name: 'list_conversations_ai_insights',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all insights\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/insight_list_response',\n  $defs: {\n    insight_list_response: {\n      type: 'object',\n      title: 'GetInsightTemplatesRespData',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            $ref: '#/$defs/insight_template'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/meta'\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    insight_template: {\n      type: 'object',\n      title: 'InsightTemplateResp',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions'\n        },\n        insight_type: {\n          type: 'string',\n          title: 'TemplateType',\n          enum: [            'custom',\n            'default'\n          ]\n        },\n        json_schema: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'object',\n              title: 'JsonSchemaObject',\n              additionalProperties: true\n            }\n          ],\n          title: 'Json Schema',\n          description: 'If specified, the output will follow the JSON schema.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        webhook: {\n          type: 'string',\n          title: 'Webhook'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'instructions'\n      ]\n    },\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            title: 'Page[Number]',
            description: 'Page number (0-based)',
          },
          size: {
            type: 'integer',
            title: 'Page[Size]',
            description: 'Number of items per page',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.conversations.insights.list(body)));
};

export default { metadata, tool, handler };
