// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls.streams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Streams/{streaming_sid}.json',
  operationId: 'UpdateTeXMLCallStreaming',
};

export const tool: Tool = {
  name: 'streaming_sid_json_calls_accounts_texml_streams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates streaming resource for particular call.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Texml Update Call Streaming Response Body',\n  properties: {\n    account_sid: {\n      type: 'string'\n    },\n    call_sid: {\n      type: 'string'\n    },\n    date_updated: {\n      type: 'string',\n      format: 'date-time'\n    },\n    sid: {\n      type: 'string',\n      description: 'Identifier of a resource.'\n    },\n    status: {\n      type: 'string',\n      description: 'The status of the streaming.',\n      enum: [        'stopped'\n      ]\n    },\n    uri: {\n      type: 'string',\n      description: 'The relative URI for this streaming resource.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      streaming_sid: {
        type: 'string',
      },
      Status: {
        type: 'string',
        description: 'The status of the Stream you wish to update.',
        enum: ['stopped'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'call_sid', 'streaming_sid'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { streaming_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.calls.streams.streamingSidJson(streaming_sid, body),
    ),
  );
};

export default { metadata, tool, handler };
