// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verified_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/verified_numbers/{phone_number}',
  operationId: 'DeleteVerifiedNumber',
};

export const tool: Tool = {
  name: 'delete_verified_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a verified number\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verified_number_data_wrapper',\n  $defs: {\n    verified_number_data_wrapper: {\n      type: 'object',\n      title: 'VerifiedNumberResponseDataWrapper',\n      properties: {\n        data: {\n          $ref: '#/$defs/verified_number'\n        }\n      }\n    },\n    verified_number: {\n      type: 'object',\n      title: 'VerifiedNumberResponse',\n      properties: {\n        phone_number: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string',\n          title: 'VerifiedNumberRecordType',\n          description: 'The possible verified numbers record types.',\n          enum: [            'verified_number'\n          ]\n        },\n        verified_at: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number: {
        type: 'string',
        description: '+E164 formatted phone number.',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.verifiedNumbers.delete(phone_number)));
};

export default { metadata, tool, handler };
