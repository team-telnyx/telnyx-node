// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'short_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/short_codes/{id}',
  operationId: 'RetrieveShortCode',
};

export const tool: Tool = {
  name: 'retrieve_short_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a short code\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Short Code Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/short_code'\n    }\n  },\n  $defs: {\n    short_code: {\n      type: 'object',\n      properties: {\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Unique identifier for a messaging profile.'\n        },\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'short_code'\n          ]\n        },\n        short_code: {\n          type: 'string',\n          description: 'Short digit sequence used to address messages.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'messaging_profile_id'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.shortCodes.retrieve(id)));
};

export default { metadata, tool, handler };
