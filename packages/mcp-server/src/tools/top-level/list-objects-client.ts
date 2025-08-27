// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{bucketName}',
  operationId: 'ListObjects',
};

export const tool: Tool = {
  name: 'list_objects_client',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all objects contained in a given bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    Contents: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          Key: {\n            type: 'string'\n          },\n          LastModified: {\n            type: 'string',\n            format: 'date-time'\n          },\n          Size: {\n            type: 'number'\n          }\n        }\n      }\n    },\n    Name: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucketName: {
        type: 'string',
      },
      'list-type': {
        type: 'string',
        enum: [2],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucketName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bucketName, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.listObjects(bucketName, body)));
};

export default { metadata, tool, handler };
