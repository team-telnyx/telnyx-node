// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/assistants/{assistant_id}/versions/{version_id}',
  operationId: 'delete_assistant_version_public_assistants__assistant_id__versions__version_id__delete',
};

export const tool: Tool = {
  name: 'delete_assistants_ai_versions',
  description: 'Permanently removes a specific version of an assistant. Can not delete main version',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  const response = await client.ai.assistants.versions.delete(version_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
