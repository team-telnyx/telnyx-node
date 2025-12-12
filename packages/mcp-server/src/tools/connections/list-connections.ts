// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections',
  operationId: 'ListConnections',
};

export const tool: Tool = {
  name: 'list_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your connections irrespective of type.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Connections Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/connection_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/connections_pagination_meta'\n    }\n  },\n  $defs: {\n    connection_list_response: {\n      type: 'object',\n      title: 'Connection',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the specific resource.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Defaults to true'\n        },\n        anchorsite_override: {\n          $ref: '#/$defs/anchorsite_override'\n        },\n        connection_name: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        outbound_voice_profile_id: {\n          type: 'string',\n          title: 'Outbound Voice Profile ID',\n          description: 'Identifies the associated outbound voice profile.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the connection.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        webhook_api_version: {\n          type: 'string',\n          description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',\n          enum: [            '1',\n            '2'\n          ]\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this connection will be sent.'\n        }\n      }\n    },\n    anchorsite_override: {\n      type: 'string',\n      title: 'Anchorsite Override',\n      description: '`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user\\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.',\n      enum: [        'Latency',\n        'Chicago, IL',\n        'Ashburn, VA',\n        'San Jose, CA',\n        'Sydney, Australia',\n        'Amsterdam, Netherlands',\n        'London, UK',\n        'Toronto, Canada',\n        'Vancouver, Canada',\n        'Frankfurt, Germany'\n      ]\n    },\n    connections_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id], filter[outbound.outbound_voice_profile_id]',
        properties: {
          connection_name: {
            type: 'object',
            description: 'Filter by connection_name using nested operations',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.',
              },
            },
          },
          fqdn: {
            type: 'string',
            description:
              'If present, connections with an `fqdn` that equals the given value will be returned. Matching is case-sensitive, and the full string must match.',
          },
          outbound_voice_profile_id: {
            type: 'string',
            description: 'Identifies the associated outbound voice profile.',
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
      sort: {
        type: 'string',
        description:
          'Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.',
        enum: ['created_at', 'connection_name', 'active'],
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
  const response = await client.connections.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
