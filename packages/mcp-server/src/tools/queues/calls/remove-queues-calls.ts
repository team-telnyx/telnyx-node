// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'queues.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/queues/{queue_name}/calls/{call_control_id}',
  operationId: 'RemoveQueueCall',
};

export const tool: Tool = {
  name: 'remove_queues_calls',
  description:
    'Removes an inactive call from a queue. If the call is no longer active, use this command to remove it from the queue.',
  inputSchema: {
    type: 'object',
    properties: {
      queue_name: {
        type: 'string',
      },
      call_control_id: {
        type: 'string',
      },
    },
    required: ['queue_name', 'call_control_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, ...body } = args as any;
  const response = await client.queues.calls.remove(call_control_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
