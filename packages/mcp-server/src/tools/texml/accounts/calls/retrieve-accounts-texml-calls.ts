// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}',
  operationId: 'GetTexmlCall',
};

export const tool: Tool = {
  name: 'retrieve_accounts_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns an individual call identified by its CallSid. This endpoint is eventually consistent.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_retrieve_response',\n  $defs: {\n    call_retrieve_response: {\n      type: 'object',\n      title: 'Call resource',\n      properties: {\n        account_sid: {\n          type: 'string',\n          description: 'The id of the account the resource belongs to.'\n        },\n        answered_by: {\n          type: 'string',\n          description: 'The value of the answering machine detection result, if this feature was enabled for the call.',\n          enum: [            'human',\n            'machine',\n            'not_sure'\n          ]\n        },\n        caller_name: {\n          type: 'string',\n          description: 'Caller ID, if present.'\n        },\n        date_created: {\n          type: 'string',\n          description: 'The timestamp of when the resource was created.'\n        },\n        date_updated: {\n          type: 'string',\n          description: 'The timestamp of when the resource was last updated.'\n        },\n        direction: {\n          type: 'string',\n          description: 'The direction of this call.',\n          enum: [            'inbound',\n            'outbound'\n          ]\n        },\n        duration: {\n          type: 'string',\n          description: 'The duration of this call, given in seconds.'\n        },\n        end_time: {\n          type: 'string',\n          description: 'The end time of this call.'\n        },\n        from: {\n          type: 'string',\n          description: 'The phone number or SIP address that made this call.'\n        },\n        from_formatted: {\n          type: 'string',\n          description: 'The from number formatted for display.'\n        },\n        price: {\n          type: 'string',\n          description: 'The price of this call, the currency is specified in the price_unit field. Only populated when the call cost feature is enabled for the account.'\n        },\n        price_unit: {\n          type: 'string',\n          description: 'The unit in which the price is given.'\n        },\n        sid: {\n          type: 'string',\n          description: 'The identifier of this call.'\n        },\n        start_time: {\n          type: 'string',\n          description: 'The start time of this call.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of this call.',\n          enum: [            'ringing',\n            'in-progress',\n            'canceled',\n            'completed',\n            'failed',\n            'busy',\n            'no-answer'\n          ]\n        },\n        to: {\n          type: 'string',\n          description: 'The phone number or SIP address that received this call.'\n        },\n        to_formatted: {\n          type: 'string',\n          description: 'The to number formatted for display.'\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this call.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'call_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.texml.accounts.calls.retrieve(call_sid, body)),
  );
};

export default { metadata, tool, handler };
