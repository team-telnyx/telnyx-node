// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.uploads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/uploads/status',
  operationId: 'GetExternalConnectionUploadsStatus',
};

export const tool: Tool = {
  name: 'pending_count_external_connections_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the count of all pending upload requests for the given external connection.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/upload_pending_count_response',\n  $defs: {\n    upload_pending_count_response: {\n      type: 'object',\n      title: 'Get Uploads Status Response',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            pending_numbers_count: {\n              type: 'integer',\n              description: 'The count of phone numbers that are pending assignment to the external connection.'\n            },\n            pending_orders_count: {\n              type: 'integer',\n              description: 'The count of number uploads that have not yet been uploaded to Microsoft.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.uploads.pendingCount(id)),
  );
};

export default { metadata, tool, handler };
