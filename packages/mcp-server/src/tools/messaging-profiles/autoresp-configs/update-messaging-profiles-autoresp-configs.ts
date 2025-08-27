// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'messaging_profiles.autoresp_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
  operationId: 'UpdateAutoRespConfig',
};

export const tool: Tool = {
  name: 'update_messaging_profiles_autoresp_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Auto-Response Setting\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auto_resp_config_response',\n  $defs: {\n    auto_resp_config_response: {\n      type: 'object',\n      title: 'AutorespConfigResponseSchema',\n      properties: {\n        data: {\n          $ref: '#/$defs/auto_resp_config'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    auto_resp_config: {\n      type: 'object',\n      title: 'AutorespConfigSchema',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        country_code: {\n          type: 'string',\n          title: 'Country Code'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        keywords: {\n          type: 'array',\n          title: 'Keywords',\n          items: {\n            type: 'string'\n          }\n        },\n        op: {\n          type: 'string',\n          title: 'Op',\n          enum: [            'start',\n            'stop',\n            'info'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        resp_text: {\n          type: 'string',\n          title: 'Resp Text'\n        }\n      },\n      required: [        'id',\n        'country_code',\n        'created_at',\n        'keywords',\n        'op',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      profile_id: {
        type: 'string',
        title: 'Profile Id',
      },
      autoresp_cfg_id: {
        type: 'string',
        title: 'Autoresp Cfg Id',
      },
      country_code: {
        type: 'string',
        title: 'Country Code',
      },
      keywords: {
        type: 'array',
        title: 'Keywords',
        items: {
          type: 'string',
        },
      },
      op: {
        type: 'string',
        title: 'Op',
        enum: ['start', 'stop', 'info'],
      },
      resp_text: {
        type: 'string',
        title: 'Resp Text',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['profile_id', 'autoresp_cfg_id', 'country_code', 'keywords', 'op'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { autoresp_cfg_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.messagingProfiles.autorespConfigs.update(autoresp_cfg_id, body),
    ),
  );
};

export default { metadata, tool, handler };
