// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'external_connections.uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/external_connections/{id}/uploads',
  operationId: 'CreateExternalConnectionUpload',
};

export const tool: Tool = {
  name: 'create_external_connections_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Upload request to Microsoft teams with the included phone numbers. Only one of civic_address_id or location_id must be provided, not both. The maximum allowed phone numbers for the numbers_ids array is 1000.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Create Upload request Response',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Describes wether or not the operation was successful'\n    },\n    ticket_id: {\n      type: 'string',\n      description: 'Ticket id of the upload request'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      number_ids: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Phone number ID from the Telnyx API.',
        },
      },
      additional_usages: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'Additional use cases of the upload request. If not provided, all supported usages will be used.',
          enum: ['calling_user_assignment', 'first_party_app_assignment'],
        },
      },
      civic_address_id: {
        type: 'string',
        description: 'Identifies the civic address to assign all phone numbers to.',
      },
      location_id: {
        type: 'string',
        description: 'Identifies the location to assign all phone numbers to.',
      },
      usage: {
        type: 'string',
        description:
          'The use case of the upload request. NOTE: `calling_user_assignment` is not supported for toll free numbers.',
        enum: ['calling_user_assignment', 'first_party_app_assignment'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'number_ids'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.uploads.create(id, body)),
  );
};

export default { metadata, tool, handler };
