// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'networks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/networks/{id}/network_interfaces',
  operationId: 'ListNetworkInterfaces',
};

export const tool: Tool = {
  name: 'list_interfaces_networks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Interfaces for a Network.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        allOf: [          {\n            $ref: '#/$defs/record'\n          },\n          {\n            $ref: '#/$defs/interface'\n          }\n        ]\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    interface: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'A user specified name for the interface.'\n        },\n        network_id: {\n          type: 'string',\n          description: 'The id of the network associated with the interface.'\n        },\n        status: {\n          $ref: '#/$defs/interface_status'\n        }\n      }\n    },\n    interface_status: {\n      type: 'string',\n      description: 'The current status of the interface deployment.',\n      enum: [        'created',\n        'provisioning',\n        'provisioned',\n        'deleting'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[name], filter[type], filter[status]',
        properties: {
          name: {
            type: 'string',
            description: 'The interface name to filter on.',
          },
          status: {
            $ref: '#/$defs/interface_status',
          },
          type: {
            type: 'string',
            description: 'The interface type to filter on.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
    $defs: {
      interface_status: {
        type: 'string',
        description: 'The current status of the interface deployment.',
        enum: ['created', 'provisioning', 'provisioned', 'deleting'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.networks.listInterfaces(id, body)));
};

export default { metadata, tool, handler };
