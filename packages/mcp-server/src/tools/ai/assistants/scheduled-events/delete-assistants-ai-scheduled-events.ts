// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants.scheduled_events',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/assistants/{assistant_id}/scheduled_events/{event_id}',
  operationId: 'delete_scheduled_event',
};

export const tool: Tool = {
  name: 'delete_assistants_ai_scheduled_events',
  description:
    'If the event is pending, this will cancel the event. Otherwise, this will simply remove the record of the event.',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      event_id: {
        type: 'string',
        title: 'Event Id',
      },
    },
    required: ['assistant_id', 'event_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult((await client.ai.assistants.scheduledEvents.delete(event_id, body)) as object);
};

export default { metadata, tool, handler };
