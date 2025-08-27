// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants',
  operationId: 'get_assistants_public_assistants_get',
};

export const tool: Tool = {
  name: 'list_ai_assistants',
  description: 'Retrieve a list of all AI Assistants configured by the user.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.ai.assistants.list());
};

export default { metadata, tool, handler };
