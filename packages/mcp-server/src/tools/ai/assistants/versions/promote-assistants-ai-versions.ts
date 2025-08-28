// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/{assistant_id}/versions/{version_id}/promote',
  operationId:
    'promote_assistant_version_public_assistants__assistant_id__versions__version_id__promote_post',
};

export const tool: Tool = {
  name: 'promote_assistants_ai_versions',
  description:
    'Promotes a specific version to be the main/current version of the assistant. This will delete any existing canary deploy configuration and send all live production traffic to this version.',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      version_id: {
        type: 'string',
        title: 'Version Id',
      },
    },
    required: ['assistant_id', 'version_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  return asTextContentResult(await client.ai.assistants.versions.promote(version_id, body));
};

export default { metadata, tool, handler };
