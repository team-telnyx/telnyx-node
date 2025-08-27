// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/exception_types',
  operationId: 'ListExceptionTypes',
};

export const tool: Tool = {
  name: 'retrieve_exception_types_porting_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all possible exception types for a porting order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/porting_orders_exception_type'\n      }\n    }\n  },\n  $defs: {\n    porting_orders_exception_type: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string',\n          description: 'Identifier of an exception type',\n          enum: [            'ACCOUNT_NUMBER_MISMATCH',\n            'AUTH_PERSON_MISMATCH',\n            'BTN_ATN_MISMATCH',\n            'ENTITY_NAME_MISMATCH',\n            'FOC_EXPIRED',\n            'FOC_REJECTED',\n            'LOCATION_MISMATCH',\n            'LSR_PENDING',\n            'MAIN_BTN_PORTING',\n            'OSP_IRRESPONSIVE',\n            'OTHER',\n            'PASSCODE_PIN_INVALID',\n            'PHONE_NUMBER_HAS_SPECIAL_FEATURE',\n            'PHONE_NUMBER_MISMATCH',\n            'PHONE_NUMBER_NOT_PORTABLE',\n            'PORT_TYPE_INCORRECT',\n            'PORTING_ORDER_SPLIT_REQUIRED',\n            'POSTAL_CODE_MISMATCH',\n            'RATE_CENTER_NOT_PORTABLE',\n            'SV_CONFLICT',\n            'SV_UNKNOWN_FAILURE'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'Description of an exception type'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portingOrders.retrieveExceptionTypes()),
  );
};

export default { metadata, tool, handler };
