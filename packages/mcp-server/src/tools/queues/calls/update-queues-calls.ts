// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'queues.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/queues/{queue_name}/calls/{call_control_id}',
  operationId: 'UpdateCallInQueue',
};

export const tool: Tool = {
  name: 'update_queues_calls',
  description: "Update queued call's keep_after_hangup flag",
  inputSchema: {
    type: 'object',
    properties: {
      queue_name: {
        type: 'string',
      },
      call_control_id: {
        type: 'string',
      },
      keep_after_hangup: {
        type: 'boolean',
        description: 'Whether the call should remain in queue after hangup.',
      },
    },
    required: ['queue_name', 'call_control_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, ...body } = args as any;
  const response = await client.queues.calls.update(call_control_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
