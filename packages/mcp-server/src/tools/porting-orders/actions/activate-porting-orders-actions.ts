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
  httpPath: '/porting_orders/{id}/actions/activate',
  operationId: 'ActivatePortingOrder',
};

export const tool: Tool = {
  name: 'activate_porting_orders_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActivate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/porting_orders_activation_job'\n    }\n  },\n  $defs: {\n    porting_orders_activation_job: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this activation job'\n        },\n        activate_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the activation job should be executed. This time should be between some activation window.',\n          format: 'date-time'\n        },\n        activation_type: {\n          type: 'string',\n          description: 'Specifies the type of this activation job',\n          enum: [            'scheduled',\n            'on-demand'\n          ]\n        },\n        activation_windows: {\n          type: 'array',\n          description: 'List of allowed activation windows for this activation job',\n          items: {\n            type: 'object',\n            properties: {\n              end_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the activation window ends',\n                format: 'date-time'\n              },\n              start_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the activation window starts',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'Specifies the status of this activation job',\n          enum: [            'created',\n            'in-process',\n            'completed',\n            'failed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.portingOrders.actions.activate(id)));
};

export default { metadata, tool, handler };
