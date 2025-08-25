// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/external_connections/{id}/uploads/refresh',
  operationId: 'RefreshExternalConnectionUploads',
};

export const tool: Tool = {
  name: 'refresh_status_external_connections_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nForces a recheck of the status of all pending Upload requests for the given external connection in the background.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Create Upload request Response',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Describes wether or not the operation was successful'\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.uploads.refreshStatus(id)),
  );
};

export default { metadata, tool, handler };
