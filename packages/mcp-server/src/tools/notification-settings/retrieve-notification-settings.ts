// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'notification_settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notification_settings/{id}',
  operationId: 'GetNotificationSetting',
};

export const tool: Tool = {
  name: 'retrieve_notification_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a notification setting.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notification_setting_retrieve_response',\n  $defs: {\n    notification_setting_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/notification_setting'\n        }\n      }\n    },\n    notification_setting: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A UUID.'\n        },\n        associated_record_type: {\n          type: 'string'\n        },\n        associated_record_type_value: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        notification_channel_id: {\n          type: 'string',\n          description: 'A UUID reference to the associated Notification Channel.'\n        },\n        notification_event_condition_id: {\n          type: 'string',\n          description: 'A UUID reference to the associated Notification Event Condition.'\n        },\n        notification_profile_id: {\n          type: 'string',\n          description: 'A UUID reference to the associated Notification Profile.'\n        },\n        parameters: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Most preferences apply immediately; however, other may needs to propagate.',\n          enum: [            'enabled',\n            'enable-received',\n            'enable-pending',\n            'enable-submtited',\n            'delete-received',\n            'delete-pending',\n            'delete-submitted',\n            'deleted'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.notificationSettings.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
