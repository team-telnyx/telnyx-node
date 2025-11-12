// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'dynamic_emergency_addresses',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/dynamic_emergency_addresses/{id}',
  operationId: 'DeleteDynamicEmergencyAddress',
};

export const tool: Tool = {
  name: 'delete_dynamic_emergency_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes the dynamic emergency address based on the ID provided\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dynamic_emergency_address_delete_response',\n  $defs: {\n    dynamic_emergency_address_delete_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/dynamic_emergency_address'\n        }\n      }\n    },\n    dynamic_emergency_address: {\n      type: 'object',\n      properties: {\n        administrative_area: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string',\n          enum: [            'US',\n            'CA',\n            'PR'\n          ]\n        },\n        house_number: {\n          type: 'string'\n        },\n        locality: {\n          type: 'string'\n        },\n        postal_code: {\n          type: 'string'\n        },\n        street_name: {\n          type: 'string'\n        },\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was created'\n        },\n        extended_address: {\n          type: 'string'\n        },\n        house_suffix: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sip_geolocation_id: {\n          type: 'string',\n          description: 'Unique location reference string to be used in SIP INVITE from / p-asserted headers.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of dynamic emergency address',\n          enum: [            'pending',\n            'activated',\n            'rejected'\n          ]\n        },\n        street_post_directional: {\n          type: 'string'\n        },\n        street_pre_directional: {\n          type: 'string'\n        },\n        street_suffix: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was last updated'\n        }\n      },\n      required: [        'administrative_area',\n        'country_code',\n        'house_number',\n        'locality',\n        'postal_code',\n        'street_name'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.dynamicEmergencyAddresses.delete(id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
