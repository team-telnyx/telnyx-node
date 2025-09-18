// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'access_ip_ranges',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/access_ip_ranges/{access_ip_range_id}',
};

export const tool: Tool = {
  name: 'delete_access_ip_ranges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete access IP ranges\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_ip_range',\n  $defs: {\n    access_ip_range: {\n      type: 'object',\n      title: 'AccessIPRangeResponseSchema',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        cidr_block: {\n          type: 'string',\n          title: 'Cidr Block'\n        },\n        status: {\n          $ref: '#/$defs/cloudflare_sync_status'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'cidr_block',\n        'status',\n        'user_id'\n      ]\n    },\n    cloudflare_sync_status: {\n      type: 'string',\n      title: 'CloudflareSyncStatus',\n      description: 'An enumeration.',\n      enum: [        'pending',\n        'added'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      access_ip_range_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['access_ip_range_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { access_ip_range_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.accessIPRanges.delete(access_ip_range_id)),
  );
};

export default { metadata, tool, handler };
