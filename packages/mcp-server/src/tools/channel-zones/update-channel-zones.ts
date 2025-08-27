// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'channel_zones',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/channel_zones/{channel_zone_id}',
  operationId: 'PatchChannelZone',
};

export const tool: Tool = {
  name: 'update_channel_zones',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the number of Voice Channels for the Non-US Zones. This allows your account to handle multiple simultaneous inbound calls to Non-US numbers. Use this endpoint to increase or decrease your capacity based on expected call volume.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Channel zone object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    channels: {\n      type: 'integer'\n    },\n    countries: {\n      type: 'array',\n      description: 'List of countries (in ISO 3166-2, capitalized) members of the billing channel zone',\n      items: {\n        type: 'string'\n      }\n    },\n    name: {\n      type: 'string'\n    },\n    record_type: {\n      type: 'string',\n      enum: [        'channel_zone'\n      ]\n    },\n    created_at: {\n      type: 'string',\n      description: 'ISO 8601 formatted date of when the channel zone was created'\n    },\n    updated_at: {\n      type: 'string',\n      description: 'ISO 8601 formatted date of when the channel zone was updated'\n    }\n  },\n  required: [    'id',\n    'channels',\n    'countries',\n    'name',\n    'record_type'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_zone_id: {
        type: 'string',
      },
      channels: {
        type: 'integer',
        description: 'The number of reserved channels',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['channel_zone_id', 'channels'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { channel_zone_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.channelZones.update(channel_zone_id, body)),
  );
};

export default { metadata, tool, handler };
