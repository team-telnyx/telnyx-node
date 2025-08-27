// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.loa_configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/loa_configurations/{id}/preview',
  operationId: 'PreviewLoaConfiguration',
};

export const tool: Tool = {
  name: 'preview_1_porting_loa_configurations',
  description: 'Preview a specific LOA configuration.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.porting.loaConfigurations.preview1(id));
};

export default { metadata, tool, handler };
