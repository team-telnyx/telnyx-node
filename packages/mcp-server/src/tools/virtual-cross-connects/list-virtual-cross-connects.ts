// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'virtual_cross_connects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/virtual_cross_connects',
  operationId: 'ListVirtualCrossConnects',
};

export const tool: Tool = {
  name: 'list_virtual_cross_connects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Virtual Cross Connects.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/virtual_cross_connect_list_response',\n  $defs: {\n    virtual_cross_connect_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/record'\n              },\n              {\n                $ref: '#/$defs/interface'\n              },\n              {\n                $ref: '#/$defs/region_in'\n              }\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    interface: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'A user specified name for the interface.'\n        },\n        network_id: {\n          type: 'string',\n          description: 'The id of the network associated with the interface.'\n        },\n        status: {\n          $ref: '#/$defs/interface_status'\n        }\n      }\n    },\n    interface_status: {\n      type: 'string',\n      description: 'The current status of the interface deployment.',\n      enum: [        'created',\n        'provisioning',\n        'provisioned',\n        'deleting'\n      ]\n    },\n    region_in: {\n      type: 'object',\n      properties: {\n        region_code: {\n          type: 'string',\n          description: 'The region the interface should be deployed to.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[network_id]',
        properties: {
          network_id: {
            type: 'string',
            description: 'The associated network id to filter on.',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.virtualCrossConnects.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
