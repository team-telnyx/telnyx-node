// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.phone_number_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/phone_number_configurations',
  operationId: 'CreatePhoneNumberConfigurations',
};

export const tool: Tool = {
  name: 'create_porting_orders_phone_number_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a list of phone number configurations.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_configuration_create_response',\n  $defs: {\n    phone_number_configuration_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Uniquely identifies this phone number configuration'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created.',\n                format: 'date-time'\n              },\n              porting_phone_number_id: {\n                type: 'string',\n                description: 'Identifies the associated porting phone number'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated.',\n                format: 'date-time'\n              },\n              user_bundle_id: {\n                type: 'string',\n                description: 'Identifies the associated user bundle'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number_configurations: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            porting_phone_number_id: {
              type: 'string',
              description: 'Identifies the porting phone number to be configured.',
            },
            user_bundle_id: {
              type: 'string',
              description: 'Identifies the user bundle to be associated with the porting phone number.',
            },
          },
          required: ['porting_phone_number_id', 'user_bundle_id'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.portingOrders.phoneNumberConfigurations.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
