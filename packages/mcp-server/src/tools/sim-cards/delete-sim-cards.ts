// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sim_cards/{id}',
  operationId: 'DeleteSimCard',
};

export const tool: Tool = {
  name: 'delete_sim_cards',
  description:
    "The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won't be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/>\nTransitioning to the disabled state may take a period of time.\nUntil the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      report_lost: {
        type: 'boolean',
        description:
          "Enables deletion of disabled eSIMs that can't be uninstalled from a device. This is irreversible and the eSIM cannot be re-registered.",
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.simCards.delete(id, body));
};

export default { metadata, tool, handler };
