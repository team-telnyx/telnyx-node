// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'virtual_cross_connects',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/virtual_cross_connects/{id}',
  operationId: 'UpdateVirtualCrossConnect',
};

export const tool: Tool = {
  name: 'update_virtual_cross_connects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/virtual_cross_connect_update_response',\n  $defs: {\n    virtual_cross_connect_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          allOf: [            {\n              $ref: '#/$defs/record'\n            },\n            {\n              $ref: '#/$defs/interface'\n            },\n            {\n              $ref: '#/$defs/region_in'\n            }\n          ]\n        }\n      }\n    },\n    record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    interface: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'A user specified name for the interface.'\n        },\n        network_id: {\n          type: 'string',\n          description: 'The id of the network associated with the interface.'\n        },\n        status: {\n          $ref: '#/$defs/interface_status'\n        }\n      }\n    },\n    interface_status: {\n      type: 'string',\n      description: 'The current status of the interface deployment.',\n      enum: [        'created',\n        'provisioning',\n        'provisioned',\n        'deleting'\n      ]\n    },\n    region_in: {\n      type: 'object',\n      properties: {\n        region_code: {\n          type: 'string',\n          description: 'The region the interface should be deployed to.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      primary_cloud_ip: {
        type: 'string',
        description:
          'The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.',
      },
      primary_enabled: {
        type: 'boolean',
        description:
          'Indicates whether the primary circuit is enabled. Setting this to `false` will disable the circuit.',
      },
      primary_routing_announcement: {
        type: 'boolean',
        description: 'Whether the primary BGP route is being announced.',
      },
      secondary_cloud_ip: {
        type: 'string',
        description:
          'The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.',
      },
      secondary_enabled: {
        type: 'boolean',
        description:
          'Indicates whether the secondary circuit is enabled. Setting this to `false` will disable the circuit.',
      },
      secondary_routing_announcement: {
        type: 'boolean',
        description: 'Whether the secondary BGP route is being announced.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.virtualCrossConnects.update(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
