// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_profiles.autoresp_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
  operationId: 'DeleteAutorespConfig',
};

export const tool: Tool = {
  name: 'delete_messaging_profiles_autoresp_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Auto-Response Setting\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/autoresp_config_delete_response',\n  $defs: {\n    autoresp_config_delete_response: {\n      type: 'string'\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['profile_id', 'autoresp_cfg_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { autoresp_cfg_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.messagingProfiles.autorespConfigs.delete(autoresp_cfg_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
