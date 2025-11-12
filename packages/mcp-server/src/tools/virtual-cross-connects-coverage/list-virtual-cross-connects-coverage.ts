// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'virtual_cross_connects_coverage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/virtual_cross_connects_coverage',
  operationId: 'ListVirtualCrossConnectCoverage',
};

export const tool: Tool = {
  name: 'list_virtual_cross_connects_coverage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Virtual Cross Connects Cloud Coverage.<br /><br />This endpoint shows which cloud regions are available for the `location_code` your Virtual Cross Connect will be provisioned in.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/virtual_cross_connects_coverage_list_response',\n  $defs: {\n    virtual_cross_connects_coverage_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'VirtualCrossConnectCoverage',\n            properties: {\n              available_bandwidth: {\n                type: 'array',\n                description: 'The available throughput in Megabits per Second (Mbps) for your Virtual Cross Connect.',\n                items: {\n                  type: 'number'\n                }\n              },\n              cloud_provider: {\n                type: 'string',\n                description: 'The Virtual Private Cloud with which you would like to establish a cross connect.',\n                enum: [                  'aws',\n                  'azure',\n                  'gce'\n                ]\n              },\n              cloud_provider_region: {\n                type: 'string',\n                description: 'The region where your Virtual Private Cloud hosts are located. Should be identical to how the cloud provider names region, i.e. us-east-1 for AWS but Frankfurt for Azure'\n              },\n              location: {\n                type: 'object',\n                title: 'Location',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'Location code.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Human readable name of location.'\n                  },\n                  pop: {\n                    type: 'string',\n                    description: 'Point of presence of location.'\n                  },\n                  region: {\n                    type: 'string',\n                    description: 'Identifies the geographical region of location.'\n                  },\n                  site: {\n                    type: 'string',\n                    description: 'Site of location.'\n                  }\n                }\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[cloud_provider], filter[cloud_provider_region], filter[location.region], filter[location.site], filter[location.pop], filter[location.code]',
        properties: {
          cloud_provider: {
            type: 'string',
            description: 'The Virtual Private Cloud provider.',
            enum: ['aws', 'azure', 'gce'],
          },
          cloud_provider_region: {
            type: 'string',
            description: 'The region of specific cloud provider.',
          },
          'location.code': {
            type: 'string',
            description: 'The code of associated location to filter on.',
          },
          'location.pop': {
            type: 'string',
            description: 'The POP of associated location to filter on.',
          },
          'location.region': {
            type: 'string',
            description: 'The region of associated location to filter on.',
          },
          'location.site': {
            type: 'string',
            description: 'The site of associated location to filter on.',
          },
        },
      },
      filters: {
        type: 'object',
        description:
          'Consolidated filters parameter (deepObject style). Originally: filters[available_bandwidth][contains]',
        properties: {
          available_bandwidth: {
            anyOf: [
              {
                type: 'integer',
                description: 'Filter by exact available bandwidth match',
              },
              {
                type: 'object',
                description: 'Available bandwidth filtering operations',
                properties: {
                  contains: {
                    type: 'integer',
                    description: 'Filter by available bandwidth containing the specified value',
                  },
                },
              },
            ],
            description: 'Filter by exact available bandwidth match',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.virtualCrossConnectsCoverage.list(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
