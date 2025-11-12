// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_cards/{id}/activation_code',
  operationId: 'GetSimCardActivationCode',
};

export const tool: Tool = {
  name: 'get_activation_code_sim_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIt returns the activation code for an eSIM.<br/><br/>\n This API is only available for eSIMs. If the given SIM is a physical SIM card, or has already been installed, an error will be returned.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_get_activation_code_response',\n  $defs: {\n    sim_card_get_activation_code_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'SIMCardActivationCode',\n          properties: {\n            activation_code: {\n              type: 'string',\n              description: 'Contents of the eSIM activation QR code.'\n            },\n            record_type: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.simCards.getActivationCode(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
