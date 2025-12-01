// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_cards/{id}',
  operationId: 'GetSimCard',
};

export const tool: Tool = {
  name: 'retrieve_sim_cards',
  description: 'Returns the details regarding a specific SIM card.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      include_pin_puk_codes: {
        type: 'boolean',
        description:
          'When set to true, includes the PIN and PUK codes in the response. These codes are used for SIM card security and unlocking purposes. Available for both physical SIM cards and eSIMs.',
      },
      include_sim_card_group: {
        type: 'boolean',
        description: 'It includes the associated SIM card group object in the response when present.',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.simCards.retrieve(id, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
