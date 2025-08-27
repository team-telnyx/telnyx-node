// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/{assistant_id}/clone',
  operationId: 'clone_assistant_public_assistants__assistant_id__clone_post',
};

export const tool: Tool = {
  name: 'clone_ai_assistants',
  description: 'Clone an existing assistant, excluding telephony and messaging settings.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, ...body } = args as any;
  return asTextContentResult(await client.ai.assistants.clone(assistant_id));
};

export default { metadata, tool, handler };
