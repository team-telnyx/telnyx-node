// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Calls',
  operationId: 'GetTexmlCalls',
};

export const tool: Tool = {
  name: 'retrieve_calls_accounts_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns multiple call resouces for an account. This endpoint is eventually consistent.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Multiple call resources',\n  properties: {\n    calls: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Call resource',\n        properties: {\n          account_sid: {\n            type: 'string',\n            description: 'The id of the account the resource belongs to.'\n          },\n          answered_by: {\n            type: 'string',\n            description: 'The value of the answering machine detection result, if this feature was enabled for the call.',\n            enum: [              'human',\n              'machine',\n              'not_sure'\n            ]\n          },\n          caller_name: {\n            type: 'string',\n            description: 'Caller ID, if present.'\n          },\n          date_created: {\n            type: 'string',\n            description: 'The timestamp of when the resource was created.'\n          },\n          date_updated: {\n            type: 'string',\n            description: 'The timestamp of when the resource was last updated.'\n          },\n          direction: {\n            type: 'string',\n            description: 'The direction of this call.',\n            enum: [              'inbound',\n              'outbound'\n            ]\n          },\n          duration: {\n            type: 'string',\n            description: 'The duration of this call, given in seconds.'\n          },\n          end_time: {\n            type: 'string',\n            description: 'The end time of this call.'\n          },\n          from: {\n            type: 'string',\n            description: 'The phone number or SIP address that made this call.'\n          },\n          from_formatted: {\n            type: 'string',\n            description: 'The from number formatted for display.'\n          },\n          price: {\n            type: 'string',\n            description: 'The price of this call, the currency is specified in the price_unit field. Only populated when the call cost feature is enabled for the account.'\n          },\n          price_unit: {\n            type: 'string',\n            description: 'The unit in which the price is given.'\n          },\n          sid: {\n            type: 'string',\n            description: 'The identifier of this call.'\n          },\n          start_time: {\n            type: 'string',\n            description: 'The start time of this call.'\n          },\n          status: {\n            type: 'string',\n            description: 'The status of this call.',\n            enum: [              'ringing',\n              'in-progress',\n              'canceled',\n              'completed',\n              'failed',\n              'busy',\n              'no-answer'\n            ]\n          },\n          to: {\n            type: 'string',\n            description: 'The phone number or SIP address that received this call.'\n          },\n          to_formatted: {\n            type: 'string',\n            description: 'The to number formatted for display.'\n          },\n          uri: {\n            type: 'string',\n            description: 'The relative URI for this call.'\n          }\n        }\n      }\n    },\n    end: {\n      type: 'integer',\n      description: 'The number of the last element on the page, zero-indexed.'\n    },\n    first_page_uri: {\n      type: 'string',\n      description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Calls.json?Page=0&PageSize=1'\n    },\n    next_page_uri: {\n      type: 'string',\n      description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Calls.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ'\n    },\n    page: {\n      type: 'integer',\n      description: 'Current page number, zero-indexed.'\n    },\n    page_size: {\n      type: 'integer',\n      description: 'The number of items on the page'\n    },\n    start: {\n      type: 'integer',\n      description: 'The number of the first element on the page, zero-indexed.'\n    },\n    uri: {\n      type: 'string',\n      description: 'The URI of the current page.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      EndTime: {
        type: 'string',
        description: 'Filters calls by their end date. Expected format is YYYY-MM-DD',
      },
      EndTime_gt: {
        type: 'string',
        description: 'Filters calls by their end date (after). Expected format is YYYY-MM-DD',
      },
      EndTime_lt: {
        type: 'string',
        description: 'Filters calls by their end date (before). Expected format is YYYY-MM-DD',
      },
      From: {
        type: 'string',
        description: 'Filters calls by the from number.',
      },
      Page: {
        type: 'integer',
        description:
          'The number of the page to be displayed, zero-indexed, should be used in conjuction with PageToken.',
      },
      PageSize: {
        type: 'integer',
        description: 'The number of records to be displayed on a page',
      },
      PageToken: {
        type: 'string',
        description: 'Used to request the next page of results.',
      },
      StartTime: {
        type: 'string',
        description: 'Filters calls by their start date. Expected format is YYYY-MM-DD.',
      },
      StartTime_gt: {
        type: 'string',
        description: 'Filters calls by their start date (after). Expected format is YYYY-MM-DD',
      },
      StartTime_lt: {
        type: 'string',
        description: 'Filters calls by their start date (before). Expected format is YYYY-MM-DD',
      },
      Status: {
        type: 'string',
        description: 'Filters calls by status.',
        enum: ['canceled', 'completed', 'failed', 'busy', 'no-answer'],
      },
      To: {
        type: 'string',
        description: 'Filters calls by the to number.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { account_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.texml.accounts.calls.retrieveCalls(account_sid, body)),
  );
};

export default { metadata, tool, handler };
