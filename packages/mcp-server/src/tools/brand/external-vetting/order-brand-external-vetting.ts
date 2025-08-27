// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'brand.external_vetting',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/brand/{brandId}/externalVetting',
  operationId: 'PostOrderExternalVetting',
};

export const tool: Tool = {
  name: 'order_brand_external_vetting',
  description: 'Order new external vetting for a brand',
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      evpId: {
        type: 'string',
        title: 'Evpid',
        description: 'External vetting provider ID for the brand.',
      },
      vettingClass: {
        type: 'string',
        title: 'Vettingclass',
        description: 'Identifies the vetting classification.',
      },
    },
    required: ['brandId', 'evpId', 'vettingClass'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  return asTextContentResult((await client.brand.externalVetting.order(brandId, body)) as object);
};

export default { metadata, tool, handler };
