// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.voicemail',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_numbers/{phone_number_id}/voicemail',
  operationId: 'GetVoicemail',
};

export const tool: Tool = {
  name: 'retrieve_phone_numbers_voicemail',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the voicemail settings for a phone number\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/voicemail_retrieve_response',\n  $defs: {\n    voicemail_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/voicemail_pref_response'\n        }\n      }\n    },\n    voicemail_pref_response: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'Whether voicemail is enabled.'\n        },\n        pin: {\n          type: 'string',\n          description: 'The pin used for the voicemail.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_number_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_number_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.phoneNumbers.voicemail.retrieve(phone_number_id)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
