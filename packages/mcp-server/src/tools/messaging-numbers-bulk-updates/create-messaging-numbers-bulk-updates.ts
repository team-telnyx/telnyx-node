// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_numbers_bulk_updates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_numbers_bulk_updates',
  operationId: 'BulkUpdateMessagingSettingsOnPhoneNumbers',
};

export const tool: Tool = {
  name: 'create_messaging_numbers_bulk_updates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the messaging profile of multiple phone numbers\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_numbers_bulk_update_create_response',\n  $defs: {\n    messaging_numbers_bulk_update_create_response: {\n      type: 'object',\n      title: 'Retrieve bulk update messaging settings Response',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            failed: {\n              type: 'array',\n              description: 'Phone numbers that failed to update.',\n              items: {\n                type: 'string'\n              }\n            },\n            order_id: {\n              type: 'string',\n              description: 'Order ID to verify bulk update status.'\n            },\n            pending: {\n              type: 'array',\n              description: 'Phone numbers pending to be updated.',\n              items: {\n                type: 'string'\n              }\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.',\n              enum: [                'messaging_numbers_bulk_update'\n              ]\n            },\n            success: {\n              type: 'array',\n              description: 'Phoned numbers updated successfully.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      messaging_profile_id: {
        type: 'string',
        description:
          'Configure the messaging profile these phone numbers are assigned to:\n\n* Set this field to `""` to unassign each number from their respective messaging profile\n* Set this field to a quoted UUID of a messaging profile to assign these numbers to that messaging profile',
      },
      numbers: {
        type: 'array',
        description: 'The list of phone numbers to update.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['messaging_profile_id', 'numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messagingNumbersBulkUpdates.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
