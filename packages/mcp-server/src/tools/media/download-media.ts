// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'media',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/media/{media_name}/download',
  operationId: 'DownloadMedia',
};

export const tool: Tool = {
  name: 'download_media',
  description: 'Downloads a stored media file.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { media_name, ...body } = args as any;
  return asBinaryContentResult(await client.media.download(media_name));
};

export default { metadata, tool, handler };
