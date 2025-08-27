// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'mobile_push_credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/mobile_push_credentials/{push_credential_id}',
  operationId: 'DeletePushCredentialById',
};

export const tool: Tool = {
  name: 'delete_mobile_push_credentials',
  description: 'Deletes a mobile push credential based on the given `push_credential_id`',
  inputSchema: {
    type: 'object',
    properties: {
      push_credential_id: {
        type: 'string',
      },
    },
    required: ['push_credential_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { push_credential_id, ...body } = args as any;
  const response = await client.mobilePushCredentials.delete(push_credential_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
