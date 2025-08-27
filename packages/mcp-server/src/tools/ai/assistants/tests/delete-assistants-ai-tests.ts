// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/assistants/tests/{test_id}',
  operationId: 'delete_assistant_test_public_assistants_tests__test_id__delete',
};

export const tool: Tool = {
  name: 'delete_assistants_ai_tests',
  description: 'Permanently removes an assistant test and all associated data',
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
        title: 'Test Id',
      },
    },
    required: ['test_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { test_id, ...body } = args as any;
  return asTextContentResult((await client.ai.assistants.tests.delete(test_id)) as object);
};

export default { metadata, tool, handler };
