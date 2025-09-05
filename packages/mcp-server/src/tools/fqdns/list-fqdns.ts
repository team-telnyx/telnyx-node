// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'fqdns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fqdns',
  operationId: 'ListFqdns',
};

export const tool: Tool = {
  name: 'list_fqdns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all FQDNs belonging to the user that match the given filters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List FQDNs Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/fqdn'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/connections_pagination_meta'\n    }\n  },\n  $defs: {\n    fqdn: {\n      type: 'object',\n      title: 'Fqdn',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'ID of the FQDN connection to which this FQDN is attached.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        dns_record_type: {\n          type: 'string',\n          description: 'The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be \\'srv\\'. For cases where a port is set, the DNS record type must be \\'a\\'. If the DNS record type is \\'a\\' and a port is not specified, 5060 will be used.'\n        },\n        fqdn: {\n          type: 'string',\n          description: 'FQDN represented by this resource.'\n        },\n        port: {\n          type: 'integer',\n          description: 'Port to use when connecting to this FQDN.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    },\n    connections_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[connection_id], filter[fqdn], filter[port], filter[dns_record_type]',
        properties: {
          connection_id: {
            type: 'string',
            description: 'ID of the FQDN connection to which the FQDN belongs.',
          },
          dns_record_type: {
            type: 'string',
            description: 'DNS record type used by the FQDN.',
          },
          fqdn: {
            type: 'string',
            description: 'FQDN represented by the resource.',
          },
          port: {
            type: 'integer',
            description: 'Port to use when connecting to the FQDN.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.fqdns.list(body)));
};

export default { metadata, tool, handler };
