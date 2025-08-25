// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'wireguard_peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/wireguard_peers',
  operationId: 'CreateWireguardPeer',
};

export const tool: Tool = {
  name: 'create_wireguard_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new WireGuard Peer. Current limitation of 5 peers per interface can be created.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      allOf: [        {\n          $ref: '#/$defs/record'\n        },\n        {\n          $ref: '#/$defs/wireguard_peer_patch'\n        }\n      ]\n    }\n  },\n  $defs: {\n    record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    wireguard_peer_patch: {\n      type: 'object',\n      title: 'WireguardPeerPatch',\n      properties: {\n        public_key: {\n          type: 'string',\n          description: 'The WireGuard `PublicKey`.<br /><br />If you do not provide a Public Key, a new Public and Private key pair will be generated for you.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      wireguard_interface_id: {
        type: 'string',
        description: 'The id of the wireguard interface associated with the peer.',
      },
      public_key: {
        type: 'string',
        description:
          'The WireGuard `PublicKey`.<br /><br />If you do not provide a Public Key, a new Public and Private key pair will be generated for you.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['wireguard_interface_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.wireguardPeers.create(body)));
};

export default { metadata, tool, handler };
