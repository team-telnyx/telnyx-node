// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ips',
  operationId: 'ListIps',
};

export const tool: Tool = {
  name: 'list_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all IPs belonging to the user that match the given filters.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ip_list_response',\n  $defs: {\n    ip_list_response: {\n      type: 'object',\n      title: 'List Ips Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/ip'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/connections_pagination_meta'\n        }\n      }\n    },\n    ip: {\n      type: 'object',\n      title: 'Ip',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'ID of the IP Connection to which this IP should be attached.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        ip_address: {\n          type: 'string',\n          description: 'IP adddress represented by this resource.'\n        },\n        port: {\n          type: 'integer',\n          description: 'Port to use when connecting to this IP.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    },\n    connections_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[connection_id], filter[ip_address], filter[port]',
        properties: {
          connection_id: {
            type: 'string',
            description: 'ID of the IP Connection to which this IP should be attached.',
          },
          ip_address: {
            type: 'string',
            description: 'IP adddress represented by this resource.',
          },
          port: {
            type: 'integer',
            description: 'Port to use when connecting to this IP.',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.ips.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
