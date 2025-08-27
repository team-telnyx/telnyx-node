// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sim_cards/{id}',
  operationId: 'UpdateSimCard',
};

export const tool: Tool = {
  name: 'update_sim_cards',
  description: 'Updates SIM card data',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      authorized_imeis: {
        type: 'array',
        description: 'List of IMEIs authorized to use a given SIM card.',
        items: {
          type: 'string',
        },
      },
      data_limit: {
        type: 'object',
        description: 'The SIM card individual data limit configuration.',
        properties: {
          amount: {
            type: 'string',
          },
          unit: {
            type: 'string',
            enum: ['MB', 'GB'],
          },
        },
      },
      sim_card_group_id: {
        type: 'string',
        description:
          "The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.",
      },
      status: {
        $ref: '#/$defs/sim_card_status',
      },
      tags: {
        type: 'array',
        description: 'Searchable tags associated with the SIM card',
        items: {
          type: 'string',
        },
      },
    },
    required: ['id'],
    $defs: {
      sim_card_status: {
        type: 'object',
        properties: {
          reason: {
            type: 'string',
            description: 'It describes why the SIM card is in the current status.',
          },
          value: {
            type: 'string',
            description:
              'The current status of the SIM card. It will be one of the following: <br/>\n<ul>\n <li><code>registering</code> - the card is being registered</li>\n <li><code>enabling</code> - the card is being enabled</li>\n <li><code>enabled</code> - the card is enabled and ready for use</li>\n <li><code>disabling</code> - the card is being disabled</li>\n <li><code>disabled</code> - the card has been disabled and cannot be used</li>\n <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>\n <li><code>setting_standby</code> - the process to set the card in stand by is in progress</li>\n <li><code>standby</code> - the card is in stand by</li>\n</ul>\nTransitioning between the enabled and disabled states may take a period of time.',
            enum: [
              'registering',
              'enabling',
              'enabled',
              'disabling',
              'disabled',
              'data_limit_exceeded',
              'setting_standby',
              'standby',
            ],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.simCards.update(id, body));
};

export default { metadata, tool, handler };
