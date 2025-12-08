// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/10dlc/brand/{brandId}',
  operationId: 'DeleteBrand',
};

export const tool: Tool = {
  name: 'delete_brand',
  description:
    'Delete Brand. This endpoint is used to delete a brand. Note the brand cannot be deleted if it contains one or more active campaigns, the campaigns need to be inactive and at least 3 months old due to billing purposes.',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  const response = await client.brand.delete(brandId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
