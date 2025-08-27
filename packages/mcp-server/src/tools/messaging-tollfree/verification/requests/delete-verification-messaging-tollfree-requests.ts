// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'messaging_tollfree.verification.requests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/messaging_tollfree/verification/requests/{id}',
  operationId: 'DeleteVerificationRequest',
};

export const tool: Tool = {
  name: 'delete_verification_messaging_tollfree_requests',
  description:
    'Delete a verification request\n\nA request may only be deleted when when the request is in the "rejected" state.\n\n* `HTTP 200`: request successfully deleted\n* `HTTP 400`: request exists but can\'t be deleted (i.e. not rejected)\n* `HTTP 404`: request unknown or already deleted',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Id',
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
  return asTextContentResult((await client.messagingTollfree.verification.requests.delete(id)) as object);
};

export default { metadata, tool, handler };
