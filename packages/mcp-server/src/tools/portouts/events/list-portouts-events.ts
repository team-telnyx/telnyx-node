// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/events',
  operationId: 'listPortoutEvents',
};

export const tool: Tool = {
  name: 'list_portouts_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all port-out events.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/event_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    event_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the event.'\n        },\n        available_notification_methods: {\n          type: 'array',\n          description: 'Indicates the notification methods used.',\n          items: {\n            type: 'string',\n            enum: [              'email',\n              'webhook'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        event_type: {\n          type: 'string',\n          description: 'Identifies the event type',\n          enum: [            'portout.status_changed',\n            'portout.foc_date_changed',\n            'portout.new_comment'\n          ]\n        },\n        payload: {\n          anyOf: [            {\n              type: 'object',\n              description: 'The webhook payload for the portout.status_changed event',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'Identifies the port out that was moved.'\n                },\n                attempted_pin: {\n                  type: 'string',\n                  description: 'The PIN that was attempted to be used to authorize the port out.'\n                },\n                carrier_name: {\n                  type: 'string',\n                  description: 'Carrier the number will be ported out to'\n                },\n                phone_numbers: {\n                  type: 'array',\n                  description: 'Phone numbers associated with this port-out order',\n                  items: {\n                    type: 'string',\n                    description: 'E164 formatted phone number'\n                  }\n                },\n                rejection_reason: {\n                  type: 'string',\n                  description: 'The reason why the order is being rejected by the user. If the order is authorized, this field can be left null'\n                },\n                spid: {\n                  type: 'string',\n                  description: 'The new carrier SPID.'\n                },\n                status: {\n                  type: 'string',\n                  description: 'The new status of the port out.',\n                  enum: [                    'pending',\n                    'authorized',\n                    'ported',\n                    'rejected',\n                    'rejected-pending',\n                    'canceled'\n                  ]\n                },\n                subscriber_name: {\n                  type: 'string',\n                  description: 'The name of the port-out\\'s end user.'\n                },\n                user_id: {\n                  type: 'string',\n                  description: 'Identifies the user that the port-out order belongs to.'\n                }\n              }\n            },\n            {\n              type: 'object',\n              description: 'The webhook payload for the portout.new_comment event',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'Identifies the comment that was added to the port-out order.'\n                },\n                comment: {\n                  type: 'string',\n                  description: 'The body of the comment.'\n                },\n                portout_id: {\n                  type: 'string',\n                  description: 'Identifies the port-out order that the comment was added to.'\n                },\n                user_id: {\n                  type: 'string',\n                  description: 'Identifies the user that added the comment.'\n                }\n              }\n            },\n            {\n              type: 'object',\n              description: 'The webhook payload for the portout.foc_date_changed event',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'Identifies the port-out order that have the FOC date changed.'\n                },\n                foc_date: {\n                  type: 'string',\n                  description: 'ISO 8601 formatted date indicating the new FOC date.',\n                  format: 'date-time'\n                },\n                user_id: {\n                  type: 'string',\n                  description: 'Identifies the organization that port-out order belongs to.'\n                }\n              }\n            }\n          ],\n          description: 'The webhook payload for the portout.status_changed event'\n        },\n        payload_status: {\n          type: 'string',\n          description: 'The status of the payload generation.',\n          enum: [            'created',\n            'completed'\n          ]\n        },\n        portout_id: {\n          type: 'string',\n          description: 'Identifies the port-out order associated with the event.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[event_type], filter[portout_id], filter[created_at]',
        properties: {
          created_at: {
            type: 'object',
            description: 'Filter by created_at date range using nested operations',
            properties: {
              gte: {
                type: 'string',
                description: 'Filter by created at greater than or equal to.',
                format: 'date-time',
              },
              lte: {
                type: 'string',
                description: 'Filter by created at less than or equal to.',
                format: 'date-time',
              },
            },
          },
          event_type: {
            type: 'string',
            description: 'Filter by event type.',
            enum: ['portout.status_changed', 'portout.new_comment', 'portout.foc_date_changed'],
          },
          portout_id: {
            type: 'string',
            description: 'Filter by port-out order ID.',
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
  const response = await client.portouts.events.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
