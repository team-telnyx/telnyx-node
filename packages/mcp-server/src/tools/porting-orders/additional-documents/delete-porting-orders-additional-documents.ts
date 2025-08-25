// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.additional_documents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/porting_orders/{id}/additional_documents/{additional_document_id}',
  operationId: 'DeleteAdditionalDocument',
};

export const tool: Tool = {
  name: 'delete_porting_orders_additional_documents',
  description: 'Deletes an additional document for a porting order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      additional_document_id: {
        type: 'string',
      },
    },
    required: ['id', 'additional_document_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { additional_document_id, ...body } = args as any;
  const response = await client.portingOrders.additionalDocuments
    .delete(additional_document_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
