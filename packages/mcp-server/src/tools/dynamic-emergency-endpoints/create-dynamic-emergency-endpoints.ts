// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'dynamic_emergency_endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dynamic_emergency_endpoints',
  operationId: 'CreateDynamicEmergencyEndpoint',
};

export const tool: Tool = {
  name: 'create_dynamic_emergency_endpoints',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a dynamic emergency endpoints.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dynamic_emergency_endpoint_create_response',\n  $defs: {\n    dynamic_emergency_endpoint_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/dynamic_emergency_endpoint'\n        }\n      }\n    },\n    dynamic_emergency_endpoint: {\n      type: 'object',\n      properties: {\n        callback_number: {\n          type: 'string'\n        },\n        caller_name: {\n          type: 'string'\n        },\n        dynamic_emergency_address_id: {\n          type: 'string',\n          description: 'An id of a currently active dynamic emergency location.'\n        },\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was created'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sip_from_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of dynamic emergency address',\n          enum: [            'pending',\n            'activated',\n            'rejected'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was last updated'\n        }\n      },\n      required: [        'callback_number',\n        'caller_name',\n        'dynamic_emergency_address_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      callback_number: {
        type: 'string',
      },
      caller_name: {
        type: 'string',
      },
      dynamic_emergency_address_id: {
        type: 'string',
        description: 'An id of a currently active dynamic emergency location.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['callback_number', 'caller_name', 'dynamic_emergency_address_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.dynamicEmergencyEndpoints.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
