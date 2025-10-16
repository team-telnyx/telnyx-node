// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'country_coverage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/country_coverage/countries/{country_code}',
  operationId: 'retreiveSpecificCountryCoverage',
};

export const tool: Tool = {
  name: 'retrieve_country_country_coverage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet coverage for a specific country\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/country_coverage_retrieve_country_response',\n  $defs: {\n    country_coverage_retrieve_country_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            code: {\n              type: 'string',\n              description: 'Country ISO code'\n            },\n            features: {\n              type: 'array',\n              description: 'Set of features supported',\n              items: {\n                type: 'string'\n              }\n            },\n            international_sms: {\n              type: 'boolean'\n            },\n            inventory_coverage: {\n              type: 'boolean',\n              description: 'Indicates whether country can be queried with inventory coverage endpoint'\n            },\n            local: {\n              type: 'object',\n              properties: {\n                features: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                full_pstn_replacement: {\n                  type: 'boolean'\n                },\n                international_sms: {\n                  type: 'boolean'\n                },\n                p2p: {\n                  type: 'boolean'\n                },\n                quickship: {\n                  type: 'boolean'\n                },\n                reservable: {\n                  type: 'boolean'\n                }\n              }\n            },\n            mobile: {\n              type: 'object',\n              additionalProperties: true\n            },\n            national: {\n              type: 'object',\n              additionalProperties: true\n            },\n            numbers: {\n              type: 'boolean'\n            },\n            p2p: {\n              type: 'boolean'\n            },\n            phone_number_type: {\n              type: 'array',\n              description: 'Phone number type',\n              items: {\n                type: 'string'\n              }\n            },\n            quickship: {\n              type: 'boolean',\n              description: 'Supports quickship'\n            },\n            region: {\n              type: 'string',\n              description: 'Geographic region (e.g., AMER, EMEA, APAC)'\n            },\n            reservable: {\n              type: 'boolean',\n              description: 'Supports reservable'\n            },\n            shared_cost: {\n              type: 'object',\n              additionalProperties: true\n            },\n            toll_free: {\n              type: 'object',\n              properties: {\n                features: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                full_pstn_replacement: {\n                  type: 'boolean'\n                },\n                international_sms: {\n                  type: 'boolean'\n                },\n                p2p: {\n                  type: 'boolean'\n                },\n                quickship: {\n                  type: 'boolean'\n                },\n                reservable: {\n                  type: 'boolean'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country_code: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['country_code'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { country_code, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.countryCoverage.retrieveCountry(country_code)),
  );
};

export default { metadata, tool, handler };
