// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'access_ip_address',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/access_ip_address/{access_ip_address_id}',
  operationId: 'GetAccessIpAddress',
};

export const tool: Tool = {
  name: 'retrieve_access_ip_address',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an access IP address\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_ip_address_response',\n  $defs: {\n    access_ip_address_response: {\n      type: 'object',\n      title: 'AccessIPAddressResponseSchema',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        ip_address: {\n          type: 'string',\n          title: 'Ip Address'\n        },\n        source: {\n          type: 'string',\n          title: 'Source'\n        },\n        status: {\n          $ref: '#/$defs/cloudflare_sync_status'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'ip_address',\n        'source',\n        'status',\n        'user_id'\n      ]\n    },\n    cloudflare_sync_status: {\n      type: 'string',\n      title: 'CloudflareSyncStatus',\n      description: 'An enumeration.',\n      enum: [        'pending',\n        'added'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      access_ip_address_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['access_ip_address_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { access_ip_address_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.accessIPAddress.retrieve(access_ip_address_id)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
