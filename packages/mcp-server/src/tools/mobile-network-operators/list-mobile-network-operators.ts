// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'mobile_network_operators',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/mobile_network_operators',
  operationId: 'GetMobileNetworkOperators',
};

export const tool: Tool = {
  name: 'list_mobile_network_operators',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTelnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won't allow any write operations for it. Still, it's available so it can be used as a support resource that can be related to other resources or become a configuration option.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mobile_network_operator_list_response',\n  $defs: {\n    mobile_network_operator_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'MobileNetworkOperator',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the resource.'\n              },\n              country_code: {\n                type: 'string',\n                description: 'The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.'\n              },\n              mcc: {\n                type: 'string',\n                description: 'MCC stands for Mobile Country Code. It\\'s a three decimal digit that identifies a country.<br/><br/>\\nThis code is commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.'\n              },\n              mnc: {\n                type: 'string',\n                description: 'MNC stands for Mobile Network Code. It\\'s a two to three decimal digits that identify a network.<br/><br/>\\n This code is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.'\n              },\n              name: {\n                type: 'string',\n                description: 'The network operator name.'\n              },\n              network_preferences_enabled: {\n                type: 'boolean',\n                description: 'Indicate whether the mobile network operator can be set as preferred in the Network Preferences API.'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              tadig: {\n                type: 'string',\n                description: 'TADIG stands for Transferred Account Data Interchange Group. The TADIG code is a unique identifier for network operators in GSM mobile networks.'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for mobile network operators (deepObject style). Originally: filter[name][starts_with], filter[name][contains], filter[name][ends_with], filter[country_code], filter[mcc], filter[mnc], filter[tadig], filter[network_preferences_enabled]',
        properties: {
          country_code: {
            type: 'string',
            description: 'Filter by exact country_code.',
          },
          mcc: {
            type: 'string',
            description: 'Filter by exact MCC.',
          },
          mnc: {
            type: 'string',
            description: 'Filter by exact MNC.',
          },
          name: {
            type: 'object',
            description: 'Advanced name filtering operations',
            properties: {
              contains: {
                type: 'string',
                description: 'Filter by name containing match.',
              },
              ends_with: {
                type: 'string',
                description: 'Filter by name ending with.',
              },
              starts_with: {
                type: 'string',
                description: 'Filter by name starting with.',
              },
            },
          },
          network_preferences_enabled: {
            type: 'boolean',
            description: 'Filter by network_preferences_enabled.',
          },
          tadig: {
            type: 'string',
            description: 'Filter by exact TADIG.',
          },
        },
      },
      page: {
        type: 'object',
        description:
          'Consolidated pagination parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.mobileNetworkOperators.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
