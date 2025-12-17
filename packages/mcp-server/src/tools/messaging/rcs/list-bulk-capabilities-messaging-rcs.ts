// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging.rcs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging/rcs/bulk_capabilities',
  operationId: 'ListRCSCapabilitiesOfAPhoneNumbersBatch',
};

export const tool: Tool = {
  name: 'list_bulk_capabilities_messaging_rcs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck RCS capabilities (batch)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/rc_list_bulk_capabilities_response',\n  $defs: {\n    rc_list_bulk_capabilities_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/rcs_capabilities'\n          }\n        }\n      }\n    },\n    rcs_capabilities: {\n      type: 'object',\n      properties: {\n        agent_id: {\n          type: 'string',\n          description: 'RCS agent ID'\n        },\n        agent_name: {\n          type: 'string',\n          description: 'RCS agent name'\n        },\n        features: {\n          type: 'array',\n          description: 'List of RCS capabilities',\n          items: {\n            type: 'string'\n          }\n        },\n        phone_number: {\n          type: 'string',\n          description: 'Phone number'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource',\n          enum: [            'rcs.capabilities'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        description: 'RCS Agent ID',
      },
      phone_numbers: {
        type: 'array',
        description: 'List of phone numbers to check',
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
    required: ['agent_id', 'phone_numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messaging.rcs.listBulkCapabilities(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
