// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Streams.json',
  operationId: 'StartTeXMLCallStreaming',
};

export const tool: Tool = {
  name: 'streams_json_accounts_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStarts streaming media from a call to a specific WebSocket address.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_streams_json_response',\n  $defs: {\n    call_streams_json_response: {\n      type: 'object',\n      title: 'Texml Create Call Streaming Response Body',\n      properties: {\n        account_sid: {\n          type: 'string'\n        },\n        call_sid: {\n          type: 'string'\n        },\n        date_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The user specified name of Stream.'\n        },\n        sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the streaming.',\n          enum: [            'in-progress'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this streaming resource.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      BidirectionalCodec: {
        type: 'string',
        title: 'Stream Bidirectional Codec',
        description:
          'Indicates codec for bidirectional streaming RTP payloads. Used only with stream_bidirectional_mode=rtp. Case sensitive.',
        enum: ['PCMU', 'PCMA', 'G722'],
      },
      BidirectionalMode: {
        type: 'string',
        title: 'Stream Bidirectional Mode',
        description: 'Configures method of bidirectional streaming (mp3, rtp).',
        enum: ['mp3', 'rtp'],
      },
      Name: {
        type: 'string',
        description: 'The user specified name of Stream.',
      },
      StatusCallback: {
        type: 'string',
        description: 'Url where status callbacks will be sent.',
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'HTTP method used to send status callbacks.',
        enum: ['GET', 'POST'],
      },
      Track: {
        type: 'string',
        description: 'Tracks to be included in the stream',
        enum: ['inbound_track', 'outbound_track', 'both_tracks'],
      },
      Url: {
        type: 'string',
        title: 'Stream destination URL',
        description: 'The destination WebSocket address where the stream is going to be delivered.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.texml.accounts.calls.streamsJson(call_sid, body)),
  );
};

export default { metadata, tool, handler };
