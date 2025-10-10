// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.action_requirements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{porting_order_id}/action_requirements/{id}/initiate',
  operationId: 'initiatePortingActionRequirement',
};

export const tool: Tool = {
  name: 'initiate_porting_orders_action_requirements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates a specific action requirement for a porting order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_requirement_initiate_response',\n  $defs: {\n    action_requirement_initiate_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the action requirement'\n            },\n            action_type: {\n              type: 'string',\n              description: 'The type of action required'\n            },\n            action_url: {\n              type: 'string',\n              description: 'Optional URL for the action'\n            },\n            cancel_reason: {\n              type: 'string',\n              description: 'Reason for cancellation if status is \\'cancelled\\''\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date-time indicating when the resource was created',\n              format: 'date-time'\n            },\n            porting_order_id: {\n              type: 'string',\n              description: 'The ID of the porting order this action requirement belongs to'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource',\n              enum: [                'porting_action_requirement'\n              ]\n            },\n            requirement_type_id: {\n              type: 'string',\n              description: 'The ID of the requirement type'\n            },\n            status: {\n              type: 'string',\n              description: 'Current status of the action requirement',\n              enum: [                'created',\n                'pending',\n                'completed',\n                'cancelled',\n                'failed'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date-time indicating when the resource was updated',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      params: {
        type: 'object',
        description: 'Required information for initiating the action requirement for AU ID verification.',
        properties: {
          first_name: {
            type: 'string',
            description: 'The first name of the person that will perform the verification flow.',
          },
          last_name: {
            type: 'string',
            description: 'The last name of the person that will perform the verification flow.',
          },
        },
        required: ['first_name', 'last_name'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['porting_order_id', 'id', 'params'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.actionRequirements.initiate(id, body)),
  );
};

export default { metadata, tool, handler };
