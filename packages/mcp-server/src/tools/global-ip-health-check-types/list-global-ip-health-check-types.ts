// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'global_ip_health_check_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global_ip_health_check_types',
  operationId: 'ListGlobalIpHealthCheckTypes',
};

export const tool: Tool = {
  name: 'list_global_ip_health_check_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Global IP Health check types.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Global IP Health Check Type',\n        properties: {\n          health_check_params: {\n            type: 'object',\n            description: 'Global IP Health check params.',\n            additionalProperties: true\n          },\n          health_check_type: {\n            type: 'string',\n            description: 'Global IP Health check type.'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.globalIPHealthCheckTypes.list()));
};

export default { metadata, tool, handler };
