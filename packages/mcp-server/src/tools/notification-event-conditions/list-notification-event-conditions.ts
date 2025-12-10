// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'notification_event_conditions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notification_event_conditions',
  operationId: 'FindNotificationsEventsConditions',
};

export const tool: Tool = {
  name: 'list_notification_event_conditions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your notifications events conditions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notification_event_condition_list_response',\n  $defs: {\n    notification_event_condition_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'A UUID.'\n              },\n              allow_multiple_channels: {\n                type: 'boolean',\n                description: 'Dictates whether a notification channel id needs to be provided when creating a notficiation setting.'\n              },\n              associated_record_type: {\n                type: 'string',\n                enum: [                  'account',\n                  'phone_number'\n                ]\n              },\n              asynchronous: {\n                type: 'boolean',\n                description: 'Dictates whether a notification setting will take effect immediately.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created.',\n                format: 'date-time'\n              },\n              description: {\n                type: 'string'\n              },\n              enabled: {\n                type: 'boolean'\n              },\n              name: {\n                type: 'string'\n              },\n              notification_event_id: {\n                type: 'string'\n              },\n              parameters: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    data_type: {\n                      type: 'string'\n                    },\n                    name: {\n                      type: 'string'\n                    },\n                    optional: {\n                      type: 'boolean'\n                    }\n                  }\n                }\n              },\n              supported_channels: {\n                type: 'array',\n                description: 'Dictates the supported notification channel types that can be emitted.',\n                items: {\n                  type: 'string'\n                }\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated.',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.notificationEventConditions.list(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
