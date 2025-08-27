// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.canary_deploys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/assistants/{assistant_id}/canary-deploys',
  operationId: 'delete_canary_deploy_assistants__assistant_id__canary_deploys_delete',
};

export const tool: Tool = {
  name: 'delete_assistants_ai_canary_deploys',
  description:
    'Endpoint to delete a canary deploy configuration for an assistant.\n\nRemoves all canary deploy configurations for the specified assistant.',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
    },
    required: ['assistant_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, ...body } = args as any;
  const response = await client.ai.assistants.canaryDeploys.delete(assistant_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
