// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'notification_channels',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notification_channels',
  operationId: 'ListNotificationChannels',
};

export const tool: Tool = {
  name: 'list_notification_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList notification channels.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notification_channel_list_response',\n  $defs: {\n    notification_channel_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/notification_channel'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    notification_channel: {\n      type: 'object',\n      description: 'A Notification Channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A UUID.'\n        },\n        channel_destination: {\n          type: 'string',\n          description: 'The destination associated with the channel type.'\n        },\n        channel_type_id: {\n          type: 'string',\n          description: 'A Channel Type ID',\n          enum: [            'sms',\n            'voice',\n            'email',\n            'webhook'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        notification_profile_id: {\n          type: 'string',\n          description: 'A UUID reference to the associated Notification Profile.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[associated_record_type][eq], filter[channel_type_id][eq], filter[notification_profile_id][eq], filter[notification_channel][eq], filter[notification_event_condition_id][eq], filter[status][eq]',
        properties: {
          associated_record_type: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter by the associated record type',
                enum: ['account', 'phone_number'],
              },
            },
          },
          channel_type_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter by the id of a channel type',
                enum: ['webhook', 'sms', 'email', 'voice'],
              },
            },
          },
          notification_channel: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter by the id of a notification channel',
              },
            },
          },
          notification_event_condition_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter by the id of a notification channel',
              },
            },
          },
          notification_profile_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Filter by the id of a notification profile',
              },
            },
          },
          status: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'The status of a notification setting',
                enum: [
                  'enabled',
                  'enable-received',
                  'enable-pending',
                  'enable-submtited',
                  'delete-received',
                  'delete-pending',
                  'delete-submitted',
                  'deleted',
                ],
              },
            },
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.notificationChannels.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
