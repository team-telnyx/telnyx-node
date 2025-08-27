// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'media',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/media/{media_name}',
  operationId: 'DeleteMediaStorage',
};

export const tool: Tool = {
  name: 'delete_media',
  description: 'Deletes a stored media file.',
  inputSchema: {
    type: 'object',
    properties: {
      media_name: {
        type: 'string',
      },
    },
    required: ['media_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { media_name, ...body } = args as any;
  const response = await client.media.delete(media_name).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
