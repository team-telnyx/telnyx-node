// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.phone_number_extensions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/porting_orders/{porting_order_id}/phone_number_extensions/{id}',
  operationId: 'deletePortingPhoneNumberExtension',
};

export const tool: Tool = {
  name: 'delete_porting_orders_phone_number_extensions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a phone number extension.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_extension_delete_response',\n  $defs: {\n    phone_number_extension_delete_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/porting_phone_number_extension'\n        }\n      }\n    },\n    porting_phone_number_extension: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies this porting phone number extension.'\n        },\n        activation_ranges: {\n          type: 'array',\n          description: 'Specifies the activation ranges for this porting phone number extension. The activation range must be within the extension range and should not overlap with other activation ranges.',\n          items: {\n            type: 'object',\n            properties: {\n              end_at: {\n                type: 'integer',\n                description: 'Specifies the end of the activation range. It must be no more than the end of the extension range.'\n              },\n              start_at: {\n                type: 'integer',\n                description: 'Specifies the start of the activation range. Must be greater or equal the start of the extension range.'\n              }\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        extension_range: {\n          type: 'object',\n          description: 'Specifies the extension range for this porting phone number extension.',\n          properties: {\n            end_at: {\n              type: 'integer',\n              description: 'Specifies the end of the extension range for this porting phone number extension.'\n            },\n            start_at: {\n              type: 'integer',\n              description: 'Specifies the start of the extension range for this porting phone number extension.'\n            }\n          }\n        },\n        porting_phone_number_id: {\n          type: 'string',\n          description: 'Identifies the porting phone number associated with this porting phone number extension.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      porting_order_id: {
        type: 'string',
      },
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
    required: ['porting_order_id', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.portingOrders.phoneNumberExtensions.delete(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
