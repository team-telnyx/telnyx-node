// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_data_usage_notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sim_card_data_usage_notifications/{id}',
  operationId: 'PatchSimCardDataUsageNotification',
};

export const tool: Tool = {
  name: 'update_sim_card_data_usage_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates information for a SIM Card Data Usage Notification.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_data_usage_notification_update_response',\n  $defs: {\n    sim_card_data_usage_notification_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/sim_card_data_usage_notification'\n        }\n      }\n    },\n    sim_card_data_usage_notification: {\n      type: 'object',\n      description: 'The SIM card individual data usage notification information.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        sim_card_id: {\n          type: 'string',\n          description: 'The identification UUID of the related SIM card resource.'\n        },\n        threshold: {\n          type: 'object',\n          description: 'Data usage threshold that will trigger the notification.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string',\n              enum: [                'MB',\n                'GB'\n              ]\n            }\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      sim_card_id: {
        type: 'string',
        description: 'The identification UUID of the related SIM card resource.',
      },
      threshold: {
        type: 'object',
        description: 'Data usage threshold that will trigger the notification.',
        properties: {
          amount: {
            type: 'string',
          },
          unit: {
            type: 'string',
            enum: ['MB', 'GB'],
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
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.simCardDataUsageNotifications.update(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
