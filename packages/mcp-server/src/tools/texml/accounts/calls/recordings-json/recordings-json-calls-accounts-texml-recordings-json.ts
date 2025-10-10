// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls.recordings_json',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings.json',
  operationId: 'StartTeXMLCallRecording',
};

export const tool: Tool = {
  name: 'recordings_json_calls_accounts_texml_recordings_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStarts recording with specified parameters for call idientified by call_sid.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recordings_json_recordings_json_response',\n  $defs: {\n    recordings_json_recordings_json_response: {\n      type: 'object',\n      title: 'Texml Create Call Recording Response Body',\n      properties: {\n        account_sid: {\n          type: 'string'\n        },\n        call_sid: {\n          type: 'string'\n        },\n        channels: {\n          type: 'string',\n          enum: [            1,\n            2\n          ]\n        },\n        conference_sid: {\n          type: 'string'\n        },\n        date_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        date_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'The duration of this recording, given in seconds.'\n        },\n        error_code: {\n          type: 'string'\n        },\n        price: {\n          type: 'string',\n          description: 'The price of this recording, the currency is specified in the price_unit field. '\n        },\n        price_unit: {\n          type: 'string',\n          description: 'The unit in which the price is given.'\n        },\n        sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        source: {\n          type: 'string',\n          description: 'Defines how the recording was created.',\n          enum: [            'StartCallRecordingAPI',\n            'StartConferenceRecordingAPI',\n            'OutboundAPI',\n            'DialVerb',\n            'Conference',\n            'RecordVerb',\n            'Trunking'\n          ]\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        track: {\n          type: 'string',\n          description: 'The audio track to record for the call. The default is `both`.',\n          enum: [            'inbound',\n            'outbound',\n            'both'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this recording resource.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      PlayBeep: {
        type: 'boolean',
        description: 'Whether to play a beep when recording is started.',
      },
      RecordingChannels: {
        type: 'string',
        description:
          'When `dual`, final audio file has the first leg on channel A, and the rest on channel B. `single` mixes both tracks into a single channel.',
        enum: ['single', 'dual'],
      },
      RecordingStatusCallback: {
        type: 'string',
        description: 'Url where status callbacks will be sent.',
      },
      RecordingStatusCallbackEvent: {
        type: 'string',
        description:
          "The changes to the recording's state that should generate a call to `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`. Separate multiple values with a space. Defaults to `completed`.",
      },
      RecordingStatusCallbackMethod: {
        type: 'string',
        description: 'HTTP method used to send status callbacks.',
        enum: ['GET', 'POST'],
      },
      RecordingTrack: {
        type: 'string',
        description: 'The audio track to record for the call. The default is `both`.',
        enum: ['inbound', 'outbound', 'both'],
      },
      SendRecordingUrl: {
        type: 'boolean',
        description: 'Whether to send RecordingUrl in webhooks.',
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
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.calls.recordingsJson.recordingsJson(call_sid, body),
    ),
  );
};

export default { metadata, tool, handler };
