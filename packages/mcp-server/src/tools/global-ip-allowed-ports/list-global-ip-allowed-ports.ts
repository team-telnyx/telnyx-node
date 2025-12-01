// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'global_ip_allowed_ports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global_ip_allowed_ports',
  operationId: 'ListGlobalIpAllowedPorts',
};

export const tool: Tool = {
  name: 'list_global_ip_allowed_ports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Global IP Allowed Ports\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/global_ip_allowed_port_list_response',\n  $defs: {\n    global_ip_allowed_port_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Global IP Allowed Port Range',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the resource.'\n              },\n              first_port: {\n                type: 'integer',\n                description: 'First port of a range.'\n              },\n              last_port: {\n                type: 'integer',\n                description: 'Last port of a range.'\n              },\n              name: {\n                type: 'string',\n                description: 'A name for the Global IP ports range.'\n              },\n              protocol_code: {\n                type: 'string',\n                description: 'The Global IP Protocol code.'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.globalIPAllowedPorts.list()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
