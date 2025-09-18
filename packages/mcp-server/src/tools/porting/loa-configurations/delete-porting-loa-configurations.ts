// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.loa_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/porting/loa_configurations/{id}',
  operationId: 'DeleteLoaConfiguration',
};

export const tool: Tool = {
  name: 'delete_porting_loa_configurations',
  description: 'Delete a specific LOA configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  const response = await client.porting.loaConfigurations.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
