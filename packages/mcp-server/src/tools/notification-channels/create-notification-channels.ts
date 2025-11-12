// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'notification_channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/notification_channels',
  operationId: 'CreateNotificationChannels',
};

export const tool: Tool = {
  name: 'create_notification_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a notification channel.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notification_channel_create_response',\n  $defs: {\n    notification_channel_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/notification_channel'\n        }\n      }\n    },\n    notification_channel: {\n      type: 'object',\n      description: 'A Notification Channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A UUID.'\n        },\n        channel_destination: {\n          type: 'string',\n          description: 'The destination associated with the channel type.'\n        },\n        channel_type_id: {\n          type: 'string',\n          description: 'A Channel Type ID',\n          enum: [            'sms',\n            'voice',\n            'email',\n            'webhook'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        notification_profile_id: {\n          type: 'string',\n          description: 'A UUID reference to the associated Notification Profile.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_destination: {
        type: 'string',
        description: 'The destination associated with the channel type.',
      },
      channel_type_id: {
        type: 'string',
        description: 'A Channel Type ID',
        enum: ['sms', 'voice', 'email', 'webhook'],
      },
      notification_profile_id: {
        type: 'string',
        description: 'A UUID reference to the associated Notification Profile.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.notificationChannels.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
