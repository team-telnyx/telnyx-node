// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'addresses.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/addresses/actions/validate',
  operationId: 'ValidateAddress',
};

export const tool: Tool = {
  name: 'validate_addresses_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidates an address for emergency services.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_validate_response',\n  $defs: {\n    action_validate_response: {\n      type: 'object',\n      title: 'Validate address action response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Validate address action result',\n          properties: {\n            result: {\n              type: 'string',\n              description: 'Indicates whether an address is valid or invalid.',\n              enum: [                'valid',\n                'invalid'\n              ]\n            },\n            suggested: {\n              type: 'object',\n              description: 'Provides normalized address when available.',\n              properties: {\n                administrative_area: {\n                  type: 'string',\n                  description: 'The locality of the address. For US addresses, this corresponds to the state of the address.'\n                },\n                country_code: {\n                  type: 'string',\n                  description: 'The two-character (ISO 3166-1 alpha-2) country code of the address.'\n                },\n                extended_address: {\n                  type: 'string',\n                  description: 'Additional street address information about the address such as, but not limited to, unit number or apartment number.'\n                },\n                locality: {\n                  type: 'string',\n                  description: 'The locality of the address. For US addresses, this corresponds to the city of the address.'\n                },\n                postal_code: {\n                  type: 'string',\n                  description: 'The postal code of the address.'\n                },\n                street_address: {\n                  type: 'string',\n                  description: 'The primary street address information about the address.'\n                }\n              }\n            },\n            errors: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/api_error'\n              }\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            }\n          },\n          required: [            'result',\n            'suggested'\n          ]\n        }\n      }\n    },\n    api_error: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        title: {\n          type: 'string'\n        },\n        detail: {\n          type: 'string'\n        },\n        meta: {\n          type: 'object',\n          additionalProperties: true\n        },\n        source: {\n          type: 'object',\n          properties: {\n            parameter: {\n              type: 'string',\n              description: 'Indicates which query parameter caused the error.'\n            },\n            pointer: {\n              type: 'string',\n              description: 'JSON pointer (RFC6901) to the offending entity.'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'title'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country_code: {
        type: 'string',
        description: 'The two-character (ISO 3166-1 alpha-2) country code of the address.',
      },
      postal_code: {
        type: 'string',
        description: 'The postal code of the address.',
      },
      street_address: {
        type: 'string',
        description: 'The primary street address information about the address.',
      },
      administrative_area: {
        type: 'string',
        description:
          'The locality of the address. For US addresses, this corresponds to the state of the address.',
      },
      extended_address: {
        type: 'string',
        description:
          'Additional street address information about the address such as, but not limited to, unit number or apartment number.',
      },
      locality: {
        type: 'string',
        description:
          'The locality of the address. For US addresses, this corresponds to the city of the address.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['country_code', 'postal_code', 'street_address'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.addresses.actions.validate(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
