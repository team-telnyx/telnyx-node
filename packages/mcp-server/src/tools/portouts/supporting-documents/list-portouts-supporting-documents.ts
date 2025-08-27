// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'portouts.supporting_documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/{id}/supporting_documents',
  operationId: 'GetPortRequestSupportingDocuments',
};

export const tool: Tool = {
  name: 'list_portouts_supporting_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList every supporting documents for a portout request.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            description: 'Supporting document creation timestamp in ISO 8601 format'\n          },\n          document_id: {\n            type: 'string',\n            description: 'Identifies the associated document'\n          },\n          portout_id: {\n            type: 'string',\n            description: 'Identifies the associated port request'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          },\n          type: {\n            type: 'string',\n            description: 'Identifies the type of the document',\n            enum: [              'loa',\n              'invoice'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            description: 'Supporting document last changed timestamp in ISO 8601 format'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'document_id',\n          'portout_id',\n          'record_type',\n          'type',\n          'updated_at'\n        ]\n      }\n    }\n  }\n}\n```",
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
    await maybeFilter(jq_filter, await client.portouts.supportingDocuments.list(id)),
  );
};

export default { metadata, tool, handler };
