// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'fqdn_connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fqdn_connections',
  operationId: 'ListFqdnConnections',
};

export const tool: Tool = {
  name: 'list_fqdn_connections',
  description: 'Returns a list of your FQDN connections.',
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
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.fqdnConnections.list(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
