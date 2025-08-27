// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'integration_secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/integration_secrets/{id}',
  operationId: 'delete_integration_secret',
};

export const tool: Tool = {
  name: 'delete_integration_secrets',
  description: 'Delete an integration secret given its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Secret Id',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.integrationSecrets.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
