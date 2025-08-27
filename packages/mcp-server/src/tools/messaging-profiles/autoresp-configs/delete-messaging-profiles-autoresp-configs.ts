// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

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
  description: 'Delete Auto-Response Setting',
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
    },
    required: ['profile_id', 'autoresp_cfg_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { autoresp_cfg_id, ...body } = args as any;
  return asTextContentResult(
    (await client.messagingProfiles.autorespConfigs.delete(autoresp_cfg_id, body)) as object,
  );
};

export default { metadata, tool, handler };
