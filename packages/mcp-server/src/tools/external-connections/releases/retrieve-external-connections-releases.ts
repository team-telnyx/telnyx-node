// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/releases/{release_id}',
  operationId: 'GetExternalConnectionRelease',
};

export const tool: Tool = {
  name: 'retrieve_external_connections_releases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn the details of a Release request and its phone numbers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/release_retrieve_response',\n  $defs: {\n    release_retrieve_response: {\n      type: 'object',\n      title: 'Get Release Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Phone Number Release',\n          properties: {\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was created.'\n            },\n            error_message: {\n              type: 'string',\n              description: 'A message set if there is an error with the upload process.'\n            },\n            status: {\n              type: 'string',\n              description: 'Represents the status of the release on Microsoft Teams.',\n              enum: [                'pending_upload',\n                'pending',\n                'in_progress',\n                'complete',\n                'failed',\n                'expired',\n                'unknown'\n              ]\n            },\n            telephone_numbers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                title: 'TnReleaseEntry',\n                properties: {\n                  number_id: {\n                    type: 'string',\n                    description: 'Phone number ID from the Telnyx API.'\n                  },\n                  phone_number: {\n                    type: 'string',\n                    description: 'Phone number in E164 format.'\n                  }\n                }\n              }\n            },\n            tenant_id: {\n              type: 'string'\n            },\n            ticket_id: {\n              type: 'string',\n              title: 'UUID',\n              description: 'Uniquely identifies the resource.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      release_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'release_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { release_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.externalConnections.releases.retrieve(release_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
