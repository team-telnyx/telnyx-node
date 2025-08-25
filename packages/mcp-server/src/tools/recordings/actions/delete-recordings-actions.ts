// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'recordings.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/recordings/actions/delete',
  operationId: 'DeleteRecordings',
};

export const tool: Tool = {
  name: 'delete_recordings_actions',
  description: 'Permanently deletes a list of call recordings.',
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        description: 'List of call recording IDs to delete.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['ids'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.recordings.actions.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
