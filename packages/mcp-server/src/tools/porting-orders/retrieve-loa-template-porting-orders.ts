// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{id}/loa_template',
  operationId: 'GetPortingOrderLoaTemplate',
};

export const tool: Tool = {
  name: 'retrieve_loa_template_porting_orders',
  description: 'Download a porting order loa template',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      loa_configuration_id: {
        type: 'string',
        description:
          'The identifier of the LOA configuration to use for the template. If not provided, the default LOA configuration will be used.',
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
  return asBinaryContentResult(await client.portingOrders.retrieveLoaTemplate(id, body));
};

export default { metadata, tool, handler };
