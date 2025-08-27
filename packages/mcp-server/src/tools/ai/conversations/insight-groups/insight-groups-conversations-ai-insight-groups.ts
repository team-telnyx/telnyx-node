// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.conversations.insight_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/conversations/insight-groups',
  operationId: 'create_insight_group',
};

export const tool: Tool = {
  name: 'insight_groups_conversations_ai_insight_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new insight group\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/insight_template_group_detail',\n  $defs: {\n    insight_template_group_detail: {\n      type: 'object',\n      title: 'InsightTemplateGroupDetailRespData',\n      properties: {\n        data: {\n          $ref: '#/$defs/insight_template_group'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    insight_template_group: {\n      type: 'object',\n      title: 'InsightTemplateGroupResp',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        insights: {\n          type: 'array',\n          title: 'Insights',\n          items: {\n            $ref: '#/$defs/insight_template'\n          }\n        },\n        webhook: {\n          type: 'string',\n          title: 'Webhook'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name'\n      ]\n    },\n    insight_template: {\n      type: 'object',\n      title: 'InsightTemplateResp',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions'\n        },\n        insight_type: {\n          type: 'string',\n          title: 'TemplateType',\n          enum: [            'custom',\n            'default'\n          ]\n        },\n        json_schema: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'object',\n              title: 'JsonSchemaObject',\n              additionalProperties: true\n            }\n          ],\n          title: 'Json Schema',\n          description: 'If specified, the output will follow the JSON schema.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        webhook: {\n          type: 'string',\n          title: 'Webhook'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'instructions'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      webhook: {
        type: 'string',
        title: 'Webhook',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.conversations.insightGroups.insightGroups(body)),
  );
};

export default { metadata, tool, handler };
