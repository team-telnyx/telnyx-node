// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_lookup',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/number_lookup/{phone_number}',
  operationId: 'LookupNumber',
};

export const tool: Tool = {
  name: 'retrieve_number_lookup',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns information about the provided phone number.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_lookup_retrieve_response',\n  $defs: {\n    number_lookup_retrieve_response: {\n      type: 'object',\n      title: 'Number Lookup Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'NumberLookup',\n          properties: {\n            caller_name: {\n              type: 'object',\n              properties: {\n                caller_name: {\n                  type: 'string',\n                  description: 'The name of the requested phone number\\'s owner as per the CNAM database'\n                },\n                error_code: {\n                  type: 'string',\n                  description: 'A caller-name lookup specific error code, expressed as a stringified 5-digit integer'\n                }\n              }\n            },\n            carrier: {\n              type: 'object',\n              properties: {\n                error_code: {\n                  type: 'string',\n                  description: 'Unused'\n                },\n                mobile_country_code: {\n                  type: 'string',\n                  description: 'Region code that matches the specific country calling code if the requested phone number type is mobile'\n                },\n                mobile_network_code: {\n                  type: 'string',\n                  description: 'National destination code (NDC), with a 0 prefix, if an NDC is found and the requested phone number type is mobile'\n                },\n                name: {\n                  type: 'string',\n                  description: 'SPID (Service Provider ID) name, if the requested phone number has been ported; otherwise, the name of carrier who owns the phone number block'\n                },\n                normalized_carrier: {\n                  type: 'string',\n                  description: 'If known to Telnyx and applicable, the primary network carrier.'\n                },\n                type: {\n                  type: 'string',\n                  description: 'A phone number type that identifies the type of service associated with the requested phone number',\n                  enum: [                    'fixed line',\n                    'mobile',\n                    'voip',\n                    'fixed line or mobile',\n                    'toll free',\n                    'premium rate',\n                    'shared cost',\n                    'personal number',\n                    'pager',\n                    'uan',\n                    'voicemail',\n                    'unknown'\n                  ]\n                }\n              }\n            },\n            country_code: {\n              type: 'string',\n              description: 'Region code that matches the specific country calling code'\n            },\n            fraud: {\n              type: 'string',\n              description: 'Unused'\n            },\n            national_format: {\n              type: 'string',\n              description: 'Hyphen-separated national number, preceded by the national destination code (NDC), with a 0 prefix, if an NDC is found'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'E164-formatted phone number'\n            },\n            portability: {\n              type: 'object',\n              properties: {\n                altspid: {\n                  type: 'string',\n                  description: 'Alternative SPID (Service Provider ID). Often used when a carrier is using a number from another carrier'\n                },\n                altspid_carrier_name: {\n                  type: 'string',\n                  description: 'Alternative service provider name'\n                },\n                altspid_carrier_type: {\n                  type: 'string',\n                  description: 'Alternative service provider type'\n                },\n                city: {\n                  type: 'string',\n                  description: 'City name extracted from the locality in the Local Exchange Routing Guide (LERG) database'\n                },\n                line_type: {\n                  type: 'string',\n                  description: 'Type of number'\n                },\n                lrn: {\n                  type: 'string',\n                  description: 'Local Routing Number, if assigned to the requested phone number'\n                },\n                ocn: {\n                  type: 'string',\n                  description: 'Operating Company Name (OCN) as per the Local Exchange Routing Guide (LERG) database'\n                },\n                ported_date: {\n                  type: 'string',\n                  description: 'ISO-formatted date when the requested phone number has been ported'\n                },\n                ported_status: {\n                  type: 'string',\n                  description: 'Indicates whether or not the requested phone number has been ported',\n                  enum: [                    'Y',\n                    'N',\n                    ''\n                  ]\n                },\n                spid: {\n                  type: 'string',\n                  description: 'SPID (Service Provider ID)'\n                },\n                spid_carrier_name: {\n                  type: 'string',\n                  description: 'Service provider name'\n                },\n                spid_carrier_type: {\n                  type: 'string',\n                  description: 'Service provider type'\n                },\n                state: {\n                  type: 'string'\n                }\n              }\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of record'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'Specifies the type of number lookup to be performed',
        enum: ['carrier', 'caller-name'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_number'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.numberLookup.retrieve(phone_number, body)),
  );
};

export default { metadata, tool, handler };
