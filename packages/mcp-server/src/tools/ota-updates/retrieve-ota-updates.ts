// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ota_updates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ota_updates/{id}',
  operationId: 'GetOtaUpdate',
};

export const tool: Tool = {
  name: 'retrieve_ota_updates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API returns the details of an Over the Air (OTA) update.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ota_update_retrieve_response',\n  $defs: {\n    ota_update_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'OTAUpdate',\n          description: 'This object represents an Over the Air (OTA) update request. It allows tracking the current status of a operation that apply settings in a particular SIM card. <br/><br/>',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the resource.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n            },\n            record_type: {\n              type: 'string'\n            },\n            settings: {\n              type: 'object',\n              description: 'A JSON object representation of the operation. The information present here will relate directly to the source of the OTA request.',\n              properties: {\n                mobile_network_operators_preferences: {\n                  type: 'array',\n                  description: 'A list of mobile network operators and the priority that should be applied when the SIM is connecting to the network.',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      mobile_network_operator_id: {\n                        type: 'string',\n                        description: 'The mobile network operator resource identification UUID.'\n                      },\n                      mobile_network_operator_name: {\n                        type: 'string',\n                        description: 'The mobile network operator resource name.'\n                      },\n                      priority: {\n                        type: 'integer',\n                        description: 'It determines what is the priority of a specific network operator that should be assumed by a SIM card when connecting to a network. The highest priority is 0, the second highest is 1 and so on.'\n                      }\n                    }\n                  }\n                }\n              }\n            },\n            sim_card_id: {\n              type: 'string',\n              description: 'The identification UUID of the related SIM card resource.'\n            },\n            status: {\n              type: 'string',\n              enum: [                'in-progress',\n                'completed',\n                'failed'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'Represents the type of the operation requested. This will relate directly to the source of the request.',\n              enum: [                'sim_card_network_preferences'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.otaUpdates.retrieve(id)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
