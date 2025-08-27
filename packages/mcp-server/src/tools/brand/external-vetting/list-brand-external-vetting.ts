// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'brand.external_vetting',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/{brandId}/externalVetting',
  operationId: 'ListExternalVettings',
};

export const tool: Tool = {
  name: 'list_brand_external_vetting',
  description: 'Get list of valid external vetting record for a given brand',
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
    },
    required: ['brandId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  return asTextContentResult((await client.brand.externalVetting.list(brandId)) as object);
};

export default { metadata, tool, handler };
