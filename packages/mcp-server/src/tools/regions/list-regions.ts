// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'regions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/regions',
  operationId: 'ListRegions',
};

export const tool: Tool = {
  name: 'list_regions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all regions and the interfaces that region supports\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Region',\n        properties: {\n          code: {\n            type: 'string',\n            description: 'A code for the region.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n          },\n          name: {\n            type: 'string',\n            description: 'A name for the region.'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          },\n          supported_interfaces: {\n            type: 'array',\n            description: 'List of interface types supported in this region.',\n            items: {\n              type: 'string'\n            }\n          },\n          updated_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.regions.list()));
};

export default { metadata, tool, handler };
