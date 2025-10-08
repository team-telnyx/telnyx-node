// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'webhook_deliveries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/webhook_deliveries',
  operationId: 'GetWebhookDeliveries',
};

export const tool: Tool = {
  name: 'list_webhook_deliveries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists webhook_deliveries for the authenticated user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/webhook_delivery_list_response',\n  $defs: {\n    webhook_delivery_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'Record of all attempts to deliver a webhook.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Uniquely identifies the webhook_delivery record.'\n              },\n              attempts: {\n                type: 'array',\n                description: 'Detailed delivery attempts, ordered by most recent.',\n                items: {\n                  type: 'object',\n                  description: 'Webhook delivery attempt details.',\n                  properties: {\n                    errors: {\n                      type: 'array',\n                      description: 'Webhook delivery error codes.',\n                      items: {\n                        type: 'integer'\n                      }\n                    },\n                    finished_at: {\n                      type: 'string',\n                      description: 'ISO 8601 timestamp indicating when the attempt has finished.',\n                      format: 'date-time'\n                    },\n                    http: {\n                      type: 'object',\n                      description: 'HTTP request and response information.',\n                      properties: {\n                        request: {\n                          type: 'object',\n                          description: 'Request details.',\n                          properties: {\n                            headers: {\n                              type: 'array',\n                              description: 'List of headers, limited to 10kB.',\n                              items: {\n                                type: 'array',\n                                items: {\n                                  type: 'string'\n                                }\n                              }\n                            },\n                            url: {\n                              type: 'string'\n                            }\n                          }\n                        },\n                        response: {\n                          type: 'object',\n                          description: 'Response details, optional.',\n                          properties: {\n                            body: {\n                              type: 'string',\n                              description: 'Raw response body, limited to 10kB.'\n                            },\n                            headers: {\n                              type: 'array',\n                              description: 'List of headers, limited to 10kB.',\n                              items: {\n                                type: 'array',\n                                items: {\n                                  type: 'string'\n                                }\n                              }\n                            },\n                            status: {\n                              type: 'integer'\n                            }\n                          }\n                        }\n                      }\n                    },\n                    started_at: {\n                      type: 'string',\n                      description: 'ISO 8601 timestamp indicating when the attempt was initiated.',\n                      format: 'date-time'\n                    },\n                    status: {\n                      type: 'string',\n                      enum: [                        'delivered',\n                        'failed'\n                      ]\n                    }\n                  }\n                }\n              },\n              finished_at: {\n                type: 'string',\n                description: 'ISO 8601 timestamp indicating when the last webhook response has been received.',\n                format: 'date-time'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              started_at: {\n                type: 'string',\n                description: 'ISO 8601 timestamp indicating when the first request attempt was initiated.',\n                format: 'date-time'\n              },\n              status: {\n                type: 'string',\n                description: 'Delivery status: \\'delivered\\' when successfuly delivered or \\'failed\\' if all attempts have failed.',\n                enum: [                  'delivered',\n                  'failed'\n                ]\n              },\n              user_id: {\n                type: 'string',\n                description: 'Uniquely identifies the user that owns the webhook_delivery record.'\n              },\n              webhook: {\n                type: 'object',\n                description: 'Original webhook JSON data. Payload fields vary according to event type.',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Identifies the type of resource.'\n                  },\n                  event_type: {\n                    type: 'string',\n                    description: 'The type of event being delivered.'\n                  },\n                  occurred_at: {\n                    type: 'string',\n                    description: 'ISO 8601 datetime of when the event occurred.',\n                    format: 'date-time'\n                  },\n                  payload: {\n                    type: 'object',\n                    additionalProperties: true\n                  },\n                  record_type: {\n                    type: 'string',\n                    description: 'Identifies the type of the resource.',\n                    enum: [                      'event'\n                    ]\n                  }\n                }\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[status][eq], filter[event_type], filter[webhook][contains], filter[attempts][contains], filter[started_at][gte], filter[started_at][lte], filter[finished_at][gte], filter[finished_at][lte]',
        properties: {
          attempts: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description:
                  'Return only webhook_deliveries whose `attempts` component contains the given text',
              },
            },
          },
          event_type: {
            type: 'string',
            description:
              'Return only webhook_deliveries matching the given value of `event_type`. Accepts multiple values separated by a `,`.',
          },
          finished_at: {
            type: 'object',
            properties: {
              gte: {
                type: 'string',
                description:
                  'Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime',
              },
              lte: {
                type: 'string',
                description:
                  'Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime',
              },
            },
          },
          started_at: {
            type: 'object',
            properties: {
              gte: {
                type: 'string',
                description:
                  'Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime',
              },
              lte: {
                type: 'string',
                description:
                  'Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime',
              },
            },
          },
          status: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'Return only webhook_deliveries matching the given `status`',
                enum: ['delivered', 'failed'],
              },
            },
          },
          webhook: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description:
                  'Return only webhook deliveries whose `webhook` component contains the given text',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.webhookDeliveries.list(body)));
};

export default { metadata, tool, handler };
