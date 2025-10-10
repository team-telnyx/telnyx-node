// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{id}/actions/share',
  operationId: 'SharePortingOrder',
};

export const tool: Tool = {
  name: 'share_porting_orders_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a sharing token for a porting order. The token can be used to share the porting order with non-Telnyx users.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_share_response',\n  $defs: {\n    action_share_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Uniquely identifies this sharing token'\n            },\n            token: {\n              type: 'string',\n              description: 'A signed JWT token that can be used to access the shared resource'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was created.',\n              format: 'date-time'\n            },\n            expires_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the sharing token expires.',\n              format: 'date-time'\n            },\n            expires_in_seconds: {\n              type: 'integer',\n              description: 'The number of seconds until the sharing token expires'\n            },\n            permissions: {\n              type: 'array',\n              description: 'The permissions granted to the sharing token',\n              items: {\n                type: 'string',\n                enum: [                  'porting_order.document.read',\n                  'porting_order.document.update'\n                ]\n              }\n            },\n            porting_order_id: {\n              type: 'string',\n              description: 'Identifies the porting order resource being shared'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      expires_in_seconds: {
        type: 'integer',
        description: 'The number of seconds the token will be valid for',
      },
      permissions: {
        type: 'string',
        description: 'The permissions the token will have',
        enum: ['porting_order.document.read', 'porting_order.document.update'],
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.actions.share(id, body)),
  );
};

export default { metadata, tool, handler };
