// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.scheduled_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/{assistant_id}/scheduled_events/{event_id}',
  operationId: 'get_scheduled_event',
};

export const tool: Tool = {
  name: 'retrieve_assistants_ai_scheduled_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a scheduled event by event ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/scheduled_event_response',\n  $defs: {\n    scheduled_event_response: {\n      anyOf: [        {\n          $ref: '#/$defs/scheduled_phone_call_event_response'\n        },\n        {\n          $ref: '#/$defs/scheduled_sms_event_response'\n        }\n      ],\n      title: 'ScheduledEventResponse',\n      description: 'Union type for different scheduled event response types'\n    },\n    scheduled_phone_call_event_response: {\n      type: 'object',\n      title: 'ScheduledPhoneCallEventResponse',\n      properties: {\n        assistant_id: {\n          type: 'string',\n          title: 'Assistant Id'\n        },\n        scheduled_at_fixed_datetime: {\n          type: 'string',\n          title: 'Scheduled At Fixed Datetime',\n          format: 'date-time'\n        },\n        telnyx_agent_target: {\n          type: 'string',\n          title: 'Telnyx Agent Target'\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/conversation_channel_type'\n        },\n        telnyx_end_user_target: {\n          type: 'string',\n          title: 'Telnyx End User Target'\n        },\n        conversation_id: {\n          type: 'string',\n          title: 'Conversation Id'\n        },\n        conversation_metadata: {\n          type: 'object',\n          title: 'Conversation Metadata',\n          additionalProperties: true\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        errors: {\n          type: 'array',\n          title: 'Errors',\n          items: {\n            type: 'string'\n          }\n        },\n        retry_attempts: {\n          type: 'integer',\n          title: 'Retry Attempts'\n        },\n        retry_count: {\n          type: 'integer',\n          title: 'Retry Count'\n        },\n        scheduled_event_id: {\n          type: 'string',\n          title: 'Scheduled Event Id'\n        },\n        status: {\n          $ref: '#/$defs/event_status'\n        }\n      },\n      required: [        'assistant_id',\n        'scheduled_at_fixed_datetime',\n        'telnyx_agent_target',\n        'telnyx_conversation_channel',\n        'telnyx_end_user_target'\n      ]\n    },\n    conversation_channel_type: {\n      type: 'string',\n      title: 'ConversationChannelType',\n      enum: [        'phone_call',\n        'sms_chat'\n      ]\n    },\n    event_status: {\n      type: 'string',\n      title: 'EventStatus',\n      enum: [        'pending',\n        'in_progress',\n        'completed',\n        'failed'\n      ]\n    },\n    scheduled_sms_event_response: {\n      type: 'object',\n      title: 'ScheduledSmsEventResponse',\n      properties: {\n        assistant_id: {\n          type: 'string',\n          title: 'Assistant Id'\n        },\n        scheduled_at_fixed_datetime: {\n          type: 'string',\n          title: 'Scheduled At Fixed Datetime',\n          format: 'date-time'\n        },\n        telnyx_agent_target: {\n          type: 'string',\n          title: 'Telnyx Agent Target'\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/conversation_channel_type'\n        },\n        telnyx_end_user_target: {\n          type: 'string',\n          title: 'Telnyx End User Target'\n        },\n        text: {\n          type: 'string',\n          title: 'Text'\n        },\n        conversation_id: {\n          type: 'string',\n          title: 'Conversation Id'\n        },\n        conversation_metadata: {\n          type: 'object',\n          title: 'Conversation Metadata',\n          additionalProperties: true\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        errors: {\n          type: 'array',\n          title: 'Errors',\n          items: {\n            type: 'string'\n          }\n        },\n        retry_count: {\n          type: 'integer',\n          title: 'Retry Count'\n        },\n        scheduled_event_id: {\n          type: 'string',\n          title: 'Scheduled Event Id'\n        },\n        status: {\n          $ref: '#/$defs/event_status'\n        }\n      },\n      required: [        'assistant_id',\n        'scheduled_at_fixed_datetime',\n        'telnyx_agent_target',\n        'telnyx_conversation_channel',\n        'telnyx_end_user_target',\n        'text'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id', 'event_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { event_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.assistants.scheduledEvents.retrieve(event_id, body)),
  );
};

export default { metadata, tool, handler };
