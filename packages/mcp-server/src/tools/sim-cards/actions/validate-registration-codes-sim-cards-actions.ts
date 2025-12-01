// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sim_cards/actions/validate_registration_codes',
  operationId: 'ValidateRegistrationCodes',
};

export const tool: Tool = {
  name: 'validate_registration_codes_sim_cards_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIt validates whether SIM card registration codes are valid or not.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_validate_registration_codes_response',\n  $defs: {\n    action_validate_registration_codes_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              invalid_detail: {\n                type: 'string',\n                description: 'The validation message'\n              },\n              record_type: {\n                type: 'string'\n              },\n              registration_code: {\n                type: 'string',\n                description: 'The 10-digit SIM card registration code'\n              },\n              valid: {\n                type: 'boolean',\n                description: 'The attribute that denotes whether the code is valid or not'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      registration_codes: {
        type: 'array',
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
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.simCards.actions.validateRegistrationCodes(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
